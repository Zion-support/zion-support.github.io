#!/usr/bin/env python3
"""
Script to fix remaining merge conflicts and syntax issues
"""

import os
import re
import glob

def fix_remaining_conflicts(file_path):
    """Fix remaining merge conflicts and syntax issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======', '', content, flags=re.DOTALL)
        
        # Fix common syntax issues
        # Fix missing closing braces
        content = re.sub(r'(\s+)return null\s*$', r'\1return null;\n}', content, flags=re.MULTILINE)
        
        # Fix missing semicolons after return statements
        content = re.sub(r'(\s+)return null\s*$', r'\1return null;', content, flags=re.MULTILINE)
        
        # Fix JSX fragment issues
        content = re.sub(r'<>(\s*<[^>]+>.*?</[^>]+>\s*)<>', r'<>\1</>', content, flags=re.DOTALL)
        
        # Fix missing closing tags
        content = re.sub(r'<section([^>]*)>\s*$', r'<section\1>\n  ', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the fixed content back if it changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining issues in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process problematic files"""
    # List of files that still have issues
    problematic_files = [
        'app/blog/page.tsx',
        'app/careers/page.tsx', 
        'app/case-studies/page.tsx',
        'app/cloud-services/page.tsx',
        'app/components/AdvancedPerformanceMonitor.tsx',
        'app/consultation/page.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for file_path in problematic_files:
        if os.path.isfile(file_path):
            files_processed += 1
            if fix_remaining_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()