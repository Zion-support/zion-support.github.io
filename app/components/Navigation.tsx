import React, { useState, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  Sidebar as SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
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

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMicroSaasOpen(false);
    setIsItServicesOpen(false);
    setIs5GServicesOpen(false);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      label: 'Home',
      href: '/',
      icon: <Star className="w-4 h-4" />
    },
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { label: 'AI Content Generation', href: '/ai-content-generation' },
        { label: 'AI Customer Service', href: '/ai-customer-service' },
        { label: 'AI Data Analytics', href: '/ai-data-analytics' },
        { label: 'AI Email Automation', href: '/ai-email-automation' },
        { label: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { label: 'AI Healthcare', href: '/ai-healthcare' },
        { label: 'AI Marketing', href: '/ai-marketing' },
        { label: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
        { label: 'AI Project Management', href: '/ai-project-management' },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
        { label: 'AI Sales Automation', href: '/ai-sales-automation' },
        { label: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'Custom Software', href: '/custom-development' },
        { label: 'Cloud Consulting', href: '/cloud-consulting' },
        { label: 'Data Center Solutions', href: '/data-center-solutions' },
        { label: 'Disaster Recovery', href: '/disaster-recovery' },
        { label: 'IT Support', href: '/it-support' },
        { label: 'Managed Services', href: '/managed-services' },
        { label: 'Security Audit', href: '/security-audit' },
        { label: 'Technology Consulting', href: '/technology-consulting' }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Package className="w-4 h-4" />,
      dropdown: [
        { label: 'Zion AI Neural Interface', href: '/zion-ai-neural-interface' },
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { label: 'Zion Content Studio', href: '/zion-content-studio' }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Edge Computing', href: '/5g-edge-computing' },
        { label: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Data Analytics', href: '/5g-data-analytics' }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={item.label === 'AI Services' ? toggleServices : 
                                item.label === 'IT Services' ? toggleItServices :
                                item.label === 'Micro SAAS' ? toggleMicroSaas :
                                item.label === '5G Solutions' ? toggle5GServices : undefined}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          isActive(item.href) 
                            ? 'text-cyan-400 bg-cyan-400/10' 
                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {(item.label === 'AI Services' && isServicesOpen) ||
                       (item.label === 'IT Services' && isItServicesOpen) ||
                       (item.label === 'Micro SAAS' && isMicroSaasOpen) ||
                       (item.label === '5G Solutions' && is5GServicesOpen) ? (
                        <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 py-2 z-50">
                          <div className="grid grid-cols-1 gap-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                to={dropdownItem.href}
                                onClick={closeAllMenus}
                                className={`flex items-center px-4 py-3 text-sm transition-colors duration-200 ${
                                  isActive(dropdownItem.href)
                                    ? 'text-cyan-400 bg-cyan-400/10'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                                }`}
                              >
                                <ArrowRight className="w-3 h-3 mr-3" />
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-slate-800/50 transition-colors duration-200"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
