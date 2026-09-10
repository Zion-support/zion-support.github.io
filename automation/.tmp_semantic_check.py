import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr_path.read_text())

# Verify the latest improvements entry is NOT a semantic duplicate
# of the previous one
entries = data['improvements']
if len(entries) >= 2:
    prev = entries[-2]
    curr = entries[-1]
    
    print('PREVIOUS ENTRY (latest before this update):')
    print('  ts:', prev['ts'])
    print('  pattern[:200]:', (prev.get('pattern') or '')[:200])
    print('  has recommendations:', bool(prev.get('recommendations')))
    
    print()
    print('CURRENT ENTRY (just appended):')
    print('  ts:', curr['ts'])
    print('  pattern[:200]:', (curr.get('pattern') or '')[:200])
    print('  has recommendations:', bool(curr.get('recommendations')))
    
    # Check if they are semantically different
    prev_pattern = (prev.get('pattern') or '')[:100]
    curr_pattern = (curr.get('pattern') or '')[:100]
    
    if prev_pattern == curr_pattern:
        print()
        print('WARNING: PATTERNS MATCH — possible semantic duplicate!')
    else:
        print()
        print('CONFIRMED: Patterns differ — not a semantic duplicate')
else:
    print('Only one entry exists, no duplicate check needed')
