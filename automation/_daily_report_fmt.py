#!/usr/bin/env python3
"""Format the daily leads check output into a clean summary."""
import json, subprocess, sys, os

workspace = "/Users/miami2/zion.app/automation"
os.chdir(workspace)

result = subprocess.run(
    [sys.executable, "scripts/cron_daily_leads_check.py"],
    cwd=workspace, capture_output=True, text=True, timeout=120,
)

output = result.stdout
json_end = output.find('\nReport saved to:')
json_str = output[:json_end] if json_end > 0 else output
data = json.loads(json_str)

print("=== DAILY LEADS & OUTREACH CHECK - VERIFIED RUN ===")
print()
print("LEADS:")
le = data["leads"]
print(f"  Total in queue (before reseed): {le['total_in_queue']}")
print(f"  Total after reseed: {le['total_after_reseed']}")
new = le["total_after_reseed"] - le["total_in_queue"]
print(f"  New leads from Gmail scan: +{new}")
print(f"  Source: {le['source_file']}")
rs = le["reseed"]
print(f"  Reseed returncode: {rs['returncode']}")
print(f"  Reseed stderr: {rs.get('stderr', '')[:200] or '(none)'}")
print()
print("OUTREACH:")
sl = data["outreach"]["send_log"]
print(f"  Total log entries: {sl['total_entries']}")
print(f"  Sent (all-time): {sl['sent']}")
print(f"  Failed (all-time): {sl['failed']}")
print(f"  Last send: {sl['last_send_ts']}")
print(f"  Recent by date:")
for d, stats in sl["recent_by_date"].items():
    print(f"    {d}: {stats['sent']} sent, {stats['failed']} failed")
print()
print("GROWTH ENGINE:")
ge = data["growth_engine"]
print(f"  Status: {ge['status']}")
print(f"  Dry run: {ge['dry_run']}")
print(f"  Last error: {ge['last_error']}")
print()
print("SUMMARY:")
print(data["summary"])
