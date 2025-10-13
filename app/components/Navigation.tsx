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
      name: 'Contact',
      path: '/contact',
      icon: <Zap className="w-4 h-4" />
    }
  ];

  const serviceCategories = [
    {
      title: 'AI Solutions',
      services: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'DevOps Services', path: '/devops' },
        { name: 'IT Consulting', path: '/it-consulting' },
        { name: 'Network Security', path: '/network-security' },
        { name: 'Custom Software', path: '/custom-software' }
      ]
    },
    {
      title: '5G Solutions',
      services: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', path: '/5g-private-networks' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'Zion AI Analytics Pro', path: '/zion-ai-analytics-pro' },
        { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro' },
        { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator' },
        { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator' },
        { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights' }
      ]
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={toggleServices}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive(item.path) || isServicesOpen
                          ? 'text-cyan-400 bg-white/10'
                          : 'text-white hover:text-cyan-400 hover:bg-white/5'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {isServicesOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl z-50">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6">
                            {serviceCategories.map((category, index) => (
                              <div key={index}>
                                <h3 className="text-sm font-semibold text-cyan-400 mb-3">
                                  {category.title}
                                </h3>
                                <ul className="space-y-2">
                                  {category.services.map((service, serviceIndex) => (
                                    <li key={serviceIndex}>
                                      <Link
                                        to={service.path}
                                        className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
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
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-white/10'
                        : 'text-white hover:text-cyan-400 hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/demo"
              className="px-4 py-2 text-white border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Free Demo
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleServices}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        {isServicesOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {serviceCategories.map((category, index) => (
                            <div key={index} className="mb-4">
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                                {category.title}
                              </h4>
                              <ul className="space-y-1">
                                {category.services.map((service, serviceIndex) => (
                                  <li key={serviceIndex}>
                                    <Link
                                      to={service.path}
                                      className="block px-3 py-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                                      onClick={() => {
                                        setIsServicesOpen(false);
                                        setIsOpen(false);
                                      }}
                                    >
                                      {service.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-2 px-3 py-2 text-white hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/demo"
                  className="block w-full text-center px-4 py-2 text-white border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  Free Demo
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}