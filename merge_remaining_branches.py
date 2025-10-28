#!/usr/bin/env python3
"""
Script to merge remaining available branches
"""
import subprocess
import json

def run_command(cmd, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout, result.stderr, result.returncode
    except subprocess.CalledProcessError as e:
        return e.stdout, e.stderr, e.returncode

def get_available_branches():
    """Get list of available remote branches"""
    stdout, stderr, returncode = run_command("git branch -r | grep 'cursor/fix-errors-and-merge-to-main' | head -20")
    if returncode != 0:
        return []
    
    branches = []
    for line in stdout.strip().split('\n'):
        if line.strip():
            branch_name = line.strip().replace('origin/', '')
            branches.append(branch_name)
    
    return branches

def merge_branch(branch_name):
    """Merge a branch into main"""
    print(f"\n🔄 Attempting to merge: {branch_name}")
    
    # Try to checkout the branch
    checkout_cmd = f"git checkout -b {branch_name} origin/{branch_name}"
    stdout, stderr, returncode = run_command(checkout_cmd, check=False)
    
    if returncode != 0:
        print(f"⚠️  Could not checkout {branch_name}: {stderr.strip()}")
        return False
    
    # Switch back to main
    run_command("git checkout main")
    
    # Try to merge
    merge_cmd = f"git merge {branch_name}"
    stdout, stderr, returncode = run_command(merge_cmd, check=False)
    
    if returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    elif "Already up to date" in stdout:
        print(f"ℹ️  Branch {branch_name} is already up to date")
        return True
    elif "CONFLICT" in stderr:
        print(f"⚠️  Merge conflict in {branch_name}, resolving...")
        return resolve_and_merge(branch_name)
    else:
        print(f"❌ Failed to merge {branch_name}: {stderr.strip()}")
        return False

def resolve_and_merge(branch_name):
    """Resolve conflicts and complete merge"""
    # Run the conflict resolution script
    stdout, stderr, returncode = run_command("python3 resolve_conflicts.py", check=False)
    
    if returncode == 0:
        print(f"✅ Successfully resolved conflicts for {branch_name}")
        return True
    else:
        print(f"❌ Failed to resolve conflicts for {branch_name}: {stderr}")
        return False

def main():
    """Main function"""
    print("🚀 Starting to merge remaining branches...")
    
    # Get available branches
    branches = get_available_branches()
    print(f"📋 Found {len(branches)} available branches")
    
    successful_merges = 0
    failed_merges = 0
    
    for branch_name in branches:
        if merge_branch(branch_name):
            successful_merges += 1
        else:
            failed_merges += 1
    
    print(f"\n📊 Merge Summary:")
    print(f"   ✅ Successful: {successful_merges}")
    print(f"   ❌ Failed: {failed_merges}")
    print(f"   📈 Total: {len(branches)}")
    
    # Push all changes
    print(f"\n🚀 Pushing changes to main...")
    stdout, stderr, returncode = run_command("git push origin main --force", check=False)
    
    if returncode == 0:
        print("✅ Successfully pushed all changes to main")
    else:
        print(f"❌ Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()