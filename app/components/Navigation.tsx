<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "Navigation | Zion Tech Group",
  description: "Professional navigation services by Zion Tech Group",
  keywords: "navigation, technology, services",
  openGraph: {
    title: "Navigation | Zion Tech Group",
    description: "Professional navigation services by Zion Tech Group",
    type: "website",
  },
};
=======
'use client';
import React, { useState, memo, useCallback } from 'react';
import Link from 'next/link';


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
];
export default function Navigation({ className = '', children }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);
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
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100

export default function NavigationPage() {
  return (
<<<<<<< HEAD
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Navigation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional navigation services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Navigation Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive navigation solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your navigation needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored navigation solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your navigation services.
                  </p>
                </div>
=======
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
<<<<<<< HEAD
                
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
=======
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
<<<<<<< HEAD

              {/* CTA Button */}
              <div className="hidden md:flex items-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </div>
    </ErrorBoundary>
=======
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
=======
            </div>
          )}
        </div>
      )}
    </nav>
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
