import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Brain },
    { name: 'AI Automation', href: '/ai-automation', icon: Brain },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Brain },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Brain },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Code },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Code }
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'DevOps', href: '/devops', icon: Code },
    { name: 'Database Services', href: '/database', icon: BarChart },
    { name: 'Network Services', href: '/networking', icon: Cloud }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Brain },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Cloud },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
  ];

  const microSaasServices = [
    { name: 'Micro SAAS', href: '/micro-saas', icon: Code },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code },
    { name: 'Business Apps', href: '/business-apps', icon: BarChart },
    { name: 'Productivity Tools', href: '/productivity', icon: Zap },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: BarChart }
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
          <Link to="/" className={`text-2xl font-bold flex items-center transition-colors ${
            isScrolled 
              ? 'text-gray-900' 
              : 'text-cyan-400 neon-text'
          }`}>
            <span className="text-3xl mr-2">⚡</span>
            <span className="hidden sm:block">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white hover:text-cyan-400'
                }`}
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700 group-hover:text-purple-600 transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white hover:text-cyan-400'
                }`}
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="space-y-2 px-4">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/micro-saas"
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Micro SAAS
            </Link>

            <Link
              to="/enterprise"
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Enterprise
            </Link>

            <Link
              to="/contact"
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cyan-600' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-xl">
            <div className="space-y-4">
              <Link
                to="/"
                className={`block transition-colors duration-200 font-medium py-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className={`block transition-colors duration-200 font-medium py-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  className={`flex items-center justify-between w-full transition-colors duration-200 font-medium py-2 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-cyan-600' 
                      : 'text-gray-700 hover:text-cyan-600'
                  }`}
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {aiServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors py-1"
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
                  className={`flex items-center justify-between w-full transition-colors duration-200 font-medium py-2 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-cyan-600' 
                      : 'text-gray-700 hover:text-cyan-600'
                  }`}
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {itServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors py-1"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/micro-saas"
                className={`block transition-colors duration-200 font-medium py-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>

              <Link
                to="/enterprise"
                className={`block transition-colors duration-200 font-medium py-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
                onClick={closeAllMenus}
              >
                Enterprise
              </Link>

              <Link
                to="/contact"
                className={`block transition-colors duration-200 font-medium py-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
                onClick={closeAllMenus}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;