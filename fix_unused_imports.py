#!/usr/bin/env python3
"""
Script to fix unused imports by removing them.
"""

import os
import re
import glob

def fix_unused_imports(file_path):
    """Fix unused imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has unused imports (basic check)
        if 'is defined but never used' not in content:
            return False
        
        print(f"Fixing unused imports in: {file_path}")
        
        # This is a simplified approach - in practice, you'd need to parse the AST
        # For now, let's just remove obviously unused imports based on common patterns
        
        # Remove unused React imports
        content = re.sub(r"import React from 'react';\n", '', content)
        content = re.sub(r"import React, \{ [^}]+ \} from 'react';\n", '', content)
        
        # Remove unused Helmet imports
        content = re.sub(r"import \{ Helmet \} from 'react-helmet-async';\n", '', content)
        
        # Remove unused lucide-react imports that are commonly unused
        unused_icons = [
            'CheckCircle', 'Phone', 'Mail', 'MapPin', 'Zap', 'Shield', 'Brain', 'Globe',
            'ArrowRight', 'BarChart', 'Target', 'TrendingUp', 'FileText', 'Settings',
            'Users', 'Star', 'Cloud', 'BarChart3', 'ChevronLeft', 'ChevronRight',
            'Network', 'Send', 'AlertCircle', 'AlertTriangle', 'CheckCircle'
        ]
        
        for icon in unused_icons:
            # Remove from import statements
            content = re.sub(rf',\s*{icon}(?=\s*[,}])', '', content)
            content = re.sub(rf'{icon}\s*,', '', content)
            content = re.sub(rf',\s*{icon}\s*}}', '}', content)
            content = re.sub(rf'{{\s*{icon}\s*,', '{', content)
            content = re.sub(rf'{{\s*{icon}\s*}}', '{}', content)
        
        # Clean up empty import statements
        content = re.sub(r"import \{ \} from '[^']+';\n", '', content)
        content = re.sub(r"import \{\s*\} from '[^']+';\n", '', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"  Fixed unused imports in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix unused imports in all relevant files."""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    total_files = len(files_to_fix)
    
    print(f"Found {total_files} files to check for unused imports")
    
    for file_path in files_to_fix:
        if fix_unused_imports(file_path):
            fixed_count += 1
    
    print(f"\nFixed unused imports in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()