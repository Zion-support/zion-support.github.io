#!/usr/bin/env python3
"""
Comprehensive script to resolve all merge conflicts by keeping our working versions
"""
import os
import re
import subprocess
import sys

def run_command(cmd):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def resolve_merge_conflicts():
    """Resolve all merge conflicts by keeping our version"""
    print("🔧 Resolving merge conflicts...")
    
    # Get list of conflicted files
    success, output, error = run_command("git diff --name-only --diff-filter=U")
    if not success:
        print(f"❌ Error getting conflicted files: {error}")
        return False
    
    conflicted_files = [f.strip() for f in output.split('\n') if f.strip()]
    
    if not conflicted_files:
        print("✅ No merge conflicts found")
        return True
    
    print(f"📁 Found {len(conflicted_files)} conflicted files")
    
    # Resolve conflicts by keeping our version
    for file_path in conflicted_files:
        print(f"🔧 Resolving conflicts in: {file_path}")
        
        # Use git checkout --ours to keep our version
        success, output, error = run_command(f"git checkout --ours '{file_path}'")
        if not success:
            print(f"❌ Error resolving {file_path}: {error}")
            continue
        
        # Add the resolved file
        success, output, error = run_command(f"git add '{file_path}'")
        if not success:
            print(f"❌ Error adding {file_path}: {error}")
            continue
        
        print(f"✅ Resolved: {file_path}")
    
    return True

def clean_merge_markers():
    """Clean any remaining merge conflict markers"""
    print("🧹 Cleaning merge conflict markers...")
    
    # Find all files with merge conflict markers
    success, output, error = run_command("grep -r -l '
            # Pattern:  ... >>>>>>> [hash]
            pattern = r'(.*?)>>>>>>> [a-f0-9]+'
            cleaned_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
            
            # Remove any remaining stray markers
            cleaned_content = re.sub(r'', '', cleaned_content, flags=re.DOTALL)
            cleaned_content = re.sub(r'.*?>>>>>>> [a-f0-9]+', '', cleaned_content, flags=re.DOTALL)
            cleaned_content = re.sub(r'', '', cleaned_content)
            cleaned_content = re.sub(r'>>>>>>> [a-f0-9]+', '', cleaned_content)
            
            # Clean up extra whitespace
            cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            print(f"✅ Cleaned: {file_path}")
            
        except Exception as e:
            print(f"❌ Error cleaning {file_path}: {e}")
            continue
    
    return True

def main():
    """Main function"""
    print("🚀 Starting comprehensive merge conflict resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Step 1: Resolve merge conflicts
    if not resolve_merge_conflicts():
        print("❌ Failed to resolve merge conflicts")
        sys.exit(1)
    
    # Step 2: Clean any remaining merge markers
    if not clean_merge_markers():
        print("❌ Failed to clean merge markers")
        sys.exit(1)
    
    # Step 3: Add all changes
    print("📝 Adding all changes...")
    success, output, error = run_command("git add .")
    if not success:
        print(f"❌ Error adding changes: {error}")
        sys.exit(1)
    
    # Step 4: Check status
    print("📊 Checking git status...")
    success, output, error = run_command("git status")
    if success:
        print(output)
    
    print("✅ Merge conflict resolution completed!")
    return True

if __name__ == "__main__":
    main()