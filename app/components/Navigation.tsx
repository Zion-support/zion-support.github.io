'use client';
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

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye, description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', icon: Heart, description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign, description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', icon: FileText, description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', icon: TrendingUp, description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings, description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield, description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', icon: Code, description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', icon: LinkIcon, description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', icon: Server, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', icon: Database, description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi, description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', icon: Package, description: 'Asset lifecycle' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' }
  ];

  const fiveGServices = [
    { name: '5G Smart City Solutions', url: '/5g-smart-city-solutions', icon: Globe, description: 'Smart city infrastructure' },
    { name: '5G Implementation', url: '/5g-implementation', icon: Wifi, description: '5G network deployment' },
    { name: '5G Network Infrastructure', url: '/5g-network-infrastructure', icon: Server, description: '5G infrastructure setup' },
    { name: '5G IoT Solutions', url: '/5g-iot-solutions', icon: Cpu, description: 'IoT connectivity' },
    { name: '5G Edge Computing', url: '/5g-edge-computing', icon: Cpu, description: 'Edge processing' },
    { name: '5G Private Networks', url: '/5g-private-networks', icon: Lock, description: 'Private 5G networks' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </span>
              <span className="text-xs text-cyan-400 font-medium tracking-wider">
                AI & IT SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-xl shadow-cyan-500/10 p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        AI Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {aiServices.slice(0, 6).map((service, index) => (
                          <Link
                            key={index}
                            to={service.url}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                          >
                            <service.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-cyan-400">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400">
                                {service.description}
                              </div>
                            </div>
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
                      <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                        <Cloud className="w-5 h-5 mr-2" />
                        IT Services
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {itServices.slice(0, 6).map((service, index) => (
                          <Link
                            key={index}
                            to={service.url}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-500/10 transition-colors group"
                          >
                            <service.icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-purple-400">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/it-services"
                          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 text-sm font-medium mt-2"
                        >
                          <span>View All IT Services</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Micro SAAS */}
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {microSaasServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.url}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-500/10 transition-colors group"
                          >
                            <service.icon className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-green-400">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/micro-saas"
                          className="flex items-center space-x-2 text-green-400 hover:text-green-300 text-sm font-medium mt-2"
                        >
                          <span>View All Micro SAAS</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Pricing
            </Link>
            
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Micro SAAS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-center mt-4"
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
