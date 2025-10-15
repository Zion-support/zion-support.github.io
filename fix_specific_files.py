#!/usr/bin/env python3
"""
Script to fix specific files with parsing errors
"""
import os
import re

def fix_advanced_security_suite():
    """Fix advanced-security-suite/page.tsx"""
    file_path = '/workspace/app/advanced-security-suite/page.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix malformed class names
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    content = re.sub(r'b g-gradient-to-rfrom-', 'bg-gradient-to-r from-', content)
    content = re.sub(r'to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300', 'to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300', content)
    content = re.sub(r'b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors', 'border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed advanced-security-suite/page.tsx")

def fix_ai_analytics_dashboard_pro():
    """Fix ai-analytics-dashboard-pro/page.tsx"""
    file_path = '/workspace/app/ai-analytics-dashboard-pro/page.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix malformed class names
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    content = re.sub(r'm in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20', 'flex space-x-4', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed ai-analytics-dashboard-pro/page.tsx")

def main():
    """Main function"""
    fix_advanced_security_suite()
    fix_ai_analytics_dashboard_pro()
    print("Fixed specific files with parsing errors")

if __name__ == "__main__":
    main()