"""Aggregate-only adaptation of the existing 180s TypeScript diagnostic observer.

No raw compiler logs, trace events, source paths or messages are retained.
This is an observer, not a sandbox: run only the reviewed compiler command.
"""
from __future__ import annotations

import collections
import os
import math
import re
import resource
import signal
import subprocess
import threading
import time
from pathlib import Path


COUNT_KEYS = {
    "Files", "Lines of Library", "Lines of Definitions", "Lines of TypeScript",
    "Lines of JavaScript", "Lines of JSON", "Lines of Other", "Identifiers",
    "Symbols", "Types", "Instantiations", "Assignability cache size",
    "Identity cache size", "Subtype cache size", "Strict subtype cache size",
}
TIME_KEYS = {
    "I/O Read time", "I/O Write time", "Parse time", "ResolveModule time",
    "ResolveTypeReference time", "ResolveLibrary time", "Program time",
    "Bind time", "Check time", "transformTime time", "printTime time",
    "Emit time", "Total time",
}


def numeric(raw, *, integral=False):
    if len(raw) > 32 or (integral and not raw.isdigit()):
        raise ValueError("Invalid numeric measurement")
    value = int(raw) if integral else float(raw)
    if not math.isfinite(value) or not 0 <= value <= 2**53 - 1:
        raise ValueError("Invalid numeric measurement")
    return value


class Aggregate:
    def __init__(self):
        self.diagnostic_codes = collections.Counter()
        self.metrics = {}
        self.gc_events = collections.Counter()
        self.gc_pause_ms = 0.0
        self.oom = False
        self.fragments = 0

    def feed(self, line: str):
        # Only constant allowlisted labels and numeric values can reach the result.
        self.fragments += 1
        if line.startswith("FATAL ERROR:") and (
            "heap out of memory" in line or "heap limit" in line
        ):
            self.oom = True
        header = re.match(r"^(?:.+?\(\d+,\d+\): )?error TS(\d{3,6}):", line)
        if header:
            self.diagnostic_codes[header.group(1)] += 1
        match = re.fullmatch(r"\s*([^:\r\n]+):\s*([0-9]+(?:\.[0-9]+)?)([Ks]?)\s*", line)
        if match:
            key, number, unit = match.groups()
            if key in COUNT_KEYS and unit == "":
                self.metrics[key] = numeric(number, integral=True)
            elif key in TIME_KEYS and unit == "s":
                self.metrics[key] = numeric(number)
            elif key == "Memory used" and unit == "K":
                self.metrics["Memory used KiB"] = numeric(number, integral=True)
        # --trace-gc-nvp supplies numeric metrics, not source paths.
        gc_prefix = re.match(r"^\[\d+:(?:0x)?[0-9a-fA-F]+(?::\d+)?\]\s+\d+\s+ms:", line)
        gc = re.search(r"\bgc=(s|ms|mc|m)\b", line)
        pause = re.search(r"\bpause=([0-9]+(?:\.[0-9]+)?)\b", line)
        if gc_prefix and gc and pause:
            self.gc_events[gc.group(1)] += 1
            self.gc_pause_ms += numeric(pause.group(1))
            if not math.isfinite(self.gc_pause_ms):
                raise ValueError("Invalid aggregate measurement")

    def result(self):
        return {
            "diagnostic_code_counts": dict(sorted(self.diagnostic_codes.items())),
            "extended_diagnostics": dict(sorted(self.metrics.items())),
            "gc_event_counts": dict(sorted(self.gc_events.items())),
            "gc_pause_ms": round(self.gc_pause_ms, 3),
            "oom_marker_seen": self.oom,
        }


