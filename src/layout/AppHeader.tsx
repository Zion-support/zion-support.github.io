import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Home
} from 'lucide-react';
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
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing', description: 'Next-gen quantum solutions' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-networks', description: 'Quantum AI algorithms' },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading', description: 'Quantum-powered trading' },
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Digital Twin Solutions', href: '/services/digital-twin', description: 'Virtual replica technology' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Edge computing solutions' },
        { name: 'Blockchain Solutions', href: '/services/blockchain', description: 'Distributed ledger technology' },
        { name: '5G Enterprise Solutions', href: '/services/5g-enterprise-solutions', description: 'Next-gen connectivity' },
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      services: [
        { name: 'Custom SaaS Development', href: '/services/micro-saas-solutions', description: 'Tailored software solutions' },
        { name: 'API Development', href: '/services/api-development', description: 'RESTful API services' },
        { name: 'Mobile App Development', href: '/services/mobile-development', description: 'iOS & Android apps' },
        { name: 'Web Application Development', href: '/services/web-development', description: 'Modern web applications' },
      ]
    }
  ];

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Zap, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', icon: Target },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
  ];

  const quickLinks = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, color: 'text-blue-500' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, color: 'text-red-500' },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, color: 'text-cyan-500' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Atom, color: 'text-purple-500' },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Code, color: 'text-yellow-500' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket, color: 'text-green-500' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="font-medium">{item.name}</span>
                  </Link>
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
                  className="w-64 px-4 py-2 pl-10 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </form>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="flex items-center space-x-2">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Services Dropdown */}
      <AnimatePresence>
        {servicesDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-xl"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesCategories.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900 dark:text-white">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Access
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                    >
                      <link.icon className={`w-5 h-5 ${link.color}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="inline w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Robot icon component for autonomous AI agents
const Robot = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
