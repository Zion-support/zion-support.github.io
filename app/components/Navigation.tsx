import React, { useState, useCallback } from 'react';
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

  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen);
  }, [isItServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const mainNavItems = [
    { label: 'Home', href: '/', icon: <Star className="w-4 h-4" /> },
    { label: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { label: 'Services', href: '/services', icon: <Shield className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> }
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Monitor className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> }
  ];

  const fiveGServices = [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAiServices}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isAiServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-cyan-500/20 py-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIsAiServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isItServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-cyan-500/20 py-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIsItServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMicroSaas}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center"
                >
                  Micro SAAS
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isMicroSaasOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-cyan-500/20 py-2">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIsMicroSaasOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5G Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={toggle5GServices}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center"
                >
                  5G Solutions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {is5GServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg border border-cyan-500/20 py-2">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIs5GServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 backdrop-blur-md rounded-lg mt-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div className="pt-2">
                <div className="text-sm font-medium text-cyan-400 px-3 py-2">AI Services</div>
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile IT Services */}
              <div className="pt-2">
                <div className="text-sm font-medium text-cyan-400 px-3 py-2">IT Services</div>
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Micro SAAS */}
              <div className="pt-2">
                <div className="text-sm font-medium text-cyan-400 px-3 py-2">Micro SAAS</div>
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile 5G Solutions */}
              <div className="pt-2">
                <div className="text-sm font-medium text-cyan-400 px-3 py-2">5G Solutions</div>
                {fiveGServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;