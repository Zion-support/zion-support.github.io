import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

interface AppHeaderProps {
  onSidebarToggle?: () => void;
}

export function AppHeader({ onSidebarToggle }: AppHeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

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
    if (dropdown !== 'services') setServicesDropdownOpen(false);
    if (dropdown !== 'solutions') setSolutionsDropdownOpen(false);
    if (dropdown !== 'resources') setResourcesDropdownOpen(false);
    
    if (dropdown === 'services') setServicesDropdownOpen(newState);
    if (dropdown === 'solutions') setSolutionsDropdownOpen(newState);
    if (dropdown === 'resources') setResourcesDropdownOpen(newState);
    
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
      name: '🚀 Innovative Services 2025', 
      href: '/innovative-services-2025', 
      icon: Rocket, 
      description: 'Cutting-edge AI Micro SAAS Solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      badge: 'NEW',
      highlight: true
    },
    { 
      name: '🎯 2025 Services Showcase', 
      href: '/services/showcase-2025', 
      icon: Star, 
      description: 'Complete 2025 Portfolio',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: '📊 All Services', 
      href: '/services', 
      icon: Brain, 
      description: 'Complete Service Catalog',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: '🤖 AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500',
      badge: 'Popular'
    },
    { 
      name: '💊 AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500',
      badge: 'New'
    },
    { 
      name: '✍️ AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: '🛡️ AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: '⚛️ Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      badge: 'Cutting Edge'
    },
    { 
      name: '🔌 IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: '🏗️ Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Building2, 
      description: 'Digital Twin Solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: '🌐 Blockchain Web3 Platform', 
      href: '/services/blockchain-web3-platform', 
      icon: Globe2, 
      description: 'Blockchain & Web3',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: '🏥 AI Healthcare Diagnostics Platform', 
      href: '/services/ai-healthcare-diagnostics-platform', 
      icon: Heart, 
      description: 'AI Medical Diagnostics',
      featured: true,
      color: 'from-pink-500 to-red-500'
    },
    { 
      name: '📚 AI Education Platform', 
      href: '/services/ai-education-platform', 
      icon: BookOpen, 
      description: 'AI-Powered Learning',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: '🌍 AI Metaverse Platform', 
      href: '/services/ai-metaverse-platform', 
      icon: Globe, 
      description: 'AI Metaverse Solutions',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: '🚀 AI Space Technology Platform', 
      href: '/services/ai-space-technology-platform', 
      icon: Rocket, 
      description: 'AI Space Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: '🌱 AI Green Technology Platform', 
      href: '/services/ai-green-technology-platform', 
      icon: Leaf, 
      description: 'Sustainable AI Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: '💻 AI Development Platform', 
      href: '/services/ai-development-platform', 
      icon: Code, 
      description: 'AI Code Generation',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: '🛒 Micro SAAS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $99/month',
      category: 'Micro SaaS'
    },
    { 
      name: '🔮 Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: '🧠 Comprehensive Services 2030', 
      href: '/comprehensive-services-2030', 
      icon: Brain, 
      description: 'Complete AI & Tech Solutions',
      featured: true,
      color: 'from-cyan-500 to-purple-500'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise Solutions', 
      href: '/solutions/enterprise', 
      icon: Building, 
      description: 'Large-scale business solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'SMB Solutions', 
      href: '/solutions/smb', 
      icon: Building2, 
      icon: Building2, 
      description: 'Small & medium business solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Startup Solutions', 
      href: '/solutions/startup', 
      icon: Rocket, 
      description: 'Startup & growth solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Government Solutions', 
      href: '/solutions/government', 
      icon: Shield, 
      description: 'Public sector solutions',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'Healthcare Solutions', 
      href: '/solutions/healthcare', 
      icon: Heart, 
      description: 'Healthcare & medical solutions',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Financial Solutions', 
      href: '/solutions/financial', 
      icon: DollarSign, 
      description: 'Fintech & banking solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Education Solutions', 
      href: '/solutions/education', 
      icon: BookOpen, 
      description: 'Educational technology solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Manufacturing Solutions', 
      href: '/solutions/manufacturing', 
      icon: Settings, 
      description: 'Industrial & manufacturing solutions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Retail Solutions', 
      href: '/solutions/retail', 
      icon: ShoppingCart, 
      description: 'E-commerce & retail solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Transportation Solutions', 
      href: '/solutions/transportation', 
      icon: Truck, 
      description: 'Logistics & transportation solutions',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const resources = [
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: FileText, 
      description: 'Success stories & implementations',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'White Papers', 
      href: '/white-papers', 
      icon: BookOpen, 
      description: 'Research & insights',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Webinars', 
      href: '/webinars', 
      icon: Video, 
      description: 'Live & recorded sessions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Documentation', 
      href: '/docs', 
      icon: FileText, 
      description: 'Technical documentation',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'API Documentation', 
      href: '/api-docs', 
      icon: Code, 
      description: 'Developer resources',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Training', 
      href: '/training', 
      icon: Users, 
      description: 'Learning & certification',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Community', 
      href: '/community', 
      icon: MessageCircle, 
      description: 'User community & forums',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'Support', 
      href: '/support', 
      icon: HelpCircle, 
      description: 'Help & support center',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: PenTool, 
      description: 'Latest news & insights',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Pricing Guide 2027', 
      href: '/pricing-guide-2027', 
      icon: DollarSign, 
      description: 'Comprehensive pricing information',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, color: 'from-blue-500 to-indigo-500' },
    { name: 'Schedule Demo', href: '/demo', icon: Calendar, color: 'from-green-500 to-emerald-500' },
    { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'from-purple-500 to-pink-500' },
    { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
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
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service) => (
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
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/services"
                          className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors p-1.5 hover:bg-zion-cyan/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <ZionLoadingSpinner size="sm" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </form>

              {/* Quick actions */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-slate-800/95 border-t border-slate-700/50 backdrop-blur-xl animate-slide-up"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-responsive py-6">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-cyan p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <ZionLoadingSpinner size="sm" />
                    ) : (
                      <Search className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </form>

              {/* Mobile navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-300 hover:text-cyan-400 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile services */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h3 className="text-slate-400 text-sm font-medium mb-4">Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        <service.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="ml-3">
                        <div className="text-white font-medium text-sm">{service.name}</div>
                        <div className="text-gray-400 text-xs">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors mt-4 py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                >
                  View All Services →
                </Link>
              </div>

              {/* Mobile quick links */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h3 className="text-slate-400 text-sm font-medium mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <link.icon className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-white text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
