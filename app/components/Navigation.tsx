'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Play, Pause, RefreshCw, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Share, ExternalLink, Info, HelpCircle, ChevronRight, ChevronDown as ChevronDownIcon, ChevronUp, ChevronLeft, Menu as MenuIcon, X as XIcon, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, MoreHorizontal, MoreVertical, Settings2, User, UserPlus, UserMinus, UserCheck, UserX, Users2, UserCog, UserSearch, UserEdit, UserCheck2, UserPlus2, UserMinus2, UserX2, UserCog2, UserSearch2, UserEdit2, UserCheck3, UserPlus3, UserMinus3, UserX3, UserCog3, UserSearch3, UserEdit3, UserCheck4, UserPlus4, UserMinus4, UserX4, UserCog4, UserSearch4, UserEdit4, UserCheck5, UserPlus5, UserMinus5, UserX5, UserCog5, UserSearch5, UserEdit5, UserCheck6, UserPlus6, UserMinus6, UserX6, UserCog6, UserSearch6, UserEdit6, UserCheck7, UserPlus7, UserMinus7, UserX7, UserCog7, UserSearch7, UserEdit7, UserCheck8, UserPlus8, UserMinus8, UserX8, UserCog8, UserSearch8, UserEdit8, UserCheck9, UserPlus9, UserMinus9, UserX9, UserCog9, UserSearch9, UserEdit9, UserCheck10, UserPlus10, UserMinus10, UserX10, UserCog10, UserSearch10, UserEdit10 } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

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
    setCompanyOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setCompanyOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
    setCompanyOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setCompanyOpen(false);
  }, [microSaasOpen]);

  const toggleCompany = useCallback(() => {
    setCompanyOpen(!companyOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [companyOpen]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setCompanyOpen(false);
  }, []);

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights', price: '$1,999/month' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows', price: '$2,499/month' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations', price: '$1,499/month' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management', price: '$1,799/month' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection', price: '$2,299/month' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights', price: '$1,999/month' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions', price: '$2,999/month' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology', price: '$2,499/month' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis', price: '$2,299/month' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition', price: '$1,799/month' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization', price: '$1,999/month' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI', price: '$1,599/month' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions', price: '$2,999/month' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management', price: '$1,499/project' },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security', price: '$2,499/month' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage', price: '$1,999/month' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps', price: '$3,999/project' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications', price: '$2,999/project' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment', price: '$2,999/month' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support', price: '$1,999/month' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence', price: '$2,499/month' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions', price: '$4,999/project' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup', price: '$2,999/project' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management', price: '$1,499/month' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform', price: '$99/month' },
    { name: 'Zion AI Chat', href: '/zion-ai-chat', icon: MessageCircle, description: 'AI customer support', price: '$79/month' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring', price: '$149/month' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery', price: '$89/month' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation', price: '$69/month' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM', price: '$119/month' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform', price: '$99/month' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform', price: '$79/month' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management AI', price: '$89/month' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing AI', price: '$69/month' }
  ];

  const companyPages = [
    { name: 'About Us', href: '/about', icon: Info, description: 'Learn about our mission' },
    { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch' }
  ];

  const mainServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence Solutions' },
    { name: 'IT Services', href: '/it-services', icon: Server, description: 'Information Technology Solutions' },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Package, description: 'Ready-to-use Business Tools' },
    { name: 'Consultation', href: '/consultation', icon: MessageCircle, description: 'Expert Technology Consulting' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* Main Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[400px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">Our Services</h3>
                    <p className="text-sm text-gray-400">Complete technology solutions</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {mainServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={closeAllMenus}
                        className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
                    <p className="text-sm text-gray-400">Advanced artificial intelligence solutions</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={closeAllMenus}
                        className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                          <div className="text-cyan-400 text-xs font-semibold">{service.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Server className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Complete IT infrastructure solutions</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={closeAllMenus}
                        className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                          <div className="text-cyan-400 text-xs font-semibold">{service.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Package className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">Micro SaaS Tools</h3>
                    <p className="text-sm text-gray-400">Ready-to-use AI-powered business tools</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={closeAllMenus}
                        className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-green-300 transition-colors">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                          <div className="text-cyan-400 text-xs font-semibold">{service.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Company Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleCompany}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {companyOpen && (
                <div className="absolute top-full left-0 mt-3 w-[300px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">Company</h3>
                    <p className="text-sm text-gray-400">Learn more about us</p>
                  </div>
                  <div className="space-y-2">
                    {companyPages.map((page, index) => (
                      <Link
                        key={index}
                        to={page.href}
                        onClick={closeAllMenus}
                        className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <page.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-purple-300 transition-colors">{page.name}</div>
                          <div className="text-gray-400 text-sm">{page.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105 cyber-button"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                onClick={closeAllMenus}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  Services
                </div>
                {mainServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    onClick={closeAllMenus}
                    className="block px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  AI Services
                </div>
                {aiServices.slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    onClick={closeAllMenus}
                    className="block px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  IT Services
                </div>
                {itServices.slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    onClick={closeAllMenus}
                    className="block px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  Micro SaaS
                </div>
                {microSaasServices.slice(0, 6).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    onClick={closeAllMenus}
                    className="block px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  Company
                </div>
                {companyPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.href}
                    onClick={closeAllMenus}
                    className="block px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/pricing"
                onClick={closeAllMenus}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Pricing
              </Link>
              
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 cyber-button"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: +1 302 464 0950</span>
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