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
      icon: <Globe className="w-4 h-4" />
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
        { name: 'AI Analytics', path: '/ai-analytics', description: 'Advanced data analytics and insights' },
        { name: 'AI CRM Pro', path: '/zion-ai-crm-pro', description: 'Intelligent customer relationship management' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI-powered content creation' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Video Generator', path: '/zion-ai-video-generator', description: 'Create videos with AI' }
      ]
    },
    {
      category: 'IT Services',
      items: [
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Web Development', path: '/web-development', description: 'Custom web applications' },
        { name: 'DevOps', path: '/devops', description: 'CI/CD and automation' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic technology guidance' },
        { name: 'System Integration', path: '/system-integration', description: 'Connect your systems' }
      ]
    },
    {
      category: 'Micro SAAS',
      items: [
        { name: 'Zion Analytics Pro', path: '/zion-ai-analytics-pro', description: 'Business intelligence platform' },
        { name: 'Zion Security Shield', path: '/zion-security-shield', description: 'Advanced cybersecurity' },
        { name: 'Zion AI Marketing', path: '/zion-ai-marketing-automation', description: 'Marketing automation' },
        { name: 'Zion E-commerce Suite', path: '/zion-ecommerce-suite', description: 'Complete e-commerce platform' }
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
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
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}