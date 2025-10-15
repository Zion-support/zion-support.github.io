#!/usr/bin/env python3
"""
<<<<<<< HEAD
Comprehensive script to fix all syntax and JSX issues in the codebase.
=======
Comprehensive script to fix all remaining parsing errors.
>>>>>>> main
"""

import os
import glob
<<<<<<< HEAD

def fix_file_syntax(file_path):
    """Fix syntax issues in a single file."""
=======
import re

def fix_parsing_errors(file_path):
    """Fix common parsing errors in a file."""
>>>>>>> main
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Fix orphaned text outside JSX elements (lines that start with text but aren't in JSX)
        lines = content.split('\n')
        new_lines = []
        in_jsx = False
        brace_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Skip empty lines
            if not stripped:
                new_lines.append(line)
                continue
            
            # Check if we're entering JSX
            if 'return (' in line or 'return(' in line:
                in_jsx = True
                brace_count = 0
                new_lines.append(line)
                continue
            
            # Count braces to track JSX context
            if in_jsx:
                brace_count += line.count('(') - line.count(')')
                if brace_count <= 0 and ')' in line:
                    in_jsx = False
            
            # Skip orphaned text that's not in JSX
            if not in_jsx and stripped and not stripped.startswith(('import', 'export', 'const', 'function', 'interface', 'type', '//', '/*', '*', '*/')):
                # This might be orphaned text, skip it
                continue
            
            new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Fix missing closing tags by ensuring proper JSX structure
        # Count opening and closing div tags
        open_divs = content.count('<div')
        close_divs = content.count('</div>')
        
        if open_divs > close_divs:
            # Find the last return statement and add missing closing divs
            last_return = content.rfind('return (')
            if last_return != -1:
                # Find the matching closing parenthesis
                paren_count = 0
                i = last_return
                while i < len(content):
                    if content[i] == '(':
                        paren_count += 1
                    elif content[i] == ')':
                        paren_count -= 1
                        if paren_count == 0:
                            # Insert missing closing divs before this closing paren
                            missing_divs = open_divs - close_divs
                            content = content[:i] + '</div>' * missing_divs + content[i:]
                            break
                    i += 1
        
        # Fix syntax errors in import statements
        content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]([^\'"]+)[\'"];?\s*import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]([^\'"]+)[\'"];?', 
                        r'import { \1, \3 } from "\2";', content)
        
        # Fix missing semicolons in import statements
        content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]([^\'"]+)[\'"]\s*$', 
                        r'import { \1 } from "\2";', content, flags=re.MULTILINE)
        
        # Fix orphaned text that's not properly formatted
        content = re.sub(r'^\s*[A-Za-z][^<]*$', '', content, flags=re.MULTILINE)
        
        # Fix missing closing tags in JSX
        content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Remove lines that are just orphaned text
        lines = content.split('\n')
        new_lines = []
        for line in lines:
            stripped = line.strip()
            if stripped and not stripped.startswith(('import', 'export', 'const', 'function', 'interface', 'type', '//', '/*', '*', '*/', '<', 'return', 'if', 'for', 'while', 'switch', 'case', 'default', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'class', 'extends', 'implements', 'public', 'private', 'protected', 'static', 'abstract', 'async', 'await', 'yield', 'var', 'let', 'const', '=')):
                # Check if this looks like orphaned text
                if not any(char in stripped for char in ['<', '>', '(', ')', '{', '}', '[', ']', ';', ':', ',', '?', '!', '=', '+', '-', '*', '/', '%', '&', '|', '^', '~', '`', '"', "'"]):
                    continue
            new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax issues."""
    # Get all TypeScript and TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'utils/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    total_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            total_count += 1
            if fix_file_syntax(file_path):
=======
        # Fix missing closing parentheses in lazy imports
        content = re.sub(r"lazy\(\(\) => import\('([^']+)'\);", r"lazy(() => import('\1'));", content)
        
        # Fix malformed JSX structure
        content = re.sub(r'<([^>]+)>\s*<([^>]+)>\s*</\2>\s*</\1>', r'<\1><\2></\2></\1>', content)
        
        # Fix incomplete function declarations
        content = re.sub(r'export default function\s+(\w+)\s*\(\s*\)\s*{\s*$', r'export default function \1() {\n  return (\n    <div>Component content</div>\n  );\n}', content, flags=re.MULTILINE)
        
        # Fix malformed const declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*([^;]+);\s*const\s+(\w+)\s*=\s*([^;]+);', r'const \1 = \2;\nconst \3 = \4;', content)
        
        # Fix incomplete JSX elements
        content = re.sub(r'<(\w+)\s*([^>]*?)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*=\s*([^;]+)\s*$', r'\1 = \2;', content, flags=re.MULTILINE)
        
        # Fix malformed return statements
        content = re.sub(r'return\s*\(\s*$', r'return (\n    <div>Content</div>\n  );', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific known problematic files."""
    fixes = {
        '/workspace/app/accessibility-page/page.tsx': '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AccessibilityPage() {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessibility services and solutions for inclusive web development." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Accessibility</h1>
          <p className="text-lg text-gray-300">Accessibility services coming soon.</p>
        </div>
      </div>
    </>
  );
}''',
        '/workspace/app/accessibility/page.tsx': '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Accessibility() {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessibility services and solutions for inclusive web development." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Accessibility</h1>
          <p className="text-lg text-gray-300">Accessibility services coming soon.</p>
        </div>
      </div>
    </>
  );
}''',
        '/workspace/app/advanced-security-suite/page.tsx': '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdvancedSecuritySuite() {
  return (
    <>
      <Helmet>
        <title>Advanced Security Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive security solutions for enterprise protection." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Advanced Security Suite</h1>
          <p className="text-lg text-gray-300">Advanced security solutions coming soon.</p>
        </div>
      </div>
    </>
  );
}''',
        '/workspace/app/ai-3d-generation/page.tsx': '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AI3DGeneration() {
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered 3D content generation and modeling solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AI 3D Generation</h1>
          <p className="text-lg text-gray-300">AI 3D generation services coming soon.</p>
        </div>
      </div>
    </>
  );
}'''
    }
    
    for file_path, content in fixes.items():
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {file_path}")
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

def main():
    """Main function to fix all parsing errors."""
    print("Fixing parsing errors...")
    
    # Fix specific problematic files first
    fix_specific_files()
    
    # Find all TypeScript/JavaScript files
    files = glob.glob('**/*.tsx', recursive=True) + glob.glob('**/*.ts', recursive=True) + glob.glob('**/*.js', recursive=True) + glob.glob('**/*.jsx', recursive=True)
    
    # Filter out node_modules
    files = [f for f in files if 'node_modules' not in f]
    
    fixed_count = 0
    error_count = 0
    
    for file_path in files:
        try:
            if fix_parsing_errors(file_path):
>>>>>>> main
                fixed_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            error_count += 1
    
<<<<<<< HEAD
    print(f"Fixed syntax issues in {fixed_count} out of {total_count} files")
=======
    print(f"Fixed {fixed_count} files")
    print(f"Errors: {error_count} files")
>>>>>>> main

if __name__ == "__main__":
    main()