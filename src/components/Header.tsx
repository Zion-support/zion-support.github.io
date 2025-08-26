import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
            aria-label="Zion Tech Group - Home"
          >
            <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  location.pathname.startsWith('/services')
                    ? 'text-white bg-blue-600/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Services
                <svg className="ml-1 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Link
                      to="/services/it-solutions"
                      className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={closeMenu}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                          IT Solutions
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Infrastructure & Technology Services
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    <Link
                      to="/services/ai-services"
                      className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={closeMenu}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                          AI Services
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Machine Learning & AI Solutions
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    <Link
                      to="/services/cybersecurity"
                      className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={closeMenu}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                          Cybersecurity
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Security & Threat Protection
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    <Link
                      to="/services"
                      className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={closeMenu}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                          View All Services
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Explore our complete service portfolio
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/about')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/pricing"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/pricing')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Pricing
              {isActive('/pricing') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/talent"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/talent')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Talent
              {isActive('/talent') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/blog"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/blog')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/contact"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg border-t border-white/10">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                isActive('/')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <Link
              to="/services"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                location.pathname.startsWith('/services')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Services
            </Link>
            
            <Link
              to="/about"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                isActive('/about')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            
            <Link
              to="/pricing"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                isActive('/pricing')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Pricing
            </Link>
            
            <Link
              to="/talent"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                isActive('/talent')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Talent
            </Link>
            
            <Link
              to="/blog"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                isActive('/blog')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="block w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
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
