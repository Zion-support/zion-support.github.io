import React, { useState } from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</Link>
            <Link href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Solutions</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</Link>
            <Link href="/talent" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Join Our Team</Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</Link>
              <Link href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Solutions</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</Link>
              <Link href="/talent" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Join Our Team</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
