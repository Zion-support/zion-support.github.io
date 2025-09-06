import React from 'react';
import Link from 'next/link';
import { Menu, Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;