import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

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

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const services = [
    { title: 'AI Services', url: '/ai-services', icon: Brain },
    { title: 'IT Services', url: '/it-services', icon: Code },
    { title: 'Cloud Solutions', url: '/cloud-services', icon: Cloud },
    { title: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { title: 'Data Analytics', url: '/data-analytics', icon: BarChart },
    { title: 'DevOps', url: '/devops', icon: Settings }
  ];

  const aiServices = [
    { title: 'AI Marketing', url: '/ai-marketing', icon: TrendingUp },
    { title: 'AI Automation', url: '/ai-automation', icon: Zap },
    { title: 'AI Healthcare', url: '/ai-healthcare', icon: Users },
    { title: 'AI Fintech', url: '/ai-fintech', icon: BarChart }
  ];

  const itServices = [
    { title: 'Cloud Services', url: '/cloud-services', icon: Cloud },
    { title: 'Cybersecurity', url: '/cybersecurity', icon: Shield },
    { title: 'Data Analytics', url: '/data-analytics', icon: BarChart },
    { title: 'DevOps', url: '/devops', icon: Settings }
  ];

  const microSaas = [
    { title: 'AI Email Analyzer', url: '/zion-ai-email-analyzer', icon: Mail },
    { title: 'AI Inventory Manager', url: '/zion-ai-inventory-manager', icon: Database },
    { title: 'AI Performance Optimizer', url: '/zion-ai-performance-optimizer', icon: Target },
    { title: 'AI Social Media Manager', url: '/zion-ai-social-media-manager', icon: Globe },
    { title: 'AI Voice Assistant Pro', url: '/zion-ai-voice-assistant-pro', icon: Smartphone },
    { title: 'Smart Expense Categorizer', url: '/zion-smart-expense-categorizer', icon: FileText },
    { title: 'Smart Inventory Optimizer', url: '/zion-smart-inventory-optimizer', icon: Database }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 py-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        to={service.url}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <span>AI Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {aiServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 py-2"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  {aiServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        to={service.url}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {microSaasOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 py-2"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  {microSaas.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        to={service.url}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                to="/case-studies"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              {/* CTA Button */}
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>
              {/* Mobile Services */}
              <div className="space-y-1">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          to={service.url}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                          onClick={closeAllMenus}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                  onClick={closeAllMenus}
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;