import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Menu,
  X,
  SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Demo', href: '/demo' }
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Cpu,
      subItems: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Service', href: '/ai-customer-service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Monitor,
      subItems: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Custom Software', href: '/custom-software' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Package,
      subItems: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { name: 'Zion Content Studio', href: '/zion-content-studio' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: Network,
      subItems: [
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                    {serviceCategories.map((category) => (
                      <div key={category.name} className="px-4 py-2">
                        <Link
                          to={category.href}
                          className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
                          onClick={closeDropdowns}
                        >
                          <category.icon className="w-4 h-4 mr-2" />
                          {category.name}
                        </Link>
                        <div className="ml-6 mt-2 space-y-1">
                          {category.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-2 py-1 text-xs text-gray-300 hover:text-white hover:bg-slate-700 rounded"
                              onClick={closeDropdowns}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
