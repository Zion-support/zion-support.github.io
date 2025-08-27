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
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Quantum,
  Space,
  Biohazard,
  Nanotech,
  Neural,
  Robot,
  DollarSign,
  Atom,
  Dna,
  Microscope,
  BrainCircuit,
  Orbit,
  Satellite,
  ShieldCheck,
  LockKeyhole,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { 
          name: 'AI & Quantum', 
          href: '/innovative-services-2027', 
          icon: Quantum, 
          description: 'Next-generation AI and quantum computing',
          color: 'from-purple-600 to-cyan-500'
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield, 
          description: 'Advanced security solutions',
          color: 'from-red-600 to-orange-500'
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud, 
          description: 'Scalable infrastructure solutions',
          color: 'from-blue-600 to-cyan-500'
        },
        { 
          name: 'IoT & Edge', 
          href: '/services/iot-edge', 
          icon: Cpu, 
          description: 'Connected device management',
          color: 'from-green-600 to-emerald-500'
        },
        { 
          name: 'Space Technology', 
          href: '/services/space-tech', 
          icon: Space, 
          description: 'Satellite and space solutions',
          color: 'from-indigo-600 to-purple-500'
        },
        { 
          name: 'Biotechnology', 
          href: '/services/biotech', 
          icon: Biohazard, 
          description: 'AI-powered biotech platforms',
          color: 'from-pink-600 to-red-500'
        },
        { 
          name: 'Nanotechnology', 
          href: '/services/nanotech', 
          icon: Nanotech, 
          description: 'Nanoscale manufacturing',
          color: 'from-yellow-600 to-orange-500'
        },
        { 
          name: 'Neural Technology', 
          href: '/services/neural-tech', 
          icon: Neural, 
          description: 'Brain-computer interfaces',
          color: 'from-violet-600 to-indigo-500'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Rocket,
      dropdown: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building, description: 'Large-scale business solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Medical technology solutions' },
        { name: 'Finance', href: '/solutions/finance', icon: DollarSign, description: 'Financial services technology' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Industrial automation' },
        { name: 'Government', href: '/solutions/government', icon: ShieldCheck, description: 'Public sector solutions' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Leadership', href: '/leadership', icon: TrendingUp, description: 'Meet our team' },
        { name: 'Careers', href: '/careers', icon: Rocket, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
        { name: 'News', href: '/news', icon: FileText, description: 'Latest updates' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: BookOpen,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Industry insights' },
        { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
        { name: 'Help Center', href: '/help-center', icon: HelpCircle, description: 'Support resources' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-zion-neon/20 shadow-2xl shadow-zion-neon/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-neon to-zion-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-neon to-zion-cyan rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white font-orbitron">Zion Tech Group</h1>
              <p className="text-xs text-zion-neon/80 font-rajdhani">Innovating Tomorrow</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:text-zion-neon transition-colors duration-200 group"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-zion-neon/20 rounded-2xl shadow-2xl shadow-zion-neon/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-200 group"
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${subItem.color || 'from-gray-600 to-gray-700'} group-hover:scale-110 transition-transform duration-200`}>
                                <subItem.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-white font-medium group-hover:text-zion-neon transition-colors duration-200">
                                  {subItem.name}
                                </h3>
                                <p className="text-sm text-zion-neon/60 mt-1 line-clamp-2">
                                  {subItem.description}
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-neon/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-zion-neon/30 rounded-xl text-white placeholder-zion-neon/60 focus:outline-none focus:border-zion-neon focus:ring-2 focus:ring-zion-neon/20 transition-all ${
                    searchFocused ? 'w-80' : ''
                  }`}
                />
              </form>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-zion-neon/60 hover:text-zion-neon hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4 text-zion-neon/80">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 hover:text-zion-neon transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-zion-neon transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 text-zion-neon hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block text-sm">{user.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md border border-zion-neon/20 rounded-xl shadow-2xl shadow-zion-neon/20"
                    >
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          className="flex items-center space-x-3 px-3 py-2 text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                        >
                          <BarChart3 className="w-4 h-4" />
                          <span>Dashboard</span>
                        </Link>
                        <Link
                          to="/profile"
                          className="flex items-center space-x-3 px-3 py-2 text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                        >
                          <User className="w-4 h-4" />
                          <span>Profile</span>
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center space-x-3 px-3 py-2 text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                        >
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </Link>
                        <hr className="border-zion-neon/20 my-2" />
                        <button
                          onClick={logout}
                          className="flex items-center space-x-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors duration-200 w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
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
                  className="px-4 py-2 text-zion-neon hover:bg-zion-neon/10 border border-zion-neon/30 rounded-xl transition-all duration-200 hover:border-zion-neon"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-zion-neon to-zion-cyan text-slate-900 font-semibold rounded-xl hover:from-zion-cyan hover:to-zion-neon transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zion-neon hover:bg-slate-800/50 rounded-lg transition-all duration-200"
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-zion-neon/20"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-neon/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-zion-neon/30 rounded-xl text-white placeholder-zion-neon/60 focus:outline-none focus:border-zion-neon focus:ring-2 focus:ring-zion-neon/20 transition-all"
                  />
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:text-zion-neon hover:bg-slate-800/50 rounded-xl transition-all duration-200"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                      
                      {/* Mobile Submenu */}
                      <div className="ml-8 mt-2 space-y-2">
                        {item.dropdown.slice(0, 3).map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center space-x-3 px-4 py-2 text-zion-neon/80 hover:text-zion-neon rounded-lg transition-colors duration-200"
                          >
                            <subItem.icon className="w-4 h-4" />
                            <span className="text-sm">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="pt-6 border-t border-zion-neon/20">
                  <div className="space-y-3">
                    <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-3 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200">
                      <Phone className="w-5 h-5" />
                      <span>{contactInfo.phone}</span>
                    </a>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                      <span>{contactInfo.email}</span>
                    </a>
                    <div className="flex items-start space-x-3 text-zion-neon/80">
                      <MapPin className="w-5 h-5 mt-0.5" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
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
