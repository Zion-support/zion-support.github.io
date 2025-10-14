import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
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
  onMenuClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
    onMenuClick?.();
  }, [onMenuClick]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Award className="w-4 h-4" />
    },
    {
      name: 'AI Solutions',
      href: '#',
      icon: <Brain className="w-4 h-4" />,
      dropdown: 'ai'
    },
    {
      name: '5G Technology',
      href: '#',
      icon: <Zap className="w-4 h-4" />,
      dropdown: '5g'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', href: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
    { name: 'AI Marketing', href: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Project Management', href: '/ai-project-management', icon: <Clock className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Implementation', href: '/5g-implementation', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Data Analytics', href: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Network className="w-4 h-4" /> },
    { name: '5G Mobile Apps', href: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Smart City', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.dropdown!)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menus */}
                {item.dropdown === 'ai' && activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Solutions
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {aiServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                            onClick={closeMenu}
                          >
                            {service.icon}
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.dropdown === '5g' && activeDropdown === '5g' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        5G Technology
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {fiveGServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                            onClick={closeMenu}
                          >
                            {service.icon}
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              as={Link}
              to="/consultation"
              variant="outline"
              size="sm"
            >
              <Monitor className="w-4 h-4 mr-2" />
              Consultation
            </FuturisticButton>
            <FuturisticButton
              as={Link}
              to="/contact"
              variant="primary"
              size="sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.dropdown!)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                      </button>
                      {item.dropdown === 'ai' && activeDropdown === 'ai' && (
                        <div className="ml-4 space-y-1">
                          {aiServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                              onClick={closeMenu}
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.dropdown === '5g' && activeDropdown === '5g' && (
                        <div className="ml-4 space-y-1">
                          {fiveGServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                              onClick={closeMenu}
                            >
                              {service.icon}
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <FuturisticButton
                  as={Link}
                  to="/consultation"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  Consultation
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  <Mail className="w-4 h-4 mr-2" />
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