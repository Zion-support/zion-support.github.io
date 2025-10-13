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
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMicroSaasOpen(false);
    setIsItServicesOpen(false);
    setIs5GServicesOpen(false);
  }, []);

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
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'Custom Software', href: '/custom-software' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { label: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { label: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro' },
        { label: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro' }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { label: '5G Data Analytics', href: '/5g-data-analytics' },
        { label: '5G Edge Computing', href: '/5g-edge-computing' },
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: '5G IoT Solutions', href: '/5g-iot-solutions' }
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
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Brain className="w-4 h-4" /> },
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
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI Marketing Automation Pro', path: '/zion-ai-marketing-automation-pro', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Zion AI Project Manager Pro', path: '/zion-ai-project-manager-pro', icon: <Package className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Database className="w-4 h-4" /> }
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
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
    }
  ], []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-400 bg-blue-900 bg-opacity-50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                            isActive(dropdownItem.href) ? 'text-blue-400' : 'text-gray-300'
                          }`}
                        >
                          <span>{dropdownItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive(item.path)
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAiServices}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAiServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                          onClick={() => setIsAiServicesOpen(false)}
                        >
                          {service.icon}
                          <span>{service.name}</span>
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
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <Code className="w-4 h-4" />
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isItServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                          onClick={() => setIsItServicesOpen(false)}
                        >
                          {service.icon}
                          <span>{service.name}</span>
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
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <Package className="w-4 h-4" />
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMicroSaasOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                          onClick={() => setIsMicroSaasOpen(false)}
                        >
                          {service.icon}
                          <span>{service.name}</span>
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
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>5G Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {is5GServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {fiveGServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200"
                          onClick={() => setIs5GServicesOpen(false)}
                        >
                          {service.icon}
                          <span>{service.name}</span>
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 mt-4 pt-4 pb-4">
            <div className="space-y-2">
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-900 bg-opacity-50'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={closeAllMenus}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`block px-3 py-2 text-sm rounded-md ${
                            isActive(dropdownItem.href)
                              ? 'text-blue-400 bg-blue-900 bg-opacity-50'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800'
                          }`}
                          onClick={closeAllMenus}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActive(item.path)
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile AI Services */}
            <div className="pt-2">
              <button
                onClick={toggleAiServices}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAiServicesOpen && (
                <div className="pl-6 space-y-1">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsAiServicesOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile IT Services */}
            <div className="pt-2">
              <button
                onClick={toggleItServices}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4" />
                  <span>IT Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isItServicesOpen && (
                <div className="pl-6 space-y-1">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsItServicesOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Micro SAAS */}
            <div className="pt-2">
              <button
                onClick={toggleMicroSaas}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span>Micro SAAS</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMicroSaasOpen && (
                <div className="pl-6 space-y-1">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMicroSaasOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile 5G Solutions */}
            <div className="pt-2">
              <button
                onClick={toggle5GServices}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>5G Solutions</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {is5GServicesOpen && (
                <div className="pl-6 space-y-1">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-colors duration-200 flex items-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIs5GServicesOpen(false);
                      }}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
};
};
};

export default Navigation;