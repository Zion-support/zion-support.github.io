import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Code, 
  Mail, 
  Brain, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  Database,
  ChevronDown,
  SidebarIcon,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeMenu]);

  const navigationItems: NavigationItem[] = [
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
      icon: <Code className="w-4 h-4" />,
      children: [
        {
          name: 'AI Services',
          path: '/ai-services',
          icon: <Brain className="w-4 h-4" />,
          children: [
            { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Sparkles className="w-4 h-4" /> },
            { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
            { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
            { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
            { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Phone className="w-4 h-4" /> },
            { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Cpu className="w-4 h-4" /> }
          ]
        },
        {
          name: 'IT Services',
          path: '/services',
          icon: <Monitor className="w-4 h-4" />,
          children: [
            { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
            { name: 'DevOps Services', path: '/devops-services', icon: <Code className="w-4 h-4" /> },
            { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
            { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
            { name: 'Software Development', path: '/software-development', icon: <Code className="w-4 h-4" /> },
            { name: 'System Integration', path: '/system-integration', icon: <Network className="w-4 h-4" /> },
            { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> }
          ]
        },
        {
          name: '5G Solutions',
          path: '/5g-solutions',
          icon: <Zap className="w-4 h-4" />,
          children: [
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Network className="w-4 h-4" /> },
            { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <MapPin className="w-4 h-4" /> },
            { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
            { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
            { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: '5G Implementation', path: '/5g-implementation', icon: <Code className="w-4 h-4" /> }
          ]
        },
        {
          name: 'Micro SAAS',
          path: '/micro-saas',
          icon: <Package className="w-4 h-4" />,
          children: [
            { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Sparkles className="w-4 h-4" /> },
            { name: 'Zion AI Invoice Generator', path: '/zion-ai-invoice-generator', icon: <Receipt className="w-4 h-4" /> },
            { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Users className="w-4 h-4" /> },
            { name: 'Zion AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro', icon: <Phone className="w-4 h-4" /> },
            { name: 'Zion AI Code Reviewer', path: '/zion-ai-code-reviewer', icon: <Code className="w-4 h-4" /> },
            { name: 'Zion AI Contract Analyzer', path: '/zion-ai-contract-analyzer', icon: <Receipt className="w-4 h-4" /> },
            { name: 'Zion AI Supply Chain Optimizer', path: '/zion-ai-supply-chain-optimizer', icon: <TrendingUp className="w-4 h-4" /> },
            { name: 'Zion AI Translator Pro', path: '/zion-ai-translator-pro', icon: <Globe className="w-4 h-4" /> },
            { name: 'Zion AI Data Cleaner', path: '/zion-ai-data-cleaner', icon: <Database className="w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Heart className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isDropdownOpen = activeDropdown === item.name;
    const isItemActive = isActive(item.path);

    return (
      <div key={item.name} className="relative">
        <div className="flex items-center">
          <Link
            to={item.path}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isItemActive
                ? 'text-white bg-blue-600/20 border border-blue-500/30'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
            }`}
            onClick={closeMenu}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
          {hasChildren && (
            <button
              onClick={() => toggleDropdown(item.name)}
              className="ml-1 p-1 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={`Toggle ${item.name} submenu`}
            >
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
          )}
        </div>
        
        {hasChildren && isDropdownOpen && (
          <div className={`absolute top-full left-0 mt-1 w-64 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-xl z-50 ${
            level > 0 ? 'ml-4' : ''
          }`}>
            <div className="py-2">
              {item.children!.map((child) => (
                <div key={child.name}>
                  {child.children ? (
                    renderNavigationItem(child, level + 1)
                  ) : (
                    <Link
                      to={child.path}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(child.path)
                          ? 'text-white bg-blue-600/20 border-l-2 border-blue-500'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                      onClick={closeMenu}
                    >
                      {child.icon}
                      <span>{child.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => renderNavigationItem(item))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800/50">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-blue-600/20 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={closeMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                          isActive(child.path)
                            ? 'text-white bg-blue-600/20 border-l-2 border-blue-500'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                        onClick={closeMenu}
                      >
                        {child.icon}
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

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