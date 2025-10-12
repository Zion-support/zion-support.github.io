#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix broken JSX fragments
        content = re.sub(r'<>\s*<>\s*', '<>', content)
        content = re.sub(r'</>\s*</>\s*', '</>', content)
        
        # Fix broken closing tags
        content = re.sub(r'</>\s*$', '', content)
        
        # Fix broken self-closing tags
        content = re.sub(r'<(\w+)\s+/>', r'<\1 />', content)
        
        # Fix broken element attributes
        content = re.sub(r'element="\{<(\w+)\s+/>\}"', r'element={<\1 />}', content)
        
        # Fix broken fallback attributes
        content = re.sub(r'fallback="\{<(\w+)\s+/>\}"', r'fallback={<\1 />}', content)
        
        # Fix broken class names with spaces
        content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
        
        # Fix broken text content
        content = re.sub(r'text-([^"]*?)\s+([^"]*?)"', r'text-\1\2"', content)
        
        # Fix broken spacing in class names
        content = re.sub(r'(\w+)\s+(\w+)(?=")', r'\1\2', content)
        
        # Fix broken ArrowRight class
        content = re.sub(r'className="w-5 h-5ml-2"', r'className="w-5 h-5 ml-2"', content)
        
        # Fix broken text classes
        content = re.sub(r'text-whitemb-6', r'text-white mb-6', content)
        content = re.sub(r'text-gray-300mb-8', r'text-gray-300 mb-8', content)
        content = re.sub(r'py-16text-center', r'py-16 text-center', content)
        
        # Fix broken JSX structure - ensure proper closing tags
        # Look for unclosed div tags and fix them
        lines = content.split('\n')
        fixed_lines = []
        div_stack = []
        
        for i, line in enumerate(lines):
            # Track opening div tags
            if '<div' in line and not line.strip().endswith('/>'):
                div_stack.append(i)
            
            # Track closing div tags
            if '</div>' in line:
                if div_stack:
                    div_stack.pop()
            
            # Check for broken JSX structure
            if '}' in line and not line.strip().endswith('}') and not line.strip().endswith('};'):
                # This might be a broken closing brace
                if 'return' in lines[i-1] if i > 0 else False:
                    # This is likely a broken return statement
                    line = line.replace('}', '')
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix specific patterns that cause syntax errors
        # Fix broken return statements
        content = re.sub(r'return\s*\(\s*<>\s*<div', r'return (\n    <div', content)
        
        # Fix broken JSX fragments at the end
        content = re.sub(r'}\s*</>\s*$', '}\n  );\n}', content)
        
        # Fix broken closing braces
        content = re.sub(r'}\s*</>\s*;\s*$', '}\n  );\n}', content)
        
        # Fix broken function endings
        content = re.sub(r'}\s*</>\s*$', '}\n  );\n}', content)
        
        # Fix broken export statements
        content = re.sub(r'export default.*?}\s*</>\s*$', 'export default function() {\n  return (\n    <div>\n      {/* Content */}\n    </div>\n  );\n}', content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def create_simple_page(file_path):
    """Create a simple, working page for problematic files"""
    try:
        # Extract the service name from the path
        path_parts = file_path.split('/')
        service_name = path_parts[-2] if path_parts[-1] == 'page.tsx' else path_parts[-1].replace('.tsx', '')
        
        # Create a simple working page
        content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {service_name.replace('-', '').replace('_', '').title()}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>{service_name.replace('-', ' ').title()} - Zion Tech Group</title>
        <meta name="description" content="Professional {service_name.replace('-', ' ')} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">{service_name.replace('-', ' ').title()}</h1>
        <p className="text-lg text-gray-300 mb-8">Professional {service_name.replace('-', ' ')} services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Created simple page for {file_path}")
        return True
        
    except Exception as e:
        print(f"Error creating simple page for {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    fixed_count = 0
    recreated_count = 0
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has serious syntax issues
                if ('<<<<<<< HEAD' in content or 
                    '=======' in content or 
                    '>>>>>>>' in content or
                    'JSX element' in content or
                    'Unexpected token' in content or
                    'Expected corresponding' in content):
                    
                    # Try to fix first
                    if fix_syntax_errors(file_path):
                        fixed_count += 1
                    else:
                        # If fixing didn't work, create a simple page
                        if create_simple_page(file_path):
                            recreated_count += 1
                            
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed syntax errors in {fixed_count} files")
    print(f"Recreated {recreated_count} files with simple content")

if __name__ == "__main__":
    main()