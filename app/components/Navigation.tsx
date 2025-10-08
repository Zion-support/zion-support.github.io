import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, Brain, Code } from 'lucide-react';

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
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-6">
                    {/* AI Services */}
                    <div>
                      <button
                        onClick={toggleAiServices}
                        className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-3"
                      >
                        <Brain className="w-4 h-4" />
                        <span>AI Services</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {aiServicesOpen && (
                        <div className="space-y-2 ml-6">
                          <Link to="/ai-services" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Solutions
                          </Link>
                          <Link to="/ai-marketing" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Marketing
                          </Link>
                          <Link to="/ai-automation" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Automation
                          </Link>
                          <Link to="/ai-healthcare" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Healthcare
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* IT Services */}
                    <div>
                      <button
                        onClick={toggleItServices}
                        className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-3"
                      >
                        <Code className="w-4 h-4" />
                        <span>IT Services</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {itServicesOpen && (
                        <div className="space-y-2 ml-6">
                          <Link to="/it-services" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            IT Solutions
                          </Link>
                          <Link to="/cybersecurity" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            Cybersecurity
                          </Link>
                          <Link to="/cloud-infrastructure" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            Cloud Infrastructure
                          </Link>
                          <Link to="/mobile-development" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            Mobile Development
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;