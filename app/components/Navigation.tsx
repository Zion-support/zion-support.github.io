import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Shield, Zap, Globe, Users, Mail, BarChart3, Cpu, Code, Settings, Home } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = useMemo(() => [
    {
      label: 'Home',
      href: '/',
      icon: <Home className="w-4 h-4" />
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
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Project Management', path: '/ai-project-management', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Settings className="w-4 h-4" /> }
  ], []);

  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Zap className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Settings className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Globe className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Globe className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Settings className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Brain className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Settings className="w-4 h-4" /> }
  ], []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAIServicesOpen(!isAIServicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isAIServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 py-2">
                  {aiServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                      onClick={() => setIsAIServicesOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsITServicesOpen(!isITServicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isITServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 py-2">
                  {itServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                      onClick={() => setIsITServicesOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMicroSaasOpen(!isMicroSaasOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMicroSaasOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 py-2">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5G Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIs5GServicesOpen(!is5GServicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>5G Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {is5GServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 py-2">
                  {fiveGServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                      onClick={() => setIs5GServicesOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;