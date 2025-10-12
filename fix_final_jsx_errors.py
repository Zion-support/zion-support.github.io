#!/usr/bin/env python3
import os
import re
import glob

def fix_final_jsx_errors(file_path):
    """Fix final JSX errors including missing closing tags"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing closing div tags before JSX fragment closing
        content = re.sub(r'(\s*)</div>\s*\n\s*</>', r'\1      </div>\n    </>', content)
        
        # Fix missing closing div tags
        content = re.sub(r'(\s*)</>\s*\n\s*\)', r'\1      </div>\n    </>\n  )', content)
        
        # Fix malformed JSX structure
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Check if this line has a JSX fragment opening
            if re.search(r'<>\s*$', line):
                # Look ahead to find the closing fragment
                j = i + 1
                div_count = 0
                while j < len(lines):
                    if re.search(r'<div[^>]*>', lines[j]):
                        div_count += 1
                    elif re.search(r'</div>', lines[j]):
                        div_count -= 1
                    elif re.search(r'</>', lines[j]) and div_count > 0:
                        # Missing closing div tags
                        for k in range(div_count):
                            fixed_lines.append('      </div>')
                        fixed_lines.append(lines[j])
                        i = j
                        break
                    elif re.search(r'</>', lines[j]):
                        fixed_lines.append(lines[j])
                        i = j
                        break
                    j += 1
                else:
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
            i += 1
        
        content = '\n'.join(fixed_lines)
        
        # If content was modified, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix final JSX errors in all TSX files"""
    app_dir = "/workspace/app"
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check for final JSX errors...")
    
    for file_path in tsx_files:
        if fix_final_jsx_errors(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()