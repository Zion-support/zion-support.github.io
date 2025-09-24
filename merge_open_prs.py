#!/usr/bin/env python3
import json, os, subprocess, sys, urllib.request

def run(cmd):
    return subprocess.run(cmd, shell=True, check=False, capture_output=True, text=True)

def get_open_prs(repo):
    url = f"https://api.github.com/repos/{repo}/pulls?state=open&per_page=100"
    req = urllib.request.Request(url, headers={"Accept":"application/vnd.github+json"})
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read().decode())

def ensure_main_up_to_date():
    run("git fetch origin")
    run("git checkout main")
    run("git reset --hard origin/main")

def merge_head_into_main(head_ref):
    # Create local tracking for remote branch if not exists
    run(f"git fetch origin {head_ref}")
    # Try merge
    m = run(f"git merge --no-edit origin/{head_ref}")
    if m.returncode == 0:
        return True
    # On conflict, prefer ours (main)
    run("git checkout --ours .")
    run("git add -A")
    c = run(f"git commit -m 'Merge {head_ref} into main, auto-resolve by preferring main'")
    return c.returncode == 0

def push_main():
    return run("git push origin main").returncode == 0

def main():
    repo = os.environ.get("GITHUB_REPOSITORY", "Zion-Holdings/zion.app")
    prs = get_open_prs(repo)
    ensure_main_up_to_date()
    merged = []
    for pr in prs:
        head = pr.get("head", {}).get("ref")
        base = pr.get("base", {}).get("ref")
        number = pr.get("number")
        title = pr.get("title")
        if not head or base != "main":
            continue
        print(f"Processing PR #{number} {title} -> {head}")
        if merge_head_into_main(head):
            print(f"Merged {head} into main")
            if not push_main():
                print("Failed to push main; stopping to avoid divergence")
                break
            merged.append(number)
        else:
            run("git merge --abort")
            print(f"Failed to merge {head}")
    print("Merged PRs:", merged)

if __name__ == "__main__":
    main()
