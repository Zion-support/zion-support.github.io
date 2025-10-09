'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-blue-400 transition-colors flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    All Services
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <Link href="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    AI Services
                  </Link>
                  <Link href="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Micro SAAS
                  </Link>
                  <Link href="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    IT Services
                  </Link>
                  <Link href="/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Cybersecurity
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/case-studies" className="text-white hover:text-blue-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
              <a 
                href="tel:+13026009898" 
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(302) 600-9898</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <div className="px-3 py-2 text-white font-medium">Services</div>
              <Link 
                href="/services" 
                className="block px-6 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                All Services
              </Link>
              <Link 
                href="/ai-services" 
                className="block px-6 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                AI Services
              </Link>
              <Link 
                href="/micro-saas" 
                className="block px-6 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Micro SAAS
              </Link>
              <Link 
                href="/it-services" 
                className="block px-6 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                IT Services
              </Link>
              <Link 
                href="/cybersecurity" 
                className="block px-6 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Cybersecurity
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/case-studies" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Case Studies
              </Link>
              <Link 
                href="/careers" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="border-t border-gray-600 pt-2 mt-2">
                <a 
                  href="tel:+13026009898" 
                  className="flex items-center space-x-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(302) 600-9898</span>
                </a>
                <a 
                  href="mailto:info@ziontechgroup.com" 
                  className="flex items-center space-x-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;