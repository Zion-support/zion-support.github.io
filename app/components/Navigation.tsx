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
  Target, 
  Calendar,
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev);
  }, []);

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(prev => !prev);
  }, []);

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(prev => !prev);
  }, []);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(prev => !prev);
  }, []);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(prev => !prev);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Document Processing', path: '/ai-document-processing', icon: <Monitor className="w-4 h-4" /> },
    { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <Target className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Smart Contract Auditor', path: '/ai-smart-contract-auditor', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Climate Prediction Engine', path: '/ai-climate-prediction-engine', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Monitor className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
    { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
    { name: 'System Integration', path: '/system-integration', icon: <Zap className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Monitor className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI Marketing Automation Pro', path: '/zion-ai-marketing-automation-pro', icon: <Target className="w-4 h-4" /> },
    { name: 'Zion AI Project Manager Pro', path: '/zion-ai-project-manager-pro', icon: <Calendar className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Zap className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Monitor className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-cyan-400 bg-cyan-400/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-400/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-white/10 py-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-white/10 my-2"></div>
                    
                    {/* AI Services */}
                    <div className="px-4 py-2">
                      <button
                        onClick={toggleAIServices}
                        className="flex items-center justify-between w-full text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        AI Services
                        <ChevronRight className={`w-4 h-4 transition-transform ${isAIServicesOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {isAIServicesOpen && (
                        <div className="mt-2 space-y-1">
                          {aiServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* IT Services */}
                    <div className="px-4 py-2">
                      <button
                        onClick={toggleITServices}
                        className="flex items-center justify-between w-full text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        IT Services
                        <ChevronRight className={`w-4 h-4 transition-transform ${isITServicesOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {isITServicesOpen && (
                        <div className="mt-2 space-y-1">
                          {itServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Micro SAAS */}
                    <div className="px-4 py-2">
                      <button
                        onClick={toggleMicroSaas}
                        className="flex items-center justify-between w-full text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Micro SAAS
                        <ChevronRight className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {isMicroSaasOpen && (
                        <div className="mt-2 space-y-1">
                          {microSaasServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 5G Services */}
                    <div className="px-4 py-2">
                      <button
                        onClick={toggle5GServices}
                        className="flex items-center justify-between w-full text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        5G Solutions
                        <ChevronRight className={`w-4 h-4 transition-transform ${is5GServicesOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {is5GServicesOpen && (
                        <div className="mt-2 space-y-1">
                          {fiveGServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-cyan-400 bg-cyan-400/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-400/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm border-t border-white/10">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
