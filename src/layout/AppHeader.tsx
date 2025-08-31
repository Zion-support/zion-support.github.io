import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, FileText, Palette, Camera, Video, Music, ShieldCheck, CheckCircle, Leaf, Gamepad2, Coins, Activity, Users2, Settings, Globe2, Bot, Zap as ZapIcon
} from 'lucide-react';
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
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  // Main navigation items
  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Server },
    { name: 'Micro SaaS', href: '/micro-saas', icon: ShoppingCart },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
  ];

  // Organized services by category with new innovative services
  const servicesCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      description: 'Advanced AI solutions for business transformation',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights', price: '$2,999', rating: 4.9 },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation', price: '$2,499', rating: 4.7 },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform', description: 'AI-driven project optimization', price: '$2,799', rating: 4.7 },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Intelligent marketing optimization', price: '$3,499', rating: 4.8 },
        { name: 'AI Content Optimization', href: '/services/ai-content-optimizer-pro', description: 'AI-powered content creation', price: '$2,499', rating: 4.8 },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-trading-platform', description: 'Intelligent financial insights', price: '$3,999', rating: 4.9 },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence-platform', description: 'Lead scoring & sales optimization', price: '$3,199', rating: 4.9 },
        { name: 'AI HR Analytics', href: '/services/ai-powered-hr-analytics', description: 'Employee retention & hiring optimization', price: '$2,599', rating: 4.7 },
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Enterprise-grade security solutions',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security', price: '$4,999', rating: 4.9 },
        { name: 'Threat Hunting & Response', href: '/services/ai-powered-cybersecurity-threat-hunting', description: 'Proactive threat detection', price: '$4,999', rating: 4.9 },
        { name: 'Data Governance & Privacy', href: '/services/ai-powered-data-governance-platform', description: 'GDPR/CCPA compliance automation', price: '$3,499', rating: 4.7 },
        { name: 'Zero Trust Network', href: '/services/zero-trust-network-architecture', description: 'Modern security architecture', price: '$2,999', rating: 4.8 },
        { name: 'SOC2 Compliance', href: '/services/soc2-compliance-automation', description: 'Automated compliance tracking', price: '$2,999', rating: 4.8 },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp-manager', description: 'Web security hardening', price: '$1,999', rating: 4.7 },
      ]
    },
    {
      title: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      description: 'AI-powered financial solutions',
      services: [
        { name: 'Financial Analytics Platform', href: '/services/ai-financial-analytics-platform', description: 'ML-powered financial insights', price: '$3,999', rating: 4.9 },
        { name: 'Fraud Detection & Risk', href: '/services/ai-powered-financial-fraud-detection', description: 'AI fraud detection & risk assessment', price: '$5,499', rating: 4.9 },
        { name: 'FinOps Cloud Optimizer', href: '/services/finops-advisor', description: 'Cloud cost optimization', price: '$2,999', rating: 4.8 },
        { name: 'Insurance Risk Assessment', href: '/services/ai-powered-insurance-risk-assessment', description: 'AI-powered insurance solutions', price: '$4,499', rating: 4.8 },
        { name: 'Smart Contract Scanner', href: '/services/smart-contract-risk-scanner', description: 'Blockchain security & risk analysis', price: '$2,999', rating: 4.7 },
      ]
    },
    {
      title: 'Healthcare Technology',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Revolutionary healthcare AI solutions',
      services: [
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-analytics-platform', description: 'AI-powered medical diagnostics', price: '$6,999', rating: 4.9 },
        { name: 'Medical Imaging Analysis', href: '/services/ai-powered-healthcare-diagnostic-platform', description: 'AI diagnostic assistance', price: '$6,999', rating: 4.9 },
        { name: 'Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', description: 'Patient outcome prediction', price: '$4,999', rating: 4.8 },
        { name: 'HIPAA Compliance', href: '/services/ai-powered-data-governance-platform', description: 'Healthcare data governance', price: '$3,499', rating: 4.7 },
      ]
    },
    {
      title: 'Manufacturing & Logistics',
      icon: Truck,
      color: 'from-blue-500 to-indigo-500',
      description: 'Smart manufacturing & supply chain solutions',
      services: [
        { name: 'Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'AI-powered logistics optimization', price: '$4,499', rating: 4.9 },
        { name: 'Manufacturing Quality Control', href: '/services/ai-powered-manufacturing-quality-control', description: 'AI quality control & maintenance', price: '$4,999', rating: 4.9 },
        { name: 'Logistics Optimization', href: '/services/ai-powered-logistics-optimization', description: 'Route optimization & delivery prediction', price: '$3,999', rating: 4.8 },
        { name: 'IoT Edge Computing', href: '/services/ai-iot-edge-computing-platform', description: 'Smart device networks', price: '$3,999', rating: 4.8 },
        { name: 'Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Equipment failure prediction', price: '$2,999', rating: 4.7 },
      ]
    },
    {
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-purple-500',
      description: 'AI-powered retail solutions',
      services: [
        { name: 'Retail Analytics Platform', href: '/services/ai-powered-retail-analytics', description: 'Customer behavior prediction', price: '$3,299', rating: 4.8 },
        { name: 'Customer Success Platform', href: '/services/ai-powered-customer-success-platform', description: 'Churn prediction & retention', price: '$2,799', rating: 4.8 },
        { name: 'E-commerce Optimization', href: '/services/ai-powered-logistics-optimization', description: 'Inventory & delivery optimization', price: '$3,999', rating: 4.8 },
        { name: 'Mobile Survey Platform', href: '/services/mobile-first-survey-tool', description: 'High-converting surveys', price: '$1,999', rating: 4.7 },
        { name: 'Affiliate Tracking Hub', href: '/services/affiliate-attribution-hub', description: 'Marketing performance tracking', price: '$2,499', rating: 4.7 },
      ]
    },
    {
      title: 'Education & Legal',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      description: 'AI-powered education & legal solutions',
      services: [
        { name: 'Education Personalization', href: '/services/ai-powered-education-personalization', description: 'Adaptive learning & analytics', price: '$2,499', rating: 4.8 },
        { name: 'Legal Document Analysis', href: '/services/ai-powered-legal-document-analysis', description: 'Contract analysis & risk assessment', price: '$3,799', rating: 4.8 },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI-powered content creation', price: '$2,999', rating: 4.8 },
        { name: 'Meeting Summarizer', href: '/services/remote-meeting-summarizer', description: 'Auto minutes & action items', price: '$1,999', rating: 4.7 },
        { name: 'Translation Manager', href: '/services/translation-manager', description: 'AI-powered translation', price: '$2,499', rating: 4.7 },
      ]
    },
    {
      title: 'Energy & Sustainability',
      icon: Leaf,
      color: 'from-green-500 to-teal-500',
      description: 'Green technology solutions',
      services: [
        { name: 'Energy Management Platform', href: '/services/ai-powered-energy-optimization', description: 'Smart grid & energy optimization', price: '$4,499', rating: 4.7 },
        { name: 'Sustainability Analytics', href: '/services/sustainability', description: 'Environmental impact tracking', price: '$2,999', rating: 4.7 },
        { name: 'Green IT Solutions', href: '/services/green-it', description: 'Eco-friendly technology', price: '$2,499', rating: 4.6 },
      ]
    },
    {
      title: 'Media & Entertainment',
      icon: Video,
      color: 'from-pink-500 to-rose-500',
      description: 'AI-powered media solutions',
      services: [
        { name: 'Content Optimization', href: '/services/ai-powered-media-content-optimization', description: 'Audience engagement & optimization', price: '$2,699', rating: 4.8 },
        { name: 'AI Content Generator', href: '/services/ai-content-generator', description: 'Automated content creation', price: '$1,999', rating: 4.7 },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', description: 'AI-powered transcription', price: '$1,499', rating: 4.6 },
        { name: 'Video Call Platform', href: '/services/video-call', description: 'AI-enhanced communication', price: '$2,999', rating: 4.7 },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge technology solutions',
      services: [
        { name: 'Quantum AI Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration', price: '$5,999', rating: 4.9 },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', description: 'Next-gen computational power', price: '$4,999', rating: 4.9 },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Enterprise blockchain platform', price: '$3,999', rating: 4.8 },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space-based solutions', price: '$4,999', rating: 4.8 },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual system replicas', price: '$3,999', rating: 4.7 },
      ]
    }
  ];

  // Quick links for easy access
  const quickLinks = [
    { name: 'Comprehensive Showcase', href: '/comprehensive-services-showcase-2025', icon: Star, description: 'View all services' },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen, description: 'Success stories' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry insights' },
    { name: 'Training & Webinars', href: '/training', icon: Users, description: 'Learn from experts' },
    { name: 'Request Quote', href: '/contact', icon: MessageCircle, description: 'Get pricing' },
    { name: 'Call +1 302 464 0950', href: 'tel:+13024640950', icon: Phone, description: 'Speak with us' },
    { name: 'Email kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com', icon: Mail, description: 'Send us a message' },
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
              <div key={item.name} className="relative group">
                {item.name === 'Services' ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium cursor-pointer"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Services Mega Menu */}
                {item.name === 'Services' && (
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-screen max-w-7xl bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        <div className="p-8">
                          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {servicesCategories.map((category, index) => (
                              <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group"
                              >
                                <div className="flex items-center space-x-3 mb-4">
                                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                                    <category.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                      {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">{category.description}</p>
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  {category.services.slice(0, 4).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                          <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                            {service.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 line-clamp-1">
                                            {service.description}
                                          </p>
                                        </div>
                                        <div className="text-right ml-3">
                                          <div className="text-sm font-semibold text-cyan-400">
                                            {service.price}
                                          </div>
                                          <div className="flex items-center text-xs text-gray-400">
                                            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                            {service.rating}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                  
                                  {category.services.length > 4 && (
                                    <Link
                                      to="/comprehensive-services-showcase-2025"
                                      className="block text-center p-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                      View all {category.services.length} services →
                                    </Link>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6">
                                {quickLinks.slice(0, 3).map((link) => (
                                  <Link
                                    key={link.name}
                                    to={link.href}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                                  >
                                    <link.icon className="w-4 h-4" />
                                    <span className="text-sm">{link.name}</span>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                to="/comprehensive-services-showcase-2025"
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                              >
                                View All Services
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>

              {/* Mobile Navigation */}
              <div className="space-y-2">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="px-4 text-sm font-semibold text-gray-400 mb-3">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.slice(0, 4).map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <div className="px-4 space-y-2">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
