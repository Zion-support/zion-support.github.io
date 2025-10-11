#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining merge conflicts and syntax errors.
"""

import os
import re
import glob

def fix_merge_conflicts_comprehensive(file_path):
    """Fix merge conflicts and syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Fix common syntax issues
        # Fix unclosed JSX tags by adding closing tags
        content = fix_unclosed_jsx_tags(content)
        
        # Fix malformed JSX expressions
        content = fix_jsx_expressions(content)
        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = content.strip() + '\n'
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed issues in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_unclosed_jsx_tags(content):
    """Fix unclosed JSX tags by adding appropriate closing tags."""
    # Common patterns for unclosed tags
    patterns = [
        (r'<Helmet[^>]*>', '</Helmet>'),
        (r'<main[^>]*>', '</main>'),
        (r'<section[^>]*>', '</section>'),
        (r'<div[^>]*>', '</div>'),
        (r'<h1[^>]*>', '</h1>'),
        (r'<h2[^>]*>', '</h2>'),
        (r'<h3[^>]*>', '</h3>'),
        (r'<p[^>]*>', '</p>'),
        (r'<ul[^>]*>', '</ul>'),
        (r'<li[^>]*>', '</li>'),
        (r'<button[^>]*>', '</button>'),
        (r'<React\.Fragment[^>]*>', '</React.Fragment>'),
        (r'<>', '</>'),
    ]
    
    for pattern, closing_tag in patterns:
        # Count opening and closing tags
        opening_matches = re.findall(pattern, content)
        closing_matches = re.findall(re.escape(closing_tag), content)
        
        if len(opening_matches) > len(closing_matches):
            # Add missing closing tags at the end
            missing_count = len(opening_matches) - len(closing_matches)
            content += '\n' + closing_tag * missing_count
    
    return content

def fix_jsx_expressions(content):
    """Fix malformed JSX expressions."""
    # Fix common JSX syntax issues
    content = re.sub(r'\{>\}', '>', content)  # Fix malformed > characters
    content = re.sub(r'\{<\}', '<', content)  # Fix malformed < characters
    content = re.sub(r'\{/\}', '/', content)  # Fix malformed / characters
    content = re.sub(r'\{}\}', '}', content)  # Fix malformed } characters
    content = re.sub(r'\{{\}', '{', content)  # Fix malformed { characters
    
    # Fix unclosed JSX expressions
    content = re.sub(r'\{[^}]*$', '', content, flags=re.MULTILINE)
    
    return content

def main():
    """Main function to process all files."""
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts_comprehensive(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()