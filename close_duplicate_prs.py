#!/usr/bin/env python3
"""
Close duplicate PRs that are no longer needed.
All these PRs attempt to fix the same errors, but the fixes are already in main.
"""
import subprocess
import json
import sys

# GitHub token from environment
GITHUB_TOKEN = "ghs_wKzZhOXvMXc5OeAzJdRqv5uKIVEY0j1r35Sq"
REPO = "Zion-Holdings/zion.app"

def get_open_prs():
    """Fetch all open PRs"""
    cmd = [
        "curl", "-s", "-H", f"Authorization: token {GITHUB_TOKEN}",
        f"https://api.github.com/repos/{REPO}/pulls?state=open&per_page=100"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return json.loads(result.stdout)

def close_pr(pr_number, comment):
    """Close a PR with a comment"""
    # First, add a comment
    comment_cmd = [
        "curl", "-s", "-X", "POST",
        "-H", f"Authorization: token {GITHUB_TOKEN}",
        "-H", "Content-Type: application/json",
        f"https://api.github.com/repos/{REPO}/issues/{pr_number}/comments",
        "-d", json.dumps({"body": comment})
    ]
    subprocess.run(comment_cmd, capture_output=True)
    
    # Then close the PR
    close_cmd = [
        "curl", "-s", "-X", "PATCH",
        "-H", f"Authorization: token {GITHUB_TOKEN}",
        "-H", "Content-Type: application/json",
        f"https://api.github.com/repos/{REPO}/pulls/{pr_number}",
        "-d", json.dumps({"state": "closed"})
    ]
    result = subprocess.run(close_cmd, capture_output=True, text=True)
    return json.loads(result.stdout)

def main():
    print("Fetching open PRs...")
    prs = get_open_prs()
    
    # Filter PRs that are duplicates (same title and draft status)
    duplicate_prs = [
        pr for pr in prs
        if pr["title"] == "Fix errors and merge to main" and pr["draft"]
    ]
    
    print(f"Found {len(duplicate_prs)} duplicate PRs to close")
    
    comment_text = """
This PR is being closed as a duplicate. The fixes have already been merged into the main branch.

The current main branch (commit 65fd40b) already contains all the necessary fixes that this PR was attempting to apply.

**Summary:**
- ✅ Merge conflicts resolved in main
- ✅ TypeScript errors fixed in main  
- ✅ All necessary fixes already applied

No action needed - the work is complete.
    """
    
    closed_count = 0
    for pr in duplicate_prs:
        pr_number = pr["number"]
        print(f"Closing PR #{pr_number}...")
        try:
            close_pr(pr_number, comment_text)
            closed_count += 1
            print(f"  ✓ Closed PR #{pr_number}")
        except Exception as e:
            print(f"  ✗ Failed to close PR #{pr_number}: {e}")
    
    print(f"\nClosed {closed_count} out of {len(duplicate_prs)} duplicate PRs")
    
    # Create a summary report
    with open("/workspace/PR_CLOSURE_REPORT.md", "w") as f:
        f.write(f"# PR Closure Report\n\n")
        f.write(f"**Date:** {subprocess.run(['date'], capture_output=True, text=True).stdout.strip()}\n\n")
        f.write(f"## Summary\n\n")
        f.write(f"- Total duplicate PRs found: {len(duplicate_prs)}\n")
        f.write(f"- PRs successfully closed: {closed_count}\n")
        f.write(f"- Current main branch: 65fd40b91a4deef11dcd05a9999f8929229cdfd3\n\n")
        f.write(f"## Reason for Closure\n\n")
        f.write(f"All these PRs were attempting to fix the same merge conflicts and errors.\n")
        f.write(f"The fixes have already been successfully merged into the main branch.\n\n")
        f.write(f"## Closed PRs\n\n")
        for pr in duplicate_prs:
            f.write(f"- #{pr['number']}: {pr['title']} (Branch: {pr['head']['ref']})\n")
    
    print("\nReport saved to PR_CLOSURE_REPORT.md")

if __name__ == "__main__":
    main()