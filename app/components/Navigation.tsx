'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close all dropdowns
  const closeAllDropdowns = useCallback(() => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  // Service data
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions' },
    { name: 'AI Workflow Automation', url: '/ai-automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare' },
    { name: 'AI Financial Services', url: '/ai-financial-services' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'API Development', url: '/api-development' },
    { name: 'IT Support', url: '/it-support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai' },
    { name: 'Zion Security Shield', url: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', url: '/zion-content-studio' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-lg border border-cyan-500/20 rounded-xl shadow-xl z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* AI Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                          <Brain className="w-4 h-4 mr-2" />
                          AI Services
                        </h3>
                        <ul className="space-y-2">
                          {aiServices.slice(0, 4).map((service, index) => (
                            <li key={index}>
                              <Link 
                                to={service.url}
                                className="text-gray-300 hover:text-cyan-400 text-sm transition-colors block py-1"
                                onClick={closeAllDropdowns}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-2 border-t border-cyan-500/20">
                            <Link 
                              to="/ai-services"
                              className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center"
                              onClick={closeAllDropdowns}
                            >
                              View All AI Services
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* IT Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                          <Cloud className="w-4 h-4 mr-2" />
                          IT Services
                        </h3>
                        <ul className="space-y-2">
                          {itServices.slice(0, 4).map((service, index) => (
                            <li key={index}>
                              <Link 
                                to={service.url}
                                className="text-gray-300 hover:text-purple-400 text-sm transition-colors block py-1"
                                onClick={closeAllDropdowns}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-2 border-t border-purple-500/20">
                            <Link 
                              to="/it-services"
                              className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center"
                              onClick={closeAllDropdowns}
                            >
                              View All IT Services
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Micro SAAS */}
                      <div>
                        <h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Micro SAAS
                        </h3>
                        <ul className="space-y-2">
                          {microSaasServices.slice(0, 4).map((service, index) => (
                            <li key={index}>
                              <Link 
                                to={service.url}
                                className="text-gray-300 hover:text-green-400 text-sm transition-colors block py-1"
                                onClick={closeAllDropdowns}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-2 border-t border-green-500/20">
                            <Link 
                              to="/micro-saas"
                              className="text-green-400 hover:text-green-300 text-sm font-semibold flex items-center"
                              onClick={closeAllDropdowns}
                            >
                              View All Micro SAAS
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/services" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              All Services
            </Link>
            
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Pricing
            </Link>
            
            <Link 
              to="/blog" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20">
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-1">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Services
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="pl-6 space-y-1">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">AI Services</h4>
                      {aiServices.slice(0, 3).map((service, index) => (
                        <Link 
                          key={index}
                          to={service.url}
                          className="block px-3 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-purple-400">IT Services</h4>
                      {itServices.slice(0, 3).map((service, index) => (
                        <Link 
                          key={index}
                          to={service.url}
                          className="block px-3 py-1 text-sm text-gray-300 hover:text-purple-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-green-400">Micro SAAS</h4>
                      {microSaasServices.slice(0, 3).map((service, index) => (
                        <Link 
                          key={index}
                          to={service.url}
                          className="block px-3 py-1 text-sm text-gray-300 hover:text-green-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                All Services
              </Link>
              
              <Link 
                to="/pricing" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/consultation"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
