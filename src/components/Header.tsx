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

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "AI Solutions", path: "/services/ai", description: "Machine Learning & AI" },
    { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud Infrastructure" },
    { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security Solutions" },
    { name: "IT Infrastructure", path: "/services/infrastructure", description: "Infrastructure Management" },
    { name: "Digital Transformation", path: "/services/transformation", description: "Business Transformation" },
    { name: "Consulting", path: "/services/consulting", description: "Technology Advisory" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
        : 'bg-slate-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
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
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  location.pathname.startsWith('/services')
                    ? 'text-white bg-blue-600/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="ml-1 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {location.pathname.startsWith('/services') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                )}
              </button>
              
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              to="/solutions"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/solutions')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Solutions
              {isActive('/solutions') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            
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
              to="/case-studies"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/case-studies')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Case Studies
              {isActive('/case-studies') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            
            <Link
              to="/news"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/news')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              News
              {isActive('/news') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            
            <Link
              to="/events"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/events')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Events
              {isActive('/events') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            
            <Link
              to="/careers"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/careers')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Careers
              {isActive('/careers') && (
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
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="px-3 py-2">
              <div className="text-gray-300 font-medium mb-2">Services</div>
              <div className="ml-4 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/solutions"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/solutions')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Solutions
            </Link>
            
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            
            <Link
              to="/case-studies"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/case-studies')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Case Studies
            </Link>
            
            <Link
              to="/news"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/news')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              News
            </Link>
            
            <Link
              to="/events"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/events')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={closeMenu}
            >
              Events
            </Link>
            
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/careers"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
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
