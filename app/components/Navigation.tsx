'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, BookOpen, HelpCircle } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

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
    setResourcesOpen(false);
  }, [microSaasOpen]);

  const toggleResources = useCallback(() => {
    setResourcesOpen(!resourcesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [resourcesOpen]);

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart, description: 'Business intelligence & insights' },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Automated content creation' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI-powered security' },
    { name: 'AI CRM', url: '/ai-crm', icon: Users, description: 'Smart customer management' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Database, description: 'Advanced data insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition & synthesis' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Settings, description: 'Intelligent workflows' },
    { name: 'AI Document Processing', url: '/ai-document-processing', icon: FileText, description: 'Document intelligence' },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign, description: 'Fintech AI solutions' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', icon: TrendingUp, description: 'Future forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP solutions' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield, description: 'Enterprise security' },
    { name: 'Web Development', url: '/web-development', icon: Code, description: 'Modern web applications' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'API Development', url: '/api-development', icon: LinkIcon, description: 'RESTful & GraphQL APIs' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings, description: 'Automation pipelines' },
    { name: 'IT Support', url: '/it-support', icon: Users, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi, description: 'Network setup & management' },
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
    { name: 'Zion Email Automation', url: '/zion-email-automation', icon: Mail, description: 'Email marketing automation' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', icon: Box, description: 'Inventory management' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice automation' }
  ];

  const resources = [
    { name: 'Documentation', url: '/docs', icon: FileText, description: 'Technical documentation' },
    { name: 'API Reference', url: '/api-docs', icon: LinkIcon, description: 'API documentation' },
    { name: 'Tutorials', url: '/tutorials', icon: BookOpen, description: 'Learning resources' },
    { name: 'Blog', url: '/blog', icon: FileText, description: 'Latest insights & news' },
    { name: 'Case Studies', url: '/case-studies', icon: Target, description: 'Success stories' },
    { name: 'FAQ', url: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Support', url: '/support', icon: MessageCircle, description: 'Get help & support' },
    { name: 'Community', url: '/community', icon: Users, description: 'Join our community' }
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
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
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
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
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
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleResources}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      to={resource.url}
                      className="flex items-start px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white group"
                    >
                      <resource.icon className="h-5 w-5 mr-3 mt-0.5 text-blue-400 group-hover:text-blue-300" />
                      <div>
                        <div className="font-medium">{resource.name}</div>
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">{resource.description}</div>
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
                to="/docs"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
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