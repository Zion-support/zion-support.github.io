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

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye, description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', icon: Heart, description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign, description: 'Fintech AI' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings, description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield, description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', icon: Code, description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', icon: LinkIcon, description: 'API solutions' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi, description: 'Network setup' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-xl z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-6">
                        {/* AI Services */}
                        <div>
                          <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                            <Brain className="w-5 h-5 mr-2" />
                            AI Services
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {aiServices.slice(0, 4).map((service, index) => (
                              <Link
                                key={index}
                                to={service.url}
                                className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
                              >
                                <service.icon className="w-4 h-4 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                                <div>
                                  <div className="text-sm font-medium text-white group-hover:text-cyan-400">{service.name}</div>
                                  <div className="text-xs text-gray-400">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/ai-services"
                            className="mt-3 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                          >
                            View All AI Services
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>

                        {/* IT Services */}
                        <div>
                          <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                            <Cloud className="w-5 h-5 mr-2" />
                            IT Services
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {itServices.slice(0, 4).map((service, index) => (
                              <Link
                                key={index}
                                to={service.url}
                                className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
                              >
                                <service.icon className="w-4 h-4 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                                <div>
                                  <div className="text-sm font-medium text-white group-hover:text-purple-400">{service.name}</div>
                                  <div className="text-xs text-gray-400">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/it-services"
                            className="mt-3 inline-flex items-center text-sm text-purple-400 hover:text-purple-300 font-medium"
                          >
                            View All IT Services
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>

                        {/* Micro SAAS */}
                        <div>
                          <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                            <Code className="w-5 h-5 mr-2" />
                            Micro SAAS
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {microSaasServices.slice(0, 4).map((service, index) => (
                              <Link
                                key={index}
                                to={service.url}
                                className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
                              >
                                <service.icon className="w-4 h-4 text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                                <div>
                                  <div className="text-sm font-medium text-white group-hover:text-green-400">{service.name}</div>
                                  <div className="text-xs text-gray-400">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/micro-saas"
                            className="mt-3 inline-flex items-center text-sm text-green-400 hover:text-green-300 font-medium"
                          >
                            View All Micro SAAS
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>

              <Link
                to="/blog"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-gray-700/50">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/ai-services"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>

              <Link
                to="/it-services"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>

              <Link
                to="/micro-saas"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Micro SAAS
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/blog"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-2 rounded-lg font-semibold text-base hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block text-center mt-4"
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
