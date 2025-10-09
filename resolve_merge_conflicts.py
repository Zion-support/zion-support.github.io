#!/usr/bin/env python3
"""
Script to resolve merge conflicts in the codebase
"""
import os
import re
import glob

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Pattern 1: Keep the main branch version (after
        content = re.sub(pattern1, r'\2', content, flags=re.DOTALL)

        # Pattern 2: Keep everything after
        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)

        # Pattern 3: Remove standalone conflict markers
        content = re.sub(r'^\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> [^\n]+\n', '', content, flags=re.MULTILINE)

        # Clean up any remaining conflict markers
        content = re.sub(r'.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)

        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Resolved conflicts in {file_path}")
            return True
        else:
            print(f"ℹ️  No conflicts found in {file_path}")
            return False

    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    print("🔍 Searching for files with merge conflicts...")

    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]

    files_with_conflicts = []

    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and .git directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue

            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '' in content or '>>>>>>>' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue

    if not files_with_conflicts:
        print("✅ No files with merge conflicts found!")
        return

    print(f"📁 Found {len(files_with_conflicts)} files with conflicts:")
    for file_path in files_with_conflicts:
        print(f"  - {file_path}")

    print("\n🔧 Resolving conflicts...")

    resolved_count = 0
    for file_path in files_with_conflicts:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1

    print(f"\n✅ Successfully resolved conflicts in {resolved_count} files")

    # Verify no conflicts remain
    print("\n🔍 Verifying no conflicts remain...")
    remaining_conflicts = []
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '' in content or '>>>>>>>' in content:
                    remaining_conflicts.append(file_path)
        except:
            continue

    if remaining_conflicts:
        print(f"⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("✅ All conflicts resolved successfully!")

if __name__ == "__main__":
    main()