import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle, PenTool, Target, TrendingUp, Atom, ShieldCheck, DollarSign, Image, FileText, Smartphone, Eye, Cube, Gauge, Database, AlertTriangle, Key, Server, BarChart3 } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
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

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'Innovative Services Showcase 2027', 
      href: '/innovative-services-showcase-2027', 
      icon: Rocket, 
      description: 'Complete Services Portfolio',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Comprehensive Pricing Guide 2027', 
      href: '/comprehensive-pricing-guide-2027', 
      icon: DollarSign, 
      description: 'Transparent Pricing & Plans',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI Legal Document Analysis', 
      href: '/services/ai-legal-document-analysis', 
      icon: Scale, 
      description: 'Legal AI & Compliance',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Supply Chain Optimization', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Truck, 
      description: 'Supply Chain AI & Analytics',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'AI Healthcare Analytics', 
      href: '/services/ai-healthcare-analytics', 
      icon: Heart, 
      description: 'Healthcare AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Financial Trading', 
      href: '/services/ai-financial-trading', 
      icon: TrendingUp, 
      description: 'Trading AI & Risk Management',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Quantum AI Trading Platform', 
      href: '/services/quantum-ai-trading-platform', 
      icon: Atom, 
      description: 'Quantum Computing Trading',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Workflow Orchestrator', 
      href: '/services/ai-workflow-orchestrator', 
      icon: GitFork, 
      description: 'Workflow Automation AI',
      featured: true,
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      name: 'AI-Powered Cybersecurity', 
      href: '/services/cybersecurity', 
      icon: Shield, 
      description: 'AI Security & Threat Detection',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'IoT & Virtual Replicas',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'AI-Powered Micro CRM', 
      href: '/services/micro-crm', 
      icon: Users, 
      description: 'CRM with AI Insights',
      featured: true,
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'Space Technology Platform', 
      href: '/services/space-tech', 
      icon: Rocket, 
      description: 'Satellite & Space Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Financial Trading', 
      href: '/services/ai-financial-trading', 
      icon: TrendingUp, 
      description: 'AI-Powered Trading & Portfolio Management',
      featured: true,
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      name: 'AI Autonomous Research', 
      href: '/services/ai-autonomous-research-assistant', 
      icon: Brain, 
      description: '24/7 AI Research & Discovery',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Customer Experience', 
      href: '/services/ai-customer-experience-platform', 
      icon: Heart, 
      description: 'AI-Powered CX & Personalization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const servicesCategories = [
    {
      category: 'AI & Automation',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: PenTool },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target },
        { name: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Search },
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-platform', icon: Heart }
      ]
    },
    {
      category: 'Quantum Computing',
      services: [
        { name: 'Quantum AI Trading', href: '/services/quantum-ai-trading-platform', icon: TrendingUp },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Atom },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions', icon: Cpu },
        { name: 'Quantum Cybersecurity', href: '/services/quantum-computing', icon: ShieldCheck }
      ]
    },
    {
      category: 'Blockchain & Web3',
      services: [
        { name: 'Blockchain Development', href: '/services/blockchain-web3-platform', icon: Lock },
        { name: 'DeFi Solutions', href: '/services', icon: DollarSign },
        { name: 'NFT Marketplaces', href: '/services', icon: Image },
        { name: 'Smart Contracts', href: '/services', icon: FileText }
      ]
    },
    {
      category: 'IoT & Edge Computing',
      services: [
        { name: 'IoT Edge Platform', href: '/services/iot-edge-computing-platform', icon: Cpu },
        { name: 'Smart City Solutions', href: '/services', icon: Building },
        { name: 'Industrial IoT', href: '/services', icon: Truck },
        { name: 'Connected Devices', href: '/services', icon: Smartphone }
      ]
    },
    {
      category: 'Digital Twin & Simulation',
      services: [
        { name: 'Digital Twin Platform', href: '/services/digital-twin-platform', icon: Eye },
        { name: '3D Modeling', href: '/services', icon: Cube },
        { name: 'Predictive Maintenance', href: '/services', icon: Gauge },
        { name: 'Asset Management', href: '/services', icon: Database }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      services: [
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield },
        { name: 'Incident Response', href: '/services/incident-response-platform', icon: AlertTriangle },
        { name: 'Security Headers', href: '/services/security-headers-csp', icon: Lock },
        { name: 'Zero Trust Access', href: '/services/zero-trust-network-access', icon: Key }
      ]
    },
    {
      category: 'Cloud & DevOps',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'FinOps Optimization', href: '/services', icon: DollarSign }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {servicesCategories.map((category) => (
                          <div key={category.category} className="space-y-3">
                            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">
                              {category.category}
                            </h3>
                            <div className="space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                                    <service.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                  </div>
                                  <span className="ml-3 text-sm text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/services"
                          className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          View All Services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                      }}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Services Mega Menu */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                          {servicesCategories.map((category) => (
                            <div key={category.name}>
                              <div className={`inline-flex items-center space-x-2 mb-4 p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                                <category.icon className="w-5 h-5" />
                                <span className="font-semibold">{category.name}</span>
                              </div>
                              <ul className="space-y-3">
                                {category.services.map((service) => (
                                  <li key={service.name}>
                                    <Link
                                      to={service.href}
                                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="font-medium text-gray-900">{service.name}</div>
                                      <div className="text-sm text-gray-600">{service.description}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                              <strong>Ready to get started?</strong> Get a free consultation
                            </div>
                            <Link
                              to="/contact"
                              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              Contact Us
                            </Link>
                            <div className="mt-3">
                              <Link
                                to="/comprehensive-services-showcase-2025-new"
                                className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700"
                              >
                                Comprehensive Services Showcase
                                <ArrowRight className="ml-1 w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 w-96 bg-white shadow-2xl rounded-2xl border border-gray-100 p-6">
                        <div className="space-y-4">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                              <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Company Dropdown */}
                    {item.name === 'Company' && companyDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 p-6">
                        <div className="space-y-4">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setCompanyDropdownOpen(false)}
                            >
                              <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                              <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </form>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+1 302 464 0950</span>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                            if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                          }}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Company' && companyDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>

                        {/* Mobile Dropdown */}
                        {(item.name === 'Services' && servicesDropdownOpen) ||
                         (item.name === 'Solutions' && solutionsDropdownOpen) ||
                         (item.name === 'Company' && companyDropdownOpen) ? (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>
    );
  }
