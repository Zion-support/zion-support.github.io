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
  Layers,
  Cpu,
  Target,
  Users,
  BarChart3,
  Settings,
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
      icon: <Globe className="w-4 h-4" />,
      description: 'Welcome to Zion Tech Group'
    },
    {
      name: 'About',
      path: '/about',
      icon: <Brain className="w-4 h-4" />,
      description: 'Our story and mission'
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      hasDropdown: true,
      description: 'Comprehensive IT solutions'
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Artificial Intelligence solutions'
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Innovative micro software'
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Layers className="w-4 h-4" />,
      description: 'Next-gen connectivity'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />,
      description: 'Get in touch with us'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Meeting Transcriber', path: '/zion-ai-meeting-transcriber' },
        { name: 'Sales Predictor', path: '/zion-ai-sales-predictor' },
        { name: 'HR Assistant', path: '/zion-ai-hr-assistant' },
        { name: 'Expense Tracker', path: '/zion-ai-expense-tracker' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Layers className="w-5 h-5" />,
      color: 'from-green-500 to-cyan-500',
      services: [
        { name: 'Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: 'Edge Computing', path: '/5g-edge-computing' },
        { name: 'IoT Solutions', path: '/5g-iot-solutions' },
        { name: 'Smart City', path: '/5g-smart-city-solutions' }
      ]
    }
  ];

  return (
    <nav className="relative bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <div className="text-xs text-gray-400 -mt-1">Innovation & Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group-hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 hover:border hover:border-cyan-500/20'
                  }`}
                >
                  <div className={`transition-colors duration-300 ${isActive(item.path) ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800/95 backdrop-blur-sm text-xs text-gray-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {item.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/95"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-slate-800/95 backdrop-blur-md rounded-2xl mt-4 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`transition-colors duration-300 ${isActive(item.path) ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700/50 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}