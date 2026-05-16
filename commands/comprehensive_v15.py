#!/usr/bin/env python3
"""
Comprehensive Email Management V15

Complete solution for massive backlogs:
- Bankruptcy mode for old emails
- GitHub suppression
- Intelligent business handling
- Follow-up tracking
"""

import sys, subprocess
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')

def main():
    mode = 'bankruptcy' if '--bankruptcy' in sys.argv else 'normal'
    execute = '--execute' in sys.argv
    
    print(f"🧰 V15 Comprehensive System - {mode} mode | {datetime.now().strftime('%H:%M')}")
    
    if mode == 'bankruptcy':
        # Run bankruptcy mode first
        print("\n1️⃣ Bankruptcy Mode (archive old emails)...")
        r = subprocess.run(['python3', 'bankruptcy_mode.py', '--execute', '--days', '180'],
                          capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
        print(r.stdout)
    
    # Run main system
    print("\n2️⃣ Final System Processing...")
    r = subprocess.run(['python3', 'final_system_v14.py', '--execute', '--limit', '100'],
                      capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(r.stdout)
    
    print("\n✅ V15 Complete")

if __name__ == '__main__':
    main()