import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-400">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="hover:text-purple-400 transition-colors flex items-center">
                AI Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/ai-services" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    All AI Services
                  </Link>
                  <Link to="/ai-analytics" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    AI Analytics
                  </Link>
                  <Link to="/ai-automation" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    AI Automation
                  </Link>
                  <Link to="/ai-cybersecurity" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    AI Cybersecurity
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-purple-400 transition-colors flex items-center">
                IT Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/it-services" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    All IT Services
                  </Link>
                  <Link to="/cloud-migration" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    Cloud Migration
                  </Link>
                  <Link to="/cybersecurity" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    Cybersecurity
                  </Link>
                  <Link to="/web-development" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    Web Development
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Link 
              to="/demo" 
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition-colors"
            >
              Get Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-md mt-2">
              <Link to="/" className="block px-3 py-2 hover:text-purple-400">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 hover:text-purple-400">
                About
              </Link>
              <Link to="/ai-services" className="block px-3 py-2 hover:text-purple-400">
                AI Services
              </Link>
              <Link to="/it-services" className="block px-3 py-2 hover:text-purple-400">
                IT Services
              </Link>
              <Link to="/pricing" className="block px-3 py-2 hover:text-purple-400">
                Pricing
              </Link>
              <Link to="/contact" className="block px-3 py-2 hover:text-purple-400">
                Contact
              </Link>
              <Link to="/demo" className="block px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-center">
                Get Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;