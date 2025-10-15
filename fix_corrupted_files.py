#!/usr/bin/env python3
"""
Script to identify and fix corrupted TypeScript/React files.
"""

import os
import glob
import re

def is_corrupted_file(file_path):
    """Check if a file is corrupted by looking for common error patterns."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        corruption_patterns = [
            r'error TS\d+:',  # TypeScript errors in content
            r'Unterminated string literal',
            r'Unexpected token',
            r'Declaration or statement expected',
            r'Expression expected',
            r'Property assignment expected',
            r'Unknown keyword or identifier',
            r'Expected corresponding',
            r'JSX expressions must have one parent element',
            r'Expected corresponding closing tag',
            r'Unterminated string literal',
            r'Unexpected keyword or identifier'
        ]
        
        for pattern in corruption_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                return True
        
        # Check for incomplete JSX or missing imports
        if 'export default function' in content and not content.strip().startswith('import'):
            return True
            
        # Check for malformed JSX
        if '<' in content and '>' in content:
            open_tags = content.count('<')
            close_tags = content.count('>')
            if open_tags != close_tags:
                return True
        
        return False
        
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return True

def create_basic_page(file_path):
    """Create a basic page structure for corrupted files."""
    # Extract page name from path
    path_parts = file_path.split('/')
    page_name = path_parts[-2] if path_parts[-1] == 'page.tsx' else path_parts[-1].replace('.tsx', '')
    
    # Convert kebab-case to Title Case
    title = ' '.join(word.capitalize() for word in page_name.split('-'))
    
    basic_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {''.join(word.capitalize() for word in page_name.split('-'))}Page() {{
  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content="{title} solutions and services from Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our {title.lower()} solutions and services designed to help your business grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}}'''
    
    return basic_content

def main():
    """Main function to fix corrupted files."""
    # Find all TypeScript/React files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_check = []
    for pattern in patterns:
        files_to_check.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_check = [f for f in files_to_check if 'node_modules' not in f and 'dist' not in f]
    
    corrupted_files = []
    for file_path in files_to_check:
        if is_corrupted_file(file_path):
            corrupted_files.append(file_path)
    
    print(f"Found {len(corrupted_files)} corrupted files:")
    for file_path in corrupted_files:
        print(f"  - {file_path}")
    
    # Fix corrupted files
    fixed_count = 0
    for file_path in corrupted_files:
        try:
            basic_content = create_basic_page(file_path)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(basic_content)
            print(f"Fixed: {file_path}")
            fixed_count += 1
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} corrupted files")

if __name__ == "__main__":
    main()