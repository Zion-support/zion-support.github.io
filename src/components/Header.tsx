import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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

  const services = [
    { name: 'AI Solutions', path: '/services/ai', description: 'Machine learning and AI solutions' },
    { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure and automation' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and threat protection' },
    { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Infrastructure management' },
    { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation' },
    { name: 'Consulting', path: '/services/consulting', description: 'Technology consulting' }
  ];

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
          <nav className="hidden lg:flex items-center space-x-8">
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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-sm text-gray-400">{service.description}</div>
                          </div>
                          <svg className="h-4 w-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <Link
                        to="/services"
                        className="block text-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
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
              to="/careers"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Careers
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
          <div className="hidden lg:block">
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
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
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
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
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
            
            {/* Mobile Services Menu */}
            <div className="px-3 py-2">
              <div className="text-gray-400 text-sm font-medium mb-2">Services</div>
              <div className="space-y-1 ml-4">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="block px-3 py-2 text-blue-400 hover:text-blue-300 hover:bg-gray-700 rounded-md text-sm"
                  onClick={closeMenu}
                >
                  View All Services →
                </Link>
              </div>
            </div>
            
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
              to="/careers"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={closeMenu}
            >
              Careers
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
