#!/usr/bin/env python3
import os
import re

def fix_unused_imports(file_path):
    """Fix unused imports in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove unused imports
        unused_imports = [
            r'import\s*{\s*Brain\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
            r'import\s*{\s*User\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
            r'import\s*{\s*Target\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
            r'import\s*{\s*Satellite\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
            r'//\s*import\s*{\s*Brain\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
            r'//\s*import\s*{\s*User\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
            r'//\s*import\s*{\s*Target\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
            r'//\s*import\s*{\s*Satellite\s*}\s*from\s*[\'"]lucide-react[\'"];\s*\n',
        ]
        
        for pattern in unused_imports:
            content = re.sub(pattern, '', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed unused imports in {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix unused imports in all TypeScript files"""
    fixed_count = 0
    
    # Find all TypeScript files
    for root, dirs, files in os.walk('app'):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                file_path = os.path.join(root, file)
                if fix_unused_imports(file_path):
                    fixed_count += 1
    
    print(f"\nFixed unused imports in {fixed_count} files")

if __name__ == "__main__":
    main()