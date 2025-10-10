'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const aiServices = [
    { name: 'AI Strategy & Consulting', href: '/ai-services', icon: Brain, description: 'Strategic AI consulting' },
    { name: 'Machine Learning', href: '/ai-services', icon: Cpu, description: 'Custom ML models' },
    { name: 'Natural Language Processing', href: '/ai-services', icon: MessageCircle, description: 'NLP solutions' },
    { name: 'Computer Vision', href: '/ai-services', icon: Eye, description: 'Visual recognition' },
    { name: 'AI Automation', href: '/ai-services', icon: Zap, description: 'Process automation' },
    { name: 'AI Security', href: '/ai-services', icon: Shield, description: 'AI-powered security' },
    { name: 'AI Analytics', href: '/ai-services', icon: BarChart, description: 'Data insights' },
    { name: 'AI Cloud Infrastructure', href: '/ai-services', icon: Cloud, description: 'AI infrastructure' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/it-services', icon: Cloud, description: 'Cloud solutions' },
    { name: 'Cybersecurity', href: '/it-services', icon: Shield, description: 'Security services' },
    { name: 'DevOps & CI/CD', href: '/it-services', icon: Settings, description: 'Development operations' },
    { name: 'Database Management', href: '/it-services', icon: Database, description: 'Database solutions' },
    { name: 'Managed IT Services', href: '/it-services', icon: Monitor, description: 'Complete IT management' },
    { name: 'IT Consulting', href: '/it-services', icon: Users, description: 'Strategic IT guidance' },
    { name: 'Data Analytics', href: '/it-services', icon: BarChart, description: 'Business intelligence' },
    { name: 'Web Development', href: '/it-services', icon: Code, description: 'Custom web apps' },
    { name: 'Mobile Development', href: '/it-services', icon: Smartphone, description: 'Mobile applications' },
    { name: 'Process Automation', href: '/it-services', icon: Zap, description: 'Workflow automation' },
    { name: 'Network Infrastructure', href: '/it-services', icon: Network, description: 'Network solutions' },
    { name: 'IT Support', href: '/it-services', icon: Users, description: 'Technical support' }
  ];

  const microSaasServices = [
    { name: 'Analytics Pro', href: '/micro-saas', icon: BarChart, description: 'Business analytics' },
    { name: 'Chat AI', href: '/micro-saas', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Security Shield', href: '/micro-saas', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Cloud Vault', href: '/micro-saas', icon: Cloud, description: 'Backup solutions' },
    { name: 'Performance AI', href: '/micro-saas', icon: TrendingUp, description: 'Performance monitoring' },
    { name: 'Workflow AI', href: '/micro-saas', icon: Zap, description: 'Process automation' },
    { name: 'Email Marketing Pro', href: '/micro-saas', icon: Mail, description: 'Email campaigns' },
    { name: 'Finance AI', href: '/micro-saas', icon: DollarSign, description: 'Financial management' },
    { name: 'HR Management', href: '/micro-saas', icon: Users, description: 'Human resources' },
    { name: 'E-commerce AI', href: '/micro-saas', icon: ShoppingCart, description: 'Online store solutions' },
    { name: 'Mobile App Builder', href: '/micro-saas', icon: Smartphone, description: 'No-code app development' },
    { name: 'SEO Optimizer', href: '/micro-saas', icon: TrendingUp, description: 'SEO optimization' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-slate-900/90 backdrop-blur-sm border-b border-cyan-500/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-4">
                        {/* AI Services */}
                        <div>
                          <button
                            onClick={toggleAiServices}
                            className="w-full text-left text-white font-semibold mb-2 flex items-center justify-between"
                          >
                            <div className="flex items-center">
                              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                              AI Services
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {aiServicesOpen && (
                            <div className="grid grid-cols-1 gap-2 ml-6">
                              {aiServices.slice(0, 4).map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.href}
                                  className="block p-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded transition-colors"
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-center">
                                    <service.icon className="w-4 h-4 mr-2" />
                                    <div>
                                      <div className="text-sm font-medium">{service.name}</div>
                                      <div className="text-xs text-gray-400">{service.description}</div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              <Link
                                to="/ai-services"
                                className="block p-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                                onClick={closeAllMenus}
                              >
                                View All AI Services
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* IT Services */}
                        <div>
                          <button
                            onClick={toggleItServices}
                            className="w-full text-left text-white font-semibold mb-2 flex items-center justify-between"
                          >
                            <div className="flex items-center">
                              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
                              IT Services
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {itServicesOpen && (
                            <div className="grid grid-cols-1 gap-2 ml-6">
                              {itServices.slice(0, 4).map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.href}
                                  className="block p-2 text-gray-300 hover:text-purple-400 hover:bg-slate-700/50 rounded transition-colors"
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-center">
                                    <service.icon className="w-4 h-4 mr-2" />
                                    <div>
                                      <div className="text-sm font-medium">{service.name}</div>
                                      <div className="text-xs text-gray-400">{service.description}</div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              <Link
                                to="/it-services"
                                className="block p-2 text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                                onClick={closeAllMenus}
                              >
                                View All IT Services
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Micro SaaS */}
                        <div>
                          <button
                            onClick={toggleMicroSaas}
                            className="w-full text-left text-white font-semibold mb-2 flex items-center justify-between"
                          >
                            <div className="flex items-center">
                              <Zap className="w-5 h-5 mr-2 text-green-400" />
                              Micro SaaS
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {microSaasOpen && (
                            <div className="grid grid-cols-1 gap-2 ml-6">
                              {microSaasServices.slice(0, 4).map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.href}
                                  className="block p-2 text-gray-300 hover:text-green-400 hover:bg-slate-700/50 rounded transition-colors"
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-center">
                                    <service.icon className="w-4 h-4 mr-2" />
                                    <div>
                                      <div className="text-sm font-medium">{service.name}</div>
                                      <div className="text-xs text-gray-400">{service.description}</div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              <Link
                                to="/micro-saas"
                                className="block p-2 text-green-400 hover:text-green-300 text-sm font-medium flex items-center"
                                onClick={closeAllMenus}
                              >
                                View All Micro SaaS
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-4 cyber-button text-sm px-4 py-2"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md border-t border-cyan-500/20">
              <Link
                to="/"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>

              <Link
                to="/ai-services"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>

              <Link
                to="/it-services"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>

              <Link
                to="/micro-saas"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                Micro SaaS
              </Link>

              <Link
                to="/pricing"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block cyber-button text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {(servicesOpen || aiServicesOpen || itServicesOpen || microSaasOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeAllMenus}
        />
      )}
    </nav>
  );
};

export default Navigation;