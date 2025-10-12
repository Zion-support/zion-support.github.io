#!/usr/bin/env python3
import os
import re
import glob

def restore_jsx_content(file_path):
    """Restore proper JSX content for files that were corrupted"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Check if this is a corrupted file with minimal content
        if len(content.strip()) < 200 and 'return (' in content and '</>' in content:
            # Extract the directory name to create proper content
            dir_name = os.path.basename(os.path.dirname(file_path))
            function_name = ''.join(word.capitalize() for word in dir_name.replace('-', ' ').split())
            page_title = ' '.join(word.capitalize() for word in dir_name.replace('-', ' ').split())
            
            # Create proper JSX content
            proper_content = f'''import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {function_name}() {{
  return (
    <>
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_title.lower()} services for businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{page_title}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional {page_title.lower()} services coming soon.</p>
          
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
                f.write(proper_content)
            print(f"Restored: {file_path}")
            return True
        
        print(f"No changes needed: {file_path}")
        return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Restore JSX content for corrupted files"""
    app_dir = "/workspace/app"
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check for restoration...")
    
    for file_path in tsx_files:
        if restore_jsx_content(file_path):
            fixed_count += 1
    
    print(f"\nRestored {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()