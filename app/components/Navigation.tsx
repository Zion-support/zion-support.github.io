import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-purple-600">
              Zion Tech Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium">
              Services
            </Link>
            <Link href="/blog" className="relative text-gray-700 hover:text-purple-600 font-medium">
              <span className="flex items-center">
                Blog
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">NEW</span>
              </span>
            </Link>
            <Link href="/case-studies" className="relative text-gray-700 hover:text-purple-600 font-medium">
              <span className="flex items-center">
                Case Studies
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">HOT</span>
              </span>
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-purple-600 font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
                Services
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
                <span className="flex items-center">
                  Blog
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">NEW</span>
                </span>
              </Link>
              <Link href="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
                <span className="flex items-center">
                  Case Studies
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">HOT</span>
                </span>
              </Link>
              <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
                Resources
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}