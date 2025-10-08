#!/usr/bin/env python3
"""
Fix orphaned merge conflict markers (incomplete markers)
"""
import os
import glob

def fix_orphaned_markers(filepath):
    """Remove any remaining orphaned conflict markers"""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
        
        original_len = len(lines)
        
        # Remove any line that looks like a conflict marker
        cleaned_lines = []
        for line in lines:
            stripped = line.strip()
            # Skip lines that are merge conflict markers
            if (stripped.startswith('<<<<<<< ') or 
                stripped.startswith('>>>>>>> origin/') or
                stripped.startswith('>>>>>>> ') or
                stripped == '======='):
                continue
            cleaned_lines.append(line)
        
        if len(cleaned_lines) != original_len:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(cleaned_lines)
            return True, f"Removed {original_len - len(cleaned_lines)} orphaned markers"
        else:
            return False, "No orphaned markers"
    
    except Exception as e:
        return False, f"Error: {str(e)}"


def find_typescript_files():
    """Find all TypeScript/JavaScript files"""
    patterns = [
        '/workspace/**/*.ts',
        '/workspace/**/*.tsx',
        '/workspace/**/*.js',
        '/workspace/**/*.jsx',
    ]
    
    files = []
    for pattern in patterns:
        found = glob.glob(pattern, recursive=True)
        for f in found:
            # Skip node_modules and other build directories
            if ('node_modules' not in f and '.next' not in f and 
                'dist' not in f and 'build' not in f):
                files.append(f)
    
    return files


def main():
    print("=" * 70)
    print("FIXING ORPHANED MERGE CONFLICT MARKERS")
    print("=" * 70)
    print()
    
    print("Finding TypeScript/JavaScript files...")
    files = find_typescript_files()
    print(f"Found {len(files)} files to check\n")
    
    fixed_count = 0
    
    for filepath in files:
        success, message = fix_orphaned_markers(filepath)
        if success:
            rel_path = os.path.relpath(filepath, '/workspace')
            print(f"✓ {rel_path}: {message}")
            fixed_count += 1
    
    print()
    print("=" * 70)
    print(f"SUMMARY: Fixed {fixed_count} files")
    print("=" * 70)


if __name__ == '__main__':
    main()