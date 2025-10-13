import React, { useState, useCallback, useMemo } from 'react';
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
  ChevronDown
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

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

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
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Automation', path: '/ai-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Customer Service', path: '/ai-customer-service', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Email Automation', path: '/ai-email-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Fraud Detection', path: '/ai-fraud-detection', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Healthcare', path: '/ai-healthcare', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Marketing', path: '/ai-marketing', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Project Management', path: '/ai-project-management', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Shield className="w-4 h-4" /> },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Web Development', path: '/web-development', icon: <Shield className="w-4 h-4" /> },
        { name: 'Mobile Development', path: '/mobile-development', icon: <Shield className="w-4 h-4" /> },
        { name: 'Database Management', path: '/database-management', icon: <Shield className="w-4 h-4" /> },
        { name: 'Custom Software', path: '/custom-software', icon: <Shield className="w-4 h-4" /> },
        { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Zap className="w-4 h-4" /> },
        { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Private Networks', path: '/5g-private-networks', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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
                    onClick={item.dropdown ? (e) => {
                      e.preventDefault();
                      toggleServices();
                    } : undefined}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl z-50">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-md transition-all duration-300"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span>{subItem.icon}</span>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}