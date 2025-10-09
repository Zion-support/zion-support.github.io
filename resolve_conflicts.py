#!/usr/bin/env python3
"""
Script to resolve merge conflicts by keeping the newer version (after
        content = re.sub(pattern1, r'\2', content, flags=re.DOTALL)

        # Pattern 2: Remove any remaining conflict markers
        content = re.sub(r'\n.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)

        # Clean up any remaining markers
        content = re.sub(r'^\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> [^\n]+\n?', '', content, flags=re.MULTILINE)

        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all conflicts"""
    # Find all files with potential conflicts
    file_patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.js',
        'src/**/*.jsx'
    ]

    files_processed = 0
    conflicts_resolved = 0

    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_conflicts_in_file(file_path):
                    conflicts_resolved += 1

    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {conflicts_resolved} files")

    # Verify no conflicts remain
    remaining_conflicts = []
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if '' in content or '>>>>>>>' in content:
                        remaining_conflicts.append(file_path)
                except:
                    pass

    if remaining_conflicts:
        print(f"\nWarning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("\n✅ All merge conflicts resolved successfully!")

if __name__ == "__main__":
    main()