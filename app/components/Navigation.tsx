import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Zap className="w-4 h-4" />
    }
  ];

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
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', description: 'Advanced analytics platform' },
        { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', description: 'AI-powered customer management' },
        { name: 'Zion Security Shield', path: '/zion-security-shield', description: 'Enterprise security suite' }
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
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
              >
                <Zap className="w-4 h-4" />
                <span>Services</span>
                {isServicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceDropdownItems.map((category) => (
                      <div key={category.category}>
                        <h3 className="text-sm font-semibold text-cyan-400 mb-3">{category.category}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.path}
                                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-gray-400">{item.description}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-cyan-400 mb-2">Services</div>
                <div className="space-y-1">
                  {serviceDropdownItems.map((category) => (
                    <div key={category.category} className="ml-4">
                      <div className="text-xs font-medium text-gray-400 mb-1">{category.category}</div>
                      <ul className="space-y-1">
                        {category.items.slice(0, 2).map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.path}
                              className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}