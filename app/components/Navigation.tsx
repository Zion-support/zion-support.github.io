import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    IT Services
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    Micro SAAS
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link 
              to="/demo" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/ai-services" className="block px-3 py-2 text-gray-300 hover:text-white">
                AI Services
              </Link>
              <Link to="/it-services" className="block px-3 py-2 text-gray-300 hover:text-white">
                IT Services
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link to="/demo" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">
                Get Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;