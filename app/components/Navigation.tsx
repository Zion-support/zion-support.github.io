import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi, Shield } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const aiServices = [
    { name: 'AI Content Generation', url: '/ai-content-generator', icon: Code },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: Brain },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', icon: Globe },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', icon: Code },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', icon: Smartphone },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Code },
    { name: 'Data Analytics', url: '/data-analytics', icon: Globe },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', url: '/web-development', icon: Code }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-gray-700 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Brain className="h-4 w-4 mr-2" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              <service.icon className="h-3 w-3 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* IT Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Cloud className="h-4 w-4 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              to={service.url}
                              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                              onClick={() => setServicesOpen(false)}
                            >
                              <service.icon className="h-3 w-3 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-gray-800">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <div className="text-cyan-400 text-sm font-semibold mb-2">AI Services</div>
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="text-cyan-400 text-sm font-semibold mb-2 mt-4">IT Services</div>
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="block mx-3 my-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
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