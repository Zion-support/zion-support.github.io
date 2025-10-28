'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const aiServices = [
  { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
  { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer' },
  { name: 'Property Management AI', href: '/property-management-ai' },
  { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' },
  { name: 'Online Learning Platform', href: '/online-learning-platform' },
  { name: 'Medical Records Manager', href: '/medical-records-manager' },
  { name: 'Zion AI API Tester', href: '/zion-ai-api-tester' },
  { name: 'Zion AI Database Optimizer', href: '/zion-ai-database-optimizer' }
];

export default function Navigation({ className, children }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`bg-white shadow-lg ${className || ''}`} role="navigation">
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
              {openDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
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

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleDropdown('ai-mobile')}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'ai-mobile' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
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
                
                {/* AI Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('ai')}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span>AI Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'ai' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* IT Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('it')}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span>IT Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'it' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  About
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
