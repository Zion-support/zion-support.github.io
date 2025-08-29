import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Code, 
  Truck, 
  Building, 
  BarChart3, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  ArrowRight, 
  PanelLeft, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Satellite, 
  FileText,
  Sparkles as SparklesIcon,
  Search as SearchIcon
} from 'lucide-react';

export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

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

  // Enhanced navigation with better organization
  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') },
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions') },
    { name: 'AI Services', href: '/ai-services', current: location.pathname.startsWith('/ai-services') },
    { name: 'IT Services', href: '/it-services', current: location.pathname.startsWith('/it-services') },
    { name: 'Micro SaaS', href: '/micro-saas', current: location.pathname.startsWith('/micro-saas') },
    { name: 'Marketplace', href: '/marketplace', current: location.pathname.startsWith('/marketplace') },
    { name: 'Resources', href: '/resources', current: location.pathname.startsWith('/resources') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
    { name: 'Careers', href: '/careers', current: location.pathname === '/careers' },
    { name: 'Partners', href: '/partners', current: location.pathname === '/partners' },
    { name: 'News', href: '/news', current: location.pathname === '/news' },
    { name: 'Case Studies', href: '/case-studies', current: location.pathname === '/case-studies' },
    { name: 'Help', href: '/help', current: location.pathname === '/help' },
    { name: 'FAQ', href: '/faq', current: location.pathname === '/faq' },
    { name: 'Pricing', href: '/pricing', current: location.pathname === '/pricing' },
  ];

  // Enhanced services by category with better organization
  const services = [
    // Featured & New Services
    { 
      name: '2025 Innovative Services', 
      href: '/innovative-services-2025', 
      icon: Star, 
      description: 'Revolutionary AI & Quantum Solutions', 
      category: 'Featured', 
      featured: true, 
      color: 'from-yellow-500 to-orange-500',
      badge: 'New'
    },
    { 
      name: 'Comprehensive Pricing Guide', 
      href: '/comprehensive-pricing-guide-2025', 
      icon: DollarSign, 
      description: 'Complete pricing for all services', 
      category: 'Featured', 
      featured: true, 
      color: 'from-green-500 to-emerald-500',
      badge: 'Featured'
    },
    { 
      name: '2029 Cutting-Edge Services', 
      href: '/zion-cutting-edge-services-2029', 
      icon: Star, 
      description: 'Future-ready Technology Solutions', 
      category: 'Featured', 
      featured: true, 
      color: 'from-indigo-500 to-purple-500',
      badge: 'Future'
    },
    
    // AI & Machine Learning
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'AI-powered business insights', 
      category: 'AI & ML', 
      color: 'from-purple-600 to-indigo-700',
      badge: 'Popular'
    },
    { 
      name: 'AI Compliance Assistant', 
      href: '/services/ai-compliance-assistant', 
      icon: Shield, 
      description: 'Automated compliance management', 
      category: 'AI & ML', 
      color: 'from-green-600 to-emerald-700',
      badge: 'New'
    },
    { 
      name: 'AI Sales Copilot', 
      href: '/services/ai-sales-copilot', 
      icon: TrendingUp, 
      description: 'AI sales automation', 
      category: 'AI & ML', 
      color: 'from-blue-600 to-cyan-700',
      badge: 'Popular'
    },
    { 
      name: 'AI-Powered SEO', 
      href: '/services/ai-seo', 
      icon: Eye, 
      description: 'AI-driven SEO optimization', 
      category: 'AI & ML', 
      color: 'from-indigo-600 to-purple-700',
      badge: 'Popular'
    },
    { 
      name: 'AI Content Marketing Suite', 
      href: '/services/ai-content-marketing-suite', 
      icon: PenTool, 
      description: 'Content creation automation', 
      category: 'AI & ML', 
      color: 'from-pink-600 to-rose-700',
      badge: 'New'
    },
    { 
      name: 'AI Customer Support Automation', 
      href: '/services/ai-customer-support-automation', 
      icon: MessageCircle, 
      description: 'Automated customer service', 
      category: 'AI & ML', 
      color: 'from-cyan-600 to-blue-700',
      badge: 'Popular'
    },
    { 
      name: 'AI Project Management', 
      href: '/services/ai-project-management', 
      icon: Workflow, 
      description: 'Intelligent project management', 
      category: 'AI & ML', 
      color: 'from-orange-600 to-red-700',
      badge: 'Featured'
    },

    // IT Infrastructure Services
    { 
      name: 'Cloud DevOps Platform', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps automation & management', 
      category: 'IT Infrastructure', 
      color: 'from-blue-600 to-indigo-700',
      badge: 'Popular'
    },
    { 
      name: 'IT Infrastructure Management', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'Complete infrastructure monitoring', 
      category: 'IT Infrastructure', 
      color: 'from-gray-600 to-slate-700',
      badge: 'Featured'
    },
    { 
      name: 'AI Cybersecurity Platform', 
      href: '/services/ai-cybersecurity-platform', 
      icon: Lock, 
      description: 'Advanced threat detection', 
      category: 'IT Infrastructure', 
      color: 'from-red-600 to-pink-700',
      badge: 'Popular'
    },

    // Micro SaaS Solutions
    { 
      name: 'FinOps Cloud Cost Optimizer', 
      href: '/services/finops-advisor', 
      icon: DollarSign, 
      description: 'Cloud cost optimization', 
      category: 'Micro SaaS', 
      color: 'from-green-600 to-emerald-700',
      badge: 'New'
    },
    { 
      name: 'Zero Trust Network Access', 
      href: '/services/zero-trust-network-access', 
      icon: Shield, 
      description: 'Secure network access control', 
      category: 'Micro SaaS', 
      color: 'from-indigo-600 to-purple-700',
      badge: 'Featured'
    },
    { 
      name: 'Data Subject Rights Portal', 
      href: '/services/dsr-portal', 
      icon: FileText, 
      description: 'GDPR compliance platform', 
      category: 'Micro SaaS', 
      color: 'from-teal-600 to-cyan-700',
      badge: 'New'
    },

    // Emerging Technology
    { 
      name: 'Quantum Computing Solutions', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum computing services', 
      category: 'Emerging Tech', 
      color: 'from-purple-600 to-pink-700',
      badge: 'Future'
    },
    { 
      name: 'Edge Computing Platform', 
      href: '/services/edge-computing', 
      icon: Cpu, 
      description: 'Distributed edge computing', 
      category: 'Emerging Tech', 
      color: 'from-blue-600 to-cyan-700',
      badge: 'Featured'
    },
    { 
      name: 'Enterprise Blockchain Platform', 
      href: '/services/blockchain', 
      icon: Link, 
      description: 'Scalable blockchain solutions', 
      category: 'Emerging Tech', 
      color: 'from-green-600 to-blue-700',
      badge: 'Popular'
    }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star, count: services.length },
    { id: 'Featured', name: 'Featured', icon: Star, count: services.filter(s => s.category === 'Featured').length },
    { id: 'AI & ML', name: 'AI & Machine Learning', icon: Brain, count: services.filter(s => s.category === 'AI & ML').length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: services.filter(s => s.category === 'IT Infrastructure').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Rocket, count: services.filter(s => s.category === 'Micro SaaS').length },
    { id: 'Emerging Tech', name: 'Emerging Technology', icon: Atom, count: services.filter(s => s.category === 'Emerging Tech').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-slate-light/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zion-blue to-zion-blue-light p-2 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-full h-full text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white group-hover:text-zion-blue-light transition-colors duration-300">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-blue-light">Innovation & Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-zion-blue-light transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-zion-blue-light transition-colors duration-300">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-white hover:text-zion-blue-light transition-colors duration-300">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* Services Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-6xl -ml-32 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-slate-light/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-8">
                    {/* Featured Services */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4">Featured Services 2025</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {services.filter(s => s.featured).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="group p-4 rounded-xl bg-zion-slate/50 hover:bg-zion-slate-light/50 transition-all duration-300 border border-zion-slate-light/20 hover:border-zion-blue/50"
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} p-2 flex-shrink-0`}>
                                <service.icon className="w-full h-full text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="text-sm font-semibold text-white group-hover:text-zion-blue-light transition-colors duration-300 truncate">
                                    {service.name}
                                  </h4>
                                  {service.badge && (
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                      service.badge === 'New' ? 'bg-green-500 text-white' :
                                      service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                                      service.badge === 'Featured' ? 'bg-purple-500 text-white' :
                                      'bg-orange-500 text-white'
                                    }`}>
                                      {service.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-zion-blue-light line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Service Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {serviceCategories.filter(cat => cat.id !== 'all').map((category) => (
                        <div key={category.id}>
                          <div className="flex items-center space-x-2 mb-3">
                            <category.icon className="w-4 h-4 text-zion-blue" />
                            <h4 className="text-sm font-semibold text-white">{category.name}</h4>
                            <span className="text-xs text-zion-blue-light bg-zion-slate px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {services
                              .filter(s => s.category === category.name)
                              .slice(0, 3)
                              .map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block text-xs text-zion-blue-light hover:text-zion-blue transition-colors duration-300 truncate"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            {services.filter(s => s.category === category.name).length > 3 && (
                              <Link
                                to={`/services?category=${category.id}`}
                                className="block text-xs text-zion-blue hover:text-zion-blue-light transition-colors duration-300"
                              >
                                View all {category.name} services →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-6 pt-6 border-t border-zion-slate-light/20">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/innovative-services-2025"
                          className="text-zion-blue hover:text-zion-blue-light transition-colors duration-300 font-semibold"
                        >
                          View All Services →
                        </Link>
                        <Link
                          to="/comprehensive-pricing-guide-2025"
                          className="bg-zion-blue hover:bg-zion-blue-light text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold"
                        >
                          View Pricing
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/solutions" className="text-white hover:text-zion-blue-light transition-colors duration-300">
                Solutions
              </Link>
              <Link to="/marketplace" className="text-white hover:text-zion-blue-light transition-colors duration-300">
                Marketplace
              </Link>
              <Link to="/pricing" className="text-white hover:text-zion-blue-light transition-colors duration-300">
                Pricing
              </Link>
              <Link to="/contact" className="text-white hover:text-zion-blue-light transition-colors duration-300">
                Contact
              </Link>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-zion-slate/50 text-white placeholder-zion-blue-light rounded-lg border border-zion-slate-light/30 focus:border-zion-blue focus:outline-none focus:ring-2 focus:ring-zion-blue/20"
              />
              <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-zion-blue-light" />
              {isSearching && (
                <div className="absolute right-3 top-2.5">
                  <div className="w-4 h-4 border-2 border-zion-blue border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </form>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/request-quote"
                className="px-4 py-2 text-zion-blue hover:text-zion-blue-light transition-colors duration-300 font-semibold"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 bg-zion-blue hover:bg-zion-blue-light text-white rounded-lg transition-colors duration-300 font-semibold"
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-blue-light transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-t border-zion-slate-light/20"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-zion-slate/50 text-white placeholder-zion-blue-light rounded-lg border border-zion-slate-light/30 focus:border-zion-blue focus:outline-none"
                  />
                  <SearchIcon className="absolute left-3 top-3.5 w-5 h-5 text-zion-blue-light" />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-lg ${
                      item.current 
                        ? 'text-zion-blue font-semibold' 
                        : 'text-white hover:text-zion-blue-light'
                    } transition-colors duration-300`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Services Preview */}
              <div className="mt-8 pt-6 border-t border-zion-slate-light/20">
                <h3 className="text-lg font-semibold text-white mb-4">Featured Services</h3>
                <div className="space-y-3">
                  {services.filter(s => s.featured).slice(0, 3).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-zion-slate/50 hover:bg-zion-slate-light/50 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} p-1.5`}>
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-semibold text-white truncate">
                            {service.name}
                          </h4>
                          {service.badge && (
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              service.badge === 'New' ? 'bg-green-500 text-white' :
                              service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                              service.badge === 'Featured' ? 'bg-purple-500 text-white' :
                              'bg-orange-500 text-white'
                            }`}>
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zion-blue-light truncate">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    to="/innovative-services-2025"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center py-3 bg-zion-blue hover:bg-zion-blue-light text-white rounded-lg transition-colors duration-300 font-semibold"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-zion-slate-light/20">
                <div className="space-y-3">
                  <Link
                    to="/request-quote"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center py-3 border border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white rounded-lg transition-colors duration-300 font-semibold"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center py-3 bg-zion-blue hover:bg-zion-blue-light text-white rounded-lg transition-colors duration-300 font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default EnhancedHeader;