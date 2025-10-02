#!/usr/bin/env python3
"""
GitHub PR Merger via API
Handles merging open PRs without git command timeouts
"""

import requests
import os
import json
import sys
from typing import List, Dict, Any

# Configuration
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
if not GITHUB_TOKEN:
    print("Error: GITHUB_TOKEN environment variable is not set.")
    raise SystemExit(1)
REPO_OWNER = "Zion-Holdings"
REPO_NAME = "zion.app"
REPO_FULL = f"{REPO_OWNER}/{REPO_NAME}"

# API endpoints
BASE_URL = "https://api.github.com"
PULLS_URL = f"{BASE_URL}/repos/{REPO_FULL}/pulls"

# Headers for API requests
HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json"
}


def get_open_prs() -> List[Dict[str, Any]]:
    """Fetch all open pull requests"""
    print(f"Fetching open PRs from {REPO_FULL}...")
    
    response = requests.get(
        f"{PULLS_URL}?state=open&per_page=100",
        headers=HEADERS,
        timeout=30
    )
    
    if response.status_code != 200:
        print(f"Error fetching PRs: {response.status_code}")
        print(response.text)
        return []
    
    prs = response.json()
    print(f"Found {len(prs)} open PRs")
    return prs


def mark_pr_ready(pr_number: int) -> bool:
    """Convert a draft PR to ready-for-review if needed"""
    print(f"\nChecking if PR #{pr_number} is draft and marking ready if so...")
    response = requests.get(
        f"{PULLS_URL}/{pr_number}", headers=HEADERS, timeout=30
    )
    if response.status_code != 200:
        print("  ✗ Could not fetch PR to check draft status")
        return False
    pr = response.json()
    if not pr.get("draft", False):
        print("  ✓ PR already ready for review")
        return True
    # Use the ready-for-review endpoint
    rr = requests.put(
        f"{PULLS_URL}/{pr_number}/ready_for_review", headers=HEADERS, timeout=30
    )
    if rr.status_code == 200:
        print("  ✓ Marked PR ready for review")
        return True
    print(f"  ✗ Failed to mark ready: {rr.status_code}")
    try:
        print(rr.text)
    except Exception:
        pass
    return False


def check_pr_mergeable(pr_number: int) -> tuple[bool, str]:
    """Check if a PR is mergeable"""
    print(f"\nChecking PR #{pr_number} mergeable status...")
    
    response = requests.get(
        f"{PULLS_URL}/{pr_number}",
        headers=HEADERS,
        timeout=30
    )
    
    if response.status_code != 200:
        return False, f"Error: {response.status_code}"
    
    pr_data = response.json()
    mergeable = pr_data.get("mergeable")
    mergeable_state = pr_data.get("mergeable_state")
    draft = pr_data.get("draft", False)
    
    print(f"  Mergeable: {mergeable}")
    print(f"  State: {mergeable_state}")
    print(f"  Draft: {draft}")
    
    if draft:
        return False, "PR is a draft"
    
    if mergeable is False:
        return False, f"PR has conflicts (state: {mergeable_state})"
    
    if mergeable is True:
        return True, "Ready to merge"
    
    return False, f"Mergeable status unknown (state: {mergeable_state})"


def update_pr_from_main(pr_number: int, base_branch: str = "main") -> bool:
    """Update PR branch with latest from main"""
    print(f"\nUpdating PR #{pr_number} with latest {base_branch}...")
    
    # GitHub API to update branch
    response = requests.put(
        f"{PULLS_URL}/{pr_number}/update-branch",
        headers=HEADERS,
        json={"expected_head_sha": None},  # Update regardless of head
        timeout=30
    )
    
    if response.status_code == 202:
        print("  ✓ Branch update initiated")
        return True
    elif response.status_code == 422:
        print("  ℹ Branch is already up to date or cannot be updated")
        return False
    else:
        print(f"  ✗ Update failed: {response.status_code}")
        print(response.text)
        return False


