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

<<<<<<< HEAD
<<<<<<< HEAD
=======
const itServices = [
  { name: 'Web Development', href: '/web-development' },
  { name: 'Mobile App Development', href: '/mobile-app-development' },
  { name: 'Cloud Solutions', href: '/cloud-solutions' },
  { name: 'Database Management', href: '/database-management' },
  { name: 'Cybersecurity', href: '/cybersecurity' },
  { name: 'IT Consulting', href: '/it-consulting' }
];

>>>>>>> 30c010096b490cf93d91324eaa8e32e8fdb823e1
export default function Navigation({ className, children }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
=======
// const itServices = [
//   { name: 'Web Development', href: '/web-development' },
//   { name: 'Mobile App Development', href: '/mobile-app-development' },
//   { name: 'Cloud Solutions', href: '/cloud-solutions' },
//   { name: 'Cybersecurity', href: '/cybersecurity' },
//   { name: 'IT Consulting', href: '/it-consulting' }
// ];

const Navigation: React.FC<NavigationProps> = ({ className = '', children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [_openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [_isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-650f
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const _toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!_isMobileMenuOpen);
  }, [_isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

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
<<<<<<< HEAD
<<<<<<< HEAD
                  onClick={() => toggleDropdown('ai-services')}
=======
                  onClick={() => toggleDropdown('ai')}
>>>>>>> 30c010096b490cf93d91324eaa8e32e8fdb823e1
=======
                  onClick={() => toggleDropdown('ai')}
>>>>>>> cursor/fix-errors-and-merge-to-main-650f
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
<<<<<<< HEAD
<<<<<<< HEAD
                {activeDropdown === 'ai-services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {aiServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
=======
                {activeDropdown === 'ai' && (
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
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-50">
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
>>>>>>> 30c010096b490cf93d91324eaa8e32e8fdb823e1
=======
                {activeDropdown === 'ai' && (
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
>>>>>>> cursor/fix-errors-and-merge-to-main-650f
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
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
<<<<<<< HEAD
                
                {/* AI Services Dropdown */}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-650f
                <div className="px-3 py-2">
                  <button
                    onClick={() => toggleDropdown('ai-mobile')}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    AI Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'ai-mobile' && (
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
<<<<<<< HEAD

                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
=======
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
>>>>>>> cursor/fix-errors-and-merge-to-main-650f
                  About
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
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
<<<<<<< HEAD
}
=======
};

export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-650f
