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
  Users,
  BarChart3,
  Cloud,
  Code,
  Settings,
  Target,
  Award,
  Star,
  Heart,
  Mail,
  Phone,
  Monitor,
  Database,
  Network,
  Cpu,
  HardDrive,
  Headphones,
  Speaker,
  Wifi,
  WifiOff,
  Signal,
  Mic,
  Video,
  Receipt,
  FileText,
  Building,
  Smartphone
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen);
  }, [isAiServicesOpen]);

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
      subItems: [
        { name: 'IT Services', path: '/services', icon: <Settings className="w-4 h-4" /> },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
        { name: 'DevOps', path: '/devops', icon: <Code className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Monitor className="w-4 h-4" /> },
        { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
        { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true,
      subItems: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Headphones className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Mic className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true,
      subItems: [
        { name: 'AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> },
        { name: 'AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Receipt className="w-4 h-4" /> },
        { name: 'AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Email Analyzer', path: '/zion-ai-email-analyzer', icon: <Mail className="w-4 h-4" /> },
        { name: 'AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro', icon: <Mic className="w-4 h-4" /> },
        { name: 'AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Network className="w-4 h-4" />,
      hasDropdown: true,
      subItems: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Smart City', path: '/5g-smart-city-solutions', icon: <Building className="w-4 h-4" /> },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
        { name: '5G Mobile Apps', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/25'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/10'
                  }`}
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (item.name === 'Services') setIsServicesOpen(true);
                      if (item.name === 'AI Services') setIsAiServicesOpen(true);
                      if (item.name === 'Micro SAAS') setIsMicroSaasOpen(true);
                      if (item.name === '5G Solutions') setIsServicesOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      if (item.name === 'Services') setIsServicesOpen(false);
                      if (item.name === 'AI Services') setIsAiServicesOpen(false);
                      if (item.name === 'Micro SAAS') setIsMicroSaasOpen(false);
                      if (item.name === '5G Solutions') setIsServicesOpen(false);
                    }
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      (item.name === 'Services' && isServicesOpen) ||
                      (item.name === 'AI Services' && isAiServicesOpen) ||
                      (item.name === 'Micro SAAS' && isMicroSaasOpen)
                        ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menus */}
                {item.hasDropdown && item.subItems && (
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-2xl border border-cyan-500/20 transition-all duration-300 ${
                    (item.name === 'Services' && isServicesOpen) ||
                    (item.name === 'AI Services' && isAiServicesOpen) ||
                    (item.name === 'Micro SAAS' && isMicroSaasOpen) ||
                    (item.name === '5G Solutions' && isServicesOpen)
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                        >
                          <div className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform">
                            {subItem.icon}
                          </div>
                          <span>{subItem.name}</span>
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
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-cyan-500/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.hasDropdown && item.subItems && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.icon}
                          <span>{subItem.name}</span>
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