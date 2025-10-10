'use client';
import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-cyan-600" />
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Services</h3>
                  </div>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI Solutions
                  </Link>
                  <Link to="/ai-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI Automation
                  </Link>
                  <Link to="/ai-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI Analytics
                  </Link>
                  <div className="px-4 py-2">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">IT Services</h3>
                  </div>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    IT Solutions
                  </Link>
                  <Link to="/cloud-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cloud Services
                  </Link>
                  <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cybersecurity
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive('/pricing') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/demo"
              className="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 transition-colors"
            >
              Get Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-cyan-600 focus:outline-none focus:text-cyan-600"
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
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/demo"
                className="block px-3 py-2 text-base font-medium bg-cyan-600 text-white hover:bg-cyan-700 rounded-md"
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

export default Navigation;
