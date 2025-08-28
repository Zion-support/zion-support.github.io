import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Phone, Mail, MapPin, Star, Award, Target, TrendingUp, Lightbulb, Atom, Leaf, Eye, Scale, Building2, Car, Home, Factory, City, ArrowRight, FileText, DollarSign, Handshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'AI & Analytics', 
      href: '/services', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI & Legal Tech', 
      href: '/services', 
      icon: Scale, 
      description: 'Document Analysis & Compliance',
      featured: false,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI & Healthcare', 
      href: '/services', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI & Research', 
      href: '/services', 
      icon: Eye, 
      description: 'Scientific Research & Discovery',
      featured: false,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'AI & Green Tech', 
      href: '/services', 
      icon: Leaf, 
      description: 'Sustainability Solutions',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI & Metaverse', 
      href: '/services', 
      icon: Globe, 
      description: 'Virtual Reality & Gaming',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'AI & Blockchain', 
      href: '/services', 
      icon: Lock, 
      description: 'DeFi & Smart Contracts',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI & Edge Computing', 
      href: '/services', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI & Space Tech', 
      href: '/services', 
      icon: Rocket, 
      description: 'Satellite Operations & Missions',
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Cloud Services', 
      href: '/services', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions',
      icon: Building2,
      description: 'Large-scale business transformations',
      featured: true
    },
    {
      name: 'SMB Solutions',
      href: '/solutions',
      icon: Building,
      description: 'Small to medium business growth',
      featured: false
    },
    {
      name: 'Startup Solutions',
      href: '/solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth',
      featured: false
    },
    {
      name: 'Government Solutions',
      href: '/solutions',
      icon: Shield,
      description: 'Public sector innovation',
      featured: false
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true
    },
    {
      name: 'Financial Solutions',
      href: '/solutions',
      icon: TrendingUp,
      description: 'Fintech innovation & compliance',
      featured: true
    }
  ];

  const resources = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: FileText,
      description: 'Real-world success stories',
      featured: true
    },
    {
      name: 'Whitepapers',
      href: '/whitepapers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: false
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: false
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: BookOpen,
      description: 'Technical guides and APIs',
      featured: false
    },
    {
      name: 'Support Center',
      href: '/support',
      icon: HelpCircle,
      description: 'Help and troubleshooting',
      featured: true
    }
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Zion Tech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative" ref={item.name === 'Services' ? servicesDropdownRef : item.name === 'Solutions' ? solutionsDropdownRef : resourcesDropdownRef}>
                    <button
                      onClick={() => {
                        if (item.name === 'Services') {
                          setServicesDropdownOpen(!servicesDropdownOpen);
                          setSolutionsDropdownOpen(false);
                          setResourcesDropdownOpen(false);
                        } else if (item.name === 'Solutions') {
                          setSolutionsDropdownOpen(!solutionsDropdownOpen);
                          setServicesDropdownOpen(false);
                          setResourcesDropdownOpen(false);
                        } else if (item.name === 'Resources') {
                          setResourcesDropdownOpen(!resourcesDropdownOpen);
                          setServicesDropdownOpen(false);
                          setSolutionsDropdownOpen(false);
                        }
                      }}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (item.name === 'Services' && servicesDropdownOpen) ||
                        (item.name === 'Solutions' && solutionsDropdownOpen) ||
                        (item.name === 'Resources' && resourcesDropdownOpen)
                          ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Services Dropdown */}
                    {item.name === 'Services' && (
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
                          >
                            <div className="p-6">
                              <div className="grid grid-cols-1 gap-4">
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                                    onClick={() => setServicesDropdownOpen(false)}
                                  >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                                      <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                                          {service.name}
                                        </span>
                                        {service.featured && (
                                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                                            Featured
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-slate-700">
                                <Link
                                  to="/services"
                                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  View All Services
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && (
                      <AnimatePresence>
                        {solutionsDropdownOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
                          >
                            <div className="p-6">
                              <div className="space-y-3">
                                {solutions.map((solution) => (
                                  <Link
                                    key={solution.name}
                                    to={solution.href}
                                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                                    onClick={() => setSolutionsDropdownOpen(false)}
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                                      <solution.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                                          {solution.name}
                                        </span>
                                        {solution.featured && (
                                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                                            Popular
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-400 mt-1">{solution.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && (
                      <AnimatePresence>
                        {resourcesDropdownOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
                          >
                            <div className="p-6">
                              <div className="space-y-3">
                                {resources.map((resource) => (
                                  <Link
                                    key={resource.name}
                                    to={resource.href}
                                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                                    onClick={() => setResourcesDropdownOpen(false)}
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                                      <resource.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                                          {resource.name}
                                        </span>
                                        {resource.featured && (
                                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                                            New
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-400 mt-1">{resource.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ZionLoadingSpinner size="sm" />
                  </div>
                )}
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <ZionLoadingSpinner size="sm" />
                    </div>
                  )}
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                            else if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            else if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                          }}
                          className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Resources' && resourcesDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Dropdowns */}
                        {item.name === 'Services' && servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block px-4 py-2 text-sm text-blue-400 hover:text-blue-300 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}
                        
                        {item.name === 'Solutions' && solutionsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        
                        {item.name === 'Resources' && resourcesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {resource.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
