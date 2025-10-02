import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                >
                  <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    All Services
                  </Link>
                  <Link to="/services/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    AI Services
                  </Link>
                  <Link to="/services/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Micro SaaS
                  </Link>
                  <Link to="/services/it-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    IT Services
                  </Link>
                  <Link to="/services/real-time-cognitive-automation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Cognitive Automation
                  </Link>
                  <Link to="/services/quantum-computing-consulting" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Quantum Computing
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isSolutionsOpen && (
                <div
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                >
                  <Link to="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    All Solutions
                  </Link>
                  <Link to="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Enterprise
                  </Link>
                  <Link to="/solutions/smb" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    SMB
                  </Link>
                  <Link to="/solutions/startup" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                    Startup
                  </Link>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Case Studies
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/documentation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Docs
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="ml-4 space-y-1">
                  <Link 
                    to="/services" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/services/ai-services" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/services/micro-saas" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Micro SaaS
                  </Link>
                  <Link 
                    to="/services/it-services" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    IT Services
                  </Link>
                </div>
              </div>
              
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Solutions</div>
                <div className="ml-4 space-y-1">
                  <Link 
                    to="/solutions" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Solutions
                  </Link>
                  <Link 
                    to="/solutions/enterprise" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Enterprise
                  </Link>
                  <Link 
                    to="/solutions/smb" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SMB
                  </Link>
                  <Link 
                    to="/solutions/startup" 
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Startup
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/documentation" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}