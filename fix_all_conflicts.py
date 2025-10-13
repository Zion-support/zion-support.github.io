#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining merge conflicts
"""
import os
import re
import glob

<<<<<<< HEAD
def fix_file(file_path):
    """Fix merge conflicts and syntax errors in a file"""
=======
def fix_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
<<<<<<< HEAD
        original_content = content
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> [^\n]+.*?\n', '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD', '', content)
        content = re.sub(r'=======', '', content)
        content = re.sub(r'>>>>>>> [^\n]+', '', content)
        
        # Fix common syntax issues
        # Remove extra closing braces that might be left from conflicts
        lines = content.split('\n')
        new_lines = []
        brace_count = 0
        
        for line in lines:
            # Count braces
            brace_count += line.count('{') - line.count('}')
            
            # Skip lines that are just closing braces if we have too many
            if line.strip() == '}' and brace_count < 0:
                continue
                
            new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Clean up extra whitespace
=======
        # Check if file has merge conflicts
        if '            return False
        
        # Remove all merge conflict markers and their content
        # Pattern to match from         pattern = r'        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining lines
        content = re.sub(r'\n?', '', content)
        
        # Remove any remaining         content = re.sub(r'        
        # Remove any remaining         content = re.sub(r'        
        # Clean up multiple empty lines
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'utils/**/*.ts',
        'hooks/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
=======
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove all merge conflict markers and keep the content after =======
        # This handles various patterns of conflicts
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_end = True
                continue
            elif line.strip() == '=======':
                skip_until_end = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining conflicts"""
    # Get all files with conflicts
    result = os.popen("grep -l '<<<<<<< HEAD' app/**/*.{ts,tsx,js,jsx} 2>/dev/null").read().strip()
    files_with_conflicts = result.split('\n') if result else []
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    
    files_fixed = 0
    total_files = 0
    
<<<<<<< HEAD
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_file(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"Fixed {files_fixed} out of {total_files} files")
=======
    for file_path in files_with_conflicts:
        if file_path and os.path.exists(file_path):
            files_processed += 1
            if fix_conflicts_in_file(file_path):
                conflicts_fixed += 1
    
    print(f"\nProcessed {files_processed} files with conflicts")
    print(f"Fixed conflicts in {conflicts_fixed} files")
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f

if __name__ == "__main__":
    main()