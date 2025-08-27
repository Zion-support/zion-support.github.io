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
    { name: 'AI Autonomous Research', href: '/services/ai-autonomous-research-assistant', icon: Brain, description: 'Fully autonomous AI research platform', category: 'Featured', featured: true },
    { name: 'Quantum AI Trading', href: '/services/quantum-ai-trading-platform', icon: Atom, description: 'Quantum-powered trading platform', category: 'Featured', featured: true },
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
        ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      {/* Futuristic Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  ZION
                </span>
                <span className="text-xs lg:text-sm text-zion-slate-light font-medium">
                  TECH GROUP
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-6">
              {navigation.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    item.current 
                      ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                      : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                  }`}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full animate-pulse"></span>
                  )}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-zion-cyan/0 to-zion-blue/0 group-hover:from-zion-cyan/5 group-hover:to-zion-blue/5 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-all duration-300 group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                  >
                    {/* Featured Services */}
                    <div className="p-4 border-b border-zion-cyan/20">
                      <h3 className="text-sm font-semibold text-zion-cyan mb-3">Featured Services</h3>
                      <div className="space-y-2">
                        {featuredServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-slate/30 transition-all duration-300 group"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <service.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                {service.name}
                              </div>
                              <div className="text-xs text-zion-slate-light">{service.description}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Service Categories */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-zion-cyan mb-3">All Services</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {services.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-slate/30 transition-all duration-300 group"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <service.icon className="w-4 h-4 text-zion-cyan group-hover:text-white transition-colors duration-300" />
                            <span className="text-xs text-zion-slate-light group-hover:text-white transition-colors duration-300 truncate">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-zion-cyan/20">
                        <Link
                          to="/services"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                          onClick={() => setServicesDropdownOpen(false)}
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
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-all duration-300 group"
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:bg-zion-slate/30 transition-all duration-300"
                />
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-all duration-300"
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
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:bg-zion-slate/30 transition-all duration-300"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      item.current 
                        ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20' 
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.featured && (
                      <span className="ml-2 inline-block w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full animate-pulse"></span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <h3 className="text-sm font-semibold text-zion-cyan mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="flex items-center space-x-2 p-3 bg-zion-slate/20 rounded-lg hover:bg-zion-slate/30 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-sm text-white">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
