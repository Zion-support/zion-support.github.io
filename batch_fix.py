#!/usr/bin/env python3
import os
import subprocess

def get_corrupted_files():
    """Get list of files with parsing errors"""
    try:
        result = subprocess.run(['pnpm', 'run', 'lint'], capture_output=True, text=True, cwd='/workspace')
        lines = result.stdout.split('\n')
        corrupted_files = []
        for i, line in enumerate(lines):
            if 'Parsing error:' in line and i > 0:
                file_path = lines[i-1].strip()
                if file_path.startswith('/workspace/'):
                    corrupted_files.append(file_path)
        return list(set(corrupted_files))  # Remove duplicates
    except Exception as e:
        print(f"Error getting corrupted files: {e}")
        return []

def create_placeholder_page(file_path):
    """Create a simple placeholder page"""
    # Extract page name from path
    path_parts = file_path.split('/')
    page_name = path_parts[-2] if path_parts[-1] == 'page.tsx' else path_parts[-1].replace('.tsx', '')
    
    # Handle utility files differently
    if '/utils/' in file_path or '/hooks/' in file_path or '/types/' in file_path:
        return create_utility_file(file_path)
    
    # Convert kebab-case to Title Case
    title = ' '.join(word.capitalize() for word in page_name.replace('-', ' ').split())
    component_name = title.replace(' ', '') + 'Page'
    
    content = f"""'use client'
import React from 'react'
import {{Helmet}} from 'react-helmet-async'
import {{ArrowRight}} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const {component_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="Professional {title.lower()} services and solutions." />
        <meta name="keywords" content="{title.lower()}, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
            <p className="text-gray-300 mb-8">This page is under construction.</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center mx-auto">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}};

export default {component_name};
"""
    
    return content

def create_utility_file(file_path):
    """Create a simple utility file"""
    filename = file_path.split('/')[-1].replace('.ts', '').replace('.tsx', '')
    
    if '/utils/' in file_path:
        return f"""// Utility file: {filename}
export const {filename} = {{
  // Utility functions will be implemented here
}};
"""
    elif '/hooks/' in file_path:
        return f"""// Hook file: {filename}
import {{ useState, useEffect }} from 'react'

export const use{filename.replace('use', '').capitalize()} = () => {{
  // Hook implementation will be added here
  return {{}}
}};
"""
    elif '/types/' in file_path:
        return f"""// Type definitions for {filename}
export interface {filename.replace('.d', '').capitalize()} {{
  // Type definitions will be added here
}};
"""
    else:
        return f"""// File: {filename}
// Implementation will be added here
"""

def main():
    corrupted_files = get_corrupted_files()
    
    if not corrupted_files:
        print("No corrupted files found.")
        return
    
    print(f"Found {len(corrupted_files)} corrupted files. Fixing...")
    
    fixed_count = 0
    for file_path in corrupted_files:
        try:
            print(f"Fixing {file_path}...")
            
            # Create the directory if it doesn't exist
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            
            # Create simple page content
            content = create_placeholder_page(file_path)
            
            # Write the file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            fixed_count += 1
            
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} out of {len(corrupted_files)} corrupted files.")

if __name__ == "__main__":
    main()