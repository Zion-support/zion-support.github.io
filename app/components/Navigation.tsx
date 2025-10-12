import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Video, Share2 } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  };

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  };

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  };

  const toggleMicroSaas = () => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Video Generator', href: '/zion-ai-video-generator', icon: Video },
    { name: 'AI Social Scheduler', href: '/zion-ai-social-scheduler-pro', icon: Share2 },
    { name: 'AI Email Marketing', href: '/zion-ai-email-marketing-pro', icon: Mail },
    { name: 'AI Customer Support', href: '/zion-ai-customer-support-pro', icon: Headphones }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'API Development', href: '/api-development', icon: Server },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Wifi }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator', icon: Video },
    { name: 'Zion AI Social Scheduler', href: '/zion-ai-social-scheduler-pro', icon: Share2 },
    { name: 'Zion AI Email Marketing', href: '/zion-ai-email-marketing-pro', icon: Mail },
    { name: 'Zion AI Customer Support', href: '/zion-ai-customer-support-pro', icon: MessageCircle }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={toggleAiServices}
              >
                <span>AI Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 py-2">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200"
                      onClick={closeAllMenus}
                    >
                      <service.icon className="h-4 w-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={toggleItServices}
              >
                <span>IT Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 py-2">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200"
                      onClick={closeAllMenus}
                    >
                      <service.icon className="h-4 w-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={toggleMicroSaas}
              >
                <span>Micro SAAS</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 py-2">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200"
                      onClick={closeAllMenus}
                    >
                      <service.icon className="h-4 w-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-purple-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile AI Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                  onClick={toggleAiServices}
                >
                  <span>AI Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="ml-4 space-y-1">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="h-4 w-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                  onClick={toggleItServices}
                >
                  <span>IT Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="ml-4 space-y-1">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="h-4 w-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                  onClick={toggleMicroSaas}
                >
                  <span>Micro SAAS</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="ml-4 space-y-1">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="h-4 w-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                onClick={closeAllMenus}
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