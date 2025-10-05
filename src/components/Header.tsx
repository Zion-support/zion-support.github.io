import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-lg" data-testid="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
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
    </header>
  );
};

export default Header;