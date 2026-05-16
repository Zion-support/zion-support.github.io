#!/usr/bin/env python3
"""
Ultimate Email Suite V12 - Complete Automation

Combines all systems:
- V11 Intelligent Replies
- Nuclear Cleaner
- Calendar Extraction
- Follow-up Engine
"""

import sys, json, subprocess
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')

def main():
    print(f"🚀 Ultimate Suite V12 - {datetime.now().strftime('%H:%M')}")
    
    # Step 1: Nuclear clean
    print("\n1️⃣ Nuclear Cleaning...")
    result = subprocess.run(['python3', 'nuclear_cleaner_v9.py', '--execute', '--limit', '300'],
                          capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(result.stdout[-200:] if len(result.stdout) > 200 else result.stdout)
    
    # Step 2: Intelligent replies
    print("\n2️⃣ Intelligent Processing...")
    result = subprocess.run(['python3', 'email_responder_v11.py', '--execute', '--limit', '50'],
                          capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(result.stdout[-200:] if len(result.stdout) > 200 else result.stdout)
    
    # Step 3: Calendar extraction
    print("\n3️⃣ Calendar Extraction...")
    result = subprocess.run(['python3', 'calendar_extractor.py', '--execute', '--limit', '30'],
                          capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(result.stdout[-200:] if len(result.stdout) > 200 else result.stdout)
    
    print("\n✅ Suite V12 complete!")

if __name__ == '__main__':
    main()