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

  const closeAllMenus = useCallback(() => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  }, []);

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Lock },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'API Development', href: '/api-development', icon: Server },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Users },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: CheckSquare },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Box },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: FileText },
    { name: 'Zion AI Sales Predictor', href: '/zion-ai-sales-predictor', icon: TrendingUp },
    { name: 'Zion AI Customer Churn Predictor', href: '/zion-ai-customer-churn-predictor', icon: Target },
    { name: 'Zion AI Pricing Optimizer', href: '/zion-ai-pricing-optimizer', icon: DollarSign },
    { name: 'Zion AI Inventory Optimizer', href: '/zion-ai-inventory-optimizer', icon: Package },
    { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager', icon: MessageSquare },
    { name: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro', icon: Mail },
    { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro', icon: MessageCircle },
    { name: 'Zion AI Financial Forecaster', href: '/zion-ai-financial-forecaster', icon: TrendingUp }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600/10 to-purple-600/10 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Get Free Quote
              </Link>
              <Link to="/demo" className="text-purple-400 hover:text-purple-300 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* AI Services */}
                      <div>
                        <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                          <Brain className="w-4 h-4 mr-2" />
                          AI Services
                        </h3>
                        <div className="space-y-2">
                          {aiServices.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={closeAllMenus}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/ai-services"
                            onClick={closeAllMenus}
                            className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium py-1"
                          >
                            View All AI Services →
                          </Link>
                        </div>
                      </div>

                      {/* IT Services */}
                      <div>
                        <h3 className="text-purple-400 font-semibold mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          IT Services
                        </h3>
                        <div className="space-y-2">
                          {itServices.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={closeAllMenus}
                              className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/it-services"
                            onClick={closeAllMenus}
                            className="block text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium py-1"
                          >
                            View All IT Services →
                          </Link>
                        </div>
                      </div>

                      {/* Micro SAAS */}
                      <div>
                        <h3 className="text-pink-400 font-semibold mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Micro SAAS
                        </h3>
                        <div className="space-y-2">
                          {microSaasServices.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={closeAllMenus}
                              className="block text-gray-300 hover:text-pink-400 transition-colors text-sm py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/micro-saas"
                            onClick={closeAllMenus}
                            className="block text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium py-1"
                          >
                            View All Micro SAAS →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Pricing
            </Link>
            
            <Link 
              to="/blog" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/demo" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              Demo
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
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              onClick={closeAllMenus}
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              onClick={closeAllMenus}
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
            >
              About
            </Link>

            {/* Mobile Services */}
            <div className="space-y-2">
              <button 
                onClick={toggleAiServices}
                className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors font-medium py-2"
              >
                <span className="flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="ml-4 space-y-2">
                  {aiServices.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeAllMenus}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    onClick={closeAllMenus}
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium py-1"
                  >
                    View All AI Services →
                  </Link>
                </div>
              )}

              <button 
                onClick={toggleItServices}
                className="flex items-center justify-between w-full text-white hover:text-purple-400 transition-colors font-medium py-2"
              >
                <span className="flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  IT Services
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="ml-4 space-y-2">
                  {itServices.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeAllMenus}
                      className="block text-gray-300 hover:text-purple-400 transition-colors text-sm py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/it-services"
                    onClick={closeAllMenus}
                    className="block text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium py-1"
                  >
                    View All IT Services →
                  </Link>
                </div>
              )}

              <button 
                onClick={toggleMicroSaas}
                className="flex items-center justify-between w-full text-white hover:text-pink-400 transition-colors font-medium py-2"
              >
                <span className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Micro SAAS
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="ml-4 space-y-2">
                  {microSaasServices.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeAllMenus}
                      className="block text-gray-300 hover:text-pink-400 transition-colors text-sm py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/micro-saas"
                    onClick={closeAllMenus}
                    className="block text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium py-1"
                  >
                    View All Micro SAAS →
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              onClick={closeAllMenus}
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
            >
              Pricing
            </Link>
            
            <Link 
              to="/blog" 
              onClick={closeAllMenus}
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              onClick={closeAllMenus}
              className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-cyan-500/20">
              <Link 
                to="/demo" 
                onClick={closeAllMenus}
                className="block text-cyan-400 hover:text-cyan-300 transition-colors font-medium py-2"
              >
                Demo
              </Link>
              <Link 
                to="/contact" 
                onClick={closeAllMenus}
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;