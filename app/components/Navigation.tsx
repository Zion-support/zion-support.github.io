'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-white/10">
                  <Link to="/services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-t-lg">
                    All Services
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    IT Services
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-white/10">
                  <Link to="/ai-solutions" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-t-lg">
                    AI Solutions
                  </Link>
                  <Link to="/cloud-solutions" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Cloud Solutions
                  </Link>
                  <Link to="/enterprise-solutions" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Enterprise Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Services
              </Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Solutions
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Contact
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md">
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;