#!/usr/bin/env python3
"""
Final comprehensive fix for all remaining parsing errors
"""

import os
import re
import glob

def fix_all_remaining_issues(file_path):
    """Fix all remaining parsing issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing spaces in JSX attributes
        content = re.sub(r'<divclassName=', '<div className=', content)
        content = re.sub(r'<metaname=', '<meta name=', content)
        content = re.sub(r'<pclassName=', '<p className=', content)
        content = re.sub(r'<h1className=', '<h1 className=', content)
        content = re.sub(r'<h2className=', '<h2 className=', content)
        content = re.sub(r'<h3className=', '<h3 className=', content)
        content = re.sub(r'<h4className=', '<h4 className=', content)
        content = re.sub(r'<h5className=', '<h5 className=', content)
        content = re.sub(r'<h6className=', '<h6 className=', content)
        content = re.sub(r'<spanclassName=', '<span className=', content)
        content = re.sub(r'<aclassName=', '<a className=', content)
        content = re.sub(r'<buttonclassName=', '<button className=', content)
        content = re.sub(r'<inputclassName=', '<input className=', content)
        content = re.sub(r'<formclassName=', '<form className=', content)
        content = re.sub(r'<sectionclassName=', '<section className=', content)
        content = re.sub(r'<articleclassName=', '<article className=', content)
        content = re.sub(r'<headerclassName=', '<header className=', content)
        content = re.sub(r'<foot className=', '<footer className=', content)
        content = re.sub(r'<navclassName=', '<nav className=', content)
        content = re.sub(r'<mainclassName=', '<main className=', content)
        content = re.sub(r'<asideclassName=', '<aside className=', content)
        
        # Fix missing spaces in other attributes
        content = re.sub(r'<Linkto=', '<Link to=', content)
        content = re.sub(r'<Routepath=', '<Route path=', content)
        content = re.sub(r'<Routeelement=', '<Route element=', content)
        content = re.sub(r'<Routeselement=', '<Route element=', content)
        content = re.sub(r'<Routespath=', '<Route path=', content)
        
        # Fix missing spaces in className values
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3 \4', content)
        
        # Fix missing spaces in other attributes
        content = re.sub(r'(\w)([A-Z])', r'\1 \2', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX tags
        content = re.sub(r'<([^>]*?)([a-zA-Z])([a-zA-Z])([^>]*?)>', r'<\1\2 \3\4>', content)
        
        # Fix broken imports
        content = re.sub(r'^import\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+{\s*}\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+,\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Fix spaces in text content
        content = re.sub(r'5 G', '5G', content)
        content = re.sub(r'([0-9]+) G', r'\1G', content)
        
        # Fix spaces in JSX attributes
        content = re.sub(r'b g-gradient-to-r', 'bg-gradient-to-r', content)
        content = re.sub(r'py-16text-center', 'py-16 text-center', content)
        content = re.sub(r'whitemb-6', 'white mb-6', content)
        content = re.sub(r'gray-300mb-8', 'gray-300 mb-8', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining issues"""
    # Get all page files
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if fix_all_remaining_issues(file_path):
                files_fixed += 1
                print(f"Fixed issues in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()