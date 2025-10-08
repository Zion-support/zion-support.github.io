import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Core Services</div>
                  <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Services Overview
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    IT Services
                  </Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Specialized Solutions</div>
                  <Link to="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/services-advertising" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI Advertising Services
                  </Link>
                </div>
              )}
            </div>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Core Services</div>
                  <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    All Services Overview
                  </Link>
                  <Link to="/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    IT Services
                  </Link>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-4">Specialized Solutions</div>
                  <Link to="/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AI Advertising Services
                  </Link>
                </div>
              </div>
              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
