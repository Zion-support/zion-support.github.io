import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  Mail, 
  ChevronDown,
  ChevronRight,
  Sparkles,
  Award,
  Clock,
  Phone,
  MapPin
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const location = useLocation();

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleCompany = useCallback(() => {
    setIsCompanyOpen(!isCompanyOpen);
  }, [isCompanyOpen]);

  const toggleSupport = useCallback(() => {
    setIsSupportOpen(!isSupportOpen);
  }, [isSupportOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  if (!isOpen) return null;

  const mainNavItems = [
    { label: 'Home', href: '/', icon: <Sparkles className="w-5 h-5" /> },
    { label: 'About', href: '/about', icon: <Users className="w-5 h-5" /> },
    { label: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> }
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Marketing', path: '/ai-marketing', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'Zion AI Neural Interface', path: '/zion-ai-neural-interface', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning-studio', icon: <Phone className="w-4 h-4" /> },
    { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Space Mission Optimizer', path: '/ai-space-mission-optimizer', icon: <Globe className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Phone className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> }
  ];

  const fiveGServices = [
    { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Zap className="w-4 h-4" /> },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
  ];

  const companyLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Press', path: '/press' },
    { name: 'Partners', path: '/partners' }
  ];

  const supportLinks = [
    { name: 'Support', path: '/support' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Demo', path: '/demo' },
    { name: 'Pricing', path: '/pricing' }
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Zion Tech Group</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-3">Main</h3>
            <ul className="space-y-2">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" />
                <span>Services</span>
              </div>
              {isServicesOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isServicesOpen && (
              <div className="mt-2 ml-4 space-y-4">
                {/* AI Services */}
                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">AI Services</h4>
                  <ul className="space-y-1">
                    {aiServices.map((service) => (
                      <li key={service.path}>
                        <Link
                          to={service.path}
                          onClick={onClose}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {service.icon}
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro SAAS */}
                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Micro SAAS</h4>
                  <ul className="space-y-1">
                    {microSaasServices.map((service) => (
                      <li key={service.path}>
                        <Link
                          to={service.path}
                          onClick={onClose}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {service.icon}
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IT Services */}
                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">IT Services</h4>
                  <ul className="space-y-1">
                    {itServices.map((service) => (
                      <li key={service.path}>
                        <Link
                          to={service.path}
                          onClick={onClose}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {service.icon}
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5G Solutions */}
                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">5G Solutions</h4>
                  <ul className="space-y-1">
                    {fiveGServices.map((service) => (
                      <li key={service.path}>
                        <Link
                          to={service.path}
                          onClick={onClose}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {service.icon}
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <div>
            <button
              onClick={toggleCompany}
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5" />
                <span>Company</span>
              </div>
              {isCompanyOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isCompanyOpen && (
              <div className="mt-2 ml-4">
                <ul className="space-y-1">
                  {companyLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={onClose}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Support */}
          <div>
            <button
              onClick={toggleSupport}
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <span>Support</span>
              </div>
              {isSupportOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isSupportOpen && (
              <div className="mt-2 ml-4">
                <ul className="space-y-1">
                  {supportLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={onClose}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="pt-4 border-t border-gray-700">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
