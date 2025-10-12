'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Cloud, Code, Zap, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  const aiServices = [
    { name: 'AI Content Generator', url: '/ai-content-generator', icon: Brain },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: Brain },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', icon: Brain },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', icon: Brain },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', icon: Brain },
    { name: 'AI Automation', url: '/ai-automation', icon: Brain }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Code },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Code },
    { name: 'Data Analytics', url: '/data-analytics', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Code },
    { name: 'Web Development', url: '/web-development', icon: Code }
  ];

  const microSaasServices = [
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', icon: Zap },
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', icon: Zap },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', icon: Zap },
    { name: 'Zion Customer Insights', url: '/zion-customer-insights', icon: Zap },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant', icon: Zap },
    { name: 'Zion AI SEO Optimizer', url: '/zion-ai-seo-optimizer', icon: Zap }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
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
                        {aiServices.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center">
                        <Cloud className="w-5 h-5 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-3">
                        {itServices.map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                            >
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

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {microSaasOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl p-6"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Micro SAAS Products
                  </h3>
                  <ul className="space-y-3">
                    {microSaasServices.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.url} 
                          className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Micro SAAS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
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