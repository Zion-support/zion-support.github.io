import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  SidebarIcon,
  Brain,
  Shield,
  Zap,
  Globe,
  Phone,
  Mail,
  Star,
  BarChart3,
  Cloud,
  Code,
  Database,
  Users,
  Award,
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
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

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
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], []);

  const aiServices = useMemo(() => [
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Service', path: '/ai-customer-service' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Project Management', path: '/ai-project-management' }
  ], []);

  const microSaas = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', path: '/zion-content-studio' }
  ], []);

  const fiveGServices = useMemo(() => [
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
              </button>
              {activeDropdown === 'ai' && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setActiveDropdown('ai')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
                onMouseEnter={() => setActiveDropdown('saas')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Zap className="w-4 h-4" />
                <span>Micro SAAS</span>
              </button>
              {activeDropdown === 'saas' && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setActiveDropdown('saas')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {microSaas.map((saas) => (
                      <Link
                        key={saas.name}
                        to={saas.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                      >
                        {saas.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5G Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
                onMouseEnter={() => setActiveDropdown('5g')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Globe className="w-4 h-4" />
                <span>5G Solutions</span>
              </button>
              {activeDropdown === '5g' && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setActiveDropdown('5g')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              href="/contact"
              variant="primary"
              size="sm"
            >
              Contact Us
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 mt-4 pt-4 pb-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile AI Services */}
            <div className="pt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                AI Services
              </h3>
              <div className="space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Micro SAAS */}
            <div className="pt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Micro SAAS
              </h3>
              <div className="space-y-1">
                {microSaas.map((saas) => (
                  <Link
                    key={saas.name}
                    to={saas.path}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {saas.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile 5G Solutions */}
            <div className="pt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                5G Solutions
              </h3>
              <div className="space-y-1">
                {fiveGServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="pt-6 space-y-3">
              <FuturisticButton
                href="/contact"
                variant="outline"
                className="w-full"
                onClick={toggleMenu}
              >
                Get Started
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="primary"
                className="w-full"
                onClick={toggleMenu}
              >
                Contact Us
              </FuturisticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;