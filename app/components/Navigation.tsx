import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setIsOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen);
    setItServicesOpen(false);
  };

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
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
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <div className="px-4 py-2">
                    <button
                      onClick={toggleAiServices}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span className="flex items-center space-x-2">
                        <Brain className="w-4 h-4" />
                        <span>AI Services</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {aiServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        <Link to="/ai-services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          All AI Services
                        </Link>
                        <Link to="/ai-content-generation" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Content Generation
                        </Link>
                        <Link to="/ai-customer-support" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Customer Support
                        </Link>
                        <Link to="/ai-data-visualization" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Data Visualization
                        </Link>
                        <Link to="/ai-sales-automation" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Sales Automation
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button
                      onClick={toggleItServices}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span className="flex items-center space-x-2">
                        <Code className="w-4 h-4" />
                        <span>IT Services</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {itServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        <Link to="/business-intelligence" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Business Intelligence
                        </Link>
                        <Link to="/cloud-solutions" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Cloud Solutions
                        </Link>
                        <Link to="/cybersecurity" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Cybersecurity
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <div className="py-2">
                      <button
                        onClick={toggleAiServices}
                        className="flex items-center justify-between w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span className="flex items-center space-x-2">
                          <Brain className="w-4 h-4" />
                          <span>AI Services</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {aiServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          <Link to="/ai-services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            All AI Services
                          </Link>
                          <Link to="/ai-content-generation" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            Content Generation
                          </Link>
                          <Link to="/ai-customer-support" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            Customer Support
                          </Link>
                          <Link to="/ai-data-visualization" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            Data Visualization
                          </Link>
                          <Link to="/ai-sales-automation" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            Sales Automation
                          </Link>
                        </div>
                      )}
                    </div>
                    
                    <div className="py-2 border-t border-gray-100">
                      <button
                        onClick={toggleItServices}
                        className="flex items-center justify-between w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span className="flex items-center space-x-2">
                          <Code className="w-4 h-4" />
                          <span>IT Services</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {itServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          <Link to="/business-intelligence" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            Business Intelligence
                          </Link>
                          <Link to="/cloud-solutions" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            Cloud Solutions
                          </Link>
                          <Link to="/cybersecurity" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors" onClick={closeAllMenus}>
                            Cybersecurity
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="block mx-3 my-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;