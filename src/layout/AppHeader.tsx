import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Target, BarChart3, Sparkles, GraduationCap, FileText, Crown, Database, Scale, Calendar, PhoneCall, Briefcase, Package, Search as SearchIcon, Book, Calendar as CalendarIcon, Smartphone } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

interface AppHeaderProps {
  onSidebarToggle?: () => void;
  isSidebarOpen?: boolean;
}

export function AppHeader({ onSidebarToggle, isSidebarOpen }: AppHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeNav, setActiveNav] = useState<any>(null);

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
    { name: 'Services', href: '/services-overview', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/ai-services', current: false, hasDropdown: true },
    { name: 'Pricing', href: '/pricing', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Resources', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Get Quote', href: '/request-quote', current: false },
  ];

  const servicesDropdown = [
    {
      name: 'Service Categories',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Services Overview', href: '/services-overview', description: 'Complete service portfolio', icon: BarChart3 },
        { name: 'Services Catalog', href: '/services-catalog', description: 'Browse all services', icon: FileText },
        { name: 'Services Comparison', href: '/services-comparison', description: 'Compare offerings', icon: TrendingUp },
        { name: 'AI Services', href: '/ai-services', description: 'Artificial Intelligence solutions', icon: Brain },
        { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions', icon: Cloud },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Software-as-a-Service products', icon: ShoppingCart }
      ]
    },
    {
      name: 'Core Technologies',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics', icon: Brain },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure', icon: Cloud },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Digital simulation', icon: Rocket },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Internet of Things', icon: Cpu },
        { name: 'Cybersecurity Suite', href: '/services/ai-compliance-copilot', description: 'Security solutions', icon: Shield },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data processing', icon: Database }
      ]
    },
    {
      name: 'Innovation Showcase',
      icon: Star,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', description: 'Latest innovations', icon: Star },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', description: 'Future technologies', icon: Rocket },
        { name: 'Comprehensive Services 2028', href: '/comprehensive-services-landing-2028', description: 'Complete portfolio', icon: BarChart3 },
        { name: 'Emerging Tech 2030', href: '/emerging-tech-2030', description: 'Emerging technologies', icon: Zap }
      ]
    }
  ];

  const solutionsDropdown = [
    {
      name: 'AI Solutions',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Sales automation', icon: Target },
        { name: 'AI Content Marketing', href: '/services/ai-content-marketing-automation', description: 'Content generation', icon: FileText },
        { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', description: 'Supply chain optimization', icon: TrendingUp },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'Human resources automation', icon: Users },
        { name: 'AI Legal Research', href: '/services/ai-legal-research-platform', description: 'Legal document analysis', icon: Scale },
        { name: 'AI Education Platform', href: '/services/ai-education-platform', description: 'Educational technology', icon: GraduationCap }
      ]
    },
    {
      name: 'Enterprise Solutions',
      icon: Building,
      color: 'from-teal-600 to-blue-600',
      services: [
        { name: 'Healthcare Tech', href: '/services/healthcare-tech', description: 'Medical technology', icon: Heart },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Blockchain technology', icon: Lock },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions', icon: Zap },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Aerospace solutions', icon: Rocket },
        { name: 'Sustainability Tech', href: '/services/sustainability', description: 'Green technology', icon: Globe },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization', icon: TrendingUp }
      ]
    },
    {
      name: 'Micro SaaS Products',
      icon: ShoppingCart,
      color: 'from-orange-600 to-red-600',
      services: [
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', description: 'Lead qualification', icon: Target },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', description: 'Customer support', icon: MessageCircle },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer', description: 'SEO automation', icon: SearchIcon },
        { name: 'SaaS Churn Predictor', href: '/services/saas-churn-predictor', description: 'Customer retention', icon: TrendingUp },
        { name: 'API Monitoring', href: '/services/api-monitoring', description: 'API health tracking', icon: Smartphone },
        { name: 'Returns Management', href: '/services/returns-management', description: 'E-commerce returns', icon: Package }
      ]
    }
  ];

  const pricingDropdown = [
    {
      name: 'Pricing Plans',
      icon: DollarSign,
      color: 'from-emerald-600 to-teal-600',
      services: [
        { name: 'Pricing Overview', href: '/pricing', description: 'Service pricing', icon: DollarSign },
        { name: 'Pricing Guide', href: '/pricing-guide', description: 'Detailed pricing info', icon: FileText },
        { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-guide-2026', description: 'Future pricing', icon: BarChart3 },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', description: 'Current pricing', icon: TrendingUp }
      ]
    },
    {
      name: 'Get Started',
      icon: Star,
      color: 'from-cyan-600 to-blue-600',
      services: [
        { name: 'Request Quote', href: '/request-quote', description: 'Get custom pricing', icon: DollarSign },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a demo', icon: CalendarIcon },
        { name: 'Contact Sales', href: '/contact', description: 'Speak with sales', icon: PhoneCall },
        { name: 'Free Trial', href: '/signup', description: 'Start free trial', icon: Star }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission', icon: Building },
    { name: 'Our Team', href: '/team', description: 'Meet our experts', icon: Users },
    { name: 'Careers', href: '/careers', description: 'Join our team', icon: Briefcase },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships', icon: Building },
    { name: 'News & Press', href: '/news', description: 'Latest updates', icon: FileText },
    { name: 'Events', href: '/events', description: 'Upcoming events', icon: CalendarIcon },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories', icon: Award },
    { name: 'Marketplace', href: '/marketplace', description: 'Service marketplace', icon: ShoppingCart }
  ];

  const resourceLinks = [
    { name: 'Help Center', href: '/help', description: 'Support and documentation', icon: HelpCircle },
    { name: 'Documentation', href: '/documentation', description: 'Technical docs', icon: FileText },
    { name: 'Training', href: '/training', description: 'Learning resources', icon: GraduationCap },
    { name: 'Blog', href: '/blog', description: 'Latest insights', icon: BookOpen },
    { name: 'Webinars', href: '/webinars', description: 'Educational events', icon: CalendarIcon },
    { name: 'White Papers', href: '/white-papers', description: 'Research papers', icon: FileText },
    { name: 'FAQ', href: '/faq', description: 'Common questions', icon: HelpCircle },
    { name: 'Support Center', href: '/support', description: 'Technical support', icon: HelpCircle },
    { name: 'Community', href: '/community', description: 'User community', icon: Users }
  ];

  const handleNavClick = (nav: any) => {
    if (nav.hasDropdown) {
      setActiveNav(nav);
      // Close other dropdowns
      if (nav.name === 'Services') {
        setServicesDropdownOpen(true);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Solutions') {
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Pricing') {
        // Use the same dropdown state as solutions for pricing
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Company') {
        setCompanyDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Resources') {
        setResourcesDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
      }
    } else {
      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false);
    }
  };

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Sidebar Toggle Button */}
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="mr-4 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeNav?.name === item.name
                          ? 'text-cyan-400 bg-slate-800'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="inline-block w-4 h-4 ml-1" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        item.current
                          ? 'text-cyan-400 bg-slate-800'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800'
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
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-sm"
                  />
                </div>
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User Menu */}
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <User className="w-5 h-5" />
                </Link>
                <Link
                  to="/request-quote"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Get Quote
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menus */}
        <AnimatePresence>
          {(servicesDropdownOpen || solutionsDropdownOpen || companyDropdownOpen || resourcesDropdownOpen) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
              onMouseLeave={closeAllDropdowns}
            >
              <div className="container mx-auto px-4 py-8">
                {activeNav && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {activeNav.name === 'Services' && (
                      <>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Featured Services</h3>
                          <div className="space-y-3">
                            {servicesDropdown.map((category) => (
                              <div key={category.name} className="p-3 rounded-lg border border-slate-700">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                    <category.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="font-medium text-white">{category.name}</span>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                                    >
                                      <div className="flex items-center space-x-3">
                                        {service.icon && <service.icon className="w-5 h-5 text-cyan-400" />}
                                        <div>
                                          <div className="font-medium text-white">{service.name}</div>
                                          <div className="text-sm text-cyan-400">{service.description}</div>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                          <div className="space-y-3">
                            <Link
                              to="/services-overview"
                              className="block p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <Settings className="w-6 h-6 text-cyan-400" />
                                <div>
                                  <div className="font-medium text-white">View All Services</div>
                                  <div className="text-sm text-cyan-400">Complete service portfolio</div>
                                </div>
                              </div>
                            </Link>
                            <Link
                              to="/request-quote"
                              className="block p-4 rounded-lg border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <DollarSign className="w-6 h-6 text-green-400" />
                                <div>
                                  <div className="font-medium text-white">Get Custom Quote</div>
                                  <div className="text-sm text-green-400">Tailored pricing for your needs</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}

                    {activeNav.name === 'Solutions' && (
                      <>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">AI Solutions</h3>
                          <div className="space-y-3">
                            {solutionsDropdown.map((category) => (
                              <div key={category.name} className="p-3 rounded-lg border border-slate-700">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                    <category.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="font-medium text-white">{category.name}</span>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                                    >
                                      <div className="flex items-center space-x-3">
                                        {service.icon && <service.icon className="w-5 h-5 text-cyan-400" />}
                                        <div>
                                          <div className="font-medium text-white">{service.name}</div>
                                          <div className="text-sm text-cyan-400">{service.description}</div>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Innovation Hub</h3>
                          <div className="space-y-3">
                            <Link
                              to="/innovative-services-showcase-2025"
                              className="block p-4 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <Sparkles className="w-6 h-6 text-purple-400" />
                                <div>
                                  <div className="font-medium text-white">2025 Innovations</div>
                                  <div className="text-sm text-purple-400">Latest cutting-edge solutions</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}

                    {activeNav.name === 'Pricing' && (
                      <>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Pricing Plans</h3>
                          <div className="space-y-3">
                            {pricingDropdown.map((category) => (
                              <div key={category.name} className="p-3 rounded-lg border border-slate-700">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                    <category.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="font-medium text-white">{category.name}</span>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                                    >
                                      <div className="flex items-center space-x-3">
                                        {service.icon && <service.icon className="w-5 h-5 text-cyan-400" />}
                                        <div>
                                          <div className="font-medium text-white">{service.name}</div>
                                          <div className="text-sm text-cyan-400">{service.description}</div>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {activeNav.name === 'Company' && (
                      <>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">About Zion Tech</h3>
                          <div className="space-y-3">
                            {companyLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group"
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                  <link.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {link.name}
                                  </div>
                                  <div className="text-sm text-slate-400">{link.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                          <div className="space-y-3">
                            <Link
                              to="/contact"
                              className="block p-4 rounded-lg border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <MessageCircle className="w-6 h-6 text-green-400" />
                                <div>
                                  <div className="font-medium text-white">Get In Touch</div>
                                  <div className="text-sm text-green-400">Let's discuss your project</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}

                    {activeNav.name === 'Resources' && (
                      <>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Help & Support</h3>
                          <div className="space-y-3">
                            {resourceLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group"
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                  <link.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {link.name}
                                  </div>
                                  <div className="text-sm text-slate-400">{link.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Quick Help</h3>
                          <div className="space-y-3">
                            <Link
                              to="/help"
                              className="block p-4 rounded-lg border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <HelpCircle className="w-6 h-6 text-orange-400" />
                                <div>
                                  <div className="font-medium text-white">Help Center</div>
                                  <div className="text-sm text-orange-400">Find answers quickly</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
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
              className="lg:hidden bg-slate-900 border-t border-slate-700"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-sm"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <button
                          onClick={() => handleNavClick(item)}
                          className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          {item.name}
                          <ChevronDown className="inline-block w-4 h-4 ml-2" />
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-slate-700 space-y-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/request-quote"
                    className="block w-full text-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
