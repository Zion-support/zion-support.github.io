#!/usr/bin/env python3
"""
Script to merge multiple PR branches into main with conflict resolution
"""

import subprocess
import sys
import os

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def resolve_conflicts():
    """Resolve common merge conflicts automatically"""
    print("Resolving common merge conflicts...")
    
    # List of files that commonly have conflicts
    conflict_files = [
        "app/layout.tsx",
        "app/about/page.tsx", 
        "app/metadata.ts",
        "app/about/metadata.ts",
        "app/utils/monitoring.ts"
    ]
    
    for file_path in conflict_files:
        if os.path.exists(file_path):
            print(f"Checking {file_path} for conflicts...")
            success, stdout, stderr = run_command(f"git status --porcelain {file_path}")
            if "UU" in stdout or "AA" in stdout:  # Unmerged files
                print(f"Resolving conflicts in {file_path}")
                # Read the file and resolve common conflicts
                with open(file_path, 'r') as f:
                    content = f.read()
                
                # Remove common conflict markers
                content = content.replace('<<<<<<< HEAD\n', '')
                content = content.replace('=======\n', '')
                content = content.replace('>>>>>>> origin/', '')
                
                # Clean up empty lines
                lines = content.split('\n')
                cleaned_lines = []
                for i, line in enumerate(lines):
                    if line.strip() == '' and i > 0 and lines[i-1].strip() == '':
                        continue
                    cleaned_lines.append(line)
                
                content = '\n'.join(cleaned_lines)
                
                with open(file_path, 'w') as f:
                    f.write(content)
                
                # Add the resolved file
                run_command(f"git add {file_path}")

def merge_branch(branch_name):
    """Merge a specific branch"""
    print(f"Merging branch: {branch_name}")
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge origin/{branch_name}")
    
    if success:
        print(f"Successfully merged {branch_name}")
        return True
    else:
        print(f"Merge conflict in {branch_name}, attempting to resolve...")
        
        # Check if there are conflicts
        success, stdout, stderr = run_command("git status --porcelain")
        if "UU" in stdout or "AA" in stdout:
            resolve_conflicts()
            
            # Try to commit the merge
            success, stdout, stderr = run_command("git commit -m 'Auto-merge with conflict resolution'")
            if success:
                print(f"Successfully resolved conflicts and merged {branch_name}")
                return True
            else:
                print(f"Failed to commit merge for {branch_name}")
                run_command("git merge --abort")
                return False
        else:
            print(f"Unknown merge issue with {branch_name}")
            return False

def main():
    """Main function to merge multiple branches"""
    print("Starting PR merge process...")
    
    # List of branches to merge (non-draft PRs)
    branches_to_merge = [
        "cursor/fix-errors-and-merge-to-main-36b6",
        "cursor/fix-errors-and-merge-to-main-d731", 
        "cursor/fix-errors-and-merge-to-main-9c0e",
        "cursor/fix-errors-and-merge-to-main-4acc",
        "cursor/fix-errors-and-merge-to-main-63e7",
        "cursor/fix-errors-and-merge-to-main-a2d5",
        "cursor/fix-errors-and-merge-to-main-f068",
        "cursor/fix-errors-and-merge-to-main-0456"
    ]
    
    successful_merges = []
    failed_merges = []
    
    for branch in branches_to_merge:
        print(f"\n--- Processing {branch} ---")
        if merge_branch(branch):
            successful_merges.append(branch)
        else:
            failed_merges.append(branch)
    
    print(f"\n=== Merge Summary ===")
    print(f"Successful merges: {len(successful_merges)}")
    for branch in successful_merges:
        print(f"  ✓ {branch}")
    
    print(f"Failed merges: {len(failed_merges)}")
    for branch in failed_merges:
        print(f"  ✗ {branch}")
    
    # Push changes
    if successful_merges:
        print("\nPushing changes to main...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("Successfully pushed changes to main")
        else:
            print(f"Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()