#!/usr/bin/env python3
"""
Advanced script to resolve complex nested merge conflicts in TypeScript/React files.
This script handles multiple levels of merge conflicts and chooses the most complete version.
"""

import os
import re
import glob

def resolve_complex_merge_conflicts(file_path):
    """Resolve complex merge conflicts in a single file."""
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
    
    # Use regex to find and replace all merge conflict blocks
    # Pattern to match merge conflict blocks (including nested ones)
    conflict_pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*'
    
    def resolve_conflict(match):
        conflict_text = match.group(0)
        
        # Split by ======= to get HEAD and other versions
        parts = conflict_text.split('=======')
        if len(parts) != 2:
            return conflict_text  # Return original if malformed
        
        head_part = parts[0].replace('<<<<<<< HEAD', '').strip()
        other_part = parts[1].split('>>>>>>>')[0].strip()
        
        # Count non-empty lines to determine which version is more complete
        head_lines = [line for line in head_part.split('\n') if line.strip()]
        other_lines = [line for line in other_part.split('\n') if line.strip()]
        
        # Choose the version with more content
        if len(other_lines) > len(head_lines):
            print(f"  Chose other version (longer: {len(other_lines)} vs {len(head_lines)} lines)")
            return other_part
        else:
            print(f"  Chose HEAD version (longer: {len(head_lines)} vs {len(other_lines)} lines)")
            return head_part
    
    # Apply the conflict resolution
    resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
    
    # Write the resolved content
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        print(f"Successfully resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Specific files mentioned in the error
    specific_files = [
        'app/ai-api-management/page.tsx',
        'app/ai-api-manager/page.tsx', 
        'app/ai-content-writer/page.tsx',
        'app/careers/page.tsx',
        'app/consultation/page.tsx',
        'app/utils/accessibilityEnhancer.ts'
    ]
    
    success_count = 0
    total_count = 0
    
    for file_path in specific_files:
        if os.path.exists(file_path):
            total_count += 1
            if resolve_complex_merge_conflicts(file_path):
                success_count += 1
    
    print(f"\nProcessed {total_count} files, successfully resolved {success_count} files")

if __name__ == "__main__":
    main()