#!/usr/bin/env python3
"""
Comprehensive script to resolve all merge conflicts
"""
import os
import re
import glob

def resolve_merge_conflicts_comprehensive(file_path):
    """Resolve merge conflicts in a single file with comprehensive handling"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '.*?        
        def resolve_conflict(match):
            conflict_text = match.group(0)
            
            # Split by             parts = conflict_text.split('            if len(parts) != 2:
                return conflict_text  # Return original if malformed
            
            # Get the incoming changes (after             incoming_part = parts[1]
            
            # Remove the             lines = incoming_part.split('\n')
            result_lines = []
            for line in lines:
                if not line.strip().startswith('>>>>>>>'):
                    result_lines.append(line)
                else:
                    break  # Stop at the             
            return '\n'.join(result_lines).strip()
        
        # Replace all conflict blocks
        resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all files with merge conflict markers
    conflict_files = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        if any(skip in root for skip in ['node_modules', '.git', 'dist', '.next', '__pycache__']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.txt', '.py', '.cjs')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        if '                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_merge_conflicts_comprehensive(file_path):
            resolved_count += 1
            print(f"Resolved conflicts in: {file_path}")
    
    print(f"Successfully resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()