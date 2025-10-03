#!/usr/bin/env python3
"""
Smart merge script for improvement branches
"""

import subprocess
import sys
import os

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

def main():
    print("🔄 Starting smart merge of improvement branches...")
    
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
    
    # List of improvement branches to merge (prioritized)
    improvement_branches = [
        "origin/chore/comprehensive-improvements-20250911-164626",
        "origin/chore/broad-improvements-20250911-163039", 
        "origin/chore/homepage-improvements",
        "origin/chore/improve-homepage",
        "origin/chore/front-page-futuristic-improvements",
        "origin/chore/automation-improvements",
        "origin/chore/ci-and-improvement",
        "origin/chore/ide-and-ci-improvements",
        "origin/ai-dashboard-improvements",
        "origin/website-improvements-clean",
        "origin/zion-improvements-final",
        "origin/working-improvements"
    ]
    
    successful_merges = []
    failed_merges = []
    
    for branch in improvement_branches:
        print(f"\n🔄 Attempting to merge: {branch}")
        
        # Check if branch exists
        success, output = run_command(f"git ls-remote --heads origin {branch.replace('origin/', '')}")
        if not success or not output.strip():
            print(f"⚠️  Branch {branch} does not exist, skipping...")
            continue
        
        # Try to merge
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
            print(f"❌ Failed to merge {branch}")
            print(f"   Error: {output}")
            
            # Try to resolve conflicts automatically
            conflict_files = []
            success, output = run_command("git diff --name-only --diff-filter=U")
            if success and output.strip():
                conflict_files = output.strip().split('\n')
                print(f"🔧 Found conflicts in: {conflict_files}")
                
                # Try to resolve conflicts by taking incoming changes
                for file in conflict_files:
                    if os.path.exists(file):
                        print(f"🔧 Resolving conflicts in {file}...")
                        success, output = run_command(f"git checkout --theirs {file}")
                        if success:
                            run_command(f"git add {file}")
                
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
                    # Abort the merge
                    run_command("git merge --abort")
                    failed_merges.append(branch)
            else:
                failed_merges.append(branch)
    
    # Summary
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successful merges: {len(successful_merges)}")
    print(f"❌ Failed merges: {len(failed_merges)}")
    
    if successful_merges:
        print(f"\n✅ Successfully merged branches:")
        for branch in successful_merges:
            print(f"   - {branch}")
    
    if failed_merges:
        print(f"\n❌ Failed to merge branches:")
        for branch in failed_merges:
            print(f"   - {branch}")
    
    # Final status
    print(f"\n📋 Final git status:")
    run_command("git status --short")
    
    print("\n🎉 Smart merge process completed!")
    return 0 if not failed_merges else 1

if __name__ == "__main__":
    sys.exit(main())