#!/usr/bin/env python3
"""
Script to fix duplicate imports with incorrect syntax.
"""

import os
import re
import sys
from pathlib import Path

def fix_duplicate_imports(file_path):
    """Fix duplicate imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file needs fixing
        needs_fixing = False
        original_content = content
        
        # Fix duplicate imports with incorrect syntax like:
        # import React, { useEffect } from 'react', { useEffect };
        # import React, { useState, useRef, useEffect } from 'react', { useEffect }, { useRef };
        
        # Pattern to match problematic imports
        problematic_pattern = r"import\s+([^,]+),\s*\{([^}]+)\}\s+from\s+'([^']+)',\s*\{([^}]+)\}(?:,\s*\{([^}]+)\})*;"
        
        def fix_import(match):
            base_import = match.group(1)
            first_hooks = match.group(2)
            module = match.group(3)
            second_hooks = match.group(4)
            third_hooks = match.group(5) if match.group(5) else ""
            
            # Combine all unique hooks
            all_hooks = set()
            all_hooks.update(first_hooks.split(','))
            all_hooks.update(second_hooks.split(','))
            if third_hooks:
                all_hooks.update(third_hooks.split(','))
            
            # Clean up and join
            clean_hooks = [hook.strip() for hook in all_hooks if hook.strip()]
            unique_hooks = list(dict.fromkeys(clean_hooks))  # Remove duplicates while preserving order
            
            if unique_hooks:
                return f"import {base_import}, {{ {', '.join(unique_hooks)} }} from '{module}';"
            else:
                return f"import {base_import} from '{module}';"
        
        new_content = re.sub(problematic_pattern, fix_import, content)
        
        # Also fix duplicate imports in the same line like:
        # import { ImageIcon, ImageIcon } from 'lucide-react';
        duplicate_inline_pattern = r"import\s+\{([^}]+)\}\s+from\s+'([^']+)';"
        
        def fix_duplicate_inline(match):
            imports = match.group(1)
            module = match.group(2)
            
            # Split by comma and remove duplicates
            import_list = [imp.strip() for imp in imports.split(',')]
            unique_imports = list(dict.fromkeys(import_list))  # Remove duplicates while preserving order
            
            return f"import {{ {', '.join(unique_imports)} }} from '{module}';"
        
        new_content = re.sub(duplicate_inline_pattern, fix_duplicate_inline, new_content)
        
        if new_content != original_content:
            needs_fixing = True
            content = new_content
        
        if needs_fixing:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with duplicate import issues."""
    workspace = Path('/workspace')
    app_dir = workspace / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all .tsx files
    files_to_check = []
    for file_path in app_dir.rglob('*.tsx'):
        files_to_check.append(file_path)
    
    print(f"Checking {len(files_to_check)} files for duplicate import issues")
    
    fixed_count = 0
    for file_path in files_to_check:
        if fix_duplicate_imports(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path.relative_to(workspace)}")
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()