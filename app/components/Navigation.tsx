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
      icon: <Globe className="w-4 h-4" />
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
        {
          name: 'Featured AI Services',
          icon: <Star className="w-4 h-4" />,
          items: [
            { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Cybersecurity Suite Pro', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', icon: <Code className="w-4 h-4" /> },
            { name: 'AI Customer Support Pro', path: '/ai-customer-support-pro', icon: <Users className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Specialized AI',
          icon: <Cpu className="w-4 h-4" />,
          items: [
            { name: 'AI Voice Assistant Pro', path: '/ai-voice-assistant-pro', icon: <Mic className="w-4 h-4" /> },
            { name: 'AI Computer Vision Pro', path: '/ai-computer-vision-pro', icon: <Camera className="w-4 h-4" /> },
            { name: 'AI Fraud Detection Pro', path: '/ai-fraud-detection-pro', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Medical Diagnosis', path: '/ai-medical-diagnosis', icon: <Heart className="w-4 h-4" /> },
            { name: 'AI Legal Assistant', path: '/ai-legal-assistant', icon: <FileText className="w-4 h-4" /> },
            { name: 'AI Blockchain Auditor', path: '/ai-blockchain-auditor', icon: <Shield className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Monitor className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Featured IT Services',
          icon: <Star className="w-4 h-4" />,
          items: [
            { name: 'Cloud Infrastructure Pro', path: '/cloud-infrastructure-pro', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Cybersecurity Suite Enterprise', path: '/cybersecurity-suite-enterprise', icon: <Shield className="w-4 h-4" /> },
            { name: 'DevOps Automation Pro', path: '/devops-automation-pro', icon: <Settings className="w-4 h-4" /> },
            { name: 'Data Analytics Platform', path: '/data-analytics-platform', icon: <BarChart3 className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Development Services',
          icon: <Code className="w-4 h-4" />,
          items: [
            { name: 'Web Development Enterprise', path: '/web-development-enterprise', icon: <Globe className="w-4 h-4" /> },
            { name: 'Mobile App Development', path: '/mobile-app-development', icon: <Smartphone className="w-4 h-4" /> },
            { name: 'Blockchain Development', path: '/blockchain-development', icon: <Shield className="w-4 h-4" /> },
            { name: 'AR/VR Development', path: '/ar-vr-development', icon: <Video className="w-4 h-4" /> },
            { name: 'API Development & Management', path: '/api-development-management', icon: <Code className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Infrastructure & Support',
          icon: <Database className="w-4 h-4" />,
          items: [
            { name: 'Database Management Pro', path: '/database-management-pro', icon: <Database className="w-4 h-4" /> },
            { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Wifi className="w-4 h-4" /> },
            { name: 'Managed IT Services', path: '/managed-it-services', icon: <Monitor className="w-4 h-4" /> },
            { name: 'Backup & Disaster Recovery', path: '/backup-disaster-recovery', icon: <HardDrive className="w-4 h-4" /> },
            { name: 'System Integration', path: '/system-integration', icon: <Workflow className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Package className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Featured Micro SAAS',
          icon: <Star className="w-4 h-4" />,
          items: [
            { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
            { name: 'Zion AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro', icon: <Mic className="w-4 h-4" /> },
            { name: 'Zion AI Image Recognition Pro', path: '/zion-ai-image-recognition-pro', icon: <Camera className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Business Tools',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: 'Zion AI Inventory Manager', path: '/zion-ai-inventory-manager', icon: <Package className="w-4 h-4" /> },
            { name: 'Zion HR Assistant Pro', path: '/zion-hr-assistant-pro', icon: <Users className="w-4 h-4" /> },
            { name: 'Zion AI Accounting Suite', path: '/zion-ai-accounting-suite', icon: <Calculator className="w-4 h-4" /> },
            { name: 'Zion E-commerce Optimizer', path: '/zion-ecommerce-optimizer', icon: <ShoppingCart className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Network className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: '5G Infrastructure',
          icon: <Cpu className="w-4 h-4" />,
          items: [
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cpu className="w-4 h-4" /> },
            { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
            { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
            { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> }
          ]
        },
        {
          name: '5G Applications',
          icon: <Smartphone className="w-4 h-4" />,
          items: [
            { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
            { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas-services',
      icon: <Package className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI-Powered Tools',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Email Analyzer', path: '/ai-powered-email-analyzer', icon: <Mail className="w-4 h-4" /> },
            { name: 'Customer Sentiment Tracker', path: '/ai-customer-sentiment-tracker', icon: <Heart className="w-4 h-4" /> },
            { name: 'Smart Expense Categorizer', path: '/smart-expense-categorizer', icon: <Receipt className="w-4 h-4" /> },
            { name: 'Smart Inventory Optimizer', path: '/smart-inventory-optimizer', icon: <Package className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Business Tools',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: 'Project Management Tool', path: '/project-management-tool', icon: <Award className="w-4 h-4" /> },
            { name: 'Customer Relationship Manager', path: '/customer-relationship-manager', icon: <Users className="w-4 h-4" /> },
            { name: 'Inventory Management System', path: '/inventory-management-system', icon: <Package className="w-4 h-4" /> },
            { name: 'Financial Reporting Tool', path: '/financial-reporting-tool', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Employee Time Tracker', path: '/employee-time-tracker', icon: <Clock className="w-4 h-4" /> },
            { name: 'Social Media Scheduler', path: '/social-media-scheduler', icon: <Globe className="w-4 h-4" /> },
            { name: 'Email Marketing Platform', path: '/email-marketing-platform', icon: <Mail className="w-4 h-4" /> },
            { name: 'Website Analytics Tool', path: '/website-analytics-tool', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Task Automation Workflow', path: '/task-automation-workflow', icon: <Zap className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={item.hasDropdown ? (e) => {
                      e.preventDefault();
                      toggleServices();
                    } : undefined}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl z-50">
                      <div className="p-4">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4 last:mb-0">
                            <div className="flex items-center space-x-2 mb-2 text-cyan-400 font-semibold">
                              <span>{section.icon}</span>
                              <span>{section.name}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {section.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <span>{subItem.icon}</span>
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-cyan-500/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;