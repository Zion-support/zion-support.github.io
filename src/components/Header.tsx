import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;