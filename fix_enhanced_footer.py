#!/usr/bin/env python3
"""
Fix the EnhancedFooter.tsx file with proper JSX syntax.
"""

def fix_enhanced_footer():
    """Fix the EnhancedFooter.tsx file with proper JSX structure."""
    
    fixed_content = '''import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <span className="text-gray-300">contact@ziontechgroup.com</span>
              <span className="text-gray-300">+1 (555) 123-4567</span>
              <span className="text-gray-300">New York, NY</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
'''
    
    # Write the fixed content
    with open('EnhancedFooter.tsx', 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("Fixed EnhancedFooter.tsx with proper JSX structure")

if __name__ == "__main__":
    fix_enhanced_footer()