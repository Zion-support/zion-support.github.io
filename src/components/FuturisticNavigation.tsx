import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  HelpCircle,
  BookOpen,
  Briefcase,
  Award,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  BarChart3,
  TrendingUp,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Leaf,
  Building2,
  Users,
  Factory,
  Truck
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  dropdown: Array<{
    name: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
}

export const FuturisticNavigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Enhanced navigation items with better organization
  const navigationItems: NavigationItem[] = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { name: 'AI Services', href: '/ai-services', description: 'Artificial Intelligence Solutions', icon: Brain },
        { name: 'IT Services', href: '/it-services', description: 'Information Technology Solutions', icon: Server },
        { name: 'Cloud Services', href: '/cloud-services', description: 'Cloud Computing Solutions', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security & Protection', icon: Shield },
        { name: 'Digital Transformation', href: '/digital-transformation', description: 'Business Transformation', icon: Rocket },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable Technology', icon: Leaf }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large Scale Solutions', icon: Building2 },
        { name: 'SMB Solutions', href: '/smb', description: 'Small & Medium Business', icon: Briefcase },
        { name: 'Startup Solutions', href: '/startups', description: 'Innovation & Growth', icon: Lightbulb },
        { name: 'Government Solutions', href: '/government', description: 'Public Sector Technology', icon: ShieldCheck }
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      icon: Globe,
      dropdown: [
        { name: 'Healthcare', href: '/healthcare', description: 'Medical Technology', icon: HeartPulse },
        { name: 'Finance', href: '/finance', description: 'Financial Technology', icon: DollarSign },
        { name: 'Education', href: '/education', description: 'Educational Technology', icon: BookOpen },
        { name: 'Manufacturing', href: '/manufacturing', description: 'Industrial Technology', icon: Factory },
        { name: 'Retail', href: '/retail', description: 'E-commerce & Retail Tech', icon: ShoppingCart },
        { name: 'Transportation', href: '/transportation', description: 'Logistics & Mobility', icon: Truck }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about', description: 'Our Story & Mission', icon: Users },
        { name: 'Leadership', href: '/leadership', description: 'Meet Our Team', icon: Award },
        { name: 'Careers', href: '/careers', description: 'Join Our Team', icon: Briefcase },
        { name: 'News & Media', href: '/news', description: 'Latest Updates', icon: FileText },
        { name: 'Partners', href: '/partners', description: 'Strategic Partnerships', icon: Handshake }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: BookOpen,
      dropdown: [
        { name: 'Blog', href: '/blog', description: 'Insights & Articles', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', description: 'Success Stories', icon: ChartBar },
        { name: 'Whitepapers', href: '/whitepapers', description: 'Research & Analysis', icon: FileText },
        { name: 'Webinars', href: '/webinars', description: 'Educational Content', icon: Video },
        { name: 'Documentation', href: '/docs', description: 'Technical Guides', icon: BookOpen },
        { name: 'Support', href: '/support', description: 'Help & Resources', icon: HelpCircle }
      ]
    }
  ];

  // Scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation support
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
    }
  };

  // Focus management for accessibility
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-lg' 
            : 'bg-transparent'
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main menu">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center space-x-2 px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 rounded-lg hover:bg-zion-cyan/10"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                    aria-label={`${item.name} menu`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/10"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-start space-x-3 p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 group/sub"
                                role="menuitem"
                                aria-label={subItem.description || subItem.name}
                              >
                                {subItem.icon && (
                                  <subItem.icon className="w-5 h-5 text-zion-cyan/60 group-hover/sub:text-zion-cyan mt-0.5 flex-shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-white group-hover/sub:text-zion-cyan">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-sm text-zion-slate-light group-hover/sub:text-zion-slate-light/80 mt-1">
                                      {subItem.description}
                                    </div>
                                  )}
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

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
                    aria-label="Search Zion Tech Group services and solutions"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                </div>
              </form>

              {/* User actions with enhanced accessibility */}
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  aria-label="Notifications"
                  title="Notifications"
                >
                  <Bell className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  aria-label="User account"
                  title="User Account"
                >
                  <User className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  aria-label="Shopping cart"
                  title="Shopping Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Enhanced Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search services, solutions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                      aria-label="Search Zion Tech Group services and solutions"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  </div>
                </form>

                {/* Enhanced Mobile Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="border-b border-zion-cyan/10 pb-2">
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 p-3 text-white hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                        aria-label={`Navigate to ${item.name}`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                      <div className="ml-8 mt-2 space-y-1">
                        {item.dropdown.slice(0, 3).map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block p-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5 rounded transition-all duration-300"
                            aria-label={`Navigate to ${subItem.name}${subItem.description ? ` - ${subItem.description}` : ''}`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-zion-cyan/10">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
                    aria-label="Contact Zion Tech Group"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};