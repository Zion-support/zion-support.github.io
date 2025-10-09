import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Home, Info, Contact, MessageSquare, Settings, Globe, Star } from 'lucide-react';

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  const aiServices = [
    { name: 'AI Consulting & Strategy', href: '/ai-services', icon: Brain },
    { name: 'Machine Learning Solutions', href: '/ai-services', icon: Code },
    { name: 'Natural Language Processing', href: '/ai-services', icon: MessageSquare },
    { name: 'Computer Vision', href: '/ai-services', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign }
  ];

  const itServices = [
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Server },
    { name: 'Cloud Migration', href: '/it-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Custom Development', href: '/it-services', icon: Code },
    { name: 'DevOps & CI/CD', href: '/it-services', icon: Settings },
    { name: '24/7 IT Support', href: '/it-services', icon: Users },
    { name: 'Database Management', href: '/it-services', icon: Database },
    { name: 'Network Security', href: '/it-services', icon: Wifi }
  ];

  const microSaasServices = [
    { name: 'AI Code Review Assistant', href: '/micro-saas', icon: Code },
    { name: 'AI SEO Optimizer', href: '/micro-saas', icon: BarChart },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: MessageSquare },
    { name: 'AI Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'AI Customer Analytics', href: '/micro-saas', icon: Users },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: BarChart }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold neon-text-enhanced">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      AI Services
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-2 rounded hover:bg-cyan-500/10 transition-colors duration-300"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                      <Cloud className="w-4 h-4 mr-2" />
                      IT Services
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-2 rounded hover:bg-cyan-500/10 transition-colors duration-300"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Micro SAAS Solutions
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {microSaasServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-2 rounded hover:bg-cyan-500/10 transition-colors duration-300"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>

            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
            >
              <Contact className="w-4 h-4" />
              <span>Contact</span>
            </Link>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">(302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">Email</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              {/* Mobile AI Services */}
              <div>
                <button 
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
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
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button 
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
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
                className="block text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={closeAllMenus}
              >
                About
              </Link>

              <Link 
                to="/contact" 
                className="block text-white hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
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