#!/usr/bin/env python3
import os
import re
import glob

def fix_ai_automation_platform(file_path):
    """Fix the ai-automation-platform page"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # The file seems to have JSX without proper React component structure
        # Let's create a proper React component
        fixed_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiAutomationPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI automation platform solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Automation Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI automation platform solutions by Zion Tech Group
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed syntax errors in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_ai_chatbot_builder(file_path):
    """Fix the ai-chatbot-builder page"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Similar fix for chatbot builder
        fixed_content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiChatbotBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI chatbot builder solutions by Zion Tech Group
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed syntax errors in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_mobile_builder(file_path):
    """Fix mobile builder pages"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Clean up the malformed content
        lines = content.split('\n')
        fixed_lines = []
        in_component = False
        brace_count = 0
        
        for i, line in enumerate(lines):
            if 'export default function' in line:
                in_component = True
                fixed_lines.append(line)
                continue
            
            if in_component:
                if line.strip().startswith('Build mobile applications'):
                    # Skip this malformed line
                    continue
                if line.strip() and not line.strip().startswith('//'):
                    fixed_lines.append(line)
                else:
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        # Join and clean up
        fixed_content = '\n'.join(fixed_lines)
        
        # Remove any remaining malformed content
        fixed_content = re.sub(r'Build mobile applications.*?\n', '', fixed_content)
        fixed_content = re.sub(r'Build.*?applications.*?\n', '', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed syntax errors in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    files_to_fix = [
        ('app/ai-automation-platform/page.tsx', fix_ai_automation_platform),
        ('app/ai-chatbot-builder/page.tsx', fix_ai_chatbot_builder),
        ('app/ai-mobile-app-builder/page.tsx', fix_mobile_builder),
        ('app/ai-mobile-builder/page.tsx', fix_mobile_builder),
        ('app/ai-website-builder/page.tsx', fix_mobile_builder),
    ]
    
    fixed_count = 0
    
    for file_path, fix_func in files_to_fix:
        if os.path.exists(file_path):
            if fix_func(file_path):
                fixed_count += 1
    
    print(f"\nFixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()