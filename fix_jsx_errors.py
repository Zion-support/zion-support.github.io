#!/usr/bin/env python3
"""
Script to fix JSX structure errors in React components
"""
import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix JSX structure errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing closing div tags
        # Count opening and closing div tags
        opening_divs = content.count('<div')
        closing_divs = content.count('</div>')
        
        if opening_divs > closing_divs:
            # Add missing closing div tags
            missing_divs = opening_divs - closing_divs
            # Find the last return statement and add closing divs before the final closing brace
            if 'return (' in content:
                # Add missing closing divs before the final closing brace
                content = re.sub(r'(\s*)(\s*\);\s*}\s*)$', r'\1' + '  </div>\n' * missing_divs + r'\2', content, flags=re.MULTILINE)
        
        # Fix JSX expressions that need a parent element
        # Look for patterns like: <div>...</div><Helmet>...</Helmet>
        content = re.sub(r'<div([^>]*?)>\s*</div>\s*<Helmet>', r'<div\1>\n      <Helmet>', content)
        
        # Fix missing closing tags for sections
        content = re.sub(r'<section([^>]*?)>\s*$', r'<section\1>\n        </section>', content, flags=re.MULTILINE)
        
        # Fix invalid characters in imports
        content = re.sub(r"from\s*\\'([^']*?)\\'", r"from '\1'", content)
        
        # Fix missing closing braces
        # Look for function definitions that are missing closing braces
        if 'export default function' in content and not content.strip().endswith('}'):
            # Add missing closing brace
            content = content.rstrip() + '\n}'
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX errors in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX errors"""
    # Get files with errors from lint output
    result = os.popen("pnpm run lint 2>&1 | grep -B2 'error' | grep -E '^/workspace' | head -20").read().strip()
    files_with_errors = result.split('\n') if result else []
    
    files_processed = 0
    errors_fixed = 0
    
    for file_path in files_with_errors:
        if file_path and os.path.exists(file_path):
            files_processed += 1
            if fix_jsx_errors(file_path):
                errors_fixed += 1
    
    print(f"\nProcessed {files_processed} files with errors")
    print(f"Fixed JSX errors in {errors_fixed} files")

if __name__ == "__main__":
    main()