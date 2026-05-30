#!/usr/bin/env python3
"""
AI Code Review Script
Analyzes code for common issues, security vulnerabilities, and best practices.
Usage: python3 scripts/ai_code_review.py <file_path>
"""

import sys
import os
import re
from datetime import datetime

CHECKS = {
    "security": [
        (r"eval\(", "⚠️ SECURITY: eval() detected - potential code injection risk"),
        (r"innerHTML\s*=", "⚠️ SECURITY: innerHTML assignment - XSS risk, use textContent instead"),
        (r"dangerouslySetInnerHTML", "⚠️ SECURITY: dangerouslySetInnerHTML - sanitize HTML first"),
        (r"localStorage\.setItem\s*\([^,\s]+,\s*[^)]*(password|token|secret|key)", "⚠️ SECURITY: Storing sensitive data in localStorage"),
    ],
    "performance": [
        (r"for\s*\(.+\)\s*\{[^}]*\.push\(", "💡 PERF: Array.push in loop - consider pre-allocating or using map"),
        (r"\.find\([^)]+\)\?\.find\(", "💡 PERF: Nested .find() - consider combining into single pass"),
        (r"useEffect\([^,]+\)", "💡 PERF: useEffect without dependency array - may cause infinite re-renders"),
        (r"import\s+\*\s+as\s+\w+\s+from", "💡 PERF: Namespace import - use tree-shakable named imports"),
    ],
    "typescript": [
        (r":\s*any\b", "📝 TS: 'any' type detected - use specific types for better type safety"),
        (r"@ts-ignore", "📝 TS: @ts-ignore detected - fix the underlying type issue"),
        (r"@ts-nocheck", "📝 TS: @ts-nocheck detected - review entire file for type issues"),
        (r"as\s+(any|unknown)", "📝 TS: Type assertion to any/unknown - use proper type guards"),
    ],
    "nextjs": [
        (r"getServerSideProps", "🔄 Next.js: getServerSideProps - consider App Router with async components"),
        (r"getStaticProps", "🔄 Next.js: getStaticProps - consider App Router with generateStaticParams"),
        (r"useEffect\(\(\)\s*=>\s*\{[^}]*fetch\(", "🔄 Next.js: Client-side fetch in useEffect - use Server Components instead"),
        (r"window\.(location|navigator)", "🔄 Next.js: Browser API in component - wrap in useEffect or add 'use client'"),
    ],
    "accessibility": [
        (r"<img\s+[^>]*>(?!.*alt=)", "♿ A11Y: Image missing alt text"),
        (r"<button[^>]*>(?:\s|&nbsp;)*</button>", "♿ A11Y: Empty button - add accessible label"),
        (r"onClick=\{[^}]+\}[^>]*>(?!.*<button)", "♿ A11Y: Click handler on non-interactive element - use <button> or add role"),
        (r"<a\s+[^>]*href=['\"]#['\"]", "♿ A11Y: Anchor with href='#' - use <button> for non-navigation actions"),
    ],
    "react": [
        (r"React\.FC\b", "📝 React: React.FC is deprecated - use function components directly"),
        (r"componentWillMount|componentWillReceiveProps|componentWillUpdate", "⚠️ React: Legacy lifecycle methods - use modern alternatives"),
        (r"\.bind\(this\)", "💡 React: .bind(this) in render - move to constructor or use arrow functions"),
        (r"useState\([^)]+\)\s*\[\s*\w+\s*,\s*set", "📝 React: Ensure setter functions follow naming convention (setX for x state)"),
    ],
}

def review_file(file_path: str) -> list:
    issues = []
    
    if not os.path.exists(file_path):
        return [f"❌ File not found: {file_path}"]
    
    with open(file_path, "r") as f:
        content = f.read()
    
    for category, patterns in CHECKS.items():
        for pattern, message in patterns:
            matches = re.findall(pattern, content, re.IGNORECASE | re.MULTILINE)
            for match in matches:
                # Get line number
                lines = content[:content.find(match if isinstance(match, str) else str(match))].count('\n') + 1
                issues.append(f"  {message} (line ~{lines})")
    
    return issues

def review_directory(dir_path: str) -> dict:
    results = {}
    for root, dirs, files in os.walk(dir_path):
        # Skip node_modules and __pycache__
        dirs[:] = [d for d in dirs if d not in ['node_modules', '__pycache__', '.git', '.next']]
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.py')):
                file_path = os.path.join(root, file)
                issues = review_file(file_path)
                if issues:
                    results[file_path] = issues
    return results

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 ai_code_review.py <file_or_directory_path>")
        sys.exit(1)
    
    target = sys.argv[1]
    total_issues = 0
    
    print(f"🔍 AI Code Review - {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"{'='*60}\n")
    
    if os.path.isfile(target):
        issues = review_file(target)
        if issues:
            print(f"📄 {target}:")
            for issue in issues:
                print(f"  {issue}")
                total_issues += 1
        else:
            print(f"✅ {target}: No issues found!")
    elif os.path.isdir(target):
        results = review_directory(target)
        available_review = len(results)
        for file_path, issues in results.items():
            print(f"📄 {file_path}:")
            for issue in issues:
                print(f"  {issue}")
                total_issues += 1
            print()
        
        if not results:
            print(f"✅ No issues found in {target}!")
    
    print(f"\n{'='*60}")
    print(f"📊 Total issues found: {total_issues}")
    
    if total_issues > 0:
        print("🔧 Run with --fix to auto-fix simple issues")
    
    return total_issues

if __name__ == "__main__":
    sys.exit(main())
