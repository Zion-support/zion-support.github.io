import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Sparkles, Flame, Crown, Infinity, Gauge, GitFork, Truck, BarChart3, Eye, Server, Smartphone, Database, Network, Clock, Key, Globe2, ShieldCheck, CheckCircle, ArrowUpRight, Play, MailIcon, SparklesIcon, BrainCircuit, CpuIcon, ShieldIcon, ZapIcon, RocketIcon, HeartIcon, StarIcon, CrownIcon, FlameIcon, InfinityIcon, GaugeIcon, GitForkIcon, TruckIcon, BarChart3Icon, EyeIcon, ServerIcon, SmartphoneIcon, DatabaseIcon, NetworkIcon, ClockIcon, KeyIcon, Globe2Icon, ShieldCheckIcon, CheckCircleIcon, ArrowUpRightIcon, PlayIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'AI & Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
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
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Innovative Micro SAAS 2025', 
      href: '/innovative-micro-saas-services-2025', 
      icon: Sparkles, 
      description: 'Cutting-edge AI Services',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Emerging Tech Services', 
      href: '/services/emerging-tech', 
      icon: Flame, 
      description: 'Next-Generation Technology',
      featured: true,
      color: 'from-red-500 to-yellow-500'
    }
  ];

  const solutions = [
    {
      name: 'Healthcare Solutions',
      href: '/solutions/healthcare',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true
    },
    {
      name: 'Financial Solutions',
      href: '/solutions/financial',
      icon: TrendingUp,
      description: 'Fintech innovation & compliance',
      featured: true
    },
    {
      name: 'Manufacturing Solutions',
      href: '/solutions/manufacturing',
      icon: Building2,
      description: 'Smart manufacturing & Industry 4.0',
      featured: true
    },
    {
      name: 'Retail Solutions',
      href: '/solutions/retail',
      icon: ShoppingCart,
      description: 'E-commerce & retail innovation',
      featured: true
    },
    {
      name: 'Education Solutions',
      href: '/solutions/education',
      icon: BookOpen,
      description: 'EdTech & learning platforms',
      featured: true
    },
    {
      name: 'Legal Tech Solutions',
      href: '/solutions/legal-tech',
      icon: Scale,
      description: 'Legal automation & compliance',
      featured: true
    },
    {
      name: 'Real Estate Solutions',
      href: '/solutions/real-estate',
      icon: Building,
      description: 'Property technology & analytics',
      featured: true
    },
    {
      name: 'Logistics Solutions',
      href: '/solutions/logistics',
      icon: Truck,
      description: 'Supply chain optimization',
      featured: true
    },
    {
      name: 'Hospitality Solutions',
      href: '/solutions/hospitality',
      icon: HeartHandshake,
      description: 'Guest experience & operations',
      featured: true
    },
    {
      name: 'Energy Solutions',
      href: '/solutions/energy',
      icon: Zap,
      description: 'Sustainable energy management',
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
      featured: true
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: true
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: Code,
      description: 'Technical guides and APIs',
      featured: true
    },
    {
      name: 'FAQ & Support',
      href: '/faq',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: true
    },
    {
      name: 'Pricing Guide 2025',
      href: '/pricing-guide-2025',
      icon: DollarSign,
      description: 'Complete pricing information',
      featured: true
    },
    {
      name: 'Pricing Guide 2027',
      href: '/pricing-guide-2027',
      icon: DollarSign,
      description: 'Advanced pricing strategies',
      featured: true
    },
    {
      name: 'Pricing Guide 2030',
      href: '/pricing-guide-2030',
      icon: DollarSign,
      description: 'Future pricing models',
      featured: true
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      description: 'Browse our service catalog',
      featured: true
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
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
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      
                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 p-6 z-50">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Core Services</h3>
                              <div className="space-y-3">
                                {services.slice(0, 6).map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                                    onClick={() => setServicesDropdownOpen(false)}
                                  >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                                      <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors duration-200">
                                        {service.name}
                                      </div>
                                      <div className="text-sm text-slate-400">{service.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Specialized Solutions</h3>
                              <div className="space-y-3">
                                {services.slice(6).map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                                    onClick={() => setServicesDropdownOpen(false)}
                                  >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                                      <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors duration-200">
                                        {service.name}
                                      </div>
                                      <div className="text-sm text-slate-400">{service.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-6 pt-4 border-t border-slate-700">
                                <Link
                                  to="/services"
                                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  View All Services
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 p-6 z-50">
                          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Industry Solutions</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                                onClick={() => setSolutionsDropdownOpen(false)}
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                                  <solution.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors duration-200">
                                    {solution.name}
                                  </div>
                                  <div className="text-sm text-slate-400">{solution.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-700">
                            <Link
                              to="/solutions"
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              View All Solutions
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[500px] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 p-6 z-50">
                          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Learning & Support</h3>
                          <div className="space-y-3">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                                onClick={() => setResourcesDropdownOpen(false)}
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                                  <resource.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors duration-200">
                                    {resource.name}
                                  </div>
                                  <div className="text-sm text-slate-400">{resource.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {isSearching ? (
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                </button>
              </form>

              {/* Quick Actions */}
              <div className="flex items-center space-x-2">
                <Link
                  to="/request-quote"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                >
                  Get Quote
                </Link>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/20">
            <div className="container-responsive py-4">
              <div className="space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400"
                  >
                    {isSearching ? (
                      <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Search className="w-5 h-5" />
                    )}
                  </button>
                </form>

                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
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
                            className="w-full flex items-center justify-between px-4 py-3 text-left text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                          >
                            {item.name}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                              (item.name === 'Services' && servicesDropdownOpen) ||
                              (item.name === 'Solutions' && solutionsDropdownOpen) ||
                              (item.name === 'Resources' && resourcesDropdownOpen)
                                ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {/* Mobile Services Dropdown */}
                          {item.name === 'Services' && servicesDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Mobile Solutions Dropdown */}
                          {item.name === 'Solutions' && solutionsDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
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
                                  className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
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
                          className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-slate-700">
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <link.icon className="w-4 h-4 mr-3" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Link
                      to="/request-quote"
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
