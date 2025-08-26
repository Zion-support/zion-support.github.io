import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Solutions', path: '/services' },
    { name: 'Quantum Technology', path: '/quantum-technology' },
    { name: '5G Networks', path: '/5g-enterprise-solutions' },
    { name: 'Cybersecurity', path: '/advanced-cybersecurity-suite' },
    { name: 'IT Infrastructure', path: '/advanced-it-infrastructure-services' },
    { name: 'Space Tech', path: '/space-tech' },
    { name: 'Green IT', path: '/green-it' },
    { name: 'Micro SaaS', path: '/micro-saas' },
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                Services
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50"
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-700 mt-2 pt-2">
                      <Link
                        to="/services-showcase"
                        className="block px-4 py-2 text-blue-400 hover:text-blue-300 hover:bg-gray-700 transition-colors duration-200"
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
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            
            <Link
              to="/case-studies"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Case Studies
            </Link>
            
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
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
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-gray-400 text-sm font-medium mb-2">Services</div>
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-3 py-1 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/services-showcase"
                  className="block px-3 py-1 text-blue-400 hover:text-blue-300 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Services →
                </Link>
              </div>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
