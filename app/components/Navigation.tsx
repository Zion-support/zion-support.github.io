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
  Sparkles,
  Star,
  ArrowRight,
  Home,
  Users,
  Code,
  Cloud,
  Target,
  MessageSquare,
  BarChart3,
  Settings,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Lock,
  Monitor,
  Smartphone,
  Wifi,
  Layers,
  TrendingUp,
  FileText,
  Video,
  ShoppingCart,
  Calendar,
  Mail,
  Phone,
  MapPin
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
      icon: <Home className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support', icon: <MessageSquare className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <Target className="w-4 h-4" /> },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Analytics Pro', path: '/zion-ai-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Security Shield Pro', path: '/zion-ai-security-shield-pro', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cloud Vault Pro', path: '/zion-ai-cloud-vault-pro', icon: <Cloud className="w-4 h-4" /> },
        { name: 'CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
        { name: 'Content Studio Pro', path: '/zion-ai-content-studio-pro', icon: <FileText className="w-4 h-4" /> },
        { name: 'Video Generator Pro', path: '/zion-ai-video-generator-pro', icon: <Video className="w-4 h-4" /> },
        { name: 'E-commerce Optimizer Pro', path: '/zion-ai-ecommerce-optimizer-pro', icon: <ShoppingCart className="w-4 h-4" /> },
        { name: 'Financial Analytics Pro', path: '/zion-ai-financial-analytics-pro', icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Settings className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
        { name: 'DevOps Services', path: '/devops', icon: <Code className="w-4 h-4" /> },
        { name: 'IT Consulting', path: '/it-consulting', icon: <Lightbulb className="w-4 h-4" /> },
        { name: 'Network Security', path: '/network-security', icon: <Lock className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Monitor className="w-4 h-4" /> },
        { name: 'System Integration', path: '/system-integration', icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Wifi className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Wifi className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: <Lock className="w-4 h-4" /> },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <MessageSquare className="w-4 h-4" />
    }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Zion Tech Group
            </span>
            <div className="hidden lg:flex items-center ml-2">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group-hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 hover:border hover:border-cyan-500/20'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                            {dropdownItem.icon}
                          </div>
                          <span className="flex-1">{dropdownItem.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
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
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
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
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}