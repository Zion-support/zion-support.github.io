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
  Sparkles,
  Target,
  Award,
  Lightbulb,
  Layers,
  Building,
  Truck,
  Scale,
  BookOpen,
  DollarSign,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Rocket as RocketIcon
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
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Intelligent data analysis and insights' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure and automation' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Internet of Things and edge computing' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation quantum solutions' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Distributed ledger technology' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replica technology' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green technology solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, description: 'AI-powered business insights' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, description: 'Enhanced customer engagement' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, description: 'Quantum advantage solutions' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Truck, description: 'Intelligent supply chain management' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, description: 'Advanced security platforms' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge computing solutions' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, description: 'AI content generation' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Intelligent HR management' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure', icon: Server, description: 'IT infrastructure solutions' },
        { name: 'Digital Transformation', href: '/it-services/digital-transformation', icon: Sparkles, description: 'Business transformation' },
        { name: 'Consulting', href: '/it-services/consulting', icon: Lightbulb, description: 'Technology consulting' },
        { name: 'Onsite Support', href: '/it-services/onsite-support', icon: Users, description: 'Professional IT support' },
        { name: 'Green IT', href: '/it-services/green-it', icon: Heart, description: 'Sustainable technology' },
        { name: '5G Solutions', href: '/it-services/5g-solutions', icon: Network, description: 'Next-generation connectivity' }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: Building,
      dropdown: [
        { name: 'Products', href: '/marketplace/products', icon: Package, description: 'Technology products' },
        { name: 'Talent', href: '/marketplace/talent', icon: Users, description: 'Expert professionals' },
        { name: 'Equipment', href: '/marketplace/equipment', icon: Cpu, description: 'Hardware and equipment' },
        { name: 'Services', href: '/marketplace/services', icon: Zap, description: 'Professional services' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about', icon: Building, description: 'Our story and mission' },
        { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: Target, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Handshake, description: 'Partnership opportunities' },
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
        { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' }
      ]
    }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse float"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000 float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000 float-slow"></div>
            <div className="absolute top-40 right-40 w-12 h-12 border border-zion-cyan/20 rounded-full animate-pulse delay-3000 float-fast"></div>
          </div>
        </div>

        {/* Neon grid background */}
        <div className="absolute inset-0 bg-neon-grid opacity-5"></div>

        <div className="container-responsive relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-gradient">ZION TECH GROUP</h1>
                  <p className="text-xs text-zion-slate-light font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-zion-cyan" />
                    Innovation • Intelligence • Impact
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`nav-link flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeDropdown === item.name 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'hover:text-zion-cyan hover:bg-zion-cyan/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-3">
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-start space-x-3 px-4 py-3 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                {subItem.icon && <subItem.icon className="w-4 h-4 group-hover:text-zion-cyan" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-white group-hover:text-zion-cyan">{subItem.name}</div>
                                {subItem.description && (
                                  <div className="text-xs text-zion-slate-light mt-1">{subItem.description}</div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-futuristic w-full pl-4 pr-10 py-2 text-sm placeholder-zion-slate-light"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                >
                  <Search className="h-4 w-4" />
                </button>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </form>
            </div>

            {/* Enhanced Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 group">
                <Bell className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></span>
                {/* Notification count */}
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-zion-purple text-white text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              {/* User menu */}
              {user ? (
                <div className="relative">
                  <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="hidden sm:block font-medium">{user.name}</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className="btn-neon px-4 py-2 text-sm group"
                  >
                    <User className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn-futuristic px-4 py-2 text-sm group"
                  >
                    <Sparkles className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20"
          >
            <div className="container-responsive py-4">
              {/* Enhanced Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search services, talent, equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-futuristic w-full pl-4 pr-10 py-3 text-sm placeholder-zion-slate-light"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-cyan"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Enhanced Mobile Navigation Items */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 group-hover:text-zion-cyan" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Enhanced Mobile Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-1"
                        >
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200 group"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                                  <subItem.icon className="w-3 h-3 group-hover:text-zion-cyan" />
                                </div>
                                <div>
                                  <div className="font-medium">{subItem.name}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-zion-slate-light mt-1">{subItem.description}</div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Enhanced Mobile User Actions */}
              <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-3 h-3" />
                        </div>
                        <span>Dashboard</span>
                      </div>
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-zion-red/20 to-zion-orange/20 rounded-lg flex items-center justify-center">
                          <LogOut className="w-3 h-3" />
                        </div>
                        <span>Logout</span>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                          <User className="w-3 h-3" />
                        </div>
                        <span>Login</span>
                      </div>
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-center transition-all duration-200 hover:shadow-lg group"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <Sparkles className="w-4 h-4" />
                        <span>Get Started</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Missing icon components
const Package = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const LogOut = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);
