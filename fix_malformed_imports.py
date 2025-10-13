#!/usr/bin/env python3
"""
Fix malformed import statements in React components
"""

import os
import re
import glob
from pathlib import Path

def fix_malformed_imports(file_path):
    """Fix malformed import statements in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix completely malformed imports
        # Pattern: import { { Link } from '{ { Helmet } from 'react-helmet-async' } from 'react-router-dom' } from 'lucide-react';
        content = re.sub(r"import\s*\{\s*\{\s*([^}]+)\s*\}\s*from\s*'\s*\{\s*([^}]+)\s*\}\s*from\s*'([^']+)'\s*\}\s*from\s*'([^']+)'\s*\}\s*from\s*'([^']+)';", 
                        r"import { \1 } from '\3';\nimport { \2 } from '\5';", content)
        
        # Fix other malformed patterns
        content = re.sub(r"import\s*\{\s*\{\s*([^}]+)\s*\}\s*from\s*'\s*\{\s*([^}]+)\s*\}\s*from\s*'([^']+)'\s*\}\s*from\s*'([^']+)';", 
                        r"import { \1 } from '\3';\nimport { \2 } from '\4';", content)
        
        # Fix simple malformed imports
        content = re.sub(r"import\s*\{\s*\{\s*([^}]+)\s*\}\s*from\s*'\s*([^']+)'\s*\}\s*from\s*'([^']+)';", 
                        r"import { \1 } from '\3';", content)
        
        # Clean up any remaining malformed imports by replacing with standard ones
        if "react-helmet-async" in content and "import.*Helmet" not in content:
            content = "import { Helmet } from 'react-helmet-async';\n" + content
        
        if "react-router-dom" in content and "import.*Link" not in content:
            content = "import { Link } from 'react-router-dom';\n" + content
        
        if "lucide-react" in content and "import.*ArrowRight" not in content:
            content = "import { ArrowRight } from 'lucide-react';\n" + content
        
        # Remove duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        new_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                if line not in seen_imports:
                    seen_imports.add(line)
                    new_lines.append(line)
            else:
                new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
                
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to fix malformed imports"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    print("Starting malformed import fixes...")
    
    for ext in extensions:
        pattern = workspace / 'app' / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip specific files
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if fix_malformed_imports(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nMalformed import fixes complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()