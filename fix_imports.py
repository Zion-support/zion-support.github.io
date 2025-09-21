#!/usr/bin/env python3

import os
import re
import glob

def fix_imports():
    """Fix all @/ imports to relative imports"""
    
    # Patterns to fix
    patterns = [
        (r"from '@/components/([^']+)'", r"from '../components/\1'"),
        (r"from '@/data/([^']+)'", r"from '../data/\1'"),
        (r"from '@/utils/([^']+)'", r"from '../utils/\1'"),
        (r"from '@/lib/([^']+)'", r"from '../lib/\1'"),
        (r"from '@/hooks/([^']+)'", r"from '../hooks/\1'"),
        (r"from '@/types/([^']+)'", r"from '../types/\1'"),
        (r'from "@/components/([^"]+)"', r'from "../components/\1"'),
        (r'from "@/data/([^"]+)"', r'from "../data/\1"'),
        (r'from "@/utils/([^"]+)"', r'from "../utils/\1"'),
        (r'from "@/lib/([^"]+)"', r'from "../lib/\1"'),
        (r'from "@/hooks/([^"]+)"', r'from "../hooks/\1"'),
        (r'from "@/types/([^"]+)"', r'from "../types/\1"'),
    ]
    
    # Find all TypeScript and JavaScript files
    files = []
    files.extend(glob.glob("pages/**/*.tsx", recursive=True))
    files.extend(glob.glob("pages/**/*.ts", recursive=True))
    files.extend(glob.glob("components/**/*.tsx", recursive=True))
    files.extend(glob.glob("components/**/*.ts", recursive=True))
    files.extend(glob.glob("app/**/*.tsx", recursive=True))
    files.extend(glob.glob("app/**/*.ts", recursive=True))
    
    fixed_files = 0
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Apply all patterns
            for pattern, replacement in patterns:
                content = re.sub(pattern, replacement, content)
            
            # Write back if changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed imports in: {file_path}")
                fixed_files += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed imports in {fixed_files} files")

if __name__ == "__main__":
    fix_imports()