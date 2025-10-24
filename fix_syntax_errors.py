#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to fix common syntax errors in TypeScript/JSX files
=======
Script to fix common syntax errors in TSX files after merge conflict resolution.
This script will:
1. Fix JSX fragment issues
2. Fix missing closing tags
3. Fix malformed JSX expressions
4. Fix identifier issues
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
"""

import os
import re
import glob
from pathlib import Path

<<<<<<< HEAD
def fix_syntax_errors(file_path):
    """Fix common syntax errors in a single file"""
=======
def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a single file"""
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Fix 1: Remove trailing comma after function declaration
        content = re.sub(r'const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,', 'const \\1: React.FC = () => {', content)
        
        # Fix 2: Fix malformed JSX with missing opening tags
        # Pattern: </div><div className="...">, -> </div><div className="...">
        content = re.sub(r'</div><div className="[^"]*">,', '</div><div className="\\1">', content)
        
        # Fix 3: Fix malformed h1 tags
        # Pattern: <h1Ai -> <h1>Ai
        content = re.sub(r'<h1([A-Z][a-zA-Z\s]*)', r'<h1>\1', content)
        
        # Fix 4: Fix missing closing tags in h1
        content = re.sub(r'<h1>([^<]+)\n\s*</h1>', r'<h1>\1</h1>', content)
        
        # Fix 5: Fix malformed JSX attributes
        # Pattern: className="..." -> className="..."
        content = re.sub(r'className="([^"]*)"\s*,', r'className="\1"', content)
        
        # Fix 6: Fix missing opening tags for div elements
        content = re.sub(r'</div><div className="([^"]*)"\s*>,', r'</div><div className="\1">', content)
        
        # Fix 7: Fix malformed return statements
        content = re.sub(r'return\s*\(\s*<>\s*<Head>', 'return (\n    <>\n      <Head>', content)
        
        # Fix 8: Fix missing semicolons
        content = re.sub(r'const\s+\w+\s*=\s*new\s+Date\(\)\.getFullYear\(\)\n', 'const \\1 = new Date().getFullYear();\n', content)
        
        # Fix 9: Fix malformed JSX structure
        content = re.sub(r'<div className="min-h-screen[^"]*">\s*</div><div className="[^"]*">,', 
                        lambda m: m.group(0).replace(',', ''), content)
        
        # Fix 10: Fix missing closing tags
        content = re.sub(r'<h1([^>]*)>\s*([^<]+)\n\s*</h1>', r'<h1\1>\2</h1>', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
=======
        # Fix JSX fragment issues - ensure proper opening and closing
        content = re.sub(r'<>([^<]*)</>', r'<div>\1</div>', content, flags=re.DOTALL)
        
        # Fix malformed JSX expressions - wrap multiple elements in fragments
        # Look for patterns like: <div>...</div><div>...</div> without parent
        content = re.sub(r'(<div[^>]*>.*?</div>)\s*(<div[^>]*>.*?</div>)', r'<>\1\2</>', content, flags=re.DOTALL)
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
        
        # Fix missing closing tags for common elements
        # Fix Head tags
        content = re.sub(r'<Head>([^<]*)', r'<Head>\1</Head>', content, flags=re.DOTALL)
        
        # Fix div tags that are not properly closed
        content = re.sub(r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>', content, flags=re.DOTALL)
        
        # Fix p tags that are not properly closed
        content = re.sub(r'<p([^>]*)>([^<]*)', r'<p\1>\2</p>', content, flags=re.DOTALL)
        
        # Fix identifier issues - remove malformed characters
        content = re.sub(r'[^\w\s<>/="\'-]', '', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'(\w+)\s*=\s*([^"\s>]+)(?![^<]*>)', r'\1="\2"', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Fix malformed function declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{([^}]*)}', r'const \1 = () => {\2}', content, flags=re.DOTALL)
        
        # Fix malformed JSX return statements
        content = re.sub(r'return\s*\(\s*([^)]*)\s*\)\s*;', r'return (\1);', content, flags=re.DOTALL)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Ensure proper export default structure
        if 'export default' in content and not content.strip().endswith('}'):
            content = content.rstrip() + '\n}'
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return content != original_content
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to fix syntax errors in all files"""
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
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")
=======
    """Main function to fix all syntax errors"""
    app_dir = Path('/workspace/app')
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_syntax_errors_in_file(file_path):
            fixed_count += 1
            print(f"Fixed syntax errors in: {file_path}")
    
    print(f"Fixed syntax errors in {fixed_count} files")
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a

if __name__ == "__main__":
    main()