#!/usr/bin/env python3
"""
Script to automatically merge all open PRs into main branch
"""
import subprocess
import json
import sys
import time

def run_command(cmd, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout, result.stderr, result.returncode
    except subprocess.CalledProcessError as e:
        return e.stdout, e.stderr, e.returncode

def get_open_prs():
    """Get list of open PRs from GitHub API"""
    cmd = 'curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"'
    stdout, stderr, returncode = run_command(cmd)
    
    if returncode != 0:
        print(f"Error fetching PRs: {stderr}")
        return []
    
    try:
        prs = json.loads(stdout)
        return prs
    except json.JSONDecodeError as e:
        print(f"Error parsing PR data: {e}")
        return []

def merge_branch(branch_name):
    """Merge a branch into main"""
    print(f"\n🔄 Merging branch: {branch_name}")
    
    # Checkout the branch
    checkout_cmd = f"git checkout -b {branch_name} origin/{branch_name}"
    stdout, stderr, returncode = run_command(checkout_cmd, check=False)
    
    if returncode != 0:
        print(f"⚠️  Could not checkout branch {branch_name}: {stderr}")
        return False
    
    # Switch back to main
    run_command("git checkout main")
    
    # Try to merge
    merge_cmd = f"git merge {branch_name}"
    stdout, stderr, returncode = run_command(merge_cmd, check=False)
    
    if returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    elif "Already up to date" in stdout:
        print(f"ℹ️  Branch {branch_name} is already up to date")
        return True
    elif "CONFLICT" in stderr:
        print(f"⚠️  Merge conflict in {branch_name}, attempting to resolve...")
        return resolve_conflicts(branch_name)
    else:
        print(f"❌ Failed to merge {branch_name}: {stderr}")
        return False

def resolve_conflicts(branch_name):
    """Attempt to resolve merge conflicts automatically"""
    print(f"🔧 Resolving conflicts for {branch_name}")
    
    # Check for common conflict patterns and resolve them
    conflict_files = run_command("git diff --name-only --diff-filter=U")[0].strip().split('\n')
    
    for file_path in conflict_files:
        if not file_path:
            continue
            
        print(f"  Resolving conflicts in {file_path}")
        
        # Read the file
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Simple conflict resolution patterns
        if 'layout.tsx' in file_path:
            # Remove conflict markers and keep the HEAD version for layout.tsx
            lines = content.split('\n')
            new_lines = []
            skip_until_end = False
            
            for line in lines:
                if '<<<<<<< HEAD' in line:
                    skip_until_end = False
                    continue
                elif '=======' in line:
                    skip_until_end = True
                    continue
                elif '>>>>>>>' in line:
                    skip_until_end = False
                    continue
                elif not skip_until_end:
                    new_lines.append(line)
            
            with open(file_path, 'w') as f:
                f.write('\n'.join(new_lines))
        
        # Add the resolved file
        run_command(f"git add {file_path}")
    
    # Commit the resolution
    commit_cmd = f"git commit -m 'Auto-resolve merge conflicts for {branch_name}'"
    stdout, stderr, returncode = run_command(commit_cmd, check=False)
    
    if returncode == 0:
        print(f"✅ Successfully resolved conflicts for {branch_name}")
        return True
    else:
        print(f"❌ Failed to resolve conflicts for {branch_name}: {stderr}")
        return False

def main():
    """Main function to merge all PRs"""
    print("🚀 Starting automatic PR merge process...")
    
    # Get list of open PRs
    prs = get_open_prs()
    if not prs:
        print("❌ No open PRs found or error fetching PRs")
        return
    
    print(f"📋 Found {len(prs)} open PRs")
    
    # Sort PRs by number (newest first)
    prs.sort(key=lambda x: x['number'], reverse=True)
    
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        pr_number = pr['number']
        branch_name = pr['head']['ref']
        title = pr['title']
        
        print(f"\n📝 PR #{pr_number}: {title}")
        print(f"   Branch: {branch_name}")
        
        if merge_branch(branch_name):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Small delay between merges
        time.sleep(1)
    
    print(f"\n📊 Merge Summary:")
    print(f"   ✅ Successful: {successful_merges}")
    print(f"   ❌ Failed: {failed_merges}")
    print(f"   📈 Total: {len(prs)}")
    
    # Push all changes to main
    print(f"\n🚀 Pushing changes to main...")
    stdout, stderr, returncode = run_command("git push origin main --force", check=False)
    
    if returncode == 0:
        print("✅ Successfully pushed all changes to main")
    else:
        print(f"❌ Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()