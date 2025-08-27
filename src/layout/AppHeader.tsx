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
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  ShoppingCart,
  Settings,
  LogOut,
  HelpCircle,
  BookOpen,
  Sparkles,
  Target,
  Lightbulb,
  CpuIcon,
  Server,
  Wifi,
  Smartphone,
  Monitor,
  Laptop,
  Handshake,
  Building
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [microSaasDropdownOpen, setMicroSaasDropdownOpen] = useState(false);
  const [itServicesDropdownOpen, setItServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      description: 'Comprehensive technology solutions',
      dropdown: [
        { 
          name: 'AI & Analytics', 
          href: '/services/ai-analytics', 
          icon: Brain, 
          description: 'Machine learning and data insights',
          category: 'AI Solutions'
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield, 
          description: 'Protect your digital assets',
          category: 'Security'
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud, 
          description: 'Scalable infrastructure solutions',
          category: 'Infrastructure'
        },
        { 
          name: 'IoT & Edge', 
          href: '/services/iot-edge', 
          icon: Zap, 
          description: 'Connected device management',
          category: 'IoT'
        },
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Rocket, 
          description: 'Next-generation computing',
          category: 'Emerging Tech'
        },
        { 
          name: 'Blockchain', 
          href: '/services/blockchain', 
          icon: Code, 
          description: 'Decentralized solutions',
          category: 'Web3'
        },
        { 
          name: 'Digital Twin', 
          href: '/services/digital-twin', 
          icon: Globe, 
          description: 'Virtual replica technology',
          category: 'Simulation'
        },
        { 
          name: 'Sustainability', 
          href: '/services/sustainability', 
          icon: Heart, 
          description: 'Green IT solutions',
          category: 'Green Tech'
        }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Sparkles,
      description: 'Innovative business applications',
      dropdown: [
        { 
          name: 'AI Business Intelligence', 
          href: '/micro-saas/ai-business-intelligence', 
          icon: BarChart3, 
          description: 'Smart analytics platform',
          category: 'AI & Analytics'
        },
        { 
          name: 'Customer Experience', 
          href: '/micro-saas/customer-experience', 
          icon: Users, 
          description: 'Enhanced customer engagement',
          category: 'CX'
        },
        { 
          name: 'Supply Chain', 
          href: '/micro-saas/supply-chain', 
          icon: Network, 
          description: 'Optimized logistics management',
          category: 'Logistics'
        },
        { 
          name: 'Content Creation', 
          href: '/micro-saas/content-creation', 
          icon: FileImage, 
          description: 'AI-powered content tools',
          category: 'Content'
        },
        { 
          name: 'HR Platform', 
          href: '/micro-saas/hr-platform', 
          icon: Users, 
          description: 'Human resources automation',
          category: 'HR'
        },
        { 
          name: 'Marketing Automation', 
          href: '/micro-saas/marketing-automation', 
          icon: TrendingUp, 
          description: 'AI marketing solutions',
          category: 'Marketing'
        }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Enterprise technology solutions',
      dropdown: [
        { 
          name: 'Infrastructure', 
          href: '/it-services/infrastructure', 
          icon: Cpu, 
          description: 'IT infrastructure management',
          category: 'Infrastructure'
        },
        { 
          name: 'Digital Transformation', 
          href: '/it-services/digital-transformation', 
          icon: Rocket, 
          description: 'Business transformation',
          category: 'Transformation'
        },
        { 
          name: 'Consulting', 
          href: '/it-services/consulting', 
          icon: Users, 
          description: 'Technology consulting',
          category: 'Advisory'
        },
        { 
          name: 'Onsite Support', 
          href: '/it-services/onsite-support', 
          icon: Wifi, 
          description: '24/7 technical support',
          category: 'Support'
        },
        { 
          name: '5G Solutions', 
          href: '/it-services/5g-solutions', 
          icon: Network, 
          description: 'Next-gen networking',
          category: 'Networking'
        },
        { 
          name: 'Green IT', 
          href: '/it-services/green-it', 
          icon: Heart, 
          description: 'Eco-friendly solutions',
          category: 'Sustainability'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Industry-specific solutions',
      dropdown: [
        { 
          name: 'Healthcare', 
          href: '/solutions/healthcare', 
          icon: Heart, 
          description: 'Digital health solutions',
          category: 'Healthcare'
        },
        { 
          name: 'Finance', 
          href: '/solutions/finance', 
          icon: BarChart3, 
          description: 'Fintech solutions',
          category: 'Fintech'
        },
        { 
          name: 'Manufacturing', 
          href: '/solutions/manufacturing', 
          icon: Cpu, 
          description: 'Smart manufacturing',
          category: 'Industry 4.0'
        },
        { 
          name: 'Retail', 
          href: '/solutions/retail', 
          icon: ShoppingCart, 
          description: 'E-commerce solutions',
          category: 'E-commerce'
        },
        { 
          name: 'Education', 
          href: '/solutions/education', 
          icon: BookOpen, 
          description: 'EdTech solutions',
          category: 'EdTech'
        },
        { 
          name: 'Government', 
          href: '/solutions/government', 
          icon: Shield, 
          description: 'Public sector solutions',
          category: 'GovTech'
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building,
      description: 'Learn about Zion Tech Group',
      dropdown: [
        { 
          name: 'About Us', 
          href: '/about', 
          icon: Users, 
          description: 'Learn our story',
          category: 'Company'
        },
        { 
          name: 'Team', 
          href: '/team', 
          icon: Users, 
          description: 'Meet our experts',
          category: 'Team'
        },
        { 
          name: 'Careers', 
          href: '/careers', 
          icon: TrendingUp, 
          description: 'Join our team',
          category: 'Careers'
        },
        { 
          name: 'Partners', 
          href: '/partners', 
          icon: Handshake, 
          description: 'Strategic alliances',
          category: 'Partnerships'
        },
        { 
          name: 'News', 
          href: '/news', 
          icon: FileText, 
          description: 'Company updates',
          category: 'News'
        },
        { 
          name: 'Blog', 
          href: '/blog', 
          icon: BookOpen, 
          description: 'Latest insights',
          category: 'Content'
        }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/request-quote', icon: MessageCircle, description: 'Request a custom quote' },
    { name: 'Support', href: '/help-center', icon: HelpCircle, description: 'Get technical support' },
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and updates' },
    { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Reach our team' }
  ];

  const searchSuggestions = [
    'AI Business Intelligence',
    'Cybersecurity Solutions',
    'Cloud DevOps',
    'Quantum Computing',
    'Digital Transformation',
    'IoT Edge Computing'
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setServicesDropdownOpen(false);
        setMicroSaasDropdownOpen(false);
        setItServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="futuristic-nav relative z-50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl border-b border-zion-cyan/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 border border-zion-cyan/10 rounded-full float-animation"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-zion-purple/10 rounded-full float-animation-delayed"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  Zion Tech Group
                </h1>
                <p className="text-zion-cyan/80 text-xs">Innovation • Technology • Future</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="dropdown-container relative">
                <button
                  onClick={() => {
                    if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                    else if (item.name === 'Micro SAAS') setMicroSaasDropdownOpen(!microSaasDropdownOpen);
                    else if (item.name === 'IT Services') setItServicesDropdownOpen(!itServicesDropdownOpen);
                    else if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                    else if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                  }}
                  className="futuristic-nav-link flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors duration-300 group"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {((item.name === 'Services' && servicesDropdownOpen) ||
                    (item.name === 'Micro SAAS' && microSaasDropdownOpen) ||
                    (item.name === 'IT Services' && itServicesDropdownOpen) ||
                    (item.name === 'Solutions' && solutionsDropdownOpen) ||
                    (item.name === 'Company' && companyDropdownOpen)) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-zion-cyan/70 text-sm">{item.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="group p-3 rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan/30 border border-transparent transition-all duration-300"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors duration-300">
                                  <dropdownItem.icon className="w-5 h-5 text-zion-cyan" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-300">
                                      {dropdownItem.name}
                                    </span>
                                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                                      {dropdownItem.category}
                                    </span>
                                  </div>
                                  <p className="text-zion-cyan/70 text-sm">{dropdownItem.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  placeholder="Search services, solutions..."
                  className="w-80 px-4 py-3 pl-12 bg-zion-cyan/10 border border-zion-cyan/30 rounded-2xl text-white placeholder-zion-cyan/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/50" />
              </form>

              {/* Search Suggestions */}
              <AnimatePresence>
                {searchFocused && searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-zion-cyan/80 mb-2">Quick Actions</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {quickActions.map((action) => (
                            <Link
                              key={action.name}
                              to={action.href}
                              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-300"
                            >
                              <action.icon className="w-4 h-4 text-zion-cyan" />
                              <span className="text-white text-sm">{action.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-zion-cyan/80 mb-2">Popular Searches</h4>
                        <div className="space-y-1">
                          {searchSuggestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              onClick={() => {
                                setSearchQuery(suggestion);
                                setSearchFocused(false);
                                window.location.href = `/search?q=${encodeURIComponent(suggestion)}`;
                              }}
                              className="w-full text-left p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-300"
                            >
                              <span className="text-white text-sm">{suggestion}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Menu */}
            {user ? (
              <div className="dropdown-container relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-zion-cyan" />
                  </div>
                  <span className="text-white text-sm">{user.name || 'User'}</span>
                  <ChevronDown className="w-4 h-4 text-zion-cyan" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4 p-3 bg-zion-cyan/10 rounded-xl">
                          <div className="text-white font-medium">{user.name || 'User'}</div>
                          <div className="text-zion-cyan/70 text-sm">{user.email}</div>
                        </div>
                        
                        <div className="space-y-1">
                          <Link
                            to="/dashboard"
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300"
                          >
                            <PanelLeft className="w-5 h-5 text-zion-cyan" />
                            <span className="text-white">Dashboard</span>
                          </Link>
                          
                          <Link
                            to="/profile"
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300"
                          >
                            <User className="w-5 h-5 text-zion-cyan" />
                            <span className="text-white">Profile</span>
                          </Link>
                          
                          <Link
                            to="/settings"
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300"
                          >
                            <Settings className="w-5 h-5 text-zion-cyan" />
                            <span className="text-white">Settings</span>
                          </Link>
                          
                          <button
                            onClick={logout}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300 w-full text-left"
                          >
                            <LogOut className="w-5 h-5 text-zion-cyan" />
                            <span className="text-white">Logout</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="futuristic-btn px-6 py-3 text-white bg-zion-cyan/20 border border-zion-cyan/30 rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="futuristic-btn px-6 py-3 text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-zion-cyan/20"
            >
              <div className="py-6 space-y-6">
                {/* Mobile Search */}
                <div className="relative">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search services, solutions..."
                      className="w-full px-4 py-3 pl-12 bg-zion-cyan/10 border border-zion-cyan/30 rounded-2xl text-white placeholder-zion-cyan/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/50" />
                  </form>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          className="flex items-center space-x-3 text-white hover:text-zion-cyan transition-colors duration-300"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                        {item.dropdown && (
                          <button
                            onClick={() => {
                              if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                              else if (item.name === 'Micro SAAS') setMicroSaasDropdownOpen(!microSaasDropdownOpen);
                              else if (item.name === 'IT Services') setItServicesDropdownOpen(!itServicesDropdownOpen);
                              else if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                              else if (item.name === 'Company') setCompanyDropdownOpen(!companyDropdownOpen);
                            }}
                            className="p-1 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-300"
                          >
                            <ChevronDown className={`w-4 h-4 text-zion-cyan transition-transform duration-300 ${
                              ((item.name === 'Services' && servicesDropdownOpen) ||
                               (item.name === 'Micro SAAS' && microSaasDropdownOpen) ||
                               (item.name === 'IT Services' && itServicesDropdownOpen) ||
                               (item.name === 'Solutions' && solutionsDropdownOpen) ||
                               (item.name === 'Company' && companyDropdownOpen)) ? 'rotate-180' : ''
                            }`} />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Dropdown */}
                      {item.dropdown && (
                        <AnimatePresence>
                          {((item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Micro SAAS' && microSaasDropdownOpen) ||
                            (item.name === 'IT Services' && itServicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Company' && companyDropdownOpen)) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-6 space-y-2"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300"
                                >
                                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                                    <dropdownItem.icon className="w-4 h-4 text-zion-cyan" />
                                  </div>
                                  <div>
                                    <div className="text-white text-sm font-medium">{dropdownItem.name}</div>
                                    <div className="text-zion-cyan/70 text-xs">{dropdownItem.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-zion-cyan/20">
                  <h4 className="text-zion-cyan/80 text-sm font-medium mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action) => (
                      <Link
                        key={action.name}
                        to={action.href}
                        className="flex items-center space-x-2 p-3 bg-zion-cyan/10 border border-zion-cyan/20 rounded-xl hover:bg-zion-cyan/20 transition-colors duration-300"
                      >
                        <action.icon className="w-4 h-4 text-zion-cyan" />
                        <span className="text-white text-sm">{action.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth */}
                {user ? (
                  <div className="pt-4 border-t border-zion-cyan/20">
                    <div className="p-3 bg-zion-cyan/10 rounded-xl mb-3">
                      <div className="text-white font-medium">{user.name || 'User'}</div>
                      <div className="text-zion-cyan/70 text-sm">{user.email}</div>
                    </div>
                    
                    <div className="space-y-2">
                      <Link
                        to="/dashboard"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300"
                      >
                        <PanelLeft className="w-5 h-5 text-zion-cyan" />
                        <span className="text-white">Dashboard</span>
                      </Link>
                      
                      <button
                        onClick={logout}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-colors duration-300 w-full text-left"
                      >
                        <LogOut className="w-5 h-5 text-zion-cyan" />
                        <span className="text-white">Logout</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-zion-cyan/20">
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/login"
                        className="futuristic-btn px-4 py-3 text-white bg-zion-cyan/20 border border-zion-cyan/30 rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300 text-center"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="futuristic-btn px-4 py-3 text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 text-center"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
