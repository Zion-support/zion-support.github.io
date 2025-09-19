#!/usr/bin/env python3

import subprocess
import sys
import os
from datetime import datetime

def run_command(command, description=""):
    """Run a shell command and return the result"""
    try:
        print(f"🔄 {description}...")
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            print(f"✅ {description} completed successfully")
            return result.stdout.strip()
        else:
            print(f"⚠️ {description} had issues: {result.stderr.strip()}")
            return None
    except subprocess.TimeoutExpired:
        print(f"⏰ {description} timed out")
        return None
    except Exception as e:
        print(f"❌ {description} failed: {str(e)}")
        return None

def main():
    print("🚀 Starting Final PR Merge Process...")
    print(f"⏰ Started at: {datetime.now()}")
    
    # Check if we're in a git repository
    if not os.path.exists('.git'):
        print("❌ Not in a git repository")
        sys.exit(1)
    
    # Ensure we're on main branch
    print("\n📋 Step 1: Ensuring we're on main branch...")
    run_command("git checkout main", "Switching to main branch")
    run_command("git pull origin main", "Pulling latest main")
    
    # Fetch all branches
    print("\n📋 Step 2: Fetching all branches...")
    run_command("git fetch --all", "Fetching all remote branches")
    
    # Get list of remote branches
    print("\n📋 Step 3: Getting list of remote branches...")
    branches_output = run_command('git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed "s/origin\\///" | tr -d " "', "Getting remote branches")
    
    if not branches_output:
        print("✅ No remote branches found to merge. All PRs are already merged!")
        return
    
    branches = [b.strip() for b in branches_output.split('\n') if b.strip()]
    print(f"📊 Found {len(branches)} branches to process")
    
    if len(branches) > 20:
        print("📋 First 20 branches:")
        for branch in branches[:20]:
            print(f"   - {branch}")
        print(f"   ... and {len(branches) - 20} more")
    else:
        print("📋 Branches to process:")
        for branch in branches:
            print(f"   - {branch}")
    
    # Process each branch
    print("\n📋 Step 4: Processing branches...")
    successful = 0
    failed = 0
    skipped = 0
    
    for i, branch in enumerate(branches, 1):
        print(f"\n[{i}/{len(branches)}] Processing branch: {branch}")
        
        # Check if branch is already merged
        merged_output = run_command("git branch --merged main", "Checking merged branches")
        if merged_output and branch in merged_output:
            print(f"⏭️ Branch {branch} is already merged, skipping")
            skipped += 1
            continue
        
        # Try to merge the branch
        merge_result = run_command(f'git merge --no-commit --no-ff "origin/{branch}"', f"Merging {branch}")
        
        if merge_result is not None:
            print(f"✅ Successfully merged {branch}")
            run_command(f'git commit -m "Merge {branch} into main - {datetime.now()}"', f"Committing merge of {branch}")
            successful += 1
        else:
            print(f"⚠️ Merge conflicts detected in {branch}")
            
            # Try to resolve conflicts automatically
            conflict_files = run_command("git diff --name-only --diff-filter=U", "Getting conflict files")
            
            if conflict_files:
                print(f"🔧 Resolving conflicts in: {conflict_files}")
                
                # Resolve conflicts by taking incoming changes
                files = conflict_files.split('\n')
                for file in files:
                    if file.strip():
                        run_command(f'git checkout --theirs "{file.strip()}"', f"Resolving conflicts in {file}")
                        run_command(f'git add "{file.strip()}"', f"Adding resolved file {file}")
                
                # Commit resolved conflicts
                commit_result = run_command(f'git commit -m "Resolve merge conflicts for {branch} - {datetime.now()}"', f"Committing resolved conflicts for {branch}")
                
                if commit_result is not None:
                    print(f"✅ Successfully resolved conflicts and merged {branch}")
                    successful += 1
                else:
                    print(f"❌ Failed to commit resolved conflicts for {branch}")
                    run_command("git merge --abort", f"Aborting merge of {branch}")
                    failed += 1
            else:
                print(f"❌ No conflict files found but merge failed for {branch}")
                run_command("git merge --abort", f"Aborting merge of {branch}")
                failed += 1
        
        # Progress update
        if i % 10 == 0:
            print(f"📊 Progress: {successful} successful, {failed} failed, {skipped} skipped")
    
    # Final summary
    print("\n🎉 Merge process completed!")
    print("📊 Final Summary:")
    print(f"   ✅ Successful merges: {successful}")
    print(f"   ❌ Failed merges: {failed}")
    print(f"   ⏭️ Skipped branches: {skipped}")
    print(f"   📈 Total processed: {len(branches)}")
    
    # Final status
    print("\n📋 Final repository status:")
    run_command("git status --porcelain", "Final git status")
    
    # Push changes
    print("\n📋 Pushing changes to remote...")
    run_command("git push origin main", "Pushing to remote")
    
    print("\n🎯 All PRs have been processed!")
    print(f"⏰ Completed at: {datetime.now()}")

if __name__ == "__main__":
    main()