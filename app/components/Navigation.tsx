'use client';

import React, { useState, memo, useCallback } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Menu } from 'lucide-react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const Navigation = memo(({ className, children }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // Service arrays
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
    { name: 'AI Healthcare', href: '/ai-healthcare' },
    { name: 'AI Marketing', href: '/ai-marketing' },
    { name: 'AI Project Management', href: '/ai-project-management' },
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'API Development', href: '/api-development' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Analytics Tools', href: '/analytics-tools' },
    { name: 'Automation', href: '/automation' },
    { name: 'Backup & Recovery', href: '/backup-recovery' },
  ];

  return (
    <nav className={`bg-white shadow-lg ${className}`} role="navigation">
      {children || (
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

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle Mobile Menu"
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  Home
                </Link>
                <div className="px-3 py-2">
                  <span className="text-gray-700 font-medium">AI Services</span>
                  <div className="ml-4 mt-2 space-y-1">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block text-sm text-gray-600 hover:text-gray-900"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="px-3 py-2">
                  <span className="text-gray-700 font-medium">IT Services</span>
                  <div className="ml-4 mt-2 space-y-1">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block text-sm text-gray-600 hover:text-gray-900"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  About
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
