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
  GraduationCap,
  Video,
  Newspaper
} from 'lucide-react';
import { enhancedServicesCatalog2025 } from '../data/enhancedServicesCatalog2025';

export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {;
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {;
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
    { 
      name: 'Services', 
      href: '/services', 
      current: location.pathname.startsWith('/services'),
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Cpu },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Server },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Data & Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'Emerging Tech', href: '/services/emerging-tech', icon: Atom }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      current: location.pathname.startsWith('/solutions'),
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck },
        { name: 'Retail & E-commerce', href: '/solutions/retail', icon: ShoppingCart },
        { name: 'Education', href: '/solutions/education', icon: GraduationCap }
      ]
    },
    { name: 'AI Services', href: '/ai-services', current: location.pathname.startsWith('/ai-services') },
    { name: 'IT Services', href: '/it-services', current: location.pathname.startsWith('/it-services') },
    { name: 'Micro SaaS', href: '/micro-saas', current: location.pathname.startsWith('/micro-saas') },
    { 
      name: 'Resources', 
      href: '/resources', 
      current: location.pathname.startsWith('/resources'),
      dropdown: [
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: BookOpen },
        { name: 'Blog', href: '/blog', icon: Newspaper },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Documentation', href: '/documentation', icon: HelpCircle },
        { name: 'Training', href: '/training', icon: GraduationCap }
      ]
    },
    { name: 'Marketplace', href: '/marketplace', current: location.pathname.startsWith('/marketplace') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Careers', href: '/careers', current: location.pathname === '/careers' },
    { name: 'Partners', href: '/partners', current: location.pathname === '/partners' }
  ];

  // Enhanced services by category with better organization
  const services = [
    // Featured & New Services
    {
      name: '2025 Services Overview',
      href: '/ultimate-services-showcase-2025',
      icon: Star,
      description: 'Revolutionary AI & Quantum Solutions',
      category: 'Featured',
      featured: true,
      color: 'from-yellow-500 to-orange-500',
      badge: 'New'
    },
    {
      name: '2026 Services Overview',
      href: '/ultimate-services-showcase-2026',
      icon: Star,
      description: 'Cutting-edge Innovation & Emerging Tech',
      category: 'Featured',
      featured: true,
      color: 'from-purple-500 to-pink-500',
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
      description: 'AI project coordination',
      category: 'AI & ML',
      color: 'from-orange-600 to-red-700',
      badge: 'New'
    },
    {
      name: 'AI Financial Analytics',
      href: '/services/ai-financial-analytics',
      icon: DollarSign,
      description: 'Financial data analysis',
      category: 'AI & ML',
      color: 'from-emerald-600 to-green-700',
      badge: 'Popular'
    },

    // IT & Infrastructure
    {
      name: 'Cloud DevOps',
      href: '/services/cloud-devops',
      icon: Cloud,
      description: 'DevOps automation',
      category: 'IT & Infrastructure',
      color: 'from-blue-600 to-indigo-700',
      badge: 'Popular'
    },
    {
      name: 'IT Infrastructure',
      href: '/services/it-infrastructure',
      icon: Server,
      description: 'Infrastructure management',
      category: 'IT & Infrastructure',
      color: 'from-gray-600 to-slate-700',
      badge: 'Popular'
    },
    {
      name: 'Zero Trust Network Access',
      href: '/services/zero-trust-network-access',
      icon: Lock,
      description: 'Next-generation security architecture',
      category: 'IT & Infrastructure',
      color: 'from-red-600 to-orange-700',
      badge: 'Popular'
    },
    {
      name: 'AI Cybersecurity Platform',
      href: '/services/ai-cybersecurity-platform',
      icon: Shield,
      description: 'AI-powered security',
      category: 'IT & Infrastructure',
      color: 'from-red-600 to-pink-700',
      badge: 'New'
    },

    // Emerging Technologies
    {
      name: 'Quantum Computing',
      href: '/services/quantum-computing',
      icon: Atom,
      description: 'Quantum solutions',
      category: 'Emerging Tech',
      color: 'from-violet-600 to-purple-700',
      badge: 'Featured'
    },
    {
      name: 'AI Quantum Hybrid Platform',
      href: '/services/ai-quantum-hybrid-platform',
      icon: Atom,
      description: 'Quantum-AI integration platform',
      category: 'Emerging Tech',
      color: 'from-indigo-600 to-purple-700',
      badge: 'New'
    },
    {
      name: 'Space Technology Solutions',
      href: '/services/space-technology-solutions',
      icon: Satellite,
      description: 'Space tech for terrestrial use',
      category: 'Emerging Tech',
      color: 'from-slate-600 to-gray-700',
      badge: 'Featured'
    },
    {
      name: 'Digital Twin',
      href: '/services/digital-twin',
      icon: Eye,
      description: 'Digital twin technology',
      category: 'Emerging Tech',
      color: 'from-cyan-600 to-blue-700',
      badge: 'New'
    },

    // Micro SaaS
    {
      name: 'Micro CRM',
      href: '/services/micro-crm',
      icon: Users,
      description: 'Customer relationship management',
      category: 'Micro SaaS',
      color: 'from-blue-600 to-cyan-700',
      badge: 'Popular'
    },
    {
      name: 'Helpdesk Platform',
      href: '/services/helpdesk',
      icon: HelpCircle,
      description: 'Support ticketing system',
      category: 'Micro SaaS',
      color: 'from-green-600 to-emerald-700',
      badge: 'Popular'
    },
    {
      name: 'Website Analytics',
      href: '/services/website-analytics',
      icon: BarChart3,
      description: 'Web analytics platform',
      category: 'Micro SaaS',
      color: 'from-purple-600 to-pink-700',
      badge: 'Popular'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-600">Innovation • Intelligence • Impact</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                        item.current
                          ? 'bg-cyan-100 text-cyan-700'
                          : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2`}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="p-4">
                        <div className="grid gap-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                              <dropdownItem.icon className="w-5 h-5 text-cyan-600" />
                              <span className="text-sm font-medium text-gray-700">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.current
                        ? 'bg-cyan-100 text-cyan-700'
                        : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="ml-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-200 disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-200 disabled:opacity-50"
                >
                  {isSearching ? '...' : 'Go'}
                </button>
              </form>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="font-medium text-gray-900 py-2">{item.name}</div>
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-sm text-gray-600 hover:text-cyan-600"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          item.current
                            ? 'bg-cyan-100 text-cyan-700'
                            : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-cyan-600" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default EnhancedHeader;
