"""Read-only Actions diagnostics using only Python's standard library.

Active states are queried independently: a busy repository's newest completed
runs must not hide an older queued run. No incidents are created or closed.
"""
import argparse
from collections import Counter
from datetime import datetime, timezone
import html
import json
import os
from pathlib import Path
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

ACTIVE = ("queued", "pending", "requested", "waiting", "in_progress")
FAILURES = {"failure", "timed_out", "action_required", "startup_failure", "stale"}


def collect(fetch, status=None, max_pages=3, head_sha=None):
    """Return deduplicated observations and explicit bounded coverage evidence."""
    runs, seen, totals = [], set(), []
    for page in range(1, max_pages + 1):
        query = {"per_page": 100, "page": page}
        if status:
            query["status"] = status
        if head_sha:
            query["head_sha"] = head_sha
        data = fetch(query)
        batch = data.get("workflow_runs")
        total = data.get("total_count")
        if not isinstance(batch, list) or not isinstance(total, int) or total < 0:
            raise ValueError("Malformed Actions API response")
        totals.append(total)
        for run in batch:
            if not isinstance(run, dict) or not isinstance(run.get("id"), int):
                raise ValueError("Malformed workflow run")
            if run["id"] not in seen:
                seen.add(run["id"])
                runs.append(run)
        if len(batch) < 100:
            break
    complete = len(runs) >= max(totals) and len(set(totals)) == 1
    return runs, {"pages": page, "observed": len(runs),
                  "reported_total": max(totals), "complete": complete,
                  "scope": "commit:" + head_sha if head_sha else status or "latest_runs_sample"}


def conclusion_key(run):
    return (run.get("conclusion") or "unknown") if run.get("status") == "completed" else run.get("status", "unknown")


def commit_evidence(runs, coverage, head_sha, own_run_id=None):
    """Describe observations for one commit; never grant release approval."""
    if any(r.get("head_sha") != head_sha for r in runs):
        raise ValueError("Commit query returned another revision")
    others = [r for r in runs if str(r["id"]) != str(own_run_id)]
    counts = Counter(conclusion_key(r) for r in others)
    if not others:
        assessment = "no_evidence"
    elif any(counts[x] for x in FAILURES | {"cancelled"}):
        assessment = "attention_required"
    elif not coverage["complete"]:
        assessment = "incomplete"
    elif any(r.get("status") != "completed" for r in others):
        assessment = "pending"
    elif any(conclusion_key(r) != "success" for r in others):
        assessment = "not_verified"
    else:
        assessment = "observed_success"
    review = [{"id":r["id"], "name":r.get("name", "unknown"), "outcome":conclusion_key(r)}
              for r in others if r.get("status") == "completed" and conclusion_key(r) != "success"]
    return {"head_sha":head_sha, "assessment":assessment, "counts":dict(counts), "coverage":coverage,
            "self_excluded":len(runs)-len(others), "review":review[:15], "review_count":len(review),
            "policy": "Actions runs only; required checks, external statuses, reviews, branch rules and deployment are not verified. This is not merge approval."}


def job_evidence(runs, fetch_jobs, own_run_id=None, max_runs=8):
    """Inspect a bounded set of problematic runs at their observed attempt.

    Step conclusions locate observed trouble; they do not establish its cause.
    No log downloads, retries, cancellations or remediation are performed.
    """
    candidates = [r for r in runs if r.get("status") == "completed"
                  and r.get("conclusion") in FAILURES | {"cancelled"}
                  and str(r["id"]) != str(own_run_id)]
    candidates.sort(key=lambda r: r["id"], reverse=True)
    results = []
    for run in candidates[:max_runs]:
        attempt = run.get("run_attempt")
        if type(attempt) is not int or attempt < 1:
            raise ValueError("Missing observed run attempt")
        data = fetch_jobs(run["id"], attempt)
        if not isinstance(data, dict):
            raise ValueError("Malformed jobs response")
        jobs, total = data.get("jobs"), data.get("total_count")
        if not isinstance(jobs, list) or type(total) is not int or total < 0:
            raise ValueError("Malformed jobs response")
        details, seen = [], set()
        for job in jobs:
            if (not isinstance(job, dict) or type(job.get("id")) is not int
                    or job.get("run_id") != run["id"]):
                raise ValueError("Jobs response does not match selected run")
            if job["id"] in seen:
                continue
            seen.add(job["id"])
            steps = job.get("steps", [])
            if not isinstance(steps, list) or any(not isinstance(s, dict) or
                    type(s.get("number")) is not int for s in steps):
                raise ValueError("Malformed job steps")
            problems = sorted((s for s in steps if s.get("conclusion") in FAILURES | {"cancelled"}),
                              key=lambda s: s["number"])
            if job.get("conclusion") == "success" and not problems:
                continue
            first = problems[0] if problems else None
            details.append({"id":job["id"], "name":job.get("name", "unknown"),
                            "outcome":conclusion_key(job),
                            "first_problem_step": None if first is None else {
                                "name":first.get("name", "unknown"),
                                "outcome":first.get("conclusion")},
                            "skipped_steps":sum(s.get("conclusion") == "skipped" for s in steps)})
        results.append({"run_id":run["id"], "run_attempt":attempt,
                        "name":run.get("name", "unknown"),
                        "observed_jobs":len(seen), "reported_jobs":total,
                        "complete":len(seen) == total, "jobs":details[:15],
                        "problem_job_count":len(details)})
    return {"eligible_runs":len(candidates), "inspected_runs":len(results),
            "complete":len(results) == len(candidates) and all(r["complete"] for r in results),
            "runs":results,
            "policy":"At most 8 runs and 100 jobs per run, pinned to the observed attempt. "
                      "Step outcomes are evidence of where execution stopped, not its root cause or merge approval."}


