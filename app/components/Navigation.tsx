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
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
=======
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
              </span>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
=======
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
<<<<<<< HEAD
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <Link to="/ai-services" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Brain className="h-4 w-4 mr-3" />
                    AI Services
                  </Link>
                  <Link to="/it-services" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Code className="h-4 w-4 mr-3" />
                    IT Services
                  </Link>
                  <Link to="/micro-saas" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Zap className="h-4 w-4 mr-3" />
                    Micro SAAS
                  </Link>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
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
                className="flex items-center text-gray-300 hover:text-white transition-colors"
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
                className="flex items-center text-gray-300 hover:text-white transition-colors"
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
=======
              <button 
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
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
                        <li>
                          <Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Content Generator
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Chatbot Builder
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-analytics-dashboard" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Analytics Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-email-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Email Assistant
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-voice-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Voice Assistant
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                            AI Automation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center">
                        <Cloud className="w-5 h-5 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/cloud-migration" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Cloud Migration
                          </Link>
                        </li>
                        <li>
                          <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Cybersecurity Solutions
                          </Link>
                        </li>
                        <li>
                          <Link to="/devops-cicd" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            DevOps & CI/CD
                          </Link>
                        </li>
                        <li>
                          <Link to="/data-analytics" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Data Analytics
                          </Link>
                        </li>
                        <li>
                          <Link to="/mobile-development" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Mobile Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/web-development" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            Web Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
=======
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            
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
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
=======
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
<<<<<<< HEAD
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
=======
              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
<<<<<<< HEAD
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
=======
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-white font-medium py-2">AI Services</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/ai-content-generator" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Content Generator
                  </Link>
                  <Link 
                    to="/ai-chatbot-builder" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Chatbot Builder
                  </Link>
                  <Link 
                    to="/ai-analytics-dashboard" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Analytics Dashboard
                  </Link>
                  <Link 
                    to="/ai-email-assistant" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Email Assistant
                  </Link>
                  <Link 
                    to="/ai-voice-assistant" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Voice Assistant
                  </Link>
                  <Link 
                    to="/ai-automation" 
                    className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Automation
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-white font-medium py-2">IT Services</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/cloud-migration" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Cloud Migration
                  </Link>
                  <Link 
                    to="/cybersecurity-solutions" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Cybersecurity Solutions
                  </Link>
                  <Link 
                    to="/devops-cicd" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    DevOps & CI/CD
                  </Link>
                  <Link 
                    to="/data-analytics" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Data Analytics
                  </Link>
                  <Link 
                    to="/mobile-development" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Mobile Development
                  </Link>
                  <Link 
                    to="/web-development" 
                    className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
<<<<<<< HEAD
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
=======
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
