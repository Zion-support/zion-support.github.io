'use client';

import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
=======
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link href="/services/ai-code-assistant" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">
                    AI Code Assistant
                  </Link>
                  <Link href="/services/automation" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">
                    Automation
                  </Link>
                  <Link href="/services/business-automation" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">
                    Business Automation
                  </Link>
                  <Link href="/services/cloud-security-audit" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">
                    Cloud Security
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link href="/pricing" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium">
              Pricing
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-gray-300 font-medium">Services</div>
                <div className="ml-4 space-y-2">
                  <Link href="/services/ai-code-assistant" className="block text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    AI Code Assistant
                  </Link>
                  <Link href="/services/automation" className="block text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Automation
                  </Link>
                  <Link href="/services/business-automation" className="block text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Business Automation
                  </Link>
                  <Link href="/services/cloud-security-audit" className="block text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Cloud Security
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/pricing" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium text-center" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
            </nav>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>
        )}
      </div>
    </header>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
