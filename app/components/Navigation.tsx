import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Code, 
  Phone, 
  Star,
  ChevronDown,
  BarChart3,
  Cloud,
  Database,
  Target,
  Calendar,
  Mail,
  Smartphone,
  Monitor
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(prev => !prev);
    setIsMicroSaasOpen(false);
    setIs5GServicesOpen(false);
  }, []);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(prev => !prev);
    setIsAiServicesOpen(false);
    setIs5GServicesOpen(false);
  }, []);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(prev => !prev);
    setIsAiServicesOpen(false);
    setIsMicroSaasOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const mainNavItems = useMemo(() => [
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
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI Marketing', path: '/zion-ai-marketing-automation-pro', icon: <Target className="w-4 h-4" /> },
    { name: 'Zion AI Project Manager', path: '/zion-ai-project-manager-pro', icon: <Calendar className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Database className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Smart City', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
  ], []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
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
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isAiServicesOpen || aiServices.some(service => isActive(service.path))
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                }`}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-2 hover:bg-cyan-500/20 transition-colors ${
                        isActive(service.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                      }`}
                      onClick={() => setIsAiServicesOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMicroSaas}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isMicroSaasOpen || microSaasServices.some(service => isActive(service.path))
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-2 hover:bg-cyan-500/20 transition-colors ${
                        isActive(service.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                      }`}
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5G Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggle5GServices}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  is5GServicesOpen || fiveGServices.some(service => isActive(service.path))
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>5G Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${is5GServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {is5GServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-2 hover:bg-cyan-500/20 transition-colors ${
                        isActive(service.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                      }`}
                      onClick={() => setIs5GServicesOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Mobile AI Services */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-cyan-400 mb-2">AI Services</div>
                <div className="space-y-1">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        isActive(service.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Micro SAAS */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-cyan-400 mb-2">Micro SAAS</div>
                <div className="space-y-1">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        isActive(service.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile 5G Services */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-cyan-400 mb-2">5G Solutions</div>
                <div className="space-y-1">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        isActive(service.path) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;