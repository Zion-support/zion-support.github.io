import React, { useState } from 'react';
import { Menu, X, Home, Code, Brain, Globe, Users, Phone, ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home', icon: Home },
    { 
      name: 'Services', 
      href: '#services',
      icon: Code,
      submenu: [
        { name: 'AI Solutions', href: '/services/ai-solutions' },
        { name: 'Quantum Security', href: '/services/quantum-security' },
        { name: 'DevOps Platform', href: '/services/devops-platform' },
        { name: 'Emerging Tech', href: '/services/emerging-tech' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '#solutions',
      icon: Brain,
      submenu: [
        { name: 'Business Intelligence', href: '/solutions/business-intelligence' },
        { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
        { name: 'Automation', href: '/solutions/automation' },
        { name: 'Research & Development', href: '/solutions/research-development' }
      ]
    },
    { 
      name: 'Resources', 
      href: '#resources',
      icon: Globe,
      submenu: [
        { name: '🔥 AI 2025 Revolution Guide', href: '/blog/ai-2025-generative-intelligence-revolution-complete-guide', highlight: true },
        { name: '⚡ Quantum AI Superintelligence', href: '/resources/quantum-ai-superintelligence-implementation-master-guide-2025', highlight: true },
        { name: '💰 $5.2B ROI Case Study', href: '/case-studies/fortune-500-quantum-ai-transformation-2025-ultimate-success-story-5-billion-roi', highlight: true },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Implementation Guides', href: '/resources' },
        { name: 'AI ROI Calculator', href: '/tools/ai-2025-autonomy-calculator' }
      ]
    },
    { name: 'About', href: '#about', icon: Users },
    { name: 'Contact', href: '#contact', icon: Phone }
  ];

  return (
    <nav className={`bg-white shadow-lg sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subitem, index) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                            (subitem as any).highlight 
                              ? 'text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 font-semibold border-b border-gray-200' 
                              : 'text-gray-600 hover:text-white hover:bg-blue-50'
                          }`}
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600 font-medium">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    <div className="ml-6 space-y-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className={`block text-sm transition-colors duration-200 ${
                            (subitem as any).highlight 
                              ? 'text-blue-600 hover:text-white font-semibold bg-blue-50 px-2 py-1 rounded' 
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};