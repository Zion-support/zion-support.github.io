'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
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
  { name: 'Legal Document Manager', href: '/legal-document-manager' },
  { name: 'Medical Records Manager', href: '/medical-records-manager' },
  { name: 'Zion AI API Tester', href: '/zion-ai-api-tester' },
  { name: 'Zion AI Database Optimizer', href: '/zion-ai-database-optimizer' },
];

const itServices = [
  { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' },
  { name: '5G Data Analytics', href: '/5g-data-analytics' },
  { name: '5G Edge Computing', href: '/5g-edge-computing' },
  { name: '5G Implementation', href: '/5g-implementation' },
  { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
  { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
  { name: 'API Development', href: '/api-development' },
  { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
  { name: 'Analytics Tools', href: '/analytics-tools' },
  { name: 'Automation', href: '/automation' },
  { name: 'Backup & Recovery', href: '/backup-recovery' },
];

export default function Navigation({ className = '', children }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`bg-white shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Zion Tech Group</span>
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
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span>AI Services</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
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

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span>IT Services</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {itServices.map((service) => (
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

            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Home
              </Link>

              {/* AI Services Mobile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai-mobile')}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors w-full text-left px-3 py-2"
                >
                  <span>AI Services</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'ai-mobile' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Mobile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it-mobile')}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors w-full text-left px-3 py-2"
                >
                  <span>IT Services</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'it-mobile' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
