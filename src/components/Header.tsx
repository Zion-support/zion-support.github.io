import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white" data-testid="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Zion Tech Group</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="/services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="/services" className="hover:text-gray-300 transition-colors">Services</a>
              <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;