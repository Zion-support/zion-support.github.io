#!/usr/bin/env python3
"""
Script to resolve merge conflicts in the PR branch by choosing the main branch version.
This ensures we keep the working version from main and discard the conflicting changes.
"""

import os
import re
from pathlib import Path

def resolve_merge_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file by choosing main branch version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file has merge conflicts
        if '

        def resolve_conflict(match):
            # Choose the HEAD (main branch) version
            head_content = match.group(1)
            return head_content

        # Replace all merge conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)

        # Clean up any remaining conflict markers that might be malformed
        resolved_content = re.sub(r'
        resolved_content = re.sub(r'
        resolved_content = re.sub(r'
                    remaining_conflicts.append(file_path)
        except Exception as e:
            print(f"Error verifying {file_path}: {e}")

    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have merge conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()