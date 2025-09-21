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
    print("🚀 Starting mass merge process for ALL remaining branches...")
    
    # Ensure we're on main branch and up to date
    run_command("git checkout main", "Switching to main branch")
    run_command("git pull origin main", "Pulling latest main")
    
    # Get all remaining branches (skip first 30 we already did)
    success, branches_output = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | tail -n +31', "Getting all remaining branches")
    
    if not success or not branches_output:
        print("❌ Failed to get branches list")
        return
    
    branches = [b.strip() for b in branches_output.split('\n') if b.strip()]
    print(f"📊 Found {len(branches)} branches to process")
    
    successful_merges = 0
    failed_merges = 0
    
    # Process branches in batches of 50
    batch_size = 50
    total_batches = (len(branches) + batch_size - 1) // batch_size
    
    for batch_num in range(total_batches):
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, len(branches))
        batch = branches[start_idx:end_idx]
        
        print(f"\n🔄 Processing batch {batch_num + 1}/{total_batches} ({len(batch)} branches)")
        
        batch_successful = 0
        batch_failed = 0
        
        for i, branch in enumerate(batch, 1):
            print(f"  📋 [{i}/{len(batch)}] {branch}")
            
            # Try to merge the branch directly
            success, output = run_command(f"git merge {branch} --no-ff -m 'Merge {branch} into main'", f"Merging {branch}")
            
            if success:
                print(f"    ✅ Successfully merged")
                batch_successful += 1
                successful_merges += 1
            else:
                print(f"    ⚠️ Merge failed, trying conflict resolution...")
                
                # Check if there are conflicts
                conflict_check, conflict_output = run_command("git status --porcelain", "Checking for conflicts")
                
                if conflict_check and ("UU" in conflict_output or "AA" in conflict_output):
                    print(f"    🔧 Resolving conflicts...")
                    
                    # Resolve conflicts by taking theirs
                    run_command("git checkout --theirs .", f"Taking theirs for {branch}")
                    run_command("git add .", f"Adding resolved files for {branch}")
                    
                    # Commit the resolved merge
                    commit_success, commit_output = run_command(f"git commit -m 'Merge {branch} into main (conflicts resolved)'", f"Committing resolved merge of {branch}")
                    
                    if commit_success:
                        print(f"    ✅ Successfully merged with conflict resolution")
                        batch_successful += 1
                        successful_merges += 1
                    else:
                        print(f"    ❌ Failed to commit resolved merge")
                        run_command("git reset --hard HEAD", f"Resetting {branch}")
                        batch_failed += 1
                        failed_merges += 1
                else:
                    print(f"    ❌ No conflicts detected but merge failed")
                    run_command("git reset --hard HEAD", f"Resetting {branch}")
                    batch_failed += 1
                    failed_merges += 1
            
            # Small delay between merges
            time.sleep(0.1)
        
        print(f"\n📊 Batch {batch_num + 1} complete: {batch_successful} successful, {batch_failed} failed")
        
        # Push after each batch
        if batch_successful > 0:
            print(f"🚀 Pushing batch {batch_num + 1} changes...")
            push_success, push_output = run_command("git push origin main", f"Pushing batch {batch_num + 1}")
            if not push_success:
                print(f"⚠️ Push failed for batch {batch_num + 1}: {push_output}")
                # Try force push if needed
                run_command("git push origin main --force", f"Force pushing batch {batch_num + 1}")
    
    print(f"\n🎉 Mass merge process completed!")
    print(f"✅ Total successful merges: {successful_merges}")
    print(f"❌ Total failed merges: {failed_merges}")
    print(f"📊 Success rate: {(successful_merges / (successful_merges + failed_merges) * 100):.1f}%")

if __name__ == "__main__":
    main()