import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [servicesOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const toggleServices = useCallback(() => {
    setServicesOpen(prev => !prev);
  }, []);

  return (
    <nav className="bg-white shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" aria-label="Zion Tech Group - Home">
              <h1 className="text-2xl font-bold text-blue-600">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={toggleServices}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200"
                  role="menu"
                  aria-label="Services submenu"
                >
                  <div className="py-1">
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" 
                      role="menuitem"
                    >
                      All Services
                    </Link>
                    <Link 
                      to="/ai-services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" 
                      role="menuitem"
                    >
                      AI Services
                    </Link>
                    <Link 
                      to="/it-services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" 
                      role="menuitem"
                    >
                      IT Services
                    </Link>
                    <Link 
                      to="/cloud-infrastructure" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" 
                      role="menuitem"
                    >
                      Cloud Infrastructure
                    </Link>
                    <Link 
                      to="/5g-solutions" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" 
                      role="menuitem"
                    >
                      5G Solutions
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 focus:ring-2 focus:ring-blue-500 rounded-md p-1"
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" role="menu" aria-label="Mobile navigation menu">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <div className="px-3 py-2">
              <div className="text-gray-700 text-base font-medium mb-2">Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/services" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">All Services</Link>
                <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Services</Link>
                <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">IT Services</Link>
                <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Cloud Infrastructure</Link>
                <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">5G Solutions</Link>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;