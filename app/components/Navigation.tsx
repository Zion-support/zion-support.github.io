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
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const services = useMemo(() => [
    {
      title: 'AI Solutions',
      icon: <Brain className="w-4 h-4" />,
      href: '/ai-services',
      color: 'text-cyan-400',
      description: 'Artificial Intelligence & Machine Learning'
    },
    {
      title: 'IT Services',
      icon: <Shield className="w-4 h-4" />,
      href: '/services',
      color: 'text-green-400',
      description: 'Technology Infrastructure & Support'
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-4 h-4" />,
      href: '/micro-saas',
      color: 'text-purple-400',
      description: 'Ready-to-use Software Solutions'
    },
    {
      title: '5G Solutions',
      icon: <Globe className="w-4 h-4" />,
      href: '/5g-solutions',
      color: 'text-orange-400',
      description: 'Next-generation Connectivity'
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', href: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Marketing', href: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: <Shield className="w-4 h-4" /> }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI Marketing Pro', href: '/zion-ai-marketing-automation-pro', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Zion AI Project Manager', href: '/zion-ai-project-manager-pro', icon: <Receipt className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Smart City', href: '/5g-smart-city-solutions', icon: <MapPin className="w-4 h-4" /> },
    { name: '5G Private Networks', href: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Apps', href: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
  ], []);

  const mainPages = useMemo(() => [
    { name: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
    { name: 'Blog', href: '/blog', icon: <Code className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <Phone className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={closeMenu}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center ${service.color}`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                        onClick={closeMenu}
                      >
                        <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('micro-saas')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-4">
                  <div className="space-y-2">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                        onClick={closeMenu}
                      >
                        <div className="text-purple-400 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5G Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('5g')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>5G Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === '5g' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-4">
                  <div className="space-y-2">
                    {fiveGServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                        onClick={closeMenu}
                      >
                        <div className="text-orange-400 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Pages */}
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive(page.href)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{page.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="sm"
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="primary"
              size="sm"
            >
              Watch Demo
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Toggle sidebar"
              >
                <SidebarIcon className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Services
                </h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                      onClick={closeMenu}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center ${service.color}`}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Pages */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Pages
                </h3>
                <div className="space-y-2">
                  {mainPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.href}
                      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                        isActive(page.href)
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={closeMenu}
                    >
                      <span>{page.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <FuturisticButton
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Get Started
                </FuturisticButton>
                <FuturisticButton
                  href="/demo"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  Watch Demo
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