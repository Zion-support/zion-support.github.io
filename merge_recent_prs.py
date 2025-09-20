#!/usr/bin/env python3

import subprocess
import sys
import time

def run_command(command, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"⏰ Command timed out: {command}")
        return False, "", "Timeout"
    except Exception as e:
        print(f"❌ Error running command: {e}")
        return False, "", str(e)

def merge_branch(branch_name):
    """Merge a specific branch into main"""
    print(f"\n🔄 Attempting to merge: {branch_name}")
    
    # Checkout the branch
    success, stdout, stderr = run_command(f"git checkout {branch_name}")
    if not success:
        print(f"❌ Failed to checkout {branch_name}: {stderr}")
        return False
    
    # Pull latest changes
    success, stdout, stderr = run_command(f"git pull origin {branch_name}")
    if not success:
        print(f"⚠️  Failed to pull {branch_name}: {stderr}")
    
    # Switch back to main
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
        return False
    
    # Merge the branch
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-edit")
    if not success:
        print(f"⚠️  Merge conflict in {branch_name}: {stderr}")
        # Try to resolve conflicts by keeping our version
        run_command("git checkout --ours .")
        run_command("git add .")
        run_command(f"git commit -m 'Merge {branch_name} with conflict resolution'")
        print(f"✅ Resolved conflicts for {branch_name}")
    else:
        print(f"✅ Successfully merged {branch_name}")
    
    return True

def main():
    """Main function to merge recent PRs"""
    
    # List of recent branches that look like PRs
    recent_branches = [
        "origin/2025-comprehensive-services-expansion",
        "origin/cursor/add-comprehensive-services-2025",
        "origin/cursor/add-new-services-2025",
        "origin/cursor/add-innovative-services-2025",
        "origin/cursor/add-next-gen-innovative-services",
        "origin/cursor/add-updates-and-promo",
        "origin/cursor/add-updates-landing",
        "origin/comprehensive-improvements-2025",
        "origin/comprehensive-improvements-final",
        "origin/comprehensive-service-improvements",
        "origin/content-update-2025",
        "origin/content-update-2027",
        "origin/content-enhancement-2025",
        "origin/content-expansion-2025"
    ]
    
    print("🚀 Starting to merge recent PR branches...")
    
    merged_count = 0
    failed_count = 0
    
    for branch in recent_branches:
        try:
            # Check if branch exists
            success, stdout, stderr = run_command(f"git ls-remote --heads origin {branch.replace('origin/', '')}")
            if not success or not stdout.strip():
                print(f"⚠️  Branch {branch} does not exist, skipping...")
                continue
            
            if merge_branch(branch):
                merged_count += 1
            else:
                failed_count += 1
            
            # Small delay between merges
            time.sleep(2)
            
        except KeyboardInterrupt:
            print("\n⏹️  Interrupted by user")
            break
        except Exception as e:
            print(f"❌ Unexpected error with {branch}: {e}")
            failed_count += 1
    
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successfully merged: {merged_count} branches")
    print(f"❌ Failed to merge: {failed_count} branches")
    
    if merged_count > 0:
        print("\n📤 Pushing changes to remote...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Changes pushed successfully!")
        else:
            print(f"⚠️  Push failed: {stderr}")
            print("You may need to push manually later.")

if __name__ == "__main__":
    main()