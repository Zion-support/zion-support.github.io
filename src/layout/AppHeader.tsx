import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Bot, Atom, Code, Truck, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Satellite, FileText, Gauge, Workflow, Target, Handshake, Video, Newspaper } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';
import { EnhancedSearch } from '../components/EnhancedSearch';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<any>(null);

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
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics-platform', icon: Brain, description: 'Advanced ML forecasting with 95%+ accuracy' },
    { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', icon: Users, description: 'Personalized CX across all touchpoints' },
    { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Network, description: 'Intelligent inventory & demand forecasting' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'Zero false positive threat detection' },
    { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions', icon: Atom, description: 'Enterprise quantum computing platform' },
    { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', icon: Server, description: 'Ultra-low latency edge processing' },
    { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions', icon: Lock, description: 'Supply chain transparency & DeFi' },
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Intelligent process optimization' },
    { name: 'AI Content Studio Pro', href: '/services/ai-content-studio', icon: BookOpen, description: 'AI-powered content creation' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales automation' },
    { name: 'Smart Contract Scanner', href: '/services/smart-contract-risk-scanner', icon: Shield, description: 'Blockchain security & risk assessment' },
    { name: 'Digital Twin Platform', href: '/services/digital-twin', icon: Rocket, description: 'Real-time system simulation' },
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI medicine & diagnostics' },
    { name: 'Sustainability Solutions', href: '/services/sustainability', icon: Globe, description: 'Green IT & energy optimization' },
    { name: 'Space Tech', href: '/services/space-tech', icon: Rocket, description: 'Satellite & space infrastructure' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge', icon: Cpu, description: 'Smart devices & networks' },
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & automation' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise IT solutions' },
    { name: 'Green IT Solutions', href: '/services/green-it', icon: Globe, description: 'Sustainable technology' },
  ];

  const servicesCategories = [
    {
      name: 'Core Services',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      services: services.slice(0, 6)
    },
    {
      name: 'AI & ML',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: services.slice(6, 12)
    },
    {
      name: 'Emerging Tech',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      services: services.slice(12)
    }
  ];

  const solutions = [
    { name: 'Enterprise', href: '/solutions/enterprise', icon: Building, description: 'Large-scale business transformation' },
    { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'AI-powered medical solutions' },
    { name: 'Financial', href: '/solutions/financial', icon: DollarSign, description: 'Fintech and banking innovation' },
    { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Smart manufacturing & Industry 4.0' },
    { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce and retail tech' },
    { name: 'Government', href: '/solutions/government', icon: Shield, description: 'Public sector digitalization' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
    { name: 'Leadership', href: '/leadership', icon: Star, description: 'Meet our executive team' },
    { name: 'Careers', href: '/careers', icon: TrendingUp, description: 'Join our team' },
    { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Company updates' },
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Industry insights' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Find answers quickly' },
    { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' },
    { name: 'Training', href: '/training', icon: BookOpen, description: 'Learn our platform' },
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational sessions' },
    { name: 'Support', href: '/support', icon: MessageCircle, description: 'Get help' },
    { name: 'Status', href: '/status', icon: BarChart3, description: 'System status' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95' : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.current
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  }`}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menus */}
                {item.hasDropdown && hoveredNav === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {item.name === 'Services' && servicesCategories.map((category) => (
                        <div key={category.name} className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <category.icon className="w-5 h-5 text-gray-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                              >
                                <service.icon className="w-4 h-4 text-gray-400" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{service.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      {item.name === 'Solutions' && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Industry Solutions</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                              >
                                <solution.icon className="w-4 h-4 text-gray-400" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">{solution.name}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{solution.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.name === 'Company' && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">About Zion Tech</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {companyLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                              >
                                <link.icon className="w-4 h-4 text-gray-400" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">{link.name}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{link.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.name === 'Support' && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Get Help</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {supportLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                              >
                                <link.icon className="w-4 h-4 text-gray-400" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">{link.name}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{link.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-2.5">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="relative">
              <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.name === 'Services' && (
                          <div className="space-y-2">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        
                        {item.name === 'Solutions' && (
                          <div className="space-y-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
