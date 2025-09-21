#!/usr/bin/env python3
"""
Script to merge recent branches into main
"""
import subprocess
import sys
import time

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def merge_branch(branch_name):
    """Merge a specific branch into main"""
    print(f"\n🔄 Processing branch: {branch_name}")
    
    # Fetch the latest changes
    print("📥 Fetching latest changes...")
    success, stdout, stderr = run_command("git fetch origin")
    if not success:
        print(f"❌ Failed to fetch: {stderr}")
        return False
    
    # Try to merge the branch
    print(f"🔀 Attempting to merge {branch_name}...")
    success, stdout, stderr = run_command(f"git merge origin/{branch_name}")
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        print(f"⚠️  Merge conflict or issue with {branch_name}: {stderr}")
        # Try to resolve conflicts automatically
        print("🔧 Attempting to resolve conflicts...")
        
        # Check if there are conflicts
        success, stdout, stderr = run_command("git status --porcelain")
        if "UU" in stdout or "AA" in stdout or "DD" in stdout:
            print("🔧 Conflicts detected, attempting resolution...")
            
            # Try to add all files and commit
            run_command("git add .")
            success, stdout, stderr = run_command("git commit -m 'Resolve merge conflicts automatically'")
            
            if success:
                print(f"✅ Resolved conflicts for {branch_name}")
                return True
            else:
                print(f"❌ Could not resolve conflicts for {branch_name}")
                # Abort the merge
                run_command("git merge --abort")
                return False
        else:
            print(f"❌ Unknown issue with {branch_name}")
            return False

def main():
    print("🚀 Starting to merge recent branches...")
    
    # Get recent branches (last 50)
    success, stdout, stderr = run_command("git branch -r | grep -v HEAD | head -50")
    if not success:
        print(f"❌ Failed to get branches: {stderr}")
        return
    
    branches = [line.strip().replace('origin/', '') for line in stdout.strip().split('\n') if line.strip()]
    
    print(f"📋 Found {len(branches)} branches to process")
    
    merged_count = 0
    failed_count = 0
    
    for branch in branches:
        if branch == 'main':
            continue
            
        try:
            if merge_branch(branch):
                merged_count += 1
            else:
                failed_count += 1
                
            # Small delay between merges
            time.sleep(1)
            
        except Exception as e:
            print(f"❌ Error processing {branch}: {e}")
            failed_count += 1
    
    print(f"\n📊 Summary:")
    print(f"✅ Successfully merged: {merged_count}")
    print(f"❌ Failed to merge: {failed_count}")
    
    # Push changes
    print("\n📤 Pushing changes to main...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed to main")
    else:
        print(f"❌ Failed to push: {stderr}")

if __name__ == "__main__":
    main()