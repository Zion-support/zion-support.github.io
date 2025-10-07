#!/usr/bin/env python3
"""
Fix specific merge conflicts by choosing the main branch version
"""
import os
import re
from pathlib import Path

def fix_conflicts_in_file(file_path):
    """Fix merge conflicts in a specific file by choosing main branch version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing conflicts in {file_path}")
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> origin/main'
        
        def resolve_conflict(match):
            main_content = match.group(1)
            return main_content.strip()
        
        # Replace all conflict blocks with main branch content
        resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining artifacts
        resolved_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', resolved_content)  # Remove excessive newlines
        resolved_content = re.sub(r'^\s*\n', '', resolved_content, flags=re.MULTILINE)  # Remove leading empty lines
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix conflicts in specific files"""
    files_to_fix = [
        '/workspace/api/onsite-request.js',
        '/workspace/api/shipping-rates.js',
        '/workspace/api/subscribe.js',
        '/workspace/api/wallet.js',
        '/workspace/lib/error-handler.ts',
        '/workspace/lib/integrations/connectors.ts',
        '/workspace/lib/integrations/fileStore.ts',
        '/workspace/lib/integrations/registry.ts',
        '/workspace/lib/integrations/types.ts',
        '/workspace/lib/performance.ts',
        '/workspace/lib/security.js',
        '/workspace/tsconfig.json'
    ]
    
    resolved_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_conflicts_in_file(file_path):
                resolved_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()