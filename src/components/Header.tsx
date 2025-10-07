
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="/services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;