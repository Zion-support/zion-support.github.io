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
        { name: 'IT Services', path: '/it-services' },
        { name: 'Micro SAAS', path: '/micro-saas' },
        { name: '5G Solutions', path: '/5g-solutions' }
      ]
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
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-200">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

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
                          : 'text-gray-300 hover:text-white hover:bg-purple-900/30'
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
                      <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                        <div className="px-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {serviceDropdownItems.map((category) => (
                              <div key={category.category}>
                                <h4 className="font-medium text-gray-900 mb-2">{category.category}</h4>
                                <ul className="space-y-1">
                                  {category.items.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.path}
                                        className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors duration-200"
                                        onClick={() => setIsServicesOpen(false)}
                                      >
                                        <div className="font-medium">{service.name}</div>
                                        <div className="text-xs text-gray-500">{service.description}</div>
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
                        : 'text-gray-300 hover:text-white hover:bg-purple-900/30'
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
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleServices}
                      className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/30 transition-colors duration-200"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {isServicesOpen ? (
                        <ChevronUp className="w-4 h-4 ml-auto" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                    {isServicesOpen && (
                      <div className="pl-6 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-purple-900/30 transition-colors duration-200"
                            onClick={() => {
                              setIsOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/30 transition-colors duration-200"
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
    </nav>
  );
}