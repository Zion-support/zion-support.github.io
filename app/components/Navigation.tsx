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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/ai-services" className="text-white hover:text-cyan-400 transition-colors">
              AI Services
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link href="/careers" className="text-white hover:text-cyan-400 transition-colors">
              Careers
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              (302) 464-0950
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              info@ziontechgroup.com
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/ai-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>

              {/* Mobile Contact Info */}
              <div className="px-3 py-2 border-t border-slate-700 mt-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@ziontechgroup.com
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
