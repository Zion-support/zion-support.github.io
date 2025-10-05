import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-blue-400 transition duration-300">
              Services
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link to="/blog" className="text-white hover:text-blue-400 transition duration-300">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition duration-300">
              Contact
            </Link>
            <Link to="/team" className="text-white hover:text-blue-400 transition duration-300">
              Team
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white">
                Services
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link to="/team" className="block px-3 py-2 text-gray-300 hover:text-white">
                Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;