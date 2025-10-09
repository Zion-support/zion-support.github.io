#!/usr/bin/env python3
import re
import sys

def clean_merge_conflicts(content):
    """Remove merge conflict markers and keep the most complete code."""
    # Pattern to match merge conflict blocks
    pattern = r'\n(.*?)\n>>>>>>> [^\n]+\n'

    # Also handle standalone markers
    content = re.sub(r'^\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'^>>>>>>> [^\n]+\n', '', content, flags=re.MULTILINE)

    # Remove empty lines at the start
    content = content.lstrip()

    return content

def main(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()

        cleaned = clean_merge_conflicts(content)

        with open(filepath, 'w') as f:
            f.write(cleaned)

        print(f"Cleaned: {filepath}")
    except Exception as e:
        print(f"Error cleaning {filepath}: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: clean_merge_conflicts.py <file>", file=sys.stderr)
        sys.exit(1)
    main(sys.argv[1])
