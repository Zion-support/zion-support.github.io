#!/usr/bin/env python3
"""
Script to fix the most critical files that are causing build failures
"""
import os
import re
import glob

def clean_file_content(content):
    """Clean up file content by removing malformed syntax"""
    lines = content.split('\n')
    cleaned_lines = []
    
    for line in lines:
        # Remove extra semicolons and quotes that were incorrectly added
        line = re.sub(r'";$', '";', line)
        line = re.sub(r'";$', '";', line)
        line = re.sub(r'": value$', '', line)
        line = re.sub(r'";$', '";', line)
        line = re.sub(r';\s*$', ';', line)
        
        # Fix unterminated strings
        if line.count('"') % 2 == 1 and not line.strip().endswith('"'):
            line = line.rstrip() + '"'
        
        # Fix malformed JSX
        line = re.sub(r'<([^>]+)\s*$', r'<\1>', line)
        
        # Remove standalone semicolons
        if line.strip() == ';':
            continue
            
        cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def process_critical_files():
    """Process the most critical files that are causing issues"""
    critical_files = [
        'api/error-report.js',
        'api/newsletter/subscribe.js', 
        'api/quotes.js',
        'api/subscribe.js',
        'api/wallet.js',
        'api/create-checkout-session.js',
        'api/create-payment-intent.js',
        'api/onsite-request.js'
    ]
    
    for file_path in critical_files:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Clean merge conflicts
                content = re.sub(r'<<<<<<<.*?\n', '', content, flags=re.DOTALL)
                content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
                content = re.sub(r'>>>>>>>.*?\n', '', content, flags=re.DOTALL)
                
                # Clean content
                content = clean_file_content(content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed: {file_path}")
                
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    process_critical_files()