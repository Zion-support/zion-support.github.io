import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Code, 
  Mail, 
  Brain, 
  Shield, 
<<<<<<< HEAD
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
  Sparkles
} from 'lucide-react';
=======
  Zap,
  ChevronDown
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  dropdown?: NavigationItem[];
}
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
=======
import {
  Brain,
  Shield,
  Zap,
  Globe,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';
>>>>>>> cursor/analyze-improve-and-deploy-application-30da

interface NavigationProps {
  onSidebarToggle?: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
=======
const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
  const location = useLocation();
  
  const toggleMenu = useCallback(() => {
<<<<<<< HEAD
    setIsOpen(!isOpen);
  }, [isOpen]);
=======
export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
>>>>>>> cursor/analyze-improve-and-deploy-application-c573

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);
<<<<<<< HEAD

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen);
  }, [isItServicesOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-c573

  const isActive = useCallback((path: string) => {
=======
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const isActive = (path: string) => {
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
    return location.pathname === path;
  };

  const services = [
    {
<<<<<<< HEAD
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
          name: 'Zion Pro Solutions',
          icon: <Sparkles className="w-4 h-4" />,
          items: [
            { name: 'Zion AI Analytics Pro', path: '/zion-ai-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'Zion Security Shield Pro', path: '/zion-security-shield-pro', icon: <Shield className="w-4 h-4" /> },
            { name: 'Zion Cloud Vault Pro', path: '/zion-cloud-vault-pro', icon: <Cloud className="w-4 h-4" /> },
            { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
            { name: 'Zion AI Marketing Pro', path: '/zion-ai-marketing-automation-pro', icon: <Target className="w-4 h-4" /> },
            { name: 'Zion AI Project Manager Pro', path: '/zion-ai-project-manager-pro', icon: <Calendar className="w-4 h-4" /> }
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
<<<<<<< HEAD
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
=======
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Automation', path: '/ai-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Marketing', path: '/ai-marketing', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Project Management', path: '/ai-project-management', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Shield className="w-4 h-4" /> },
        { name: 'Mobile Development', path: '/mobile-development', icon: <Shield className="w-4 h-4" /> },
        { name: 'Database Management', path: '/database-management', icon: <Shield className="w-4 h-4" /> },
        { name: 'Custom Software', path: '/custom-software', icon: <Shield className="w-4 h-4" /> },
        { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
    }
  ], []);

  return (
<<<<<<< HEAD
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
=======
      title: 'AI Solutions',
      icon: <Brain className="w-4 h-4" />,
      href: '/ai-services',
      description: 'Artificial Intelligence & Machine Learning'
    },
    {
      title: 'IT Services',
      icon: <Shield className="w-4 h-4" />,
      href: '/services',
      description: 'Technology Infrastructure & Support'
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-4 h-4" />,
      href: '/micro-saas',
      description: 'Ready-to-use Software Solutions'
    },
    {
      title: '5G Solutions',
      icon: <Globe className="w-4 h-4" />,
      href: '/5g-solutions',
      description: 'Next-generation Connectivity'
    }
  ];

  return (
    <nav className="relative z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
<<<<<<< HEAD
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
=======
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
                Zion Tech Group
              </span>
=======
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
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
                    onClick={item.dropdown ? (e) => {
                      e.preventDefault();
                      toggleServices();
                    } : undefined}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl z-50">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-1">
                          {item.dropdown.map((subItem, subIndex) => (
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
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
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
=======
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Regular Links */}
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-cyan-500/20">
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-medium px-3 py-2">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors"
                  >
                    {service.icon}
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Regular Links */}
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  Get Started
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </div>
<<<<<<< HEAD
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
=======
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
=======

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navigation;
>>>>>>> cursor/analyze-improve-and-deploy-application-30da
