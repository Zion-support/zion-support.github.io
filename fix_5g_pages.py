#!/usr/bin/env python3
"""
Script to fix 5G pages and similar issues
"""
import os
import re
import glob

def fix_5g_pages(file_path):
    """Fix 5G pages with invalid function names and structure"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if this is a 5G page with issues
        if '5g-' in file_path and ('export default function 5g' in content or 'export default function 5G' in content):
            # Extract the page name from the file path
            page_name = os.path.basename(os.path.dirname(file_path))
            function_name = ''.join(word.capitalize() for word in page_name.split('-'))
            
            # Create a clean 5G page template
            clean_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {function_name}Page() {{
  return (
    <>
      <Helmet>
        <title>{function_name.replace('5G', '5G ')} - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{function_name.replace('5G', '5G ')}</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced {function_name.replace('5G', '5G ')} solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}}'''
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(clean_content)
            
            print(f"Fixed 5G page: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_duplicate_content(file_path):
    """Fix files with duplicate content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for duplicate return statements or duplicate JSX
        if content.count('return (') > 1 or content.count('export default function') > 1:
            lines = content.split('\n')
            cleaned_lines = []
            in_function = False
            function_count = 0
            
            for line in lines:
                stripped = line.strip()
                
                # Start of function
                if stripped.startswith('export default function'):
                    function_count += 1
                    if function_count == 1:
                        in_function = True
                        cleaned_lines.append(line)
                    continue
                
                # End of function
                if in_function and stripped == '}':
                    in_function = False
                    cleaned_lines.append(line)
                    continue
                
                # Skip duplicate content
                if in_function and function_count > 1:
                    continue
                
                # Add line
                cleaned_lines.append(line)
            
            # Write cleaned content
            cleaned_content = '\n'.join(cleaned_lines)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            print(f"Fixed duplicate content in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix 5G pages and similar issues"""
    # Get all TypeScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f]
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    print(f"Found {total_count} files to check for 5G page issues...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            fixed = False
            
            # Try different fixes
            if fix_5g_pages(file_path):
                fixed = True
            if fix_duplicate_content(file_path):
                fixed = True
            
            if fixed:
                fixed_count += 1
    
    print(f"\nFixed 5G pages and similar issues in {fixed_count} files out of {total_count} files checked.")

if __name__ == "__main__":
    main()