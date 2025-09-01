import React, { useState } from 'react';'
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return()
    <nav className="bg-white shadow-lg sticky top-0 z-50">"
      <div className="container mx-auto px-4">"
        <div className="flex justify-between items-center py-4">"
          <Link href="/">"
            <a className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Zion Tech Group
            </a>
          </Link>
          
          {/* Desktop Navigation */}"
          <div className="hidden lg:flex space-x-8">"
            <Link href="/">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
            </Link>"
            <Link href="/services">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            </Link>"
            <Link href="/products">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</a>
            </Link>"
            <Link href="/solutions">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Solutions</a>
            </Link>"
            <Link href="/blog">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</a>
            </Link>"
            <Link href="/about">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
            </Link>"
            <Link href="/contact">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </Link>"
            <Link href="/talent">"
              <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Join Our Team</a>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button"
            className="lg:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >"
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? ("
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : ("
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && ("
          <div className="lg:hidden pb-4">"
            <div className="flex flex-col space-y-4">"
              <Link href="/">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
              </Link>"
              <Link href="/services">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              </Link>"
              <Link href="/products">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Products</a>
              </Link>"
              <Link href="/solutions">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Solutions</a>
              </Link>"
              <Link href="/blog">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blog</a>
              </Link>"
              <Link href="/about">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
              </Link>"
              <Link href="/contact">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              </Link>"
              <Link href="/talent">"
                <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Join Our Team</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
'"