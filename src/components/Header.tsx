<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg" data-testid="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
<<<<<<< HEAD
            </a>
            <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
=======
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Services
<<<<<<< HEAD
              </a>
              <a href="/blog" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Blog
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
=======
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
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
=======
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Header
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
      </div>
    </div>
  );
};

export default Header;
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
