#!/usr/bin/env python3
"""
Automatically resolve merge conflicts by keeping the HEAD version
"""
import os
import re
import sys

def resolve_merge_conflicts(filepath):
    """Resolve merge conflicts in a file by keeping HEAD version"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file has merge conflicts
        if '\n...content...\n>>>>>>> branch
        pattern = r'\n(.*?)\n>>>>>>> [^\n]+\n?'

        # Replace with HEAD version (group 1)
        resolved_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)

        # Also handle nested conflicts
        # Pattern for conflicts without content between markers
        pattern2 = r'\n(.*?)\n>>>>>>> [^\n]+\n?'
        resolved_content = re.sub(pattern2, '', resolved_content, flags=re.DOTALL)

        # Pattern for conflicts with only HEAD content
        pattern3 = r'\n>>>>>>> [^\n]+\n?'
        resolved_content = re.sub(pattern3, r'\1', resolved_content, flags=re.DOTALL)

        # Write back the resolved content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(resolved_content)

        print(f"✓ Resolved conflicts in: {filepath}")
        return True

    except Exception as e:
        print(f"✗ Error resolving {filepath}: {e}")
        return False

def find_and_resolve_conflicts(directory):
    """Find all files with merge conflicts and resolve them"""
    extensions = ('.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.sh', '.py', '.cjs')
    resolved_count = 0

    for root, dirs, files in os.walk(directory):
        # Skip node_modules and hidden directories
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']

        for file in files:
            if file.endswith(extensions):
                filepath = os.path.join(root, file)
                if resolve_merge_conflicts(filepath):
                    resolved_count += 1

    return resolved_count

if __name__ == '__main__':
    directory = '/workspace'
    print("🔧 Resolving merge conflicts...")
    print("=" * 60)

    resolved = find_and_resolve_conflicts(directory)

    print("=" * 60)
    print(f"✓ Resolved merge conflicts in {resolved} files")