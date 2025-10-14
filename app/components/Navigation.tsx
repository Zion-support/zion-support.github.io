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

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen)
  }, [is5GServicesOpen])

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
      icon: <Package className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Project Management', path: '/ai-project-management', icon: <Clock className="w-4 h-4" /> },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion AI Neural Interface', path: '/zion-ai-neural-interface', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> }
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

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Zap className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative group">
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          isActive(item.path) 
                            ? 'text-cyan-400 bg-cyan-400/10' 
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                        onClick={() => {
                          if (item.name === 'AI Services') toggleServices();
                          else if (item.name === 'Micro SAAS') toggleMicroSaas();
                          else if (item.name === '5G Solutions') toggle5GServices();
                        }}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 transform transition-all duration-200 ${
                        (item.name === 'AI Services' && isServicesOpen) ||
                        (item.name === 'Micro SAAS' && isMicroSaasOpen) ||
                        (item.name === '5G Solutions' && is5GServicesOpen)
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="py-2">
                          {item.name === 'AI Services' && aiServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                          {item.name === 'Micro SAAS' && microSaasServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                          {item.name === '5G Solutions' && fiveGServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.path) 
                          ? 'text-cyan-400 bg-cyan-400/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <FuturisticButton
              to="/contact"
              variant="primary"
              size="sm"
              className="flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                      onClick={() => {
                        if (item.name === 'AI Services') toggleServices();
                        else if (item.name === 'Micro SAAS') toggleMicroSaas();
                        else if (item.name === '5G Solutions') toggle5GServices();
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className={`pl-6 space-y-1 ${
                      (item.name === 'AI Services' && isServicesOpen) ||
                      (item.name === 'Micro SAAS' && isMicroSaasOpen) ||
                      (item.name === '5G Solutions' && is5GServicesOpen)
                        ? 'block' : 'hidden'
                    }`}>
                      {item.name === 'AI Services' && aiServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.icon}
                          <span>{service.name}</span>
                        </Link>
                      ))}
                      {item.name === 'Micro SAAS' && microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.icon}
                          <span>{service.name}</span>
                        </Link>
                      ))}
                      {item.name === '5G Solutions' && fiveGServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.icon}
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <FuturisticButton
                to="/contact"
                variant="primary"
                size="sm"
                className="w-full flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </FuturisticButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation