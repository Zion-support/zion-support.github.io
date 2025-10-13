import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Brain,
  Shield,
  Zap,
  Globe,
  Menu,
  X,
  ChevronDown
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

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    {
      title: 'AI Solutions',
      icon: <Brain className="w-4 h-4" />,
      href: '/ai-services',
      description: 'Artificial Intelligence & Machine Learning'
    },
    {
      title: 'IT Services',
      icon: <Shield className="w-4 h-4" />,
      href: '/services',
      description: 'Technology Infrastructure & Support'
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-4 h-4" />,
      href: '/micro-saas',
      description: 'Ready-to-use Software Solutions'
    },
    {
      title: '5G Solutions',
      icon: <Globe className="w-4 h-4" />,
      href: '/5g-solutions',
      description: 'Next-generation Connectivity'
    }
  ];

  return (
    <nav className="relative z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
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
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Regular Links */}
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-500/10' 
                    : 'text-gray-300 hover:text-cyan-400'
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
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-cyan-500/20">
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-medium px-3 py-2">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors"
                  >
                    {service.icon}
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Regular Links */}
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  Get Started
                </FuturisticButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navigation;
