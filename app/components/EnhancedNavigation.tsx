import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
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
  Menu,
  X,
  SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  Target,
  Calendar,
  Clock,
  FileText,
  Video,
  Mic,
  Eye,
  DollarSign,
  Activity,
  Layers,
  Settings,
  HelpCircle,
  BookOpen,
  PlayCircle
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function EnhancedNavigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
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

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const mainNavigationItems = [
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
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  const aiServices = [
    {
      name: 'AI Analytics',
      path: '/ai-analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Advanced AI-powered analytics'
    },
    {
      name: 'AI Content Generation',
      path: '/ai-content-generation',
      icon: <FileText className="w-4 h-4" />,
      description: 'AI-powered content creation'
    },
    {
      name: 'AI Customer Support',
      path: '/ai-customer-support',
      icon: <Users className="w-4 h-4" />,
      description: 'Intelligent customer service'
    },
    {
      name: 'AI Cybersecurity',
      path: '/ai-cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'AI-powered security solutions'
    },
    {
      name: 'AI Data Analytics',
      path: '/ai-data-analytics',
      icon: <Database className="w-4 h-4" />,
      description: 'Advanced data analysis'
    },
    {
      name: 'AI 3D Generation',
      path: '/ai-3d-generation',
      icon: <Layers className="w-4 h-4" />,
      description: 'AI-powered 3D modeling'
    },
    {
      name: 'AI Blockchain Analytics',
      path: '/ai-blockchain-analytics',
      icon: <Network className="w-4 h-4" />,
      description: 'Crypto intelligence platform'
    },
    {
      name: 'AI Computer Vision',
      path: '/ai-computer-vision',
      icon: <Eye className="w-4 h-4" />,
      description: 'Visual recognition and analysis'
    }
  ];

  const microSaasServices = [
    {
      name: 'Zion AI Video Generator',
      path: '/zion-ai-video-generator',
      icon: <Video className="w-4 h-4" />,
      description: 'AI-powered video creation'
    },
    {
      name: 'Zion AI Invoice Generator',
      path: '/zion-ai-invoice-generator',
      icon: <Receipt className="w-4 h-4" />,
      description: 'Automated invoice creation'
    },
    {
      name: 'Zion AI Customer Insights',
      path: '/zion-ai-customer-insights',
      icon: <TrendingUp className="w-4 h-4" />,
      description: 'Customer analytics platform'
    },
    {
      name: 'Zion AI Email Analyzer',
      path: '/zion-ai-email-analyzer',
      icon: <Mail className="w-4 h-4" />,
      description: 'Email intelligence platform'
    },
    {
      name: 'Zion Smart Inventory Optimizer',
      path: '/zion-smart-inventory-optimizer',
      icon: <Package className="w-4 h-4" />,
      description: 'AI inventory management'
    },
    {
      name: 'Zion AI Customer Sentiment Tracker',
      path: '/zion-ai-customer-sentiment-tracker',
      icon: <Heart className="w-4 h-4" />,
      description: 'Real-time sentiment analysis'
    },
    {
      name: 'Zion Smart Expense Categorizer',
      path: '/zion-smart-expense-categorizer',
      icon: <DollarSign className="w-4 h-4" />,
      description: 'AI expense management'
    },
    {
      name: 'Zion AI Voice Assistant Pro',
      path: '/zion-ai-voice-assistant-pro',
      icon: <Mic className="w-4 h-4" />,
      description: 'Advanced voice AI platform'
    }
  ];

  const fiveGServices = [
    {
      name: '5G Network Infrastructure',
      path: '/5g-network-infrastructure',
      icon: <Network className="w-4 h-4" />,
      description: 'Next-gen network solutions'
    },
    {
      name: '5G Edge Computing',
      path: '/5g-edge-computing',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Edge computing services'
    },
    {
      name: '5G IoT Solutions',
      path: '/5g-iot-solutions',
      icon: <Target className="w-4 h-4" />,
      description: 'IoT connectivity solutions'
    },
    {
      name: '5G Smart City Solutions',
      path: '/5g-smart-city-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Smart city implementations'
    },
    {
      name: '5G Private Networks',
      path: '/5g-private-networks',
      icon: <Shield className="w-4 h-4" />,
      description: 'Private network solutions'
    },
    {
      name: '5G Mobile Applications',
      path: '/5g-mobile-applications',
      icon: <Smartphone className="w-4 h-4" />,
      description: '5G mobile app development'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration',
      path: '/cloud-migration',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud infrastructure migration'
    },
    {
      name: 'DevOps Services',
      path: '/devops',
      icon: <Settings className="w-4 h-4" />,
      description: 'DevOps automation and CI/CD'
    },
    {
      name: 'IT Consulting',
      path: '/it-consulting',
      icon: <Users className="w-4 h-4" />,
      description: 'Strategic IT consulting'
    },
    {
      name: 'Network Security',
      path: '/network-security',
      icon: <Shield className="w-4 h-4" />,
      description: 'Network security solutions'
    },
    {
      name: 'Custom Software',
      path: '/custom-software',
      icon: <Code className="w-4 h-4" />,
      description: 'Custom software development'
    },
    {
      name: 'System Integration',
      path: '/system-integration',
      icon: <Database className="w-4 h-4" />,
      description: 'System integration services'
    },
    {
      name: 'Web Development',
      path: '/web-development',
      icon: <Monitor className="w-4 h-4" />,
      description: 'Modern web applications'
    }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {mainNavigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                    }`}
                    onMouseEnter={item.hasDropdown ? () => {
                      if (item.name === 'AI Services') setIsAIServicesOpen(true);
                      else if (item.name === 'Micro SAAS') setIsMicroSaasOpen(true);
                      else if (item.name === '5G Solutions') setIs5GServicesOpen(true);
                      else if (item.name === 'Services') setIsServicesOpen(true);
                    } : undefined}
                    onMouseLeave={item.hasDropdown ? () => {
                      if (item.name === 'AI Services') setIsAIServicesOpen(false);
                      else if (item.name === 'Micro SAAS') setIsMicroSaasOpen(false);
                      else if (item.name === '5G Solutions') setIs5GServicesOpen(false);
                      else if (item.name === 'Services') setIsServicesOpen(false);
                    } : undefined}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* AI Services Dropdown */}
                  {item.name === 'AI Services' && isAIServicesOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-3">AI Services</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {aiServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-3 p-2 rounded-md hover:bg-cyan-500/10 transition-colors"
                            >
                              {service.icon}
                              <div>
                                <div className="text-sm font-medium text-white">{service.name}</div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Micro SAAS Dropdown */}
                  {item.name === 'Micro SAAS' && isMicroSaasOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-3">Micro SAAS Solutions</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {microSaasServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-3 p-2 rounded-md hover:bg-cyan-500/10 transition-colors"
                            >
                              {service.icon}
                              <div>
                                <div className="text-sm font-medium text-white">{service.name}</div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 5G Solutions Dropdown */}
                  {item.name === '5G Solutions' && is5GServicesOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-3">5G Solutions</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {fiveGServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-3 p-2 rounded-md hover:bg-cyan-500/10 transition-colors"
                            >
                              {service.icon}
                              <div>
                                <div className="text-sm font-medium text-white">{service.name}</div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* IT Services Dropdown */}
                  {item.name === 'Services' && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-3">IT Services</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {itServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-3 p-2 rounded-md hover:bg-cyan-500/10 transition-colors"
                            >
                              {service.icon}
                              <div>
                                <div className="text-sm font-medium text-white">{service.name}</div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              {mainNavigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}