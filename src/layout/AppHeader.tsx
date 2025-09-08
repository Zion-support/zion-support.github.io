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
  Smartphone
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
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain },
        { name: 'AI & Marketing', href: '/services/ai-marketing', icon: TrendingUp },
        { name: 'AI & Customer Experience', href: '/services/ai-customer-experience', icon: Users },
        { name: 'AI & Security', href: '/services/ai-security', icon: Shield },
        { name: 'AI & Supply Chain', href: '/services/ai-supply-chain', icon: Network },
        { name: 'AI & Healthcare', href: '/services/ai-healthcare', icon: Heart },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket },
        { name: 'Blockchain & Web3', href: '/services/blockchain', icon: Lock },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', icon: Cpu },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp },
        { name: 'Metaverse & VR', href: '/services/metaverse-vr', icon: Globe },
        { name: 'Enterprise Software', href: '/services/enterprise-software', icon: Server },
        { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone }
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
        { name: 'HR Platform', href: '/micro-saas/hr-platform' },
        { name: 'Metaverse Business', href: '/micro-saas/metaverse-business' },
        { name: 'Quantum Finance', href: '/micro-saas/quantum-finance' },
        { name: 'AI Healthcare', href: '/micro-saas/ai-healthcare' },
        { name: 'Blockchain Identity', href: '/micro-saas/blockchain-identity' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure' },
        { name: 'Digital Transformation', href: '/it-services/digital-transformation' },
        { name: 'Consulting', href: '/it-services/consulting' },
        { name: 'Onsite Support', href: '/it-services/onsite-support' },
        { name: 'Green IT', href: '/it-services/green-it' },
        { name: '5G Solutions', href: '/it-services/5g-solutions' }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      dropdown: [
        { name: 'Products', href: '/marketplace/products' },
        { name: 'Talent', href: '/marketplace/talent' },
        { name: 'Equipment', href: '/marketplace/equipment' },
        { name: 'Services', href: '/marketplace/services' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-gradient">ZION TECH GROUP</h1>
                  <p className="text-xs text-zion-slate-light font-medium">Innovation • Intelligence • Impact</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`nav-link flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'hover:text-zion-cyan hover:bg-zion-cyan/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 group"
                            >
                              {subItem.icon && <subItem.icon className="w-4 h-4 group-hover:text-zion-cyan" />}
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></span>
              </button>

              {/* User menu */}
              {user ? (
                <div className="relative">
                  <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300">
                    <User className="h-5 w-5" />
                    <span className="hidden sm:block">{user.name}</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className="btn-neon px-4 py-2 text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn-futuristic px-4 py-2 text-sm"
                  >
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

      {/* Mobile Navigation Menu */}
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
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </form>

              {/* Mobile Navigation Items */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
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
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-1"
                        >
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile User Actions */}
              <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-center transition-all duration-200 hover:shadow-lg"
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
    </>
  );
}

// Missing icon component
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Server = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);
