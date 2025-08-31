import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Bot, Atom, Code, Truck, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Satellite, FileText, Gauge, Workflow, Target, Handshake, Video, Newspaper } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';
import { EnhancedSearch } from '../components/EnhancedSearch';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Services', href: '/solutions', category: 'AI', icon: Brain, description: 'Advanced AI & Machine Learning Solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity', category: 'Security', icon: Shield, description: 'Comprehensive Security & Compliance' },
    { name: 'Cloud Solutions', href: '/cloud-solutions', category: 'Cloud', icon: Cloud, description: 'Cloud Infrastructure & DevOps' },
    { name: 'Data Analytics', href: '/data-analytics', category: 'Analytics', icon: BarChart3, description: 'Business Intelligence & Analytics' },
    { name: 'IoT & Edge', href: '/iot-edge', category: 'IoT', icon: Cpu, description: 'Internet of Things & Edge Computing' },
    { name: 'Blockchain', href: '/blockchain', category: 'Security', icon: Lock, description: 'Blockchain & Web3 Solutions' },
    { name: 'Healthcare Tech', href: '/healthcare-tech', category: 'Healthcare', icon: Heart, description: 'Healthcare Technology Solutions' },
    { name: 'Sustainability', href: '/sustainability', category: 'Sustainability', icon: Globe, description: 'Green IT & Sustainable Solutions' },
    { name: 'Micro SaaS', href: '/micro-saas', category: 'SaaS', icon: Building, description: 'Micro SaaS & Business Solutions' },
    { name: 'Digital Twin', href: '/digital-twin', category: 'Analytics', icon: Eye, description: 'Digital Twin & Simulation' },
    { name: 'Quantum Computing', href: '/quantum-computing', category: 'AI', icon: Atom, description: 'Quantum Computing Solutions' },
    { name: '5G Solutions', href: '/5g-solutions', category: 'IT', icon: Network, description: '5G Network & Enterprise Solutions' }
  ];

  const solutions = [
    { name: 'Enterprise', href: '/solutions/enterprise', category: 'IT', icon: Building, description: 'Enterprise IT Solutions' },
    { name: 'Healthcare', href: '/solutions/healthcare', category: 'Healthcare', icon: Heart, description: 'Healthcare Technology' },
    { name: 'Financial', href: '/solutions/financial', category: 'IT', icon: DollarSign, description: 'Financial Technology' },
    { name: 'Manufacturing', href: '/solutions/manufacturing', category: 'IT', icon: Cpu, description: 'Smart Manufacturing' },
    { name: 'Retail', href: '/solutions/retail', category: 'IT', icon: ShoppingCart, description: 'Retail Technology' },
    { name: 'Government', href: '/solutions/government', category: 'IT', icon: Building, description: 'Government Solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Our Story & Mission' },
    { name: 'Leadership', href: '/leadership', icon: Star, description: 'Executive Team' },
    { name: 'Careers', href: '/careers', icon: TrendingUp, description: 'Join Our Team' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Latest Updates' },
    { name: 'Press', href: '/press', icon: Video, description: 'Media Resources' },
    { name: 'Partners', href: '/partners', icon: Handshake, description: 'Partnerships' }
  ];

  const support = [
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Find Answers' },
    { name: 'Support', href: '/support', icon: MessageCircle, description: 'Get Help' },
    { name: 'Documentation', href: '/documentation', icon: FileText, description: 'Technical Docs' },
    { name: 'Training', href: '/training', icon: BookOpen, description: 'Learn & Train' },
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Online Events' },
    { name: 'Community', href: '/community', icon: Users, description: 'User Community' }
  ];

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
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                    onMouseEnter={() => setHoveredNav(item.name)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menus */}
                  {item.hasDropdown && hoveredNav === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl z-50"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {item.name === 'Services' && services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-400 to-slate-500'} group-hover:scale-110 transition-transform duration-200`}>
                                <service.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {service.name}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}

                          {item.name === 'Solutions' && solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${categoryColors[solution.category as keyof typeof categoryColors] || 'from-gray-400 to-slate-500'} group-hover:scale-110 transition-transform duration-200`}>
                                <solution.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {solution.name}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {solution.description}
                                </p>
                              </div>
                            </Link>
                          ))}

                          {item.name === 'Company' && company.map((companyItem) => (
                            <Link
                              key={companyItem.name}
                              to={companyItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 group-hover:scale-110 transition-transform duration-200">
                                <companyItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {companyItem.name}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {companyItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}

                          {item.name === 'Support' && support.map((supportItem) => (
                            <Link
                              key={supportItem.name}
                              to={supportItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="p-2 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 group-hover:scale-110 transition-transform duration-200">
                                <supportItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {supportItem.name}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {supportItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="hidden md:flex relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSearching ? <ZionLoadingSpinner size="sm" /> : 'Search'}
                </button>
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block text-sm font-medium">Account</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                  <h2 className="text-lg font-semibold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div className="p-6 border-b border-slate-700/50">
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                    />
                  </form>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 p-6 space-y-4 overflow-y-auto">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-3 text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
                      >
                        <span className="font-medium">{item.name}</span>
                        {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                      </Link>
                      
                      {/* Mobile Dropdown Items */}
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.name === 'Services' && services.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center space-x-3 p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
                            >
                              <service.icon className="h-4 w-4" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                          
                          {item.name === 'Solutions' && solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center space-x-3 p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
                            >
                              <solution.icon className="h-4 w-4" />
                              <span className="text-sm">{solution.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <ThemeToggle />
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
