#!/usr/bin/env python3

import os
import re
import glob

def fix_syntax_errors():
    """Fix common syntax errors in the merged files"""
    
    print("Starting syntax error fixes...")
    
    # Get all TypeScript/TSX files in the app directory
    files = glob.glob("app/**/*.tsx", recursive=True) + glob.glob("app/**/*.ts", recursive=True)
    
    for file_path in files:
        if not os.path.exists(file_path):
            continue
            
        print(f"Processing {file_path}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix HTML entities in JSX
            content = content.replace('&apos;', "'")
            content = content.replace('&quot;', '"')
            content = content.replace('&lt;', '<')
            content = content.replace('&gt;', '>')
            content = content.replace('&amp;', '&')
            
            # Fix unclosed JSX elements - look for patterns like <div></div> followed by more content
            # This is a more complex fix, so let's handle specific patterns
            
            # Fix missing closing tags in JSX
            # Look for patterns where we have opening tags but missing closing tags
            lines = content.split('\n')
            fixed_lines = []
            indent_level = 0
            
            for line in lines:
                stripped = line.strip()
                
                # Skip empty lines
                if not stripped:
                    fixed_lines.append(line)
                    continue
                
                # Check for opening tags
                if stripped.startswith('<') and not stripped.startswith('</') and not stripped.endswith('/>'):
                    # This is an opening tag
                    if '<div' in stripped or '<section' in stripped or '<span' in stripped or '<p' in stripped:
                        # Check if it's self-closing
                        if not stripped.endswith('/>') and not stripped.endswith('>'):
                            # Add missing closing bracket
                            if 'className=' in stripped and not stripped.endswith('>'):
                                stripped += '>'
                        fixed_lines.append(line)
                        indent_level += 1
                    else:
                        fixed_lines.append(line)
                elif stripped.startswith('</'):
                    # This is a closing tag
                    fixed_lines.append(line)
                    indent_level -= 1
                else:
                    # Regular content
                    fixed_lines.append(line)
            
            content = '\n'.join(fixed_lines)
            
            # Fix specific patterns that cause issues
            # Fix missing closing tags for divs
            content = re.sub(r'<div([^>]*)>\s*</div>\s*<div', r'<div\1><div', content)
            
            # Fix unclosed JSX elements by adding proper closing tags
            # This is a simplified approach - in practice, you'd want more sophisticated parsing
            
            # Fix specific syntax issues
            content = re.sub(r'<div([^>]*)>\s*</div>\s*<div', r'<div\1><div', content)
            
            # Fix missing closing brackets in className attributes
            content = re.sub(r'className="([^"]*)\s*$', r'className="\1"', content, flags=re.MULTILINE)
            
            # Fix missing closing brackets in general
            content = re.sub(r'<([^>]+)\s*$', r'<\1>', content, flags=re.MULTILINE)
            
            # Fix specific patterns that cause build errors
            # Fix unclosed div tags
            content = re.sub(r'<div([^>]*)>\s*</div>\s*<div', r'<div\1><div', content)
            
            # Fix missing closing tags for sections
            content = re.sub(r'<section([^>]*)>\s*</section>\s*<section', r'<section\1><section', content)
            
            # Fix missing closing tags for spans
            content = re.sub(r'<span([^>]*)>\s*</span>\s*<span', r'<span\1><span', content)
            
            # Fix missing closing tags for paragraphs
            content = re.sub(r'<p([^>]*)>\s*</p>\s*<p', r'<p\1><p', content)
            
            # Fix specific syntax errors in the files
            if 'ai-automation' in file_path:
                # Fix the specific syntax error in ai-automation page
                content = re.sub(r'</div>\s*,\s*->\s*</div>', r'</div>', content)
                content = re.sub(r'</div>\s*`\s*->\s*</div>', r'</div>', content)
            
            if 'ai-content-management' in file_path:
                # Fix HTML entities in meta tags
                content = re.sub(r'name=&quot;([^&]*)&quot;', r'name="\1"', content)
                content = re.sub(r'content=&quot;([^&]*)&quot;', r'content="\1"', content)
                content = re.sub(r'className=&quot;([^&]*)&quot;', r'className="\1"', content)
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed syntax errors in {file_path}")
            else:
                print(f"No changes needed in {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            continue
    
    print("Syntax error fixes completed!")

if __name__ == "__main__":
    fix_syntax_errors()