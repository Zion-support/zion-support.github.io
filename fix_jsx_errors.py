#!/usr/bin/env python3
"""
Script to fix JSX syntax errors in the codebase.
This script specifically handles JSX parsing errors.
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_errors_in_file(file_path):
    """Fix JSX errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common JSX issues
        
        # 1. Fix JSX expressions that need one parent element
        # Look for patterns like: <div>...</div> <div>...</div> and wrap in fragment
        content = re.sub(r'(<div[^>]*>.*?</div>)\s*(<div[^>]*>.*?</div>)', r'<>\1\2</>', content, flags=re.DOTALL)
        
        # 2. Fix malformed JSX fragments
        content = re.sub(r'<>\s*<', '<>', content)
        content = re.sub(r'>\s*</>', '></>', content)
        
        # 3. Fix missing closing tags
        # Count opening and closing divs
        div_open = content.count('<div')
        div_close = content.count('</div>')
        if div_open > div_close:
            # Add missing closing divs at the end
            missing_divs = div_open - div_close
            content += '\n' + '  ' * (missing_divs - 1) + '</div>' * missing_divs
        
        # 4. Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)"\s*([^>]*?)>', r'className="\1" \2>', content)
        
        # 5. Fix missing closing brackets in JSX
        content = re.sub(r'<([^>]+)\s*$', r'<\1>', content, flags=re.MULTILINE)
        
        # 6. Fix malformed JSX expressions
        content = re.sub(r'{\s*([^}]+)\s*}\s*$', r'{\1}', content, flags=re.MULTILINE)
        
        # 7. Fix missing closing tags for React components
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # 8. Fix malformed JSX closing tags
        content = re.sub(r'</\s*(\w+)\s*>', r'</\1>', content)
        
        # 9. Fix missing closing tags for fragments
        content = re.sub(r'<>\s*$', '<></>', content, flags=re.MULTILINE)
        
        # 10. Fix JSX expressions that need proper wrapping
        # Look for patterns like: <div>...</div> <Component /> and wrap in fragment
        content = re.sub(r'(<div[^>]*>.*?</div>)\s*(<[A-Z]\w+[^>]*/>)', r'<>\1\2</>', content, flags=re.DOTALL)
        
        # 11. Fix malformed arrow functions in JSX
        content = re.sub(r'\(\s*\)\s*=>\s*{', '() => {', content)
        
        # 12. Fix missing return statements in components
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]+)}', 
                        r'const \1: React.FC = () => {\n  return (\2\n  );\n}', content)
        
        # 13. Fix malformed JSX expressions in attributes
        content = re.sub(r'className="([^"]*)"\s*([^>]*?)>', r'className="\1" \2>', content)
        
        # 14. Fix missing export statements
        if 'export default' not in content and 'const ' in content:
            # Find the main component
            match = re.search(r'const\s+(\w+)\s*:\s*React\.FC', content)
            if match:
                component_name = match.group(1)
                content += f'\n\nexport default {component_name};'
        
        # 15. Fix malformed JSX expressions with proper wrapping
        # Look for patterns where multiple JSX elements are not wrapped
        content = re.sub(r'(<[A-Z]\w+[^>]*>.*?</[A-Z]\w+>)\s*(<[A-Z]\w+[^>]*>.*?</[A-Z]\w+>)', 
                        r'<>\1\2</>', content, flags=re.DOTALL)
        
        # 16. Fix missing closing tags for common elements
        for tag in ['div', 'span', 'p', 'section', 'article', 'header', 'footer', 'main', 'aside']:
            open_count = content.count(f'<{tag}')
            close_count = content.count(f'</{tag}>')
            if open_count > close_count:
                missing = open_count - close_count
                content += '\n' + '  ' * (missing - 1) + f'</{tag}>' * missing
        
        # 17. Fix malformed JSX expressions with proper syntax
        content = re.sub(r'{\s*([^}]+)\s*}\s*$', r'{\1}', content, flags=re.MULTILINE)
        
        # 18. Fix missing closing tags for React components
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # 19. Fix malformed JSX closing tags
        content = re.sub(r'</\s*(\w+)\s*>', r'</\1>', content)
        
        # 20. Fix missing closing tags for fragments
        content = re.sub(r'<>\s*$', '<></>', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_files_with_jsx_errors():
    """Find all TypeScript/JavaScript files that might have JSX errors"""
    files = []
    
    # Search for TypeScript, JavaScript, and JSX files
    patterns = ['**/*.tsx', '**/*.jsx']
    
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other excluded directories
    filtered_files = []
    for file_path in files:
        if not any(excluded in file_path for excluded in ['node_modules', '.git', 'dist', '.next', 'out']):
            filtered_files.append(file_path)
    
    return filtered_files

def main():
    """Main function to fix JSX errors"""
    print("Starting JSX error fixes...")
    
    # Find all relevant files
    files = find_files_with_jsx_errors()
    print(f"Processing {len(files)} files...")
    
    # Fix each file
    fixed_count = 0
    for file_path in files:
        if fix_jsx_errors_in_file(file_path):
            fixed_count += 1
            print(f"Fixed JSX errors in: {file_path}")
    
    print(f"Fixed JSX errors in {fixed_count} files")

if __name__ == "__main__":
    main()