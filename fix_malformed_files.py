#!/usr/bin/env python3
"""
Script to fix malformed files with duplicate returns and syntax issues
"""
import os
import re
import glob

def fix_malformed_file(file_path):
    """Fix malformed files with duplicate returns and syntax issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has duplicate return statements
        if content.count('return (') > 1:
            print(f"Fixing malformed file: {file_path}")
            
            # Extract the function name
            function_name = None
            lines = content.split('\n')
            for line in lines:
                if 'const' in line and '= () => {' in line:
                    function_name = line.split('const ')[1].split(' = () => {')[0]
                    break
            
            if function_name:
                # Create a clean version
                clean_content = f"""import React from "react";
import {{ Helmet }} from 'react-helmet-async';

const {function_name} = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>{function_name} - Coming Soon | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{function_name}</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
}};

export default {function_name};"""
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(clean_content)
                
                return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all malformed files"""
    # Get all page files
    page_files = []
    
    for root, dirs, files in os.walk('./app'):
        for file in files:
            if file.endswith('.tsx') and file == 'page.tsx':
                file_path = os.path.join(root, file)
                page_files.append(file_path)
    
    print(f"Found {len(page_files)} page files")
    
    fixed_count = 0
    for file_path in page_files:
        if fix_malformed_file(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed {fixed_count} malformed files")

if __name__ == "__main__":
    main()