import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Bell,
  Settings,
  LogOut,
  Globe,
  Sun,
  Moon
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
}

const ModernNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    {
      id: 'services',
      label: 'Services',
      href: '#services',
      children: [
        { id: 'ai', label: 'AI & Machine Learning', href: '#ai-services' },
        { id: 'cybersecurity', label: 'Cybersecurity', href: '#cybersecurity' },
        { id: 'cloud', label: 'Cloud Infrastructure', href: '#cloud' },
        { id: 'quantum', label: 'Quantum Computing', href: '#quantum' },
        { id: 'devops', label: 'DevOps & Automation', href: '#devops' }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      href: '#solutions',
      children: [
        { id: 'enterprise', label: 'Enterprise', href: '#enterprise' },
        { id: 'startup', label: 'Startup', href: '#startup' },
        { id: 'healthcare', label: 'Healthcare', href: '#healthcare' },
        { id: 'finance', label: 'Financial Services', href: '#finance' },
        { id: 'retail', label: 'Retail & E-commerce', href: '#retail' }
      ]
    },
    {
      id: 'company',
      label: 'Company',
      href: '#company',
      children: [
        { id: 'about', label: 'About Us', href: '#about' },
        { id: 'team', label: 'Our Team', href: '#team' },
        { id: 'careers', label: 'Careers', href: '#careers' },
        { id: 'news', label: 'News & Updates', href: '#news' },
        { id: 'contact', label: 'Contact', href: '#contact' }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      href: '#resources',
      children: [
        { id: 'blog', label: 'Blog', href: '#blog' },
        { id: 'whitepapers', label: 'White Papers', href: '#whitepapers' },
        { id: 'webinars', label: 'Webinars', href: '#webinars' },
        { id: 'case-studies', label: 'Case Studies', href: '#case-studies' },
        { id: 'documentation', label: 'Documentation', href: '#docs' }
      ]
    }
  ];

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically update the global theme context
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-bold text-xl">Zion Tech Group</span>
              </a>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.id ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2"
                      onMouseLeave={closeDropdown}
                    >
                      {item.children?.map((child) => (
                        <a
                          key={child.id}
                          href={child.href}
                          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="text-gray-300 hover:text-white transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Selector */}
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <Globe className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>

              {/* User Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#profile" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                  Profile
                </a>
                <a href="#settings" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                  Settings
                </a>
                <a href="#logout" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                  Logout
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900 border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.id && item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.id}
                          href={child.href}
                          className="block text-gray-400 hover:text-white transition-colors duration-200 py-1"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ModernNavigation;