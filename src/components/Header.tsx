import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/20 shadow-lg' 
        : 'bg-slate-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                Zion Tech Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            <Link
              to="/services"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive('/services') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
              {isActive('/services') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            <Link
              to="/about"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            <Link
              to="/blog"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive('/blog') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            <Link
              to="/contact"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2 border border-white/10">
            <Link
              to="/"
              className={`block px-3 py-3 rounded-md transition-all duration-300 ${
                isActive('/')
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-400/30'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center justify-between">
                <span>Home</span>
                {isActive('/') && <div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
              </div>
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-3 rounded-md transition-all duration-300 ${
                isActive('/services')
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-400/30'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center justify-between">
                <span>Services</span>
                {isActive('/services') && <div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
              </div>
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-3 rounded-md transition-all duration-300 ${
                isActive('/about')
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-400/30'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center justify-between">
                <span>About</span>
                {isActive('/about') && <div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
              </div>
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-3 rounded-md transition-all duration-300 ${
                isActive('/blog')
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-400/30'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center justify-between">
                <span>Blog</span>
                {isActive('/blog') && <div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
              </div>
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-3 rounded-md transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-400/30'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center justify-between">
                <span>Contact</span>
                {isActive('/contact') && <div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
              </div>
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-3 border-t border-gray-700">
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
