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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const services = {
    ai: {
      name: 'AI Services',
      items: [
        { name: 'AI Automation', path: '/ai-services' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' }
      ]
    },
    it: {
      name: 'IT Services',
      items: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Network Services', path: '/networking' }
      ]
    },
    solutions: {
      name: 'Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/enterprise' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
    }
  };

  const aiServices = [
    { name: 'AI Automation', href: '/ai-services', icon: Zap },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Brain },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Zap }
  ];

  const itServices = [
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps', href: '/devops', icon: Code },
    { name: 'Database Services', href: '/database', icon: BarChart },
    { name: 'Network Services', href: '/networking', icon: Users }
  ];

  const futureTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Brain },
    { name: 'Blockchain Solutions', href: '/blockchain', icon: Shield },
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Zap },
    { name: '5G Solutions', href: '/5g-solutions', icon: Zap }
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
              onClick={closeAllMenus}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              
              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
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
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
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
                  onClick={() => setItServicesOpen(!itServicesOpen)}
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
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
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
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-center"
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