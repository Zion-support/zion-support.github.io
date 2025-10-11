'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Cpu, 
  Zap, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeAllMenus();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: Brain },
    { name: 'AI Automation', url: '/ai-automation', icon: Cpu },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: Brain },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Brain },
    { name: 'AI Customer Support', url: '/ai-customer-support', icon: Brain },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Brain },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Brain },
    { name: 'AI Content Generator', url: '/ai-content-generator', icon: Brain }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Brain },
    { name: 'Web Development', url: '/web-development', icon: Cpu },
    { name: 'Mobile Development', url: '/mobile-development', icon: Cpu },
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud }
  ];

  const microSaas = [
    { name: 'AI Content Writer', url: '/micro-saas/ai-content-writer', icon: Brain },
    { name: 'Analytics Dashboard', url: '/micro-saas/analytics-dashboard', icon: Cpu },
    { name: 'Appointment Scheduler', url: '/micro-saas/appointment-scheduler', icon: Cpu },
    { name: 'Chat Analytics', url: '/micro-saas/chat-analytics', icon: Brain },
    { name: 'Content Generator', url: '/micro-saas/content-generator', icon: Brain },
    { name: 'Document Processor', url: '/micro-saas/document-processor', icon: Cpu }
  ];

  return (
    <nav className="relative z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {/* AI Services */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                          AI Services
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {aiServices.slice(0, 4).map((service) => (
                            <Link
                              key={service.name}
                              to={service.url}
                              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                            >
                              <service.icon className="w-4 h-4" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/ai-services"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 inline-flex items-center"
                        >
                          View All AI Services <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>

                      {/* IT Services */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Cloud className="w-5 h-5 text-purple-400 mr-2" />
                          IT Services
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {itServices.slice(0, 4).map((service) => (
                            <Link
                              key={service.name}
                              to={service.url}
                              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 py-1"
                            >
                              <service.icon className="w-4 h-4" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/it-services"
                          className="text-purple-400 hover:text-purple-300 text-sm font-medium mt-2 inline-flex items-center"
                        >
                          View All IT Services <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>

                      {/* Micro SaaS */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Cpu className="w-5 h-5 text-pink-400 mr-2" />
                          Micro SaaS
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {microSaas.slice(0, 4).map((service) => (
                            <Link
                              key={service.name}
                              to={service.url}
                              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-200 py-1"
                            >
                              <service.icon className="w-4 h-4" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/micro-saas"
                          className="text-pink-400 hover:text-pink-300 text-sm font-medium mt-2 inline-flex items-center"
                        >
                          View All Micro SaaS <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Pricing
            </Link>
            
            <Link
              to="/blog"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="space-y-1">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                >
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {aiServices.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.url}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/ai-services"
                      className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                >
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.url}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/it-services"
                      className="block px-3 py-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All IT Services →
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                >
                  <span>Micro SaaS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="pl-6 space-y-1">
                    {microSaas.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.url}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/micro-saas"
                      className="block px-3 py-2 text-sm text-pink-400 hover:text-pink-300 transition-colors duration-200 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SaaS →
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/consultation"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;