#!/usr/bin/env python3

import os
import glob

def clean_corrupted_files():
    """Find and remove corrupted files"""
    
    # Find all .tsx files
    tsx_files = glob.glob("**/*.tsx", recursive=True)
    
    corrupted_files = []
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Check for corrupted patterns
            if (content.startswith('\n\n,') or 
                content.startswith('import React from \\') or
                'Invalid character' in content or
                len(content.strip()) < 10):
                corrupted_files.append(file_path)
                
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            corrupted_files.append(file_path)
    
    # Remove corrupted files
    for file_path in corrupted_files:
        try:
            os.remove(file_path)
            print(f"Removed corrupted file: {file_path}")
        except Exception as e:
            print(f"Error removing {file_path}: {e}")
    
    print(f"Cleaned {len(corrupted_files)} corrupted files")

if __name__ == "__main__":
    clean_corrupted_files()