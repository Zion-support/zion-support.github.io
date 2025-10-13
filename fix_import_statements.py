#!/usr/bin/env python3
"""
Fix malformed import statements in React components
"""

import os
import re
import glob
from pathlib import Path

def fix_import_statements(file_path):
    """Fix malformed import statements in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed import statements
        # Pattern: import { something } from 'package';import { something } from 'package';
        content = re.sub(r"import\s*\{\s*([^}]+)\s*\}\s*from\s*'([^']+)';\s*import\s*\{\s*([^}]+)\s*\}\s*from\s*'([^']+)';", 
                        r"import { \1 } from '\2';\nimport { \3 } from '\4';", content)
        
        # Fix missing opening brace in import
        content = re.sub(r"import\s+([^;]+);", r"import { \1 } from 'react-router-dom';", content)
        
        # Fix malformed imports like: import react-router-dom';
        content = re.sub(r"import\s+([^;]+)';", r"import { Link } from '\1';", content)
        
        # Fix imports without proper syntax
        content = re.sub(r"import\s+([^;]+);", r"import { \1 } from 'lucide-react';", content)
        
        # Fix specific common patterns
        content = re.sub(r"import\s+react-router-dom';", "import { Link } from 'react-router-dom';", content)
        content = re.sub(r"import\s+lucide-react';", "import { ArrowRight } from 'lucide-react';", content)
        
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
    """Main function to fix import statements"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    print("Starting import statement fixes...")
    
    for ext in extensions:
        pattern = workspace / 'app' / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip specific files
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if fix_import_statements(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nImport statement fixes complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()