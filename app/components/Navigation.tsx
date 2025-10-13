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
import FuturisticButton from './FuturisticButton';

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

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMicroSaasOpen(false);
    setIsItServicesOpen(false);
    setIs5GServicesOpen(false);
  }, []);

  const services = useMemo(() => [
    {
      title: 'AI Solutions',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Artificial Intelligence & Machine Learning',
      children: [
        { title: 'AI Analytics', href: '/ai-analytics' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'AI Customer Service', href: '/ai-customer-service' },
        { title: 'AI Marketing', href: '/ai-marketing' },
        { title: 'AI Project Management', href: '/ai-project-management' }
      ]
    },
    {
      title: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Technology Infrastructure & Support',
      children: [
        { title: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Database Management', href: '/database-management' },
        { title: 'Custom Software', href: '/custom-software' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-use Software Solutions',
      children: [
        { title: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { title: 'Zion Security Shield', href: '/zion-security-shield' },
        { title: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { title: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { title: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro' },
        { title: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro' }
      ]
    },
    {
      title: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation Connectivity',
      children: [
        { title: '5G Data Analytics', href: '/5g-data-analytics' },
        { title: '5G Edge Computing', href: '/5g-edge-computing' },
        { title: '5G Implementation', href: '/5g-implementation' },
        { title: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { title: '5G Private Networks', href: '/5g-private-networks' }
      ]
    }
  ], []);

  return (
    <nav className="relative bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.map((service) => (
              <div key={service.title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  onClick={service.title === 'AI Solutions' ? toggleServices : 
                          service.title === 'Micro SAAS' ? toggleMicroSaas :
                          service.title === 'IT Services' ? toggleItServices : 
                          service.title === '5G Solutions' ? toggle5GServices : undefined}
                >
                  {service.icon}
                  <span>{service.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {service.title === 'AI Solutions' && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <ArrowRight className="w-3 h-3" />
                            <span className="text-sm">{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {service.title === 'Micro SAAS' && isMicroSaasOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <ArrowRight className="w-3 h-3" />
                            <span className="text-sm">{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {service.title === 'IT Services' && isItServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <ArrowRight className="w-3 h-3" />
                            <span className="text-sm">{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {service.title === '5G Solutions' && is5GServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <ArrowRight className="w-3 h-3" />
                            <span className="text-sm">{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="sm"
              icon={<Monitor className="w-4 h-4" />}
            >
              Demo
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<Mail className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="Toggle sidebar"
              >
                <SidebarIcon className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-cyan-500/20">
              {services.map((service) => (
                <div key={service.title}>
                  <Link
                    to={service.href}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    {service.icon}
                    <span>{service.title}</span>
                  </Link>
                  <div className="ml-6 space-y-1">
                    {service.children.map((child) => (
                      <Link
                        key={child.title}
                        to={child.href}
                        className="block px-3 py-1 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors"
                        onClick={closeAllMenus}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;