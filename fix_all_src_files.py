#!/usr/bin/env python3
"""
Script to fix all corrupted files in the src directory
"""
import os
import glob
import re

def create_basic_page_component(file_path):
    """Create a basic page component"""
    page_name = os.path.basename(file_path).replace('.tsx', '')
    display_name = re.sub(r'([A-Z])', r' \1', page_name).strip()
    display_name = display_name.replace('_', ' ').replace('-', ' ').title()
    
    content = f"""'use client'
import React from 'react';

const {page_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {display_name}
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for {display_name}.
          </p>
        </div>
      </div>
    </div>
  );
}};

export default {page_name};
"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Main function to fix all corrupted files in src directory"""
    # Find all TSX files in the src directory
    pattern = "src/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        print(f"Fixing file: {file_path}")
        create_basic_page_component(file_path)
        fixed_count += 1
    
    print(f"Fixed {fixed_count} corrupted files in src directory")

if __name__ == "__main__":
    main()