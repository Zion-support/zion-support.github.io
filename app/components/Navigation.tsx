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
  ChevronUp
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

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
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-4 h-4" />
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const aiServices = [
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
  ];

  const microSaasServices = [
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
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
    { name: '5G Private Networks', path: '/5g-private-networks' },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: '5G Implementation', path: '/5g-implementation' }
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
  const serviceDropdownItems = [
    {
      category: 'AI Solutions',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics', description: 'Advanced data analysis with AI' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Intelligent customer service' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' }
      ]
    },
    {
      category: 'IT Services',
      items: [
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud transitions' },
        { name: 'DevOps Services', path: '/devops', description: 'Streamlined development operations' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT guidance' },
        { name: 'Network Security', path: '/network-security', description: 'Comprehensive security solutions' }
      ]
    },
    {
      category: 'Micro SAAS',
      items: [
        { name: 'Zion Analytics Pro', path: '/zion-ai-analytics-pro', description: 'Advanced analytics platform' },
        { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', description: 'AI-powered customer management' },
        { name: 'Zion Security Shield', path: '/zion-ai-cybersecurity-suite-pro', description: 'Enterprise security suite' }
      ]
    },
    {
      category: '5G Solutions',
      items: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', description: 'Next-gen network setup' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', description: 'Ultra-low latency computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', description: 'Connected device management' }
      ]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
  ];

  return (
<<<<<<< HEAD
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg border-b border-purple-500/20">
=======
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg backdrop-blur-sm border-b border-purple-500/20">
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
<<<<<<< HEAD
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
=======
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-200">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
<<<<<<< HEAD
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-cyan-400 bg-purple-800/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-purple-800/30'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
=======
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
                
                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6">
                      <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
                      <div className="space-y-6">
                        {serviceDropdownItems.map((category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h4 className="text-cyan-400 font-medium mb-3 text-sm uppercase tracking-wide">
                              {category.category}
                            </h4>
                            <div className="space-y-2">
                              {category.items.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  to={service.path}
                                  className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                                >
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
=======
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={toggleServices}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.path) || isServicesOpen
                          ? 'text-purple-400 bg-purple-900/50'
                          : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/30'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {isServicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 z-50">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6">
                            {serviceDropdownItems.map((category) => (
                              <div key={category.category}>
                                <h3 className="text-sm font-semibold text-purple-400 mb-3">{category.category}</h3>
                                <ul className="space-y-2">
                                  {category.items.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.path}
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-900/30 rounded-md transition-colors duration-200"
                                      >
                                        <div className="font-medium">{service.name}</div>
                                        <div className="text-xs text-gray-400">{service.description}</div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
                          </div>
                        </div>
                      </div>
<<<<<<< HEAD
                      <div className="mt-6 pt-4 border-t border-cyan-500/20">
                        <Link
                          to="/services"
                          className="block text-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
=======
                    )}
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-purple-400 bg-purple-900/50'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/30'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
=======
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-purple-800/50'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-purple-800/30'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
=======
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm border-t border-cyan-500/20">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    {item.hasDropdown && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleServices();
                        }}
                        className="ml-auto"
                      >
                        {isServicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    )}
                  </Link>
                  
                  {/* Mobile Services Dropdown */}
                  {item.hasDropdown && isServicesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {serviceDropdownItems.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h4 className="text-cyan-400 font-medium text-sm uppercase tracking-wide mb-2">
                            {category.category}
                          </h4>
                          <div className="space-y-1">
                            {category.items.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                      ))}
                    </div>
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 backdrop-blur-sm rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleServices}
                        className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-900/30 transition-colors duration-200"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        {isServicesOpen ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
                      </button>
                      {isServicesOpen && (
                        <div className="pl-6 space-y-1">
                          {serviceDropdownItems.map((category) => (
                            <div key={category.category}>
                              <h4 className="text-sm font-semibold text-purple-400 mt-4 mb-2">{category.category}</h4>
                              {category.items.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-900/30 rounded-md transition-colors duration-200"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-900/30 transition-colors duration-200"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
                  )}
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}