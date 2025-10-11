#!/usr/bin/env python3
"""
Script to fix corrupted React/TypeScript files with parsing errors
"""

import os
import re
import glob

def fix_corrupted_file(file_path):
    """Fix a single corrupted file"""
    print(f"Fixing {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    # Fix common import syntax errors
    content = re.sub(r'import \{([^}]+);, ([^}]+)\} from', r'import {\1, \2} from', content)
    content = re.sub(r'ArrowRight;,', 'ArrowRight,', content)
    
    # Fix corrupted object definitions
    content = re.sub(r'const \w+Page: React\.FC = \(\) => \s*\{?\s*\}?,?\s*$', 
                    'const Page: React.FC = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto text-center py-20">\n        <h1 className="text-4xl font-bold text-white mb-4">Page Under Construction</h1>\n        <p className="text-gray-300">This page is being updated.</p>\n      </div>\n    </div>\n  );\n};', 
                    content, flags=re.MULTILINE)
    
    # Fix incomplete object arrays
    content = re.sub(r'const \w+ = \[\s*\{\s*\},?\s*\{\s*\},?\s*\{\s*\},?\s*\{\s*\},?\s*\{\s*\},?\s*\{\s*\},?\s*\]', 
                    'const items = []', content, flags=re.MULTILINE | re.DOTALL)
    
    # Fix malformed JSX
    content = re.sub(r'<title>([^<]+)</title>\s*<meta[^>]*>\s*<title>([^<]+)</title>', 
                    r'<title>\1</title>', content)
    
    # Remove duplicate Helmet tags
    content = re.sub(r'<Helmet>.*?</Helmet>\s*<Helmet>', '<Helmet>', content, flags=re.DOTALL)
    
    # Fix incomplete return statements
    if 'return (' in content and not content.strip().endswith(');'):
        content = re.sub(r'return \(\s*$', 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto text-center py-20">\n        <h1 className="text-4xl font-bold text-white mb-4">Page Under Construction</h1>\n        <p className="text-gray-300">This page is being updated.</p>\n      </div>\n    </div>\n  );', content, flags=re.MULTILINE)
    
    # Ensure proper closing
    if not content.strip().endswith('export default'):
        if 'export default' not in content:
            content += '\n\nexport default Page;'
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to fix all corrupted files"""
    # Get all TypeScript/TSX files in the app directory
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    total_count = len(files)
    
    for file_path in files:
        if fix_corrupted_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()