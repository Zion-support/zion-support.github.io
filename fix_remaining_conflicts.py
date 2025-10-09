#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining merge conflicts
"""
import os
import re
import glob

def clean_conflicts_in_file(file_path):
    """Clean all merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove all conflict markers and keep the content after =======
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> [^\n]+', r'\1', content, flags=re.DOTALL)
        
        # Pattern 2: Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Pattern 3: Remove standalone markers
        content = re.sub(r'^<<<<<<< HEAD\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> [^\n]+\n?', '', content, flags=re.MULTILINE)
        
        # Clean up duplicate imports and empty lines
        lines = content.split('\n')
        cleaned_lines = []
        seen_imports = set()
        in_import_block = False
        
        for line in lines:
            stripped = line.strip()
            
            # Handle import statements
            if stripped.startswith('import ') or stripped.startswith('from '):
                if stripped not in seen_imports:
                    cleaned_lines.append(line)
                    seen_imports.add(stripped)
                in_import_block = True
            elif stripped == '' and in_import_block:
                # Skip empty lines in import block
                continue
            elif stripped != '':
                in_import_block = False
                cleaned_lines.append(line)
            else:
                cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Remove excessive empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean all conflicts"""
    # Files that still have conflicts
    problem_files = [
        'app/components/AccessibilityEnhancer.tsx',
        'app/components/Footer.tsx', 
        'app/components/PerformanceMonitor.tsx',
        'app/components/Navigation.tsx',
        'app/micro-saas/page.tsx',
        'app/utils/accessibilityChecker.ts',
        'src/types/guards.ts',
        'src/types/app.types.ts',
        'src/utils/enhanced-performance.ts'
    ]
    
    files_cleaned = 0
    
    for file_path in problem_files:
        if os.path.exists(file_path):
            print(f"Cleaning {file_path}")
            if clean_conflicts_in_file(file_path):
                files_cleaned += 1
                print(f"  ✅ Cleaned")
            else:
                print(f"  ℹ️  No changes needed")
        else:
            print(f"  ❌ File not found: {file_path}")
    
    print(f"\nCleaned {files_cleaned} files")
    
    # Final verification
    remaining_conflicts = []
    for file_path in problem_files:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                    remaining_conflicts.append(file_path)
            except:
                pass
    
    if remaining_conflicts:
        print(f"\n⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("\n🎉 All conflicts resolved!")

if __name__ == "__main__":
    main()