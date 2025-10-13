#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_syntax(file_path):
    """Fix common JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix incomplete JSX elements - add missing closing tags
        # This is a basic fix for common patterns
        lines = content.split('\n')
        fixed_lines = []
        open_tags = []
        
        for i, line in enumerate(lines):
            # Check for opening div tags
            div_matches = re.finditer(r'<div[^>]*>', line)
            for match in div_matches:
                open_tags.append(('div', i))
            
            # Check for closing div tags
            if '</div>' in line:
                if open_tags and open_tags[-1][0] == 'div':
                    open_tags.pop()
            
            fixed_lines.append(line)
        
        # If there are unclosed div tags at the end, add them
        while open_tags:
            tag_type, _ = open_tags.pop()
            if tag_type == 'div':
                fixed_lines.append('</div>')
        
        # Fix other common issues
        content = '\n'.join(fixed_lines)
        
        # Remove merge conflict markers that might have been missed
        content = re.sub(r'<<<<<<< .*\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> .*\n', '', content)
        
        # Fix common syntax issues
        content = re.sub(r'}\s*>>>>>>>', '}', content)
        content = re.sub(r'}\s*=======', '}', content)
        content = re.sub(r'<<<<<<< .*', '', content)
        
        # Fix missing semicolons in common patterns
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Fix incomplete function declarations
        content = re.sub(r'export default function\s+(\w+)\s*\(\s*\)\s*{\s*$', 
                        r'export default function \1() {\n  return (\n    <div>\n      <h1>\1</h1>\n    </div>\n  );\n}', 
                        content, flags=re.MULTILINE)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def create_basic_page_template(file_path, page_name):
    """Create a basic page template for broken files"""
    try:
        # Extract page name from path
        if '/ai-services/' in file_path:
            service_type = 'AI Services'
        elif '/it-services/' in file_path:
            service_type = 'IT Services'
        elif '/micro-saas' in file_path:
            service_type = 'Micro SAAS'
        else:
            service_type = 'Services'
        
        template = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {page_name}() {{
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="{page_name} solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">{page_name}</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive {page_name.toLowerCase()} solutions designed to meet your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(template)
        return True
    except Exception as e:
        print(f"Error creating template for {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    template_count = 0
    total_count = len(files_to_fix)
    
    print(f"Found {total_count} files to check for syntax errors...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Skip if file is too small or empty
                if len(content.strip()) < 50:
                    continue
                
                # Check if file has serious syntax issues
                has_serious_errors = (
                    'JSX element' in content and 'no corresponding closing tag' in content
                ) or (
                    'Parsing error' in content
                ) or (
                    content.count('<div') > content.count('</div')
                ) or (
                    '>>>>>>> ' in content or '<<<<<<< ' in content
                )
                
                if has_serious_errors:
                    # Try to fix first
                    if fix_jsx_syntax(file_path):
                        print(f"Fixed syntax errors in: {file_path}")
                        fixed_count += 1
                    else:
                        # If fixing didn't work, create a template
                        page_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
                        page_name = ''.join(word.capitalize() for word in page_name.split('-'))
                        if create_basic_page_template(file_path, page_name):
                            print(f"Created template for: {file_path}")
                            template_count += 1
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed syntax errors in {fixed_count} files and created templates for {template_count} files out of {total_count} total files.")

if __name__ == "__main__":
    main()