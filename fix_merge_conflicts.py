#!/usr/bin/env python3
<<<<<<< HEAD
<<<<<<< HEAD
"""
<<<<<<< HEAD
<<<<<<< HEAD
Script to fix merge conflicts in the codebase
=======
Script to automatically resolve merge conflicts by keeping the HEAD version
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
Script to automatically resolve merge conflicts by choosing the HEAD version
=======
Script to automatically resolve merge conflicts in the codebase
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
"""
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
import os
import re
import glob
from pathlib import Path

<<<<<<< HEAD
def fix_merge_conflicts(file_path):
<<<<<<< HEAD
<<<<<<< HEAD
    """Fix merge conflicts in a file by choosing the HEAD version"""
=======
    """Fix merge conflicts in a single file"""
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
=======
def fix_merge_conflict(file_path):
    """Fix merge conflicts in a single file"""
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
    """Fix merge conflicts in a single file"""
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        # Check if file has merge conflicts
=======
<<<<<<< HEAD
        # Skip if no merge conflicts
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        if '<<<<<<< HEAD' not in content:
            return False
=======
        if ' and before >>>>>>>
        pattern1 = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*?'
        content = re.sub(pattern1, r'\1', content, flags=re.DOTALL)
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        
<<<<<<< HEAD
<<<<<<< HEAD
        # Split content by merge conflict markers
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
<<<<<<< HEAD
        for i, line in enumerate(lines):
            if line.startswith('<<<<<<< HEAD'):
                skip_until_end = False
                continue
            elif line.startswith('======='):
                skip_until_end = True
                continue
=======
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                skip_until_end = True
                continue
            elif line.startswith('======='):
                continue
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
            elif line.startswith('>>>>>>> '):
                skip_until_end = False
                continue
            elif not skip_until_end:
=======
        # Remove merge conflict markers and keep the HEAD version
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        keep_head = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_head = True
                continue
            elif line.strip() == '=======':
                keep_head = False
                continue
            elif line.strip() == '>>>>>>> cursor/website-audit-and-update-with-deployment-4c61':
                in_conflict = False
                keep_head = True
                continue
            elif in_conflict and not keep_head:
                continue
            else:
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
                new_lines.append(line)
=======
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match from <<<<<<< HEAD to ======= (keep this part)
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern1, r'\1\n', content, flags=re.DOTALL)
        
        # Pattern to match from ======= to >>>>>>> (remove this part)
        pattern2 = r'=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
<<<<<<< HEAD
        print(f"Fixed merge conflicts in: {file_path}")
=======
=======
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up multiple newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        return True
<<<<<<< HEAD
        
=======
=======
        original_content = content
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        content = re.sub(pattern1, r'\1', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> main
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> main'
        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)
        
        # Pattern 3: <<<<<<< HEAD ... ======= ... >>>>>>> cursor/...
        pattern3 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/[^\n]+'
        content = re.sub(pattern3, r'\1', content, flags=re.DOTALL)
        
        # Pattern 4: <<<<<<< HEAD ... ======= ... >>>>>>> origin/...
        pattern4 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/[^\n]+'
        content = re.sub(pattern4, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Fix common syntax errors
        # Fix unterminated strings
        content = re.sub(r'<title>([^<]*?)\n', r'<title>\1</title>\n', content)
        content = re.sub(r'<meta name="([^"]*?)" content="([^"]*?)\n', r'<meta name="\1" content="\2" />\n', content)
        
        # Fix missing semicolons and brackets
        content = re.sub(r'}\s*$', '};\n', content, flags=re.MULTILINE)
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)\s*$', r'const \1 = () => {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken JSX syntax
        content = re.sub(r'<(\w+)\s*([^>]*?)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        content = re.sub(r'</(\w+)\s*>\s*$', r'</\1>', content, flags=re.MULTILINE)
        
        # Fix missing closing tags
        content = re.sub(r'<(\w+)([^>]*?)\s*>\s*$', r'<\1\2>', content, flags=re.MULTILINE)
        
        # Fix broken function declarations
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)\s*$', r'const \1: React.FC = () => {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken array declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\[([^\]]*?)\s*$', r'const \1 = [\n\2\n];\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken object declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\{([^}]*?)\s*$', r'const \1 = {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix missing semicolons after imports
        content = re.sub(r'from\s+[\'"][^\'"]+[\'"]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
        
        # Fix broken interface declarations
        content = re.sub(r'interface\s+(\w+)\s*\{([^}]*?)\s*$', r'interface \1 {\n\2\n}\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken type declarations
        content = re.sub(r'type\s+(\w+)\s*=\s*\{([^}]*?)\s*$', r'type \1 = {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken export statements
        content = re.sub(r'export\s+default\s+(\w+)\s*$', r'export default \1;\n', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            return False
            
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?\n=======.*?\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up any duplicate imports or empty lines
        lines = content.split('\n')
        cleaned_lines = []
        seen_imports = set()
        
        for line in lines:
            # Skip empty lines after empty lines
            if line.strip() == '' and cleaned_lines and cleaned_lines[-1].strip() == '':
                continue
            # Deduplicate imports
            if line.strip().startswith('import ') and line.strip() in seen_imports:
                continue
            if line.strip().startswith('import '):
                seen_imports.add(line.strip())
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    # Find all TypeScript/JavaScript files with merge conflicts
=======
    """Fix merge conflicts in all relevant files"""
    # Find all TypeScript/JavaScript files
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    patterns = [
        '**/*.ts',
        '**/*.tsx',
<<<<<<< HEAD
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.css',
        '**/*.md'
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
    """Main function to fix all merge conflicts"""
    # Get all TypeScript and JavaScript files
=======
    """Main function to fix all merge conflicts"""
    # Find all TypeScript and JavaScript files
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
<<<<<<< HEAD
        'utils/**/*.ts',
        'hooks/**/*.ts',
        '*.tsx',
        '*.ts'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files
    patterns = [
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
<<<<<<< HEAD
<<<<<<< HEAD
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
            
            if fix_merge_conflicts(file_path):
=======
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
<<<<<<< HEAD
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
=======
    # Filter out node_modules and other irrelevant directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    
=======
        'components/**/*.tsx'
=======
    """Main function to fix merge conflicts"""
    # Get all relevant files
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    fixed_count = 0
    for file_path in files_to_fix:
<<<<<<< HEAD
        if os.path.isfile(file_path):
            if fix_merge_conflict(file_path):
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
                fixed_count += 1
=======
<<<<<<< HEAD
    """Fix merge conflicts in all relevant files"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
=======
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'out', 'coverage'
    ])]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    
    fixed_count = 0
    total_files = 0
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")
=======
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
=======
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                if fix_merge_conflicts(file_path):
                    fixed_files.append(file_path)
    
    print(f"\nFixed merge conflicts in {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  - {file_path}")
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2

if __name__ == "__main__":
    main()