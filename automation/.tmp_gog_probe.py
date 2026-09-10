#!/usr/bin/env python3
import subprocess, sys

try:
    result = subprocess.run(
        ['gog', 'gmail', 'search', 'in:anywhere', '--max', '1', '--plain', '--account', 'kleber@ziontechgroup.com', '--no-input'],
        capture_output=True, text=True, timeout=40
    )
    print('EXIT_CODE:', result.returncode)
    print('STDOUT:', result.stdout[:500] if result.stdout else '(empty)')
    print('STDERR:', result.stderr[:500] if result.stderr else '(empty)')
except subprocess.TimeoutExpired:
    print('EXIT_CODE: TIMEOUT')
    print('STATUS: auth-missing/timeout (exceeded 40s)')
except FileNotFoundError:
    print('EXIT_CODE: ENOENT')
    print('STATUS: gog binary not found')
except Exception as e:
    print('EXIT_CODE: ERROR')
    print('ERROR:', str(e))
