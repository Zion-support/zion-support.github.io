import React, { useState, useEffect, useRef } from 'react';
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
  ChartBar,
  PieChart,
  LineChart,
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
  Sun,
  Moon,
  Accessibility,
  Languages
} from 'lucide-react';

// Animation variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const menuVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: -20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const dropdownVariants = {
  hidden: { 
    opacity: 0,
    y: -10,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  }
};

interface NavigationProps {
  className?: string;
}

export const EnhancedFuturisticNavigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleAccessibilityMode = () => {
    setIsAccessibilityMode(!isAccessibilityMode);
    document.body.classList.toggle('high-contrast');
  };

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    // Implement language change logic here
  };

  const mainNavItems = [
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI services' },
        { label: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable cloud infrastructure' },
        { label: 'Cybersecurity', href: '/security', icon: Shield, description: 'Advanced security solutions' },
        { label: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket, description: 'Business modernization' },
        { label: 'Micro SaaS', href: '/micro-saas', icon: Code, description: 'Specialized SaaS solutions' }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Enterprise', href: '/solutions/enterprise', icon: Building, description: 'Large-scale solutions' },
        { label: 'Startups', href: '/solutions/startups', icon: Zap, description: 'Growth-focused solutions' },
        { label: 'Healthcare', href: '/solutions/healthcare', icon: HeartPulse, description: 'Healthcare technology' },
        { label: 'Finance', href: '/solutions/finance', icon: DollarSign, description: 'Financial technology' },
        { label: 'Education', href: '/solutions/education', icon: BookOpen, description: 'Educational technology' }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
        { label: 'Team', href: '/team', icon: Users, description: 'Meet our experts' },
        { label: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { label: 'Press', href: '/press', icon: FileText, description: 'News and media' },
        { label: 'Partners', href: '/partners', icon: Handshake, description: 'Partnership opportunities' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blog', href: '/blog', icon: FileText, description: 'Insights and updates' },
        { label: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
        { label: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical guides' },
        { label: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
        { label: 'Support', href: '/support', icon: HelpCircle, description: 'Help and assistance' }
      ]
    }
  ];

  const utilityNavItems = [
    { label: 'Contact', href: '/contact', icon: MessageCircle },
    { label: 'Pricing', href: '/pricing', icon: DollarSign },
    { label: 'Demo', href: '/demo', icon: Play }
  ];

  return (
    <motion.nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-lg shadow-zion-cyan/10' 
          : 'bg-transparent'
      } ${className}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      aria-label="Main navigation"
    >
      {/* Skip to main content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold font-orbitron gradient-text">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-1 px-4 py-2 text-zion-gray-light hover:text-white transition-colors duration-200 font-medium group-hover:text-zion-cyan"
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      ref={(el) => dropdownRefs.current[item.label] = el}
                      className="absolute top-full left-0 mt-2 w-80 bg-zion-slate/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      role="menu"
                      aria-label={`${item.label} submenu`}
                    >
                      <div className="p-4">
                        <div className="grid gap-3">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-cyan/10 transition-all duration-200 hover:scale-105"
                              role="menuitem"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <dropdownItem.icon className="w-5 h-5 text-zion-cyan" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-white group-hover:text-zion-cyan transition-colors">
                                  {dropdownItem.label}
                                </p>
                                <p className="text-xs text-zion-gray-light mt-1">
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
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Utility Navigation */}
            {utilityNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-2 px-4 py-2 text-zion-gray-light hover:text-white transition-colors duration-200 font-medium hover:text-zion-cyan"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              {/* Search Button */}
              <button
                className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button
                className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-200 relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-pink rounded-full"></span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Accessibility Toggle */}
              <button
                onClick={toggleAccessibilityMode}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isAccessibilityMode 
                    ? 'text-zion-cyan bg-zion-cyan/20' 
                    : 'text-zion-gray-light hover:text-white hover:bg-zion-cyan/10'
                }`}
                aria-label={`${isAccessibilityMode ? 'Disable' : 'Enable'} accessibility mode`}
              >
                <Accessibility className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('language')}
                  className="flex items-center space-x-1 p-2 text-zion-gray-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                  aria-label="Select language"
                >
                  <Languages className="w-5 h-5" />
                  <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'language' && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 w-32 bg-zion-slate/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-2">
                        {['en', 'es', 'fr', 'de', 'ja'].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => changeLanguage(lang)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                              currentLanguage === lang
                                ? 'bg-zion-cyan/20 text-zion-cyan'
                                : 'text-zion-gray-light hover:text-white hover:bg-zion-cyan/10'
                            }`}
                          >
                            {lang === 'en' ? 'English' : 
                             lang === 'es' ? 'Español' : 
                             lang === 'fr' ? 'Français' : 
                             lang === 'de' ? 'Deutsch' : '日本語'}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zion-gray-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-zion-slate/98 backdrop-blur-xl border-t border-zion-cyan/20 shadow-2xl shadow-zion-cyan/20"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="grid gap-6">
                {/* Mobile Navigation Items */}
                {mainNavItems.map((item) => (
                  <motion.div key={item.label} variants={menuItemVariants}>
                    <div className="space-y-3">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-lg font-semibold text-white hover:text-zion-cyan transition-colors duration-200"
                        aria-expanded={activeDropdown === item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            className="pl-4 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                {/* Mobile Utility Navigation */}
                <motion.div variants={menuItemVariants} className="pt-6 border-t border-zion-cyan/20">
                  <div className="grid gap-3">
                    {utilityNavItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-lg font-semibold text-white hover:text-zion-cyan transition-colors duration-200"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile Action Buttons */}
                <motion.div variants={menuItemVariants} className="pt-6 border-t border-zion-cyan/20">
                  <div className="grid gap-3">
                    <Link
                      to="/contact"
                      className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={toggleDarkMode}
                        className="p-3 text-zion-gray-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-200"
                        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                      >
                        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                      </button>

                      <button
                        onClick={toggleAccessibilityMode}
                        className={`p-3 rounded-lg transition-all duration-200 ${
                          isAccessibilityMode 
                            ? 'text-zion-cyan bg-zion-cyan/20' 
                            : 'text-zion-gray-light hover:text-white hover:bg-zion-cyan/10'
                        }`}
                        aria-label={`${isAccessibilityMode ? 'Disable' : 'Enable'} accessibility mode`}
                      >
                        <Accessibility className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Helper component for building icon
const Building: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

// Helper component for handshake icon
const Handshake: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

// Helper component for play icon
const Play: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);