import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X,
  ChevronDown, Brain,
  Cloud, Shield,
  Zap, Database,
  Code, Building,
  Rocket
} from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      dropdown: [
        { label: 'All Services', href: '/comprehensive-services-showcase-2026', icon: Zap },
        { label: 'Micro SaaS', href: '/services/micro-saas', icon: Zap },
        { label: 'AI & Machine Learning', href: '/services/ai-services', icon: Brain },
        { label: 'IT Services', href: '/services/it-services', icon: Cloud },
        { label: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure', icon: Cloud },
        { label: 'Data & Analytics', href: '/services/data-analytics', icon: Database },
        { label: 'Developer Tools', href: '/services/developer-tools', icon: Code },
        { label: 'Industry Solutions', href: '/services/industry-solutions', icon: Building },
        { label: 'Emerging Technology', href: '/services/emerging-tech', icon: Rocket }
      ]
    },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Zion Tech Group
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              <item.icon className="w-4 h-4 mr-3" />
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              href="/contact" 
              className="hidden lg:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg"
            >
              Get Started
            </Link>
          </nav>
          
          <button 
            aria-label="Toggle navigation" 
            onClick={() => setIsOpen((v) => !v)} 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white shadow-lg"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <div>
                      <div className="text-gray-500 text-sm font-semibold mb-2">{link.label}</div>
                      <div className="ml-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="w-4 h-4 mr-3" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="block w-full py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/contact" 
                className="block w-full py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;