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
  Target,
  Calendar,
  FileText,
  Video,
  Mail,
  TrendingUp,
  Settings,
  Package,
  Wifi,
  ArrowRight
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen);
  }, [isAIServicesOpen]);

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(!isITServicesOpen);
  }, [isITServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/', icon: <Zap className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { 
      name: 'Services', 
      path: '/services', 
      icon: <Settings className="w-4 h-4" />,
      hasDropdown: true 
    },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> }
  ];

  const serviceDropdownItems = [
    {
      name: 'AI Analytics',
      path: '/ai-analytics',
      description: 'Advanced data analytics and insights',
      icon: <BarChart3 className="w-4 h-4" />
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
      icon: <Cloud className="w-4 h-4" />
    },
    {
      name: 'Web Development',
      path: '/web-development',
      description: 'Custom web applications',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'DevOps',
      path: '/devops',
      description: 'CI/CD and automation',
      icon: <Settings className="w-4 h-4" />
    },
    {
      name: 'IT Consulting',
      path: '/it-consulting',
      description: 'Strategic technology guidance',
      icon: <Brain className="w-4 h-4" />
    }
  ];

  const microSaasItems = [
    {
      name: 'Zion AI Document Processor',
      path: '/zion-ai-document-processor',
      description: 'Intelligent document processing with 99.9% accuracy',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Zion AI Meeting Assistant',
      path: '/zion-ai-meeting-assistant',
      description: 'AI-powered meeting transcription and summaries',
      icon: <Video className="w-4 h-4" />
    },
    {
      name: 'Zion AI Email Optimizer',
      path: '/zion-ai-email-optimizer',
      description: 'Boost email performance with AI optimization',
      icon: <Mail className="w-4 h-4" />
    },
    {
      name: 'Zion AI Sales Predictor',
      path: '/zion-ai-sales-predictor',
      description: 'Predict sales with 95% accuracy using AI',
      icon: <TrendingUp className="w-4 h-4" />
    }
  ];

  return (
    <nav className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-2xl backdrop-blur-lg">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
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
                    <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg border border-cyan-500/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                          <h3 className="text-white font-semibold text-lg">Our Services</h3>
                        </div>
                        
                        {/* AI Services Section */}
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <Brain className="w-4 h-4 text-purple-400 mr-2" />
                            <h4 className="text-purple-300 font-medium text-sm uppercase tracking-wide">AI Services</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {serviceDropdownItems.slice(0, 3).map((service) => (
                              <Link
                                key={service.name}
                                to={service.path}
                                className="flex items-center p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors text-sm">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                  </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Micro SAAS Section */}
                        <div className="mb-4">
                          <div className="flex items-center mb-3">
                            <Package className="w-4 h-4 text-green-400 mr-2" />
                            <h4 className="text-green-300 font-medium text-sm uppercase tracking-wide">Micro SAAS</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {microSaasItems.slice(0, 2).map((saas) => (
                              <Link
                                key={saas.name}
                                to={saas.path}
                                className="flex items-center p-3 rounded-lg hover:bg-green-500/10 transition-all duration-200 group"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                  {saas.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-white group-hover:text-green-400 transition-colors text-sm">
                                    {saas.name}
                                  </div>
                                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {saas.description}
                                  </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-cyan-500/20">
                          <Link
                            to="/services"
                            className="flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                          >
                            View All Services
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg border-t border-cyan-500/20">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-cyan-500/10'
                }`}
                onClick={toggleMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}