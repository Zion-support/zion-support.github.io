import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, 
  Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, 
  MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, 
  Settings, Phone, Mail, MapPin, Building, Bot, Atom, Gauge, Workflow, 
  Target, Code, Truck, BarChart3, PenTool, Eye, Server, Smartphone, 
  Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Satellite, 
  FileText, Handshake, Briefcase, Video, Activity, GraduationCap, Newspaper 
} from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
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

  // Main navigation structure
  const mainNavigation = [
    { 
      name: 'Home', 
      href: '/', 
      current: true 
    },
    { 
      name: 'Services', 
      href: '/services', 
      current: false, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
        { name: 'Cybersecurity', href: '/security', icon: Shield },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      current: false, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial', href: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Building },
        { name: 'Government', href: '/solutions/government', icon: Shield },
        { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      current: false, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Leadership', href: '/leadership', icon: Users },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'News', href: '/news', icon: Newspaper }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources', 
      current: false, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Training', href: '/training', icon: GraduationCap },
        { name: 'Documentation', href: '/docs', icon: BookOpen }
      ]
    },
    { 
      name: 'Support', 
      href: '/support', 
      current: false, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle },
        { name: 'Status Page', href: '/status', icon: Activity },
        { name: 'API Docs', href: '/api-docs', icon: Code }
      ]
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      current: false 
    }
  ];

  // Featured services for the services dropdown
  const featuredServices = [
    { 
      name: 'AI Autonomous Business Operations', 
      href: '/services/ai-autonomous-business-operations-platform', 
      icon: Bot, 
      description: 'Intelligent automation for enterprise operations',
      category: 'AI Services'
    },
    { 
      name: 'AI Customer Experience Platform', 
      href: '/services/ai-customer-experience-analytics-platform', 
      icon: Users, 
      description: 'Personalized customer experience across all touchpoints',
      category: 'AI Services'
    },
    { 
      name: 'AI Cybersecurity Platform', 
      href: '/services/ai-cybersecurity-platform', 
      icon: Shield, 
      description: 'Advanced threat detection and prevention',
      category: 'Security'
    },
    { 
      name: 'Quantum Edge Computing', 
      href: '/services/quantum-edge-computing-solutions', 
      icon: Atom, 
      description: 'Next-generation computing at the edge',
      category: 'Emerging Tech'
    },
    { 
      name: 'Blockchain Enterprise Solutions', 
      href: '/services/blockchain-enterprise-solutions', 
      icon: Lock, 
      description: 'Secure blockchain infrastructure for enterprises',
      category: 'Blockchain'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                      onMouseEnter={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(true);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(true);
                        if (item.name === 'Company') setCompanyDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(false);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(false);
                        if (item.name === 'Company') setCompanyDropdownOpen(false);
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {((item.name === 'Services' && servicesDropdownOpen) ||
                        (item.name === 'Solutions' && solutionsDropdownOpen) ||
                        (item.name === 'Company' && companyDropdownOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                          onMouseEnter={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(true);
                            if (item.name === 'Solutions') setSolutionsDropdownOpen(true);
                            if (item.name === 'Company') setCompanyDropdownOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(false);
                            if (item.name === 'Solutions') setSolutionsDropdownOpen(false);
                            if (item.name === 'Company') setCompanyDropdownOpen(false);
                          }}
                        >
                          {item.name === 'Services' && (
                            <div className="px-4">
                              <h3 className="text-sm font-semibold text-gray-900 mb-3">Featured Services</h3>
                              <div className="space-y-3">
                                {featuredServices.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <service.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium text-gray-900">{service.name}</p>
                                      <p className="text-xs text-gray-500">{service.description}</p>
                                      <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
                                        {service.category}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-4 pt-3 border-t border-gray-200">
                                <Link
                                  to="/services"
                                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                                >
                                  View All Services
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                              </div>
                            </div>
                          )}

                          {item.name === 'Solutions' && (
                            <div className="px-4">
                              <h3 className="text-sm font-semibold text-gray-900 mb-3">Industry Solutions</h3>
                              <div className="grid grid-cols-1 gap-2">
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <dropdownItem.icon className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-gray-700">{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.name === 'Company' && (
                            <div className="px-4">
                              <h3 className="text-sm font-semibold text-gray-900 mb-3">About Zion Tech</h3>
                              <div className="grid grid-cols-1 gap-2">
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <dropdownItem.icon className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-gray-700">{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.name === 'Resources' && (
                            <div className="px-4">
                              <h3 className="text-sm font-semibold text-gray-900 mb-3">Knowledge Resources</h3>
                              <div className="grid grid-cols-1 gap-2">
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <dropdownItem.icon className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-gray-700">{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.name === 'Support' && (
                            <div className="px-4">
                              <h3 className="text-sm font-semibold text-gray-900 mb-3">Get Help</h3>
                              <div className="grid grid-cols-1 gap-2">
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <dropdownItem.icon className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-gray-700">{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              {isSearching && (
                <ZionLoadingSpinner className="absolute right-3 top-2.5 w-4 h-4" />
              )}
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </form>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-900 py-2">
                          {item.name}
                        </div>
                        {item.dropdownItems && (
                          <div className="pl-4 space-y-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-sm font-medium text-gray-900 hover:text-blue-600 py-2 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <ThemeToggle />
                  <div className="flex space-x-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <User className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <Bell className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
