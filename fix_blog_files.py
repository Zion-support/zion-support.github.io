#!/usr/bin/env python3

import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix malformed JSX patterns in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the main malformed JSX patterns
        # Remove malformed comments that break JSX
        content = re.sub(r'{\s*/\*\s*content\s*\*/\s*}', '', content)
        
        # Fix malformed function definitions
        content = re.sub(r'\(\)\s*=>\s*{/\*\s*content\s*\*/}', '() => {', content)
        
        # Fix malformed return statements
        content = re.sub(r'return\s*\(/\*\s*content\s*\*/', 'return (', content)
        
        # Fix malformed interface definitions
        content = re.sub(r'interface\s+\w+\s*{/\*\s*content\s*\*/', 'interface \\1 {', content)
        
        # Fix malformed class definitions
        content = re.sub(r'class\s+\w+\s*{/\*\s*content\s*\*/', 'class \\1 {', content)
        
        # Fix malformed object literals
        content = re.sub(r'const\s+\w+\s*=\s*{/\*\s*content\s*\*/', 'const \\1 = {', content)
        
        # Fix malformed JSX elements - remove empty self-closing divs that should be opening tags
        content = re.sub(r'<div></div>', '<div>', content)
        content = re.sub(r'<span></span>', '<span>', content)
        content = re.sub(r'<p></p>', '<p>', content)
        
        # Fix duplicate closing tags
        content = re.sub(r'</div></div>', '</div>', content)
        content = re.sub(r'</span></span>', '</span>', content)
        content = re.sub(r'</p></p>', '</p>', content)
        
        # Fix malformed JSX structure where there are orphaned closing tags
        # Look for patterns like "return (<div></div>" and fix them
        content = re.sub(r'return\s*\(\s*<div></div>', 'return (\n    <div>', content)
        
        # Fix malformed JSX where there are missing opening tags
        # Pattern: <div></div> followed by content should be <div>content</div>
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        while i < len(lines):
            line = lines[i]
            # Check for malformed JSX pattern
            if re.match(r'^\s*<div></div>$', line) and i + 1 < len(lines):
                # Look ahead to see if there's content that should be inside
                next_line = lines[i + 1]
                if next_line.strip() and not next_line.strip().startswith('<'):
                    # This content should be inside the div
                    fixed_lines.append(re.sub(r'<div></div>', '<div>', line))
                    i += 1
                    # Add the content
                    fixed_lines.append(next_line)
                    i += 1
                    # Look for the closing tag
                    if i < len(lines) and '</div>' in lines[i]:
                        fixed_lines.append(lines[i])
                        i += 1
                    else:
                        # Add missing closing tag
                        fixed_lines.append('</div>')
                else:
                    fixed_lines.append(line)
                    i += 1
            else:
                fixed_lines.append(line)
                i += 1
        
        content = '\n'.join(fixed_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all blog files with malformed JSX"""
    blog_dir = "/workspace/app/blog"
    
    # Find all .tsx files in the blog directory
    pattern = os.path.join(blog_dir, "**", "*.tsx")
    files = glob.glob(pattern, recursive=True)
    
    print(f"Found {len(files)} blog files to fix")
    
    fixed_count = 0
    for file_path in files:
        if fix_jsx_file(file_path):
            fixed_count += 1
    
    print(f"Successfully fixed {fixed_count} out of {len(files)} files")

if __name__ == "__main__":
    main()