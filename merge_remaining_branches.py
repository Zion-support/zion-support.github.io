#!/usr/bin/env python3
"""
Comprehensive merge script for remaining branches
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
    print("🔄 Starting comprehensive merge of remaining branches...")
    
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
    
    # List of remaining branches to merge (prioritized by importance)
    remaining_branches = [
        # Content and services branches
        "origin/add-new-2026-content",
        "origin/add-revolutionary-content-2026",
        "origin/ai-2027-content-integration",
        "origin/candidate/content-refresh-2025-09-16",
        "origin/candidate/content-sept-15-2025",
        "origin/chore/add-2027-content-and-homepage-promo",
        "origin/chore/add-and-promote-new-content",
        "origin/chore/add-jan-2027-content-and-ads",
        "origin/chore/add-latest-content-2025-09-16",
        "origin/chore/add-latest-content-and-advertise",
        "origin/chore/add-services-and-futuristic-updates",
        "origin/chore/add-updates-2025-09-16",
        
        # Website and enhancement branches
        "origin/website-audit-and-enhancement",
        "origin/website-improvements-and-deployment",
        "origin/website-improvements-and-fixes",
        "origin/website-enhancements-v2",
        "origin/website-improvements-2025",
        "origin/website-improvements-clean",
        
        # Service and solution branches
        "origin/services-expansion",
        "origin/services-expansion-2025",
        "origin/zion-services-improvements",
        "origin/zion-improvements-clean",
        "origin/zion-improvements-2025",
        
        # Working and stable branches
        "origin/working-version",
        "origin/working-website-build",
        "origin/working-zion-app",
        "origin/working-site-final",
        "origin/working-site-main-final",
        
        # Revolutionary and cutting-edge branches
        "origin/revolutionary-2026-content-integration",
        "origin/revolutionary-content-2026",
        "origin/revolutionary-improvements-final",
        "origin/zion-2026-cutting-edge-services",
        "origin/ultimate-neural-fusion-content",
        
        # Production and deployment branches
        "origin/production-improvements-v2",
        "origin/production-ready-improvements",
        "origin/stable-build-version",
        "origin/working-foundation-with-improvements"
    ]
    
    successful_merges = []
    failed_merges = []
    skipped_branches = []
    
    for branch in remaining_branches:
        print(f"\n🔄 Attempting to merge: {branch}")
        
        # Check if branch exists
        success, output = run_command(f"git ls-remote --heads origin {branch.replace('origin/', '')}")
        if not success or not output.strip():
            print(f"⚠️  Branch {branch} does not exist, skipping...")
            skipped_branches.append(branch)
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
    print(f"\n📊 Comprehensive Merge Summary:")
    print(f"✅ Successful merges: {len(successful_merges)}")
    print(f"❌ Failed merges: {len(failed_merges)}")
    print(f"⚠️  Skipped branches: {len(skipped_branches)}")
    
    if successful_merges:
        print(f"\n✅ Successfully merged branches:")
        for branch in successful_merges:
            print(f"   - {branch}")
    
    if failed_merges:
        print(f"\n❌ Failed to merge branches:")
        for branch in failed_merges:
            print(f"   - {branch}")
    
    if skipped_branches:
        print(f"\n⚠️  Skipped branches:")
        for branch in skipped_branches[:5]:  # Show first 5
            print(f"   - {branch}")
        if len(skipped_branches) > 5:
            print(f"   ... and {len(skipped_branches) - 5} more")
    
    # Final status
    print(f"\n📋 Final git status:")
    run_command("git status --short")
    
    print("\n🎉 Comprehensive merge process completed!")
    return 0 if not failed_merges else 1

if __name__ == "__main__":
    sys.exit(main())