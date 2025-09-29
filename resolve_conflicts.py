#!/usr/bin/env python3
"""
Script to resolve git merge conflicts automatically
"""
import os
import re
import glob

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts in a single file"""
    print(f"Resolving conflicts in {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    # Check if file has conflicts
                i += 1
            
            if i >= len(lines):
                # No separator found, keep original
                resolved_lines.append(line)
                i += 1
                continue
                
            middle = i
            i += 1
            
            # Find the end separator
                i += 1
            
            if i >= len(lines):
                # No end found, keep original
                resolved_lines.append(line)
                i += 1
                continue
                
            end = i
            i += 1
            
            # Extract HEAD content (our changes)
            head_content = lines[conflict_start + 1:middle]
            
            # Extract incoming content
            incoming_content = lines[middle + 1:end]
            
            # Choose the better version (prefer non-empty, longer content)
            if len(incoming_content) > len(head_content):
                resolved_lines.extend(incoming_content)
            else:
                resolved_lines.extend(head_content)
                
        else:
            resolved_lines.append(line)
            i += 1
    
    # Write resolved content
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        print(f"Successfully resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all conflicts"""
    # Get list of files with conflicts
    result = os.popen('git status --porcelain | grep "^UU"').read()
    conflict_files = []
    
    for line in result.strip().split('\n'):
        if line:
            file_path = line.split()[1]
            conflict_files.append(file_path)
    
    if not conflict_files:
        print("No conflict files found")
        return
    
    print(f"Found {len(conflict_files)} files with conflicts:")
    for f in conflict_files:
        print(f"  - {f}")
    
    # Resolve conflicts in each file
    success_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            success_count += 1
    
    print(f"\nResolved conflicts in {success_count}/{len(conflict_files)} files")

if __name__ == "__main__":
    main()