def observe(command, cwd, *, limit_seconds=180, grace_seconds=10, env=None,
            completion_marker_required=True):
    """Main-thread Linux observer; never a required gate or an execution sandbox."""
    if not 0 < limit_seconds <= 180 or not 0 < grace_seconds <= 10:
        raise ValueError("Invalid bounded measurement interval")
    if threading.current_thread() is not threading.main_thread():
        raise ValueError("Observer requires the main thread for cancellation cleanup")
    if env:
        raise ValueError("An inherited/custom environment is not supported")
    started = time.monotonic()
    aggregate = Aggregate()
    child_env = {"PATH": os.defpath, "LANG": "C.UTF-8", "TZ": "UTC"}
    child = reader = None
    reader_error = False
    oversized_lines = 0
    cancel_signal = None
    cutoff = killed = unexpected_descendants = False
    samples = sampled_peak_rss_kib = 0

    def disable_core():
        resource.setrlimit(resource.RLIMIT_CORE, (0, 0))

    def request_cancel(signum, _frame):
        nonlocal cancel_signal
        # Setting a flag, instead of raising inside Popen, avoids a spawn/assignment race.
        if cancel_signal is None:
            cancel_signal = signum

    def kill_group(signum):
        try:
            os.killpg(child.pid, signum)
            return True
        except ProcessLookupError:
            return False

    def drain():
        nonlocal reader_error, oversized_lines
        discarding = False
        try:
            while True:
                chunk = child.stdout.readline(65536)
                if not chunk:
                    break
                ends_line = chunk.endswith(b"\n")
                if discarding:
                    if ends_line or len(chunk) < 65536:
                        discarding = False
                    continue
                if len(chunk) == 65536 and not ends_line:
                    oversized_lines += 1
                    discarding = True
                    continue
                aggregate.feed(chunk.decode("utf-8", errors="replace"))
        except BaseException:
            # Never print an exception, line, filename, or source-derived message.
            reader_error = True
        finally:
            child.stdout.close()

    previous = {sig: signal.getsignal(sig) for sig in (signal.SIGINT, signal.SIGTERM)}
    for sig in previous:
        signal.signal(sig, request_cancel)
    try:
        child = subprocess.Popen(
            command, cwd=cwd, env=child_env, stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT, start_new_session=True, preexec_fn=disable_core,
        )
        reader = threading.Thread(target=drain, daemon=True)
        reader.start()
        while True:
            if cancel_signal is not None or reader_error:
                kill_group(signal.SIGKILL)
                _, status, usage = os.wait4(child.pid, 0)
                child.returncode = os.waitstatus_to_exitcode(status)
                break
            pid, status, usage = os.wait4(child.pid, os.WNOHANG)
            if pid:
                child.returncode = os.waitstatus_to_exitcode(status)
                break
            elapsed = time.monotonic() - started
            try:
                for line in Path(f"/proc/{child.pid}/status").read_text().splitlines():
                    if line.startswith("VmRSS:"):
                        sampled_peak_rss_kib = max(sampled_peak_rss_kib, int(line.split()[1]))
                        samples += 1
            except (FileNotFoundError, ProcessLookupError):
                pass
            if not cutoff and elapsed >= limit_seconds:
                cutoff = True
                kill_group(signal.SIGINT)
            elif cutoff and not killed and elapsed >= limit_seconds + grace_seconds:
                killed = True
                kill_group(signal.SIGKILL)
            time.sleep(0.02 if limit_seconds < 5 else 0.2)
    finally:
        # Includes exceptions, normal leader completion, and observer cancellation.
        if child is not None:
            if child.returncode is None:
                kill_group(signal.SIGKILL)
                _, status, usage = os.wait4(child.pid, 0)
                child.returncode = os.waitstatus_to_exitcode(status)
            unexpected_descendants = kill_group(signal.SIGKILL)
            if reader is not None:
                reader.join(timeout=2)
        for sig, handler in previous.items():
            signal.signal(sig, handler)
    stream_complete = reader is not None and not reader.is_alive() and not reader_error
    raw_exit = child.returncode
    effective_exit = 124 if cutoff else (128 - raw_exit if raw_exit < 0 else raw_exit)
    if cancel_signal is not None:
        effective_exit = 128 + cancel_signal
    complete = (
        not cutoff and cancel_signal is None and not unexpected_descendants
        and raw_exit in (0, 1, 2) and stream_complete
        and (not completion_marker_required or "Total time" in aggregate.metrics)
        and not aggregate.oom
    )
    if effective_exit == 0 and (not complete or aggregate.diagnostic_codes):
        effective_exit = 1
    status = "finished" if complete else "incomplete"
    if reader_error:
        status = "reader_error"
    if cutoff:
        status = "cutoff"
    if cancel_signal is not None:
        status = "controller_cancelled"
    return {
        "schema_version": 2,
        "counts_as_required_gate": False,
        "complete": complete,
        "status": status,
        "compiler_exit_code": raw_exit,
        "exit_code": effective_exit,
        "elapsed_seconds": round(time.monotonic() - started, 3),
        "limit_seconds": limit_seconds,
        "grace_seconds": grace_seconds,
        "forced_kill_after_grace": killed,
        "stream_complete": stream_complete,
        "reader_error": reader_error,
        "discarded_oversized_lines": oversized_lines,
        "unexpected_descendants_cleaned": unexpected_descendants,
        "controller_cancel_signal": cancel_signal,
        "maximum_rss_kib": usage.ru_maxrss,
        "sampled_peak_rss_kib": sampled_peak_rss_kib,
        "rss_sample_count": samples,
        "user_cpu_seconds": usage.ru_utime,
        "system_cpu_seconds": usage.ru_stime,
        **aggregate.result(),
    }
