import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

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

  const microSaasProducts = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', url: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', url: '/zion-project-master', icon: Calendar },
    { name: 'Zion Email Automation', url: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', icon: Package },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', icon: DollarSign }
  ];

  const mainNavItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services', hasDropdown: true },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative group">
                      <button
                        onClick={toggleServices}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      
                      {/* Services Dropdown */}
                      {servicesOpen && (
                        <div className="absolute left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-gray-700 py-4 z-50">
                          <div className="px-4 py-2 border-b border-gray-700">
                            <h3 className="text-lg font-semibold text-white">Our Services</h3>
                          </div>
                          
                          {/* AI Services */}
                          <div className="px-4 py-2">
                            <button
                              onClick={toggleAiServices}
                              className="w-full flex items-center justify-between text-left text-white hover:text-purple-400 transition-colors"
                            >
                              <div className="flex items-center">
                                <Brain className="h-5 w-5 mr-2" />
                                <span className="font-medium">AI Services</span>
                              </div>
                              <ChevronDown className={`h-4 w-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {aiServicesOpen && (
                              <div className="mt-2 ml-6 space-y-1">
                                {aiServices.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.url}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors py-1"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <service.icon className="h-4 w-4 mr-2" />
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* IT Services */}
                          <div className="px-4 py-2">
                            <button
                              onClick={toggleItServices}
                              className="w-full flex items-center justify-between text-left text-white hover:text-cyan-400 transition-colors"
                            >
                              <div className="flex items-center">
                                <Code className="h-5 w-5 mr-2" />
                                <span className="font-medium">IT Services</span>
                              </div>
                              <ChevronDown className={`h-4 w-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {itServicesOpen && (
                              <div className="mt-2 ml-6 space-y-1">
                                {itServices.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.url}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors py-1"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <service.icon className="h-4 w-4 mr-2" />
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Micro SAAS */}
                          <div className="px-4 py-2">
                            <button
                              onClick={toggleMicroSaas}
                              className="w-full flex items-center justify-between text-left text-white hover:text-green-400 transition-colors"
                            >
                              <div className="flex items-center">
                                <Package className="h-5 w-5 mr-2" />
                                <span className="font-medium">Micro SAAS</span>
                              </div>
                              <ChevronDown className={`h-4 w-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {microSaasOpen && (
                              <div className="mt-2 ml-6 space-y-1">
                                {microSaasProducts.map((product) => (
                                  <Link
                                    key={product.name}
                                    to={product.url}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors py-1"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <product.icon className="h-4 w-4 mr-2" />
                                    {product.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.url}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-300">
              <Phone className="h-4 w-4 mr-1" />
              <a href="tel:+13024640950" className="hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Mail className="h-4 w-4 mr-1" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-gray-700">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleServices}
                        className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {servicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          <div className="border-l border-gray-700 pl-4">
                            <button
                              onClick={toggleAiServices}
                              className="w-full text-left text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between"
                            >
                              <div className="flex items-center">
                                <Brain className="h-4 w-4 mr-2" />
                                AI Services
                              </div>
                              <ChevronDown className={`h-4 w-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {aiServicesOpen && (
                              <div className="ml-4 mt-1 space-y-1">
                                {aiServices.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.url}
                                    className="flex items-center text-gray-400 hover:text-white block px-3 py-1 rounded-md text-sm"
                                    onClick={() => {
                                      setServicesOpen(false);
                                      setIsOpen(false);
                                    }}
                                  >
                                    <service.icon className="h-3 w-3 mr-2" />
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="border-l border-gray-700 pl-4">
                            <button
                              onClick={toggleItServices}
                              className="w-full text-left text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between"
                            >
                              <div className="flex items-center">
                                <Code className="h-4 w-4 mr-2" />
                                IT Services
                              </div>
                              <ChevronDown className={`h-4 w-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {itServicesOpen && (
                              <div className="ml-4 mt-1 space-y-1">
                                {itServices.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.url}
                                    className="flex items-center text-gray-400 hover:text-white block px-3 py-1 rounded-md text-sm"
                                    onClick={() => {
                                      setServicesOpen(false);
                                      setIsOpen(false);
                                    }}
                                  >
                                    <service.icon className="h-3 w-3 mr-2" />
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="border-l border-gray-700 pl-4">
                            <button
                              onClick={toggleMicroSaas}
                              className="w-full text-left text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between"
                            >
                              <div className="flex items-center">
                                <Package className="h-4 w-4 mr-2" />
                                Micro SAAS
                              </div>
                              <ChevronDown className={`h-4 w-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {microSaasOpen && (
                              <div className="ml-4 mt-1 space-y-1">
                                {microSaasProducts.map((product) => (
                                  <Link
                                    key={product.name}
                                    to={product.url}
                                    className="flex items-center text-gray-400 hover:text-white block px-3 py-1 rounded-md text-sm"
                                    onClick={() => {
                                      setServicesOpen(false);
                                      setIsOpen(false);
                                    }}
                                  >
                                    <product.icon className="h-3 w-3 mr-2" />
                                    {product.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.url}
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center text-sm text-gray-300 px-3 py-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-300 px-3 py-2">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-300 px-3 py-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
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