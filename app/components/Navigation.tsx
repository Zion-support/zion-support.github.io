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

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
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

  const services = useMemo(() => [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Artificial Intelligence Solutions',
      children: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Service', href: '/ai-customer-service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Email Automation', href: '/ai-email-automation' },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
        { name: 'AI Project Management', href: '/ai-project-management' },
        { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    {
      name: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Information Technology Solutions',
      children: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Custom Software', href: '/custom-software' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-Use Software Solutions',
      children: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
        { name: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro' },
        { name: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-Generation Connectivity',
      children: [
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G Private Networks', href: '/5g-private-networks' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' }
      ]
    }
  ], []);

  const mainNavItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' }
  ], []);

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">Z</span>
              </div>
              <span className="text-white text-xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Tech Group
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service) => (
                          <div key={service.name} className="group">
                            <Link
                              to={service.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                            >
                              <div className="text-cyan-400 group-hover:text-cyan-300">
                                {service.icon}
                              </div>
                              <div>
                                <div className="text-white font-medium">{service.name}</div>
                                <div className="text-gray-400 text-xs">{service.description}</div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-sm rounded-lg mt-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-2">
                <div className="text-gray-400 text-sm font-medium px-3 py-2">Services</div>
                {services.map((service) => (
                  <div key={service.name} className="ml-4">
                    <Link
                      to={service.href}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="text-cyan-400">{service.icon}</div>
                      <span>{service.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Get Started
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
