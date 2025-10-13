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
import EnhancedSearch from './EnhancedSearch';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Support', path: '/ai-customer-support' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Marketing Automation', path: '/ai-marketing-automation' },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro' },
    { name: 'Zion AI Marketing Automation Pro', path: '/zion-ai-marketing-automation-pro' },
    { name: 'Zion AI Project Manager Pro', path: '/zion-ai-project-manager-pro' },
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
  ];

  const serviceDropdowns = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: Brain,
      items: aiServices,
      color: 'text-cyan-400'
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: Zap,
      items: microSaasServices,
      color: 'text-purple-400'
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: Globe,
      items: fiveGServices,
      color: 'text-green-400'
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Service Dropdowns */}
              {serviceDropdowns.map((dropdown) => (
                <div key={dropdown.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(dropdown.name)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                      isActive(dropdown.path) || activeDropdown === dropdown.name
                        ? `${dropdown.color} bg-cyan-400/10`
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    <dropdown.icon className="w-4 h-4" />
                    <span>{dropdown.name}</span>
                    {activeDropdown === dropdown.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {activeDropdown === dropdown.name && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-700">
                        <Link
                          to={dropdown.path}
                          className={`text-sm font-medium ${dropdown.color} hover:underline`}
                          onClick={closeMenu}
                        >
                          View All {dropdown.name}
                        </Link>
                      </div>
                      <div className="py-2">
                        {dropdown.items.slice(0, 6).map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <EnhancedSearch />
              
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2 mb-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}

              {serviceDropdowns.map((dropdown) => (
                <div key={dropdown.name}>
                  <button
                    onClick={() => toggleDropdown(dropdown.name)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between ${
                      isActive(dropdown.path) || activeDropdown === dropdown.name
                        ? `${dropdown.color} bg-cyan-400/10`
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <dropdown.icon className="w-4 h-4" />
                      <span>{dropdown.name}</span>
                    </div>
                    {activeDropdown === dropdown.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {activeDropdown === dropdown.name && (
                    <div className="ml-4 space-y-1">
                      <Link
                        to={dropdown.path}
                        className={`block px-3 py-2 text-sm font-medium ${dropdown.color} hover:underline`}
                        onClick={closeMenu}
                      >
                        View All {dropdown.name}
                      </Link>
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-base font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 mt-4"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
