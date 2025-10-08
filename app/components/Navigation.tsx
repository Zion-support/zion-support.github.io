import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300 flex items-center font-medium hover:scale-105"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 py-3 z-50 animate-in slide-in-from-top-2 duration-300">
                  <Link to="/services" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 rounded-lg mx-2">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 rounded-lg mx-2">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 rounded-lg mx-2">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 rounded-lg mx-2">
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 rounded-lg mx-2">
                    Advertising Services
                  </Link>
                </div>
              )}
            </div>
            <Link to="/case-studies" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">
              Team
            </Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle mobile menu"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200/50 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-bold text-lg px-4 py-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                    IT Services
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                    Advertising Services
                  </Link>
                </div>
              </div>
              <Link to="/case-studies" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-indigo-50" onClick={() => setIsOpen(false)}>
                Team
              </Link>
              <Link to="/contact" className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 text-center mx-4 mt-4" onClick={() => setIsOpen(false)}>
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
