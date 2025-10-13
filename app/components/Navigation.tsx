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
      icon: <Globe className="w-4 h-4" />,
      ariaLabel: 'Go to home page'
    },
    {
      name: 'About',
      path: '/about',
      icon: <Brain className="w-4 h-4" />,
      ariaLabel: 'Learn about Zion Tech Group'
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      hasDropdown: true,
      ariaLabel: 'View our services'
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      ariaLabel: 'Explore AI solutions'
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      ariaLabel: 'Browse micro SAAS solutions'
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      ariaLabel: 'Discover 5G solutions'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-4 h-4" />,
      ariaLabel: 'Get in touch with us'
    }
  ];

  const serviceDropdownItems = [
    {
      name: 'AI Analytics',
      path: '/ai-analytics',
      description: 'Advanced data analytics and insights',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'AI Cybersecurity',
      path: '/ai-cybersecurity',
      description: 'AI-powered security solutions',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Cloud Migration',
      path: '/cloud-migration',
      description: 'Seamless cloud transition',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Web Development',
      path: '/web-development',
      description: 'Custom web applications',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'DevOps',
      path: '/devops',
      description: 'CI/CD and automation',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'IT Consulting',
      path: '/it-consulting',
      description: 'Strategic technology guidance',
      icon: <Brain className="w-4 h-4" />
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
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                  aria-label={item.ariaLabel}
                  role="menuitem"
                >
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <span aria-hidden="true">
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  )}
                </Link>
                
                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">Our Services</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {serviceDropdownItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="group flex items-center p-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 hover:scale-105"
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-cyan-500/20">
                        <Link
                          to="/services"
                          className="group flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
                        >
                          <span className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                            View All Services
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 text-cyan-400 group-hover:translate-x-1 transition-transform" />
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
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-2"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span aria-hidden="true">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-label={item.ariaLabel}
                  role="menuitem"
                >
                  <span aria-hidden="true">{item.icon}</span>
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