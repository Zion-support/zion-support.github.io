#!/usr/bin/env python3
"""
Aggressive conflict resolver that removes all merge conflict markers
"""
import os
import re
import sys
from pathlib import Path

def aggressive_resolve_conflicts(file_path):
    """Aggressively resolve merge conflicts by removing all conflict markers and keeping HEAD content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Aggressively resolving conflicts in {file_path}")
        
        # Remove all merge conflict markers and everything between ======= and >>>>>>> main
        # This keeps only the HEAD content
        lines = content.split('\n')
        resolved_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_end = False
                continue
            elif line.strip() == '=======':
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>> main'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                resolved_lines.append(line)
        
        resolved_content = '\n'.join(resolved_lines)
        
        # Clean up any remaining artifacts
        resolved_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', resolved_content)  # Remove excessive newlines
        resolved_content = re.sub(r'^\s*\n', '', resolved_content, flags=re.MULTILINE)  # Remove leading empty lines
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to aggressively resolve all conflicts"""
    workspace = Path('/workspace')
    
    # Find all files with merge conflicts
    file_extensions = ['*.tsx', '*.ts', '*.jsx', '*.js', '*.json']
    files_with_conflicts = []
    
    for ext in file_extensions:
        for file_path in workspace.rglob(ext):
            if any(skip in str(file_path) for skip in ['node_modules', 'dist', '.git']):
                continue
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in files_with_conflicts:
        if aggressive_resolve_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")
    
    # Check if any conflicts remain
    remaining_conflicts = []
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    remaining_conflicts.append(file_path)
        except:
            continue
    
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("All merge conflicts resolved successfully!")

if __name__ == "__main__":
    main()