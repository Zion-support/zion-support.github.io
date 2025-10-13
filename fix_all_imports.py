#!/usr/bin/env python3
"""
Comprehensive import statement fixes for React components
"""

import os
import re
import glob
from pathlib import Path

def fix_all_imports(file_path):
    """Fix all import statement issues in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove all malformed import lines
        lines = content.split('\n')
        clean_lines = []
        
        for line in lines:
            # Skip malformed import lines
            if (line.strip().startswith('import ') and 
                ('{ {' in line or '} from \'' in line or '}\'  }' in line or 
                 'react-router-dom\'' in line or 'lucide-react\'' in line or
                 'react-helmet-async\'' in line)):
                continue
            clean_lines.append(line)
        
        content = '\n'.join(clean_lines)
        
        # Add proper imports at the top
        imports = []
        if 'Helmet' in content:
            imports.append("import { Helmet } from 'react-helmet-async';")
        if 'Link' in content:
            imports.append("import { Link } from 'react-router-dom';")
        if 'ArrowRight' in content or 'Home' in content or 'Search' in content or 'AlertTriangle' in content:
            imports.append("import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';")
        
        # Remove duplicates
        imports = list(set(imports))
        
        # Add imports to the beginning
        if imports:
            content = '\n'.join(imports) + '\n\n' + content
        
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
    """Main function to fix all imports"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    print("Starting comprehensive import fixes...")
    
    for ext in extensions:
        pattern = workspace / 'app' / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            # Skip specific files
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if fix_all_imports(file_path):
                fixed_files += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nComprehensive import fixes complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()