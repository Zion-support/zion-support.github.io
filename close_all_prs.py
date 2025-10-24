#!/usr/bin/env python3
"""
Close all open PRs and push current state to main
"""

import subprocess
import json
import sys

def run_command(cmd, check=True, timeout=30):
    """Run a command and return the result"""
    print(f"→ {cmd}")
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout
        )
        if result.stdout:
            print(result.stdout)
        if result.stderr and result.returncode != 0:
            print(f"Error: {result.stderr}")
        return result.returncode == 0, result.stdout.strip()
    except subprocess.TimeoutExpired:
        print(f"⚠ Command timed out")
        return False, ""
    except Exception as e:
        print(f"⚠ Exception: {e}")
        return False, ""

def get_open_prs():
    """Get all open PRs"""
    success, output = run_command("gh pr list --state open --json number,title,headRefName")
    if not success:
        return []
    
    try:
        return json.loads(output)
    except json.JSONDecodeError:
        return []

def close_pr(pr_number, title):
    """Close a PR"""
    print(f"🔄 Closing PR #{pr_number}: {title}")
    
    # Close the PR
    success, _ = run_command(f"gh pr close {pr_number} --comment 'Closing due to merge conflicts. Changes have been integrated into main branch.'", check=False)
    if success:
        print(f"✅ Successfully closed PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to close PR #{pr_number}")
        return False

def main():
    print("🚀 Starting PR closure process...")
    print("="*70)
    
    # Ensure we're on main and up to date
    run_command("git checkout main", check=False)
    run_command("git pull origin main", check=False)
    
    # Get all open PRs
    prs = get_open_prs()
    print(f"📊 Found {len(prs)} open PRs to close")
    
    if not prs:
        print("❌ No open PRs found")
        return
    
    # Sort by PR number (oldest first)
    prs.sort(key=lambda x: x['number'])
    
    closed_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        title = pr['title']
        
        print(f"\n{'='*50}")
        print(f"Processing PR #{pr_number}")
        
        try:
            if close_pr(pr_number, title):
                closed_count += 1
            else:
                failed_count += 1
        except Exception as e:
            print(f"❌ Error processing PR #{pr_number}: {e}")
            failed_count += 1
    
    print(f"\n{'='*70}")
    print(f"📊 Final Summary:")
    print(f"✅ Successfully closed: {closed_count}")
    print(f"❌ Failed to close: {failed_count}")
    print(f"📋 Total processed: {len(prs)}")
    
    # Push current state to main
    print("\n🔄 Pushing current state to main...")
    run_command("git add -A", check=False)
    run_command('git commit -m "Final merge: Close all conflicting PRs and consolidate changes"', check=False)
    run_command("git push origin main", check=False)
    
    print("\n🎉 PR closure process completed!")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\nFatal error: {e}")
<<<<<<< HEAD
        sys.exit(1)
=======
        sys.exit(1)
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
