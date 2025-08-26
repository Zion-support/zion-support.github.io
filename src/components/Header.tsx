import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const location = useLocation();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target as Node)) {
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const serviceCategories = [
    { path: '/services/ai', label: 'AI Solutions', description: 'Artificial Intelligence & Machine Learning' },
    { path: '/services/cloud', label: 'Cloud & DevOps', description: 'Cloud Infrastructure & DevOps Automation' },
    { path: '/services/cybersecurity', label: 'Cybersecurity', description: 'Advanced Security Solutions' },
    { path: '/services/infrastructure', label: 'Infrastructure', description: 'IT Infrastructure & Management' },
    { path: '/services/consulting', label: 'Consulting', description: 'Strategic Technology Consulting' },
    { path: '/services/transformation', label: 'Digital Transformation', description: 'Business Process Transformation' }
  ];

  const aiServices = [
    { path: '/ai-autonomous-analytics', label: 'AI Analytics' },
    { path: '/ai-autonomous-automation', label: 'AI Automation' },
    { path: '/ai-autonomous-security', label: 'AI Security' },
    { path: '/ai-autonomous-development', label: 'AI Development' },
    { path: '/ai-autonomous-research', label: 'AI Research' },
    { path: '/ai-autonomous-innovation', label: 'AI Innovation' }
  ];

  const companyLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

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
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive('/')
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
              {isActive('/') && (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center space-x-1 ${
                  location.pathname.startsWith('/services') || location.pathname.startsWith('/ai-autonomous')
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {(location.pathname.startsWith('/services') || location.pathname.startsWith('/ai-autonomous')) && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400" />
                )}
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-white/10 backdrop-blur-lg">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {/* Service Categories */}
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-3">Service Categories</h3>
                        <div className="space-y-2">
                          {serviceCategories.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className="font-medium text-white">{service.label}</div>
                              <div className="text-sm text-gray-400">{service.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* AI Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-3">AI Autonomous Services</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {aiServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block p-2 rounded text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/services"
                          className="block mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={companyDropdownRef}>
              <button
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center space-x-1 ${
                  companyLinks.some(link => isActive(link.path))
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-expanded={isCompanyDropdownOpen}
                aria-haspopup="true"
              >
                <span>Company</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {companyLinks.some(link => isActive(link.path)) && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400" />
                )}
              </button>

              {isCompanyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-white/10 backdrop-blur-lg">
                  <div className="p-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-3 py-2 rounded text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                        onClick={() => setIsCompanyDropdownOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/comprehensive-pricing-2025"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive('/comprehensive-pricing-2025')
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              aria-current={isActive('/comprehensive-pricing-2025') ? 'page' : undefined}
            >
              Pricing
              {isActive('/comprehensive-pricing-2025') && (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400" />
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              aria-label="Get started with our services"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
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
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2 border border-white/10">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                isActive('/')
                  ? 'text-blue-400 bg-blue-900/20'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
            
            {/* Mobile Services Section */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-white">Services</h3>
              {serviceCategories.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`block px-6 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(service.path)
                      ? 'text-blue-400 bg-blue-900/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  aria-current={isActive(service.path) ? 'page' : undefined}
                >
                  {service.label}
                </Link>
              ))}
              <Link
                to="/services"
                className="block px-6 py-2 text-base font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>

            {/* Mobile Company Section */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-white">Company</h3>
              {companyLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-6 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-400 bg-blue-900/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              to="/comprehensive-pricing-2025"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                isActive('/comprehensive-pricing-2025')
                  ? 'text-blue-400 bg-blue-900/20'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              aria-current={isActive('/comprehensive-pricing-2025') ? 'page' : undefined}
            >
              Pricing
            </Link>

            <div className="pt-4 border-t border-gray-700">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
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
