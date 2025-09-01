import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Zap,
  Brain,
  Shield
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavigationItem {

  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  badge?: string;
}

const navigation: NavigationItem[] = [
  {

    name: 'Services',
    href: '/services',
    description: 'Explore our comprehensive technology solutions',
    icon: Zap,
    children: [
      {

        name: 'AI Solutions', 
        href: '/ai-services', 
        description: 'Cutting-edge artificial intelligence services',
        badge: 'New'
      },
      { name: 'IT Services', href: '/it-services', description: 'Enterprise technology infrastructure' },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security protocols' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Scalable cloud infrastructure' },
      { name: 'Edge & IoT', href: '/services/edge-computing-platform', description: 'Ultra-low latency solutions' }
    ]
  },
  {

    name: 'Solutions',
    href: '/solutions',
    description: 'Industry-specific technology solutions',
    icon: Brain,
    children: [
      { name: 'Enterprise', href: '/enterprise', description: 'Large-scale business solutions' },
      { name: 'Healthcare', href: '/industry-solutions', description: 'Medical technology innovations' },
      { name: 'Financial', href: '/industry-solutions', description: 'Fintech and banking solutions' },
      { name: 'Manufacturing', href: '/industry-solutions', description: 'Industrial automation' },
      { name: 'Government', href: '/industry-solutions', description: 'Public sector technology' },
      { name: 'Retail', href: '/industry-solutions', description: 'E-commerce and retail tech' }
    ]
  },
  {

    name: 'About',
    href: '/about',
    description: 'Learn about our company and mission',
    icon: User
  },
  {

    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team',
    icon: Mail
  }
];

const contactInfo = [
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
];

export const EnhancedNavigation: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {

    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleDropdownToggle = useCallback((name: string) => {

    setActiveDropdown(activeDropdown === name ? null : name);
  }, [activeDropdown]);

  const closeAllDropdowns = useCallback(() => {

    setActiveDropdown(null);
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {

    e.preventDefault();
    // Implement search functionality
    // // console.log('Searching for:', searchQuery);
  }, [searchQuery]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-4"
                        onMouseLeave={closeAllDropdowns}
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                            >
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                    {child.name}
                                  </span>
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
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
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Contact Info */}
              <div className="flex items-center space-x-4">
                {contactInfo.slice(0, 2).map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span className="hidden xl:inline">{contact.text}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Navigation Items */}
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-3"
                        aria-expanded={activeDropdown === item.name}
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform ${

                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-6 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors py-2"
                            >
                              <span>{child.name}</span>
                              {child.badge && (
                                <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors py-3"
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700/50">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-5 h-5" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};