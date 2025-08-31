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
  MapPin
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    description: 'Explore our comprehensive technology solutions',
    children: [
      { name: 'AI Solutions', href: '/ai-services', description: 'Cutting-edge artificial intelligence services' },
      { name: 'IT Services', href: '/it-services', description: 'Enterprise technology infrastructure' },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security protocols' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Scalable cloud infrastructure' },
      { name: 'Edge & IoT', href: '/services/edge-computing-platform', description: 'Ultra-low latency solutions' },
      { name: 'AI Workflow Automation', href: '/services/ai-enterprise-workflow-automation', description: 'Intelligent business process automation' },
      { name: 'Customer Intelligence', href: '/services/ai-customer-intelligence-platform', description: 'AI-powered customer insights' },
      { name: 'AI Trading Platform', href: '/services/ai-financial-trading-platform', description: 'Intelligent financial trading' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    description: 'Industry-specific technology solutions',
    children: [
      { name: 'Enterprise', href: '/solutions/Enterprise', description: 'Large-scale business solutions' },
      { name: 'Healthcare', href: '/solutions/Healthcare', description: 'Medical technology innovations' },
      { name: 'Financial', href: '/solutions/FinancialSolutions', description: 'Fintech and banking solutions' },
      { name: 'Manufacturing', href: '/solutions/ManufacturingSolutions', description: 'Industrial automation' },
      { name: 'Government', href: '/solutions/GovernmentSolutions', description: 'Public sector technology' },
      { name: 'Retail', href: '/solutions/RetailSolutions', description: 'E-commerce and retail tech' }
    ]
  },
  {
    name: 'About',
    href: '/about',
    description: 'Learn about our company and mission'
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team'
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

  return (
    <>
      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
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
                          className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl shadow-black/20 overflow-hidden"
                          onMouseLeave={closeAllDropdowns}
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    {child.icon && <child.icon className="w-4 h-4 text-cyan-400" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {child.name}
                                    </p>
                                    {child.description && (
                                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {/* Search */}
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>

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

              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
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
                {/* Mobile Navigation Items */}
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
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
                              className="mt-2 ml-4 space-y-2"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-6 border-t border-slate-700/50">
                  <div className="space-y-3">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <contact.icon className="w-4 h-4" />
                        <span>{contact.text}</span>
                      </a>
                    ))}
                  </div>
                  
                  {/* Mobile CTA */}
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16 lg:h-20" />
    </>
  );
};