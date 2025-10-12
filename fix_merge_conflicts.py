#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping HEAD version
"""
import os
import re
import glob

<<<<<<< HEAD
<<<<<<< HEAD
def fix_merge_conflicts(file_path):
<<<<<<< HEAD
    """Fix merge conflicts in a single file."""
=======
    """Fix merge conflicts in a file by keeping the HEAD version and removing conflict markers."""
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
def fix_merge_conflicts(content):
    """Fix merge conflict markers in content"""
    # Remove merge conflict markers and keep the HEAD version
    content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n', r'\1', content, flags=re.DOTALL)
    
    # Remove any remaining conflict markers
    content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
    content = re.sub(r'=======\n', '', content)
    content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
    
    return content

def fix_jsx_syntax_errors(content):
    """Fix common JSX syntax errors"""
    # Fix unclosed JSX tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    
    # Fix malformed JSX expressions
    content = re.sub(r'\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    # Fix unclosed fragments
    content = re.sub(r'<>\s*$', r'<></>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_errors(content):
    """Fix common TypeScript errors"""
    # Remove unused imports
    content = re.sub(r'import\s+\{[^}]*\}\s+from\s+[\'\"][^\'\"]+[\'\"];\s*\n', '', content)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix errors"""
>>>>>>> origin/main
=======
def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep the newer content (after =======)
        # Pattern to match merge conflicts and keep the newer content
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
        
        # Replace with just the newer content
        new_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict sections
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'^<<<<<<< HEAD.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^=======.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^>>>>>>> [^\n]+.*$', '', new_content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
=======
        # Remove merge conflict markers and keep HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
        
        return True
=======
        original_content = content
=======
        # Pattern to match merge conflict blocks
        # <<<<<<< HEAD
        # ... content ...
        # =======
        # ... other content ...
        # >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?'
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any double newlines that might have been created
        fixed_content = re.sub(r'\n\n\n+', '\n\n', fixed_content)
        
        if content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No conflicts found in: {file_path}")
            return False
            
>>>>>>> origin/main
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix unclosed JSX tags - this is complex, so we'll handle specific patterns
        # Fix missing closing tags for common elements
        fixes = [
            # Fix unclosed Helmet tags
            (r'<Helmet>([^<]*)', r'<Helmet>\1</Helmet>'),
            # Fix unclosed div tags (basic pattern)
            (r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>'),
            # Fix missing semicolons after imports
            (r'import ([^;]+)\n', r'import \1;\n'),
            # Fix missing closing fragments
            (r'<>([^<]*)', r'<>\1</>'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    """Main function to process all files with merge conflicts."""
    workspace = Path('/workspace')
=======
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
>>>>>>> origin/main
=======
    """Main function to fix all merge conflicts"""
    # Get all files with merge conflicts
    files_with_conflicts = []
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'out', '.next']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
<<<<<<< HEAD
<<<<<<< HEAD
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
<<<<<<< HEAD
            print(f"Fixed: {file_path}")
    
    print(f"Successfully fixed {fixed_count} files")
=======
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                print(f"Processing: {file_path}")
                
                # Fix merge conflicts first
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
                
                # Then fix JSX syntax
                fix_jsx_syntax_errors(file_path)
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")
>>>>>>> origin/main
=======
    
    print(f"Fixed merge conflicts in {fixed_count} files")
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a

if __name__ == "__main__":
    main()