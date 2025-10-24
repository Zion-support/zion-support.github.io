#!/usr/bin/env python3
import os
import re
import glob

def fix_quotes(file_path):
    """Fix quote issues in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix unterminated string literals by adding missing quotes
        content = re.sub(r"import React from 'react''", "import React from 'react';", content)
        content = re.sub(r"import Link from 'next/link''", "import Link from 'next/link';", content)
        content = re.sub(r"import { Metadata } from 'next''", "import { Metadata } from 'next';", content)
        content = re.sub(r"from 'lucide-react''", "from 'lucide-react';", content)
        content = re.sub(r"'use client''", "'use client';", content)
        
        # Fix other common quote issues
        content = re.sub(r"(\w+):\s*'([^']*)'([^,}\n])", r'\1: "\2"\3', content)
        content = re.sub(r"(\w+):\s*\"([^\"]*)\"([^,}\n])", r'\1: "\2"\3', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed quotes in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    files = []
    for ext in ['*.tsx', '*.ts', '*.js', '*.jsx']:
        files.extend(glob.glob(f'./app/**/{ext}', recursive=True))
    
    fixed_count = 0
    for file_path in files:
        if fix_quotes(file_path):
            fixed_count += 1
    
    print(f"\nFixed quotes in {fixed_count} files")

if __name__ == "__main__":
    main()