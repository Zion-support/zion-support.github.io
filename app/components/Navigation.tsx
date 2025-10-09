import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
      setAiServicesOpen(false);
    }
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
  };

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'}`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link
                    to="/ai-services"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Brain className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">AI Services</div>
                      <div className="text-sm text-gray-500">Machine Learning & AI Solutions</div>
                    </div>
                  </Link>
                  <Link
                    to="/ai-automation"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Zap className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium">AI Automation</div>
                      <div className="text-sm text-gray-500">Process Automation & Workflow</div>
                    </div>
                  </Link>
                  <Link
                    to="/ai-marketing"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <BarChart className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">AI Marketing</div>
                      <div className="text-sm text-gray-500">Marketing Automation & Analytics</div>
                    </div>
                  </Link>
                  <Link
                    to="/it-infrastructure"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Cloud className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">IT Infrastructure</div>
                      <div className="text-sm text-gray-500">Cloud & Infrastructure Solutions</div>
                    </div>
                  </Link>
                  <Link
                    to="/cybersecurity"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Shield className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-medium">Cybersecurity</div>
                      <div className="text-sm text-gray-500">Security & Compliance</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'}`}
              onClick={closeAllMenus}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'}`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'}`}
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            {/* CTA Button */}
            <a
              href="tel:+13024640950"
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    <Link
                      to="/ai-services"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/ai-automation"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      AI Automation
                    </Link>
                    <Link
                      to="/ai-marketing"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      AI Marketing
                    </Link>
                    <Link
                      to="/it-infrastructure"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      IT Infrastructure
                    </Link>
                    <Link
                      to="/cybersecurity"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      Cybersecurity
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                to="/about"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              <Link
                to="/blog"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              {/* Mobile CTA */}
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 w-full justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;