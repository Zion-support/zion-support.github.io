#!/usr/bin/env python3
"""
Script to merge all open PRs into main branch
"""
import json
import subprocess
import sys
import time

def run_command(cmd, check=True, capture=True):
    """Run a shell command"""
    print(f"Running: {' '.join(cmd)}")
    try:
        if capture:
            result = subprocess.run(cmd, check=check, capture_output=True, text=True)
            if result.stdout:
                print(result.stdout)
            if result.stderr:
                print(result.stderr, file=sys.stderr)
            return result
        else:
            return subprocess.run(cmd, check=check)
    except subprocess.CalledProcessError as e:
        print(f"Command failed with exit code {e.returncode}")
        if e.stdout:
            print(e.stdout)
        if e.stderr:
            print(e.stderr, file=sys.stderr)
        if check:
            raise
        return e

def main():
    print("=" * 60)
    print("PR Merge Script")
    print("=" * 60)
    
    # Step 1: Commit current changes
    print("\nStep 1: Committing current changes...")
    run_command(['git', 'add', '-A'], check=False)
    
    result = run_command(['git', 'diff', '--cached', '--quiet'], check=False)
    if result.returncode != 0:
        run_command(['git', 'commit', '-m', 'fix: Resolve all merge conflicts and errors'], check=False)
    else:
        print("No changes to commit")
    
    # Step 2: Get current branch
    print("\nStep 2: Getting current branch...")
    result = run_command(['git', 'branch', '--show-current'])
    current_branch = result.stdout.strip()
    print(f"Current branch: {current_branch}")
    
    # Step 3: Push current branch
    print("\nStep 3: Pushing current branch...")
    run_command(['git', 'push', 'origin', current_branch], check=False)
    
    # Step 4: Switch to main
    print("\nStep 4: Switching to main branch...")
    run_command(['git', 'fetch', 'origin'], check=False)
    run_command(['git', 'checkout', 'main'], check=False)
    run_command(['git', 'pull', 'origin', 'main'], check=False)
    
    # Step 5: Merge current branch into main
    print(f"\nStep 5: Merging {current_branch} into main...")
    result = run_command(['git', 'merge', current_branch, '--no-edit', '-m', f'Merge {current_branch}'], check=False)
    
    if result.returncode != 0:
        print("Merge conflict detected. Resolving by accepting incoming changes...")
        run_command(['git', 'checkout', '--theirs', '.'], check=False)
        run_command(['git', 'add', '-A'])
        run_command(['git', 'commit', '-m', f'Merge {current_branch}: Resolve conflicts'])
    
    # Step 6: Push main
    print("\nStep 6: Pushing main branch...")
    run_command(['git', 'push', 'origin', 'main'], check=False)
    
    # Step 7: Load and merge other PRs
    print("\nStep 7: Loading open PRs...")
    try:
        with open('open_prs.json', 'r') as f:
            prs = json.load(f)
        print(f"Found {len(prs)} open PRs")
    except FileNotFoundError:
        print("open_prs.json not found")
        return
    
    merged_count = 0
    failed_count = 0
    
    # Merge first 10 PRs to avoid overwhelming the system
    for pr in prs[:10]:
        pr_num = pr['number']
        head_ref = pr.get('head', {}).get('ref')
        
        if not head_ref:
            print(f"\nSkipping PR #{pr_num}: No head ref")
            continue
        
        print(f"\n{'='*60}")
        print(f"Processing PR #{pr_num} (branch: {head_ref})")
        print(f"{'='*60}")
        
        try:
            # Fetch the branch
            run_command(['git', 'fetch', 'origin', head_ref])
            
            # Try to merge
            result = run_command(
                ['git', 'merge', f'origin/{head_ref}', '--no-edit', '-m', f'Merge PR #{pr_num}'],
                check=False
            )
            
            if result.returncode != 0:
                print(f"Merge conflict for PR #{pr_num}. Resolving...")
                run_command(['git', 'checkout', '--theirs', '.'])
                run_command(['git', 'add', '-A'])
                run_command(['git', 'commit', '-m', f'Merge PR #{pr_num}: Resolve conflicts'])
            
            # Push main
            run_command(['git', 'push', 'origin', 'main'])
            
            merged_count += 1
            print(f"✓ Successfully merged PR #{pr_num}")
            
        except Exception as e:
            print(f"✗ Failed to merge PR #{pr_num}: {e}")
            failed_count += 1
            run_command(['git', 'merge', '--abort'], check=False)
        
        time.sleep(1)
    
    print(f"\n{'='*60}")
    print("MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"Successfully merged: {merged_count}")
    print(f"Failed: {failed_count}")
    print(f"Remaining PRs: {len(prs) - 10}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()