#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts by accepting the latest version (after the last =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+'
        
        # Find all conflicts
        conflicts = re.findall(conflict_pattern, content, re.DOTALL)
        
        if not conflicts:
            return False
        
        print(f"Resolving {len(conflicts)} conflicts in {file_path}")
        
        # For each conflict, extract the part after the last =======
        def resolve_conflict(match):
            conflict_text = match.group(0)
            # Split by ======= and take the last part (after the last =======)
            parts = conflict_text.split('=======')
            if len(parts) >= 2:
                # Take the last part and remove the >>>>>>> line
                resolved = parts[-1]
                # Remove the >>>>>>> branch-name line
                resolved = re.sub(r'>>>>>>> [^\n]+\n?', '', resolved)
                return resolved
            return conflict_text
        
        # Replace all conflicts
        resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    files_with_conflicts = []
    
    for pattern in ['**/*.ts', '**/*.tsx']:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
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
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()