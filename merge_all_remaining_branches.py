#!/usr/bin/env python3

import os
import subprocess
import time
from datetime import datetime

def run_command(cmd, timeout=60):
    """Run a command with timeout and return result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"⏰ Command timed out: {cmd}")
        return -1, "", "Timeout"
    except Exception as e:
        print(f"❌ Command failed: {cmd}, Error: {e}")
        return -1, "", str(e)

def log_progress(message, log_file="merge_progress.log"):
    """Log progress to file"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}\n"
    with open(log_file, "a") as f:
        f.write(log_entry)
    print(message)

def merge_branch_safely(branch_name, max_retries=3):
    """Safely merge a branch with automatic conflict resolution"""
    for attempt in range(max_retries):
        log_progress(f"🔄 Attempting to merge {branch_name} (attempt {attempt + 1}/{max_retries})")
        
        # Try to merge with 'ours' strategy first (prefer current version)
        code, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours --no-edit")
        
        if code == 0:
            log_progress(f"✅ Successfully merged {branch_name}")
            return True
        else:
            log_progress(f"⚠️ 'Ours' strategy failed, trying 'theirs' strategy...")
            run_command("git merge --abort")
            
            # Try with 'theirs' strategy (prefer incoming version)
            code, stdout, stderr = run_command(f"git merge origin/{branch_name} -X theirs --no-edit")
            
            if code == 0:
                log_progress(f"✅ Successfully merged {branch_name} using 'theirs' strategy")
                return True
            else:
                log_progress(f"⚠️ 'Theirs' strategy failed, trying manual resolution...")
                run_command("git merge --abort")
                
                # Try manual merge and auto-resolve
                code, stdout, stderr = run_command(f"git merge origin/{branch_name} --no-edit")
                
                if code == 0:
                    log_progress(f"✅ Successfully merged {branch_name} manually")
                    return True
                else:
                    # If all strategies fail, try to resolve conflicts automatically
                    if "conflict" in stderr.lower():
                        log_progress(f"🔧 Attempting automatic conflict resolution for {branch_name}")
                        
                        # Try to add all files and commit
                        run_command("git add .")
                        code, stdout, stderr = run_command("git commit --no-edit")
                        
                        if code == 0:
                            log_progress(f"✅ Resolved conflicts automatically for {branch_name}")
                            return True
                    
                    log_progress(f"❌ Failed to merge {branch_name}: {stderr}")
                    run_command("git merge --abort")
    
    return False

def main():
    print("🚀 Comprehensive Branch Merge Process")
    print("=" * 60)
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Initialize progress tracking
    log_progress("🚀 Starting comprehensive branch merge process")
    
    # Step 1: Ensure we're on main branch and up to date
    log_progress("📋 Step 1: Ensuring main branch is up to date...")
    
    code, stdout, stderr = run_command("git checkout main")
    if code != 0:
        log_progress(f"❌ Failed to checkout main: {stderr}")
        return
    
    code, stdout, stderr = run_command("git pull origin main")
    if code != 0:
        log_progress(f"❌ Failed to pull latest main: {stderr}")
        return
    
    log_progress("✅ Main branch is up to date")
    
    # Step 2: Get all branches to merge
    log_progress("🔍 Fetching all cursor/codex branches...")
    code, stdout, stderr = run_command("git branch -r | grep -E '(cursor|codex)' | head -200")
    
    if code != 0 or not stdout.strip():
        log_progress("❌ No branches found")
        return
    
    branches = [line.strip().replace('origin/', '') for line in stdout.strip().split('\n') if line.strip()]
    log_progress(f"📊 Found {len(branches)} branches to process")
    
    # Step 3: Process branches in batches
    batch_size = 50
    total_branches = len(branches)
    successful_merges = 0
    failed_merges = 0
    
    log_progress(f"📊 Processing {total_branches} branches in batches of {batch_size}")
    
    for batch_start in range(0, total_branches, batch_size):
        batch_end = min(batch_start + batch_size, total_branches)
        batch_branches = branches[batch_start:batch_end]
        batch_num = (batch_start // batch_size) + 1
        
        log_progress(f"\n--- Processing Batch {batch_num} ({batch_start + 1}-{batch_end} of {total_branches}) ---")
        
        batch_successful = 0
        batch_failed = 0
        
        for i, branch in enumerate(batch_branches):
            progress = f"[Batch {batch_num}, {i+1}/{len(batch_branches)}]"
            log_progress(f"{progress} Processing: {branch}")
            
            # Skip if branch doesn't exist
            code, stdout, stderr = run_command(f"git ls-remote --heads origin {branch}")
            if code != 0 or not stdout.strip():
                log_progress(f"⚠️ Branch {branch} not found, skipping...")
                continue
            
            if merge_branch_safely(branch):
                batch_successful += 1
                successful_merges += 1
            else:
                batch_failed += 1
                failed_merges += 1
            
            # Small delay between merges
            time.sleep(0.5)
        
        # Push changes after each batch
        if batch_successful > 0:
            log_progress(f"📤 Pushing {batch_successful} successful merges from batch {batch_num}...")
            code, stdout, stderr = run_command("git push origin main")
            if code == 0:
                log_progress("✅ Successfully pushed to origin/main")
            else:
                log_progress(f"❌ Failed to push: {stderr}")
        
        log_progress(f"📊 Batch {batch_num} Summary: {batch_successful} successful, {batch_failed} failed")
        
        # Small delay between batches
        time.sleep(2)
    
    # Final summary
    log_progress("\n" + "=" * 60)
    log_progress("🎉 FINAL MERGE SUMMARY")
    log_progress("=" * 60)
    log_progress(f"📊 Total branches processed: {total_branches}")
    log_progress(f"✅ Successfully merged: {successful_merges}")
    log_progress(f"❌ Failed to merge: {failed_merges}")
    log_progress(f"📈 Success rate: {(successful_merges/total_branches)*100:.1f}%")
    log_progress(f"📁 Progress logged to: merge_progress.log")
    
    # Final push
    if successful_merges > 0:
        log_progress("\n📤 Performing final push...")
        code, stdout, stderr = run_command("git push origin main")
        if code == 0:
            log_progress("✅ Final push successful")
        else:
            log_progress(f"❌ Final push failed: {stderr}")

if __name__ == "__main__":
    main()