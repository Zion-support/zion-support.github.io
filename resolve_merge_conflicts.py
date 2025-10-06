#!/usr/bin/env python3
"""
<<<<<<< HEAD
Comprehensive merge conflict resolution script
Resolves conflicts by preferring main branch version and cleaning up conflicts
Script to automatically resolve merge conflicts by choosing the cleaner version
import os
import subprocess
import sys
import re
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_unmerged_branches():
    """Get list of branches that haven't been merged to main"""
    success, output, _ = run_command("git branch -r --no-merged main")
    if not success:
        return []
    
    branches = []
    for line in output.strip().split('\n'):
        if line.strip() and 'origin/' in line:
            branch = line.strip().replace('origin/', '')
            if 'cursor/fix-errors-and-merge-to-main' in branch:
                branches.append(branch)
    return branches

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts in a single file by choosing main branch version"""
    if not os.path.exists(file_path):
        return True
    
        # Check if file has conflict markers
    """Resolve merge conflicts in a file"""
        # Skip if no merge conflicts
>>>>>>> origin/merge-fixes-20251005-193002
        if '<<<<<<< HEAD' not in content:
            return True
        
        # Split by conflict markers and keep main branch version
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        keep_main = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_main = True
                continue
            elif line.strip() == '=======':
                keep_main = False
                continue
            elif line.strip() == '>>>>>>>':
                in_conflict = False
                keep_main = True
                continue
            elif in_conflict and not keep_main:
                # Skip lines from the other branch
                continue
            else:
                resolved_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        return True
    """Main function to merge all unmerged branches"""
    print("Starting comprehensive merge conflict resolution...")
    
    # Get list of unmerged branches
    branches = get_unmerged_branches()
    print(f"Found {len(branches)} unmerged branches")
    
    if not branches:
        print("No branches to merge")
    # Get all files with merge conflicts
    result = os.popen("git diff --name-only --diff-filter=U").read().strip()
    if not result:
        print("No merge conflicts found")
>>>>>>> origin/merge-fixes-20251005-193002
        return
    
    # Merge each branch
    successful_merges = 0
    failed_merges = 0
    
    for branch in branches:
        print(f"\nProcessing branch: {branch}")
        
        # Check if branch has commits ahead of main
        success, output, _ = run_command(f"git log --oneline main..origin/{branch}")
        if not success or not output.strip():
            print(f"Branch {branch} has no new commits, skipping")
            continue
        
        if merge_branch(branch):
            successful_merges += 1
        else:
            failed_merges += 1
            # Abort current merge if it failed
            run_command("git merge --abort")
    
    print(f"\n=== Merge Summary ===")
    print(f"Successful merges: {successful_merges}")
    print(f"Failed merges: {failed_merges}")
    
    if successful_merges > 0:
        print("Pushing changes to remote...")
        run_command("git push origin main")
        print("Changes pushed successfully!")
=======
Script to resolve merge conflicts by choosing HEAD version
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by choosing HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(
            r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Resolved conflicts in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all TSX and TS files with merge conflicts
    patterns = [
        '/workspace/app/blog/**/*.tsx',
        '/workspace/src/pages/blog/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/src/**/*.ts'
    ]
    
    files_with_conflicts = []
    for pattern in patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_with_conflicts)} files to check for conflicts")
    
    resolved_count = 0
    for file_path in files_with_conflicts:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()
>>>>>>> origin/fix-errors-and-merge-final
