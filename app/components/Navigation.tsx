import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Brain,
  Shield,
  Zap,
  Globe,
  Menu,
  X,
  ArrowRight,
  Users,
  Award,
  BarChart3,
  Cloud,
  Code,
  Database,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Smartphone,
  Monitor,
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  Sparkles
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  dropdown?: NavigationItem[];
}

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Automation', path: '/ai-automation-platform', icon: <Cpu className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
        { name: 'DevOps Services', path: '/devops-services', icon: <Code className="w-4 h-4" /> },
        { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
        { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
        { name: 'Software Development', path: '/software-development', icon: <Code className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Cloud className="w-4 h-4" />,
      dropdown: [
        { name: 'Project Management Pro', path: '/project-management-pro', icon: <Package className="w-4 h-4" /> },
        { name: 'AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
        { name: 'Inventory Smart', path: '/zion-inventory-smart', icon: <Package className="w-4 h-4" /> },
        { name: 'Financial Analytics Pro', path: '/ai-financial-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'Performance Monitor', path: '/zion-performance-monitor', icon: <Monitor className="w-4 h-4" /> },
        { name: 'Email Automation', path: '/zion-email-automation', icon: <Mail className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Network className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        isActive(item.path) || activeDropdown === item.name
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.icon}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default Navigation;