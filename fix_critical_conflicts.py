#!/usr/bin/env python3
"""
Script to fix critical merge conflicts in the main application files
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
            
        print(f"Fixing merge conflicts in {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version
        # This is a simple approach - keep everything between <<<<<<< HEAD and =======
        lines = content.split('\n')
        new_lines = []
        skip_until_equals = False
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_equals = True
                skip_until_end = False
                continue
            elif line.strip() == '=======':
                skip_until_equals = False
                skip_until_end = True
                continue
            elif line.strip() == '>>>>>>> ' or line.strip().startswith('>>>>>>> '):
                skip_until_equals = False
                skip_until_end = False
                continue
            elif skip_until_equals:
                # Keep HEAD content
                new_lines.append(line)
            elif not skip_until_end:
                # Keep content outside conflict markers
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Clean up any remaining merge conflict artifacts
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]*', '', new_content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Critical files that need to be fixed for the app to run
    critical_files = [
        'app/components/Navigation.tsx',
        'app/components/EnhancedSEO.tsx', 
        'app/components/PerformanceMonitor.tsx',
        'app/components/AccessibilityEnhancer.tsx',
        'app/components/ErrorHandler.tsx',
        'app/blog/page.tsx',
        'app/cloud-services/page.tsx',
        'app/community/page.tsx',
        'app/compliance/page.tsx',
        'app/case-studies/page.tsx',
        'app/consultation/page.tsx',
        'app/partners/page.tsx',
        'app/it-services/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in critical_files:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()