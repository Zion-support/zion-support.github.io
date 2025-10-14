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
  Zap,
  ChevronDown
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
}

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      children: [
        { name: 'AI Analytics', path: '/ai-analytics', icon: <Brain className="w-4 h-4" /> },
        { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
        { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Code className="w-4 h-4" />,
      children: [
        { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: <Globe className="w-4 h-4" /> },
        { name: 'DevOps Services', path: '/devops-services', icon: <Zap className="w-4 h-4" /> },
        { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Users className="w-4 h-4" />
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

  const isActive = (href: string) => {
    return location.pathname === href;
  }

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
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.path) || activeDropdown === item.name
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg border border-white/10 shadow-xl z-50">
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={closeDropdown}
                              className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${
                                isActive(child.path)
                                  ? 'text-cyan-400 bg-cyan-500/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              {child.icon}
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={() => {
                                closeDropdown();
                                setIsMobileMenuOpen(false);
                              }}
                              className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                                isActive(child.path)
                                  ? 'text-cyan-400 bg-cyan-500/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              {child.icon}
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
