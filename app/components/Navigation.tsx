import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen);
  };

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen);
  };

  const services = {
    ai: {
      name: 'AI Services',
      items: [
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' }
      ]
    },
    it: {
      name: 'IT Services',
      items: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Network Services', path: '/networking' }
      ]
    },
    solutions: {
      name: 'Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/enterprise' },
        { name: 'IoT Solutions', path: '/iot-solutions' },
        { name: 'Blockchain Solutions', path: '/blockchain-solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
    }
  };

  const quickLinks = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'Enterprise', href: '/enterprise', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white font-bold text-xl"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="px-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">AI Services</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {services.ai.items.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          onClick={closeAllMenus}
                        >
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="px-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">IT Services</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {services.it.items.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          onClick={closeAllMenus}
                        >
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.ai.items.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.it.items.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Quick Links */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      onClick={closeAllMenus}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
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