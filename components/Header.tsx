const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {}
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return ("
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}"
      <div className="bg-blue-900 text-white py-2">"
        <div className="container mx-auto px-4">"
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">"
            <div className="flex items-center space-x-6 mb-2 md:mb-0">"
              <div className="flex items-center space-x-2">"
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center space-x-2">"

                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>"
            <div className="flex items-center space-x-2">"
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </div>
          </div>

          >
            {isMenuOpen ? ("
              <X className="w-6 h-6" />
            ) : ("
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}"
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}"
              className="lg:hidden mt-4 border-t border-gray-200 pt-4"
            >
              {navigation.map((item) => ("
                <div key={item.name} className="mb-2">"
                  <div className="flex items-center justify-between">

                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button;
                        onClick={() => toggleDropdown(item.name)}"
                        className="p-1"
                      >
                        <ChevronDown;`
                          className={`w-4 h-4 transition-transform duration-200 ${"
                            activeDropdown === item.name ? "rotate-180" : ""`
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && ("
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link;
                          key={subItem.name}
                          href={subItem.href}"
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {Object.entries(navigation).map(([key, items]) => (
                <div key={key} className="py-2">
                  <div className="text-sm font-medium text-gray-900 mb-2">{key}</div>
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

export default Header;