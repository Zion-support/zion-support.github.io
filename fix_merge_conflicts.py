#!/usr/bin/env python3
"""
Script to fix merge conflicts in blog files by resolving conflicts and fixing syntax errors.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove Next.js imports since this is a Vite project
        content = re.sub(r"import { Metadata } from 'next';\n", '', content)
        
        # Fix merge conflict markers by keeping the newer version (after =======)
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        content = re.sub(
            r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Fix syntax errors - add missing commas and braces
        # Fix missing comma before closing brace in metadata
        content = re.sub(
            r'(\s+type: \'article\',?)\s*(\n\s*}\s*;)',
            r'\1\n  },\n};',
            content
        )
        
        # Fix missing comma in metadata object
        content = re.sub(
            r'(\s+type: \'article\',?)\s*(\n\s*}\s*;?\s*export)',
            r'\1\n  },\n};\n\nexport',
            content
        )
        
        # Fix function declarations with missing braces
        content = re.sub(
            r'export default function ([^(]+)\s*\)\s*(\n\s*return)',
            r'export default function \1() {\n  \2',
            content
        )
        
        # Fix missing opening brace after function declaration
        content = re.sub(
            r'(export default function [^{]+)\s*(\n\s*return)',
            r'\1 {\n  \2',
            content
        )
        
        # Fix missing closing brace at end of function
        if 'export default function' in content and content.count('{') > content.count('}'):
            # Add missing closing brace before the last line
            lines = content.split('\n')
            if lines and not lines[-1].strip():
                lines.pop()
            lines.append('}')
            content = '\n'.join(lines)
        
        # Fix metadata object syntax
        content = re.sub(
            r'export const metadata: Metadata = \s*(\n\s*title:)',
            r'export const metadata: Metadata = {\n  \1',
            content
        )
        
        # Fix missing opening brace in metadata
        content = re.sub(
            r'export const metadata: Metadata = \s*(\n\s*title: [^,]+,\s*\n\s*description:)',
            r'export const metadata: Metadata = {\n  \1',
            content
        )
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all blog files."""
    # Get all blog files with merge conflicts
    blog_files = glob.glob('/workspace/app/blog/**/*.tsx', recursive=True)
    
    fixed_count = 0
    total_count = 0
    
    for file_path in blog_files:
        if os.path.exists(file_path):
            total_count += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nProcessed {total_count} files, fixed {fixed_count} files")

if __name__ == "__main__":
    main()