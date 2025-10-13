#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts in the repository
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
        
        # Remove merge conflict markers and keep the second version (after =======)
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_version = None
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                conflict_version = 'head'
                continue
            elif line.strip() == '=======':
                conflict_version = 'other'
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                conflict_version = None
                continue
            
            if in_conflict:
                if conflict_version == 'other':
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all files with merge conflicts
    conflict_files = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other common directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', '.next']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.py', '.sh')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in conflict_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Also clean up any remaining .original files that might be causing issues
    original_files = glob.glob('**/*.original', recursive=True)
    print(f"Found {len(original_files)} .original files")
    
    for original_file in original_files:
        try:
            os.remove(original_file)
            print(f"Removed: {original_file}")
        except:
            pass

if __name__ == "__main__":
    main()