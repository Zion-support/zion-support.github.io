import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
