import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md: flex items-center space-x-8">",
            <Link to="/services" className="text-gray-600 hover: text-blue-600 transition-colors">",
              Services
            </Link>
            <Link to="/services/catalog" className="text-gray-600 hover: text-blue-600 transition-colors">",
              Services Catalog
            </Link>
            <Link to="/solutions" className="text-gray-600 hover: text-blue-600 transition-colors">",
              Solutions
            </Link>
            <Link to="/about" className="text-gray-600 hover: text-blue-600 transition-colors">",
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover: text-blue-600 transition-colors">",
              Contact
            </Link>
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover: bg-blue-700 transition-colors",
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md: hidden p-2",
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {
isMobileMenuOpen && (
<div className="md:hidden py-4 border-t border-gray-200">
<nav className="flex flex-col space-y-4">
<Link
to="/services"
className="text-gray-600 hover:text-blue-600 transition-colors"
onClick={() => setIsMobileMenuOpen(false)
}
              >
                Services
              </Link>
              <Link 
                to="/services/catalog" 
                className="text-gray-600 hover: text-blue-600 transition-colors",
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services Catalog
              </Link>
              <Link 
                to="/solutions" 
                className="text-gray-600 hover: text-blue-600 transition-colors",
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover: text-blue-600 transition-colors",
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover: text-blue-600 transition-colors",
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover: bg-blue-700 transition-colors text-center",
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;