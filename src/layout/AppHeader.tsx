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
  Handshake
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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
          icon: Cpu, 
          description: 'Connected device management',
          category: 'IoT'
        },
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Rocket, 
          description: 'Next-generation computing',
          category: 'Future Tech'
        },
        { 
          name: 'Blockchain', 
          href: '/services/blockchain', 
          icon: Lock, 
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
          category: 'ESG'
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
          icon: Brain, 
          description: 'AI-powered analytics platform',
          category: 'AI Solutions'
        },
        { 
          name: 'Customer Experience', 
          href: '/micro-saas/customer-experience', 
          icon: Users, 
          description: 'AI customer service automation',
          category: 'Customer Success'
        },
        { 
          name: 'Supply Chain', 
          href: '/micro-saas/supply-chain', 
          icon: Network, 
          description: 'Manufacturing solutions',
          category: 'Operations'
        },
        { 
          name: 'Content Creation', 
          href: '/micro-saas/content-creation', 
          icon: FileImage, 
          description: 'AI marketing automation',
          category: 'Marketing'
        },
        { 
          name: 'HR Platform', 
          href: '/micro-saas/hr-platform', 
          icon: Users, 
          description: 'AI workflow automation',
          category: 'HR'
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
          icon: Server, 
          description: 'IT infrastructure management',
          category: 'Infrastructure'
        },
        { 
          name: 'Digital Transformation', 
          href: '/it-services/digital-transformation', 
          icon: TrendingUp, 
          description: 'Business transformation',
          category: 'Strategy'
        },
        { 
          name: 'Consulting', 
          href: '/it-services/consulting', 
          icon: Lightbulb, 
          description: 'Technology consulting',
          category: 'Advisory'
        },
        { 
          name: 'Onsite Support', 
          href: '/it-services/onsite-support', 
          icon: Monitor, 
          description: '24/7 technical support',
          category: 'Support'
        },
        { 
          name: '5G Solutions', 
          href: '/it-services/5g-solutions', 
          icon: Wifi, 
          description: 'Next-gen networking',
          category: 'Networking'
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
          category: 'Finance'
        },
        { 
          name: 'Manufacturing', 
          href: '/solutions/manufacturing', 
          icon: CpuIcon, 
          description: 'Smart manufacturing',
          category: 'Manufacturing'
        },
        { 
          name: 'Retail', 
          href: '/solutions/retail', 
          icon: ShoppingCart, 
          description: 'E-commerce solutions',
          category: 'Retail'
        },
        { 
          name: 'Education', 
          href: '/solutions/education', 
          icon: BookOpen, 
          description: 'EdTech solutions',
          category: 'Education'
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      description: 'About Zion Tech Group',
      dropdown: [
        { 
          name: 'About Us', 
          href: '/about', 
          icon: Users, 
          description: 'Our story and mission',
          category: 'Company'
        },
        { 
          name: 'Team', 
          href: '/team', 
          icon: Users, 
          description: 'Meet our experts',
          category: 'Company'
        },
        { 
          name: 'Careers', 
          href: '/careers', 
          icon: TrendingUp, 
          description: 'Join our team',
          category: 'Company'
        },
        { 
          name: 'Partners', 
          href: '/partners', 
          icon: Handshake, 
          description: 'Strategic partnerships',
          category: 'Company'
        },
        { 
          name: 'News', 
          href: '/news', 
          icon: FileText, 
          description: 'Latest updates',
          category: 'Company'
        }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Support', href: '/help-center', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  return (
    <header className={`futuristic-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-cyan opacity-80">Innovation • Technology • Future</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="dropdown-container relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="futuristic-nav-link flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-zion-cyan/80">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                            >
                              <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/20 transition-colors duration-300">
                                <subItem.icon className="w-5 h-5 text-zion-cyan" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                  {subItem.name}
                                </p>
                                <p className="text-xs text-zion-cyan/70">{subItem.description}</p>
                                <span className="inline-block px-2 py-1 text-xs bg-zion-purple/20 text-zion-purple rounded-full mt-1">
                                  {subItem.category}
                                </span>
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

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-cyan/60" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                {searchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-lg p-4">
                    <p className="text-sm text-zion-cyan/80">Quick search suggestions:</p>
                    <div className="mt-2 space-y-2">
                      {['AI Services', 'Cybersecurity', 'Cloud Solutions', 'IoT Platform'].map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setSearchQuery(suggestion)}
                          className="block w-full text-left text-sm text-white hover:text-zion-cyan transition-colors duration-300"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </form>

            {/* Quick Actions */}
            <div className="hidden md:flex items-center space-x-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className="p-2 text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  title={action.name}
                >
                  <action.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block">{user.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-lg shadow-2xl"
                    >
                      <div className="p-2 space-y-1">
                        <Link
                          to="/dashboard"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                        >
                          <Settings className="w-4 h-4 text-zion-cyan" />
                          <span className="text-white">Dashboard</span>
                        </Link>
                        <button
                          onClick={logout}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 w-full"
                        >
                          <LogOut className="w-4 h-4 text-zion-cyan" />
                          <span className="text-white">Logout</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="futuristic-btn px-4 py-2"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-zion-cyan/20">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-cyan/60" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <Link
                        to={item.href}
                        className="flex items-center justify-between p-3 text-white hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-zion-cyan" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      
                      {/* Mobile Dropdown */}
                      <div className="ml-8 space-y-1">
                        {item.dropdown.slice(0, 3).map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block p-2 text-sm text-zion-cyan/80 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded transition-all duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        {item.dropdown.length > 3 && (
                          <Link
                            to={item.href}
                            className="block p-2 text-sm text-zion-cyan/60 hover:text-zion-cyan transition-colors duration-300"
                          >
                            View all {item.name.toLowerCase()} →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Actions */}
                <div className="pt-4 border-t border-zion-cyan/20">
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <Link
                        key={action.name}
                        to={action.href}
                        className="flex items-center space-x-2 p-3 text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                      >
                        <action.icon className="w-4 h-4" />
                        <span className="text-sm">{action.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
