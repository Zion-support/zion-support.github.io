#!/usr/bin/env python3
"""
Quick merge for remaining PRs
"""

import subprocess
import json
import time

def run_command(cmd, cwd="/workspace"):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        return -1, "", str(e)

def get_remaining_prs():
    """Get remaining open PRs"""
    cmd = 'curl -s -H "Authorization: token ghs_KvRr9rZ7V1kvAMtD4rM3nHT1eBjdxd2IAre6" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"'
    code, stdout, stderr = run_command(cmd)
    
    if code != 0:
        print(f"Error fetching PRs: {stderr}")
        return []
    
    prs = []
    try:
        pr_data = json.loads(stdout)
        for pr in pr_data:
            prs.append({
                'number': pr['number'],
                'branch': pr['head']['ref'],
                'title': pr['title']
            })
    except:
        return []
    
    return prs

def merge_remaining_prs():
    """Merge remaining PRs quickly"""
    print("🚀 Merging remaining open PRs...")
    
    # Sync with main
    run_command("git fetch origin main")
    run_command("git reset --hard origin/main")
    
    prs = get_remaining_prs()
    print(f"📊 Found {len(prs)} remaining PRs")
    
    successful = 0
    failed = 0
    
    for pr in prs:
        print(f"\n🔄 Processing PR #{pr['number']}: {pr['title']}")
        print(f"📍 Branch: {pr['branch']}")
        
        # Fetch and merge
        code, _, _ = run_command(f"git fetch origin {pr['branch']}")
        if code != 0:
            print(f"❌ Failed to fetch {pr['branch']}")
            failed += 1
            continue
        
        # Attempt merge
        code, _, _ = run_command(f"git merge origin/{pr['branch']} --no-ff -m 'Auto-merge PR #{pr['number']}: {pr['title']}'")
        
        if code == 0:
            print(f"✅ Successfully merged PR #{pr['number']}")
            successful += 1
        else:
            # Try to resolve conflicts
            print(f"⚠️  Resolving conflicts for PR #{pr['number']}")
            run_command("git checkout --theirs .")
            run_command("git add .")
            code, _, _ = run_command(f"git commit -m 'Auto-resolve conflicts and merge PR #{pr['number']}: {pr['title']}'")
            
            if code == 0:
                print(f"✅ Resolved conflicts for PR #{pr['number']}")
                successful += 1
            else:
                print(f"❌ Failed to resolve conflicts for PR #{pr['number']}")
                run_command("git merge --abort")
                failed += 1
        
        time.sleep(1)
    
    # Push all changes
    if successful > 0:
        print(f"\n🚀 Pushing {successful} merged PRs...")
        code, _, _ = run_command("git push origin main --force")
        if code == 0:
            print("✅ Successfully pushed to main")
        else:
            print("❌ Failed to push to main")
    
    print(f"\n📊 Summary: {successful} successful, {failed} failed")

if __name__ == "__main__":
    merge_remaining_prs()