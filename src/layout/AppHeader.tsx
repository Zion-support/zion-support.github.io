import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, Eye, FileText, Globe, Handshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
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

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: '2028 Services', href: '/services/2028-showcase', current: false, featured: true },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Research', href: '/research-development', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'Enhanced Services 2025', 
      href: '/enhanced-services', 
      icon: Zap, 
      description: 'Cutting-edge AI, Quantum & Emerging Tech',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
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
      featured: true,
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
      description: 'Research & Development',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'AI & Finance', 
      href: '/services', 
      icon: DollarSign, 
      description: 'Financial AI & Analytics',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'AI & Manufacturing', 
      href: '/services', 
      icon: Building, 
      description: 'Industrial AI & Automation',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'AI & Education', 
      href: '/services', 
      icon: BookOpen, 
      description: 'Educational AI & Learning',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI & Security', 
      href: '/services', 
      icon: Shield, 
      description: 'Cybersecurity & AI',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'AI & Marketing', 
      href: '/services', 
      icon: Target, 
      description: 'Marketing AI & Analytics',
      featured: true,
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'AI & Customer Service', 
      href: '/services', 
      icon: MessageCircle, 
      description: 'Customer Service AI',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'AI & HR', 
      href: '/services', 
      icon: Users, 
      description: 'HR AI & Recruitment',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI & Sales', 
      href: '/services', 
      icon: TrendingUp, 
      description: 'Sales AI & Analytics',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI & Operations', 
      href: '/services', 
      icon: Settings, 
      description: 'Operations AI & Optimization',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI & Innovation', 
      href: '/services', 
      icon: Rocket, 
      description: 'Innovation & R&D',
      featured: true,
      color: 'from-violet-500 to-purple-500'
    }
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
      icon: Target,
      description: 'Real-world success stories',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
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
      icon: Code,
      description: 'Technical guides and APIs',
      featured: false
    },
    {
      name: 'FAQ & Support',
      href: '/faq',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: false
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                  <p className="text-xs text-cyan-400">Future of Technology</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
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
                        className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          (item.name === 'Services' && servicesDropdownOpen) ||
                          (item.name === 'Solutions' && solutionsDropdownOpen) ||
                          (item.name === 'Resources' && resourcesDropdownOpen)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    service.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                      {React.createElement(service.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {service.description}
                                      </p>
                                      {service.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    solution.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                                      {React.createElement(solution.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {solution.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {solution.description}
                                      </p>
                                      {solution.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    resource.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                                      {React.createElement(resource.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {resource.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {resource.description}
                                      </p>
                                      {resource.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side - Search, Actions, Mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                </div>
              </form>

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/request-quote"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Quote
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </form>

                {/* Mobile Navigation */}
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
                            className="flex items-center justify-between w-full text-left text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                          >
                            {item.name}
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                              (item.name === 'Services' && servicesDropdownOpen) ||
                              (item.name === 'Solutions' && solutionsDropdownOpen) ||
                              (item.name === 'Resources' && resourcesDropdownOpen)
                                ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {/* Mobile Services Dropdown */}
                          {item.name === 'Services' && servicesDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {services.slice(0, 6).map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                              <Link
                                to="/services"
                                className="block text-cyan-400 hover:text-cyan-300 py-1 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                View All Services →
                              </Link>
                            </div>
                          )}

                          {/* Mobile Solutions Dropdown */}
                          {item.name === 'Solutions' && solutionsDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {solution.name}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Mobile Resources Dropdown */}
                          {item.name === 'Resources' && resourcesDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
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
                          className="block text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-slate-700/50 space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {contactInfo.email}
                  </a>
                  <div className="flex items-start gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || solutionsDropdownOpen || resourcesDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesDropdownOpen(false);
            setSolutionsDropdownOpen(false);
            setResourcesDropdownOpen(false);
          }}
        />
      )}
    </>
  );
}
