import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold holographic">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 glass-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10">
                    AI Services
                  </Link>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-400/10">
                    Micro SaaS Solutions
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-pink-400 hover:bg-pink-400/10">
                    IT Solutions
                  </Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10">
                    Cloud Infrastructure
                  </Link>
                  <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-green-400 hover:bg-green-400/10">
                    Data Analytics
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <button className="cyber-button text-sm px-4 py-2">
              Get Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-dark border-t border-cyan-400/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              AI Services
            </Link>
            <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">
              Micro SaaS Solutions
            </Link>
            <Link to="/it-services" className="text-gray-300 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">
              IT Solutions
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <button className="cyber-button w-full text-center mt-4">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;