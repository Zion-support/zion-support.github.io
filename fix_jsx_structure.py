#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_structure(file_path):
    """Fix JSX structure issues in React/TypeScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing closing tags by adding them at the end
        if 'export default' in content and content.count('<div') > content.count('</div>'):
            # Count opening and closing divs
            open_divs = content.count('<div')
            close_divs = content.count('</div>')
            missing_divs = open_divs - close_divs
            
            # Add missing closing divs before the closing of the component
            if missing_divs > 0:
                # Find the last return statement and add missing closing tags
                last_return = content.rfind('return (')
                if last_return != -1:
                    # Find the end of the JSX
                    jsx_end = content.rfind(')')
                    if jsx_end != -1:
                        # Add missing closing divs
                        missing_tags = '</div>' * missing_divs
                        content = content[:jsx_end] + missing_tags + content[jsx_end:]
        
        # Fix missing closing tags for other elements
        if 'export default' in content:
            # Fix missing closing section tags
            if content.count('<section') > content.count('</section>'):
                open_sections = content.count('<section')
                close_sections = content.count('</section>')
                missing_sections = open_sections - close_sections
                
                if missing_sections > 0:
                    jsx_end = content.rfind(')')
                    if jsx_end != -1:
                        missing_tags = '</section>' * missing_sections
                        content = content[:jsx_end] + missing_tags + content[jsx_end:]
        
        # Clean up any remaining issues
        content = re.sub(r'\n\n\n+', '\n\n', content)
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX structure in: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_jsx_structure(file_path):
                fixed_count += 1
    
    print(f"Fixed JSX structure in {fixed_count} files")

if __name__ == "__main__":
    main()