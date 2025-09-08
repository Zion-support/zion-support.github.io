import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Workflow, Calendar } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Sidebar as SidebarIcon } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from '../components/Sidebar';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    { name: 'Services', href: '/services-overview', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/ai-services', current: false, hasDropdown: true },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Analytics', 
      href: '/services/ai-healthcare-analytics', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Legal Document Analysis', 
      href: '/services/ai-legal-document-analysis', 
      icon: FileText, 
      description: 'Legal Tech Platform',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Financial Trading', 
      href: '/services/ai-financial-trading', 
      icon: TrendingUp, 
      description: 'FinTech AI Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI Supply Chain Optimization', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Workflow, 
      description: 'Supply Chain AI',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Cloud & DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'IT Infrastructure', 
      href: '/services/it-infrastructure', 
      icon: Building, 
      description: 'Enterprise Infrastructure',
      featured: true,
      color: 'from-slate-500 to-gray-500'
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
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Innovative Services 2025', 
      href: '/services/innovative-2025', 
      icon: Rocket, 
      description: 'Cutting-edge AI Services',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
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
    },
    {
      name: 'Government Solutions',
      href: '/solutions',
      icon: Shield,
      description: 'Public sector innovation',
      featured: false
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
      name: 'Community',
      href: '/community',
      icon: Users,
      description: 'Join our community',
      featured: false
    },
    {
      name: 'Developers',
      href: '/developers',
      icon: Code,
      description: 'Developer resources',
      featured: false
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Developers', href: '/developers', icon: Code },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const companyCategories = [
    {
      name: 'About Us',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'News', href: '/news', description: 'Company updates' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Webinars', href: '/webinars', description: 'Educational sessions' }
      ]
    }
  ];

  const supportCategories = [
    {
      name: 'Help & Support',
      icon: HelpCircle,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
        { name: 'Status Page', href: '/status', description: 'System status' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
        { name: 'Community', href: '/community', description: 'User community' },
        { name: 'Sitemap', href: '/sitemap', description: 'Site navigation' }
      ]
    }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
  ];

  const resourcesCategories = [
    {
      name: 'Learning & Support',
      description: 'Knowledge base and assistance',
      color: 'from-blue-500 to-cyan-600',
      icon: BookOpen,
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides and API docs' },
        { name: 'Help Center', href: '/help', description: 'Self-service support portal' },
        { name: 'Training', href: '/training', description: 'Educational resources' },
        { name: 'Webinars', href: '/webinars', description: 'Live and recorded sessions' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      name: 'Company',
      description: 'About us and our team',
      color: 'from-green-500 to-emerald-600',
      icon: Users,
      links: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      description: 'Insights and tools',
      color: 'from-purple-500 to-pink-600',
      icon: Star,
      links: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and trends' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Status Page', href: '/status', description: 'Service status' },
        { name: 'Sitemap', href: '/sitemap', description: 'Site navigation' }
      ]
    }
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
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/services"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  View All Services
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/request-quote"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      Get Quote
                                    </Link>
                                    <Link
                                      to="/schedule-demo"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      Schedule Demo
                                    </Link>
                                  </div>
                                </div>
                              </div>
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
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/solutions"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  View All Solutions
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/contact"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      Contact Us
                                    </Link>
                                    <Link
                                      to="/schedule-demo"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      Schedule Demo
                                    </Link>
                                  </div>
                                </div>
                              </div>
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
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/resources"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  View All Resources
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/faq"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      FAQ
                                    </Link>
                                    <Link
                                      to="/contact"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      Contact
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors py-2"
                      onMouseEnter={() => prefetchRoute(item.href)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hidden lg:block p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title="Toggle Sidebar"
              >
                <SidebarIcon className="w-5 h-5" />
              </button>

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

        {/* Resources Dropdown */}
        <AnimatePresence>
          {resourcesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {resourcesCategories.map((category) => (
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
                        {category.links.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {link.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
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
                            {item.name === 'Services' && servicesCategories.map((category) => (
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
                            {item.name === 'Resources' && resourcesCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className="text-sm font-medium text-cyan-400">{category.name}</div>
                                <div className="pl-4 space-y-1">
                                  {category.links.map((link) => (
                                    <Link
                                      key={link.name}
                                      to={link.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-sm text-slate-300 hover:text-white transition-colors py-1"
                                    >
                                      {link.name}
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

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
