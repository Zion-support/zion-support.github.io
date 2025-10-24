'use client';

<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
          About
        </Link>
        <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
          Services
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
          Contact
        </Link>
        <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
          Blog
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button className="text-gray-300 hover:text-white transition-colors">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
=======
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/ai-services"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                AI Solutions
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>
              <Link
                href="/ai-services"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                AI Solutions
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
