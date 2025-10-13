#!/usr/bin/env python3
"""
Script to fix merge conflicts in the main app files
"""

import os
import re

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern1 = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [a-f0-9]+'
        content = re.sub(pattern1, '', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> branch (simpler)
        pattern2 = r'<<<<<<< HEAD\s*\n.*?\n=======\s*\n.*?\n>>>>>>> [a-f0-9]+\s*\n'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Pattern 3: Just remove conflict markers without content
        pattern3 = r'<<<<<<< HEAD\s*\n\s*\n=======\s*\n\s*\n>>>>>>> [a-f0-9]+\s*\n'
        content = re.sub(pattern3, '', content, flags=re.DOTALL)
        
        # Clean up extra newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Main app files that need fixing
    app_files = [
        'app/cloud-services/page.tsx',
        'app/community/page.tsx', 
        'app/compliance/page.tsx',
        'app/components/AdvancedErrorBoundary.tsx',
        'app/components/AdvancedPerformanceMonitor.tsx',
        'app/components/CacheManager.tsx',
        'app/components/ContactForm.tsx',
        'app/components/ContentNewsletterSignup.tsx',
        'app/partners/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in app_files:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()