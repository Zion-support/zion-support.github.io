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
  Clock,
  FileText
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

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
      name: 'Services',
      path: '/services',
      icon: <Award className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Services',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
            { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
            { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
            { name: 'AI Document Processing', path: '/ai-document-processing', icon: <FileText className="w-4 h-4" /> },
            { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> },
            { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
          ]
        },
        {
          name: 'IT Services',
          icon: <Monitor className="w-4 h-4" />,
          items: [
            { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
            { name: 'DevOps Services', path: '/devops-services', icon: <Code className="w-4 h-4" /> },
            { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
            { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
            { name: 'Software Development', path: '/software-development', icon: <Code className="w-4 h-4" /> },
            { name: 'System Integration', path: '/system-integration', icon: <Database className="w-4 h-4" /> },
            { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> }
          ]
        },
        {
          name: '5G Solutions',
          icon: <Network className="w-4 h-4" />,
          items: [
            { name: '5G Solutions', path: '/5g-solutions', icon: <Network className="w-4 h-4" /> },
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Cpu className="w-4 h-4" /> },
            { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
            { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
            { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> }
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/25">
                  <Zap className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  AI & IT Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/5'
                    }`}
                    onClick={item.hasDropdown ? (e) => {
                      e.preventDefault();
                      toggleServices();
                    } : undefined}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    )}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 z-50 overflow-hidden">
                      <div className="p-6">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-6 last:mb-0">
                            <div className="flex items-center space-x-2 mb-3 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                              <span className="group-hover:scale-110 transition-transform duration-300">{section.icon}</span>
                              <span>{section.name}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {section.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-300 hover:translate-x-1"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <span className="group-hover:scale-110 transition-transform duration-300">{subItem.icon}</span>
                                  <span>{subItem.name}</span>
                                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="sm"
              icon={<Monitor className="w-4 h-4" />}
              className="hover:scale-105 transition-transform duration-300"
            >
              Demo
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-4 h-4" />}
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg"
                aria-label="Toggle sidebar"
              >
                <SidebarIcon className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 shadow-lg">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 hover:translate-x-1'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span>{item.name}</span>
                    {isActive(item.path) && (
                      <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></div>
                    )}
                  </Link>
                </div>
              ))}
              <div className="pt-6 space-y-3 border-t border-white/10">
                <FuturisticButton
                  href="/demo"
                  variant="outline"
                  size="sm"
                  icon={<Monitor className="w-4 h-4" />}
                  className="w-full hover:scale-105 transition-transform duration-300"
                >
                  Demo
                </FuturisticButton>
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  icon={<Sparkles className="w-4 h-4" />}
                  className="w-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started
                </FuturisticButton>
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