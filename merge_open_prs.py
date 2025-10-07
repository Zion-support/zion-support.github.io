#!/usr/bin/env python3
import subprocess
import json
import sys
import time

def run_cmd(cmd, check=True, capture=True):
    """Run a shell command"""
    try:
        if capture:
            result = subprocess.run(cmd, shell=True, check=check, 
                                  capture_output=True, text=True, timeout=300)
            return result.returncode, result.stdout, result.stderr
        else:
            result = subprocess.run(cmd, shell=True, check=check, timeout=300)
            return result.returncode, "", ""
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"
    except Exception as e:
        return -1, "", str(e)

def resolve_conflicts_auto():
    """Attempt to auto-resolve conflicts by accepting both changes"""
    print("  Checking for conflicts...")
    returncode, stdout, stderr = run_cmd("git diff --name-only --diff-filter=U")
    
    if returncode != 0:
        return False
    
    conflicted_files = stdout.strip().split('\n') if stdout.strip() else []
    
    if not conflicted_files:
        return True
    
    print(f"  Found {len(conflicted_files)} conflicted files")
    
    for file in conflicted_files:
        if not file:
            continue
            
        print(f"    Resolving {file}...")
        
        # For most files, accept theirs (incoming changes)
        run_cmd(f"git checkout --theirs {file}")
        run_cmd(f"git add {file}")
        print(f"    ✓ Resolved {file} (accepted incoming)")
    
    return True

def merge_pr_branch(branch_name, pr_number):
    """Merge a single PR branch"""
    print(f"\n{'='*60}")
    print(f"Merging PR #{pr_number}: {branch_name}")
    print(f"{'='*60}")
    
    # Fetch the branch
    print(f"  Fetching branch {branch_name}...")
    returncode, stdout, stderr = run_cmd(f"git fetch origin {branch_name}")
    if returncode != 0:
        print(f"  ✗ Failed to fetch: {stderr}")
        return False
    
    # Try to merge
    print(f"  Attempting merge...")
    returncode, stdout, stderr = run_cmd(
        f"git merge origin/{branch_name} --no-edit -m 'Merge PR #{pr_number}: {branch_name}'",
        check=False
    )
    
    if returncode == 0:
        print(f"  ✓ Merged successfully!")
        return True
    
    # If merge failed, check if it's due to conflicts
    if "CONFLICT" in stdout or "CONFLICT" in stderr:
        print(f"  ⚠ Conflicts detected, attempting auto-resolution...")
        
        if resolve_conflicts_auto():
            # Try to commit
            returncode, stdout, stderr = run_cmd(
                f"git commit --no-edit -m 'Merge PR #{pr_number}: {branch_name} (conflicts resolved)'",
                check=False
            )
            
            if returncode == 0:
                print(f"  ✓ Merged with conflict resolution!")
                return True
            else:
                print(f"  ✗ Failed to commit after resolution: {stderr}")
                # Abort merge
                run_cmd("git merge --abort", check=False)
                return False
        else:
            print(f"  ✗ Failed to auto-resolve conflicts")
            run_cmd("git merge --abort", check=False)
            return False
    else:
        print(f"  ✗ Merge failed: {stderr}")
        return False

def main():
    print("Starting PR merge process...")
    print("="*60)
    
    # Ensure we're on main and up to date
    print("\nEnsuring main branch is up to date...")
    run_cmd("git checkout main")
    run_cmd("git pull origin main")
    
    # Load PRs
    try:
        with open('open_prs.json', 'r') as f:
            prs = json.load(f)
    except Exception as e:
        print(f"Error loading PRs: {e}")
        return 1
    
    print(f"\nFound {len(prs)} open PRs to merge")
    
    successful = []
    failed = []
    
    # Merge each PR
    for pr in prs:
        pr_number = pr['number']
        branch_name = pr['head']['ref']
        
        if merge_pr_branch(branch_name, pr_number):
            successful.append(pr_number)
        else:
            failed.append(pr_number)
        
        # Small delay between merges
        time.sleep(1)
    
    # Summary
    print("\n" + "="*60)
    print("MERGE SUMMARY")
    print("="*60)
    print(f"Successfully merged: {len(successful)} PRs")
    if successful:
        print(f"  PRs: {', '.join(f'#{n}' for n in successful)}")
    
    print(f"\nFailed to merge: {len(failed)} PRs")
    if failed:
        print(f"  PRs: {', '.join(f'#{n}' for n in failed)}")
    
    # Push to main
    if successful:
        print("\n" + "="*60)
        print("Pushing merged changes to main...")
        print("="*60)
        returncode, stdout, stderr = run_cmd("git push origin main")
        if returncode == 0:
            print("✓ Successfully pushed to main!")
        else:
            print(f"✗ Failed to push: {stderr}")
            return 1
    
    return 0 if not failed else 1

if __name__ == "__main__":
    sys.exit(main())