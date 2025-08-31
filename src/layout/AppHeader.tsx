<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Bot, Atom } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
<<<<<<< HEAD
import { Sidebar } from '../components/Sidebar';
import { EnhancedSearch } from '../components/EnhancedSearch';
=======
import React, { useState, useEffect } from 'react.ts';
import { Link              } from 'react-router-dom.ts';
<<<<<<< HEAD
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, FileText import { motion, AnimatePresence              } from 'framer-motion.ts';
=======
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle              } from 'lucide-react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { ThemeToggle              } from '../components/ThemeToggle';
import { ZionLoadingSpinner              } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar              } from '../components/Sidebar';
import { EnhancedSearch              } from '../components/EnhancedSearch';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089

export function AppHeader(...args: any[]): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
<<<<<<< HEAD
  const [hoveredNav, setHoveredNav] = useState<any>(null);
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const handleSearch = async (e: React.FormEvent) => {
=======
<<<<<<< HEAD
  const handleSearch = async (e: anyanyanyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)              => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services-overview', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/ai-services', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics-platform', icon: Brain, description: 'Advanced ML forecasting with 95%+ accuracy' },
    { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', icon: Users, description: 'Personalized CX across all touchpoints' },
    { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Network, description: 'Intelligent inventory & demand forecasting' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'Zero false positive threat detection' },
    { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions', icon: Atom, description: 'Enterprise quantum computing platform' },
    { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', icon: Server, description: 'Ultra-low latency edge processing' },
    { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions', icon: Lock, description: 'Supply chain transparency & DeFi' },
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Intelligent process optimization' },
    { name: 'AI Content Studio Pro', href: '/services/ai-content-studio', icon: BookOpen, description: 'AI-powered content creation' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales automation' },
    { name: 'Smart Contract Scanner', href: '/services/smart-contract-risk-scanner', icon: Shield, description: 'Blockchain security & risk assessment' },
    { name: 'Digital Twin Platform', href: '/services/digital-twin', icon: Rocket, description: 'Real-time system simulation' },
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI medicine & diagnostics' },
    { name: 'Sustainability Solutions', href: '/services/sustainability', icon: Globe, description: 'Green IT & energy optimization' },
    { name: 'Space Tech', href: '/services/space-tech', icon: Rocket, description: 'Satellite & space infrastructure' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge', icon: Cpu, description: 'Smart devices & networks' },
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & automation' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise IT solutions' },
    { name: 'Green IT Solutions', href: '/services/green-it', icon: Globe, description: 'Sustainable technology' },
  ];

  const servicesCategories = [
    {
      name: 'Core Services',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Services Overview', href: '/services-overview', description: 'Complete service portfolio' },
        { name: 'AI Services', href: '/ai-services', description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Intelligent Process Automation' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance', description: 'AI-Powered Data Protection' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', description: 'Proactive Customer Engagement' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' }
      ]
    },
    {
      name: 'Edge & IoT',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', description: 'Smart Devices & Networks' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Ultra-Low Latency Processing' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' }
      ]
    }
  ];

  const solutionsCategories = [
    {
      name: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      solutions: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' }
      ]
    },
    {
      name: 'Quantum & Emerging',
      icon: Star,
      color: 'from-indigo-600 to-purple-600',
      solutions: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Next-gen quantum computing' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Advanced security solutions' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' }
      ]
    },
    {
      name: 'Innovation Showcase',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600',
      solutions: [
        { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
        { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Services Showcase', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
  ];

  const companyCategories = [
    {
      name: 'About Us',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' }
      ]
    }
  ];

  const supportCategories = [
    {
      name: 'Help & Support',
      icon: HelpCircle,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
        { name: 'Community', href: '/community', description: 'User community' }
      ]
    }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
  ];

  return (
<<<<<<< HEAD
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
=======
          <nav className="hidden lg: anyanyanyanyanyanyanyanyanyanyanyanyanyflex items-center space-x-8">
            {/* Main Navigation */}
            {mainNavigation.map((item)              => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"

                {item.name}
=======
  // Group services by category for better organization
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, any>);

  const categoryColors = {
    'AI': 'from-cyan-400 to-blue-500',
    'IoT': 'from-green-400 to-emerald-500',
    'Security': 'from-red-400 to-pink-500',
    'Cloud': 'from-blue-400 to-indigo-500',
    'Analytics': 'from-purple-400 to-pink-500',
    'Healthcare': 'from-red-400 to-orange-500',
    'Sustainability': 'from-green-400 to-teal-500',
    'SaaS': 'from-indigo-400 to-purple-500',
    'Compliance': 'from-yellow-400 to-orange-500',
    'E-commerce': 'from-pink-400 to-rose-500',
    'Automation': 'from-teal-400 to-cyan-500',
    'CRM': 'from-blue-400 to-cyan-500',
    'Marketing': 'from-purple-400 to-indigo-500',
    'IT': 'from-gray-400 to-slate-500',
    'Support': 'from-blue-400 to-teal-500',
    'Privacy': 'from-indigo-400 to-purple-500',
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'futuristic-nav' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      Zion Tech Group
                    </h1>
                    <p className="text-xs text-slate-400 group-hover:text-cyan-300 transition-colors duration-300">
                      Future Technology Solutions
                    </p>
                  </div>
                </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </Link>
            </div>

<<<<<<< HEAD
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"

                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
=======
            {/* Desktop Navigation */}
            <nav className="hidden lg: anyanyanyanyanyanyanyanyanyanyanyanyanyflex items-center space-x-1">
              {navigation.slice(0, 6).map((item)              => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-item px-3 py-2 text-sm font-medium rounded-md relative group"
                >
                  {item.name}
                  {item.name === 'Services' && (
                    <ChevronDown className="ml-1 inline-block w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
              ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="nav-item px-3 py-2 text-sm font-medium rounded-md flex items-center"
                >
                  <Rocket className="w-4 h-4 mr-1" />
                  Services
                  <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {servicesDropdownOpen && (
<<<<<<< HEAD
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-zion-slate-dark/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-500/20 p-6"

                    <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 xl:grid-cols-3 gap-6">
                      {servicesCategories.map((category)              => (
                        <div key={category.title} className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <category.icon className={`w-5 h-5 text-cyan-400`} />
                            <h3 className="font-semibold text-white">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"

                                <div className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors duration-200">
=======
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      {/* Featured Services Section */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Featured Micro SAAS</h3>
                        <div className="grid grid-cols-1 gap-3 mb-4">
                          {services.filter(service => service.featured).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center p-4 rounded-lg bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20 transition-all duration-200 group hover:scale-105"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-lg flex items-center justify-center group-hover:from-cyan-400/50 group-hover:to-blue-500/50 transition-all duration-200">
                                <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                              </div>
                              <div className="ml-4 flex-1">
                                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ChevronDown className="w-4 h-4 text-cyan-400 rotate-[-90deg]" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* All Services Section */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">All Services</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {services.filter(service => !service.featured).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group hover:scale-105"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                                <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                              </div>
                              <div className="ml-4 flex-1">
                                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ChevronDown className="w-4 h-4 text-cyan-400 rotate-[-90deg]" />
                              </div>
                            </Link>
                          ))}
                        </div>
<<<<<<< HEAD
                      ))}
                    </div>

                    {/* Quick Links Section */}
                    <div className="mt-6 pt-6 border-t border-cyan-400/20">
                      <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
                      <div className="grid grid-cols-2 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-3">
                        {quickLinks.map((link)              => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"

                            <link.icon className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                              {link.name}
                            </span>
                          </Link>
                        ))}
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/services"
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                        >
                          View All Services
                          <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navigation.slice(6).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-item px-3 py-2 text-sm font-medium rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/70 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <ZionLoadingSpinner size="sm" />
                    </div>
                  )}
                </div>
              </form>

              {/* Quick Actions */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>

              {/* CTA Button */}
              <Link
                to="/request-quote"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Request Quote
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
=======
    <>
      <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-sm"
                />
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {servicesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {servicesCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{category.name}</h3>
                          <p className="text-sm text-slate-400">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links Section */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                          <link.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-slate-400">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 border-l border-slate-700 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-semibold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="font-medium text-white py-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {servicesCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className="text-sm font-medium text-cyan-400">{category.name}</div>
                                <div className="pl-4 space-y-1">
                                  {category.services.slice(0, 3).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-sm text-slate-300 hover:text-white transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-medium text-white hover:text-cyan-400 transition-colors py-2"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Quick Access</h3>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Contact Us</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <a href="tel:+13024640950" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>+1 302 464 0950</span>
                    </a>
                    <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
