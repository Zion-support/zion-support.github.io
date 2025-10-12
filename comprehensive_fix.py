#!/usr/bin/env python3
import os
import re
import glob

def fix_tsx_file(file_path):
    """Comprehensive fix for TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Missing function declaration pattern
        if (content.strip().startswith('import') and 
            '];' in content and 
            '<div className="min-h-screen' in content and
            'export default function' not in content):
            
            lines = content.split('\n')
            import_end = 0
            content_start = 0
            
            for i, line in enumerate(lines):
                if line.strip().startswith('import'):
                    import_end = i
                elif line.strip() == '];' and content_start == 0:
                    content_start = i + 1
                    break
            
            if content_start > 0:
                imports = '\n'.join(lines[:import_end + 1])
                content_part = '\n'.join(lines[content_start:])
                
                page_name = os.path.basename(os.path.dirname(file_path)).replace('-', ' ').title()
                function_name = page_name.replace(' ', '') + 'Page'
                
                content = f"""{imports}

export default function {function_name}() {{
  return (
{content_part}
  );
}}"""
        
        # Fix 2: Completely malformed files
        elif content.strip() in ['ursor/website-audit-and-update-with-deployment-a178', '']:
            page_name = os.path.basename(os.path.dirname(file_path)).replace('-', ' ').title()
            function_name = page_name.replace(' ', '') + 'Page'
            
            content = f"""import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function {function_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.lower()} services and solutions." />
        <meta name="keywords" content="{page_name.lower()}, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {page_name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional {page_name.lower()} services and solutions for your business.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}}"""
        
        # Fix 3: JSX expressions must have one parent element
        elif 'JSX expressions must have one parent element' in str(content):
            # Wrap multiple JSX elements in a fragment
            if not content.strip().startswith('<') and 'return' in content:
                # Find the return statement and wrap its content
                lines = content.split('\n')
                new_lines = []
                in_return = False
                return_content = []
                
                for line in lines:
                    if 'return' in line and '(' in line:
                        in_return = True
                        new_lines.append(line)
                        continue
                    elif in_return and line.strip().startswith(')'):
                        # End of return, wrap content
                        if return_content:
                            new_lines.append('    <>')
                            for rc in return_content:
                                new_lines.append(rc)
                            new_lines.append('    </>')
                        new_lines.append(line)
                        in_return = False
                        return_content = []
                    elif in_return:
                        return_content.append(line)
                    else:
                        new_lines.append(line)
                
                content = '\n'.join(new_lines)
        
        # Fix 4: Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Fix 5: Clean up multiple newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files
    patterns = [
        'app/**/*.tsx',
        'components/**/*.tsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_tsx_file(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} TSX files")

if __name__ == "__main__":
    main()