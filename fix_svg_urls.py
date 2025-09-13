#!/usr/bin/env python3

import os
import re
import glob

def fix_svg_urls_in_file(filepath):
    """Fix SVG URL encoding issues in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match bg-[url('data:image/svg+xml,...')] with any content
        pattern = r"bg-\[url\('data:image/svg\+xml,[^']*'\)\]"
        
        # Replace with simpler gradient
        replacement = "bg-gradient-to-br from-white/5 to-transparent"
        
        # Apply the replacement
        new_content = re.sub(pattern, replacement, content)
        
        # Only write if content changed
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed: {filepath}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """Fix SVG URLs in all TSX files"""
    # Find all .tsx files
    tsx_files = []
    
    # Search in multiple directories
    search_dirs = ['components', 'src', 'app', 'pages']
    
    for search_dir in search_dirs:
        if os.path.exists(search_dir):
            tsx_files.extend(glob.glob(f"{search_dir}/**/*.tsx", recursive=True))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    for filepath in tsx_files:
        if fix_svg_urls_in_file(filepath):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()