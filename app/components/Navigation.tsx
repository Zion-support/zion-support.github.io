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
      hasSubmenu: true,
      submenu: [
        {
          name: 'AI Services',
          path: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          description: 'Artificial Intelligence Solutions'
        },
        {
          name: 'IT Services',
          path: '/it-services',
          icon: <Code className="w-4 h-4" />,
          description: 'Information Technology Solutions'
        },
        {
          name: '5G Solutions',
          path: '/5g-solutions',
          icon: <Network className="w-4 h-4" />,
          description: 'Next-Generation Connectivity'
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasSubmenu: true,
      submenu: [
        {
          name: 'Zion Analytics Pro',
          path: '/zion-analytics-pro',
          icon: <BarChart3 className="w-4 h-4" />,
          description: 'AI-Powered Business Intelligence'
        },
        {
          name: 'Zion Security Shield',
          path: '/zion-security-shield',
          icon: <Shield className="w-4 h-4" />,
          description: 'Advanced Cybersecurity Protection'
        },
        {
          name: 'Zion Cloud Vault',
          path: '/zion-cloud-vault',
          icon: <Cloud className="w-4 h-4" />,
          description: 'Secure Cloud Storage Solution'
        }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Submenu */}
                  {item.hasSubmenu && item.submenu && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="flex items-start space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
                          >
                            {subItem.icon}
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-gray-400">{subItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
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
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-cyan-500/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.hasSubmenu && item.submenu && (
                    <div className="ml-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.icon}
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-cyan-500/20">
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
});

Navigation.displayName = 'Navigation';

export default Navigation;
