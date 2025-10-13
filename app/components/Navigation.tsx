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
    <nav className="relative z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <Zap className="w-6 h-6 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 relative">
                <span className="relative z-10">Zion Tech Group</span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Zion Tech Group
                </span>
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
                    <div className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-500/20 z-50 overflow-hidden">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      
                      <div className="relative p-6">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-6 last:mb-0">
                            <div className="flex items-center space-x-2 mb-3 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                              <span className="w-4 h-4">{section.icon}</span>
                              <span>{section.name}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {section.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 rounded-lg transition-all duration-300 relative overflow-hidden"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <span className="w-4 h-4 group-hover:scale-110 transition-transform duration-300">{subItem.icon}</span>
                                  <span className="relative z-10">{subItem.name}</span>
                                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center space-x-2 overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-xl border-t border-cyan-500/30 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              
              <div className="relative">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`group flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative overflow-hidden ${
                        isActive(item.path)
                          ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="group block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
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