#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to fix common syntax errors in TSX files after merge conflict resolution.
This script will:
1. Fix JSX fragment issues
2. Fix missing closing tags
3. Fix malformed JSX expressions
4. Fix identifier issues
=======
Script to fix common syntax errors after merge conflict cleanup.
>>>>>>> origin/main
"""

import os
import re
import glob

<<<<<<< HEAD
def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a single file"""
=======
def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file."""
>>>>>>> origin/main
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Fix JSX fragment issues - ensure proper opening and closing
        content = re.sub(r'<>([^<]*)</>', r'<div>\1</div>', content, flags=re.DOTALL)
        
        # Fix malformed JSX expressions - wrap multiple elements in fragments
        # Look for patterns like: <div>...</div><div>...</div> without parent
        content = re.sub(r'(<div[^>]*>.*?</div>)\s*(<div[^>]*>.*?</div>)', r'<>\1\2</>', content, flags=re.DOTALL)
        
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
=======
        # Fix const className = {className} -> className={className}
        content = re.sub(r'const className\s*=\s*\{className\}', 'className={className}', content)
        
        # Fix const className = `...` -> className={`...`}
        content = re.sub(r'const className\s*=\s*`([^`]+)`', r'className={`\1`}', content)
        
        # Fix onClick="{onClick}" -> onClick={onClick}
        content = re.sub(r'onClick="\{([^}]+)\}"', r'onClick={\1}', content)
        
        # Fix whileHover="{{" -> whileHover={{
        content = re.sub(r'whileHover="\{\{\s*"', 'whileHover={{', content)
        content = re.sub(r'whileTap="\{\{\s*"', 'whileTap={{', content)
        content = re.sub(r'initial="\{\{\s*"', 'initial={{', content)
        content = re.sub(r'animate="\{\{\s*"', 'animate={{', content)
        content = re.sub(r'transition="\{\{\s*"', 'transition={{', content)
        
        # Fix }} -> }}
        content = re.sub(r'\s*\}\}\s*"', '}}', content)
        
        # Fix standalone <></> fragments
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix missing closing tags
        content = re.sub(r'<motion\.div\s+([^>]+)\s*/>', r'<motion.div \1>', content)
        
        # Fix broken JSX attributes
        content = re.sub(r'(\w+)\s*=\s*`([^`]+)`', r'\1={`\2`}', content)
        
        # Fix broken className patterns
        content = re.sub(r'className="w-4h-4"', 'className="w-4 h-4"', content)
        
        # Fix broken rounded classes
        content = re.sub(r'rounded-2\s*xl', 'rounded-2xl', content)
        content = re.sub(r'rounded-2\s*x', 'rounded-2xl', content)
        
        # Fix broken shadow classes
        content = re.sub(r'shadow-2\s*xl', 'shadow-2xl', content)
        content = re.sub(r'shadow-2\s*x', 'shadow-2xl', content)
        
        # Fix broken transition classes
        content = re.sub(r'transition-opacityduration-500', 'transition-opacity duration-500', content)
        content = re.sub(r'transition-opacityduration-500blur-sm', 'transition-opacity duration-500 blur-sm', content)
        
        # Fix broken gradient classes
        content = re.sub(r'from-cyan-500/5\s*via-purple-500/5\s*to-cyan-500/5', 'from-cyan-500/5 via-purple-500/5 to-cyan-500/5', content)
        content = re.sub(r'from-cyan-500/20\s*via-purple-500/20\s*to-cyan-500/20', 'from-cyan-500/20 via-purple-500/20 to-cyan-500/20', content)
        
        # Fix broken border classes
        content = re.sub(r'hover:\s*border-indigo-400/50', 'hover:border-indigo-400/50', content)
        
        # Fix broken return statements
        content = re.sub(r'return\s*\'([^\']+)\';\s*,', r'return \'\1\';', content)
        
        # Fix broken function syntax
        content = re.sub(r'}\s*,\s*default:', '}\n  default:', content)
        
        # Fix broken JSX closing tags
        content = re.sub(r'</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix broken JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
>>>>>>> origin/main
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
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
=======
    """Main function to fix syntax errors in all files."""
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            try:
                if fix_syntax_errors(file_path):
                    files_fixed += 1
                    print(f"✓ Fixed: {file_path}")
                files_processed += 1
                        
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files fixed: {files_fixed}")
>>>>>>> origin/main

if __name__ == "__main__":
    main()