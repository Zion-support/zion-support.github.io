import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
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
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <div className="relative group">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">All Services</Link>
                  <Link href="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">AI Services</Link>
                  <Link href="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">IT Services</Link>
                  <Link href="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Micro SaaS</Link>
                  <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Solutions</Link>
                </div>
              </div>
            </div>
            <Link href="/industries" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Industries
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link href="/services" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">
                    All Services
                  </Link>
                  <Link href="/ai-services" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">
                    AI Services
                  </Link>
                  <Link href="/it-services" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">
                    IT Services
                  </Link>
                  <Link href="/micro-saas" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">
                    Micro SaaS
                  </Link>
                  <Link href="/solutions" className="block py-1 text-gray-600 hover:text-blue-600 transition-colors">
                    Solutions
                  </Link>
                </div>
              </div>
              <Link href="/industries" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Industries
              </Link>
              <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Resources
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;