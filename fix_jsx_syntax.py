#!/usr/bin/env python3
"""
Script to fix JSX syntax errors and malformed class names
"""
import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Fix spaces in class names
    content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
    
    # Fix malformed JSX structure - self-closing tags with spaces
    content = re.sub(r'<([^>]+)\s+/>', r'<\1 />', content)
    
    # Fix malformed JSX structure - missing closing tags
    content = re.sub(r'<([^>]+)\s*/>\s*([^<]+)', r'<\1>\2</\1>', content)
    
    # Fix specific patterns like "m in-h-screen" -> "min-h-screen"
    content = re.sub(r'\bm\s+in-', 'min-', content)
    content = re.sub(r'\bm\s+ax-', 'max-', content)
    content = re.sub(r'\bt\s+ext-', 'text-', content)
    content = re.sub(r'\bb\s+g-', 'bg-', content)
    content = re.sub(r'\bw\s+fit', 'w-fit', content)
    content = re.sub(r'\bm\s+l-', 'ml-', content)
    content = re.sub(r'\bm\s+b-', 'mb-', content)
    content = re.sub(r'\bpt\s+20', 'pt-20', content)
    content = re.sub(r'\bpy\s+16', 'py-16', content)
    content = re.sub(r'\btext\s+center', 'text-center', content)
    content = re.sub(r'\bwhitemb-', 'white mb-', content)
    content = re.sub(r'\bgray-300mb-', 'gray-300 mb-', content)
    content = re.sub(r'\bautow-fit', 'auto w-fit', content)
    content = re.sub(r'\bjustify-center\s+mx-autow-fit', 'justify-center mx-auto w-fit', content)
    
    # Fix React import
    content = re.sub(r'import react from', 'import React from', content)
    
    # Fix JSX structure issues
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Fix malformed JSX structure
        if re.search(r'<div[^>]*/>\s*$', line) and i + 1 < len(lines):
            next_line = lines[i + 1]
            if not next_line.strip().startswith('</div>') and not next_line.strip().startswith('<'):
                # This is a self-closing div that should contain content
                # Find the matching closing tag
                open_tag = line.strip()
                tag_name = re.search(r'<(\w+)', open_tag).group(1)
                
                # Look for the closing tag
                j = i + 1
                while j < len(lines):
                    if re.search(rf'</{tag_name}>', lines[j]):
                        # Found closing tag, fix the structure
                        fixed_lines.append(open_tag.replace('/>', '>'))
                        fixed_lines.extend(lines[i+1:j])
                        fixed_lines.append(f'</{tag_name}>')
                        i = j
                        break
                    j += 1
                else:
                    # No closing tag found, keep as is
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
        
        i += 1
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_jsx_syntax(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    # Find all TypeScript/React files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/*.tsx',
        '/workspace/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()