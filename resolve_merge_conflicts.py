#!/usr/bin/env python3
"""
Automated merge conflict resolver for the zion.app repository.
This script resolves merge conflicts by choosing the incoming changes (theirs) for most files,
with specific exceptions for critical files.
"""

import os
import subprocess
import sys
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_conflicted_files():
    """Get list of files with merge conflicts."""
    success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if not success:
        print(f"Error getting conflicted files: {stderr}")
        return []
    
    return [f.strip() for f in stdout.split('\n') if f.strip()]

def resolve_conflict_automatically(file_path):
    """Resolve merge conflict for a single file by choosing incoming changes."""
    try:
        # For most files, we'll choose the incoming version (theirs)
        # This is typically the version from the PR branch
        
        # Read the conflicted file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no conflict markers
        if '<<<<<<< HEAD' not in content:
            return True
        
        # For critical configuration files, we might want to be more careful
        critical_files = [
            'package.json',
            'package-lock.json', 
            'yarn.lock',
            'tsconfig.json',
            'vite.config.ts',
            'vite.config.js',
            'next.config.js',
            'netlify.toml'
        ]
        
        if any(critical in file_path for critical in critical_files):
            print(f"Skipping critical file for manual review: {file_path}")
            return False
        
        # For temp_backup files and other temporary files, we can safely choose theirs
        if any(pattern in file_path for pattern in ['temp_', 'temp_backup', 'temp_components', 'temp_conflicts']):
            # Choose the incoming version (theirs) by removing conflict markers and keeping theirs
            lines = content.split('\n')
            resolved_lines = []
            skip_until = None
            
            for line in lines:
                if line.strip() == '<<<<<<< HEAD':
                    skip_until = 'ours'
                    continue
                elif line.strip() == '=======':
                    skip_until = 'theirs'
                    continue
                elif line.strip() == '>>>>>>> ' + line.split('>>>>>>> ')[-1] if '>>>>>>> ' in line else False:
                    skip_until = None
                    continue
                elif skip_until == 'ours':
                    continue
                elif skip_until == 'theirs' or skip_until is None:
                    resolved_lines.append(line)
            
            # Write the resolved content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(resolved_lines))
            
            print(f"Resolved conflict in: {file_path}")
            return True
            
    except Exception as e:
        print(f"Error resolving conflict in {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts."""
    print("Starting automated merge conflict resolution...")
    
    # Get all conflicted files
    conflicted_files = get_conflicted_files()
    if not conflicted_files:
        print("No merge conflicts found.")
        return
    
    print(f"Found {len(conflicted_files)} files with conflicts")
    
    resolved_count = 0
    skipped_count = 0
    
    for file_path in conflicted_files:
        if resolve_conflict_automatically(file_path):
            resolved_count += 1
        else:
            skipped_count += 1
    
    print(f"\nResolution complete:")
    print(f"- Resolved: {resolved_count} files")
    print(f"- Skipped: {skipped_count} files")
    
    # Add resolved files to git
    if resolved_count > 0:
        run_command("git add .")
        print("Added resolved files to git staging area")
    
    # Check if there are still conflicts
    remaining_conflicts = get_conflicted_files()
    if remaining_conflicts:
        print(f"\nRemaining conflicts in {len(remaining_conflicts)} files:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("\nAll conflicts resolved! Ready to commit.")

if __name__ == "__main__":
    main()