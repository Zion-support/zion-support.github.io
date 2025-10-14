import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Services', href: '/it-solutions' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div>
                <div className="text-gray-300 text-base font-medium mb-2">Services</div>
                <div className="ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="text-gray-400 hover:text-white block px-3 py-1 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/demo"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavigation;
