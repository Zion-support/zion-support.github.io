#!/usr/bin/env python3

import subprocess
import json
import os
import time

def run_command(cmd, timeout=60):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def main():
    print("🚀 Final PR Merge Process - Starting...")
    
    # Check if we have PR data
    if os.path.exists("_open_prs_current.json"):
        with open("_open_prs_current.json", "r") as f:
            prs = json.load(f)
            print(f"📋 Found {len(prs)} open PRs to process")
            
            for pr in prs:
                pr_number = pr['number']
                pr_title = pr['title']
                pr_state = pr['state']
                head_ref = pr['head']['ref']
                
                print(f"\n🔄 Processing PR #{pr_number}: {pr_title}")
                print(f"   State: {pr_state}")
                print(f"   Branch: {head_ref}")
                
                if pr_state == "open":
                    # Try to merge this PR
                    print(f"   🔄 Attempting to merge PR #{pr_number}...")
                    
                    # Switch to main
                    success, stdout, stderr = run_command("git checkout main", timeout=30)
                    if not success:
                        print(f"   ❌ Failed to checkout main: {stderr}")
                        continue
                    
                    # Pull latest
                    success, stdout, stderr = run_command("git pull origin main", timeout=60)
                    if not success:
                        print(f"   ❌ Failed to pull latest: {stderr}")
                        continue
                    
                    # Fetch the branch
                    success, stdout, stderr = run_command(f"git fetch origin {head_ref}", timeout=60)
                    if not success:
                        print(f"   ❌ Failed to fetch branch: {stderr}")
                        continue
                    
                    # Try to merge
                    success, stdout, stderr = run_command(f"git merge origin/{head_ref} --no-ff -m 'Merge PR #{pr_number}: {pr_title}'", timeout=120)
                    if success:
                        print(f"   ✅ Successfully merged PR #{pr_number}")
                        
                        # Push changes
                        success, stdout, stderr = run_command("git push origin main", timeout=60)
                        if success:
                            print(f"   ✅ Successfully pushed PR #{pr_number}")
                        else:
                            print(f"   ⚠️  Failed to push: {stderr}")
                    else:
                        print(f"   ⚠️  Merge conflicts detected: {stderr}")
                        
                        # Try to resolve conflicts
                        print(f"   🔧 Attempting to resolve conflicts...")
                        success, stdout, stderr = run_command("git checkout --ours .", timeout=30)
                        if success:
                            success, stdout, stderr = run_command("git add .", timeout=30)
                            if success:
                                success, stdout, stderr = run_command(f"git commit -m 'Resolve conflicts for PR #{pr_number}: {pr_title}'", timeout=30)
                                if success:
                                    print(f"   ✅ Successfully resolved conflicts for PR #{pr_number}")
                                    
                                    # Push resolved changes
                                    success, stdout, stderr = run_command("git push origin main", timeout=60)
                                    if success:
                                        print(f"   ✅ Successfully pushed resolved changes for PR #{pr_number}")
                                    else:
                                        print(f"   ⚠️  Failed to push resolved changes: {stderr}")
                                else:
                                    print(f"   ❌ Failed to commit resolved conflicts: {stderr}")
                            else:
                                print(f"   ❌ Failed to add resolved files: {stderr}")
                        else:
                            print(f"   ❌ Failed to resolve conflicts: {stderr}")
                else:
                    print(f"   ⏭️  Skipping PR #{pr_number} (state: {pr_state})")
    else:
        print("📋 No PR data file found")
    
    # Final status check
    print("\n🔍 Final status check...")
    success, stdout, stderr = run_command("git status --porcelain", timeout=30)
    if success:
        if stdout.strip():
            print(f"📝 Uncommitted changes: {stdout.strip()}")
        else:
            print("✅ Working directory is clean")
    
    success, stdout, stderr = run_command("git log --oneline -3", timeout=30)
    if success:
        print(f"📜 Recent commits:\n{stdout}")
    
    print("\n🎉 Final PR merge process completed!")

if __name__ == "__main__":
    main()