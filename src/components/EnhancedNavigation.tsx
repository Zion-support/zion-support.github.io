import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Bell,
  Settings,
  LogOut,
  Sun,
  Moon,
  Smartphone,
  Globe,
  Shield,
  Brain,
  Rocket,
  Cloud,
  ShoppingCart,
  Heart,
  PenTool,
  Atom,
  Cpu,
  Building2,
  Target,
  FileText,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  icon?: React.ComponentType<any>;
  description?: string;
  featured?: boolean;
  color?: string;
}

interface DropdownItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  description: string;
  featured: boolean;
  color: string;
}

export function EnhancedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', hasDropdown: true },
    { name: 'Resources', href: '/resources', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services: DropdownItem[] = [
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
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
    }
  ];

  const solutions: DropdownItem[] = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions',
      icon: Building2,
      description: 'Large-scale business transformations',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'SMB Solutions',
      href: '/solutions',
      icon: Building2,
      description: 'Small to medium business growth',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Startup Solutions',
      href: '/solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Government Solutions',
      href: '/solutions',
      icon: Shield,
      description: 'Public sector innovation',
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Financial Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Fintech innovation & compliance',
      featured: true,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const resources: DropdownItem[] = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: MessageCircle,
      description: 'Live and recorded sessions',
      featured: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: BookOpen,
      description: 'Technical guides and APIs',
      featured: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically update the theme context
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const renderDropdown = (items: DropdownItem[], title: string) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-light/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/10 z-50 overflow-hidden"
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <div className="space-y-2">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-start p-3 rounded-xl transition-all duration-200 hover:bg-zion-cyan/10 hover:border-zion-cyan/20 ${
                item.featured ? 'border border-zion-cyan/20 bg-zion-cyan/5' : 'border border-transparent'
              }`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-200">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.description}
                </p>
              </div>
              {item.featured && (
                <span className="text-xs text-zion-cyan font-medium bg-zion-cyan/20 px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg lg:text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">AI-Powered Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <div>
                          {item.name === 'Services' && renderDropdown(services, 'Our Services')}
                          {item.name === 'Solutions' && renderDropdown(solutions, 'Solutions')}
                          {item.name === 'Resources' && renderDropdown(resources, 'Resources')}
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearching(!isSearching)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {isSearching && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-zion-slate-light/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/10 p-4"
                  >
                    <form onSubmit={handleSearch} className="space-y-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search services, solutions..."
                          className="w-full pl-10 pr-4 py-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200"
                      >
                        Search
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-zion-slate-light/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/10 p-4"
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-white">New AI service available</p>
                          <p className="text-xs text-gray-400">2 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-zion-purple/10 rounded-lg border border-zion-purple/20">
                        <div className="w-2 h-2 bg-zion-purple rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-white">System maintenance scheduled</p>
                          <p className="text-xs text-gray-400">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                aria-label="User menu"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>
              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-64 bg-zion-slate-light/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/10 p-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Guest User</p>
                          <p className="text-xs text-gray-400">guest@ziontechgroup.com</p>
                        </div>
                      </div>
                      <div className="border-t border-zion-cyan/20 pt-3 space-y-2">
                        <button className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                          <LogOut className="w-4 h-4" />
                          <span>Sign In</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            className="lg:hidden bg-zion-slate/95 backdrop-blur-xl border-t border-zion-cyan/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions..."
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                />
              </form>

              {/* Mobile Navigation */}
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 ml-4 space-y-2"
                            >
                              {item.name === 'Services' && services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block p-3 rounded-lg bg-zion-slate/50 border border-zion-cyan/20 hover:bg-zion-cyan/10 transition-all duration-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                                      <service.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-white">{service.name}</p>
                                      <p className="text-xs text-gray-400">{service.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              {item.name === 'Solutions' && solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className="block p-3 rounded-lg bg-zion-slate/50 border border-zion-cyan/20 hover:bg-zion-cyan/10 transition-all duration-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                                      <solution.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-white">{solution.name}</p>
                                      <p className="text-xs text-gray-400">{solution.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              {item.name === 'Resources' && resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className="block p-3 rounded-lg bg-zion-slate/50 border border-zion-cyan/20 hover:bg-zion-cyan/10 transition-all duration-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                                      <resource.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-white">{resource.name}</p>
                                      <p className="text-xs text-gray-400">{resource.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block p-3 rounded-lg transition-all duration-200 ${
                          isActive(item.href)
                            ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-zion-cyan/20 space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}