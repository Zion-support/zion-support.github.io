'use client';

import React, { useState, memo, useCallback } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Menu } from 'lucide-react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = memo(({ className = '', children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(dropdown);
    } else if (e.key === 'Escape') {
      setActiveDropdown(null);
    }
  }, [toggleDropdown]);

  const aiServices = [
    { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
    { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
    { name: 'E-commerce Analytics Pro', href: '/ecommerce-analytics-pro' },
    { name: 'Legal Document Manager', href: '/legal-document-manager' },
    { name: 'Medical Records Manager', href: '/medical-records-manager' },
    { name: 'Online Learning Platform', href: '/online-learning-platform' },
    { name: 'Property Management AI', href: '/property-management-ai' },
    { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' }
  ];

  const itServices = [
    { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' }
  ];

  return (
    <nav className={`bg-white shadow-lg ${className}`} role="navigation">
      {children || (
        <>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
                
                {/* AI Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('ai')}
                    onKeyDown={(e) => handleKeyDown(e, 'ai')}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Toggle AI Services dropdown"
                    aria-expanded={activeDropdown === 'ai'}
                    aria-haspopup="true"
                    aria-controls="ai-services-menu"
                  >
                    <span>AI Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'ai' && (
                    <div 
                      id="ai-services-menu"
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50"
                      role="menu"
                      aria-labelledby="ai-services-button"
                    >
                      <div className="py-2">
                        {aiServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            role="menuitem"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* IT Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('it')}
                    onKeyDown={(e) => handleKeyDown(e, 'it')}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Toggle IT Services dropdown"
                    aria-expanded={activeDropdown === 'it'}
                    aria-haspopup="true"
                    aria-controls="it-services-menu"
                  >
                    <span>IT Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'it' && (
                    <div 
                      id="it-services-menu"
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50"
                      role="menu"
                      aria-labelledby="it-services-button"
                    >
                      <div className="py-2">
                        {itServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            role="menuitem"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                    href="/"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  {/* Mobile AI Services */}
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-gray-900 mb-2">AI Services</div>
                    <div className="space-y-1">
                      {aiServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile IT Services */}
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-gray-900 mb-2">IT Services</div>
                    <div className="space-y-1">
                      {itServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;