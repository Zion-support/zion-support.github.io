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
  BookOpen
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
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
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine learning and data insights' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure solutions' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Connected device management' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation computing' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Decentralized solutions' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Database, description: 'Virtual replica technology' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      color: 'from-zion-purple to-zion-cyan',
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, description: 'Smart analytics platform' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, description: 'Enhanced customer engagement' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, description: 'Quantum-powered solutions' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network, description: 'Optimized logistics management' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, description: 'Advanced security tools' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge device solutions' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, description: 'AI-powered content tools' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Human resources automation' }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      color: 'from-zion-blue to-zion-purple',
      dropdown: [
        { name: 'Products', href: '/marketplace/products', icon: FileImage, description: 'Browse tech products' },
        { name: 'Services', href: '/services', icon: Code, description: 'Professional services' },
        { name: 'Talent', href: '/talent', icon: Users, description: 'Find skilled professionals' },
        { name: 'Equipment', href: '/equipment', icon: Cpu, description: 'High-tech hardware' },
        { name: 'Categories', href: '/marketplace', icon: BarChart3, description: 'Browse all categories' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building,
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'About Us', href: '/about', icon: Users, description: 'Learn our story' },
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
        { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic alliances' },
        { name: 'Careers', href: '/careers', icon: TrendingUp, description: 'Join our team' },
        { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Rocket className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-zion-slate-light hidden sm:block">Innovation • Intelligence • Impact</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="dropdown-container relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors duration-300 group"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/10 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <dropdownItem.icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-300">
                                  {dropdownItem.name}
                                </h4>
                                <p className="text-zion-slate-light text-sm mt-1">
                                  {dropdownItem.description}
                                </p>
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
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search for services, talent, equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full bg-white/10 backdrop-blur-xl border rounded-xl px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 ${
                  searchFocused ? 'border-zion-cyan/50 bg-white/15' : 'border-zion-cyan/20'
                }`}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-1.5 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* User Menu & Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            {user ? (
              <div className="dropdown-container relative">
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden sm:block">{user.name}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${
                    activeDropdown === 'user' ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* User Dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-56 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/10 overflow-hidden"
                    >
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 text-white"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <PanelLeft className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                        <Link
                          to="/profile"
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 text-white"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 text-white"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                        <hr className="border-zion-cyan/20 my-2" />
                        <button
                          onClick={() => {
                            logout();
                            setActiveDropdown(null);
                          }}
                          className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-red-400"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-white hover:text-zion-cyan transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <input
                  type="text"
                  placeholder="Search for services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/20 rounded-xl px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-white hover:text-zion-cyan transition-colors duration-300 p-3 rounded-xl hover:bg-zion-cyan/10"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 text-zion-slate-light hover:text-zion-cyan"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <dropdownItem.icon className="h-4 w-4" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile User Actions */}
              {user ? (
                <div className="mt-6 pt-6 border-t border-zion-cyan/20 space-y-3">
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <PanelLeft className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-red-400"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-zion-cyan/20 space-y-3">
                  <Link
                    to="/login"
                    className="block w-full text-center p-3 rounded-xl border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full text-center p-3 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
