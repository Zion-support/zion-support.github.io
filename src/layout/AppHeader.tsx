import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
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
    { name: '2025 Services', href: '/comprehensive-services-showcase-2025', current: false, featured: true },
    { name: '2026 Services', href: '/services2026', current: false, featured: true },
    { name: '2027 Services', href: '/services2027', current: false, featured: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Enhanced services by category with better organization
  const services = [
    // Featured & New Services
    { name: '2026 Services Overview', href: '/services2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions', category: 'Featured', featured: true, color: 'from-yellow-500 to-orange-500' },
    { name: '2027 Services Overview', href: '/services2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true, color: 'from-purple-500 to-pink-500' },
    
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights', category: 'AI & ML', color: 'from-blue-500 to-indigo-500' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML', color: 'from-green-500 to-emerald-500' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML', color: 'from-purple-500 to-pink-500' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML', color: 'from-orange-500 to-red-500' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool, description: 'Automated content creation', category: 'AI & ML', color: 'from-green-500 to-teal-500' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support', icon: MessageCircle, description: 'Intelligent support automation', category: 'AI & ML', color: 'from-indigo-500 to-purple-500' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps', color: 'from-blue-500 to-cyan-500' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps', color: 'from-gray-500 to-slate-500' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps', color: 'from-green-500 to-emerald-500' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps', color: 'from-blue-500 to-indigo-500' },
    
    // Cybersecurity
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions', category: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity', color: 'from-red-500 to-pink-500' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity', color: 'from-purple-500 to-indigo-500' },
    
    // Digital Transformation
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas', category: 'Digital Transformation', color: 'from-cyan-500 to-blue-500' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Digital Transformation', color: 'from-yellow-500 to-orange-500' },
    { name: 'IT Consulting', href: '/services/it-consulting', icon: Cpu, description: 'Technology strategy & planning', category: 'Digital Transformation', color: 'from-gray-500 to-slate-500' },
    
    // Emerging Technologies
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-gen computational power', category: 'Emerging Tech', color: 'from-indigo-500 to-purple-500' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks', category: 'Emerging Tech', color: 'from-blue-500 to-cyan-500' },
    { name: 'Blockchain Solutions', href: '/services/blockchain', icon: Lock, description: 'Distributed ledger technology', category: 'Emerging Tech', color: 'from-green-500 to-emerald-500' },
    
    // Data & Analytics
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence & insights', category: 'Data & Analytics', color: 'from-blue-500 to-indigo-500' },
    { name: 'Business Intelligence', href: '/services/business-intelligence', icon: TrendingUp, description: 'Performance metrics & reporting', category: 'Data & Analytics', color: 'from-green-500 to-teal-500' },
    
    // Micro SaaS Solutions
    { name: 'Micro SaaS Platform', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Niche software solutions', category: 'Micro SaaS', color: 'from-purple-500 to-pink-500' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management', category: 'Micro SaaS', color: 'from-blue-500 to-cyan-500' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Customer support system', category: 'Micro SaaS', color: 'from-green-500 to-emerald-500' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Star },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      {/* Matrix Rain Background Effect */}
      <div className="matrix-rain"></div>
      
      {/* Enhanced Header */}
      <header className={`futuristic-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-gray-400">Innovation • Technology • Future</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`futuristic-nav-item relative group ${
                    item.featured ? 'featured-link' : ''
                  }`}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></span>
                  )}
                  
                  {/* Services Dropdown */}
                  {item.name === 'Services' && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-xl border border-cyan-400/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(services.reduce((acc, service) => {
                            if (!acc[service.category]) acc[service.category] = [];
                            acc[service.category].push(service);
                            return acc;
                          }, {} as Record<string, typeof services>)).map(([category, categoryServices]) => (
                            <div key={category} className="space-y-3">
                              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                                {category}
                              </h3>
                              <div className="space-y-2">
                                {categoryServices.slice(0, 3).map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 group/item"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                                        <service.icon className="w-4 h-4 text-white" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white group-hover/item:text-cyan-400 transition-colors">
                                          {service.name}
                                        </p>
                                        <p className="text-xs text-gray-400 truncate">
                                          {service.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-700">
                          <Link
                            to="/services"
                            className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </form>
              </div>

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4">
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{contactInfo.phone}</span>
                </motion.a>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
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
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-400/30"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200 ${
                        item.featured ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.featured && (
                          <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></span>
                        )}
                      </div>
                    </Link>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <motion.a
                    href={`tel:${contactInfo.phone}`}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">{contactInfo.phone}</span>
                  </motion.a>
                  
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">{contactInfo.email}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Spacer for fixed header */}
      <div className="h-24"></div>
    </>
  );
}
