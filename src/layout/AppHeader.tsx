import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Prefetch lazily-loaded routes on hover for snappier navigation
  const prefetchRoute = (path: string) => {
    switch (path) {
      case '/':
        import('../pages/Home');
        break;
      case '/services':
        import('../pages/Services');
        break;
      case '/ai-services':
        import('../pages/AIServices');
        break;
      case '/it-services':
        import('../pages/ITServices');
        break;
      case '/micro-saas':
        import('../pages/MicroSaaS');
        break;
      case '/pricing-guide':
        import('../pages/PricingGuide');
        break;
      case '/about':
        import('../pages/About');
        break;
      case '/contact':
        import('../pages/Contact');
        break;
      default:
        break;
    }
  };

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
    { name: 'Home', href: '/', current: true, hasDropdown: false },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'AI Services', href: '/ai-services', current: false, hasDropdown: false },
    { name: 'IT Services', href: '/it-services', current: false, hasDropdown: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false, hasDropdown: false },
    { name: 'Pricing', href: '/pricing-guide', current: false, hasDropdown: false },
    { name: 'About', href: '/about', current: false, hasDropdown: false },
    { name: 'Contact', href: '/contact', current: false, hasDropdown: false },
  ];

  const servicesCategories = [
    {
      name: 'AI & Analytics',
      description: 'Intelligent solutions for data-driven decisions',
      color: 'from-purple-500 to-pink-600',
      icon: Brain,
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics & insights' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Sales automation & optimization' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Smart email management' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI-powered content creation' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Modern infrastructure & automation',
      color: 'from-blue-500 to-cyan-600',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations guidance' }
      ]
    },
    {
      name: 'Digital Innovation',
      description: 'Cutting-edge technology solutions',
      color: 'from-green-500 to-emerald-600',
      icon: Rocket,
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual simulation & monitoring' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Smart device networks' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Advanced data processing' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Returns Management', href: '/services/returns-management', description: 'E-commerce RMA & logistics' }
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security & compliance',
      color: 'from-red-500 to-orange-600',
      icon: Shield,
      services: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-powered security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Modern security framework' },
        { name: 'Incident Response', href: '/services/incident-response-platform', description: 'Security incident management' }
      ]
    },
    {
      name: 'Emerging Tech',
      description: 'Future-ready solutions',
      color: 'from-indigo-500 to-purple-600',
      icon: Cpu,
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Distributed ledger tech' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space-based solutions' },
        { name: 'Sustainability Tech', href: '/services/sustainability', description: 'Green technology solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Help', href: '/help', icon: MessageCircle },
    { name: 'Partners', href: '/partners', icon: Users },
  ];

  const handleDropdownToggle = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <>
      <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle('services')}
                      onMouseEnter={() => setActiveDropdown('services')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2 group"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors py-2 relative group"
                      onMouseEnter={() => prefetchRoute(item.href)}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                >
                  {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-4 h-4" />}
                </button>
              </form>

              {/* Quick Actions */}
              <div className="flex items-center space-x-2">
                <Link
                  to="/contact"
                  className="px-4 py-2 text-cyan-400 hover:text-white border border-cyan-400/50 hover:border-cyan-400 rounded-lg transition-all duration-200 hover:bg-cyan-400/10"
                >
                  Get Quote
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Login
                </Link>
              </div>

              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {servicesCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-slate-400">{category.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link
                              to={service.href}
                              className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors py-1 group-hover:translate-x-1 transition-transform duration-200"
                            >
                              {service.name}
                              <span className="block text-xs text-slate-500 group-hover:text-slate-400">
                                {service.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Links Section */}
                <div className="mt-8 pt-8 border-t border-slate-700/50">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {quickLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group"
                      >
                        <Link
                          to={link.href}
                          className="block p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-200 border border-slate-600/50 hover:border-cyan-400/50"
                        >
                          <div className="flex items-center mb-2">
                            <link.icon className="w-5 h-5 text-cyan-400 mr-2" />
                            <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </span>
                          </div>
                          <p className="text-sm text-slate-400">{link.description}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                  <h2 className="text-xl font-semibold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Search */}
                <div className="p-6 border-b border-slate-700/50">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      disabled={isSearching}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                    >
                      {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-5 h-5" />}
                    </button>
                  </form>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {mainNavigation.map((item) => (
                      <li key={item.name}>
                        {item.hasDropdown ? (
                          <div>
                            <button
                              onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                              className="w-full flex items-center justify-between p-3 text-left text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                            >
                              <span>{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === `mobile-${item.name}` && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-2 space-y-1 overflow-hidden"
                                >
                                  {servicesCategories.map((category) => (
                                    <li key={category.name}>
                                      <Link
                                        to={category.services[0]?.href || '#'}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block p-2 text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
                                      >
                                        {category.name}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block p-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Quick Actions */}
                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <div className="space-y-3">
                      <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        Get Quote
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full px-4 py-3 text-center border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <ThemeToggle />
                    <div className="text-sm text-slate-400">
                      Zion Tech Group
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
