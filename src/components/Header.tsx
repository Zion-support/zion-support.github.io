import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
        : 'bg-slate-900/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors duration-300 ${
                isActive('/services') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link
              to="/services-showcase"
              className={`transition-colors duration-300 ${
                isActive('/services-showcase') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Micro SAAS
            </Link>
            <Link
              to="/pricing"
              className={`transition-colors duration-300 ${
                isActive('/pricing') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`transition-colors duration-300 ${
                isActive('/blog') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2 border border-white/10">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/')
                  ? 'text-blue-400 bg-blue-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/services')
                  ? 'text-blue-400 bg-blue-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/services-showcase"
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/services-showcase')
                  ? 'text-blue-400 bg-blue-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={closeMenu}
            >
              Micro SAAS
            </Link>
            <Link
              to="/pricing"
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/pricing')
                  ? 'text-blue-400 bg-blue-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/about')
                  ? 'text-blue-400 bg-blue-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/blog')
                  ? 'text-blue-400 bg-blue-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/contact')
                  ? 'text-blue-400 bg-blue-600/20 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-700">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
