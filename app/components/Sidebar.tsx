import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  Shield,
  Cloud,
  Code,
  Brain,
  Zap,
  Globe,
  BookOpen,
  MessageSquare,
  Briefcase,
  Info
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleExpanded = useCallback((item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }, []);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      href: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Info className="w-5 h-5" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Briefcase className="w-5 h-5" />,
      children: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: <Brain className="w-4 h-4" />
        },
        {
          name: 'IT Services',
          href: '/services',
          icon: <Code className="w-4 h-4" />
        },
        {
          name: '5G Solutions',
          href: '/5g-solutions',
          icon: <Zap className="w-4 h-4" />
        },
        {
          name: 'Micro SAAS',
          href: '/micro-saas',
          icon: <Cloud className="w-4 h-4" />
        }
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ], []);

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-purple-400 bg-purple-500/20'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        {expandedItems.includes(item.name) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      
                      {expandedItems.includes(item.name) && (
                        <ul className="ml-6 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                to={child.href}
                                onClick={onClose}
                                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                                  isActive(child.href)
                                    ? 'text-purple-400 bg-purple-500/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                              >
                                {child.icon}
                                <span>{child.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-purple-400 bg-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Ready to transform your business?
              </p>
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;