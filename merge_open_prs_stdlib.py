#!/usr/bin/env python3
import json
import subprocess
import sys
import urllib.request

API_URL = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"

def run(cmd, check=True):
    return subprocess.run(cmd, check=check)

def get_open_prs():
    with urllib.request.urlopen(API_URL) as r:
        if r.status != 200:
            print(f"Error fetching PRs: HTTP {r.status}")
            return []
        data = json.loads(r.read().decode())
        return data

def main():
    prs = get_open_prs()
    if not prs:
        print("✅ No open PRs found")
        return 0

    print(f"📋 Found {len(prs)} open PRs")

    # Ensure we are on main and up to date
    run(["git", "fetch", "origin", "main"], check=True)
    run(["git", "checkout", "main"], check=True)
    run(["git", "pull", "--no-rebase", "origin", "main"], check=False)

    merged = 0
    for pr in prs:
        number = pr.get("number")
        title = pr.get("title", "")
        head = pr.get("head", {})
        head_ref = head.get("ref")
        head_repo = head.get("repo", {})
        head_owner = head_repo.get("owner", {}).get("login")
        print(f"\n🔄 PR #{number} {title}")
        print(f"   Branch: {head_ref}")
        if not head_ref:
            print("   ⚠️  Missing head ref, skipping")
            continue

        # Fetch PR head
        try:
            run(["git", "fetch", "origin", head_ref], check=True)
        except subprocess.CalledProcessError:
            # Try fetching from the PR refspec directly
            run(["git", "fetch", "origin", f"pull/{number}/head:pr-{number}"], check=False)
            head_ref = f"pr-{number}"

        # Try merge
        try:
            run(["git", "merge", f"origin/{head_ref}", "--no-ff", "-m", f"Merge PR #{number}: {title}"], check=True)
            merged += 1
            print(f"   ✅ Merged PR #{number}")
        except subprocess.CalledProcessError:
            print(f"   ⚠️  Conflicts when merging PR #{number}, preferring ours (main)...")
            try:
                # Prefer ours (main)
                run(["git", "checkout", "--ours", "."], check=True)
                run(["git", "add", "."], check=True)
                run(["git", "commit", "-m", f"Resolve conflicts preferring main for PR #{number}: {title}"], check=True)
                merged += 1
                print(f"   ✅ Resolved conflicts for PR #{number}")
            except subprocess.CalledProcessError:
                print(f"   ❌ Failed to resolve PR #{number}, aborting this merge")
                run(["git", "merge", "--abort"], check=False)
                # reset to remote main state to avoid dirty merges
                run(["git", "reset", "--hard", "origin/main"], check=False)
                continue

        # Push after each successful PR merge
        try:
            run(["git", "push", "origin", "main"], check=True)
            print(f"   🚀 Pushed main after PR #{number}")
        except subprocess.CalledProcessError:
            print(f"   ❌ Failed to push after PR #{number}; continuing")

    print(f"\n🎉 Done. Merged {merged}/{len(prs)} PRs.")
    return 0

if __name__ == "__main__":
    sys.exit(main())

