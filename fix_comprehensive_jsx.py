#!/usr/bin/env python3
"""
Comprehensive JSX fix script
"""

import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix comprehensive JSX syntax issues"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Fix malformed className attributes
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', line)
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', line)
        
        # Fix missing spaces in className
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', line)
        
        # Fix specific patterns
        line = re.sub(r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-', line)
        line = re.sub(r'mx-autopx-', 'mx-auto px-', line)
        line = re.sub(r'font-boldtext-', 'font-bold text-', line)
        line = re.sub(r'text-lgtext-', 'text-lg text-', line)
        line = re.sub(r'text-gray-300mb-', 'text-gray-300 mb-', line)
        
        # Fix malformed JSX elements
        if '<div className=' in line and not line.strip().endswith('>') and not line.strip().endswith('/>'):
            # Check if next line has content
            if i + 1 < len(lines) and lines[i + 1].strip():
                # This is an opening tag, add closing
                line = line.rstrip() + '></div>'
        
        # Fix Helmet tags
        if '<Helmet>' in line and not '</Helmet>' in line:
            # Find the Helmet content and close it properly
            helmet_lines = [line]
            i += 1
            while i < len(lines) and not lines[i].strip().startswith('</Helmet>'):
                helmet_lines.append(lines[i])
                i += 1
            
            if i < len(lines):
                helmet_lines.append(lines[i])
                i += 1
            
            # Reconstruct Helmet properly
            result.append('<Helmet>')
            for hl in helmet_lines[1:-1]:
                if hl.strip() and not hl.strip().startswith('<title>') and not hl.strip().startswith('<meta'):
                    result.append(hl)
            result.append('</Helmet>')
            continue
        
        result.append(line)
        i += 1
    
    return '\n'.join(result)

def fix_missing_closing_tags(content):
    """Fix missing closing tags"""
    # Count opening and closing tags
    open_tags = re.findall(r'<(\w+)(?:\s[^>]*)?>', content)
    close_tags = re.findall(r'</(\w+)>', content)
    
    # Simple fix for common missing closing tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    content = re.sub(r'<section([^>]*)>\s*$', r'<section\1></section>', content, flags=re.MULTILINE)
    content = re.sub(r'<main([^>]*)>\s*$', r'<main\1></main>', content, flags=re.MULTILINE)
    
    return content

def fix_jsx_fragments(content):
    """Fix JSX fragments"""
    # Ensure fragments are properly closed
    if '<>' in content and '</>' not in content:
        content = content.rstrip() + '\n  </>'
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_jsx_syntax(content)
        content = fix_missing_closing_tags(content)
        content = fix_jsx_fragments(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed comprehensive JSX: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/components/**/*.tsx',
        '/workspace/components/**/*.ts'
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