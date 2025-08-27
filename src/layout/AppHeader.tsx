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

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    { 
      name: 'AI Solutions', 
      href: '/services/ai', 
      description: 'Machine Learning & NLP',
      icon: Brain,
      color: 'from-zion-cyan to-zion-blue'
    },
    { 
      name: 'Cybersecurity', 
      href: '/services/cybersecurity', 
      description: 'Security & Compliance',
      icon: Shield,
      color: 'from-zion-purple to-zion-cyan'
    },
    { 
      name: 'Cloud & DevOps', 
      href: '/services/cloud-devops', 
      description: 'Infrastructure & Automation',
      icon: Cloud,
      color: 'from-zion-blue to-zion-purple'
    },
    { 
      name: 'Digital Transformation', 
      href: '/services/digital-transformation', 
      description: 'Business Innovation',
      icon: Zap,
      color: 'from-zion-cyan to-zion-neon'
    },
    { 
      name: 'IoT Services', 
      href: '/services/iot', 
      description: 'Connected Solutions',
      icon: Network,
      color: 'from-zion-purple to-zion-blue'
    },
    { 
      name: 'Blockchain', 
      href: '/services/blockchain', 
      description: 'Web3 & DeFi',
      icon: Lock,
      color: 'from-zion-blue to-zion-cyan'
    }
  ];

  const solutions = [
    { 
      name: 'Healthcare', 
      href: '/solutions/healthcare', 
      description: 'Digital Health Solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Finance', 
      href: '/solutions/finance', 
      description: 'Fintech & Banking',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Manufacturing', 
      href: '/solutions/manufacturing', 
      description: 'Industry 4.0',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Retail', 
      href: '/solutions/retail', 
      description: 'E-commerce & Analytics',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/case-studies', icon: FileImage },
    { name: 'Webinars', href: '/webinars', icon: Video },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Help Center', href: '/help-center', icon: HelpCircle }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.current
                    ? 'text-zion-cyan bg-zion-cyan/10'
                    : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {service.description}
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

            {/* Solutions Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {solution.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {solution.description}
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

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {resource.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'company'}
                aria-haspopup="true"
              >
                Company
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group"
                          >
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${
                    searchFocused ? 'w-80' : ''
                  }`}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"
                  aria-expanded={activeDropdown === 'user'}
                  aria-haspopup="true"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm hidden lg:block">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                    >
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <PanelLeft className="w-4 h-4 mr-3" />
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <hr className="border-zion-slate/20 my-2" />
                        <button
                          onClick={() => {
                            logout();
                            setActiveDropdown(null);
                          }}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
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
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Solutions */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Resources */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Resources
                </div>
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    to={resource.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Company */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Company
                </div>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth */}
              {!user ? (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/dashboard"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        closeMobileMenu();
                      }}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