def merge_pr(pr_number: int, merge_method: str = "merge") -> bool:
    """Merge a pull request"""
    print(f"\nMerging PR #{pr_number} using {merge_method} method...")
    
    # Get PR details for commit message
    pr_response = requests.get(
        f"{PULLS_URL}/{pr_number}",
        headers=HEADERS,
        timeout=30
    )
    
    if pr_response.status_code != 200:
        print(f"  ✗ Failed to get PR details: {pr_response.status_code}")
        return False
    
    pr_data = pr_response.json()
    pr_title = pr_data.get("title", "")
    
    # Attempt merge
    merge_data = {
        "commit_title": f"Merge PR #{pr_number}: {pr_title}",
        "commit_message": f"Merging pull request #{pr_number}\n\n{pr_data.get('body', '')}",
        "merge_method": merge_method
    }
    
    response = requests.put(
        f"{PULLS_URL}/{pr_number}/merge",
        headers=HEADERS,
        json=merge_data,
        timeout=30
    )
    
    if response.status_code == 200:
        print(f"  ✓ PR #{pr_number} merged successfully!")
        result = response.json()
        print(f"  SHA: {result.get('sha', 'N/A')}")
        return True
    elif response.status_code == 405:
        print(f"  ✗ PR cannot be merged (may have conflicts or checks failing)")
        print(response.text)
        return False
    else:
        print(f"  ✗ Merge failed: {response.status_code}")
        print(response.text)
        return False


def close_pr(pr_number: int, comment: str = None) -> bool:
    """Close a PR without merging"""
    print(f"\nClosing PR #{pr_number}...")
    
    if comment:
        # Add comment before closing
        requests.post(
            f"{BASE_URL}/repos/{REPO_FULL}/issues/{pr_number}/comments",
            headers=HEADERS,
            json={"body": comment},
            timeout=30
        )
    
    response = requests.patch(
        f"{PULLS_URL}/{pr_number}",
        headers=HEADERS,
        json={"state": "closed"},
        timeout=30
    )
    
    if response.status_code == 200:
        print(f"  ✓ PR #{pr_number} closed")
        return True
    else:
        print(f"  ✗ Failed to close: {response.status_code}")
        return False


def main():
    print("=" * 60)
    print("GitHub PR Merger")
    print(f"Repository: {REPO_FULL}")
    print("=" * 60)
    
    # Get all open PRs
    open_prs = get_open_prs()
    
    if not open_prs:
        print("\n✓ No open PRs found!")
        return 0
    
    print(f"\nOpen PRs:")
    for pr in open_prs:
        print(f"  - PR #{pr['number']}: {pr['title']}")
        print(f"    Branch: {pr['head']['ref']}")
        print(f"    Draft: {pr.get('draft', False)}")
    
    # Process each PR
    success_count = 0
    failed_count = 0
    skipped_count = 0
    
    for pr in open_prs:
        pr_number = pr['number']
        pr_title = pr['title']
        is_draft = pr.get('draft', False)
        
        print(f"\n{'='*60}")
        print(f"Processing PR #{pr_number}: {pr_title}")
        print(f"{'='*60}")
        
        # If draft, try to mark ready
        if is_draft:
            if mark_pr_ready(pr_number):
                # Re-fetch draft status
                is_draft = False
            else:
                print(f"⊘ Skipping draft PR #{pr_number}")
                skipped_count += 1
                continue
        
        # Check if mergeable
        mergeable, reason = check_pr_mergeable(pr_number)
        
        if not mergeable:
            print(f"⚠ PR #{pr_number} not mergeable: {reason}")
            
            # Try to update branch
            if "conflict" in reason.lower() or "behind" in reason.lower():
                print("Attempting to update branch...")
                if update_pr_from_main(pr_number):
                    # Recheck mergeable status after update
                    mergeable, reason = check_pr_mergeable(pr_number)
            
            if not mergeable:
                print(f"✗ Skipping PR #{pr_number}")
                failed_count += 1
                continue
        
        # Attempt merge
        if merge_pr(pr_number):
            success_count += 1
        else:
            failed_count += 1
    
    # Summary
    print(f"\n{'='*60}")
    print("SUMMARY")
    print(f"{'='*60}")
    print(f"Total PRs processed: {len(open_prs)}")
    print(f"  ✓ Successfully merged: {success_count}")
    print(f"  ✗ Failed to merge: {failed_count}")
    print(f"  ⊘ Skipped (drafts): {skipped_count}")
    print(f"{'='*60}")
    
    return 0 if failed_count == 0 else 1


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\nInterrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
