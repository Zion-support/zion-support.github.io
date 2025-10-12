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

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield },
    { name: 'AI CRM', url: '/ai-crm', icon: Users },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Document Processing', url: '/ai-document-processing', icon: FileText }
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

  const microSaasServices = [
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
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', icon: Box },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', icon: DollarSign }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                AI Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                IT Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                Micro SAAS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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
