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
      setIsScrolled(window.scrollY > 10);
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

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Services', path: '/ai-cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/ai-workflow-automation' },
        { name: 'Database Services', path: '/ai-data-analytics' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Micro SAAS', path: '/micro-saas' },
        { name: 'Developer Tools', path: '/micro-saas' },
        { name: 'Business Apps', path: '/micro-saas' },
        { name: 'Productivity Tools', path: '/micro-saas' },
        { name: 'Marketing Tools', path: '/micro-saas' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
    }
  ];

  const aiServices = [
    { name: 'AI Consulting', href: '/ai-services', icon: Brain },
    { name: 'Machine Learning', href: '/ai-services', icon: Brain },
    { name: 'Natural Language Processing', href: '/ai-services', icon: Brain },
    { name: 'Computer Vision', href: '/ai-services', icon: Brain },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps', href: '/ai-workflow-automation', icon: Code },
    { name: 'Database Management', href: '/ai-data-analytics', icon: BarChart },
    { name: '5G Solutions', href: '/5g-solutions', icon: Zap },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
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
              className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-cyan-400'
              }`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-cyan-400'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 5).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={service.path}
                                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                                onClick={() => setServicesOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services
                      <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-cyan-400'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>
            
            <Link 
              to="/case-studies" 
              className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-cyan-400'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-cyan-400'
              }`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="tel:+13024640950"
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-cyan-600 text-white hover:bg-cyan-700'
              }`}
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
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
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">{category.title}</h4>
                        <ul className="space-y-1 ml-2">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={service.path}
                                className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                                onClick={closeAllMenus}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link
                to="tel:+13024640950"
                className="block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Call Now: (302) 464-0950
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;