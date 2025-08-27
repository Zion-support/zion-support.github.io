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
    { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analyzer', icon: FileText, description: 'Legal document analysis & compliance', category: 'AI & ML' },
    { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostics', icon: Heart, description: 'Medical image analysis & diagnostics', category: 'AI & ML' },
    
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
    { name: '2027 Services', href: '/services2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced AI-powered analytics', category: 'AI & Analytics', featured: true },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Zap, description: 'Next-generation quantum solutions', category: 'Quantum Computing', featured: true },
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
    <>
      <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      } futuristic-header`}>
        {/* Top contact bar */}
        <div className="hidden md:block border-b border-slate-700/40 bg-slate-900/60">
          <div className="container-responsive py-2 flex items-center justify-between text-xs text-gray-300">
            <div className="flex items-center gap-4">
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">ziontechgroup.com</a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link to="/request-quote" className="text-cyan-400 hover:text-cyan-300">Request Quote</Link>
              <Link to="/contact" className="text-cyan-400 hover:text-cyan-300">Contact</Link>
            </div>
          </div>
        </div>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Left side - Logo and Sidebar Toggle */}
            <div className="flex items-center space-x-4">
              {/* Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors lg:hidden"
                aria-label="Open navigation sidebar"
              >
                <PanelLeft className="w-5 h-5" />
              </button>
              
              {/* Logo */}
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 futuristic-heading neon-text-cyan">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group futuristic-nav-item ${
                    item.featured ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30' : ''
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative" aria-haspopup="true" aria-expanded={servicesDropdownOpen}>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                  aria-controls="services-menu"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Enhanced Services Dropdown */}
                {servicesDropdownOpen && (
                  <div 
                    id="services-menu"
                    className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    role="menu"
                    aria-label="Services"
                  >
                    <div className="p-6">
                      {/* Featured Services */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          Featured Services
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {featuredServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group hover:scale-105 border border-cyan-400/20"
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
                      </div>

                      {/* Services by Category */}
                      <div className="grid grid-cols-2 gap-6">
                        {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                          <div key={category} className="space-y-3">
                            <h4 className="text-sm font-semibold text-white border-b border-slate-700 pb-2">
                              {category}
                            </h4>
                            <div className="space-y-2">
                              {categoryServices.slice(0, 4).map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="flex items-center p-2 rounded-lg hover:bg-slate-700/30 transition-colors duration-200 group"
                                >
                                  <service.icon className="w-4 h-4 text-cyan-400 mr-2 group-hover:text-cyan-300 transition-colors" />
                                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                              {categoryServices.length > 4 && (
                                <Link
                                  to="/services"
                                  className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                                >
                                  View all {category} services
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Actions */}
                      <div className="mt-6 pt-6 border-t border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                          {quickLinks.map((link) => (
                            <Link
                              key={link.name}
                              to={link.href}
                              className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group/item"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <link.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="text-white font-medium group-hover/item:text-purple-400 transition-colors duration-200">
                                {link.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-slate-700">
                          <Link
                            to="/services"
                            className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            View All Services
                          </Link>
                        </div>
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
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <ZionLoadingSpinner size="sm" />
                    </div>
                  )}
                </div>
              </form>

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
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-800/95 border-t border-slate-700/50 backdrop-blur-xl"
            >
              <div className="container-responsive py-6">
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        item.featured 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {item.name}
                      {item.featured && (
                        <span className="ml-2 inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                      )}
                    </Link>
                  ))}
                  
                  {/* Mobile Services Section */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <h3 className="px-4 text-sm font-semibold text-cyan-300 mb-3">Featured Services</h3>
                    <div className="space-y-2">
                      {featuredServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>

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

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
