'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { 
      name: 'AI Services', 
      href: '#',
      submenu: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Code Generation', href: '/ai-code-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Video Generation', href: '/ai-video-generation' },
        { name: 'AI Voice Cloning', href: '/ai-voice-cloning' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    { 
      name: 'IT Services', 
      href: '#',
      submenu: [
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Cloud Migration', href: '/cloud-migration' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  kleber@ziontechgroup.com
                </a>
                <div className="flex items-center text-gray-400 px-3 py-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;