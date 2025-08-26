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
  Phone,
  Mail,
  MapPin
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
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3, description: 'Advanced analytics and insights' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: FileText, description: 'Generate content with AI' },
        { name: 'AI Customer Experience', href: '/services/ai-customer-experience', icon: MessageCircle, description: 'Personalized customer interactions' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield, description: 'Intelligent threat detection' },
        { name: 'AI DevOps', href: '/services/ai-devops', icon: Code, description: 'Automated development operations' },
        { name: 'AI Analytics Dashboard', href: '/services/ai-analytics-dashboard', icon: TrendingUp, description: 'Real-time data visualization' }
      ]
    },
    {
      name: 'Emerging Tech',
      href: '/emerging-tech',
      icon: Rocket,
      dropdown: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-gen computational power' },
        { name: 'Blockchain Platform', href: '/services/blockchain-platform', icon: Lock, description: 'Decentralized solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu, description: 'Smart device management' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual asset replicas' },
        { name: '5G Enterprise', href: '/services/5g-enterprise', icon: Network, description: 'Ultra-fast connectivity' },
        { name: 'Sustainable Tech', href: '/services/sustainable-technology', icon: Heart, description: 'Green technology solutions' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      dropdown: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Business modernization' },
        { name: 'Infrastructure', href: '/services/infrastructure', icon: Database, description: 'Enterprise systems' },
        { name: 'Onsite Support', href: '/services/onsite-support', icon: Users, description: 'Local technical assistance' },
        { name: 'Green IT', href: '/services/green-it', icon: Heart, description: 'Eco-friendly technology' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: BarChart3, description: 'Smart business insights' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: MessageCircle, description: 'Enhanced customer engagement' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: TrendingUp, description: 'Optimized logistics' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Human resources management' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileImage, description: 'Creative content tools' },
        { name: 'Financial Solutions', href: '/micro-saas/financial-solutions', icon: BarChart3, description: 'Financial management tools' }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      dropdown: [
        { name: 'Products', href: '/marketplace/products', icon: Code, description: 'Software solutions' },
        { name: 'Talent', href: '/marketplace/talent', icon: Users, description: 'Expert professionals' },
        { name: 'Equipment', href: '/marketplace/equipment', icon: Cpu, description: 'Hardware solutions' },
        { name: 'Services', href: '/marketplace/services', icon: Zap, description: 'Professional services' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: TrendingUp, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Users, description: 'Strategic partnerships' },
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
        { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' }
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

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/25 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <subItem.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                    {subItem.name}
                                  </div>
                                  <div className="text-sm text-zion-slate-light mt-1">
                                    {subItem.description}
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
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-zion-slate-dark/50 border border-zion-slate-light/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>

              {/* Contact Info */}
              <div className="hidden xl:flex items-center space-x-4 text-zion-slate-light text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>

              {/* User actions */}
              <div className="flex items-center space-x-2">
                {user ? (
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                      <Bell className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                      <User className="w-5 h-5" />
                    </button>
                    <button
                      onClick={logout}
                      className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/login"
                      className="px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
            >
              <div className="container-responsive py-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-slate-light/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  />
                </form>

                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-zion-cyan" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
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
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                              >
                                <div className="font-medium">{subItem.name}</div>
                                <div className="text-sm text-zion-slate-light mt-1">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-zion-slate-light/20">
                  <div className="space-y-3 text-zion-slate-light text-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-zion-cyan" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-zion-cyan" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-zion-cyan" />
                      <span>364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
