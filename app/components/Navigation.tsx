'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
