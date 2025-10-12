import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-6"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        AI Services
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Content Generator
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Chatbot Builder
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-analytics-dashboard" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Analytics Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-email-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Email Assistant
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-voice-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Voice Assistant
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Automation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center">
                        <Cloud className="w-5 h-5 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/cloud-migration" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Cloud Migration
                          </Link>
                        </li>
                        <li>
                          <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Cybersecurity Solutions
                          </Link>
                        </li>
                        <li>
                          <Link to="/devops-cicd" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            DevOps & CI/CD
                          </Link>
                        </li>
                        <li>
                          <Link to="/data-analytics" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Data Analytics
                          </Link>
                        </li>
                        <li>
                          <Link to="/mobile-development" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Mobile Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/web-development" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Web Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-white font-medium py-2">AI Services</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/ai-content-generator" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Content Generator
                  </Link>
                  <Link 
                    to="/ai-chatbot-builder" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Chatbot Builder
                  </Link>
                  <Link 
                    to="/ai-analytics-dashboard" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Analytics Dashboard
                  </Link>
                  <Link 
                    to="/ai-email-assistant" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Email Assistant
                  </Link>
                  <Link 
                    to="/ai-voice-assistant" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Voice Assistant
                  </Link>
                  <Link 
                    to="/ai-automation" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Automation
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-white font-medium py-2">IT Services</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/cloud-migration" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Cloud Migration
                  </Link>
                  <Link 
                    to="/cybersecurity-solutions" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Cybersecurity Solutions
                  </Link>
                  <Link 
                    to="/devops-cicd" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    DevOps & CI/CD
                  </Link>
                  <Link 
                    to="/data-analytics" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Data Analytics
                  </Link>
                  <Link 
                    to="/mobile-development" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Mobile Development
                  </Link>
                  <Link 
                    to="/web-development" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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
