'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package } from 'lucide-react';

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
        setServicesOpen(false);
        setAiServicesOpen(false);
        setItServicesOpen(false);
        setMicroSaasOpen(false);
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

  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', icon: Brain },
    { name: 'Machine Learning', url: '/ai-services', icon: Cpu },
    { name: 'Natural Language Processing', url: '/ai-services', icon: MessageCircle },
    { name: 'Computer Vision', url: '/ai-services', icon: Monitor },
    { name: 'AI Automation', url: '/ai-services', icon: Settings },
    { name: 'AI Data Analytics', url: '/ai-services', icon: BarChart },
    { name: 'AI Customer Support', url: '/ai-services', icon: Users },
    { name: 'AI Content Generation', url: '/ai-services', icon: FileText },
    { name: 'AI Cybersecurity', url: '/ai-services', icon: Shield },
    { name: 'AI Healthcare', url: '/ai-services', icon: Heart }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', icon: Cloud },
    { name: 'DevOps & CI/CD', url: '/it-services', icon: Settings },
    { name: 'Cybersecurity', url: '/it-services', icon: Shield },
    { name: 'Managed IT Services', url: '/it-services', icon: Server },
    { name: 'Database Management', url: '/it-services', icon: Database },
    { name: 'Network Solutions', url: '/it-services', icon: Globe },
    { name: 'IT Consulting', url: '/it-services', icon: Users },
    { name: 'System Integration', url: '/it-services', icon: LinkIcon },
    { name: 'IT Support', url: '/it-services', icon: Phone },
    { name: 'IT Training', url: '/it-services', icon: Target }
  ];

  const microSaasServices = [
    { name: 'AI Chatbot Builder', url: '/micro-saas', icon: MessageCircle },
    { name: 'Analytics Dashboard', url: '/micro-saas', icon: BarChart },
    { name: 'Lead Generation', url: '/micro-saas', icon: Target },
    { name: 'Content Generator', url: '/micro-saas', icon: FileText },
    { name: 'Email Assistant', url: '/micro-saas', icon: Mail },
    { name: 'Task Manager Pro', url: '/micro-saas', icon: CheckSquare },
    { name: 'Expense Tracker', url: '/micro-saas', icon: DollarSign },
    { name: 'Inventory Manager', url: '/micro-saas', icon: Package },
    { name: 'Project Management', url: '/micro-saas', icon: Calendar },
    { name: 'CRM Lite', url: '/micro-saas', icon: Users }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Status Page', url: '/status' },
    { name: 'Support', url: '/support' },
    { name: 'Training', url: '/training' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
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
                        <div className="grid grid-cols-1 gap-2">
                          {aiServices.slice(0, 5).map((service, index) => (
                            <Link
                              key={index}
                              to={service.url}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors group"
                            >
                              <service.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                              <span className="text-gray-300 group-hover:text-white">{service.name}</span>
                            </Link>
                          ))}
                          <Link
                            to="/ai-services"
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2"
                          >
                            <span>View All AI Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* IT Services */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
                          IT Services
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {itServices.slice(0, 5).map((service, index) => (
                            <Link
                              key={index}
                              to={service.url}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors group"
                            >
                              <service.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                              <span className="text-gray-300 group-hover:text-white">{service.name}</span>
                            </Link>
                          ))}
                          <Link
                            to="/it-services"
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2"
                          >
                            <span>View All IT Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Micro SaaS */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Code className="w-5 h-5 text-cyan-400 mr-2" />
                          Micro SaaS
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {microSaasServices.slice(0, 5).map((service, index) => (
                            <Link
                              key={index}
                              to={service.url}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors group"
                            >
                              <service.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                              <span className="text-gray-300 group-hover:text-white">{service.name}</span>
                            </Link>
                          ))}
                          <Link
                            to="/micro-saas"
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2"
                          >
                            <span>View All Micro SaaS</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="space-y-2">
                      {companyLinks.map((link, index) => (
                        <Link
                          key={index}
                          to={link.url}
                          className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <span>Support</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="space-y-2">
                      {supportLinks.map((link, index) => (
                        <Link
                          key={index}
                          to={link.url}
                          className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="cyber-button px-6 py-2 text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">AI Services</h4>
                      {aiServices.slice(0, 3).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">IT Services</h4>
                      {itServices.slice(0, 3).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400">Micro SaaS</h4>
                      {microSaasServices.slice(0, 3).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
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
                to="/about"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/blog"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="cyber-button w-full text-center py-3"
                  onClick={() => setIsOpen(false)}
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