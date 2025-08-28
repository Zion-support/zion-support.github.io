import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Settings,
  Bell,
  Sun,
  Moon,
  Monitor,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

interface EnhancedNavigationProps {
  className?: string;
  onThemeChange?: (theme: 'light' | 'dark' | 'system') => void;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'AI & Machine Learning', href: '/services/ai-ml' },
      { label: 'Cloud Solutions', href: '/services/cloud' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Digital Transformation', href: '/services/digital-transformation' },
      { label: 'Consulting', href: '/services/consulting' },
      { label: '2025 AI Services', href: '/comprehensive-services-showcase-2025' },
      { label: '2025 IT Services', href: '/comprehensive-services-showcase-2025' },
      { label: '2025 Micro SaaS', href: '/comprehensive-services-showcase-2025' }
    ]
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    children: [
      { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { label: 'SMB Solutions', href: '/solutions/smb' },
      { label: 'Industry Specific', href: '/solutions/industry' }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ 
  className = '',
  onThemeChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleThemeChange = useCallback((newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    onThemeChange?.(newTheme);
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
    
    localStorage.setItem('zion-theme', newTheme);
  }, [onThemeChange]);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  }, [activeDropdown]);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    } ${className}`}>
      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="skip-link sr-only focus:not-sr-only"
        onClick={() => document.getElementById('main-content')?.focus()}
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Zion Tech Group - Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zion Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onBlur={() => setTimeout(closeDropdown, 150)}
                    className="flex items-center space-x-1 text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl py-2 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            {child.icon}
                            <span className="text-sm font-medium">{child.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <div className="relative group">
              <button
                onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Theme Options */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => handleThemeChange('light')}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <Sun className="w-4 h-4" />
                  <span className="text-sm">Light</span>
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <Moon className="w-4 h-4" />
                  <span className="text-sm">Dark</span>
                </button>
                <button
                  onClick={() => handleThemeChange('system')}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <Monitor className="w-4 h-4" />
                  <span className="text-sm">System</span>
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full text-left text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block text-slate-400 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <div className="flex items-center space-x-4 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>123 Tech Street, Digital City</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};