#!/usr/bin/env python3
"""
Smart merge script for fix and enhancement branches
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
    print("🔄 Starting smart merge of fix and enhancement branches...")
    
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
    
    # List of fix and enhancement branches to merge (prioritized)
    fix_branches = [
        "origin/build-fixes-clean",
        "origin/build-fixes-main", 
        "origin/build-fixes-working",
        "origin/0nylrk-codex-fix-footer-contact-link-resolved",
        "origin/0smfo8-codex-fix-404-error-resolved",
        "origin/bw06m0-codex/fix-typescript-errors-in-components",
        "origin/bwren1-codex/fix-typescript-errors-in-files",
        "origin/candidate/build-fix-postcss-esm",
        "origin/candidate/fix-errors-and-merge-to-main-a79e",
        "origin/candidate/fix-syntax-push-and-merge-to-main-44ce",
        "origin/chore/automation-ci-fixes",
        "origin/chore/automation-and-tests-fixes",
        "origin/chore/animated-section-typing-fix",
        "origin/chore/analysis-fixes-and-navigation"
    ]
    
    successful_merges = []
    failed_merges = []
    
    for branch in fix_branches:
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