#!/usr/bin/env python3
"""
Comprehensive script to clean up merge conflicts and syntax errors
"""
import os
import re
import glob

def clean_file_comprehensive(file_path):
    """Comprehensive cleanup of a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers completely
        content = re.sub(r'<<<<<<< [^\n]+\n.*?\n=======.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< [^\n]+.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Fix duplicate function declarations - keep only the last one
        # Pattern: export default function FunctionName
        function_pattern = r'export default function (\w+)\s*\([^)]*\)\s*\{[^}]*\}(?=\s*export default function \1)'
        content = re.sub(function_pattern, '', content, flags=re.DOTALL)
        
        # Fix incomplete JSX elements - remove incomplete opening tags
        content = re.sub(r'<div[^>]*>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix incomplete function declarations
        content = re.sub(r'export default function \w+\s*\([^)]*\)\s*\{\s*$', '', content, flags=re.MULTILINE)
        
        # Remove empty lines and clean up spacing
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Remove trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific problematic files manually"""
    fixes = {
        '/workspace/app/about/page.tsx': '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      expertise: "AI Strategy & Business Development",
      image: "/images/team/sarah-chen.jpg",
      bio: "15+ years in AI and machine learning, former Google AI researcher."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      expertise: "Full-Stack Development & Cloud Architecture",
      image: "/images/team/michael-rodriguez.jpg",
      bio: "Expert in scalable systems and modern web technologies."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      expertise: "Machine Learning & Neural Networks",
      image: "/images/team/emily-watson.jpg",
      bio: "PhD in Computer Science, specializing in deep learning applications."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize advanced AI and cloud technologies, making them accessible 
              to businesses of all sizes while maintaining the highest standards of 
              security, performance, and innovation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Brain className="w-6 h-6 text-blue-400 mr-3" />
                <span>Advanced AI Solutions</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-6 h-6 text-purple-400 mr-3" />
                <span>Expert Team Support</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 10+ years of industry experience</li>
              <li>• 500+ successful projects delivered</li>
              <li>• 24/7 technical support</li>
              <li>• Cutting-edge technology stack</li>
              <li>• Proven track record of success</li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}''',
        
        '/workspace/app/components/FuturisticText.tsx': '''import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticText({ className = '', children, ...props }: FuturisticTextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}'''
    }
    
    for file_path, content in fixes.items():
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

def main():
    """Main function to clean all files"""
    # Fix specific problematic files first
    fix_specific_files()
    
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_clean)} files to clean")
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if clean_file_comprehensive(file_path):
            cleaned_count += 1
    
    print(f"Successfully cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()