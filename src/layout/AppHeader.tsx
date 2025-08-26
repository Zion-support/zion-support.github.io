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
  PanelLeft
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

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
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge' },
        { name: 'Content Creation', href: '/micro-saas/content-creation' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Database,
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure' },
        { name: 'Digital Transformation', href: '/it-services/digital-transformation' },
        { name: 'Consulting', href: '/it-services/consulting' },
        { name: 'Support & Maintenance', href: '/it-services/support' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageCircle
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zion-slate/95 backdrop-blur-md border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Zion Tech Group - Home"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg lg:text-xl">Z</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Zion Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 text-white/90 hover:text-zion-cyan transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zion-cyan/10 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                        className="absolute top-full left-0 mt-2 w-64 bg-zion-slate/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl p-2"
                        role="menu"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center space-x-3 w-full px-4 py-3 text-white/80 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200 group/item"
                            role="menuitem"
                          >
                            <subItem.icon className="w-4 h-4 group-hover/item:text-zion-cyan transition-colors duration-200" />
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-white/90 hover:text-zion-cyan transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-zion-cyan/10"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
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
                className="w-64 px-4 py-2 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                aria-label="Search the website"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                aria-label="Submit search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* User actions */}
            {user ? (
              <div className="flex items-center space-x-3">
                <button className="p-2 text-white/80 hover:text-zion-cyan transition-colors duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-white/80 hover:text-zion-cyan transition-colors duration-200">
                  <User className="w-5 h-5" />
                </button>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 rounded-lg"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-zion-slate/95 backdrop-blur-md border-t border-zion-cyan/20 mobile-menu-container"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                  aria-label="Search the website"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-cyan"
                  aria-label="Submit search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Mobile navigation items */}
              <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-white/90 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                          aria-expanded={activeDropdown === item.name}
                        >
                          <span className="flex items-center space-x-2">
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </span>
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
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-center space-x-3 px-4 py-2 text-white/70 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                                >
                                  <subItem.icon className="w-4 h-4" />
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white/90 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile user actions */}
              <div className="pt-4 border-t border-zion-cyan/20">
                {user ? (
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 text-left text-white/80 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200">
                      <span className="flex items-center space-x-3">
                        <Bell className="w-4 h-4" />
                        <span>Notifications</span>
                      </span>
                    </button>
                    <button className="w-full px-4 py-3 text-left text-white/80 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200">
                      <span className="flex items-center space-x-3">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </span>
                    </button>
                    <button
                      onClick={logout}
                      className="w-full px-4 py-3 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      className="block w-full px-4 py-3 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full px-4 py-3 text-center bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
