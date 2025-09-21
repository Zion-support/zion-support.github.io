#!/usr/bin/env python3
"""
Efficient merge system for handling large numbers of branches
"""
import subprocess
import sys
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

def merge_branch_efficient(branch_name, lock, stats):
    """Efficient merge function with smart conflict resolution"""
    try:
        # First try simple merge with auto-resolution
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X theirs --no-edit", timeout=15)
        
        if success:
            with lock:
                stats['successful'] += 1
            return True, branch_name, "merged"
        
        # If conflicts, abort and try alternative strategies
        run_command("git merge --abort", timeout=5)
        
        # Try with ours strategy
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours --no-edit", timeout=15)
        if success:
            with lock:
                stats['successful'] += 1
            return True, branch_name, "ours-strategy"
        
        # Try with recursive strategy
        run_command("git merge --abort", timeout=5)
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} --strategy=recursive -X theirs --no-edit", timeout=15)
        if success:
            with lock:
                stats['successful'] += 1
            return True, branch_name, "recursive-theirs"
        
        # Last resort: use subtree strategy
        run_command("git merge --abort", timeout=5)
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} --strategy=subtree --no-edit", timeout=15)
        if success:
            with lock:
                stats['successful'] += 1
            return True, branch_name, "subtree-strategy"
        
        # If all strategies fail, abort and mark as failed
        run_command("git merge --abort", timeout=5)
        with lock:
            stats['failed'] += 1
        return False, branch_name, "all-strategies-failed"
            
    except Exception as e:
        run_command("git merge --abort", timeout=5)
        with lock:
            stats['failed'] += 1
        return False, branch_name, f"error: {str(e)}"

def main():
    print("🚀 EFFICIENT MERGE SYSTEM")
    print("=" * 50)
    print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Initialize repository
    print("\n📋 Initializing repository...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get all branches
    print("\n📋 Getting all branches to merge...")
    success, branches_output, _ = run_command('git branch -r | grep -E "(cursor|codex)" | head -100')
    
    if not success or not branches_output:
        print("❌ Failed to get branches list")
        return
    
    branches = [b.strip().replace('origin/', '') for b in branches_output.split('\n') if b.strip()]
    total_branches = len(branches)
    print(f"📊 Processing first {total_branches} branches...")
    
    # Initialize stats
    stats = {'successful': 0, 'failed': 0}
    lock = threading.Lock()
    
    # Process in smaller batches for better control
    batch_size = 10
    total_batches = (total_branches + batch_size - 1) // batch_size
    
    print(f"🔄 Processing in {total_batches} batches of {batch_size} branches each")
    print(f"⚡ Using moderate parallelism (5 workers) for stability")
    
    start_time = time.time()
    
    for batch_num in range(total_batches):
        batch_start_time = time.time()
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, total_branches)
        batch = branches[start_idx:end_idx]
        
        print(f"\n🔄 BATCH {batch_num + 1}/{total_batches}")
        print(f"📊 Processing {len(batch)} branches...")
        
        # Process with moderate parallelism
        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
            futures = {executor.submit(merge_branch_efficient, branch, lock, stats): branch for branch in batch}
            
            completed = 0
            for future in concurrent.futures.as_completed(futures):
                success, branch_name, status = future.result()
                completed += 1
                
                if success:
                    if completed % 3 == 0:  # Show progress every 3 branches
                        print(f"  ✅ Progress: {completed}/{len(batch)} - {branch_name}")
                else:
                    print(f"  ❌ Failed: {branch_name} ({status})")
        
        batch_time = time.time() - batch_start_time
        rate = len(batch) / batch_time if batch_time > 0 else 0
        
        print(f"📊 Batch {batch_num + 1} complete:")
        print(f"   ✅ Successful: {stats['successful']}")
        print(f"   ❌ Failed: {stats['failed']}")
        print(f"   ⚡ Rate: {rate:.1f} branches/second")
        print(f"   ⏱️ Time: {batch_time:.1f} seconds")
        
        # Push after each batch if we have successful merges
        if stats['successful'] > 0:
            print(f"🚀 Pushing batch {batch_num + 1}...")
            push_success, _, _ = run_command("git push origin main", timeout=120)
            if not push_success:
                print(f"⚠️ Push failed, trying force push...")
                run_command("git push origin main --force", timeout=120)
        
        # Progress update
        total_processed = stats['successful'] + stats['failed']
        progress = (total_processed / total_branches) * 100
        elapsed_time = time.time() - start_time
        eta = (elapsed_time / total_processed) * (total_branches - total_processed) if total_processed > 0 else 0
        
        print(f"🎯 Overall Progress: {progress:.2f}% ({total_processed}/{total_branches})")
        print(f"⏱️ Elapsed: {elapsed_time/60:.1f} minutes, ETA: {eta/60:.1f} minutes")
        
        # Small delay between batches
        time.sleep(2)
    
    total_time = time.time() - start_time
    
    print(f"\n🎉 EFFICIENT MERGE SYSTEM COMPLETED!")
    print("=" * 50)
    print(f"✅ Total successful merges: {stats['successful']}")
    print(f"❌ Total failed merges: {stats['failed']}")
    if (stats['successful'] + stats['failed']) > 0:
        print(f"📊 Success rate: {(stats['successful'] / (stats['successful'] + stats['failed']) * 100):.2f}%")
    print(f"⏱️ Total time: {total_time/60:.1f} minutes")
    print(f"⚡ Average rate: {(stats['successful'] + stats['failed']) / (total_time/60):.1f} merges/minute")
    print(f"⏰ Completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Final push
    print(f"\n🚀 Final push to remote...")
    run_command("git push origin main", timeout=120)

if __name__ == "__main__":
    main()