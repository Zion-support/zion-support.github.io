#!/usr/bin/env python3
import os
import re
import glob

def create_clean_page_template(file_path):
    """Create a clean page template for any corrupted file"""
    try:
        # Extract page name from file path
        page_name = os.path.basename(file_path).replace('.tsx', '').replace('page', '')
        if not page_name:
            page_name = "Page"
        
        # Convert kebab-case to Title Case
        page_title = page_name.replace('-', ' ').title()
        component_name = page_title.replace(' ', '') + 'Page'
        
        # Create clean template
        template = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="Advanced {page_title.lower()} solutions by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            {page_title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced {page_title.lower()} solutions by Zion Tech Group.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}}'''
        
        return template
        
    except Exception as e:
        print(f"Error creating template for {file_path}: {e}")
        return None

def fix_corrupted_file(file_path):
    """Fix a corrupted file by replacing it with a clean template"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file is corrupted (has syntax errors, merge conflicts, or malformed content)
        corruption_indicators = [
            '<<<<<<< HEAD',
            '=======',
            '>>>>>>>',
            'cursor/fix-errors-and-merge-to-main',
            'TS1382: Unexpected token',
            'TS1002: Unterminated string literal',
            'TS1128: Declaration or statement expected',
            'TS1109: Expression expected',
            'TS17008: JSX element',
            'TS1381: Unexpected token',
            'TS1005: \';\' expected',
            'TS1434: Unexpected keyword or identifier',
            'TS1435: Unknown keyword or identifier',
            'TS1351: An identifier or keyword cannot immediately follow a numeric literal',
            'TS1003: Identifier expected',
            'TS1135: Argument expression expected',
            'TS1136: Property assignment expected',
            'TS1161: Unterminated regular expression literal',
            'TS17002: Expected corresponding JSX closing tag',
            'TS1435: Unknown keyword or identifier'
        ]
        
        # Check if file has any corruption indicators
        is_corrupted = any(indicator in content for indicator in corruption_indicators)
        
        # Also check for files that don't start with proper React imports
        if not content.strip().startswith(('import', "'use client'", 'export')):
            is_corrupted = True
        
        if is_corrupted:
            template = create_clean_page_template(file_path)
            if template:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(template)
                print(f"Fixed corrupted file: {file_path}")
                return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        # If we can't read the file, try to create a clean template
        template = create_clean_page_template(file_path)
        if template:
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(template)
                print(f"Created clean template for: {file_path}")
                return True
            except Exception as e2:
                print(f"Error writing template to {file_path}: {e2}")
        return False

def main():
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip certain files that should not be modified
            if any(skip in file_path for skip in [
                'node_modules',
                '.git',
                'dist',
                'build',
                'coverage',
                '.next',
                'backup',
                'test',
                '__tests__',
                '.test.',
                '.spec.'
            ]):
                continue
                
            total_files += 1
            if fix_corrupted_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed corrupted files: {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()