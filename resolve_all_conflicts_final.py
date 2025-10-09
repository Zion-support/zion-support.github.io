#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for Zion Tech Group website
This script will resolve all merge conflicts by choosing the appropriate version
"""

import os
import re
import subprocess
import sys
from pathlib import Path

def resolve_merge_conflicts():
    """Resolve all merge conflicts in the repository"""

    # Get list of files with merge conflicts
    try:
        result = subprocess.run(['git', 'grep', '-l', '\n(.*?)\n>>>>>>> ', content, flags=re.DOTALL)

    if len(parts) < 2:
        return content

    resolved_parts = [parts[0]]  # Content before first conflict

    # Process each conflict
    for i in range(1, len(parts), 3):
        if i + 2 < len(parts):
            head_content = parts[i]
            main_content = parts[i + 1]
            rest_content = parts[i + 2]

            # Choose the appropriate version based on file type and content
            chosen_content = choose_best_version(head_content, main_content, file_path)
            resolved_parts.append(chosen_content)
            resolved_parts.append(rest_content)

    return ''.join(resolved_parts)

def choose_best_version(head_content, main_content, file_path):
    """Choose the best version between HEAD and main based on file type and content"""

    # For specific file types, prefer certain versions
    if 'test' in file_path.lower():
        # For test files, prefer the version with more comprehensive tests
        if len(main_content.strip()) > len(head_content.strip()):
            return main_content
        return head_content

    if 'package.json' in file_path:
        # For package.json, prefer the version with more dependencies
        if main_content.count('"') > head_content.count('"'):
            return main_content
        return head_content

    if 'tsx' in file_path or 'ts' in file_path:
        # For TypeScript files, prefer the version with better type safety
        if 'any' in head_content and 'any' not in main_content:
            return main_content
        if 'any' in main_content and 'any' not in head_content:
            return head_content
        # If both are similar, prefer the longer/more complete version
        if len(main_content.strip()) > len(head_content.strip()):
            return main_content
        return head_content

    # For other files, prefer the version with more content
    if len(main_content.strip()) > len(head_content.strip()):
        return main_content

    return head_content

def main():
    """Main function"""
    print("🚀 Starting comprehensive merge conflict resolution...")

    # Change to workspace directory
    os.chdir('/workspace')

    # Resolve conflicts
    success = resolve_merge_conflicts()

    if success:
        print("\n✅ All merge conflicts resolved successfully!")

        # Add and commit the resolved files
        try:
            subprocess.run(['git', 'add', '.'], check=True)
            subprocess.run(['git', 'commit', '-m', 'Resolve merge conflicts and prepare for merge'], check=True)
            print("✅ Changes committed successfully")
        except subprocess.CalledProcessError as e:
            print(f"⚠️  Warning: Could not commit changes: {e}")
    else:
        print("\n❌ No conflicts were resolved")
        return 1

    return 0

if __name__ == "__main__":
    sys.exit(main())