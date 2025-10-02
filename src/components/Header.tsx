import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-3e47

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

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
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
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
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
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
};

export default Header;