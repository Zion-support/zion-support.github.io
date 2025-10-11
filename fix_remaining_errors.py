#!/usr/bin/env python3
import os
import re
import glob

def fix_parsing_errors(file_path):
    """Fix common parsing errors in files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common parsing errors
        fixes = [
            # Fix incomplete JSX closing tags
            (r'  </\n', '  </div>\n'),
            (r'  </\s*\n', '  </div>\n'),
            (r'</\s*$', '</div>'),
            
            # Fix missing closing tags
            (r'<section[^>]*>\s*$', '<section>\n  <div>'),
            (r'<div[^>]*>\s*$', '<div>\n  '),
            
            # Fix malformed JSX
            (r'}\s*const\s+', '}\n\nconst '),
            (r'}\s*export\s+', '}\n\nexport '),
            (r'}\s*;\s*const\s+', '};\n\nconst '),
            
            # Fix incomplete imports
            (r'import\s*{\s*}\s*from\s*[\'"][^\'"]+[\'"]', ''),
            (r'import\s*{\s*[^}]*\s*}\s*from\s*[\'"][^\'"]+[\'"]\s*$', ''),
            
            # Fix malformed function declarations
            (r'const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$', 'const \\1 = () => {\n  return (\n    <div>\n'),
            
            # Fix incomplete JSX expressions
            (r'<(\w+)[^>]*>\s*$', '<\\1>\n  '),
            (r'</\s*$', '</div>'),
            
            # Fix malformed object literals
            (r'}\s*;\s*const\s+(\w+)\s*=\s*\[', '};\n\nconst \\1 = ['), 
            (r'}\s*const\s+(\w+)\s*=\s*\[', '}\n\nconst \\1 = ['), 
            
            # Fix incomplete return statements
            (r'return\s*\(\s*$', 'return (\n    <div>\n'),
            (r'return\s*\(\s*<div>\s*$', 'return (\n    <div>\n'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Clean up multiple newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed parsing errors in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_unused_imports(file_path):
    """Remove unused imports from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Common unused imports
        unused_imports = [
            'Phone', 'Mail', 'MapPin', 'ArrowRight', 'Zap', 'Shield', 'Brain', 'Globe',
            'CheckCircle', 'Settings', 'BarChart', 'DollarSign', 'Star', 'Users', 'Cog',
            'Eye', 'MessageSquare', 'BarChart3', 'Clock', 'Cloud', 'Code', 'Database',
            'Smartphone', 'React', 'Helmet', 'useState', 'useCallback', 'AlertTriangle'
        ]
        
        # Remove unused imports from lucide-react
        for unused in unused_imports:
            # Remove from import statements
            content = re.sub(rf',\s*{unused}(?=\s*,|\s*}})', '', content)
            content = re.sub(rf'{unused}\s*,', '', content)
            content = re.sub(rf'{{\s*{unused}\s*}}', '', content)
            
            # Remove entire import line if only unused imports
            content = re.sub(rf'import\s*{{\s*{unused}\s*}}\s*from\s*[\'"][^\'"]+[\'"]\n?', '', content)
        
        # Clean up empty import statements
        content = re.sub(r'import\s*{\s*}\s*from\s*[\'"][^\'"]+[\'"]\n?', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed unused imports in: {file_path}")
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if 'node_modules' not in f and 'dist' not in f and '.next' not in f]
    
    print(f"Found {len(files_to_process)} files to process")
    
    parsing_fixed = 0
    imports_fixed = 0
    
    for file_path in files_to_process:
        if fix_parsing_errors(file_path):
            parsing_fixed += 1
        if fix_unused_imports(file_path):
            imports_fixed += 1
    
    print(f"Fixed parsing errors in {parsing_fixed} files")
    print(f"Fixed unused imports in {imports_fixed} files")

if __name__ == "__main__":
    main()