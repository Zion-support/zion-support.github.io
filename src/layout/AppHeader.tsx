import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
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
    { name: 'Enhanced 2025', href: '/enhanced-services-showcase-2025', current: false, featured: true },
    { name: '2026 Services', href: '/services2026', current: false, featured: true },
    { name: '2027 Services', href: '/services2027', current: false, featured: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Enhanced services by category with better organization
  const services = [
    // Featured & New Services
    { name: 'Enhanced 2025 Services', href: '/enhanced-services-showcase-2025', icon: Star, description: 'Revolutionary AI & Innovation Solutions', category: 'Featured', featured: true, color: 'from-yellow-500 to-orange-500' },
    { name: '2026 Services Overview', href: '/services2026', icon: Star, description: 'Cutting-edge AI & Quantum Solutions', category: 'Featured', featured: true, color: 'from-purple-500 to-pink-500' },
    { name: '2027 Services Overview', href: '/services2027', icon: Star, description: 'Next-gen Innovation & Emerging Tech', category: 'Featured', featured: true, color: 'from-indigo-500 to-purple-500' },
    
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights', category: 'AI & ML', color: 'from-blue-500 to-indigo-500' },
    { name: 'AI Legal Automation', href: '/services/ai-legal-document-automation', icon: Shield, description: 'Legal document automation', category: 'AI & ML', color: 'from-green-500 to-emerald-500' },
    { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', icon: Heart, description: 'Healthcare data analytics', category: 'AI & ML', color: 'from-red-500 to-pink-500' },
    { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', icon: DollarSign, description: 'Algorithmic trading platform', category: 'AI & ML', color: 'from-green-500 to-teal-500' },
    { name: 'AI Content Creation', href: '/services/ai-content-creation-suite', icon: PenTool, description: 'Automated content generation', category: 'AI & ML', color: 'from-purple-500 to-pink-500' },
    { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', icon: Truck, description: 'Supply chain optimization', category: 'AI & ML', color: 'from-orange-500 to-red-500' },
    { name: 'AI Project Management', href: '/services/ai-project-management-platform', icon: Target, description: 'Intelligent project management', category: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: 'Automated support system', category: 'AI & ML', color: 'from-indigo-500 to-purple-500' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics-platform', icon: BarChart3, description: 'Financial intelligence platform', category: 'AI & ML', color: 'from-green-500 to-emerald-500' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform', icon: TrendingUp, description: 'Marketing campaign optimization', category: 'AI & ML', color: 'from-purple-500 to-pink-500' },
    { name: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: BookOpen, description: 'Autonomous research platform', category: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps', color: 'from-blue-500 to-cyan-500' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps', color: 'from-gray-500 to-slate-500' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps', color: 'from-green-500 to-emerald-500' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps', color: 'from-blue-500 to-indigo-500' },
    
    // Cybersecurity
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'AI-powered threat detection', category: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity', color: 'from-red-500 to-pink-500' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity', color: 'from-purple-500 to-indigo-500' },
    
    // Digital Transformation
    { name: 'Digital Twin Services', href: '/services/digital-twin-services', icon: Eye, description: 'Virtual system replicas', category: 'Digital Transformation', color: 'from-cyan-500 to-blue-500' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Digital Transformation', color: 'from-yellow-500 to-orange-500' },
    { name: 'IT Consulting', href: '/services/it-consulting', icon: Cpu, description: 'Technology strategy & planning', category: 'Digital Transformation', color: 'from-gray-500 to-slate-500' },
    
    // Emerging Technologies
    { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid-platform', icon: Atom, description: 'Quantum AI computing', category: 'Emerging Tech', color: 'from-indigo-500 to-purple-500' },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-gen computational power', category: 'Emerging Tech', color: 'from-indigo-500 to-purple-500' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks', category: 'Emerging Tech', color: 'from-blue-500 to-cyan-500' },
    { name: 'Space Technology', href: '/services/space-tech', icon: Rocket, description: 'Space tech solutions', category: 'Emerging Tech', color: 'from-purple-500 to-pink-500' },
    
    // Data & Analytics
    { name: 'Data Analytics Services', href: '/services/data-analytics-services', icon: BarChart3, description: 'Business intelligence & insights', category: 'Data & Analytics', color: 'from-blue-500 to-indigo-500' },
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-transparent pointer-events-none" />
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </div>
                <div className="text-xs text-cyan-400 font-medium">Innovation & Technology</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  item.current 
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                } ${item.featured ? 'ring-2 ring-cyan-500/30' : ''}`}
              >
                {item.name}
                {item.featured && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                <Workflow className="w-4 h-4" />
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
                    className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Featured Services */}
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Star className="w-5 h-5 mr-2 text-yellow-400" />
                            Featured Services
                          </h3>
                          <div className="space-y-3">
                            {services.filter(s => s.featured).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                              >
                                <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                  <service.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-400">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Service Categories */}
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Workflow className="w-5 h-5 mr-2 text-cyan-400" />
                            Service Categories
                          </h3>
                          <div className="space-y-3">
                            {Array.from(new Set(services.map(s => s.category))).map((category) => (
                              <div key={category} className="space-y-2">
                                <div className="text-sm font-medium text-gray-300">{category}</div>
                                <div className="space-y-1">
                                  {services.filter(s => s.category === category).slice(0, 3).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className="block text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 pl-4"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* View All Services Button */}
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/enhanced-services-showcase-2025"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                        >
                          <Rocket className="w-4 h-4 mr-2" />
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </form>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50"
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
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
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    } ${item.featured ? 'ring-2 ring-cyan-500/30' : ''}`}
                  >
                    {item.name}
                    {item.featured && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">
                        Featured
                      </span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Services */}
              <div className="pt-4 border-t border-slate-700/50">
                <h3 className="px-4 text-sm font-semibold text-gray-400 mb-3">Services</h3>
                <div className="space-y-2">
                  {services.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/enhanced-services-showcase-2025"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-slate-700/50">
                <h3 className="px-4 text-sm font-semibold text-gray-400 mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <link.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-white">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close dropdown */}
      {servicesDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setServicesDropdownOpen(false)}
        />
      )}
    </header>
  );
}
