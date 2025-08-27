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
  Target,
  Lightbulb,
  CpuIcon,
  Server,
  Wifi,
  Smartphone,
  Monitor,
  Laptop,
  Handshake,
  Building,
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
  Moon
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
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      description: 'Comprehensive technology solutions',
      items: [
        { name: 'AI & Machine Learning', href: '/services/ai-services', icon: Brain, description: 'Advanced AI solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', icon: Cpu, description: 'Connected solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Insights & intelligence' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp, description: 'Business evolution' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Industry-specific technology solutions',
      items: [
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital health solutions' },
        { name: 'Finance', href: '/solutions/finance', icon: DollarSign, description: 'Fintech innovations' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Building, description: 'Smart manufacturing' },
        { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce solutions' },
        { name: 'Education', href: '/solutions/education', icon: BookOpen, description: 'EdTech platforms' },
        { name: 'Government', href: '/solutions/government', icon: ShieldCheck, description: 'Public sector tech' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building,
      description: 'Learn about Zion Tech Group',
      items: [
        { name: 'About Us', href: '/about', icon: Users, description: 'Our story & mission' },
        { name: 'Leadership', href: '/leadership', icon: User, description: 'Meet our team' },
        { name: 'Careers', href: '/careers', icon: Rocket, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic alliances' },
        { name: 'News', href: '/news', icon: FileText, description: 'Latest updates' },
        { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: BookOpen,
      description: 'Knowledge & support resources',
      items: [
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Industry insights' },
        { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Expert sessions' },
        { name: 'Help Center', href: '/help-center', icon: HelpCircle, description: 'Support & FAQs' },
        { name: 'Training', href: '/training', icon: Brain, description: 'Skill development' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research & insights' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-zion-neon/20 shadow-2xl shadow-zion-neon/10' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-slate/80 via-zion-purple/80 to-zion-cyan/80 opacity-0 transition-opacity duration-300"
             style={{ opacity: scrolled ? 0.1 : 0 }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 transition-opacity duration-300"
             style={{ opacity: scrolled ? 0.05 : 0.2 }}></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-neon to-zion-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-slate-900" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-neon to-zion-cyan rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-zion-neon transition-colors duration-300 font-orbitron">
                  Zion Tech Group
                </h1>
                <p className="text-zion-neon/80 text-sm font-rajdhani">Innovating Tomorrow</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-white hover:text-zion-neon transition-colors duration-200 font-medium"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-zion-neon/20 rounded-xl shadow-2xl shadow-zion-neon/20 overflow-hidden"
                        onMouseLeave={closeAllDropdowns}
                      >
                        <div className="p-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-zion-neon/20 to-zion-cyan/20">
                              <item.icon className="w-5 h-5 text-zion-neon" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                              <p className="text-zion-neon/80 text-sm">{item.description}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 gap-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-neon/10 transition-colors duration-200 group"
                                onClick={closeAllDropdowns}
                              >
                                <div className="p-2 rounded-lg bg-zion-neon/10 group-hover:bg-zion-neon/20 transition-colors duration-200">
                                  <subItem.icon className="w-4 h-4 text-zion-neon" />
                                </div>
                                <div>
                                  <div className="text-white font-medium group-hover:text-zion-neon transition-colors duration-200">
                                    {subItem.name}
                                  </div>
                                  <div className="text-zion-neon/60 text-sm">
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              
              {/* Search Bar */}
              <div className="relative">
                <div className={`flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-zion-neon/30 rounded-xl transition-all duration-300 ${
                  searchFocused ? 'border-zion-neon bg-slate-800/80' : ''
                }`}>
                  <Search className="w-5 h-5 text-zion-neon/60" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="bg-transparent text-white placeholder-zion-neon/60 focus:outline-none min-w-[200px]"
                  />
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-zion-neon/60 hover:text-zion-neon hover:bg-zion-neon/10 rounded-lg transition-all duration-200"
                title="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Contact Info (Large Screens) */}
              <div className="hidden xl:flex items-center space-x-4 text-sm">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-2 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-2 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button className="flex items-center space-x-2 p-2 text-zion-neon/80 hover:text-zion-neon hover:bg-zion-neon/10 rounded-lg transition-all duration-200">
                    <User className="w-5 h-5" />
                    <span>{user.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2 bg-gradient-to-r from-zion-neon to-zion-cyan text-slate-900 font-semibold rounded-xl hover:from-zion-cyan hover:to-zion-neon transition-all duration-300 transform hover:scale-105"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zion-neon/80 hover:text-zion-neon hover:bg-zion-neon/10 rounded-lg transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-zion-neon/20 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                
                {/* Mobile Search */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800/50 border border-zion-neon/30 rounded-xl">
                    <Search className="w-5 h-5 text-zion-neon/60" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-white placeholder-zion-neon/60 focus:outline-none flex-1"
                    />
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full p-3 text-left text-white hover:text-zion-neon hover:bg-zion-neon/10 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
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
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-neon/10 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <subItem.icon className="w-4 h-4 text-zion-neon" />
                                <span className="text-zion-neon/80">{subItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-zion-neon/20">
                  <div className="space-y-3">
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-center space-x-3 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{contactInfo.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center space-x-3 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                      <span>{contactInfo.email}</span>
                    </a>
                    <div className="flex items-start space-x-3 text-zion-neon/80">
                      <MapPin className="w-5 h-5 mt-0.5" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile User Actions */}
                <div className="mt-6 pt-6 border-t border-zion-neon/20">
                  {user ? (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-zion-neon/10 rounded-lg">
                        <User className="w-5 h-5 text-zion-neon" />
                        <span className="text-white">{user.name}</span>
                      </div>
                      <button
                        onClick={logout}
                        className="flex items-center space-x-3 w-full p-3 text-zion-neon/80 hover:text-zion-neon hover:bg-zion-neon/10 rounded-lg transition-colors duration-200"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        to="/login"
                        className="block w-full px-6 py-3 bg-gradient-to-r from-zion-neon to-zion-cyan text-slate-900 font-semibold rounded-xl text-center hover:from-zion-cyan hover:to-zion-neon transition-all duration-300"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="block w-full px-6 py-3 border border-zion-neon/30 text-zion-neon rounded-xl text-center hover:bg-zion-neon/10 transition-all duration-300"
                      >
                        Create Account
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
