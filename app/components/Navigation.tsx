'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Briefcase, Handshake, BookOpen, HelpCircle, Headphones, Activity } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMobileMenu = useCallback(() => {
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
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow },
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'API Development', href: '/api-development', icon: LinkIcon },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Users },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
  ];

  const microSaasProducts = [
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
  ];

  const companyPages = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const resourcePages = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Docs', href: '/api-docs', icon: Code },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Support', href: '/support', icon: Headphones },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Status', href: '/status', icon: Activity },
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
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-purple-400 mb-3">AI Solutions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <service.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors">
                <Code className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-cyan-400 mb-3">IT Solutions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <service.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors">
                <Package className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-3">Our Products</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {microSaasProducts.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <product.icon className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors">
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="space-y-2">
                    {companyPages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <page.icon className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-white">{page.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors">
                <FileText className="w-4 h-4" />
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="space-y-2">
                    {resourcePages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <page.icon className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-white">{page.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {/* Mobile AI Services */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-purple-400 px-3 py-2">AI Services</div>
                {aiServices.slice(0, 6).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <service.icon className="w-4 h-4 text-purple-400" />
                    <span className="text-white">{service.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile IT Services */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-cyan-400 px-3 py-2">IT Services</div>
                {itServices.slice(0, 6).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <service.icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-white">{service.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Company Pages */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-blue-400 px-3 py-2">Company</div>
                {companyPages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <page.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-white">{page.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  onClick={closeMobileMenu}
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