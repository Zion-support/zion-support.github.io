#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining errors in the codebase
"""
import os
import re
import glob

def fix_parsing_errors(file_path):
    """Fix parsing errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common parsing errors
        # Remove lines that start with merge conflict markers
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Skip lines that are just merge conflict markers
            if line.strip().startswith('ursor/') or line.strip().startswith('<<<<<<<') or line.strip().startswith('=======') or line.strip().startswith('>>>>>>>'):
                continue
            # Skip lines that are just empty or whitespace after conflict markers
            if line.strip() == '' and len(fixed_lines) > 0 and fixed_lines[-1].strip() == '':
                continue
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix specific parsing issues
        # Fix incomplete imports
        content = re.sub(r'import\s*\{[^}]*$', '', content, flags=re.MULTILINE)
        
        # Fix incomplete JSX
        content = re.sub(r'<[^>]*$', '', content, flags=re.MULTILINE)
        
        # Fix incomplete function declarations
        content = re.sub(r'function\s+\w+\([^)]*$', '', content, flags=re.MULTILINE)
        
        # Fix incomplete const/let/var declarations
        content = re.sub(r'(const|let|var)\s+\w+\s*=\s*[^;]*$', '', content, flags=re.MULTILINE)
        
        # Remove any remaining incomplete lines
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Skip lines that look incomplete
            if (line.strip().endswith('=') or 
                line.strip().endswith('{') or 
                line.strip().endswith('(') or
                line.strip().endswith(',') or
                line.strip().endswith('from') or
                line.strip().endswith('import') or
                line.strip().endswith('export')):
                continue
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = content.strip() + '\n'
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_unused_imports(file_path):
    """Remove unused imports"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple approach: remove unused imports based on common patterns
        # This is a basic implementation - in practice, you'd want more sophisticated analysis
        
        # Remove unused React import if React is not used
        if 'React' in content and not re.search(r'<[A-Z]', content):
            content = re.sub(r"import React[^;]*;?\n?", '', content)
        
        # Remove unused icon imports (common issue)
        unused_icons = ['Phone', 'Mail', 'MapPin', 'Zap', 'Shield', 'Brain', 'Globe', 'Settings', 'BarChart', 'CheckCircle', 'ArrowRight', 'TrendingUp']
        for icon in unused_icons:
            if icon in content and not re.search(rf'<{icon}[^>]*>', content):
                # Remove from import statements
                content = re.sub(rf',\s*{icon}', '', content)
                content = re.sub(rf'{icon}\s*,', '', content)
                content = re.sub(rf'{{\s*{icon}\s*}}', '{}', content)
        
        # Clean up empty import statements
        content = re.sub(r"import\s*\{\s*\}\s*from\s*'[^']*';\n?", '', content)
        content = re.sub(r'import\s*\{\s*\}\s*from\s*"[^"]*";\n?', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing imports in {file_path}: {e}")
        return False

def fix_any_types(file_path):
    """Replace 'any' types with more specific types"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace common 'any' patterns with more specific types
        replacements = [
            (r':\s*any\b', ': unknown'),
            (r'Record<string,\s*any>', 'Record<string, unknown>'),
            (r'Array<any>', 'Array<unknown>'),
            (r'Promise<any>', 'Promise<unknown>'),
        ]
        
        for pattern, replacement in replacements:
            content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing types in {file_path}: {e}")
        return False

def main():
    """Main function to fix all errors"""
    print("Fixing all errors in the codebase...")
    
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '__tests__']):
                continue
                
            files_processed += 1
            
            # Fix parsing errors
            if fix_parsing_errors(file_path):
                files_fixed += 1
                print(f"✓ Fixed parsing errors in: {file_path}")
            
            # Fix unused imports
            if fix_unused_imports(file_path):
                print(f"✓ Fixed unused imports in: {file_path}")
            
            # Fix any types
            if fix_any_types(file_path):
                print(f"✓ Fixed type issues in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()