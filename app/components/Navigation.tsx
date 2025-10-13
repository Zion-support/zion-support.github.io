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
      hasDropdown: true
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-4 h-4" />
    }
  ];

  const serviceCategories = [
    {
      title: 'AI Solutions',
      services: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps Services', href: '/devops' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'Custom Software', href: '/custom-software' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'Zion Analytics Pro', href: '/zion-ai-analytics-pro' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
        { name: 'Zion AI Invoice Generator', href: '/zion-ai-invoice-generator' }
      ]
    },
    {
      title: '5G Solutions',
      services: [
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart Cities', href: '/5g-smart-city-solutions' }
      ]
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 group">
              <Brain className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-200" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={toggleServices}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.path) || isServicesOpen
                          ? 'text-purple-300 bg-purple-900/50'
                          : 'text-gray-300 hover:text-purple-300 hover:bg-purple-900/30'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isServicesOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 z-50">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6">
                            {serviceCategories.map((category) => (
                              <div key={category.title}>
                                <h3 className="text-sm font-semibold text-purple-400 mb-3">
                                  {category.title}
                                </h3>
                                <ul className="space-y-2">
                                  {category.services.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.href}
                                        className="text-gray-300 hover:text-purple-300 text-sm transition-colors duration-200 block py-1"
                                        onClick={() => setIsServicesOpen(false)}
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-purple-300 bg-purple-900/50'
                        : 'text-gray-300 hover:text-purple-300 hover:bg-purple-900/30'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-purple-300 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleServices}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-300 hover:text-purple-300 hover:bg-purple-900/30 rounded-md transition-colors duration-200"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </span>
                        {isServicesOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      
                      {isServicesOpen && (
                        <div className="ml-6 mt-2 space-y-1">
                          {serviceCategories.map((category) => (
                            <div key={category.title} className="mb-4">
                              <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wide mb-2">
                                {category.title}
                              </h4>
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-300 hover:bg-purple-900/30 rounded-md transition-colors duration-200"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsServicesOpen(false);
                                  }}
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
                      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-300 hover:bg-purple-900/30 rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
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