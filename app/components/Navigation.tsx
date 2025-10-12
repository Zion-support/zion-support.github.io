'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
      if (searchOpen && !(event.target as Element).closest('.search-dropdown')) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, searchOpen]);

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
    { name: 'AI Analytics Dashboard Pro', url: '/ai-analytics-dashboard-pro', icon: BarChart, description: 'Advanced business intelligence' },
    { name: 'AI Content Generator Studio', url: '/ai-content-generator-studio', icon: FileText, description: 'AI-powered content creation' },
    { name: 'AI Customer Support Pro', url: '/ai-customer-support-pro', icon: MessageCircle, description: 'Intelligent 24/7 support' },
    { name: 'AI Workflow Automation Suite', url: '/ai-workflow-automation-suite', icon: Workflow, description: 'Business process automation' },
    { name: 'AI Cybersecurity Monitor Pro', url: '/ai-cybersecurity-monitor-pro', icon: Shield, description: 'Advanced threat detection' },
    { name: 'AI Code Assistant Pro', url: '/ai-code-assistant-pro', icon: Code, description: 'Intelligent coding companion' },
    { name: 'AI Predictive Analytics Engine', url: '/ai-predictive-analytics-engine', icon: TrendingUp, description: 'Business forecasting' },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', icon: FileText, description: 'Smart document processing' },
    { name: 'AI Computer Vision Platform', url: '/ai-computer-vision-platform', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions Suite', url: '/ai-voice-solutions-suite', icon: Mic, description: 'Speech recognition & synthesis' },
    { name: 'AI HR Solutions Platform', url: '/ai-hr-solutions-platform', icon: Users, description: 'Smart HR management' },
    { name: 'AI Financial Analytics Pro', url: '/ai-financial-analytics-pro', icon: DollarSign, description: 'Financial intelligence' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure Setup', url: '/cloud-infrastructure-setup', icon: Cloud, description: 'Complete cloud migration' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield, description: 'Security assessment & implementation' },
    { name: 'Custom Web Development', url: '/custom-web-development', icon: Code, description: 'Modern web applications' },
    { name: 'Mobile App Development', url: '/mobile-app-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'API Development & Integration', url: '/api-development-integration', icon: LinkIcon, description: 'RESTful & GraphQL APIs' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database design & optimization' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings, description: 'Automated deployment pipelines' },
    { name: 'IT Support & Maintenance', url: '/it-support-maintenance', icon: Users, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence solutions' },
    { name: 'Custom Software Development', url: '/custom-software-development', icon: Code, description: 'Tailored software solutions' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi, description: 'Network setup & optimization' },
    { name: 'IT Asset Management', url: '/it-asset-management', icon: Package, description: 'Asset lifecycle management' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText, description: 'Content creation platform' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users, description: 'Smart CRM solution' },
    { name: 'Zion Data Sync', url: '/zion-data-sync', icon: Database, description: 'Data synchronization' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', icon: Target, description: 'Lead generation tool' },
    { name: 'Zion Project Master', url: '/zion-project-master', icon: CheckSquare, description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', icon: Mail, description: 'Email marketing' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', icon: Box, description: 'Inventory management' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice automation' }
  ];

  // Combined search results
  const allServices = [
    ...aiServices.map(service => ({ ...service, category: 'AI Services', color: 'purple' })),
    ...itServices.map(service => ({ ...service, category: 'IT Services', color: 'cyan' })),
    ...microSaasServices.map(service => ({ ...service, category: 'Micro SAAS', color: 'green' }))
  ];

  const filteredServices = searchQuery 
    ? allServices.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-start px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white group"
                    >
                      <service.icon className="h-5 w-5 mr-3 mt-0.5 text-purple-400 group-hover:text-purple-300" />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-start px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white group"
                    >
                      <service.icon className="h-5 w-5 mr-3 mt-0.5 text-cyan-400 group-hover:text-cyan-300" />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-start px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white group"
                    >
                      <service.icon className="h-5 w-5 mr-3 mt-0.5 text-green-400 group-hover:text-green-300" />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative search-dropdown">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Search className="h-4 w-4 mr-2" />
                Search Services
              </button>
              
              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <input
                      type="text"
                      placeholder="Search for services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                      autoFocus
                    />
                  </div>
                  {filteredServices.length > 0 ? (
                    <div className="py-2">
                      {filteredServices.slice(0, 8).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-start px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white group"
                        >
                          <service.icon className={`h-5 w-5 mr-3 mt-0.5 ${
                            service.color === 'purple' ? 'text-purple-400 group-hover:text-purple-300' :
                            service.color === 'cyan' ? 'text-cyan-400 group-hover:text-cyan-300' :
                            'text-green-400 group-hover:text-green-300'
                          }`} />
                          <div className="flex-1">
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                            <div className="text-xs text-gray-500 mt-1">{service.category}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : searchQuery ? (
                    <div className="px-4 py-8 text-center text-gray-400">
                      No services found for "{searchQuery}"
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center text-gray-400">
                      Start typing to search services...
                    </div>
                  )}
                </div>
              )}
            </div>

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
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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