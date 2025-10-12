#!/usr/bin/env python3
"""
Script to fix specific parsing errors in files.
"""

import os
import re
import glob

def fix_parsing_errors(file_path):
    """Fix common parsing errors in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common parsing issues
        fixes = [
            # Fix missing semicolons
            (r'(\w+)\s*$', r'\1;'),
            # Fix missing closing braces
            (r'(\w+)\s*$', r'\1}'),
            # Fix JSX closing tag issues
            (r'<(\w+)>\s*$', r'</\1>'),
            # Fix missing imports
            (r'^import\s+React', 'import React from \'react\''),
            # Fix const in wrong context
            (r'const\s+const', 'const'),
            # Fix missing parentheses
            (r'(\w+)\s*$', r'\1()'),
        ]
        
        # Apply fixes
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Clean up any double semicolons
        content = re.sub(r';;+', ';', content)
        
        # Clean up any double braces
        content = re.sub(r'\}\}+', '}', content)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed parsing errors in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific files with known issues."""
    specific_fixes = {
        '/workspace/app/ai-automated-reporting/page.tsx': [
            (r'export default AIAutomatedReportingPage;', 'export default AIAutomatedReportingPage;')
        ],
        '/workspace/app/components/EnhancedAccessibilityEnhancer.tsx': [
            (r'export default EnhancedAccessibilityEnhancerPage', 'export default EnhancedAccessibilityEnhancerPage;')
        ],
        '/workspace/app/components/FuturisticBackground.tsx': [
            (r'}\s*$', '}\n')
        ]
    }
    
    for file_path, fixes in specific_fixes.items():
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            for pattern, replacement in fixes:
                content = re.sub(pattern, replacement, content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed specific issues in: {file_path}")
        
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

def main():
    """Main function to fix parsing errors."""
    # Fix specific files first
    fix_specific_files()
    
    # Then process all files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            if fix_parsing_errors(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed parsing errors in {files_fixed} files")

if __name__ == "__main__":
    main()