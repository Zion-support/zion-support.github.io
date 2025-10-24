#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors."""
    # Fix malformed meta tags
    content = re.sub(r'<meta name = "([^"]+)"', r'<meta name="\1"', content)
    
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
    
    # Fix broken Link components with misplaced attributes
    content = re.sub(r'<Link href="([^"]+)"\s*>\s*className="([^"]+)"', r'<Link href="\1" className="\2"', content)
    
    # Fix missing closing tags
    content = re.sub(r'<(\w+)\s+([^>]*?)(?<!>)$', r'<\1 \2>', content, flags=re.MULTILINE)
    
    # Fix extra commas and semicolons
    content = re.sub(r';\s*,\s*$', r';', content, flags=re.MULTILINE)
    content = re.sub(r',\s*;\s*$', r';', content, flags=re.MULTILINE)
    
    # Fix missing semicolons after return statements
    content = re.sub(r'(\s+);\s*$', r'\1', content, flags=re.MULTILINE)
    
    return content

def fix_import_issues(content):
    """Fix import issues."""
    # Add missing Head import if needed
    if '<title>' in content and 'import Head' not in content and 'from "next/head"' not in content:
        content = re.sub(r'(import React from [\'"]react[\'"];)', r'\1\nimport Head from "next/head";', content)
    
    # Fix missing imports for lucide-react icons
    icons_needed = []
    if 'Mail' in content and 'import { Mail' not in content:
        icons_needed.append('Mail')
    if 'Send' in content and 'import { Send' not in content:
        icons_needed.append('Send')
    if 'CheckCircle' in content and 'import { CheckCircle' not in content:
        icons_needed.append('CheckCircle')
    if 'Users' in content and 'import { Users' not in content:
        icons_needed.append('Users')
    if 'Award' in content and 'import { Award' not in content:
        icons_needed.append('Award')
    if 'Target' in content and 'import { Target' not in content:
        icons_needed.append('Target')
    if 'Lightbulb' in content and 'import { Lightbulb' not in content:
        icons_needed.append('Lightbulb')
    
    if icons_needed:
        # Find existing lucide-react import
        lucide_match = re.search(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]", content)
        if lucide_match:
            existing_icons = [icon.strip() for icon in lucide_match.group(1).split(',')]
            all_icons = list(set(existing_icons + icons_needed))
            content = re.sub(
                r"import\s*{\s*[^}]+\s*}\s*from\s*['\"]lucide-react['\"]",
                f"import {{ {', '.join(all_icons)} }} from 'lucide-react'",
                content
            )
        else:
            # Add new import
            content = re.sub(
                r'(import React from [\'"]react[\'"];)',
                f'\\1\nimport {{ {", ".join(icons_needed)} }} from "lucide-react";',
                content
            )
    
    return content

def fix_jsx_structure(content):
    """Fix JSX structure issues."""
    # Wrap title and meta tags in Head component
    if '<title>' in content and '<Head>' not in content:
        content = re.sub(
            r'(\s+)(<title>.*?</title>)',
            r'\1<Head>\n\1  \2',
            content,
            flags=re.DOTALL
        )
        content = re.sub(
            r'(<meta[^>]*/>)',
            r'\1\n\1  </Head>',
            content,
            flags=re.DOTALL
        )
    
    # Fix broken JSX attributes
    content = re.sub(r'hover:\s+bg-', r'hover:bg-', content)
    content = re.sub(r'sm:\s+flex-row', r'sm:flex-row', content)
    
    return content

def fix_syntax_errors(content):
    """Fix general syntax errors."""
    # Remove extra commas at end of lines
    content = re.sub(r',\s*$', '', content, flags=re.MULTILINE)
    
    # Fix function declarations
    content = re.sub(r'}\s*;\s*$', '}', content, flags=re.MULTILINE)
    
    # Fix return statements
    content = re.sub(r'return\s*\(\s*<>\s*;\s*$', 'return (\n    <>', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix all syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_jsx_syntax(content)
        content = fix_import_issues(content)
        content = fix_jsx_structure(content)
        content = fix_syntax_errors(content)
        
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
    """Main function to process all files."""
    # Get all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()