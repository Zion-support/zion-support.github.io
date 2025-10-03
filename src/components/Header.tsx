import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Zion Tech Group
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;