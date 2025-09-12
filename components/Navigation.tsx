import React, { useState } from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: 'ℹ️' },
    { name: 'Services', href: '/services', icon: '🚀' },
    { name: 'Products', href: '/products', icon: '💎' },
    { name: 'Content', href: '/content-showcase', icon: '📚' },
    { name: 'Case Studies', href: '/case-studies', icon: '📊' },
    { name: 'Testimonials', href: '/testimonials', icon: '⭐' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Careers', href: '/careers', icon: '💼' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              Zion Tech
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-blue-400 transition-colors font-medium flex items-center"
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors ${
                              dropdownItem.featured ? 'font-semibold text-blue-600' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{dropdownItem.name}</span>
                              {dropdownItem.featured && (
                                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">Featured</span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-blue-400 transition-colors font-medium px-4 py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="text-gray-300 hover:text-blue-400 transition-colors text-sm px-4 py-1 block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                          {dropdownItem.featured && (
                            <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;