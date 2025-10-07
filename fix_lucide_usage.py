#!/usr/bin/env python3
import os
import re
import glob

def fix_lucide_usage(file_path):
    """Fix lucide-react usage to use the correct import format"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has lucide-react imports
        if 'from \'lucide-react\'' not in content and 'from "lucide-react"' not in content:
            return False
        
        # Pattern to match individual imports from lucide-react
        pattern = r'import\s+(\w+)\s+from\s+[\'"]lucide-react[\'"];'
        
        def replace_import(match):
            icon_name = match.group(1)
            # Use the Icon suffix version
            return f"import {icon_name} from 'lucide-react';"
        
        # Replace the import statements
        new_content = re.sub(pattern, replace_import, content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TSX files with lucide-react imports
    tsx_files = []
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if 'from \'lucide-react\'' in content or 'from "lucide-react"' in content:
                            tsx_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(tsx_files)} files with lucide-react imports")
    
    fixed_count = 0
    for file_path in tsx_files:
        print(f"Processing: {file_path}")
        if fix_lucide_usage(file_path):
            fixed_count += 1
            print(f"  ✓ Fixed lucide-react usage")
        else:
            print(f"  - No changes needed or error occurred")
    
    print(f"\nFixed lucide-react usage in {fixed_count} files")

if __name__ == "__main__":
    main()