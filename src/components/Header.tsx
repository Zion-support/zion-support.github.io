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
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & AI Services', icon: '🤖' },
    { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Cloud Migration & Automation', icon: '☁️' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Threat Protection', icon: '🔒' },
    { name: 'IT Infrastructure', href: '/services/infrastructure', description: 'Network & System Management', icon: '🏗️' },
    { name: 'Digital Transformation', href: '/services/transformation', description: 'Business Process Optimization', icon: '🚀' },
    { name: 'Consulting', href: '/services/consulting', description: 'Technology Strategy & Advisory', icon: '💡' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and results' },
    { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
    { name: 'Webinars', href: '/webinars', description: 'Educational content and training' }
  ];

  const company = [
    { name: 'About Us', href: '/about', description: 'Our story and mission' },
    { name: 'Team', href: '/team', description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
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
                className={`absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
                    <p className="text-sm text-gray-400">Comprehensive technology solutions for your business</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                        onClick={closeMenu}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {service.description}
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Link
                      to="/services"
                      className="flex items-center justify-center w-full px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      View All Services
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg border-t border-white/10">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          
          {/* Services Section */}
          <div className="px-3 py-2">
            <div className="text-sm font-medium text-gray-400 mb-2">Services</div>
            <div className="space-y-1 ml-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <Link
            to="/careers"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
            onClick={closeMenu}
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
