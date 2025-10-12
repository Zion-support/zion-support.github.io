#!/usr/bin/env python3
"""
Script to fix merge conflicts by choosing the appropriate version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split content by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
            
        # Reconstruct content by choosing the appropriate version
        # For most cases, we'll choose the version after ======= (the incoming changes)
        # But we'll be more selective for specific patterns
        new_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                head_version = parts[i]
                incoming_version = parts[i + 1]
                after_conflict = parts[i + 2] if i + 2 < len(parts) else ""
                
                # Choose the version based on content analysis
                chosen_version = choose_version(head_version, incoming_version, file_path)
                new_content += chosen_version + after_conflict
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def choose_version(head_version, incoming_version, file_path):
    """Choose which version to keep based on file type and content"""
    
    # For React/TypeScript files, prefer the incoming version (after =======)
    # as it's usually more complete
    if file_path.endswith(('.tsx', '.ts', '.jsx', '.js')):
        # Check if incoming version has more complete structure
        if 'export default' in incoming_version or 'export {' in incoming_version:
            return incoming_version
        elif 'export default' in head_version or 'export {' in head_version:
            return head_version
        else:
            return incoming_version
    
    # For other files, prefer incoming version
    return incoming_version

def main():
    """Main function to fix all merge conflicts"""
    
    # Get all files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js',
        'components/**/*.tsx',
        'components/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js'
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_merge_conflicts(file_path):
                fixed_files.append(file_path)
    
    print(f"\nFixed merge conflicts in {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  - {file_path}")

if __name__ == "__main__":
    main()