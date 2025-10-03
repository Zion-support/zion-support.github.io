#!/usr/bin/env python3
"""
Comprehensive merge script for cursor/fix-errors-and-merge-to-main branches
"""

import subprocess
import sys
import os
import re

def run_command(cmd, timeout=60):
    """Run a command and return success status and output"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout
        )
        return result.returncode == 0, result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return False, "Command timed out"
    except Exception as e:
        return False, f"Error: {e}"

def get_cursor_branches():
    """Get all cursor branches"""
    success, output = run_command("git branch -r | grep -E 'cursor/fix-errors-and-merge-to-main' | head -100")
    if not success:
        return []
    
    branches = []
    for line in output.strip().split('\n'):
        branch = line.strip().replace('origin/', '')
        if branch:
            branches.append(branch)
    
    return branches

def main():
    print("🔄 Starting comprehensive merge of cursor branches...")
    
    # Check if we're on main
    success, output = run_command("git branch --show-current")
    if not success or output.strip() != "main":
        print("❌ Not on main branch. Switching to main...")
        success, output = run_command("git checkout main")
        if not success:
            print(f"❌ Failed to switch to main: {output}")
            return 1
    
    # Pull latest changes
    print("📥 Pulling latest changes...")
    success, output = run_command("git pull origin main")
    if not success:
        print(f"⚠️  Warning: Could not pull latest changes: {output}")
    
    # Get cursor branches
    cursor_branches = get_cursor_branches()
    print(f"📊 Found {len(cursor_branches)} cursor branches to process")
    
    successful_merges = []
    failed_merges = []
    skipped_branches = []
    already_merged = []
    
    for i, branch in enumerate(cursor_branches, 1):
        print(f"\n🔄 Processing {i}/{len(cursor_branches)}: {branch}")
        
        # Check if branch is already merged
        success, output = run_command(f"git branch --merged main | grep '{branch}'")
        if success and output.strip():
            print(f"✅ Branch already merged, skipping...")
            already_merged.append(branch)
            continue
        
        # Check if branch exists remotely
        success, output = run_command(f"git ls-remote --heads origin {branch}")
        if not success or not output.strip():
            print(f"⚠️  Branch {branch} does not exist remotely, skipping...")
            skipped_branches.append(branch)
            continue
        
        # Create local branch if it doesn't exist
        success, output = run_command(f"git show-ref --verify --quiet refs/heads/{branch}")
        if not success:
            print(f"📋 Creating local branch from remote...")
            success, output = run_command(f"git checkout -b {branch} origin/{branch}")
            if not success:
                print(f"❌ Failed to create local branch: {output}")
                failed_merges.append(branch)
                continue
        else:
            print(f"📋 Updating existing local branch...")
            success, output = run_command(f"git checkout {branch}")
            if success:
                run_command(f"git pull origin {branch}")
        
        # Switch back to main
        success, output = run_command("git checkout main")
        if not success:
            print(f"❌ Failed to switch to main: {output}")
            failed_merges.append(branch)
            continue
        
        # Attempt to merge
        print(f"🔄 Attempting to merge {branch} into main...")
        success, output = run_command(f"git merge {branch} --no-edit --no-ff")
        
        if success:
            print(f"✅ Successfully merged {branch}")
            successful_merges.append(branch)
            
            # Push the merge
            push_success, push_output = run_command("git push origin main")
            if push_success:
                print(f"✅ Pushed merge to origin/main")
            else:
                print(f"⚠️  Could not push to origin: {push_output}")
        else:
            print(f"⚠️  Merge conflict detected for {branch}")
            
            # Check for merge conflicts
            success, output = run_command("git diff --name-only --diff-filter=U")
            if success and output.strip():
                conflict_files = output.strip().split('\n')
                print(f"🔧 Found conflicts in: {conflict_files}")
                
                # Try to resolve conflicts automatically by taking incoming changes
                resolved = True
                for file in conflict_files:
                    if os.path.exists(file):
                        print(f"🔧 Resolving conflicts in {file}...")
                        success, output = run_command(f"git checkout --theirs {file}")
                        if success:
                            run_command(f"git add {file}")
                        else:
                            print(f"❌ Failed to resolve conflicts in {file}")
                            resolved = False
                            break
                
                if resolved:
                    # Try to commit the resolution
                    success, output = run_command("git commit --no-edit")
                    if success:
                        print(f"✅ Resolved conflicts and merged {branch}")
                        successful_merges.append(branch)
                        
                        # Push the resolved merge
                        push_success, push_output = run_command("git push origin main")
                        if push_success:
                            print(f"✅ Pushed resolved merge to origin/main")
                        else:
                            print(f"⚠️  Could not push to origin: {push_output}")
                    else:
                        print(f"❌ Failed to commit conflict resolution: {output}")
                        run_command("git merge --abort")
                        failed_merges.append(branch)
                else:
                    # Abort the merge
                    run_command("git merge --abort")
                    failed_merges.append(branch)
            else:
                # No conflicts but merge failed - might be other issues
                run_command("git merge --abort")
                failed_merges.append(branch)
        
        # Clean up local branch
        run_command(f"git branch -D {branch} 2>/dev/null")
        
        # Progress update every 10 branches
        if i % 10 == 0:
            print(f"\n📊 Progress: {i}/{len(cursor_branches)} processed")
            print(f"✅ Successful: {len(successful_merges)}")
            print(f"❌ Failed: {len(failed_merges)}")
            print(f"⏭️  Skipped: {len(skipped_branches)}")
            print(f"✅ Already merged: {len(already_merged)}")
    
    # Summary
    print(f"\n📊 Comprehensive Cursor Branch Merge Summary:")
    print(f"✅ Successfully merged: {len(successful_merges)}")
    print(f"❌ Failed to merge: {len(failed_merges)}")
    print(f"⏭️  Skipped branches: {len(skipped_branches)}")
    print(f"✅ Already merged: {len(already_merged)}")
    
    if successful_merges:
        print(f"\n✅ Successfully merged branches (first 10):")
        for branch in successful_merges[:10]:
            print(f"   - {branch}")
        if len(successful_merges) > 10:
            print(f"   ... and {len(successful_merges) - 10} more")
    
    if failed_merges:
        print(f"\n❌ Failed to merge branches (first 10):")
        for branch in failed_merges[:10]:
            print(f"   - {branch}")
        if len(failed_merges) > 10:
            print(f"   ... and {len(failed_merges) - 10} more")
    
    # Final status
    print(f"\n📋 Final git status:")
    run_command("git status --short")
    
    print("\n🎉 Comprehensive cursor branch merge process completed!")
    return 0 if not failed_merges else 1

if __name__ == "__main__":
    sys.exit(main())