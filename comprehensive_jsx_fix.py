#!/usr/bin/env python3
import os
import re
import glob

def fix_comprehensive_jsx(file_path):
    """Comprehensive JSX fix for malformed files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common issues
        fixes = [
            # Fix missing spaces in class names
            (r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-'),
            (r'text-4xl font-boldtext-white', 'text-4xl font-bold text-white'),
            (r'text-lgtext-gray-300mb-8', 'text-lg text-gray-300 mb-8'),
            (r'mx-autopx-4', 'mx-auto px-4'),
            (r'from-cyan-500to-purple-600', 'from-cyan-500 to-purple-600'),
            (r'hover:from-cyan-600 hover:to-purple-700', 'hover:from-cyan-600 hover:to-purple-700'),
            
            # Fix malformed JSX tags
            (r'</div><Helmet>', '\n      <Helmet>'),
            (r'</Helmet></Helmet>', '</Helmet>'),
            (r'</Helmet><title>', '\n        <title>'),
            (r'</title>\n        <meta', '\n        </title>\n        <meta'),
            (r'</Helmet>\n      <div', '\n      </Helmet>\n      <div'),
            (r'</div><h1', '\n        <h1'),
            (r'</h1>\n        <p', '\n        </h1>\n        <p'),
            (r'</p>\n        <Link', '\n        </p>\n        <Link'),
            (r'</Link>\n        </div>', '\n        </Link>\n      </div>'),
            
            # Fix JSX structure - wrap multiple elements in fragment
            (r'return\s+<div', 'return (\n    <>\n      <div'),
            (r'</div>\n  </div>', '</div>\n    </>\n  );'),
            
            # Fix unclosed tags
            (r'<Helmet>([^<]*)', r'<Helmet>\1</Helmet>'),
            (r'<BrowserRouter>([^<]*)', r'<BrowserRouter>\1</BrowserRouter>'),
            
            # Fix missing semicolons
            (r'import ([^;]+)\n', r'import \1;\n'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Fix JSX structure more comprehensively
        # Look for return statements and fix their structure
        if 'return' in content:
            # Find return statement
            return_match = re.search(r'return\s+([^;]+);?', content, re.DOTALL)
            if return_match:
                return_content = return_match.group(1).strip()
                
                # Check if we have multiple top-level elements
                elements = re.findall(r'<[A-Za-z][^>]*>', return_content)
                if len(elements) > 1:
                    # Wrap in fragment
                    new_return = f'return (\n    <>\n        {return_content}\n    </>\n);'
                    content = content.replace(f'return {return_content}', new_return)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
    # Process all TSX files
    patterns = [
        'app/**/*.tsx',
        'components/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                print(f"Processing: {file_path}")
                
                if fix_comprehensive_jsx(file_path):
                    files_fixed += 1
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()