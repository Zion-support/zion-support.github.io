import React, { useState, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  Sidebar as SidebarIcon,
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
  onSidebarToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: Globe
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Services',
      href: '/services',
      icon: Code,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'Artificial Intelligence Solutions'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: Monitor,
          description: 'Information Technology Solutions'
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: Package,
          description: 'Software as a Service Solutions'
        },
        {
          name: '5G Solutions',
          href: '/5g-solutions',
          icon: Network,
          description: '5G Network Solutions'
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Mail
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: FileText
    }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href) || activeDropdown === item.name
                            ? 'text-cyan-400 bg-cyan-500/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg border border-white/20 shadow-xl z-50">
                          <div className="py-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                onClick={closeDropdowns}
                                className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                              >
                                <dropdownItem.icon className="w-5 h-5 mr-3 text-cyan-400" />
                                <div>
                                  <div className="font-medium">{dropdownItem.name}</div>
                                  <div className="text-xs text-gray-400">{dropdownItem.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
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
              className="flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/20">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => {
                                closeDropdowns();
                                setIsMenuOpen(false);
                              }}
                              className="flex items-center px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              <dropdownItem.icon className="w-4 h-4 mr-3" />
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
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