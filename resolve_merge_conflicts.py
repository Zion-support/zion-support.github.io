#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the appropriate version
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '
                        resolved_lines.append(lines[i])
                        i += 1
                    if i < len(lines):
                        i += 1  # Skip                 else:
                    break
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content
        resolved_content = '\n'.join(resolved_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all files with merge conflict markers
    conflict_files = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        if any(skip in root for skip in ['node_modules', '.git', 'dist', '.next']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.txt')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
            print(f"Resolved conflicts in: {file_path}")
    
    print(f"Successfully resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()