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
  SidebarIcon,
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
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev);
  }, []);

  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(prev => !prev);
  }, []);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(prev => !prev);
  }, []);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(prev => !prev);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence Services' },
    { name: 'IT Services', href: '/services', icon: Shield, description: 'Information Technology Solutions' },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Zap, description: 'Ready-to-use Software Solutions' },
    { name: '5G Solutions', href: '/5g-solutions', icon: Globe, description: 'Next-gen Connectivity' }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Automation', href: '/ai-automation', icon: Cpu },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: Users },
    { name: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Project Management', href: '/ai-project-management', icon: Clock }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText }
  ];

  const fiveGServices = [
    { name: '5G Data Analytics', href: '/5g-data-analytics', icon: BarChart3 },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: Cpu },
    { name: '5G Implementation', href: '/5g-implementation', icon: Network },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Globe }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
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
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                }`}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                    isServicesOpen || location.pathname.startsWith('/services') || location.pathname.startsWith('/ai-services') || location.pathname.startsWith('/micro-saas') || location.pathname.startsWith('/5g-solutions')
                      ? 'text-cyan-400 bg-cyan-500/10' 
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center px-4 py-3 hover:bg-cyan-500/10 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 mr-3" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
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
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;