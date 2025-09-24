#!/usr/bin/env python3
import json, os, subprocess, sys, urllib.request

def run(cmd):
    return subprocess.run(cmd, shell=True, check=False, capture_output=True, text=True)

def get_open_prs(repo):
    url = f"https://api.github.com/repos/{repo}/pulls?state=open&per_page=100"
    req = urllib.request.Request(url, headers={"Accept":"application/vnd.github+json"})
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read().decode())

def force_sync_main():
    """Force sync main branch with remote"""
    run("git fetch origin")
    run("git checkout main")
    run("git reset --hard origin/main")
    print("Force synced main with remote")

def merge_with_ours_strategy(head_ref):
    """Merge using 'ours' strategy to prefer main branch"""
    run(f"git fetch origin {head_ref}")
    
    # Try simple merge first
    m = run(f"git merge --no-edit origin/{head_ref}")
    if m.returncode == 0:
        return True
    
    # If conflict, use ours strategy
    print(f"Conflict detected, using 'ours' strategy for {head_ref}")
    run("git checkout --ours .")
    run("git add -A")
    c = run(f"git commit -m 'Merge {head_ref} into main, auto-resolve by preferring main'")
    return c.returncode == 0

def push_with_force():
    """Push with force to handle diverged branches"""
    result = run("git push origin main --force")
    return result.returncode == 0

def main():
    repo = os.environ.get("GITHUB_REPOSITORY", "Zion-Holdings/zion.app")
    
    # Force sync with remote first
    force_sync_main()
    
    # Get open PRs
    prs = get_open_prs(repo)
    
    merged = []
    for pr in prs:
        head = pr.get("head", {}).get("ref")
        base = pr.get("base", {}).get("ref")
        number = pr.get("number")
        title = pr.get("title")
        
        if not head or base != "main":
            continue
            
        print(f"Processing PR #{number} {title} -> {head}")
        
        if merge_with_ours_strategy(head):
            print(f"Merged {head} into main")
            merged.append(number)
        else:
            print(f"Failed to merge {head}")
    
    # Force push all changes
    if push_with_force():
        print("Successfully pushed all changes")
    else:
        print("Failed to push changes")
    
    print("Merged PRs:", merged)

if __name__ == "__main__":
    main()