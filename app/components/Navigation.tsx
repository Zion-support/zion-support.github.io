import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  Phone, 
  Star,
  Sparkles,
  BarChart3,
  Cloud,
  Database,
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

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
      icon: <Star className="w-4 h-4" />
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
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Brain className="w-4 h-4" /> }
  ], []);

  const zionServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Database className="w-4 h-4" /> }
  ], []);

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* AI Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                        onClick={closeDropdowns}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Zion Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('zion')}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Zap className="w-4 h-4" />
                  <span>Micro SAAS</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'zion' && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                    {zionServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                        onClick={closeDropdowns}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5G Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('5g')}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Network className="w-4 h-4" />
                  <span>5G Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === '5g' && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 py-2">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                        onClick={closeDropdowns}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="sm"
            >
              Demo
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div className="pt-2">
                <div className="text-sm font-medium text-cyan-400 px-3 py-2">AI Services</div>
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-2 px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Zion Services */}
              <div className="pt-2">
                <div className="text-sm font-medium text-cyan-400 px-3 py-2">Micro SAAS</div>
                {zionServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-2 px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile 5G Services */}
              <div className="pt-2">
                <div className="text-sm font-medium text-cyan-400 px-3 py-2">5G Solutions</div>
                {fiveGServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center space-x-2 px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-2 space-y-2">
                <FuturisticButton
                  href="/demo"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Demo
                </FuturisticButton>
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  icon={<Sparkles className="w-4 h-4" />}
                  className="w-full"
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

Navigation.displayName = 'Navigation';

export default Navigation;