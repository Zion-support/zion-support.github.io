#!/usr/bin/env python3
"""
Script to fix remaining syntax issues in blog pages after merge conflict resolution.
"""

import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix JSX syntax issues."""
    # Fix className attributes with missing spaces
    content = re.sub(r"className='([^']*)'", r"className='\1'", content)
    content = re.sub(r'className="([^"]*)"', r'className="\1"', content)
    
    # Fix missing spaces in className values
    content = re.sub(r"className='([^']*)([a-z])([A-Z])([^']*)'", r"className='\1\2 \3\4'", content)
    
    # Fix missing spaces between words in className
    content = re.sub(r"className='([^']*)([a-z])([A-Z])([^']*)'", r"className='\1\2 \3\4'", content)
    
    # Fix class Name -> className
    content = re.sub(r'class Name=', 'className=', content)
    
    # Fix mainclass -> main className
    content = re.sub(r'<mainclass', '<main className', content)
    content = re.sub(r'<sectionclass', '<section className', content)
    content = re.sub(r'<divclass', '<div className', content)
    content = re.sub(r'<h1class', '<h1 className', content)
    content = re.sub(r'<spanclass', '<span className', content)
    content = re.sub(r'<pclass', '<p className', content)
    content = re.sub(r'<divclass', '<div className', content)
    
    # Fix missing spaces in JSX attributes
    content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)([a-zA-Z])([A-Z])', r'<\1\2 \3', content)
    
    # Fix missing spaces in text content
    content = re.sub(r'([a-z])([A-Z])', r'\1 \2', content)
    
    # Fix specific patterns
    content = re.sub(r'Guardrails2026:', 'Guardrails 2026:', content)
    content = re.sub(r'BudgetsApprovalsand', 'Budgets, Approvals, and', content)
    content = re.sub(r'budgetedactions', 'budgeted actions', content)
    content = re.sub(r'CI policytestsand', 'CI policy tests, and', content)
    
    return content

def fix_metadata_syntax(content):
    """Fix metadata syntax issues."""
    # Fix missing semicolon at end of metadata
    if 'export const metadata' in content and not content.strip().endswith(';'):
        # Find the last closing brace of metadata
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if 'export const metadata' in line:
                # Find the matching closing brace
                brace_count = 0
                for j in range(i, len(lines)):
                    for char in lines[j]:
                        if char == '{':
                            brace_count += 1
                        elif char == '}':
                            brace_count -= 1
                            if brace_count == 0:
                                # Add semicolon after the closing brace
                                lines[j] = lines[j] + ';'
                                break
                break
        content = '\n'.join(lines)
    
    return content

def process_file(file_path):
    """Process a single file to fix syntax issues."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has syntax issues
        if 'class Name=' in content or 'mainclass' in content or 'sectionclass' in content:
            print(f"Processing: {file_path}")
            
            # Fix JSX syntax issues
            content = fix_jsx_syntax(content)
            
            # Fix metadata syntax
            content = fix_metadata_syntax(content)
            
            # Write back the fixed content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✓ Fixed syntax in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all blog files."""
    # Find all blog files
    blog_files = glob.glob('app/blog/**/page.tsx', recursive=True)
    
    fixed_count = 0
    total_files = 0
    
    for file_path in blog_files:
        if os.path.exists(file_path):
            total_files += 1
            if process_file(file_path):
                fixed_count += 1
    
    print(f"\nSummary:")
    print(f"Total files processed: {total_files}")
    print(f"Files fixed: {fixed_count}")

if __name__ == "__main__":
    main()