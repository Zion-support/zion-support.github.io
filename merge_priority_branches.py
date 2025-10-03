#!/usr/bin/env python3
"""
Priority merge script for the most important unmerged branches
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
    print("🔄 Starting priority merge of most important branches...")
    
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
    
    # List of priority branches to merge (most recent and important)
    priority_branches = [
        # Recent content and services (2025)
        "origin/chore/add-more-content-and-promos-2025-09-30",
        "origin/chore/add-oct-13-2025-content-and-home-advertising",
        "origin/chore/add-oct-04-content-and-home-promo",
        "origin/candidate/netlify-build-fix-2025-09-17",
        "origin/candidate/netlify-fix",
        
        # Codex fixes and improvements
        "origin/cecb7u-codex/implement-swr-for-service-fetch",
        "origin/c6z/enhancements",
        
        # Chore improvements
        "origin/chore/add-new-services-and-advertising",
        "origin/chore/add-latest-content-and-promos",
        
        # Build and deployment fixes
        "origin/candidate/build-fix-postcss-esm",
        "origin/candidate/fix-errors-and-merge-to-main-a79e",
        "origin/candidate/fix-syntax-push-and-merge-to-main-44ce",
        
        # TypeScript and component fixes
        "origin/bw06m0-codex/fix-typescript-errors-in-components",
        "origin/bwren1-codex/fix-typescript-errors-in-files",
        
        # Footer and 404 fixes
        "origin/0nylrk-codex-fix-footer-contact-link-resolved",
        "origin/0smfo8-codex-fix-404-error-resolved",
        
        # Build fixes
        "origin/build-fixes-clean",
        "origin/build-fixes-main",
        "origin/build-fixes-working",
        
        # AI dashboard improvements
        "origin/ai-dashboard-improvements",
        
        # Content branches
        "origin/add-new-2026-content",
        "origin/add-revolutionary-content-2026",
        "origin/ai-2027-content-integration"
    ]
    
    successful_merges = []
    failed_merges = []
    skipped_branches = []
    
    for branch in priority_branches:
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
    print(f"\n📊 Priority Merge Summary:")
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
    
    print("\n🎉 Priority merge process completed!")
    return 0 if not failed_merges else 1

if __name__ == "__main__":
    sys.exit(main())