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
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      color: 'text-cyan-400',
      hoverColor: 'hover:text-cyan-300',
      dropdown: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Heart className="w-4 h-4" /> },
        { name: 'AI Marketing', path: '/ai-marketing', icon: <TrendingUp className="w-4 h-4" /> },
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      color: 'text-green-400',
      hoverColor: 'hover:text-green-300',
      dropdown: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
        { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
        { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> },
        { name: 'Custom Software', path: '/custom-software', icon: <Monitor className="w-4 h-4" /> },
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      color: 'text-purple-400',
      hoverColor: 'hover:text-purple-300',
      dropdown: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> },
        { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Monitor className="w-4 h-4" /> },
        { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Receipt className="w-4 h-4" /> },
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      color: 'text-blue-400',
      hoverColor: 'hover:text-blue-300',
      dropdown: [
        { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G Implementation', path: '/5g-implementation', icon: <Network className="w-4 h-4" /> },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
      ]
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />,
      color: 'text-pink-400',
      hoverColor: 'hover:text-pink-300',
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />,
      color: 'text-yellow-400',
      hoverColor: 'hover:text-yellow-300',
    },
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : `${item.color} ${item.hoverColor} hover:bg-slate-800/50`
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={closeMenu}
                            className={`flex items-center space-x-3 px-4 py-3 hover:bg-slate-700/50 transition-colors ${
                              isActive(subItem.path) ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {subItem.icon}
                            <span className="text-sm font-medium">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : `${item.color} ${item.hoverColor} hover:bg-slate-800/50`
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <FuturisticButton
              to="/contact"
              variant="primary"
              size="sm"
              className="group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle sidebar"
            >
              <SidebarIcon className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive(item.path) 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : `${item.color} ${item.hoverColor} hover:bg-slate-800/50`
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={closeMenu}
                              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                                isActive(subItem.path) ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                              }`}
                            >
                              {subItem.icon}
                              <span className="text-sm font-medium">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : `${item.color} ${item.hoverColor} hover:bg-slate-800/50`
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cyan-500/20">
                <FuturisticButton
                  to="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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