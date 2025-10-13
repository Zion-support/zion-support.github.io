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
        { name: 'AI Video Generator', path: '/zion-ai-video-generator' },
        { name: 'AI Invoice Generator', path: '/zion-ai-invoice-generator' },
        { name: 'AI Customer Insights', path: '/zion-ai-customer-insights' },
        { name: 'AI Email Analyzer', path: '/zion-ai-email-analyzer' },
        { name: 'Smart Inventory Optimizer', path: '/zion-smart-inventory-optimizer' },
        { name: 'AI Customer Sentiment Tracker', path: '/zion-ai-customer-sentiment-tracker' },
        { name: 'Smart Expense Categorizer', path: '/zion-smart-expense-categorizer' },
        { name: 'AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro' },
        { name: 'AI Code Reviewer', path: '/zion-ai-code-reviewer' },
        { name: 'AI Social Media Manager', path: '/zion-ai-social-media-manager' },
        { name: 'AI Document Analyzer', path: '/zion-ai-document-analyzer' },
        { name: 'AI Project Manager Pro', path: '/zion-ai-project-manager-pro' },
        { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro' }
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

  const serviceDropdownItems = [
    {
      category: 'AI Services',
      items: [
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro', description: 'AI-powered code generation & debugging' },
        { name: 'AI Content Studio Pro', path: '/ai-content-studio', description: 'AI-powered content creation platform' },
        { name: 'AI Analytics Pro', path: '/ai-analytics-pro', description: 'Advanced data analytics and insights' },
        { name: 'AI CRM Pro', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management' },
        { name: 'AI Cybersecurity Monitor Pro', path: '/ai-cybersecurity-monitor-pro', description: 'AI-powered security monitoring' },
        { name: 'AI Customer Insights Pro', path: '/ai-customer-insights', description: 'AI-powered customer analytics' },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', description: 'Advanced AI business intelligence' },
        { name: 'AI Marketing Automation Pro', path: '/ai-automation-platform', description: 'AI-powered marketing automation' }
      ]
    },
    {
      category: 'Micro SAAS Solutions',
      items: [
        { name: 'Zion Analytics Pro', path: '/ai-analytics-dashboard-pro', description: 'Business intelligence platform' },
        { name: 'Zion Security Shield', path: '/advanced-security-suite', description: 'Advanced cybersecurity suite' },
        { name: 'Zion Cloud Vault', path: '/ai-cloud-infrastructure', description: 'Secure cloud storage solution' },
        { name: 'Zion AI Project Manager Pro', path: '/ai-automation', description: 'AI-powered project management' },
        { name: 'Zion AI Data Analytics Pro', path: '/ai-data-analytics-pro', description: 'Comprehensive data analytics' },
        { name: 'Zion AI Content Generator Pro', path: '/ai-content-generation-pro', description: 'AI content generation suite' }
      ]
    },
    {
      category: '5G Solutions',
      items: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', description: 'Next-gen network solutions' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', description: 'Edge computing infrastructure' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', description: 'IoT connectivity solutions' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', description: 'Smart city implementations' },
        { name: '5G Private Networks', path: '/5g-private-networks', description: 'Private 5G networks' },
        { name: '5G Data Analytics', path: '/5g-data-analytics', description: '5G data insights' }
      ]
    }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
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
          </div>
        )}
      </div>
    </nav>
  );
}