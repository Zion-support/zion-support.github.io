#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining merge conflict issues and syntax errors.
"""

import os
import re
import glob

def fix_component_file(file_path):
    """Fix a specific component file with common issues."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        cleaned_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                if line not in seen_imports:
                    seen_imports.add(line)
                    cleaned_lines.append(line)
            else:
                cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Fix common syntax issues
        # Remove orphaned closing braces
        content = re.sub(r'^\s*}\s*$', '', content, flags=re.MULTILINE)
        
        # Fix orphaned return statements
        content = re.sub(r'^\s*return null;\s*$', '', content, flags=re.MULTILINE)
        
        # Fix orphaned export statements
        content = re.sub(r'^\s*export default.*?;\s*$', '', content, flags=re.MULTILINE)
        
        # Remove duplicate function declarations
        content = re.sub(r'const isActive = \(path: string\) => \{\s*return location\.pathname === path;\s*\};\s*const isActive = \(path: string\) => \{\s*return location\.pathname === path;\s*\};', 
                        'const isActive = (path: string) => {\n    return location.pathname === path;\n  };', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def create_clean_component(file_path, component_name):
    """Create a clean version of a component file."""
    if 'Navigation' in file_path:
        content = '''import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Users,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-lg shadow-lg border border-white/10 py-2">
                    <Link
                      to="/ai-services"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/micro-saas"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      Micro SAAS
                    </Link>
                    <Link
                      to="/5g-solutions"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      5G Solutions
                    </Link>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      All Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-400 bg-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
'''
    elif 'Footer' in file_path:
        content = '''import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Services</h3>
            <div className="space-y-2">
              <Link to="/ai-services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                AI Services
              </Link>
              <Link to="/micro-saas" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Micro SAAS
              </Link>
              <Link to="/5g-solutions" className="block text-gray-300 hover:text-white transition-colors text-sm">
                5G Solutions
              </Link>
              <Link to="/web-development" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Web Development
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'''
    elif 'Sidebar' in file_path:
        content = '''import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-80 bg-black/90 backdrop-blur-md border-l border-white/10 z-50">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            to="/ai-services"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            AI Services
          </Link>
          <Link
            to="/micro-saas"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            Micro SAAS
          </Link>
          <Link
            to="/5g-solutions"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            5G Solutions
          </Link>
          <Link
            to="/blog"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-gray-300 hover:text-white transition-colors py-2"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
'''
    else:
        return False
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    return True

def main():
    """Main function to fix all component files."""
    component_files = [
        'app/components/Navigation.tsx',
        'app/components/Footer.tsx',
        'app/components/Sidebar.tsx',
        'app/components/LoadingStates.tsx',
        'app/components/EnhancedErrorBoundary.tsx',
        'app/components/EnhancedErrorFeedback.tsx',
        'app/components/Breadcrumb.tsx',
        'app/components/AnalyticsProvider.tsx',
        'app/components/PerformanceMonitor.tsx',
        'app/components/AccessibilityEnhancer.tsx',
        'app/components/CoreWebVitals.tsx',
        'app/components/FuturisticBackground.tsx',
        'app/components/EnhancedSEO.tsx',
        'app/components/FuturisticButton.tsx',
        'app/components/WebVitalsTracker.tsx'
    ]
    
    for file_path in component_files:
        if os.path.exists(file_path):
            if create_clean_component(file_path, file_path.split('/')[-1].replace('.tsx', '')):
                print(f"Created clean version of {file_path}")
            else:
                print(f"Failed to create clean version of {file_path}")

if __name__ == "__main__":
    main()