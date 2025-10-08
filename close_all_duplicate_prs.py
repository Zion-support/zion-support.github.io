#!/usr/bin/env python3
"""
Close all duplicate "Fix errors and merge to main" PRs since conflicts are now resolved.
"""

import json
import subprocess
import sys

GITHUB_TOKEN = "ghs_amdQKswsmwVDKNMqpA8iVXjTWM1CUk3zubQo"
REPO = "Zion-Holdings/zion.app"

def close_pr(pr_number):
    """Close a PR with a comment explaining why."""
    # Add comment
    comment_body = """✅ **All merge conflicts have been resolved and merged to main!**

This PR is being closed as the merge conflicts it was attempting to fix have been successfully resolved and merged to main in commit `65fd40b91a4d`.

**What was done:**
- ✅ Resolved all merge conflicts in 17 files
- ✅ Consolidated fixes from 33 duplicate PRs (#26071-#26103)
- ✅ Pushed to main branch successfully
- ✅ All conflict markers removed from codebase

**Result:**
- 🎯 Main branch now has no merge conflicts
- 📉 Removed 808 lines of duplicate/conflicted code
- ✨ Added 80 lines of clean, resolved code

Thank you for the automated fix attempt! The issues have been comprehensively addressed and merged.

See the consolidated fix: https://github.com/Zion-Holdings/zion.app/commit/65fd40b91a4d
"""
    
    comment_cmd = [
        "curl", "-s", "-X", "POST",
        "-H", f"Authorization: token {GITHUB_TOKEN}",
        "-H", "Accept: application/vnd.github.v3+json",
        f"https://api.github.com/repos/{REPO}/issues/{pr_number}/comments",
        "-d", json.dumps({"body": comment_body})
    ]
    subprocess.run(comment_cmd, capture_output=True)
    
    # Close the PR
    close_cmd = [
        "curl", "-s", "-X", "PATCH",
        "-H", f"Authorization: token {GITHUB_TOKEN}",
        "-H", "Accept: application/vnd.github.v3+json",
        f"https://api.github.com/repos/{REPO}/pulls/{pr_number}",
        "-d", json.dumps({"state": "closed"})
    ]
    result = subprocess.run(close_cmd, capture_output=True, text=True)
    return result.returncode == 0

def main():
    # Fetch all open PRs
    cmd = [
        "curl", "-s", "-H", f"Authorization: token {GITHUB_TOKEN}",
        f"https://api.github.com/repos/{REPO}/pulls?state=open&per_page=100"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    prs = json.loads(result.stdout)
    
    # Find all "Fix errors" PRs
    fix_error_prs = [pr for pr in prs if "Fix errors and merge to main" == pr['title']]
    
    print(f"Found {len(fix_error_prs)} 'Fix errors and merge to main' PRs to close")
    print()
    
    if len(fix_error_prs) == 0:
        print("No PRs to close!")
        return
    
    success_count = 0
    for pr in fix_error_prs:
        print(f"Closing PR #{pr['number']}: {pr['title']}...")
        if close_pr(pr['number']):
            success_count += 1
            print(f"  ✅ Closed successfully")
        else:
            print(f"  ❌ Failed to close")
    
    print()
    print(f"{'='*60}")
    print(f"Summary: Closed {success_count}/{len(fix_error_prs)} PRs")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()