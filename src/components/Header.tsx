import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Services Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Services
                  </Link>
                  <Link to="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI Services
                  </Link>
                  <Link to="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    IT Services
                  </Link>
                  <Link to="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Micro SaaS
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link to="/enhanced-services-catalog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold">
                    Enhanced Catalog
                  </Link>
                  <Link to="/new-services-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold">
                    New Services 2026
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Solutions Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Solutions
                  </Link>
                  <Link to="/solutions/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Enterprise
                  </Link>
                  <Link to="/solutions/smb" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    SMB
                  </Link>
                  <Link to="/solutions/startup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Startup
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <div className="space-y-2">
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <div className="ml-4 space-y-2">
                  <Link
                    to="/services/ai-services"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Services
                  </Link>
                  <Link
                    to="/services/it-services"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link
                    to="/services/micro-saas"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Micro SaaS
                  </Link>
                  <Link
                    to="/enhanced-services-catalog"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm block font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enhanced Catalog
                  </Link>
                  <Link
                    to="/new-services-2026"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm block font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    New Services 2026
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <Link
                  to="/solutions"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <div className="ml-4 space-y-2">
                  <Link
                    to="/solutions/enterprise"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enterprise
                  </Link>
                  <Link
                    to="/solutions/smb"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SMB
                  </Link>
                  <Link
                    to="/solutions/startup"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Startup
                  </Link>
                </div>
              </div>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}