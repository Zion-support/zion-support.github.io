import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              AI Services
            </Link>
            <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              IT Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2">
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link to="/ai-services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors">
                AI Services
              </Link>
              <Link to="/it-services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors">
                IT Services
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;