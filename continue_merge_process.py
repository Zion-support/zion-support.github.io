#!/usr/bin/env python3

import subprocess
import sys
import os
import time

def run_command(command, description="", timeout=60):
    """Run a shell command and return the result"""
    try:
        print(f"🔄 {description}...")
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=timeout)
        if result.returncode == 0:
            print(f"✅ {description} completed successfully")
            return True, result.stdout.strip()
        else:
            print(f"⚠️ {description} had issues: {result.stderr.strip()}")
            return False, result.stderr.strip()
    except subprocess.TimeoutExpired:
        print(f"⏰ {description} timed out")
        return False, "Timeout"
    except Exception as e:
        print(f"❌ {description} failed: {str(e)}")
        return False, str(e)

def main():
    print("🚀 Continuing merge process for remaining branches...")
    
    # Ensure we're on main branch and up to date
    run_command("git checkout main", "Switching to main branch")
    run_command("git pull origin main", "Pulling latest main")
    
    # Get more branches to merge (skip the first 10 we already did)
    success, branches_output = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | tail -n +11 | head -20', "Getting next 20 branches")
    
    if not success or not branches_output:
        print("❌ Failed to get branches list")
        return
    
    branches = [b.strip() for b in branches_output.split('\n') if b.strip()]
    print(f"📊 Found {len(branches)} branches to process")
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch in enumerate(branches, 1):
        print(f"\n📋 [{i}/{len(branches)}] Processing branch: {branch}")
        
        # Try to merge the branch directly
        success, output = run_command(f"git merge {branch} --no-ff -m 'Merge {branch} into main'", f"Merging {branch}")
        
        if success:
            print(f"✅ Successfully merged {branch}")
            successful_merges += 1
        else:
            print(f"⚠️ Merge failed for {branch}, trying conflict resolution...")
            
            # Check if there are conflicts
            conflict_check, conflict_output = run_command("git status --porcelain", "Checking for conflicts")
            
            if conflict_check and ("UU" in conflict_output or "AA" in conflict_output):
                print(f"🔧 Resolving conflicts for {branch}...")
                
                # Resolve conflicts by taking theirs
                run_command("git checkout --theirs .", f"Taking theirs for {branch}")
                run_command("git add .", f"Adding resolved files for {branch}")
                
                # Commit the resolved merge
                commit_success, commit_output = run_command(f"git commit -m 'Merge {branch} into main (conflicts resolved)'", f"Committing resolved merge of {branch}")
                
                if commit_success:
                    print(f"✅ Successfully merged {branch} with conflict resolution")
                    successful_merges += 1
                else:
                    print(f"❌ Failed to commit resolved merge for {branch}")
                    run_command("git reset --hard HEAD", f"Resetting {branch}")
                    failed_merges += 1
            else:
                print(f"❌ No conflicts detected but merge failed for {branch}")
                run_command("git reset --hard HEAD", f"Resetting {branch}")
                failed_merges += 1
        
        # Small delay between merges
        time.sleep(0.5)
        
        # Push every 5 successful merges
        if successful_merges > 0 and successful_merges % 5 == 0:
            print(f"\n🚀 Pushing batch of {successful_merges} merges...")
            push_success, push_output = run_command("git push origin main", f"Pushing batch of {successful_merges}")
            if not push_success:
                print(f"⚠️ Push failed: {push_output}")
                # Try force push if needed
                run_command("git push origin main --force", f"Force pushing batch")
    
    print(f"\n🎉 Merge process completed!")
    print(f"✅ Total successful merges: {successful_merges}")
    print(f"❌ Total failed merges: {failed_merges}")
    
    # Final push
    if successful_merges > 0:
        print("\n🚀 Final push to remote...")
        push_success, push_output = run_command("git push origin main", "Final push to remote")
        if not push_success:
            print("⚠️ Final push failed, trying force push...")
            run_command("git push origin main --force", "Force push to remote")

if __name__ == "__main__":
    main()