#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from all files.
"""

import os
import re
import subprocess

def run_command(cmd):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=True)
        return result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {cmd}")
        return e.stdout, e.stderr

def clean_merge_conflicts():
    """Clean up merge conflict markers from all files."""
    print("🧹 Cleaning up merge conflict markers...")
    
    # Find all files with merge conflict markers
    stdout, stderr = run_command("grep -r '<<<<<<< HEAD' . --include='*.tsx' --include='*.ts' --include='*.js' --include='*.json' | cut -d: -f1 | sort -u")
    files_with_conflicts = [line.strip() for line in stdout.strip().split('\n') if line.strip()]
    
    print(f"📋 Found {len(files_with_conflicts)} files with merge conflicts")
    
    for file_path in files_with_conflicts:
        if not os.path.exists(file_path):
            continue
            
        print(f"🔨 Cleaning: {file_path}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove merge conflict markers and keep the content after =======
            # This is a simple approach - keep everything after the last =======
            lines = content.split('\n')
            cleaned_lines = []
            skip_until_equals = False
            
            for line in lines:
                if '<<<<<<< HEAD' in line or '<<<<<<<' in line:
                    skip_until_equals = True
                    continue
                elif '=======' in line:
                    skip_until_equals = False
                    continue
                elif '>>>>>>>' in line:
                    continue
                elif not skip_until_equals:
                    cleaned_lines.append(line)
            
            # Write the cleaned content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(cleaned_lines))
                
            print(f"   ✅ Cleaned {file_path}")
            
        except Exception as e:
            print(f"   ❌ Error cleaning {file_path}: {e}")
    
    print("🎉 Merge conflict cleanup completed!")

def main():
    """Main function."""
    print("🎯 Zion Tech Group - Merge Conflict Cleanup")
    print("=" * 50)
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Clean up merge conflicts
    clean_merge_conflicts()
    
    # Add and commit the cleaned files
    print("📝 Committing cleaned files...")
    run_command("git add -A")
    run_command("git commit -m 'Clean up merge conflict markers from all files'")
    
    print("✅ Cleanup completed!")

if __name__ == "__main__":
    main()