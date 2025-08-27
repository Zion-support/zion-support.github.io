import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, FileText, MessageSquare, Calendar, Search as SearchIcon, Share2, Lightbulb } from 'lucide-react';
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

  // Enhanced services by category with better organization and working links
  const services = [
    // Featured & New Services
    { name: '2025 New Innovative Services', href: '/new-innovative-services-2025', icon: Star, description: 'Revolutionary AI & Micro SAAS Solutions', category: 'Featured', featured: true, color: 'from-zion-cyan to-zion-purple' },
    { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions', category: 'Featured', featured: true, color: 'from-yellow-500 to-orange-500' },
    { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true, color: 'from-purple-500 to-pink-500' },
    { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Star, description: 'Future-ready Technology Solutions', category: 'Featured', featured: true, color: 'from-indigo-500 to-purple-500' },
    
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3, description: 'AI-powered analytics & insights', category: 'AI & ML', color: 'from-zion-cyan to-zion-purple' },
    { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'AI-powered content creation', category: 'AI & ML', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Brain, description: '24/7 AI research & insights', category: 'AI & ML', color: 'from-zion-cyan to-zion-purple' },
    { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Workflow, description: 'AI-powered workflow automation', category: 'AI & ML', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', icon: Shield, description: 'AI-powered data governance', category: 'AI & ML', color: 'from-zion-cyan to-zion-purple' },
    { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', icon: Brain, description: 'AI-powered customer insights', category: 'AI & ML', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML', color: 'from-zion-cyan to-zion-purple' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: SearchIcon, description: 'Machine learning SEO optimization', category: 'AI & ML', color: 'from-zion-cyan to-zion-purple' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: 'Intelligent support automation', category: 'AI & ML', color: 'from-zion-cyan to-zion-purple' },
    { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target, description: 'AI-driven project optimization', category: 'AI & ML', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: BarChart3, description: 'Intelligent financial insights', category: 'AI & ML', color: 'from-zion-cyan to-zion-purple' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps', color: 'from-zion-purple to-zion-cyan' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps', color: 'from-zion-cyan to-zion-purple' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps', color: 'from-zion-purple to-zion-cyan' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps', color: 'from-zion-cyan to-zion-purple' },
    
    // Cybersecurity
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Advanced AI-powered security', category: 'Cybersecurity', color: 'from-zion-purple to-zion-cyan' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity', color: 'from-zion-cyan to-zion-purple' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity', color: 'from-zion-purple to-zion-cyan' },
    { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock, description: 'Modern security architecture', category: 'Cybersecurity', color: 'from-zion-cyan to-zion-purple' },
    
    // Digital Transformation
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas', category: 'Digital Transformation', color: 'from-zion-purple to-zion-cyan' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Digital Transformation', color: 'from-zion-cyan to-zion-purple' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Cpu, description: 'Technology strategy & planning', category: 'Digital Transformation', color: 'from-zion-purple to-zion-cyan' },
    
    // Emerging Technologies
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-gen computational power', category: 'Emerging Tech', color: 'from-zion-cyan to-zion-purple' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks', category: 'Emerging Tech', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom, description: 'Quantum-AI integration', category: 'Emerging Tech', color: 'from-zion-cyan to-zion-purple' },
    { name: 'Space Technology', href: '/space-tech', icon: Satellite, description: 'Space-based solutions', category: 'Emerging Tech', color: 'from-zion-purple to-zion-cyan' },
    
    // Data & Analytics
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence & insights', category: 'Data & Analytics', color: 'from-zion-cyan to-zion-purple' },
    { name: 'Business Intelligence', href: '/services/ai-business-intelligence', icon: TrendingUp, description: 'Performance metrics & reporting', category: 'Data & Analytics', color: 'from-zion-purple to-zion-cyan' },
    
    // Micro SaaS Solutions
    { name: 'Micro SaaS Platform', href: '/micro-saas', icon: ShoppingCart, description: 'Niche software solutions', category: 'Micro SaaS', color: 'from-zion-cyan to-zion-purple' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management', category: 'Micro SaaS', color: 'from-zion-purple to-zion-cyan' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Customer support system', category: 'Micro SaaS', color: 'from-zion-cyan to-zion-purple' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Performance tracking & insights', category: 'Micro SaaS', color: 'from-zion-purple to-zion-cyan' },
    { name: 'AI Sales Email Optimizer', href: '/services/ai-sales-email-optimizer', icon: MessageSquare, description: 'Intelligent email optimization', category: 'Micro SaaS', color: 'from-zion-cyan to-zion-purple' },
    { name: 'Support Ticket Triage', href: '/services/support-ticket-triage', icon: HelpCircle, description: 'Automated ticket management', category: 'Micro SaaS', color: 'from-zion-purple to-zion-cyan' },
    { name: 'Invoice OCR & Reconciliation', href: '/services/invoice-ocr-reconciliation', icon: FileText, description: 'Automated invoice processing', category: 'Micro SaaS', color: 'from-zion-cyan to-zion-purple' },
    { name: 'SEO Content Planner', href: '/services/seo-content-planner', icon: SearchIcon, description: 'AI-powered SEO planning', category: 'Micro SaaS', color: 'from-zion-purple to-zion-cyan' },
    { name: 'HR Screening Assistant', href: '/services/hr-screening-assistant', icon: Users, description: 'AI candidate screening', category: 'Micro SaaS', color: 'from-zion-cyan to-zion-purple' },
    { name: 'Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'AI content creation & optimization', category: 'Micro SaaS', color: 'from-zion-purple to-zion-cyan' },
    { name: 'Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Brain, description: '24/7 autonomous research', category: 'Micro SaaS', color: 'from-zion-cyan to-zion-purple' },
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
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center text-white hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-zion-slate-dark/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Featured Services */}
                        <div className="lg:col-span-1">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 mr-2" />
                            Featured Services
                          </h3>
                          <div className="space-y-3">
                            {services.filter(s => s.featured).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <service.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                      {service.name}
                                    </h4>
                                    <p className="text-sm text-zion-slate-light">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* AI & ML Services */}
                        <div className="lg:col-span-1">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                            AI & Machine Learning
                          </h3>
                          <div className="space-y-3">
                            {services.filter(s => s.category === 'AI & ML').slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <service.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                      {service.name}
                                    </h4>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Micro SaaS Solutions */}
                        <div className="lg:col-span-1">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <ShoppingCart className="w-5 h-5 text-purple-400 mr-2" />
                            Micro SaaS Solutions
                          </h3>
                          <div className="space-y-3">
                            {services.filter(s => s.category === 'Micro SaaS').slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <service.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                      {service.name}
                                    </h4>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* IT & Infrastructure */}
                        <div className="lg:col-span-1">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Server className="w-5 h-5 text-green-400 mr-2" />
                            IT & Infrastructure
                          </h3>
                          <div className="space-y-3">
                            {services.filter(s => s.category === 'Cloud & DevOps' || s.category === 'Cybersecurity').slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                    <service.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors duration-200">
                                      {service.name}
                                    </h4>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* View All Services Link */}
                      <div className="mt-6 pt-6 border-t border-cyan-400/20">
                        <Link
                          to="/services"
                          className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium transition-colors duration-200"
                        >
                          View All Services
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
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
            <div className="hidden md:block">
              <EnhancedSearch onSearch={handleSearch} />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan-300 transition-colors duration-200"
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
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-white hover:text-cyan-300 transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-cyan-400/20">
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.slice(0, 12).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">{service.name}</h4>
                        <p className="text-xs text-zion-slate-light">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-cyan-400/20">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
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
