import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

impr = json.loads(impr_path.read_text())
log_text = log_path.read_text()
lines = [line for line in log_text.splitlines() if line.strip()]

print('=== improvements.json structure ===')
print(f'digests: {len(impr.get("digests", []))} entries')
print(f'improvements: {len(impr.get("improvements", []))} entries')
print(f'updatedAt: {impr.get("updatedAt")}')

print()
print('=== Latest digest ===')
digests = impr.get('digests', [])
if digests:
    latest = digests[-1]
    print(f'ts: {latest.get("ts")}')
    print(f'status: {latest.get("status")}')
    m = latest.get('metrics', {})
    print(f'metrics:')
    for k, v in m.items():
        print(f'  {k}: {v}')

print()
print('=== Latest improvements entry ===')
impr_entries = impr.get('improvements', [])
if impr_entries:
    latest_impr = impr_entries[-1]
    print(f'ts: {latest_impr.get("ts")}')
    print(f'pattern (first 200 chars): {str(latest_impr.get("pattern", ""))[:200]}')
    print(f'recommendations count: {len(latest_impr.get("recommendations", []))}')
    print(f'has reconciliationNote: {"reconciliationNote" in latest_impr}')

print()
print('=== Log tail (last 5 non-empty lines) ===')
for line in lines[-5:]:
    r = json.loads(line)
    summary = r.get('summary', {})
    print(f'  {r.get("ts", "N/A")} | {r.get("event", "N/A")} | potentialClients={summary.get("potentialClients", "N/A")} | sent={summary.get("sent", "N/A")}')
