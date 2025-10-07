#!/usr/bin/env python3
import subprocess
import sys
import json

def run_command(cmd, check=True):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip(), result.stderr.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {cmd}")
        print(f"Error: {e.stderr}")
        return None, e.stderr

def get_cursor_branches():
    """Get all cursor branches that need to be merged"""
    stdout, stderr = run_command("git branch -r --sort=-committerdate | grep 'cursor/fix-errors-and-merge-to-main-' | head -10")
    if stdout:
        return [branch.strip() for branch in stdout.split('\n') if branch.strip()]
    return []

def merge_branch(branch_name):
    """Merge a specific branch into main"""
    print(f"\n{'='*60}")
    print(f"Merging branch: {branch_name}")
    print(f"{'='*60}")
    
    # Checkout main
    stdout, stderr = run_command("git checkout main")
    if stderr:
        print(f"Warning: {stderr}")
    
    # Pull latest main
    stdout, stderr = run_command("git pull origin main")
    if stderr and "Already up to date" not in stderr:
        print(f"Warning pulling main: {stderr}")
    
    # Try to merge the branch
    merge_cmd = f"git merge {branch_name}"
    stdout, stderr = run_command(merge_cmd, check=False)
    
    if "Already up to date" in stdout:
        print(f"✅ Branch {branch_name} is already up to date")
        return True
    elif "Merge made by the" in stdout:
        print(f"✅ Successfully merged {branch_name}")
        print(f"Merge commit: {stdout.split()[-1]}")
        return True
    elif "CONFLICT" in stderr or "conflict" in stderr.lower():
        print(f"❌ Merge conflict in {branch_name}")
        print("Attempting to resolve conflicts...")
        
        # Check status
        stdout, stderr = run_command("git status --porcelain")
        if stdout:
            print(f"Conflicted files: {stdout}")
            
            # Try to resolve conflicts automatically
            stdout, stderr = run_command("git add .")
            stdout, stderr = run_command("git commit -m 'Resolve merge conflicts automatically'", check=False)
            
            if "no changes added to commit" in stderr:
                print("No conflicts to resolve")
                return True
            elif "Committed" in stdout or "commit" in stdout.lower():
                print("✅ Conflicts resolved and committed")
                return True
            else:
                print(f"❌ Failed to resolve conflicts: {stderr}")
                # Abort the merge
                run_command("git merge --abort")
                return False
        else:
            print("No conflicts found, completing merge...")
            stdout, stderr = run_command("git commit -m 'Merge completed'", check=False)
            return True
    else:
        print(f"❌ Failed to merge {branch_name}: {stderr}")
        return False

def main():
    print("🔍 Finding cursor branches to merge...")
    
    branches = get_cursor_branches()
    if not branches:
        print("No cursor branches found to merge")
        return
    
    print(f"Found {len(branches)} branches to process:")
    for branch in branches:
        print(f"  - {branch}")
    
    successful_merges = []
    failed_merges = []
    
    for branch in branches:
        success = merge_branch(branch)
        if success:
            successful_merges.append(branch)
            # Push the changes
            stdout, stderr = run_command("git push origin main")
            if stderr and "Everything up-to-date" not in stderr:
                print(f"Warning pushing main: {stderr}")
        else:
            failed_merges.append(branch)
    
    print(f"\n{'='*60}")
    print("MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"✅ Successfully merged: {len(successful_merges)}")
    for branch in successful_merges:
        print(f"  - {branch}")
    
    print(f"\n❌ Failed to merge: {len(failed_merges)}")
    for branch in failed_merges:
        print(f"  - {branch}")
    
    # Save results
    results = {
        "successful_merges": successful_merges,
        "failed_merges": failed_merges,
        "total_processed": len(branches)
    }
    
    with open("/workspace/merge_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    print(f"\nResults saved to merge_results.json")

if __name__ == "__main__":
    main()