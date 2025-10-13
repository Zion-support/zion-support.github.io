#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by keeping the latest version (after last =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Split by conflict markers and keep the last part
        parts = re.split(r'<<<<<<< HEAD.*?=======.*?>>>>>>> .*?\n', content, flags=re.DOTALL)
        
        # If we have parts after splitting, take the last one
        if len(parts) > 1:
            # Find the last ======= and take everything after it
            last_equal_index = content.rfind('=======')
            if last_equal_index != -1:
                # Find the next >>>>>>> after the last =======
                next_arrow_index = content.find('>>>>>>>', last_equal_index)
                if next_arrow_index != -1:
                    # Take everything after the >>>>>>> line
                    lines = content[last_equal_index:].split('\n')
                    # Skip the ======= line and find the >>>>>>> line
                    result_lines = []
                    skip_until_arrow = True
                    for line in lines:
                        if skip_until_arrow:
                            if line.strip().startswith('>>>>>>>'):
                                skip_until_arrow = False
                            continue
                        result_lines.append(line)
                    
                    # Combine the part before the first conflict with the cleaned part
                    before_conflict = content[:content.find('<<<<<<< HEAD')]
                    cleaned_content = before_conflict + '\n'.join(result_lines)
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(cleaned_content)
                    return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    pattern = "/workspace/**/*.{ts,tsx}"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<<<<<<< HEAD' in content:
                if fix_merge_conflicts(file_path):
                    print(f"Fixed merge conflicts in: {file_path}")
                    fixed_count += 1
                else:
                    print(f"Could not fix merge conflicts in: {file_path}")
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()