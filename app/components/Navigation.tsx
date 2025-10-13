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
  Network
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
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
      icon: <Star className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Award className="w-4 h-4" />,
      hasDropdown: true,
      isOpen: isServicesOpen,
      onToggle: toggleServices,
      dropdownItems: [
        {
          name: 'AI Services',
          path: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          description: 'Advanced AI Solutions'
        },
        {
          name: 'IT Services',
          path: '/it-services',
          icon: <Code className="w-4 h-4" />,
          description: 'Complete IT Solutions'
        },
        {
          name: '5G Solutions',
          path: '/5g-solutions',
          icon: <Network className="w-4 h-4" />,
          description: 'Next-Gen 5G Technology'
        },
        {
          name: 'Micro SAAS',
          path: '/micro-saas',
          icon: <Package className="w-4 h-4" />,
          description: 'Specialized Software Solutions'
        }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], [isServicesOpen, toggleServices]);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Project Management', path: '/ai-project-management', icon: <Receipt className="w-4 h-4" /> },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Sparkles className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Cpu className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={item.onToggle}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${item.isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {item.isOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200"
                            >
                              {dropdownItem.icon}
                              <div>
                                <div className="text-white text-sm font-medium">{dropdownItem.name}</div>
                                <div className="text-gray-400 text-xs">{dropdownItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${
                      isActive(item.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <SidebarIcon className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={item.onToggle}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${item.isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {item.isOpen && (
                        <div className="pl-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                            >
                              {dropdownItem.icon}
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 transition-colors duration-200 ${
                        isActive(item.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;