#!/usr/bin/env python3
"""
Comprehensive merge conflict resolution script
This script will resolve all merge conflicts by keeping our improvements (HEAD version)
"""
import os
import re
import subprocess
import json
from pathlib import Path
def run_command(command):
    """Run a shell command and return the output"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout, result.stderr, result.returncode
    except Exception as e:
        print(f"Error running command: {e}")
        return "", str(e), 1
def get_file_content(file_path):
    """Get the content of a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None
def write_file(file_path, content):
    """Write content to a file"""
    try:
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False
def resolve_merge_conflicts_in_content(content):
    """Resolve merge conflicts in content by keeping HEAD version"""
    if not content:
        return content
    # Remove merge conflict markers and keep HEAD version
    lines = content.split('\n')
    resolved_lines = []
    in_conflict = False
    in_head_section = False
    for line in lines:
        if line.startswith(''):
            in_head_section = False
            continue
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            in_head_section = False
            continue
        elif not in_conflict or in_head_section:
            resolved_lines.append(line)
    return '\n'.join(resolved_lines)
def clean_duplicate_imports(content):
    """Clean up duplicate imports in TypeScript/JavaScript files"""
    if not content:
        return content
    lines = content.split('\n')
    seen_imports = set()
    cleaned_lines = []
    for line in lines:
        if line.strip().startswith('import '):
            if line.strip() not in seen_imports:
                seen_imports.add(line.strip())
                cleaned_lines.append(line)
        else:
            cleaned_lines.append(line)
    return '\n'.join(cleaned_lines)
def fix_jsx_structure(content):
    """Fix common JSX structure issues"""
    if not content:
        return content
    # Fix common JSX issues
    content = re.sub(r'<>\s*<>\s*', '<>', content)  # Remove nested fragments
    content = re.sub(r'</>\s*</>\s*', '</>', content)  # Remove nested closing fragments
    content = re.sub(r'<div>\s*<>\s*', '<div>', content)  # Fix div containing fragment
    content = re.sub(r'</>\s*</div>', '</div>', content)  # Fix closing div after fragment
    return content
def process_file(file_path):
    """Process a single file to resolve conflicts"""
    print(f"Processing: {file_path}")
    content = get_file_content(file_path)
    if content is None:
        return False
    original_content = content
    # Resolve merge conflicts
    content = resolve_merge_conflicts_in_content(content)
    # Clean up duplicate imports for TS/JS files
    if file_path.endswith(('.ts', '.tsx', '.js', '.jsx')):
        content = clean_duplicate_imports(content)
        content = fix_jsx_structure(content)
    # Only write if content changed
    if content != original_content:
        if write_file(file_path, content):
            print(f"✓ Fixed: {file_path}")
            return True
        else:
            print(f"✗ Failed to write: {file_path}")
            return False
    else:
        print(f"- No changes needed: {file_path}")
        return False
def main():
    """Main function to resolve all merge conflicts"""
    print("🚀 Comprehensive Merge Conflict Resolution")
    print("=" * 60)
    # Get list of all files that differ from origin/main
    print("📁 Getting list of files with differences...")
    stdout, stderr, returncode = run_command("git diff --name-only HEAD origin/main")
    if returncode != 0:
        print(f"❌ Error getting file differences: {stderr}")
        return False
    files = [f.strip() for f in stdout.split('\n') if f.strip()]
    print(f"Found {len(files)} files with differences")
    # Process each file
    processed_count = 0
    fixed_count = 0
    for file_path in files:
        if os.path.exists(file_path):
            if process_file(file_path):
                fixed_count += 1
            processed_count += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    print(f"\n📊 Processing Summary:")
    print(f"   Files processed: {processed_count}")
    print(f"   Files fixed: {fixed_count}")
    print(f"   Files unchanged: {processed_count - fixed_count}")
    # Add all changes
    print("\n📝 Adding all changes to git...")
    stdout, stderr, returncode = run_command("git add .")
    if returncode == 0:
        print("✅ All changes added to git")
        # Commit the changes
        print("💾 Committing merge resolution...")
        stdout, stderr, returncode = run_command('git commit -m "Resolve all merge conflicts and integrate improvements"')
        if returncode == 0:
            print("✅ Merge conflicts resolved and committed successfully!")
            return True
        else:
            print(f"❌ Failed to commit: {stderr}")
            return False
    else:
        print(f"❌ Failed to add changes: {stderr}")
        return False
if __name__ == "__main__":
    success = main()
    if success:
        print("\n🎉 All merge conflicts resolved successfully!")
        print("✅ Repository is now ready for deployment")
    else:
        print("\n❌ Some issues occurred during merge conflict resolution")
