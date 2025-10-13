#!/usr/bin/env python3
"""
Smart merge conflict resolver that properly handles JSX and TypeScript
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file with proper JSX handling"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts

                            current_section = 'incoming'
                        elif current_section == 'head':
                            head_lines.append(conflict_line)
                        elif current_section == 'incoming':
                            incoming_lines.append(conflict_line)
                        else:
                            # This is the first section (HEAD)
                            current_section = 'head'
                            head_lines.append(conflict_line)
                    
                    # Choose the better version (usually the incoming one)
                    # But check for common patterns
                    chosen_lines = incoming_lines
                    
                    # Special handling for specific patterns
                    if any('import' in line for line in head_lines) and any('import' in line for line in incoming_lines):
                        # Both have imports, prefer the more complete one
                        if len(incoming_lines) > len(head_lines):
                            chosen_lines = incoming_lines
                        else:
                            chosen_lines = head_lines
                    
                    # Add the chosen lines
                    new_lines.extend(chosen_lines)

                else:
                    # Malformed conflict, skip
                    i += 1
            else:
                new_lines.append(line)
                i += 1
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_merge_conflicts(file_path):
                    files_fixed += 1
                    print(f"Resolved merge conflicts in: {file_path}")
    
    print(f"\nProcessed {files_processed} files, resolved {files_fixed} files with merge conflicts")

if __name__ == "__main__":
    main()