import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, Shield, Zap, Globe, ChevronDown } from 'lucide-react';;

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
    { name: 'AI Social Media Manager', path: '/zion-ai-social-media-manager' },
    { name: 'AI Document Analyzer', path: '/zion-ai-document-analyzer' },
    { name: 'AI Project Manager Pro', path: '/zion-ai-project-manager-pro' },
    { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro' }
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
    { name: '5G Private Networks', path: '/5g-private-networks' },
    { name: '5G Security Solutions', path: '/5g-security-solutions' },
    { name: '5G Performance Monitoring', path: '/5g-performance-monitoring' },
    { name: '5G Cloud Integration', path: '/5g-cloud-integration' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-purple-400 bg-purple-900/20'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/10'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-purple-400 focus:outline-none focus:text-purple-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-400 bg-purple-900/20'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}