def age_minutes(value, now):
    try:
        dt = datetime.fromisoformat(value.replace("Z", "+00:00"))
        if dt.tzinfo is None or dt > now:
            return None
        return round((now - dt).total_seconds() / 60, 1)
    except (ValueError, TypeError, AttributeError):
        return None


def analyze(active, recent, coverage, now):
    by_id = {}
    for run in active:
        if run.get("status") in ACTIVE:
            previous = by_id.get(run["id"])
            # A run can move between status queries; retain the newest observation.
            if previous is None or str(run.get("updated_at", "")) >= str(previous.get("updated_at", "")):
                by_id[run["id"]] = run
    runs = list(by_id.values())
    queued = [r for r in runs if r.get("status") in {"queued", "pending", "requested"}]
    waiting = [r for r in runs if r.get("status") == "waiting"]
    ages = [age_minutes(r.get("created_at"), now) for r in queued]
    known_ages = [a for a in ages if a is not None]
    oldest = max(known_ages, default=0)
    # Old API records can remain queued for months; they are not evidence that
    # runners are currently congested. Preserve them as reconciliation evidence.
    recent_ages = [a for a in known_ages if a < 24 * 60]
    stale_count = sum(a >= 24 * 60 for a in known_ages)
    recent_oldest = max(recent_ages, default=0)
    active_complete = all(coverage[s]["complete"] for s in ACTIVE)
    valid_ages = all(a is not None for a in ages)
    severity = "within_threshold"
    if len(recent_ages) >= 35 or recent_oldest >= 45:
        severity = "critical"
    elif len(recent_ages) >= 20 or recent_oldest >= 25:
        severity = "warning"
    elif stale_count:
        severity = "review_stale_records"
    elif not active_complete or not valid_ages:
        severity = "unknown"
    groups = {}
    for run in recent:
        key = (run.get("workflow_id", run.get("path", "unknown")),
               run.get("head_branch", "unknown"), run.get("event", "unknown"))
        entry = groups.setdefault(key, {"workflow_id": key[0], "name": run.get("name", "unknown"),
                                       "branch": key[1], "event": key[2], "failures": 0, "runs": 0,
                                       "latest_run_id": run["id"], "latest_created_at": "",
                                       "latest_status": "unknown", "latest_conclusion": None})
        entry["runs"] += 1
        entry["failures"] += run.get("conclusion") in FAILURES
        stamp = str(run.get("created_at", ""))
        if stamp >= entry["latest_created_at"]:
            entry.update(latest_run_id=run["id"], latest_created_at=stamp,
                         latest_status=run.get("status"), latest_conclusion=run.get("conclusion"))
    failures = sorted((g for g in groups.values() if g["failures"]),
                      key=lambda g: (-g["failures"], str(g["workflow_id"])))[:15]
    queue_details = [{"id": r["id"], "name": r.get("name", "unknown"), "status": r.get("status"),
                      "age_minutes": age_minutes(r.get("created_at"), now)} for r in queued]
    queue_details.sort(key=lambda r: -(r["age_minutes"] if r["age_minutes"] is not None else float("inf")))
    return {"schema": "zion.actions.queue-health.v2", "observed_at_utc": now.isoformat(),
            "queue_assessment": severity, "active_coverage_complete": active_complete,
            "invalid_queue_timestamps": len(ages) - len(known_ages),
            "counts": dict(Counter(r["status"] for r in runs)), "queue_count": len(queued),
            "recent_queue_count": len(recent_ages), "stale_queue_count": stale_count,
            "waiting_count": len(waiting), "oldest_queued_minutes": oldest if valid_ages else None,
            "oldest_queued": queue_details[:15], "recent_failures": failures, "coverage": coverage,
            "recent_outcomes": dict(Counter(conclusion_key(r) for r in recent)),
            "recent_unverified": [{"id":r["id"], "name":r.get("name", "unknown"), "outcome":conclusion_key(r)}
                                  for r in recent if r.get("status") == "completed" and
                                  conclusion_key(r) not in FAILURES | {"success"}][:15],
            "note": "Observations are non-atomic. Recent failures are a bounded sample, not repository health or incident recovery."}


