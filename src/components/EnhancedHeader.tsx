import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  ShoppingCart,
  Bell,
  Globe,
  Sun,
  Moon,
  Settings,
  HelpCircle,
  BookOpen,
  Users,
  Shield,
  Zap,
  Brain,
  Atom,
  Cloud,
  Database,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Target,
  Building,
  Heart,
  Briefcase,
  Factory,
  Newspaper,
  Video,
  Play,
  GraduationCap,
  Handshake
} from 'lucide-react';

// Navigation items
const navigationItems = [
  {
    name: 'Services',
    href: '/services',
    icon: Zap,
    children: [
      { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain, description: 'Advanced AI and machine learning solutions' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-generation quantum computing services' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable cloud infrastructure and automation' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Comprehensive security solutions' },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: Database, description: 'Business intelligence and analytics' },
      { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Workflow, description: 'End-to-end digital transformation' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Target,
    children: [
      { name: 'Enterprise', href: '/solutions/enterprise', icon: Building, description: 'Large-scale enterprise solutions' },
      { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Healthcare technology innovations' },
      { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'Fintech and banking solutions' },
      { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Factory, description: 'Smart manufacturing solutions' },
      { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce and retail technology' },
      { name: 'Education', href: '/solutions/education', icon: GraduationCap, description: 'Educational technology platforms' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Users,
    children: [
      { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
      { name: 'Team', href: '/team', icon: Users2, description: 'Meet our experts' },
      { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
      { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
      { name: 'News', href: '/news', icon: Newspaper, description: 'Latest updates' },
      { name: 'Contact', href: '/contact', icon: MessageCircle, description: 'Get in touch' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: BookOpen,
    children: [
      { name: 'Blog', href: '/blog', icon: FileText, description: 'Industry insights and updates' },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart, description: 'Success stories' },
      { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research and insights' },
      { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
      { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical resources' },
      { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support and guidance' }
    ]
  }
];

// Quick actions
const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: DollarSign, variant: 'primary' },
  { name: 'Schedule Demo', href: '/demo', icon: Play, variant: 'secondary' },
  { name: 'Support', href: '/support', icon: HelpCircle, variant: 'outline' }
];

const EnhancedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle dropdown hover
  const handleDropdownEnter = useCallback((name: string) => {
    setActiveDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add dark mode toggle logic here
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white">Zion Tech Group</h1>
              <p className="text-xs lg:text-sm text-cyan-400 font-medium">Future of Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 py-2">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                                <child.icon className="w-5 h-5 text-cyan-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </p>
                                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                  {child.description}
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

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-64 px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            {/* Quick actions */}
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  action.variant === 'primary'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:scale-105'
                    : action.variant === 'secondary'
                    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {action.name}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* User menu */}
            <div className="relative">
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>

              {/* Mobile navigation items */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between p-3 text-white hover:text-cyan-400 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    
                    {/* Mobile submenu */}
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="flex items-center space-x-3 p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          <child.icon className="w-4 h-4" />
                          <span className="text-sm">{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              {/* Mobile quick actions */}
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className={`px-4 py-3 rounded-lg font-medium text-center transition-all duration-200 ${
                        action.variant === 'primary'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                          : action.variant === 'secondary'
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'text-white'
                      }`}
                    >
                      {action.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default EnhancedHeader;
