#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing brackets and syntax issues
    const fixes = [
      // Fix missing closing brackets in arrays/objects
      { pattern: /(\s+const\s+\w+\s*=\s*\[[^]]*?)(\s+const\s+\w+\s*=\s*\[)/g, replacement: '$1];\n  $2' },
      
      // Fix missing semicolons after array declarations
      { pattern: /(\s+const\s+\w+\s*=\s*\[[^]]*?)(\s+const\s+\w+\s*=\s*\[)/g, replacement: '$1];\n  $2' },
      
      // Fix missing closing tags in JSX
      { pattern: /<Link([^>]*?)>([^<]*?)(?=\s*const|\s*<\/|$)/g, replacement: '<Link$1>$2</Link>' },
      
      // Fix missing closing div tags
      { pattern: /<div([^>]*?)>([^<]*?)(?=\s*const|\s*<\/|$)/g, replacement: '<div$1>$2</div>' },
      
      // Fix missing closing ul tags
      { pattern: /<ul([^>]*?)>([^<]*?)(?=\s*const|\s*<\/|$)/g, replacement: '<ul$1>$2</ul>' },
      
      // Fix missing closing li tags
      { pattern: /<li([^>]*?)>([^<]*?)(?=\s*const|\s*<\/|$)/g, replacement: '<li$1>$2</li>' },
      
      // Fix missing closing footer tags
      { pattern: /<footer([^>]*?)>([^<]*?)(?=\s*const|\s*<\/|$)/g, replacement: '<footer$1>$2</footer>' },
      
      // Fix missing closing nav tags
      { pattern: /<nav([^>]*?)>([^<]*?)(?=\s*const|\s*<\/|$)/g, replacement: '<nav$1>$2</nav>' },
      
      // Fix duplicate imports
      { pattern: /import\s+React[^;]*?;\s*import\s+React[^;]*?;/g, replacement: 'import React from \'react\';' },
      
      // Fix missing semicolons
      { pattern: /(\w+)\s*const\s+(\w+)/g, replacement: '$1;\n  const $2' },
      
      // Fix missing commas in arrays
      { pattern: /(\]\s*)(\s*const\s+\w+\s*=\s*\[)/g, replacement: '$1,\n  $2' },
      
      // Fix missing closing parentheses
      { pattern: /(\w+)\s*(\s*const\s+\w+\s*=\s*\[)/g, replacement: '$1);\n  $2' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to completely rewrite problematic files
function rewriteProblematicFile(filePath) {
  try {
    if (filePath.includes('Footer.tsx')) {
      const footerContent = `import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
      { name: 'Digital Transformation', href: '/digital-transformation' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' }
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              Zion Tech Group
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate and grow in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;
      fs.writeFileSync(filePath, footerContent, 'utf8');
      return true;
    }
    
    if (filePath.includes('Navigation.tsx')) {
      const navContent = `import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={\`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors \${
                    isActive(item.href)
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }\`}
                  onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={\`block px-3 py-2 rounded-md text-base font-medium \${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }\`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-slate-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;`;
      fs.writeFileSync(filePath, navContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error rewriting ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Fixing syntax errors in key files...');

const keyFiles = [
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/components/Header.tsx',
  '/workspace/app/contact/page.tsx',
  '/workspace/app/demo/page.tsx',
  '/workspace/app/services/page.tsx',
  '/workspace/app/support/page.tsx'
];

let fixedCount = 0;
let errorCount = 0;

keyFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (rewriteProblematicFile(filePath)) {
      fixedCount++;
    } else if (fixSyntaxErrors(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`  ✅ Fixed: ${fixedCount} files`);
console.log(`  ❌ Errors: ${errorCount} files`);

if (errorCount > 0) {
  console.log('\n⚠️  Some files could not be automatically fixed.');
} else {
  console.log('\n🎉 Key files fixed successfully!');
}