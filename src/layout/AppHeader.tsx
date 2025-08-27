import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';
import { EnhancedSearch } from '../components/EnhancedSearch';

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

  const handleSearch = async (query: string) => {
    if (query.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  // Main navigation items
  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Careers', href: '/careers', current: false },
  ];

  // Organized services by category
  const servicesCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', href: '/services/ai-seo', description: 'Machine learning SEO optimization' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Modern security architecture' },
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'IT Consulting', href: '/it-consulting', description: 'Technology strategy & planning' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'Space Technology', href: '/space-tech', description: 'Space-based solutions' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', description: 'Customer support system' },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance tracking & insights' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk', description: 'IT support automation' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', description: 'Marketing performance tracking' },
        { name: 'Mobile Survey', href: '/services/mobile-survey', description: 'Mobile-first survey platform' },
      ]
    }
  ];

  // Quick links for easy access
  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
  ];

  // Enhanced futuristic background component
  const FuturisticBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Enhanced floating particles with neon glow */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40 shadow-lg shadow-cyan-400/30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced gradient orbs with neon glow */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Animated Background */}
      <FuturisticBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-zion-slate-dark/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-500/20 p-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {servicesCategories.map((category) => (
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
                              >
                                <div className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors duration-200">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors duration-200">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Quick Links Section */}
                    <div className="mt-6 pt-6 border-t border-cyan-400/20">
                      <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {quickLinks.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="flex items-center space-x-2 p-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200 group"
                          >
                            <link.icon className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                              {link.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-zion-slate-dark/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-cyan-400/20"
            >
              <div className="py-4 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="px-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pl-10 bg-zion-slate-dark/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </form>

                {/* Mobile Navigation Links */}
                <div className="px-4 space-y-2">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="px-4">
                  <div className="text-sm font-medium text-gray-400 mb-2">Services</div>
                  <div className="space-y-1">
                    {servicesCategories.slice(0, 3).map((category) => (
                      <div key={category.title}>
                        <div className="text-xs text-cyan-400 font-medium mb-1">{category.title}</div>
                        {category.services.slice(0, 2).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 pl-4 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Quick Links */}
                <div className="px-4">
                  <div className="text-sm font-medium text-gray-400 mb-2">Quick Access</div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200"
                      >
                        <link.icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
