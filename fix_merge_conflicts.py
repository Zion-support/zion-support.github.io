#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the appropriate version.
This script will:
1. Find all files with merge conflict markers
2. For each file, choose the version that appears to be more complete/valid
3. Remove conflict markers and clean up the files
"""

import os
import re
import glob
from pathlib import Path

def find_conflict_files():
    """Find all files with merge conflict markers."""
    conflict_files = []
    
    # Search for common file extensions
    extensions = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    for pattern in extensions:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if 'node_modules' in file_path:
                continue
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                continue
    
    return conflict_files

def resolve_conflict(content):
    """Resolve merge conflicts in file content."""
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for conflict markers
        if line.strip().startswith('<<<<<<< HEAD'):
            # Find the end of this conflict
            conflict_start = i
            conflict_end = i
            
            # Look for the end markers
            while conflict_end < len(lines):
                if lines[conflict_end].strip().startswith('======='):
                    middle_marker = conflict_end
                    break
                conflict_end += 1
            else:
                # No middle marker found, skip this conflict
                i += 1
                continue
            
            # Look for the end marker
            while conflict_end < len(lines):
                if lines[conflict_end].strip().startswith('>>>>>>>'):
                    break
                conflict_end += 1
            else:
                # No end marker found, skip this conflict
                i += 1
                continue
            
            # Extract the two versions
            head_version = lines[conflict_start + 1:middle_marker]
            incoming_version = lines[middle_marker + 1:conflict_end]
            
            # Choose the version (prefer the one with more content or better structure)
            chosen_version = choose_version(head_version, incoming_version)
            
            # Add the chosen version
            resolved_lines.extend(chosen_version)
            
            # Skip to after the conflict
            i = conflict_end + 1
            
        else:
            resolved_lines.append(line)
            i += 1
    
    return '\n'.join(resolved_lines)

def choose_version(head_version, incoming_version):
    """Choose between two versions of code."""
    # Remove empty lines for comparison
    head_clean = [line for line in head_version if line.strip()]
    incoming_clean = [line for line in incoming_version if line.strip()]
    
    # If one is empty, choose the other
    if not head_clean:
        return incoming_version
    if not incoming_clean:
        return head_version
    
    # If one has significantly more content, choose it
    if len(head_clean) > len(incoming_clean) * 1.5:
        return head_version
    if len(incoming_clean) > len(head_clean) * 1.5:
        return incoming_version
    
    # Check for common patterns that indicate better code
    head_text = '\n'.join(head_version)
    incoming_text = '\n'.join(incoming_version)
    
    # Prefer version with proper imports
    if 'import' in head_text and 'import' not in incoming_text:
        return head_version
    if 'import' in incoming_text and 'import' not in head_text:
        return incoming_version
    
    # Prefer version with proper JSX structure
    if '<' in head_text and '<' not in incoming_text:
        return head_version
    if '<' in incoming_text and '<' not in head_text:
        return incoming_version
    
    # Prefer version with more complete function/component structure
    if 'export default' in head_text and 'export default' not in incoming_text:
        return head_version
    if 'export default' in incoming_text and 'export default' not in head_text:
        return incoming_version
    
    # Default to head version
    return head_version

def clean_file_content(content):
    """Clean up the file content after conflict resolution."""
    # Remove any remaining conflict markers
    content = re.sub(r'^<<<<<<< HEAD.*?\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'^>>>>>>> .*?\n', '', content, flags=re.MULTILINE)
    
    # Remove empty lines at the end
    content = content.rstrip() + '\n'
    
    return content

def main():
    """Main function to resolve all merge conflicts."""
    print("Finding files with merge conflicts...")
    conflict_files = find_conflict_files()
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    resolved_count = 0
    error_count = 0
    
    for file_path in conflict_files:
        try:
            print(f"Processing {file_path}...")
            
            # Read the file
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Resolve conflicts
            resolved_content = resolve_conflict(content)
            
            # Clean up
            cleaned_content = clean_file_content(resolved_content)
            
            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            resolved_count += 1
            print(f"  ✓ Resolved conflicts in {file_path}")
            
        except Exception as e:
            print(f"  ✗ Error processing {file_path}: {e}")
            error_count += 1
    
    print(f"\nResolution complete!")
    print(f"Successfully resolved: {resolved_count} files")
    print(f"Errors: {error_count} files")

if __name__ == "__main__":
    main()