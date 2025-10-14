import React, { useState, useCallback, useEffect, useMemo } from 'react';
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
  BarChart3, 
  Zap, 
  Award, 
  ChevronDown,
  Phone
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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

  const services = useMemo(() => [
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
      icon: <Award className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'AI Services',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
            { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
            { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
          ]
        },
        {
          name: 'IT Services',
          icon: <Shield className="w-4 h-4" />,
          items: [
            { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
            { name: 'Cloud Migration', path: '/cloud-migration', icon: <Globe className="w-4 h-4" /> },
            { name: 'DevOps', path: '/devops', icon: <Zap className="w-4 h-4" /> },
          ]
        },
        {
          name: '5G Solutions',
          icon: <Zap className="w-4 h-4" />,
          items: [
            { name: '5G Solutions', path: '/5g-solutions', icon: <Zap className="w-4 h-4" /> },
            { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Shield className="w-4 h-4" /> },
          ]
        },
        {
          name: 'Micro SAAS',
          icon: <Brain className="w-4 h-4" />,
          items: [
            { name: 'Micro SAAS', path: '/micro-saas', icon: <Brain className="w-4 h-4" /> },
            { name: 'Project Management Pro', path: '/project-management-pro', icon: <BarChart3 className="w-4 h-4" /> },
          ]
        }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    }
  ], []);

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {services.map((service) => (
                <div key={service.name} className="relative">
                  {service.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(service.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(service.path)
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {activeDropdown === service.name && (
                        <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 py-1 z-50">
                          {service.dropdownItems?.map((dropdown) => (
                            <div key={dropdown.name} className="px-4 py-2">
                              <div className="flex items-center space-x-2 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                {dropdown.icon}
                                <span>{dropdown.name}</span>
                              </div>
                              {dropdown.items?.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded transition-colors"
                                >
                                  {item.icon}
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={service.path}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(service.path)
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;