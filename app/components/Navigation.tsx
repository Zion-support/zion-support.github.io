import React, { useState, useCallback, useMemo } from 'react';
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
  FileText,
  Clock,
  Atom,
  Eye
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen);
  }, [isAiServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen);
  }, [isItServicesOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    {
      name: 'AI Analytics',
      path: '/ai-analytics',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'AI Automation',
      path: '/ai-automation',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'AI Business Intelligence',
      path: '/ai-business-intelligence',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      name: 'AI Content Generation',
      path: '/ai-content-generation',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'AI Customer Service',
      path: '/ai-customer-service',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'AI Data Analytics',
      path: '/ai-data-analytics',
      icon: <Database className="w-4 h-4" />
    },
    {
      name: 'AI Email Automation',
      path: '/ai-email-automation',
      icon: <Mail className="w-4 h-4" />
    },
    {
      name: 'AI Fraud Detection',
      path: '/ai-fraud-detection',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'AI Healthcare',
      path: '/ai-healthcare',
      icon: <Heart className="w-4 h-4" />
    },
    {
      name: 'AI Marketing',
      path: '/ai-marketing',
      icon: <Target className="w-4 h-4" />
    },
    {
      name: 'AI Predictive Analytics',
      path: '/ai-predictive-analytics',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      name: 'AI Project Management',
      path: '/ai-project-management',
      icon: <Clock className="w-4 h-4" />
    },
    {
      name: 'AI Recommendation Engine',
      path: '/ai-recommendation-engine',
      icon: <Star className="w-4 h-4" />
    },
    {
      name: 'AI Sales Automation',
      path: '/ai-sales-automation',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      name: 'AI Workflow Automation',
      path: '/ai-workflow-automation',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Quantum AI Assistant',
      path: '/ai-quantum-ai-assistant',
      icon: <Atom className="w-4 h-4" />
    },
    {
      name: 'Holographic Workspace Pro',
      path: '/ai-holographic-workspace-pro',
      icon: <Eye className="w-4 h-4" />
    }
  ], []);

  const itServices = useMemo(() => [
    {
      name: 'Cloud Infrastructure',
      path: '/cloud-infrastructure',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      name: 'Cybersecurity Solutions',
      path: '/cybersecurity-solutions',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Web Development',
      path: '/web-development',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Mobile Development',
      path: '/mobile-development',
      icon: <Smartphone className="w-4 h-4" />
    },
    {
      name: 'Database Management',
      path: '/database-management',
      icon: <Database className="w-4 h-4" />
    },
    {
      name: 'Custom Software',
      path: '/custom-software',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Network Infrastructure',
      path: '/network-infrastructure',
      icon: <Network className="w-4 h-4" />
    },
    {
      name: 'Cybersecurity Suite Pro',
      path: '/cybersecurity-suite-pro',
      icon: <Shield className="w-4 h-4" />
    }
  ], []);

  const microSaasServices = useMemo(() => [
    {
      name: 'Zion Analytics Pro',
      path: '/zion-analytics-pro',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'Zion Security Shield',
      path: '/zion-security-shield',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Zion Cloud Vault',
      path: '/zion-cloud-vault',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      name: 'Zion Content Studio',
      path: '/zion-content-studio',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Zion AI Video Generator',
      path: '/zion-ai-video-generator',
      icon: <Monitor className="w-4 h-4" />
    },
    {
      name: 'Zion AI Invoice Generator',
      path: '/zion-ai-invoice-generator',
      icon: <Receipt className="w-4 h-4" />
    },
    {
      name: 'Zion AI Customer Insights',
      path: '/zion-ai-customer-insights',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Zion AI Voice Assistant Pro',
      path: '/zion-ai-voice-assistant-pro',
      icon: <Phone className="w-4 h-4" />
    },
    {
      name: 'Zion AI Code Reviewer',
      path: '/zion-ai-code-reviewer',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Zion AI Contract Analyzer',
      path: '/zion-ai-contract-analyzer',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Zion AI Data Cleaner',
      path: '/zion-ai-data-cleaner',
      icon: <Database className="w-4 h-4" />
    },
    {
      name: 'Zion AI Translator Pro',
      path: '/zion-ai-translator-pro',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Zion AI Supply Chain Optimizer',
      path: '/zion-ai-supply-chain-optimizer',
      icon: <Package className="w-4 h-4" />
    }
  ], []);

  const fiveGServices = useMemo(() => [
    {
      name: '5G Data Analytics',
      path: '/5g-data-analytics',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: '5G Edge Computing',
      path: '/5g-edge-computing',
      icon: <Cpu className="w-4 h-4" />
    },
    {
      name: '5G Implementation',
      path: '/5g-implementation',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: '5G Mobile Applications',
      path: '/5g-mobile-applications',
      icon: <Smartphone className="w-4 h-4" />
    },
    {
      name: '5G Network Infrastructure',
      path: '/5g-network-infrastructure',
      icon: <Network className="w-4 h-4" />
    },
    {
      name: '5G Private Networks',
      path: '/5g-private-networks',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: '5G Smart City Solutions',
      path: '/5g-smart-city-solutions',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: '5G IoT Solutions',
      path: '/5g-iot-solutions',
      icon: <Zap className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAiServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                >
                  AI Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isAiServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                          {service.icon}
                          <span className="ml-3">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                >
                  IT Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isItServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                          {service.icon}
                          <span className="ml-3">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                >
                  Micro SAAS
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isMicroSaasOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                          {service.icon}
                          <span className="ml-3">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 5G Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={toggle5GServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                >
                  5G Solutions
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {is5GServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {fiveGServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                          {service.icon}
                          <span className="ml-3">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
