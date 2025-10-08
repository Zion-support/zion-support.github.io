#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the main branch version
"""
import os
import re
from pathlib import Path

def resolve_merge_conflicts_in_file(filepath):
    """
    Resolve merge conflicts in a file by keeping the 'origin/main' version
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<' not in content:
            return False, "No conflicts found"
        
        # Pattern to match merge conflict blocks
        # This regex finds the conflict markers and captures the different versions
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/[^\n]+\n'
        
        original_content = content
        
        # First, let's handle nested conflicts by processing line by line
        lines = content.split('\n')
        cleaned_lines = []
        in_conflict = False
        conflict_depth = 0
        keep_section = None  # 'head', 'main', or None
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            if line.startswith('<<<<<<< HEAD'):
                in_conflict = True
                conflict_depth += 1
                keep_section = None
                i += 1
                continue
            elif line.startswith('=======') and in_conflict:
                # Switch to the main branch section
                keep_section = 'main'
                i += 1
                continue
            elif line.startswith('>>>>>>> origin/') and in_conflict:
                # End of conflict
                conflict_depth -= 1
                if conflict_depth == 0:
                    in_conflict = False
                    keep_section = None
                i += 1
                continue
            
            # Add lines if not in conflict, or if in the 'main' section
            if not in_conflict:
                cleaned_lines.append(line)
            elif keep_section == 'main':
                cleaned_lines.append(line)
            
            i += 1
        
        resolved_content = '\n'.join(cleaned_lines)
        
        # Write back if changed
        if resolved_content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            return True, "Conflicts resolved"
        else:
            return False, "No changes made"
    
    except Exception as e:
        return False, f"Error: {str(e)}"


def find_files_with_conflicts(root_dir):
    """Find all files with merge conflicts"""
    files_with_conflicts = []
    
    # List of files that had conflicts based on the error output
    conflict_files = [
        'tsconfig.json',
        'app/App.tsx',
        'src/hooks/usePerformance.ts',
        'src/utils/performanceOptimizer.ts',
    ]
    
    for file_path in conflict_files:
        full_path = os.path.join(root_dir, file_path)
        if os.path.exists(full_path):
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<' in content:
                    files_with_conflicts.append(full_path)
    
    return files_with_conflicts


def main():
    root_dir = '/workspace'
    
    print("Finding files with merge conflicts...")
    conflict_files = find_files_with_conflicts(root_dir)
    
    if not conflict_files:
        print("No files with merge conflicts found!")
        return
    
    print(f"\nFound {len(conflict_files)} files with conflicts:")
    for f in conflict_files:
        print(f"  - {f}")
    
    print("\nResolving conflicts...")
    for filepath in conflict_files:
        rel_path = os.path.relpath(filepath, root_dir)
        resolved, message = resolve_merge_conflicts_in_file(filepath)
        status = "✓" if resolved else "✗"
        print(f"{status} {rel_path}: {message}")
    
    print("\nDone!")


if __name__ == '__main__':
    main()