import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', dropdown: [
      { name: 'AI Development', href: '/services/ai' },
      { name: 'Cloud Services', href: '/services/cloud' },
      { name: 'Blockchain', href: '/services/blockchain' },
      { name: 'Data Analytics', href: '/services/analytics' }
    ]},
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/talent' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="ml-1 text-gray-600 hover:text-blue-600"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="lg:hidden border-t border-gray-200 py-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name} className="mb-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.dropdown && (
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="p-2 text-gray-600 hover:text-blue-600"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {item.dropdown && activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;