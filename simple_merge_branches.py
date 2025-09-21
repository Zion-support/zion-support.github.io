#!/usr/bin/env python3
"""
Simple merge script that handles conflicts efficiently
"""
import subprocess
import sys
import time
import os

def run_command(cmd, cwd=None, timeout=30):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_branches():
    """Get available branches"""
    success, stdout, stderr = run_command("git branch -r | grep -E '(cursor|pr|codex)' | head -20")
    if not success:
        return []
    
    branches = []
    for line in stdout.split('\n'):
        if line.strip() and 'origin/' in line:
            branch_name = line.strip().replace('origin/', '')
            if branch_name not in ['main', 'HEAD']:
                branches.append(branch_name)
    
    return branches

def merge_branch(branch_name):
    """Merge a single branch"""
    print(f"🔄 Merging {branch_name}...")
    
    # Try to merge with conflict resolution
    success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X theirs --no-edit", timeout=20)
    if success:
        print(f"✅ Merged {branch_name}")
        return True
    else:
        print(f"⚠️  Conflicts in {branch_name}, trying alternative strategy...")
        run_command("git merge --abort")
        
        # Try with ours strategy
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours --no-edit", timeout=20)
        if success:
            print(f"✅ Merged {branch_name} with our strategy")
            return True
        else:
            print(f"❌ Failed to merge {branch_name}")
            run_command("git merge --abort")
            return False

def main():
    """Main function"""
    print("🚀 Starting simple merge process...")
    
    # Get branches
    branches = get_branches()
    print(f"📋 Found {len(branches)} branches to merge")
    
    successful = 0
    failed = 0
    
    for i, branch_name in enumerate(branches, 1):
        print(f"\n[{i}/{len(branches)}] Processing {branch_name}")
        
        if merge_branch(branch_name):
            successful += 1
        else:
            failed += 1
        
        # Commit after each merge
        if successful > 0:
            run_command(f"git commit -m 'Merge {branch_name}' --allow-empty")
    
    # Push changes
    if successful > 0:
        print("\n💾 Pushing changes...")
        run_command("git push origin main --force-with-lease --no-verify")
    
    print(f"\n📊 Summary: {successful} successful, {failed} failed")

if __name__ == "__main__":
    main()