import React, { useState, useEffect } from 'react';
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
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

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield },
    { name: 'AI CRM', url: '/ai-crm', icon: Users },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Workflow }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'API Development', url: '/api-development', icon: LinkIcon },
    { name: 'Database Management', url: '/database-management', icon: Database },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings },
    { name: 'IT Support', url: '/it-support', icon: Users },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', url: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi },
    { name: 'IT Asset Management', url: '/it-asset-management', icon: Package }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', url: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', url: '/zion-project-master', icon: CheckSquare },
    { name: 'Zion Email Automation', url: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', icon: Package },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', icon: DollarSign }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAiServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                AI Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-purple-500/20 py-2">
                  {aiServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                        onClick={() => setAiServicesOpen(false)}
                      >
                        <IconComponent className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleItServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                IT Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-purple-500/20 py-2">
                  {itServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                        onClick={() => setItServicesOpen(false)}
                      >
                        <IconComponent className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Micro SaaS <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-purple-500/20 py-2">
                  {microSaas.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                        onClick={() => setMicroSaasOpen(false)}
                      >
                        <IconComponent className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Micro SaaS
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md font-semibold text-center"
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