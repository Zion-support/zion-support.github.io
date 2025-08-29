import { ArrowRight, Atom, BarChart3, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Server, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap } from 'lucide-react';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Performance optimization: Use useCallback for event handlers
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      setIsKeyboardUser(true);
    }
  }, []);

  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setResourcesDropdownOpen(false);
      setActiveDropdown(null);
    }
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
      setMobileMenuOpen(false);
    }
    
    // Close dropdowns when clicking outside
    Object.keys(dropdownRefs.current).forEach(key => {
      if (dropdownRefs.current[key] && !dropdownRefs.current[key]?.contains(e.target as Node)) {
        if (key === 'services') setServicesDropdownOpen(false);
        if (key === 'solutions') setSolutionsDropdownOpen(false);
        if (key === 'resources') setResourcesDropdownOpen(false);
        setActiveDropdown(null);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll, handleKeyDown, handleEscapeKey, handleClickOutside]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 800)); // Reduced search time
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const toggleDropdown = (dropdown: string) => {
    const newState = !(dropdown === 'services' ? servicesDropdownOpen : 
                       dropdown === 'solutions' ? solutionsDropdownOpen : 
                       resourcesDropdownOpen);
    
    // Close other dropdowns
    setServicesDropdownOpen(dropdown === 'services' ? newState : false);
    setSolutionsDropdownOpen(dropdown === 'solutions' ? newState : false);
    setResourcesDropdownOpen(dropdown === 'resources' ? newState : false);
    setActiveDropdown(newState ? dropdown : null);
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services'), hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions'), hasDropdown: true },
    { name: 'Resources', href: '/resources', current: location.pathname.startsWith('/resources'), hasDropdown: true },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500',
      badge: 'Popular'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500',
      badge: 'New'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      badge: 'Cutting Edge'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Cloud & DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'Infrastructure & Automation',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Data Analytics & BI', 
      href: '/services/data-analytics', 
      icon: BarChart3, 
      description: 'Business Intelligence & Analytics',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IT Infrastructure', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'Server & Network Management',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: Zap, 
      description: 'Specialized Software Solutions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise AI', 
      href: '/solutions/enterprise-ai', 
      icon: Building, 
      description: 'Large-scale AI implementation',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'SMB Solutions', 
      href: '/solutions/smb-solutions', 
      icon: Building2, 
      description: 'Affordable tech for small business',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Startup Accelerator', 
      href: '/solutions/startup-accelerator', 
      icon: Rocket, 
      description: 'Tech solutions for startups',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Government & Defense', 
      href: '/solutions/government-defense', 
      icon: Shield, 
      description: 'Secure government solutions',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Healthcare Solutions', 
      href: '/solutions/healthcare', 
      icon: Heart, 
      description: 'Medical & health technology',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Financial Services', 
      href: '/solutions/financial', 
      icon: DollarSign, 
      description: 'Fintech & banking solutions',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const resources = [
    { 
      name: 'Documentation', 
      href: '/docs', 
      icon: FileText, 
      description: 'Technical guides & APIs',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: BookOpen, 
      description: 'Industry insights & updates',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: Target, 
      description: 'Success stories & results',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Webinars', 
      href: '/webinars', 
      icon: Users, 
      description: 'Live events & training',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'White Papers', 
      href: '/white-papers', 
      icon: FileText, 
      description: 'In-depth research & analysis',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'FAQ', 
      href: '/faq', 
      icon: HelpCircle, 
      description: 'Frequently asked questions',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Pricing', 
      href: '/pricing', 
      icon: DollarSign, 
      description: 'Transparent pricing plans',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Get Support', 
      href: '/support', 
      icon: MessageCircle, 
      description: 'Technical support & help',
      featured: true,
      color: 'from-green-500 to-cyan-500'
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  Zion Tech Group
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name.toLowerCase())}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleDropdown(item.name.toLowerCase());
                      }
                    }}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      item.current 
                        ? 'text-cyan-400 bg-cyan-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    aria-expanded={item.name.toLowerCase() === 'services' ? servicesDropdownOpen : 
                                   item.name.toLowerCase() === 'solutions' ? solutionsDropdownOpen : 
                                   resourcesDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      (item.name.toLowerCase() === 'services' && servicesDropdownOpen) ||
                      (item.name.toLowerCase() === 'solutions' && solutionsDropdownOpen) ||
                      (item.name.toLowerCase() === 'resources' && resourcesDropdownOpen)
                        ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      item.current 
                        ? 'text-cyan-400 bg-cyan-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                  aria-label="Search services and solutions"
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-cyan-400 border-t-transparent"></div>
                  </div>
                )}
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-105"
              aria-label="Contact us for consultation"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
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

      {/* Dropdown Menus */}
      {/* Services Dropdown */}
      {servicesDropdownOpen && (
        <div 
          ref={(el) => dropdownRefs.current.services = el}
          className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl"
          role="menu"
          aria-label="Services menu"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
                  role="menuitem"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {service.name}
                        </h3>
                        {service.badge && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-400">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
              >
                View all services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Dropdown */}
      {solutionsDropdownOpen && (
        <div 
          ref={(el) => dropdownRefs.current.solutions = el}
          className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl"
          role="menu"
          aria-label="Solutions menu"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.href}
                  className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
                  role="menuitem"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {solution.name}
                        </h3>
                        {solution.badge && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-400">
                            {solution.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/solutions"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
              >
                View all solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Resources Dropdown */}
      {resourcesDropdownOpen && (
        <div 
          ref={(el) => dropdownRefs.current.resources = el}
          className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl"
          role="menu"
          aria-label="Resources menu"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {resources.map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.href}
                  className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
                  role="menuitem"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {resource.name}
                        </h3>
                        {resource.badge && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-400">
                            {resource.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/resources"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
              >
                View all resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                aria-label="Search services and solutions"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name.toLowerCase() === 'services') setServicesDropdownOpen(!servicesDropdownOpen);
                          if (item.name.toLowerCase() === 'solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                          if (item.name.toLowerCase() === 'resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                          item.current 
                            ? 'text-cyan-400 bg-cyan-400/10' 
                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                        aria-expanded={item.name.toLowerCase() === 'services' ? servicesDropdownOpen : 
                                       item.name.toLowerCase() === 'solutions' ? solutionsDropdownOpen : 
                                       resourcesDropdownOpen}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          (item.name.toLowerCase() === 'services' && servicesDropdownOpen) ||
                          (item.name.toLowerCase() === 'solutions' && solutionsDropdownOpen) ||
                          (item.name.toLowerCase() === 'resources' && resourcesDropdownOpen)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Dropdown Content */}
                      {((item.name.toLowerCase() === 'services' && servicesDropdownOpen) ||
                        (item.name.toLowerCase() === 'solutions' && solutionsDropdownOpen) ||
                        (item.name.toLowerCase() === 'resources' && resourcesDropdownOpen)) && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.name.toLowerCase() === 'services' && services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                              role="menuitem"
                            >
                              {service.name}
                            </Link>
                          ))}
                          {item.name.toLowerCase() === 'solutions' && solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                              role="menuitem"
                            >
                              {solution.name}
                            </Link>
                          ))}
                          {item.name.toLowerCase() === 'resources' && resources.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                              role="menuitem"
                            >
                              {resource.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                        item.current 
                          ? 'text-cyan-400 bg-cyan-400/10' 
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-slate-700/50">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-base font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200"
                aria-label="Contact us for consultation"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
