import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navigation-menu')) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/ai-services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/it-services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      IT Services
                    </Link>
                    <Link
                      to="/cloud-solutions"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      Cloud Solutions
                    </Link>
                    <Link
                      to="/cybersecurity"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      Cybersecurity
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={closeMenu}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={closeMenu}
              >
                IT Services
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;