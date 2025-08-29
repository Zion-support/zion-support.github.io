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
    { name: 'AI Services', href: '/ai-services', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const servicesCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Intelligent business solutions',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics platform' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Sales automation & coaching' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Intelligent email automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI-powered content creation' },
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Infrastructure & automation',
      services: [
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization platform' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'DevOps automation & CI/CD' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure management' },
      ]
    },
    {
      name: 'IoT & Digital Twin',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      description: 'Smart systems & monitoring',
      services: [
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'System simulation & monitoring' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Edge computing solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Advanced data insights' },
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      description: 'Next-generation computing',
      services: [
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing', description: 'Quantum algorithms & optimization' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-network-platform', description: 'Quantum AI platform' },
      ]
    },
    {
      name: 'Specialized Solutions',
      icon: Award,
      color: 'from-orange-600 to-red-600',
      description: 'Industry-specific solutions',
      services: [
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations optimization' },
        { name: 'Customer Feedback Platform', href: '/services/mobile-feedback-surveys', description: 'AI-powered feedback analysis' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'Advanced compliance management' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Services Showcase', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
  ];

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
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors py-2"
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
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-sm"
                />
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {servicesCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{category.name}</h3>
                          <p className="text-sm text-slate-400">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links Section */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                          <link.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-slate-400">
                            {link.description}
                          </div>
                        </div>
                      </Link>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 border-l border-slate-700 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-semibold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="font-medium text-white py-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {servicesCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className="text-sm font-medium text-cyan-400">{category.name}</div>
                                <div className="pl-4 space-y-1">
                                  {category.services.slice(0, 3).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-sm text-slate-300 hover:text-white transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-medium text-white hover:text-cyan-400 transition-colors py-2"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Quick Access</h3>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Contact Us</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <a href="tel:+13024640950" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>+1 302 464 0950</span>
                    </a>
                    <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
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
