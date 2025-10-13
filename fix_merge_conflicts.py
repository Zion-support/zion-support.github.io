#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing the most complete version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split content by conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            print(f"Could not parse merge conflicts in {file_path}")
            return False
        
        # Reconstruct content by choosing the longer/more complete version
        result_parts = []
        i = 0
        while i < len(parts):
            if i + 2 < len(parts):
                # We have a conflict section
                before = parts[i]
                head_version = parts[i + 1]
                other_version = parts[i + 2]
                
                # Choose the longer version (usually more complete)
                if len(head_version.strip()) > len(other_version.strip()):
                    chosen_version = head_version
                else:
                    chosen_version = other_version
                
                result_parts.append(before + chosen_version)
                i += 3
            else:
                result_parts.append(parts[i])
                i += 1
        
        # Join all parts
        new_content = ''.join(result_parts)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>>', '', new_content, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in app directory with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    fixed_count = 0
    total_conflicts = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if '<<<<<<< HEAD' in content:
                        total_conflicts += 1
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
                            print(f"✅ Fixed: {file_path}")
                        else:
                            print(f"❌ Failed: {file_path}")
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files with conflicts found: {total_conflicts}")
    print(f"Files successfully fixed: {fixed_count}")
    print(f"Files failed to fix: {total_conflicts - fixed_count}")

if __name__ == "__main__":
    main()