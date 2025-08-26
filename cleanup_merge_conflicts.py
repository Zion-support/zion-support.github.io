#!/usr/bin/env python3
import os
import re
import glob

def cleanup_merge_conflicts():
    """Clean up merge conflict markers from all source files."""
    
    # File extensions to process
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx']
    
    # Find all source files
    source_files = []
    for ext in extensions:
        source_files.extend(glob.glob(f'src/**/{ext}', recursive=True))
    
    print(f"🧹 Found {len(source_files)} source files to process...")
    
    total_cleaned = 0
    
    for file_path in source_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Remove merge conflict markers and their content
            # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
            content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
            
            # Remove any remaining individual markers
            content = re.sub(r'^=======\s*$', '', content, flags=re.MULTILINE)
            content = re.sub(r'^<<<<<<< HEAD\s*$', '', content, flags=re.MULTILINE)
            content = re.sub(r'^>>>>>>> [^\n]*\s*$', '', content, flags=re.MULTILINE)
            
            # Clean up multiple empty lines
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            
            # Remove trailing whitespace
            content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                total_cleaned += 1
                print(f"✅ Cleaned: {file_path}")
                
        except Exception as e:
            print(f"❌ Error processing {file_path}: {e}")
    
    print(f"\n🎉 Cleanup complete! Processed {total_cleaned} files.")
    
    # Check for remaining conflicts
    remaining_conflicts = 0
    for file_path in source_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '=======' in content or '<<<<<<< HEAD' in content or '>>>>>>>' in content:
                remaining_conflicts += 1
                print(f"⚠️  Still has conflicts: {file_path}")
                
        except Exception as e:
            print(f"❌ Error checking {file_path}: {e}")
    
    if remaining_conflicts == 0:
        print("🎉 All merge conflicts have been resolved!")
    else:
        print(f"⚠️  {remaining_conflicts} files still have merge conflicts.")

if __name__ == "__main__":
    cleanup_merge_conflicts()