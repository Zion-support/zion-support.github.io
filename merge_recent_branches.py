#!/usr/bin/env python3
"""
Systematic merge script for recent cursor branches
"""

import subprocess
import json
import sys
from datetime import datetime, timedelta

def run_git(cmd, check=True, timeout=60):
    """Run a git command"""
    full_cmd = f"git {cmd}"
    print(f"→ {full_cmd}")
    try:
        result = subprocess.run(
            full_cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout
        )
        if result.stdout:
            print(result.stdout)
        if result.stderr and result.returncode != 0:
            print(f"Error: {result.stderr}")
        return result.returncode == 0, result.stdout.strip()
    except subprocess.TimeoutExpired:
        print(f"⚠ Command timed out")
        return False, ""
    except Exception as e:
        print(f"⚠ Exception: {e}")
        return False, ""

def get_recent_branches():
    """Get recent cursor branches"""
    success, output = run_git("for-each-ref --sort=-committerdate refs/remotes/origin/cursor --format='%(committerdate:short) %(refname:short)'")
    if not success:
        return []
    
    branches = []
    for line in output.split('\n'):
        if line.strip():
            parts = line.split(' ', 1)
            if len(parts) == 2:
                date_str, branch = parts
                # Only include branches from today or yesterday
                try:
                    branch_date = datetime.strptime(date_str, '%Y-%m-%d')
                    if branch_date >= datetime.now() - timedelta(days=1):
                        branches.append(branch)
                except:
                    continue
    
    return branches[:50]  # Limit to 50 most recent

def safe_merge(branch_name):
    """Safely merge a branch"""
    print(f"\n🔄 Attempting to merge {branch_name}...")
    
    # Check if branch has changes not in main
    success, diff = run_git(f"diff main..{branch_name} --name-only", check=False)
    if not success or not diff.strip():
        print(f"  → No changes to merge, skipping")
        return True
    
    # Try to merge
    success, output = run_git(f"merge {branch_name} --no-ff -m 'Merge {branch_name}: Recent improvements'", check=False)
    
    if success:
        print(f"  ✅ Successfully merged {branch_name}")
        return True
    else:
        # Check for conflicts
        success, conflicts = run_git("diff --name-only --diff-filter=U", check=False)
        if conflicts:
            print(f"  ⚠ Conflicts detected in: {conflicts.split()[0] if conflicts else 'unknown'}")
            print(f"  → Attempting to resolve conflicts...")
            
            # Try to resolve conflicts automatically
            try:
                # Reset to main and try merge with strategy
                run_git("reset --hard HEAD", check=False)
                success, _ = run_git(f"merge {branch_name} -X theirs --no-ff -m 'Auto-merge {branch_name}: Resolved conflicts'", check=False)
                
                if success:
                    print(f"  ✅ Conflicts resolved and merged {branch_name}")
                    return True
                else:
                    print(f"  ❌ Could not resolve conflicts for {branch_name}")
                    run_git("reset --hard HEAD", check=False)
                    return False
            except:
                print(f"  ❌ Failed to resolve conflicts for {branch_name}")
                run_git("reset --hard HEAD", check=False)
                return False
        else:
            print(f"  ❌ Merge failed for {branch_name}: {output}")
            return False

def main():
    print("="*80)
    print(" SYSTEMATIC MERGE OF RECENT CURSOR BRANCHES")
    print("="*80)
    print()
    
    # Ensure we're on main and up to date
    print("STEP 1: Updating main branch...")
    print("-"*80)
    run_git("checkout main", check=False)
    run_git("pull origin main", check=False)
    print()
    
    # Get recent branches
    print("STEP 2: Finding recent branches...")
    print("-"*80)
    branches = get_recent_branches()
    print(f"Found {len(branches)} recent branches to process")
    print()
    
    # Merge branches
    print("STEP 3: Merging branches...")
    print("-"*80)
    
    success_count = 0
    fail_count = 0
    merge_log = []
    
    for i, branch in enumerate(branches, 1):
        print(f"\n[{i}/{len(branches)}] Processing {branch}...")
        
        # Skip if it's already merged
        success, merged = run_git(f"branch --merged main", check=False)
        if success and branch in merged:
            print(f"  → Already merged, skipping")
            continue
        
        success = safe_merge(branch)
        if success:
            success_count += 1
            merge_log.append({"branch": branch, "status": "success", "timestamp": datetime.now().isoformat()})
        else:
            fail_count += 1
            merge_log.append({"branch": branch, "status": "failed", "timestamp": datetime.now().isoformat()})
    
    # Push changes
    print(f"\nSTEP 4: Pushing changes...")
    print("-"*80)
    success, _ = run_git("push origin main", check=False)
    if success:
        print("✅ Successfully pushed to origin/main")
    else:
        print("⚠ Push failed or had issues")
    
    # Create summary
    summary = {
        "timestamp": datetime.now().isoformat(),
        "total_branches": len(branches),
        "successful_merges": success_count,
        "failed_merges": fail_count,
        "merge_log": merge_log
    }
    
    with open('merge_summary.json', 'w') as f:
        json.dump(summary, f, indent=2)
    
    print(f"\n" + "="*80)
    print(" MERGE SUMMARY")
    print("="*80)
    print(f"Total branches processed: {len(branches)}")
    print(f"Successful merges: {success_count}")
    print(f"Failed merges: {fail_count}")
    print(f"Summary saved to: merge_summary.json")
    print("="*80)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\nFatal error: {e}")
        sys.exit(1)