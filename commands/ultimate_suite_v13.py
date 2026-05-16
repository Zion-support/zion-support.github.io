#!/usr/bin/env python3
"""
Ultimate Suite V13 - Complete Automation

Combines all V13 features:
- V11 Intelligent Replies
- V9 Nuclear Cleaner  
- Follow-up Engine
- Reply Optimizer
- Calendar Extraction
"""

import sys, subprocess
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')

def main():
    print(f"🚀 Ultimate Suite V13 - {datetime.now().strftime('%H:%M:%S')}")
    
    # 1. Nuclear clean
    print("\n1️⃣ Nuclear Cleaning...")
    r = subprocess.run(['python3', 'nuclear_cleaner_v9.py', '--execute', '--limit', '200'],
                      capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(r.stdout.split('\n')[-3:])
    
    # 2. Intelligent replies
    print("\n2️⃣ Intelligent Replies...")
    r = subprocess.run(['python3', 'email_responder_v11.py', '--execute', '--limit', '40'],
                      capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(r.stdout.split('\n')[-3:])
    
    # 3. Follow-up engine
    print("\n3️⃣ Follow-up Engine...")
    r = subprocess.run(['python3', 'followup_engine.py', '--execute'],
                      capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(r.stdout.split('\n')[-3:])
    
    # 4. Reply optimizer
    print("\n4️⃣ Reply Optimization...")
    r = subprocess.run(['python3', 'reply_optimizer.py'],
                      capture_output=True, text=True, cwd=str(WORKSPACE / 'zion.app' / 'commands'))
    print(r.stdout.split('\n')[-4:])
    
    print("\n✅ Suite V13 complete!")

if __name__ == '__main__':
    main()