import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, Database, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
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
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Next-Generation AI & Technology',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'AI & Analytics', 
      href: '/services', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI & Marketing', 
      href: '/services', 
      icon: TrendingUp, 
      description: 'Sales Intelligence & Automation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI & Content', 
      href: '/services', 
      icon: FileText, 
      description: 'Content Creation & SEO',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI & Customer Support', 
      href: '/services', 
      icon: MessageCircle, 
      description: 'Support Automation & Chat',
      featured: true,
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'AI & HR', 
      href: '/services', 
      icon: Users, 
      description: 'Recruitment & Performance',
      featured: true,
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      name: 'AI & Legal Tech', 
      href: '/services', 
      icon: Scale, 
      description: 'Document Analysis & Compliance',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI & Healthcare', 
      href: '/services', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI & Research', 
      href: '/services', 
      icon: Eye, 
      description: 'Scientific Research & Discovery',
      featured: true,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'Services Showcase 2025', 
      href: '/services/showcase-2025', 
      icon: Star, 
      description: 'Comprehensive 2025 Services',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cloud Infrastructure', 
      href: '/services/cloud-infrastructure-optimization', 
      icon: Cloud, 
      description: 'Cloud Optimization & DevOps',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Advanced Cybersecurity', 
      href: '/services/advanced-cybersecurity-suite', 
      icon: Shield, 
      description: 'Threat Detection & Response',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Enterprise Data Platform', 
      href: '/services/enterprise-data-platform', 
      icon: Database, 
      description: 'Data Integration & Analytics',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services', 
      icon: Shield, 
      description: 'Zero Trust & Threat Detection',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'IoT & Edge', 
      href: '/services', 
      icon: Cpu, 
      description: 'Edge Computing & Sensors',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin', 
      href: '/services', 
      icon: Zap, 
      description: 'Virtual Replication & Simulation',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Space Technology', 
      href: '/services', 
      icon: Rocket, 
      description: 'Satellite & Mission Planning',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Sustainable Tech', 
      href: '/services', 
      icon: Leaf, 
      description: 'Green Energy & Carbon Tracking',
      featured: true,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise Solutions', 
      href: '/solutions', 
      icon: Building2, 
      description: 'Large-scale implementations',
      featured: true,
      color: 'from-blue-600 to-indigo-600'
    },
    { 
      name: 'SMB Solutions', 
      href: '/solutions', 
      icon: Building, 
      description: 'Small to medium business',
      featured: true,
      color: 'from-green-600 to-emerald-600'
    },
    { 
      name: 'Startup Solutions', 
      href: '/solutions', 
      icon: Rocket, 
      description: 'Growth-focused startups',
      featured: true,
      color: 'from-purple-600 to-pink-600'
    },
    { 
      name: 'Industry Solutions', 
      href: '/solutions', 
      icon: Target, 
      description: 'Sector-specific solutions',
      featured: true,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const resources = [
    { 
      name: 'Documentation', 
      href: '/resources', 
      icon: FileText, 
      description: 'Technical guides & APIs',
      featured: true,
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: BarChart3, 
      description: 'Success stories & results',
      featured: true,
      color: 'from-green-600 to-teal-600'
    },
    { 
      name: 'Blog & Insights', 
      href: '/blog', 
      icon: BookOpen, 
      description: 'Industry trends & analysis',
      featured: true,
      color: 'from-purple-600 to-indigo-600'
    },
    { 
      name: 'Pricing Guide', 
      href: '/pricing', 
      icon: DollarSign, 
      description: 'Transparent pricing & plans',
      featured: true,
      color: 'from-yellow-600 to-orange-600'
    },
    { 
      name: 'FAQ & Support', 
      href: '/faq', 
      icon: HelpCircle, 
      description: 'Common questions & help',
      featured: true,
      color: 'from-gray-600 to-slate-600'
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
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/services"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  View All Services
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                  to="/comprehensive-services-showcase-2030"
                                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  🚀 2030 Showcase
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
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
