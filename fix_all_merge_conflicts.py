#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts in the repository
"""
import os
import subprocess
import re

def remove_conflict_markers(content):
    """Remove merge conflict markers, keeping the 'origin/main' or last version"""
    lines = content.split('\n')
    cleaned_lines = []
    in_conflict = False
    keep_section = False
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD') or line.startswith('<<<<<<< '):
            in_conflict = True
            keep_section = False
            continue
        elif line.startswith('=======') and in_conflict:
            # Switch to keeping the next section (origin/main)
            keep_section = True
            continue
        elif line.startswith('>>>>>>> origin/') or line.startswith('>>>>>>> '):
            # End of conflict
            in_conflict = False
            keep_section = False
            continue
        
        # Keep lines if not in conflict, or if we're in the 'keep' section
        if not in_conflict or keep_section:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)


def fix_file(filepath):
    """Fix merge conflicts in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        if '<<<<<' not in content:
            return False, "No conflicts"
        
        original_content = content
        fixed_content = remove_conflict_markers(content)
        
        if fixed_content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True, "Fixed"
        else:
            return False, "No changes"
    
    except Exception as e:
        return False, f"Error: {str(e)}"


def find_all_conflict_files():
    """Find all files with merge conflicts"""
    try:
        # Use git grep to find files with conflict markers
        result = subprocess.run(
            ['grep', '-r', '-l', '<<<<<<<', '/workspace', '--exclude-dir=node_modules', 
             '--exclude-dir=.git', '--exclude-dir=.next', '--exclude-dir=dist', 
             '--exclude-dir=build', '--include=*.ts', '--include=*.tsx', '--include=*.js', 
             '--include=*.jsx', '--include=*.json'],
            capture_output=True,
            text=True
        )
        
        files = [f.strip() for f in result.stdout.split('\n') if f.strip()]
        return files
    except Exception as e:
        print(f"Error finding files: {e}")
        return []


def main():
    print("=" * 70)
    print("COMPREHENSIVE MERGE CONFLICT FIXER")
    print("=" * 70)
    print()
    
    print("Finding all files with merge conflicts...")
    conflict_files = find_all_conflict_files()
    
    if not conflict_files:
        print("✓ No files with merge conflicts found!")
        return
    
    print(f"Found {len(conflict_files)} files with conflicts\n")
    
    fixed_count = 0
    error_count = 0
    
    for filepath in conflict_files:
        rel_path = os.path.relpath(filepath, '/workspace')
        success, message = fix_file(filepath)
        
        if success:
            print(f"✓ {rel_path}")
            fixed_count += 1
        else:
            if message != "No conflicts":
                print(f"✗ {rel_path}: {message}")
                error_count += 1
    
    print()
    print("=" * 70)
    print(f"SUMMARY: Fixed {fixed_count} files, {error_count} errors")
    print("=" * 70)


if __name__ == '__main__':
    main()