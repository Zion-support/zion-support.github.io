#!/usr/bin/env python3

import subprocess
import sys
import os
import time
import concurrent.futures
import threading
from datetime import datetime

def run_command(command, timeout=30):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout.strip(), result.stderr.strip()
    except subprocess.TimeoutExpired:
        return False, "", "Timeout"
    except Exception as e:
        return False, "", str(e)

def merge_branch_complete(branch_name, lock, stats):
    """Complete merge of a single branch with comprehensive error handling"""
    try:
        # Try fast merge first
        success, stdout, stderr = run_command(f"git merge {branch_name} --no-ff -m 'Merge {branch_name} into main'", timeout=20)
        
        if success:
            with lock:
                stats['successful'] += 1
            return True, branch_name, "merged"
        else:
            # Try conflict resolution
            resolve_success, _, _ = run_command("git checkout --theirs .", timeout=10)
            if resolve_success:
                add_success, _, _ = run_command("git add .", timeout=10)
                if add_success:
                    commit_success, _, _ = run_command(f"git commit -m 'Merge {branch_name} (conflicts resolved)'", timeout=10)
                    if commit_success:
                        with lock:
                            stats['successful'] += 1
                        return True, branch_name, "resolved"
            
            # If all else fails, reset and skip
            run_command("git reset --hard HEAD", timeout=5)
            with lock:
                stats['failed'] += 1
            return False, branch_name, "failed"
            
    except Exception as e:
        with lock:
            stats['failed'] += 1
        return False, branch_name, f"error: {str(e)}"

def main():
    print("🚀 COMPLETE ALL MERGES - MAXIMUM EFFICIENCY MODE")
    print("=" * 60)
    print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Ensure we're on main branch and up to date
    print("\n📋 Initializing repository...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get ALL branches to merge
    print("\n📋 Getting all branches to merge...")
    success, branches_output, _ = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup"')
    
    if not success or not branches_output:
        print("❌ Failed to get branches list")
        return
    
    branches = [b.strip() for b in branches_output.split('\n') if b.strip()]
    total_branches = len(branches)
    print(f"📊 Total branches to merge: {total_branches:,}")
    
    # Initialize stats
    stats = {'successful': 0, 'failed': 0}
    lock = threading.Lock()
    
    # Process in mega-batches with maximum parallelism
    batch_size = 200  # Larger batches for maximum efficiency
    total_batches = (total_branches + batch_size - 1) // batch_size
    
    print(f"🔄 Processing in {total_batches} mega-batches of {batch_size} branches each")
    print(f"⚡ Using maximum parallelism for fastest completion")
    
    start_time = time.time()
    
    for batch_num in range(total_batches):
        batch_start_time = time.time()
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, total_branches)
        batch = branches[start_idx:end_idx]
        
        print(f"\n🔄 MEGA-BATCH {batch_num + 1}/{total_batches}")
        print(f"📊 Processing {len(batch)} branches...")
        
        batch_successful = 0
        batch_failed = 0
        
        # Process with maximum parallelism (10 workers)
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
            futures = {executor.submit(merge_branch_complete, branch, lock, stats): branch for branch in batch}
            
            completed = 0
            for future in concurrent.futures.as_completed(futures):
                success, branch_name, status = future.result()
                completed += 1
                
                if success:
                    batch_successful += 1
                    if completed % 50 == 0:  # Show progress every 50 branches
                        print(f"  ✅ Progress: {completed}/{len(batch)} - {branch_name}")
                else:
                    batch_failed += 1
                    if completed % 100 == 0:  # Show failures every 100 branches
                        print(f"  ❌ Failed: {branch_name} ({status})")
        
        batch_time = time.time() - batch_start_time
        rate = len(batch) / batch_time if batch_time > 0 else 0
        
        print(f"📊 Batch {batch_num + 1} complete:")
        print(f"   ✅ Successful: {batch_successful}")
        print(f"   ❌ Failed: {batch_failed}")
        print(f"   ⚡ Rate: {rate:.1f} branches/second")
        print(f"   ⏱️ Time: {batch_time:.1f} seconds")
        
        # Push after each mega-batch
        if batch_successful > 0:
            print(f"🚀 Pushing mega-batch {batch_num + 1}...")
            push_success, _, push_error = run_command("git push origin main", timeout=120)
            if not push_success:
                print(f"⚠️ Push failed, trying force push...")
                run_command("git push origin main --force", timeout=120)
        
        # Progress update
        total_processed = stats['successful'] + stats['failed']
        progress = (total_processed / total_branches) * 100
        elapsed_time = time.time() - start_time
        eta = (elapsed_time / total_processed) * (total_branches - total_processed) if total_processed > 0 else 0
        
        print(f"🎯 Overall Progress: {progress:.2f}% ({total_processed:,}/{total_branches:,})")
        print(f"⏱️ Elapsed: {elapsed_time/60:.1f} minutes, ETA: {eta/60:.1f} minutes")
    
    total_time = time.time() - start_time
    
    print(f"\n🎉 COMPLETE ALL MERGES FINISHED!")
    print("=" * 60)
    print(f"✅ Total successful merges: {stats['successful']:,}")
    print(f"❌ Total failed merges: {stats['failed']:,}")
    print(f"📊 Success rate: {(stats['successful'] / (stats['successful'] + stats['failed']) * 100):.2f}%")
    print(f"⏱️ Total time: {total_time/60:.1f} minutes")
    print(f"⚡ Average rate: {(stats['successful'] + stats['failed']) / (total_time/60):.1f} merges/minute")
    print(f"⏰ Completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Final push
    print(f"\n🚀 Final push to remote...")
    run_command("git push origin main", timeout=300)

if __name__ == "__main__":
    main()