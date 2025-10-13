#!/usr/bin/env python3
"""
Clean up merge conflict markers from all files.
"""

import os
import re
import subprocess

def clean_merge_conflicts():
    """Clean up merge conflict markers from all files."""
    
    # Find all files with merge conflict markers
    result = subprocess.run(['grep', '-r', '-l', '
            # This pattern matches: 
            content = re.sub(r'', '', content, flags=re.DOTALL)
            
            # Clean up any remaining standalone markers
            content = re.sub(r'\s*\n?', '', content)
            content = re.sub(r'
            
            # Clean up multiple empty lines
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
                
        except Exception as e:
            print(f"Error cleaning {file_path}: {e}")

def main():
    """Main function."""
    print("Cleaning merge conflict markers...")
    clean_merge_conflicts()
    print("Merge conflict cleanup complete!")

if __name__ == "__main__":
    main()