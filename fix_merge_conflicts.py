#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript/React files.
This script will choose the most complete version of each conflicted section.
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file."""
    print(f"Processing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    # Check if file has merge conflicts
    if '<<<<<<< HEAD' not in content:
        print(f"No merge conflicts found in {file_path}")
        return True
    
    # Split content into lines for easier processing
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for merge conflict start
        if line.strip() == '<<<<<<< HEAD':
            # Find the end of this conflict block
            conflict_start = i
            conflict_end = i
            
            # Look for the end markers
            while conflict_end < len(lines):
                if lines[conflict_end].strip() == '=======':
                    break
                conflict_end += 1
            
            if conflict_end >= len(lines):
                # Malformed conflict, skip
                resolved_lines.append(line)
                i += 1
                continue
                
            # Find the closing marker
            closing_marker = conflict_end + 1
            while closing_marker < len(lines):
                if lines[closing_marker].strip() == '>>>>>>> ':
                    break
                closing_marker += 1
            
            if closing_marker >= len(lines):
                # Malformed conflict, skip
                resolved_lines.append(line)
                i += 1
                continue
            
            # Extract the different versions
            head_version = lines[conflict_start + 1:conflict_end]
            other_version = lines[conflict_end + 1:closing_marker]
            
            # Choose the version with more content (usually more features)
            if len(other_version) > len(head_version):
                chosen_version = other_version
                print(f"  Chose other version (longer) for conflict at line {conflict_start + 1}")
            else:
                chosen_version = head_version
                print(f"  Chose HEAD version for conflict at line {conflict_start + 1}")
            
            # Add the chosen version
            resolved_lines.extend(chosen_version)
            
            # Skip to after the conflict
            i = closing_marker + 1
        else:
            resolved_lines.append(line)
            i += 1
    
    # Write the resolved content
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        print(f"Successfully resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Find all TypeScript/React files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'types/**/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Also check specific files mentioned in the error
    specific_files = [
        'app/ai-api-management/page.tsx',
        'app/ai-api-manager/page.tsx', 
        'app/ai-content-writer/page.tsx',
        'app/blog/page.tsx',
        'app/careers/page.tsx',
        'app/case-studies/page.tsx',
        'app/cloud-services/page.tsx',
        'app/consultation/page.tsx',
        'app/types/next.d.ts',
        'app/utils/accessibilityEnhancer.ts'
    ]
    
    files_to_process.extend(specific_files)
    files_to_process = list(set(files_to_process))  # Remove duplicates
    
    success_count = 0
    total_count = 0
    
    for file_path in files_to_process:
        if os.path.exists(file_path):
            total_count += 1
            if resolve_merge_conflicts(file_path):
                success_count += 1
    
    print(f"\nProcessed {total_count} files, successfully resolved {success_count} files")

if __name__ == "__main__":
    main()