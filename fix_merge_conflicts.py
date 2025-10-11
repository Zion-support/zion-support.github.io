#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the latest version
(usually the one after the last ======= marker)
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n?', content)
        if len(parts) < 2:
            return False
        
        result_parts = []
        
        for part in parts[1:]:  # Skip the first part (before any conflicts)
            # Split by ======= to separate HEAD from other branches
            conflict_parts = part.split('=======', 1)
            if len(conflict_parts) == 2:
                # Split by >>>>>>> to get the actual content
                branch_parts = conflict_parts[1].split('>>>>>>>', 1)
                if len(branch_parts) >= 2:
                    # Keep the content after ======= (usually the newer version)
                    clean_content = branch_parts[0].strip()
                    result_parts.append(clean_content)
                else:
                    # If no >>>>>>> marker, keep the part after =======
                    result_parts.append(conflict_parts[1].strip())
            else:
                # If no ======= marker, keep the original part
                result_parts.append(part.strip())
        
        # Reconstruct the file
        new_content = parts[0] + '\n'.join(result_parts)
        
        # Clean up any remaining merge conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n?', '', new_content)
        new_content = re.sub(r'=======\n?', '', new_content)
        new_content = re.sub(r'>>>>>>> [^\n]*\n?', '', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files"""
    # Focus on app directory and main source files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx'
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if fix_merge_conflicts(file_path):
                fixed_files.append(file_path)
                print(f"Fixed merge conflicts in: {file_path}")
    
    print(f"\nTotal files fixed: {len(fixed_files)}")
    return len(fixed_files) > 0

if __name__ == "__main__":
    main()