def safe_text(value):
    return html.escape(str(value).replace("\n", " ").replace("\r", " ")).replace("|", "&#124;").replace("`", "&#96;").replace("[", "&#91;").replace("]", "&#93;")


def markdown(report, repo):
    lines = ["## Actions queue and failure diagnostics", "",
             f"Observed: {report['observed_at_utc']}",
             f"Queue assessment: **{report['queue_assessment']}**", "",
             f"Queued under 24 hours: **{report['recent_queue_count']}**; queued at least 24 hours: **{report['stale_queue_count']}**.",
             "Old queued records require reconciliation; they do not establish current runner congestion.", "",
             "Waiting runs are shown separately: they may need approval and are not assumed to be runner congestion.", "",
             "| State | Observed count |", "|---|---:|"]
    lines += [f"| {state} | {report['counts'].get(state, 0)} |" for state in ACTIVE]
    lines += ["", "### Active query coverage", "", "| State | Pages | Observed | API total | Complete |",
              "|---|---:|---:|---:|---|"]
    for state, c in report["coverage"].items():
        lines.append(f"| {state} | {c['pages']} | {c['observed']} | {c['reported_total']} | {c['complete']} |")
    lines += ["", "### Oldest queued runs", ""]
    for run in report["oldest_queued"]:
        age = "unknown age" if run["age_minutes"] is None else f"{run['age_minutes']} min"
        lines.append(f"- {safe_text(run['name'])}: {age}; [run {run['id']}](https://github.com/{repo}/actions/runs/{run['id']})")
    lines += ["", "### Failures in latest-run sample", "",
              "Grouped by workflow, branch and event; a later run is not proof of incident recovery.", ""]
    for item in report["recent_failures"]:
        lines.append(f"- {safe_text(item['name'])} / {safe_text(item['branch'])} / {safe_text(item['event'])}: "
                     f"{item['failures']}/{item['runs']} failed; latest {safe_text(item['latest_status'])}/{safe_text(item['latest_conclusion'])}; "
                     f"[run {item['latest_run_id']}](https://github.com/{repo}/actions/runs/{item['latest_run_id']})")
    if not report["recent_failures"]:
        lines.append("No failure conclusion observed in this sample. This is not a repository-wide pass.")
    lines += ["", "### Unverified outcomes in latest-run sample", "",
              "Cancelled, neutral, skipped and unknown outcomes do not establish that a check ran successfully.", "",
              "| Outcome | Count |", "|---|---:|"]
    for state, count in sorted(report["recent_outcomes"].items()):
        lines.append(f"| {safe_text(state)} | {count} |")
    for item in report["recent_unverified"]:
        lines.append(f"- {safe_text(item['name'])}: {safe_text(item['outcome'])}; [run {item['id']}](https://github.com/{repo}/actions/runs/{item['id']})")
    if "commit_evidence" in report:
        evidence = report["commit_evidence"]
        lines += ["", "### Selected commit observations", "", f"Commit: `{evidence['head_sha']}`",
                  f"Assessment: **{evidence['assessment']}**; complete API coverage: **{evidence['coverage']['complete']}**.",
                  f"This diagnostic's own run is excluded ({evidence['self_excluded']}); it cannot approve itself.", "",
                  "| Outcome | Count |", "|---|---:|"]
        for state, count in sorted(evidence["counts"].items()):
            lines.append(f"| {safe_text(state)} | {count} |")
        for item in evidence["review"]:
            lines.append(f"- {safe_text(item['name'])}: {safe_text(item['outcome'])}; [run {item['id']}](https://github.com/{repo}/actions/runs/{item['id']})")
        lines += ["", f"Showing up to 15 of {evidence['review_count']} completed outcomes needing review.", evidence["policy"]]
    if "job_evidence" in report:
        evidence = report["job_evidence"]
        lines += ["", "### Problematic job steps", "",
                  f"Inspected {evidence['inspected_runs']} of {evidence['eligible_runs']} eligible runs; "
                  f"complete jobs coverage: **{evidence['complete']}**.", evidence["policy"], ""]
        for run in evidence["runs"]:
            lines.append(f"- {safe_text(run['name'])}, attempt {run['run_attempt']}: "
                         f"{run['observed_jobs']}/{run['reported_jobs']} jobs observed; "
                         f"showing {len(run['jobs'])}/{run['problem_job_count']} jobs needing review.")
            for job in run["jobs"]:
                step = job["first_problem_step"]
                detail = (f"{safe_text(step['name'])} ({safe_text(step['outcome'])})" if step
                          else "no failed/cancelled step reported; inspect run evidence")
                lines.append(f"  - {safe_text(job['name'])}: {safe_text(job['outcome'])}; "
                             f"first problematic step: {detail}; skipped steps: {job['skipped_steps']}; "
                             f"[job {job['id']}](https://github.com/{repo}/actions/runs/{run['run_id']}/job/{job['id']})")
    lines += ["", "### Next action", ""]
    if report["queue_assessment"] in {"warning", "critical"}:
        lines.append("Inspect the oldest runs and existing queue-pressure incident before adding retries or schedules.")
    elif report["queue_assessment"] == "unknown":
        lines.append("Coverage or timestamps are incomplete; do not infer healthy queue or close incidents.")
    elif report["queue_assessment"] == "review_stale_records":
        lines.append("Re-read old run IDs and inspect their jobs before any cleanup. Do not cancel runs or call current runner capacity congested from old records alone.")
    else:
        lines.append("Queue observations are within thresholds; independently review failed checks and required release gates.")
    lines += ["", report["note"], "", "Read-only: no reruns, cancellation, commits, issues, external messages, or incident closure."]
    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--snapshot", type=Path, help="Replay an API snapshot without credentials or network")
    parser.add_argument("--output", type=Path, default=Path("actions-queue-health.json"))
    parser.add_argument("--head-sha", default="", help="Optional full commit SHA for a separate bounded Actions assessment")
    args = parser.parse_args()
    repo = os.environ.get("GH_REPO", "")
    if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", repo):
        raise ValueError("GH_REPO must be owner/repository")
    if args.head_sha and not re.fullmatch(r"[0-9a-fA-F]{40}", args.head_sha):
        raise ValueError("head-sha must be a full 40-character hexadecimal commit SHA")
    head_sha = args.head_sha.lower()
    now = datetime.now(timezone.utc)
    if args.snapshot:
        snapshot = json.loads(args.snapshot.read_text())
        def fetch(query):
            scope = "commit:" + query["head_sha"] if query.get("head_sha") else query.get("status", "recent")
            return snapshot[f"{scope}:{query['page']}"]
    else:
        token = os.environ["GH_TOKEN"]
        def request_api(path, query):
            url = f"https://api.github.com/repos/{repo}/{path}?{urllib.parse.urlencode(query)}"
            request = urllib.request.Request(url, headers={"Authorization": "Bearer " + token,
                "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28",
                "User-Agent": "Zion-Actions-Queue-Health/2.0"})
            with urllib.request.urlopen(request, timeout=10) as response:
                return json.load(response)
        def fetch(query):
            return request_api("actions/runs", query)
    def fetch_jobs(run_id, attempt):
        if args.snapshot:
            return snapshot[f"jobs:{run_id}:{attempt}"]
        return request_api(f"actions/runs/{run_id}/attempts/{attempt}/jobs", {"per_page":100, "page":1})
    active, coverage = [], {}
    for state in ACTIVE:
        items, coverage[state] = collect(fetch, state)
        active.extend(items)
    recent, coverage["recent_sample"] = collect(fetch, max_pages=1)
    report = analyze(active, recent, coverage, now)
    if head_sha:
        commits, commit_coverage = collect(fetch, head_sha=head_sha)
        report["commit_evidence"] = commit_evidence(commits, commit_coverage, head_sha, os.environ.get("GITHUB_RUN_ID"))
        report["job_evidence"] = job_evidence(commits, fetch_jobs, os.environ.get("GITHUB_RUN_ID"))
    args.output.write_text(json.dumps(report, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a", encoding="utf-8") as target:
            target.write(markdown(report, repo))
    print(f"Diagnostic complete: queue={report['queue_assessment']}; observed queued={report['queue_count']}")
    if head_sha:
        print(f"Commit observation: {head_sha}; assessment={report['commit_evidence']['assessment']}; not merge approval")
        evidence = report["job_evidence"]
        print(f"Job inspection: {evidence['inspected_runs']}/{evidence['eligible_runs']} problematic runs; complete={evidence['complete']}")
    # This reports diagnostic execution, not the success of monitored workflows.
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (KeyError, ValueError, OSError, urllib.error.URLError) as error:
        # Never print response bodies, credentials or untrusted exception text.
        print(f"Diagnostic failed ({type(error).__name__}); no health conclusion.", file=sys.stderr)
        sys.exit(2)
