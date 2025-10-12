#!/usr/bin/env python3
"""
Systematic PR Merger - Merges all open PRs into main branch
Handles merge conflicts by preferring main branch content
"""

import json
import subprocess
import sys
from datetime import datetime

def run_command(cmd, capture_output=True, check=False):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=capture_output,
            text=True,
            check=check
        )
        return result
    except subprocess.CalledProcessError as e:
        return e

def get_open_prs():
    """Load open PRs from JSON file"""
    with open('open_prs.json', 'r') as f:
        return json.load(f)

def merge_pr_branch(branch_name, pr_number):
    """Attempt to merge a PR branch into main"""
    print(f"\n{'='*80}")
    print(f"Processing PR #{pr_number}: {branch_name}")
    print(f"{'='*80}")
    
    # Fetch the branch
    print(f"Fetching branch {branch_name}...")
    result = run_command(f"git fetch origin {branch_name}")
    if result.returncode != 0:
        print(f"❌ Failed to fetch branch {branch_name}")
        return False
    
    # Try to merge
    print(f"Attempting to merge {branch_name} into main...")
    result = run_command(f"git merge origin/{branch_name} --no-edit -m 'Merge PR #{pr_number}: {branch_name}'")
    
    if result.returncode == 0:
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    
    # Check if there are conflicts
    status_result = run_command("git status")
    if "Unmerged paths" in status_result.stdout or "both modified" in status_result.stdout:
        print(f"⚠️  Merge conflicts detected for PR #{pr_number}")
        print("Resolving conflicts by accepting main branch version...")
        
        # Get list of conflicted files
        conflicts_result = run_command("git diff --name-only --diff-filter=U")
        conflicted_files = conflicts_result.stdout.strip().split('\n')
        
        if conflicted_files and conflicted_files[0]:
            print(f"Conflicted files: {len(conflicted_files)}")
            for file in conflicted_files[:5]:  # Show first 5
                print(f"  - {file}")
            
            # Resolve conflicts by accepting ours (main)
            print("Resolving conflicts (keeping main branch version)...")
            run_command("git checkout --ours .")
            run_command("git add .")
            
            # Complete the merge
            result = run_command(f"git commit --no-edit -m 'Merge PR #{pr_number}: {branch_name} (conflicts resolved)'")
            
            if result.returncode == 0:
                print(f"✅ Merged PR #{pr_number} with conflict resolution")
                return True
            else:
                print(f"❌ Failed to complete merge for PR #{pr_number}")
                run_command("git merge --abort")
                return False
    else:
        print(f"❌ Failed to merge PR #{pr_number} (unknown error)")
        run_command("git merge --abort")
        return False

def main():
    """Main execution function"""
    print(f"Starting PR Merge Process at {datetime.now()}")
    print(f"{'='*80}\n")
    
    # Ensure we're on main branch
    print("Ensuring we're on main branch...")
    run_command("git checkout main", check=False)
    
    # Pull latest changes
    print("Pulling latest changes from main...")
    run_command("git pull origin main", check=False)
    
    # Load PRs
    print("\nLoading open PRs...")
    prs = get_open_prs()
    print(f"Found {len(prs)} open PRs\n")
    
    # Track results
    successful_merges = []
    failed_merges = []
    
    # Process each PR
    for i, pr in enumerate(prs, 1):
        pr_number = pr['number']
        branch_name = pr['head']['ref']
        
        print(f"\n[{i}/{len(prs)}] Processing PR #{pr_number}...")
        
        success = merge_pr_branch(branch_name, pr_number)
        
        if success:
            successful_merges.append((pr_number, branch_name))
        else:
            failed_merges.append((pr_number, branch_name))
        
        # Small delay to avoid overwhelming git
        if i % 10 == 0:
            print(f"\nProgress: {i}/{len(prs)} PRs processed")
            print(f"Successful: {len(successful_merges)}, Failed: {len(failed_merges)}")
    
    # Final summary
    print(f"\n{'='*80}")
    print("MERGE SUMMARY")
    print(f"{'='*80}")
    print(f"Total PRs: {len(prs)}")
    print(f"✅ Successfully merged: {len(successful_merges)}")
    print(f"❌ Failed to merge: {len(failed_merges)}")
    
    if successful_merges:
        print(f"\nSuccessfully merged PRs:")
        for pr_num, branch in successful_merges[:10]:
            print(f"  ✅ PR #{pr_num}: {branch}")
        if len(successful_merges) > 10:
            print(f"  ... and {len(successful_merges) - 10} more")
    
    if failed_merges:
        print(f"\nFailed PRs:")
        for pr_num, branch in failed_merges:
            print(f"  ❌ PR #{pr_num}: {branch}")
    
    # Push changes
    if successful_merges:
        print(f"\nPushing merged changes to origin/main...")
        push_result = run_command("git push origin main")
        if push_result.returncode == 0:
            print("✅ Successfully pushed all changes to main!")
        else:
            print("❌ Failed to push changes. You may need to push manually.")
            print("Run: git push origin main")
    
    print(f"\nMerge process completed at {datetime.now()}")
    
    # Write summary report
    with open('merge_summary_report.json', 'w') as f:
        json.dump({
            'timestamp': datetime.now().isoformat(),
            'total_prs': len(prs),
            'successful': len(successful_merges),
            'failed': len(failed_merges),
            'successful_prs': [{'number': num, 'branch': branch} for num, branch in successful_merges],
            'failed_prs': [{'number': num, 'branch': branch} for num, branch in failed_merges]
        }, f, indent=2)
    
    print("\n📝 Detailed report saved to: merge_summary_report.json")
    
    return 0 if not failed_merges else 1

if __name__ == "__main__":
    sys.exit(main())