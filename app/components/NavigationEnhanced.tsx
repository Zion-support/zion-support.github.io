import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown,
  ChevronUp,
  Search,
  User,
  ShoppingCart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationEnhancedProps {
  onSidebarToggle?: () => void;
}

export default function NavigationEnhanced({ onSidebarToggle }: NavigationEnhancedProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
  }, [isSearchOpen]);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'IT Services', path: '/services' },
        { name: '5G Solutions', path: '/5g-solutions' },
        { name: 'Micro SAAS', path: '/micro-saas' }
      ]
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Document Processing', path: '/ai-document-processing' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Accounting Assistant', path: '/zion-ai-accounting-assistant' },
        { name: 'AI 3D Generator', path: '/zion-ai-3d-generator' },
        { name: 'AI Blockchain Analytics', path: '/zion-ai-blockchain-analytics' },
        { name: 'AI Video Generator', path: '/zion-ai-video-generator' },
        { name: 'AI Invoice Generator', path: '/zion-ai-invoice-generator' },
        { name: 'AI Customer Insights', path: '/zion-ai-customer-insights' },
        { name: 'AI Email Analyzer', path: '/zion-ai-email-analyzer' },
        { name: 'Smart Inventory Optimizer', path: '/zion-smart-inventory-optimizer' },
        { name: 'AI Customer Sentiment Tracker', path: '/zion-ai-customer-sentiment-tracker' },
        { name: 'Smart Expense Categorizer', path: '/zion-smart-expense-categorizer' },
        { name: 'AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro' },
        { name: 'AI Code Reviewer', path: '/zion-ai-code-reviewer' },
        { name: 'AI Social Media Manager', path: '/zion-ai-social-media-manager' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' },
        { name: '5G Implementation', path: '/5g-implementation' }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-4 h-4" />
    }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Brain className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <AnimatePresence>
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className={`block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors ${
                              isActive(dropdownItem.path) ? 'text-cyan-400 bg-cyan-500/10' : ''
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Account */}
            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleSearch}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2"
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
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      )}
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className={`block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors ${
                              isActive(dropdownItem.path) ? 'text-cyan-400 bg-cyan-500/10' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
            >
              <motion.div
                className="w-full max-w-md bg-slate-800/95 backdrop-blur-sm rounded-lg p-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="w-5 h-5 text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Search services, products, or solutions..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    autoFocus
                  />
                </div>
                <div className="text-sm text-gray-400">
                  Try searching for "AI", "3D", "Blockchain", or "5G"
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}