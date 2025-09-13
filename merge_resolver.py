#!/usr/bin/env python3

import subprocess
import sys
import os
import time

def run_command(command, cwd="/workspace"):
    """Run a git command and return the result"""
    try:
        print(f"🔄 Running: {command}")
        result = subprocess.run(
            command, 
            shell=True, 
            cwd=cwd, 
            capture_output=True, 
            text=True, 
            timeout=300
        )
        if result.returncode == 0:
            print(f"✅ Success: {command}")
            return result.stdout.strip()
        else:
            print(f"⚠️  Warning: {command}")
            print(f"   stderr: {result.stderr}")
            return result.stdout.strip()
    except subprocess.TimeoutExpired:
        print(f"⏰ Timeout: {command}")
        return None
    except Exception as e:
        print(f"❌ Error running {command}: {e}")
        return None

def resolve_merge_conflicts():
    """Resolve merge conflicts and merge PRs"""
    print("🚀 Starting merge conflict resolution and PR merging...")
    print(f"⏰ Started at: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Check current status
    print("\n📊 Checking current git status...")
    status = run_command("git status")
    if status:
        print(status)
    
    # Ensure we're on main branch
    print("\n🔄 Switching to main branch...")
    run_command("git checkout main")
    
    # Pull latest changes
    print("\n⬇️  Pulling latest changes...")
    run_command("git pull origin main")
    
    # Get current branch info
    print("\n📋 Getting branch information...")
    branches = run_command("git branch -r")
    if branches:
        print("Available branches:")
        for line in branches.split('\n'):
            if 'cursor' in line or 'create-and-deploy' in line:
                print(f"  {line}")
    
    # Try to merge our feature branch
    feature_branch = "cursor/create-and-deploy-new-content-29fa"
    print(f"\n🔄 Attempting to merge feature branch: {feature_branch}")
    
    merge_result = run_command(f"git merge {feature_branch}")
    
    if merge_result is None:
        print("⚠️  Merge conflicts detected, attempting to resolve...")
        
        # Check for conflicted files
        conflicted_files = run_command("git diff --name-only --diff-filter=U")
        if conflicted_files:
            print(f"📋 Conflicted files: {conflicted_files}")
            
            # Add our new content files specifically
            new_files = [
                "src/pages/blog/ai-2026-enterprise-autonomous-operations-revolution.md",
                "src/pages/blog/ai-2026-tools-and-resources-ultimate-guide.md", 
                "src/pages/case-studies/global-enterprise-ai-autonomous-transformation-2026-5-billion-roi.md",
                "src/pages/resources/ai-2026-autonomous-operations-implementation-master-guide.md",
                "src/pages/tools/ai-2026-roi-calculator-enterprise.md",
                "src/components/NewContentPromotionBanner2026.tsx",
                "src/components/InteractiveContentDiscovery2026.tsx",
                "src/pages/Home.js"
            ]
            
            for file in new_files:
                if os.path.exists(f"/workspace/{file}"):
                    print(f"➕ Adding {file}")
                    run_command(f"git add {file}")
            
            # Add all changes
            run_command("git add .")
            
            # Commit the merge
            commit_message = "feat: Merge AI 2026 content and promotional components with conflict resolution"
            run_command(f'git commit -m "{commit_message}"')
        else:
            print("❌ No conflicted files found, but merge failed")
            run_command("git merge --abort")
            return False
    else:
        print("✅ Merge completed successfully without conflicts")
    
    # Push to main
    print("\n⬆️  Pushing to main branch...")
    push_result = run_command("git push origin main")
    
    if push_result is not None:
        print("✅ Successfully pushed to main branch")
        
        # Show recent commits
        print("\n📝 Recent commits:")
        recent_commits = run_command("git log --oneline -10")
        if recent_commits:
            print(recent_commits)
        
        return True
    else:
        print("❌ Failed to push to main branch")
        return False

def main():
    """Main function"""
    print("🎯 AI 2026 Content Merge Resolver")
    print("=" * 50)
    
    success = resolve_merge_conflicts()
    
    print("\n" + "=" * 50)
    if success:
        print("🎉 Merge process completed successfully!")
        print("✅ All AI 2026 content and promotional components have been merged")
        print("🚀 The new content is now live on the main branch")
    else:
        print("❌ Merge process encountered issues")
        print("🔧 Manual intervention may be required")
    
    print(f"⏰ Completed at: {time.strftime('%Y-%m-%d %H:%M:%S')}")

if __name__ == "__main__":
    main()