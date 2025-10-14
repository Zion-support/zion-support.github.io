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
  Package,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock
} from 'lucide-react';

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
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Analytics',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: 'AI Analytics Dashboard', path: '/ai-analytics' },
            { name: 'AI Data Analytics', path: '/ai-data-analytics' },
            { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' }
          ]
        },
        {
          name: 'AI Automation',
          icon: <Cpu className="w-4 h-4" />,
          items: [
            { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
            { name: 'AI Email Automation', path: '/ai-email-automation' },
            { name: 'AI Sales Automation', path: '/ai-sales-automation' }
          ]
        },
        {
          name: 'AI Content',
          icon: <Sparkles className="w-4 h-4" />,
          items: [
            { name: 'AI Content Generation', path: '/ai-content-generation' },
            { name: 'AI Content Studio', path: '/zion-content-studio' }
          ]
        },
        {
          name: 'AI Customer Service',
          icon: <Users className="w-4 h-4" />,
          items: [
            { name: 'AI Customer Service', path: '/ai-customer-service' },
            { name: 'AI Customer Support Pro', path: '/zion-ai-customer-support-pro' }
          ]
        }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Infrastructure',
          icon: <Cloud className="w-4 h-4" />,
          items: [
            { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
            { name: 'Network Infrastructure', path: '/network-infrastructure' }
          ]
        },
        {
          name: 'Development',
          icon: <Code className="w-4 h-4" />,
          items: [
            { name: 'Web Development', path: '/web-development' },
            { name: 'Mobile Development', path: '/mobile-development' },
            { name: 'Custom Software', path: '/custom-software' }
          ]
        },
        {
          name: 'Security & Data',
          icon: <Shield className="w-4 h-4" />,
          items: [
            { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
            { name: 'Database Management', path: '/database-management' }
          ]
        }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Analytics & Intelligence',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
            { name: 'AI Customer Insights', path: '/zion-ai-customer-insights' },
            { name: 'AI Business Intelligence', path: '/ai-business-intelligence' }
          ]
        },
        {
          name: 'Security & Performance',
          icon: <Shield className="w-4 h-4" />,
          items: [
            { name: 'Zion Security Shield', path: '/zion-security-shield' },
            { name: 'AI Performance Optimizer', path: '/zion-ai-performance-optimizer' }
          ]
        },
        {
          name: 'Content & Communication',
          icon: <Sparkles className="w-4 h-4" />,
          items: [
            { name: 'Zion Content Studio', path: '/zion-content-studio' },
            { name: 'AI Video Generator', path: '/zion-ai-video-generator' },
            { name: 'AI Voice Assistant Pro', path: '/zion-ai-voice-assistant-pro' }
          ]
        }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Infrastructure',
          icon: <Network className="w-4 h-4" />,
          items: [
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
            { name: '5G Private Networks', path: '/5g-private-networks' }
          ]
        },
        {
          name: 'Applications',
          icon: <Smartphone className="w-4 h-4" />,
          items: [
            { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
            { name: '5G IoT Solutions', path: '/5g-iot-solutions' }
          ]
        },
        {
          name: 'Analytics & Implementation',
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            { name: '5G Data Analytics', path: '/5g-data-analytics' },
            { name: '5G Implementation', path: '/5g-implementation' }
          ]
        }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
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
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl z-50">
                      <div className="p-4">
                        {item.dropdownItems?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4 last:mb-0">
                            <div className="flex items-center space-x-2 mb-2 text-cyan-400 font-semibold">
                              <span>{section.icon}</span>
                              <span>{section.name}</span>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {section.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
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
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-cyan-500/20">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;