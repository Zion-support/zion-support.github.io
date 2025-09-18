#!/usr/bin/env python3

import subprocess
import json
import requests
import sys
import os
from datetime import datetime

def run_cmd(cmd, timeout=10):
    """Run command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except:
        return False, "", "Timeout or error"

def main():
    print("🚀 Starting simple merge resolution...")
    print(f"⏰ Started at: {datetime.now()}")
    
    # Check git status
    print("📊 Checking git status...")
    success, stdout, stderr = run_cmd("git status --porcelain")
    if success:
        print(f"Git status: {stdout}")
    else:
        print(f"Git status error: {stderr}")
    
    # Check current branch
    success, stdout, stderr = run_cmd("git branch --show-current")
    if success:
        current_branch = stdout.strip()
        print(f"📍 Current branch: {current_branch}")
        
        if current_branch != "main":
            print("🔄 Switching to main...")
            run_cmd("git checkout main")
    
    # Pull latest changes
    print("📥 Pulling latest changes...")
    success, stdout, stderr = run_cmd("git pull origin main")
    if not success:
        print(f"⚠️  Pull failed: {stderr}")
    
    # Check for conflicts
    print("🔍 Checking for conflicts...")
    success, stdout, stderr = run_cmd("git diff --name-only --diff-filter=U")
    if success and stdout.strip():
        print(f"⚠️  Found conflicts: {stdout}")
        
        # Resolve conflicts
        for file in stdout.strip().split('\n'):
            if file.strip():
                print(f"  - Resolving {file}")
                run_cmd(f"git checkout --ours '{file}'")
                run_cmd(f"git add '{file}'")
        
        run_cmd("git commit -m 'Resolve conflicts'")
        print("✅ Resolved conflicts")
    else:
        print("✅ No conflicts found")
    
    # Get open PRs
    print("📋 Fetching open PRs...")
    try:
        response = requests.get(
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open",
            headers={"Accept": "application/vnd.github.v3+json"},
            timeout=10
        )
        
        if response.status_code == 200:
            prs = response.json()
            print(f"📋 Found {len(prs)} open PRs")
            
            # Process each PR
            successful = 0
            failed = 0
            
            for pr in prs[:5]:  # Limit to first 5 PRs
                pr_number = pr['number']
                head_ref = pr['head']['ref']
                
                print(f"---")
                print(f"🔄 Processing PR #{pr_number}: {head_ref}")
                
                # Fetch branch
                print(f"📥 Fetching {head_ref}...")
                success, stdout, stderr = run_cmd(f"git fetch origin {head_ref}")
                if not success:
                    print(f"❌ Fetch failed: {stderr}")
                    failed += 1
                    continue
                
                # Try merge
                print(f"🔄 Merging {head_ref}...")
                success, stdout, stderr = run_cmd(f"git merge --no-commit --no-ff origin/{head_ref}")
                
                if success:
                    run_cmd(f"git commit -m 'Merge PR #{pr_number}: {head_ref}'")
                    print(f"✅ Merged PR #{pr_number}")
                    successful += 1
                else:
                    print(f"⚠️  Conflicts in PR #{pr_number}, resolving...")
                    
                    # Get conflicted files
                    success, stdout, stderr = run_cmd("git diff --name-only --diff-filter=U")
                    if success and stdout.strip():
                        for file in stdout.strip().split('\n'):
                            if file.strip():
                                print(f"  - Resolving {file}")
                                run_cmd(f"git checkout --ours '{file}'")
                                run_cmd(f"git add '{file}'")
                        
                        run_cmd(f"git commit -m 'Resolve conflicts for PR #{pr_number}'")
                        print(f"✅ Resolved conflicts for PR #{pr_number}")
                        successful += 1
                    else:
                        print(f"❌ No conflicted files found")
                        run_cmd("git merge --abort")
                        failed += 1
        else:
            print(f"❌ Failed to fetch PRs: {response.status_code}")
            return 1
            
    except Exception as e:
        print(f"❌ Error fetching PRs: {e}")
        return 1
    
    # Push changes
    print("---")
    print("🚀 Pushing changes...")
    success, stdout, stderr = run_cmd("git push origin main")
    if success:
        print("✅ Successfully pushed changes")
    else:
        print(f"⚠️  Push failed: {stderr}")
    
    # Summary
    print("---")
    print("📊 Summary:")
    print(f"✅ Successful merges: {successful}")
    print(f"❌ Failed merges: {failed}")
    print(f"⏰ Completed at: {datetime.now()}")
    
    return 0 if failed == 0 else 1

if __name__ == "__main__":
    sys.exit(main())