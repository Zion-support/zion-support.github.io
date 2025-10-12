#!/usr/bin/env python3
"""
Script to fix JSX syntax errors systematically.
This script will:
1. Fix missing closing tags
2. Fix malformed JSX attributes
3. Fix missing imports
4. Fix JSX fragments
"""

import os
import re
import glob
from pathlib import Path

def find_jsx_files(directory):
    """Find all JSX/TSX files."""
    jsx_files = []
    
    # Directories to exclude
    exclude_dirs = {'node_modules', '.git', 'dist', 'build', '.next', 'out', '.turbo'}
    
    # Common file extensions to check
    extensions = ['*.tsx', '*.jsx']
    
    for ext in extensions:
        pattern = os.path.join(directory, '**', ext)
        for file_path in glob.glob(pattern, recursive=True):
            # Skip if in excluded directory
            if any(excluded in file_path for excluded in exclude_dirs):
                continue
                
            # Skip if it's a directory
            if os.path.isdir(file_path):
                continue
                
            jsx_files.append(file_path)
    
    return jsx_files

def fix_jsx_syntax(content):
    """Fix JSX syntax errors."""
    
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix missing spaces in className
    content = re.sub(r'from-slate-900via-purple-900to-slate-900', 'from-slate-900 via-purple-900 to-slate-900', content)
    content = re.sub(r'pt-20', 'pt-20', content)
    
    # Fix malformed JSX attributes
    content = re.sub(r'(\w+)\s*=\s*"([^"]*?)"\s*>\s*$', r'\1="\2">', content, flags=re.MULTILINE)
    
    # Fix malformed closing tags
    content = re.sub(r'(\w+)\s*>\s*$', r'\1>', content, flags=re.MULTILINE)
    
    # Fix missing spaces in attributes
    content = re.sub(r'(\w+)([a-zA-Z])([a-zA-Z])', r'\1\2 \3', content)
    
    # Fix malformed meta tags
    content = re.sub(r'<meta name="([^"]*?)" content="([^"]*?)" / / />', r'<meta name="\1" content="\2" />', content)
    
    # Fix malformed title tags
    content = re.sub(r'<title>([^<]*?)</title>', r'<title>\1</title>', content)
    
    # Fix malformed h1 tags
    content = re.sub(r'<h1([^>]*?)\s*>\s*([^<]*?)\s*</h1>', r'<h1\1>\2</h1>', content)
    
    # Fix malformed p tags
    content = re.sub(r'<p([^>]*?)\s*>\s*([^<]*?)\s*</p>', r'<p\1>\2</p>', content)
    
    # Fix malformed Link tags
    content = re.sub(r'<Link([^>]*?)\s*>\s*([^<]*?)\s*</Link>', r'<Link\1>\2</Link>', content)
    
    return content

def fix_missing_closing_tags(content):
    """Fix missing closing tags."""
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is an opening div tag
        if '<div' in line and not line.strip().endswith('/>') and not line.strip().endswith('>'):
            # Look for the closing tag
            j = i + 1
            found_closing = False
            div_count = 1
            
            while j < len(lines):
                if '<div' in lines[j] and not lines[j].strip().endswith('/>'):
                    div_count += 1
                elif '</div>' in lines[j]:
                    div_count -= 1
                    if div_count == 0:
                        found_closing = True
                        break
                j += 1
            
            if not found_closing:
                # Add closing tag before the last closing brace
                for k in range(len(lines) - 1, i, -1):
                    if lines[k].strip() == '}' and 'export default' not in lines[k]:
                        lines.insert(k, '    </div>')
                        break
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines)

def fix_missing_imports(content):
    """Fix missing imports."""
    # Add missing Helmet import if needed
    if 'Helmet' in content and 'import.*Helmet' not in content:
        content = re.sub(r'(import React[^;]*;)', r'\1\nimport { Helmet } from \'react-helmet-async\';', content)
    
    # Add missing Link import if needed
    if 'Link' in content and 'import.*Link' not in content:
        content = re.sub(r'(import React[^;]*;)', r'\1\nimport { Link } from \'react-router-dom\';', content)
    
    # Add missing ArrowRight import if needed
    if 'ArrowRight' in content and 'import.*ArrowRight' not in content:
        content = re.sub(r'(import React[^;]*;)', r'\1\nimport { ArrowRight } from \'lucide-react\';', content)
    
    return content

def fix_jsx_fragments(content):
    """Fix JSX fragments."""
    # Fix malformed fragments
    content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
    
    # Add missing closing fragments
    if '<>' in content and '</>' not in content:
        # Add closing fragment before the last closing brace
        content = re.sub(r'(\s+)(\})\s*$', r'\1  </>\n\1\2', content, flags=re.MULTILINE)
    
    return content

def clean_up_file(file_path):
    """Clean up a specific file by fixing JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Fixing JSX syntax in: {file_path}")
        
        # Apply fixes
        content = fix_jsx_syntax(content)
        content = fix_missing_closing_tags(content)
        content = fix_missing_imports(content)
        content = fix_jsx_fragments(content)
        
        # Clean up excessive whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Ensure proper file ending
        content = content.strip() + '\n'
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX syntax errors."""
    workspace_dir = '/workspace'
    
    print("Searching for JSX files...")
    jsx_files = find_jsx_files(workspace_dir)
    
    if not jsx_files:
        print("No JSX files found.")
        return
    
    print(f"Found {len(jsx_files)} JSX files")
    
    print("\nFixing JSX syntax errors...")
    fixed_count = 0
    
    for file_path in jsx_files:
        if clean_up_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed JSX syntax in {fixed_count} files.")

if __name__ == "__main__":
    main()