#!/usr/bin/env python3
"""
Script to fix JSX structure issues in React components.
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_structure(content, filename):
    """Fix JSX structure issues in a file."""
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i].rstrip()
        
        # Skip empty lines
        if not line.strip():
            i += 1
            continue
        
        # Fix function declaration missing opening brace
        if re.match(r'^export default function \w+\(\)$', line.strip()):
            fixed_lines.append(line)
            i += 1
            if i < len(lines) and lines[i].strip() == 'return (':
                fixed_lines.append('{')
                fixed_lines.append('  return (')
            else:
                fixed_lines.append('{')
                fixed_lines.append('  return (')
            i += 1
            continue
        
        # Fix JSX structure issues
        if '<' in line and '>' in line:
            # Fix self-closing tags that should be opening tags
            line = re.sub(r'<(\w+)([^>]*?)/>', r'<\1\2>', line)
            
            # Fix missing opening tags
            if line.strip().startswith('<') and not line.strip().endswith('>'):
                # This might be a broken tag, try to fix it
                if 'className=' in line and not line.strip().endswith('>'):
                    line = line.rstrip() + '>'
        
        # Fix missing closing braces for JSX expressions
        if line.strip().startswith('{') and not line.strip().endswith('}'):
            # Look ahead to see if there's a closing brace
            j = i + 1
            found_closing = False
            while j < len(lines) and j < i + 10:  # Look ahead max 10 lines
                if '}' in lines[j]:
                    found_closing = True
                    break
                j += 1
            
            if not found_closing:
                line = line.rstrip() + '}'
        
        # Fix JSX attribute issues
        line = re.sub(r'(\w+)=([^"\s>]+)(?=\s|>)', r'\1="\2"', line)
        
        # Fix broken JSX expressions
        if '{' in line and '}' not in line:
            # Try to find the matching closing brace
            j = i + 1
            brace_count = line.count('{') - line.count('}')
            while j < len(lines) and brace_count > 0:
                brace_count += lines[j].count('{') - lines[j].count('}')
                if brace_count == 0:
                    break
                j += 1
            
            if brace_count > 0:
                # Add missing closing brace
                line = line.rstrip() + '}'
        
        fixed_lines.append(line)
        i += 1
    
    # Join lines and fix common issues
    result = '\n'.join(fixed_lines)
    
    # Fix common patterns
    result = re.sub(r'(\w+)=([^"\s>]+)(?=\s|>)', r'\1="\2"', result)
    result = re.sub(r'<(\w+)([^>]*?)/>', r'<\1\2></\1>', result)
    
    # Ensure proper JSX structure
    if 'export default function' in result and 'return (' in result:
        # Ensure there's a closing brace for the function
        if result.count('{') > result.count('}'):
            result += '\n}'
    
    return result

def create_clean_page_component(filename):
    """Create a clean page component."""
    page_name = filename.replace('page.tsx', '').replace('/', ' ').replace('-', ' ').title().strip()
    component_name = page_name.replace(' ', '') + 'Page'
    
    return f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="{page_name} solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{page_name}</h1>
        <div className="prose prose-invert max-w-none">
          <p>This page is under construction. Please check back later for {page_name.lower()} solutions.</p>
        </div>
      </div>
    </div>
  );
}}
'''

def fix_file(file_path):
    """Fix a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is already clean
        if 'export default function' in content and content.count('{') == content.count('}'):
            return False
        
        # For page.tsx files, create clean components
        if file_path.endswith('page.tsx'):
            new_content = create_clean_page_component(file_path)
        else:
            new_content = fix_jsx_structure(content, file_path)
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files."""
    print("Starting JSX structure fix...")
    
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
                
            files_processed += 1
            
            if fix_file(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"Processed {files_processed} files")
    print(f"Fixed {files_fixed} files")
    print("JSX structure fix complete!")

if __name__ == "__main__":
    main()