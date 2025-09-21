#!/usr/bin/env python3
"""
Simple merge conflict handler for PR #22515
"""

import os
import sys

def main():
    print("Simple merge conflict handler")
    print("Current directory:", os.getcwd())
    print("Files in workspace:")
    
    # List files that might have conflicts
    files_to_check = [
        "netlify.toml",
        "package.json", 
        "next.config.js",
        "lib/utils.js",
        "components/ui/button.jsx"
    ]
    
    for file_path in files_to_check:
        if os.path.exists(file_path):
            print(f"✓ {file_path} exists")
            with open(file_path, 'r') as f:
                content = f.read()
                if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                    print(f"  ⚠️  {file_path} has merge conflict markers")
                else:
                    print(f"  ✅ {file_path} is clean")
        else:
            print(f"✗ {file_path} does not exist")
    
    print("\nMerge conflict analysis complete.")

if __name__ == "__main__":
    main()