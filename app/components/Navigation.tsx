import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Code,
  Database,
  ChevronDown,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  Target,
  Calendar,
  Clock,
  FileText
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
        { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-4 h-4" /> },
        { name: 'IT Services', path: '/services', icon: <Shield className="w-4 h-4" /> },
        { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: 'Micro SAAS', path: '/micro-saas', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Video Generator', path: '/zion-ai-video-generator-pro', icon: <Monitor className="w-4 h-4" /> },
        { name: 'AI Invoice Generator', path: '/zion-ai-invoice-generator-pro', icon: <Receipt className="w-4 h-4" /> },
        { name: 'AI Analytics Pro', path: '/zion-ai-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Security Shield Pro', path: '/zion-security-shield-pro', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cloud Vault Pro', path: '/zion-cloud-vault-pro', icon: <Cloud className="w-4 h-4" /> },
        { name: 'AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Target className="w-4 h-4" /> },
        { name: '5G Smart City', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
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
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg border border-cyan-500/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${
                            isActive(dropdownItem.path)
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                          }`}
                        >
                          {dropdownItem.icon}
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
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
                <div key={item.name}>
                  <Link
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
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive(dropdownItem.path)
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.icon}
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
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