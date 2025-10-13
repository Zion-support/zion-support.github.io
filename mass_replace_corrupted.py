#!/usr/bin/env python3
"""
Mass replace corrupted files with clean templates.
"""

import os
import re

def create_clean_page_template(file_path):
    """Create a clean page template for corrupted files."""
    filename = os.path.basename(file_path)
    page_name = filename.replace('.tsx', '').replace('.ts', '')
    
    # Handle special cases for component names
    if page_name.startswith('5g-'):
        component_name = 'FiveG' + ''.join(word.capitalize() for word in page_name[3:].split('-'))
    elif page_name.startswith('ai-'):
        component_name = 'AI' + ''.join(word.capitalize() for word in page_name[3:].split('-'))
    elif page_name == '404':
        component_name = 'NotFound'
    elif page_name == 'App':
        component_name = 'App'
    else:
        component_name = ''.join(word.capitalize() for word in page_name.split('-'))
    
    # Special handling for App.tsx
    if page_name == 'App':
        return '''import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to Zion - Your AI-Powered Technology Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
'''
    
    template = f'''import React from 'react';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {component_name.replace('([A-Z])', ' $1').strip()}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}}
'''
    
    return template

def is_file_corrupted(file_path):
    """Check if a file is corrupted with syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
            return True
        
        # Check for malformed JSX/TSX
        if 'export default function' in content:
            # Check if function is properly closed
            if not re.search(r'export default function.*?\{.*?\}', content, re.DOTALL):
                return True
        
        # Check for unclosed tags
        if '<' in content and '>' in content:
            open_tags = re.findall(r'<(\w+)[^>]*>', content)
            close_tags = re.findall(r'</(\w+)>', content)
            if len(open_tags) != len(close_tags):
                return True
        
        return False
        
    except Exception:
        return True

def mass_replace_corrupted():
    """Replace all corrupted files with clean templates."""
    
    # Find all TypeScript/TSX files in the app directory
    result = os.popen('find app -name "*.tsx" -o -name "*.ts"').read()
    files = [f.strip() for f in result.split('\n') if f.strip()]
    
    print(f"Checking {len(files)} TypeScript files...")
    
    replaced_count = 0
    
    for file_path in files:
        if not os.path.exists(file_path):
            continue
            
        try:
            if is_file_corrupted(file_path):
                print(f"Replacing corrupted file: {file_path}")
                template = create_clean_page_template(file_path)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(template)
                replaced_count += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Replaced {replaced_count} corrupted files")

def main():
    """Main function."""
    print("Starting mass replacement of corrupted files...")
    mass_replace_corrupted()
    print("Mass replacement complete!")

if __name__ == "__main__":
    main()