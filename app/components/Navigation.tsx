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

  const services = [
    {
      category: 'AI Services',
      items: [
        { name: 'AI Analytics', path: '/ai-analytics', description: 'Advanced data analytics powered by AI' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Intelligent customer service' }
      ]
    },
    {
      category: 'IT Services',
      items: [
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud migration services' },
        { name: 'Web Development', path: '/web-development', description: 'Modern web applications' },
        { name: 'DevOps', path: '/devops', description: 'Development operations solutions' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT consulting' }
      ]
    },
    {
      category: 'Micro SAAS',
      items: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', description: 'Business intelligence platform' },
        { name: 'Zion Security Shield', path: '/zion-security-shield', description: 'Advanced security protection' },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', description: 'Secure cloud storage' },
        { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', description: 'AI-powered CRM solution' }
      ]
    }
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 ${
                    isActive(item.path) ? 'text-cyan-400' : ''
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                
                {/* Services Mega Menu */}
                {item.name === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">{service.category}</h3>
                            <div className="space-y-3">
                              {service.items.map((serviceItem, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={serviceItem.path}
                                  className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group"
                                >
                                  <div className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                                    {serviceItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {serviceItem.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-cyan-500/20">
                        <Link
                          to="/services"
                          className="block text-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
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
          <div className="md:hidden mt-4 space-y-2">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  to={item.path}
                  className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
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
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 mt-2 space-y-1">
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
        )}
      </div>
    </nav>
  );
}