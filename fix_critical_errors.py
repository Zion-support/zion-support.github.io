#!/usr/bin/env python3
"""
Targeted script to fix critical parsing errors in TSX files
"""
import os
import re
import glob

def fix_critical_jsx_errors(content):
    """Fix critical JSX parsing errors"""
    # Fix malformed title tags
    content = re.sub(r'<title />', '<title>', content)
    
    # Fix malformed Helmet closing tags
    content = re.sub(r'</Helmet>\s*/>', '</Helmet>', content)
    
    # Fix malformed div closing tags
    content = re.sub(r'</div>\s*/>', '</div>', content)
    
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*</>\s*</>', '</>', content)
    
    # Fix malformed className attributes with spaces
    content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
    
    # Fix malformed template literals
    content = re.sub(r'className="\{`([^`]*?)`\}"', r'className={`\1`}', content)
    
    # Fix malformed JSX elements
    content = re.sub(r'<div key="\{([^}]+)\}"', r'<div key={\1}', content)
    content = re.sub(r'<li key="\{([^}]+)\}"', r'<li key={\1}', content)
    content = re.sub(r'<Star key="\{([^}]+)\}"', r'<Star key={\1}', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</h1>\s*/>', '</h1>', content)
    content = re.sub(r'</h2>\s*/>', '</h2>', content)
    content = re.sub(r'</h3>\s*/>', '</h3>', content)
    content = re.sub(r'</p>\s*/>', '</p>', content)
    content = re.sub(r'</ul>\s*/>', '</ul>', content)
    content = re.sub(r'</li>\s*/>', '</li>', content)
    content = re.sub(r'</Link>\s*/>', '</Link>', content)
    content = re.sub(r'</Star>\s*/>', '</Star>', content)
    content = re.sub(r'</section>\s*/>', '</section>', content)
    content = re.sub(r'</article>\s*/>', '</article>', content)
    content = re.sub(r'</header>\s*/>', '</header>', content)
    content = re.sub(r'</footer>\s*/>', '</footer>', content)
    content = re.sub(r'</main>\s*/>', '</main>', content)
    content = re.sub(r'</aside>\s*/>', '</aside>', content)
    content = re.sub(r'</nav>\s*/>', '</nav>', content)
    
    # Fix malformed self-closing tags that should be regular tags
    content = re.sub(r'<div key="\{([^}]+)\}" className="([^"]*)" />', r'<div key={\1} className="\2">', content)
    content = re.sub(r'<li key="\{([^}]+)\}" className="([^"]*)" />', r'<li key={\1} className="\2">', content)
    content = re.sub(r'<Star key="\{([^}]+)\}" className="([^"]*)" />', r'<Star key={\1} className="\2">', content)
    
    # Fix malformed sections
    content = re.sub(r'<section className="w-5h-5m l-2" />', '<section className="py-16">', content)
    
    # Fix malformed divs with classes
    content = re.sub(r'<div className="mi n-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">', '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">', content)
    
    # Fix malformed headings
    content = re.sub(r'<h2 className="w-5h-5m l-2" />', '<h2 className="text-3xl font-bold text-white mb-4">', content)
    content = re.sub(r'<h3 className="w-5h-5m l-2" />', '<h3 className="text-xl font-semibold text-white mb-2">', content)
    content = re.sub(r'<p className="w-5h-5m l-2">', '<p className="text-gray-300 mb-4">', content)
    
    # Fix malformed spans
    content = re.sub(r'<span className="w-5h-5m l-2" />', '<span className="text-4xl font-bold text-white">', content)
    
    # Fix malformed ul elements
    content = re.sub(r'<ul className="w-5h-5m l-2" />', '<ul className="space-y-2">', content)
    
    return content

def fix_syntax_errors(content):
    """Fix syntax errors"""
    # Fix malformed CSS classes
    content = re.sub(r'w-5h-5m l-2', 'w-5 h-5 ml-2', content)
    content = re.sub(r'w-8h-8', 'w-8 h-8', content)
    content = re.sub(r'w-6h-6', 'w-6 h-6', content)
    content = re.sub(r'text-lgtext-gray-300mb-8', 'text-lg text-gray-300 mb-8', content)
    content = re.sub(r'text-xl text-gray-300mb-8', 'text-xl text-gray-300 mb-8', content)
    content = re.sub(r'text-4xlmd:text-6xlfont-bold', 'text-4xl md:text-6xl font-bold', content)
    content = re.sub(r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-', content)
    content = re.sub(r'from-cyan-500to-', 'from-cyan-500 to-', content)
    content = re.sub(r'from-red-500to-', 'from-red-500 to-', content)
    content = re.sub(r'from-slate-800/50to-', 'from-slate-800/50 to-', content)
    content = re.sub(r'mx-autopx-4', 'mx-auto px-4', content)
    content = re.sub(r'flexitems-center', 'flex items-center', content)
    content = re.sub(r'transition-allduration-300', 'transition-all duration-300', content)
    content = re.sub(r'borderborder-slate-700', 'border border-slate-700', content)
    content = re.sub(r'p-6border', 'p-6 border', content)
    content = re.sub(r'p-8border', 'p-8 border', content)
    content = re.sub(r'rounded-xl p-6border', 'rounded-xl p-6 border', content)
    content = re.sub(r'rounded-xl p-8border', 'rounded-xl p-8 border', content)
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_critical_jsx_errors(content)
        content = fix_syntax_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix critical files"""
    # Focus on the most problematic files first
    critical_files = [
        'app/ai-blockchain-analytics/page.tsx',
        'app/ai-chatbot-builder/page.tsx',
        'app/ai-code-assistant-pro/page.tsx',
        'app/ai-content-moderation-pro/page.tsx',
        'app/ai-customer-insights/page.tsx',
        'app/ai-customer-support-chatbot/page.tsx',
        'app/ai-cybersecurity-monitor-pro/page.tsx',
        'app/ai-cybersecurity-suite-pro/page.tsx',
        'app/ai-devops-automation/page.tsx',
        'app/ai-email-assistant/page.tsx',
        'app/ai-email-automation/page.tsx',
        'app/ai-email-marketing-automation/page.tsx',
        'app/ai-expense-tracker/page.tsx',
        'app/ai-financial-analytics-pro/page.tsx',
        'app/ai-inventory-manager/page.tsx',
        'app/ai-invoice-generator/page.tsx',
        'app/ai-lead-scoring/page.tsx',
        'app/ai-project-management-pro/page.tsx',
        'app/ai-smart-scheduler/page.tsx',
        'app/ai-social-media-manager/page.tsx',
        'app/ai-social-scheduler/page.tsx',
        'app/ai-supply-chain-optimizer/page.tsx',
        'app/ai-time-tracker/page.tsx',
        'app/ai-translation-service/page.tsx',
        'app/ai-translation-services/page.tsx',
        'app/ai-video-editor/page.tsx',
        'app/ai-voice-assistant/page.tsx',
        'app/cloud-migration-pro/page.tsx',
        'app/cloud-migration/page.tsx',
        'app/cloud-infrastructure-management/page.tsx',
        'app/compliance/page-backup.tsx',
        'app/compliance/page-fixed.tsx',
        'app/cybersecurity-consulting/page.tsx',
        'app/cybersecurity/page.tsx',
        'app/contact/page-broken2.tsx',
        'app/contact/page.tsx',
        'app/cybersecurity-advanced/page.tsx',
        'app/cybersecurity-solutions/page.tsx',
        'app/database/page.tsx',
        'app/ai-services/page.tsx',
        'app/blockchain-web3/page.tsx',
        'app/compliance/page.tsx'
    ]
    
    print(f"Fixing {len(critical_files)} critical files")
    
    fixed_count = 0
    for file_path in critical_files:
        if os.path.exists(file_path):
            if fix_file(file_path):
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed {fixed_count} critical files")

if __name__ == "__main__":
    main()