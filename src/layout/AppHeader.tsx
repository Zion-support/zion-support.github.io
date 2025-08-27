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
  Building,
  Package,
  Info
} from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        // Simulate search processing
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
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
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine learning and data insights' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure solutions' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Connected device management' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation computing' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Decentralized solutions' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replica technology' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Code,
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building, description: 'Large-scale business solutions' },
        { name: 'Startup', href: '/solutions/startup', icon: Rocket, description: 'Rapid growth solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Medical technology solutions' },
        { name: 'Finance', href: '/solutions/finance', icon: TrendingUp, description: 'Financial technology solutions' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Industrial automation' },
        { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce solutions' }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      dropdown: [
        { name: 'Talent', href: '/talent', icon: Users, description: 'Find expert professionals' },
        { name: 'Equipment', href: '/equipment', icon: Cpu, description: 'Hardware and infrastructure' },
        { name: 'Services', href: '/services', icon: Code, description: 'Professional services' },
        { name: 'Products', href: '/products', icon: Package, description: 'Software and tools' }
      ]
    },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-zinc-900/95 backdrop-blur-md border-b border-zinc-700/50 shadow-lg' 
        : 'bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-700/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <motion.h1 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent"
              >
                Zion Tech Group
              </motion.h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className="flex items-center px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zinc-800/95 border border-zinc-700/50 rounded-xl shadow-2xl backdrop-blur-md z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center p-3 rounded-lg hover:bg-zinc-700/50 transition-all duration-200 group"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-zinc-700/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-zion-cyan/20 transition-colors">
                              <subItem.icon className="w-5 h-5 text-zinc-400 group-hover:text-zion-cyan transition-colors" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-zinc-400">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-zinc-700/50">
                        <Link
                          to={item.href}
                          className="block text-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors"
                        >
                          View All {item.name} →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className={`relative transition-all duration-300 ${
                searchFocused ? 'ring-2 ring-zion-cyan/50' : ''
              }`}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services, solutions, talent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-10 pr-12 py-2 text-white placeholder-zinc-400 focus:outline-none focus:border-zion-cyan transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zion-cyan transition-colors disabled:opacity-50"
                >
                  {isSearching ? (
                    <ZionLoadingSpinner size="sm" />
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Notifications */}
            <button className="p-2 text-zinc-400 hover:text-zion-cyan transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User menu */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('user')}
                className="flex items-center p-2 text-zinc-400 hover:text-zion-cyan transition-colors rounded-lg hover:bg-zinc-800/50"
              >
                <User className="h-5 w-5" />
              </button>
              
              {activeDropdown === 'user' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-zinc-800/95 border border-zinc-700/50 rounded-xl shadow-2xl backdrop-blur-md z-50"
                >
                  <div className="p-2">
                    <Link
                      to="/profile"
                      className="flex items-center px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-700/50 rounded-lg text-sm transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="flex items-center px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-700/50 rounded-lg text-sm transition-colors"
                    >
                      <PanelLeft className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-700/50 rounded-lg text-sm transition-colors"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                    <div className="border-t border-zinc-700/50 my-1"></div>
                    <button className="w-full flex items-center px-3 py-2 text-zinc-300 hover:text-red-400 hover:bg-zinc-700/50 rounded-lg text-sm transition-colors">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-zion-cyan transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
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
              className="lg:hidden border-t border-zinc-700/20"
            >
              <div className="px-4 py-4 space-y-4 bg-zinc-800/95">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="text-zinc-400 text-sm font-medium mb-2 flex items-center">
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.name}
                        </div>
                        <div className="ml-6 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-zinc-300 hover:text-zion-cyan px-3 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-zinc-700/50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center text-zinc-300 hover:text-zion-cyan px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg hover:bg-zinc-700/50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="pt-4 border-t border-zinc-700/20">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zinc-700/50 border border-zinc-600/50 rounded-lg pl-10 pr-12 py-2 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    />
                    <button
                      type="submit"
                      disabled={isSearching}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zion-cyan transition-colors disabled:opacity-50"
                    >
                      {isSearching ? (
                        <ZionLoadingSpinner size="sm" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
