import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: '2026 Services', href: '/services2026', current: false, featured: true },
    { name: '2027 Services', href: '/services2027', current: false, featured: true },
    { name: 'AI Services', href: '/ai-services', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Organized services by category
  const services = [
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights', category: 'AI & ML' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps' },
    
    // Cybersecurity
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions', category: 'Cybersecurity' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity' },
    
    // Digital Transformation
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas', category: 'Digital Transformation' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Digital Transformation' },
    { name: 'IT Consulting', href: '/services/it-consulting', icon: Cpu, description: 'Technology strategy & planning', category: 'Digital Transformation' },
    
    // Emerging Technologies
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-gen computational power', category: 'Emerging Tech' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks', category: 'Emerging Tech' },
    { name: 'Blockchain Solutions', href: '/services/blockchain', icon: Lock, description: 'Distributed ledger technology', category: 'Emerging Tech' },
    
    // Data & Analytics
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence & insights', category: 'Data & Analytics' },
    { name: 'Business Intelligence', href: '/services/business-intelligence', icon: TrendingUp, description: 'Performance metrics & reporting', category: 'Data & Analytics' },
    
    // Micro SaaS Solutions
    { name: 'Micro SaaS Platform', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Niche software solutions', category: 'Micro SaaS' },
    { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool, description: 'Automated content creation', category: 'Micro SaaS' },
    { name: 'Customer Support AI', href: '/services/ai-customer-support', icon: MessageCircle, description: 'Intelligent support automation', category: 'Micro SaaS' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
  ];

  const featuredServices = [
    { name: '2026 Services', href: '/services2026', icon: Star, description: 'Revolutionary AI, Quantum & Micro SaaS', category: 'Featured', featured: true },
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions', category: 'Featured', featured: true },
    { name: 'IT Services', href: '/it-services', icon: Server, description: 'Enterprise IT solutions', category: 'Featured', featured: true },
  ];

  // Group services by category for better organization
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-neon' 
        : 'bg-transparent'
    }`}>
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-neon group-hover:shadow-neon-purple transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-20 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  ZION TECH GROUP
                </h1>
                <p className="text-xs text-cyan-400/70 font-rajdhani">Innovating Tomorrow</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-6">
              {navigation.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 group ${
                    item.current
                      ? 'text-cyan-400 neon-text'
                      : 'text-gray-300 hover:text-cyan-400 hover:neon-text'
                  }`}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {services.slice(0, 12).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="group p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                                <service.icon className="w-4 h-4 text-cyan-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors duration-300">
                                  {service.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-cyan-500/20">
                        <Link
                          to="/services"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:block">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-64 px-4 py-2 pl-10 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  {isSearching ? (
                    <div className="loading-futuristic w-4 h-4"></div>
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  {isSearching ? (
                    <div className="loading-futuristic w-5 h-5"></div>
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      item.current
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {item.featured && (
                        <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></span>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Mobile Services */}
              <div className="border-t border-cyan-500/20 pt-4">
                <h3 className="px-4 text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  Featured Services
                </h3>
                <div className="space-y-2">
                  {featuredServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                    >
                      <service.icon className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="font-medium">{service.name}</p>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Quick Links */}
              <div className="border-t border-cyan-500/20 pt-4">
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
