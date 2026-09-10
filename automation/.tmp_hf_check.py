import json, subprocess, sys
from pathlib import Path

# Check hot-followup label
try:
    result = subprocess.run(
        ['gog', 'gmail', 'search', 'label:!!!hot-follow-up', '--max', '25', '--plain', '--no-input'],
        capture_output=True, text=True, timeout=60
    )
    print("STDOUT:", result.stdout[:2000])
    print("STDERR:", result.stderr[:500])
    print("RC:", result.returncode)
except Exception as e:
    print(f"Error: {e}")
