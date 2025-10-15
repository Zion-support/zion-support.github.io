import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
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
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 grid grid-cols-2 gap-4 p-4"
                >
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">AI Services</h3>
                    <div className="space-y-1">
                      <Link to="/ai-services" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        AI Services
                      </Link>
                      <Link to="/ai-solutions" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        AI Solutions
                      </Link>
                      <Link to="/ai-content-generator" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        AI Content Generator
                      </Link>
                      <Link to="/data-analytics" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        Data Analytics
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">IT Services</h3>
                    <div className="space-y-1">
                      <Link to="/it-services" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        IT Services
                      </Link>
                      <Link to="/cloud-infrastructure" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        Cloud Infrastructure
                      </Link>
                      <Link to="/5g-solutions" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        5G Solutions
                      </Link>
                      <Link to="/digital-transformation" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        Digital Transformation
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* AI Tools Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                AI Tools
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">AI Services</div>
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Services
              </Link>
              <Link to="/ai-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Solutions
              </Link>
              <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Generator
              </Link>
              <Link to="/data-analytics" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Data Analytics
              </Link>
            </div>
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">IT Services</div>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                5G Solutions
              </Link>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Digital Transformation
              </Link>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
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