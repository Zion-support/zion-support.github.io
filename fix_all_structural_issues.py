#!/usr/bin/env python3
"""
Comprehensive script to fix all structural issues after merge conflicts
"""
import os
import subprocess
import re
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def fix_jsx_structure(file_path):
    """Fix JSX structure issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix missing closing tags by adding them at the end
        # Count opening and closing tags
        open_tags = re.findall(r'<(\w+)(?:\s[^>]*)?>', content)
        close_tags = re.findall(r'</(\w+)>', content)
        
        # Find unclosed tags
        tag_counts = {}
        for tag in open_tags:
            tag_counts[tag] = tag_counts.get(tag, 0) + 1
        for tag in close_tags:
            tag_counts[tag] = tag_counts.get(tag, 0) - 1
        
        # Add missing closing tags
        missing_closes = []
        for tag, count in tag_counts.items():
            if count > 0:
                missing_closes.extend([f'</{tag}>'] * count)
        
        # Add missing closing tags before the last closing brace
        if missing_closes:
            # Find the last closing brace and add tags before it
            last_brace = content.rfind('}')
            if last_brace != -1:
                content = content[:last_brace] + '\n' + '\n'.join(missing_closes) + '\n' + content[last_brace:]
        
        # Fix common JSX issues
        # Fix missing closing divs
        content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
        
        # Fix missing closing sections
        content = re.sub(r'<section([^>]*)>\s*$', r'<section\1></section>', content, flags=re.MULTILINE)
        
        # Fix malformed JSX elements
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Fix missing semicolons in imports
        content = re.sub(r'import\s+([^;]+)\s*$', r'import \1;', content, flags=re.MULTILINE)
        
        # Fix missing closing parentheses
        content = re.sub(r'(\w+)\s*$', r'\1)', content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed JSX structure in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_app_tsx():
    """Fix the main App.tsx file specifically"""
    try:
        with open('App.tsx', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the problematic section and fix it
        # Look for the PerformanceOptimizer section
        pattern = r'(<PerformanceOptimizer[^>]*>.*?)(</PerformanceOptimizer>)'
        if not re.search(pattern, content, re.DOTALL):
            # Add missing closing tags
            content = content.replace(
                '<PerformanceOptimizer>',
                '<PerformanceOptimizer></PerformanceOptimizer>'
            )
            content = content.replace(
                '<EnhancedAnalytics>',
                '<EnhancedAnalytics></EnhancedAnalytics>'
            )
            content = content.replace(
                '<AnalyticsProvider>',
                '<AnalyticsProvider></AnalyticsProvider>'
            )
            content = content.replace(
                '<ErrorBoundary>',
                '<ErrorBoundary></ErrorBoundary>'
            )
            content = content.replace(
                '<HelmetProvider>',
                '<HelmetProvider></HelmetProvider>'
            )
        
        with open('App.tsx', 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("Fixed App.tsx structure")
        return True
    except Exception as e:
        print(f"Error fixing App.tsx: {e}")
        return False

def fix_partners_page():
    """Fix the partners page specifically"""
    try:
        with open('app/partners/page.tsx', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the malformed import statements
        content = re.sub(r'import\s+([^;]+)\s*$', r'import \1;', content, flags=re.MULTILINE)
        
        # Fix the structure
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{', r'const \1 = () => {', content)
        
        with open('app/partners/page.tsx', 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("Fixed partners page")
        return True
    except Exception as e:
        print(f"Error fixing partners page: {e}")
        return False

def main():
    """Main function to fix all structural issues"""
    print("🔧 Starting comprehensive structural fixes...")
    
    # Fix App.tsx first
    fix_app_tsx()
    
    # Fix partners page
    fix_partners_page()
    
    # Get all TypeScript/TSX files
    success, stdout, stderr = run_command("find app -name '*.tsx' -o -name '*.ts' | head -20")
    if not success:
        print(f"Error finding files: {stderr}")
        return
    
    files = stdout.strip().split('\n')
    
    fixed_count = 0
    for file_path in files:
        if file_path.strip() and os.path.exists(file_path):
            if fix_jsx_structure(file_path):
                fixed_count += 1
    
    print(f"\n📊 Fixed {fixed_count} files")
    
    # Run type check to see remaining issues
    print("\n🔍 Running type check...")
    success, stdout, stderr = run_command("npm run type-check")
    if success:
        print("✅ Type check passed!")
    else:
        print(f"⚠️  Type check issues remain: {stderr[:500]}...")

if __name__ == "__main__":
    main()