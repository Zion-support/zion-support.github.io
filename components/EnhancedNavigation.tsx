import React, { useState } from 'react';
import Link from 'next/link';

const EnhancedNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      current: true
    },
    {
      name: 'Services',
      href: '/services',
      current: false
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      current: false,
      badge: 'NEW'
    },
    {
      name: 'Technology Trends',
      href: '/technology-trends',
      current: false,
      badge: '2025'
    },
    {
      name: 'Testimonials',
      href: '/testimonials',
      current: false,
      badge: 'FEATURED'
    },
    {
      name: 'AI Solutions',
      href: '/ai-solutions',
      current: false,
      badge: 'EXPANDED'
    },
    {
      name: 'About',
      href: '/about',
      current: false
    },
    {
      name: 'Contact',
      href: '/contact',
      current: false
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                  {item.badge && (
                    <span className={`absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-medium rounded-full ${
                      item.badge === 'NEW' ? 'bg-red-500 text-white' :
                      item.badge === '2025' ? 'bg-blue-500 text-white' :
                      item.badge === 'FEATURED' ? 'bg-green-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-700 focus:outline-none focus:text-purple-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    item.current
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {item.name}
                    {item.badge && (
                      <span className={`ml-2 px-1.5 py-0.5 text-xs font-medium rounded-full ${
                        item.badge === 'NEW' ? 'bg-red-500 text-white' :
                        item.badge === '2025' ? 'bg-blue-500 text-white' :
                        item.badge === 'FEATURED' ? 'bg-green-500 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;