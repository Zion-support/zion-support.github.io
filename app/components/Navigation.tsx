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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  const aiServices = [
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye, description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart, description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign, description: 'Fintech AI' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings, description: 'Automation pipelines' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', icon: Shield, description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', icon: Code, description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', icon: LinkIcon, description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', icon: Users, description: '24/7 support' },
    { name: 'Data Analytics', url: '/data-analytics', icon: BarChart, description: 'Business intelligence' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield, description: 'Cybersecurity' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText, description: 'Content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
  ];

  const mainNavItems = [
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services', hasDropdown: true },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                AI & IT Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
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
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Services Dropdown */}
        {servicesOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-gray-700/50 shadow-2xl"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* AI Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                    AI Services
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <p className="text-white font-medium group-hover:text-cyan-300">{service.name}</p>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* IT Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Cloud className="w-5 h-5 text-purple-400 mr-2" />
                    IT Services
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                        <div>
                          <p className="text-white font-medium group-hover:text-purple-300">{service.name}</p>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Micro SAAS */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Code className="w-5 h-5 text-green-400 mr-2" />
                    Micro SAAS
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                        <div>
                          <p className="text-white font-medium group-hover:text-green-300">{service.name}</p>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-gray-700/50 shadow-2xl">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {mainNavItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                          onClick={() => setServicesOpen(!servicesOpen)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {servicesOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-cyan-400">AI Services</h4>
                              {aiServices.slice(0, 4).map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.url}
                                  className="block text-gray-300 hover:text-cyan-400 transition-colors py-1"
                                  onClick={closeMenu}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-purple-400">IT Services</h4>
                              {itServices.slice(0, 4).map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.url}
                                  className="block text-gray-300 hover:text-purple-400 transition-colors py-1"
                                  onClick={closeMenu}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.url}
                        className="block text-gray-300 hover:text-white transition-colors py-2"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
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