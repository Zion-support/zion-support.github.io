import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      All Services
                    </Link>
                    <Link to="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      AI Services
                    </Link>
                    <Link to="/services/advanced-ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Advanced AI Solutions
                    </Link>
                    <Link to="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      IT Services
                    </Link>
                    <Link to="/services/comprehensive-it" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Comprehensive IT Solutions
                    </Link>
                    <Link to="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Micro SaaS
                    </Link>
                    <Link to="/services/innovative-micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Innovative Micro SaaS
                    </Link>
                    <Link to="/services/real-time-cognitive-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Cognitive Automation
                    </Link>
                    <Link to="/services/quantum-computing-consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Quantum Computing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      All Solutions
                    </Link>
                    <Link to="/solutions/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Enterprise Solutions
                    </Link>
                    <Link to="/solutions/smb" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      SMB Solutions
                    </Link>
                    <Link to="/solutions/startup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Startup Solutions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Blog
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      All Services
                    </Link>
                    <Link to="/services/ai-services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      AI Services
                    </Link>
                    <Link to="/services/advanced-ai" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      Advanced AI Solutions
                    </Link>
                    <Link to="/services/it-services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      IT Services
                    </Link>
                    <Link to="/services/comprehensive-it" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      Comprehensive IT Solutions
                    </Link>
                    <Link to="/services/micro-saas" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      Micro SaaS
                    </Link>
                    <Link to="/services/innovative-micro-saas" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      Innovative Micro SaaS
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Solutions
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSolutionsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/solutions" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      All Solutions
                    </Link>
                    <Link to="/solutions/enterprise" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      Enterprise Solutions
                    </Link>
                    <Link to="/solutions/smb" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      SMB Solutions
                    </Link>
                    <Link to="/solutions/startup" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      Startup Solutions
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/case-studies" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}