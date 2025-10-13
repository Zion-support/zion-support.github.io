import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  Home,
  User,
  Settings,
  Phone,
  BookOpen,
  Play,
  Cpu,
  Monitor,
  Package,
  Network,
  ChevronDown,
  ChevronRight
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Demo', href: '/demo', icon: Play }
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Cpu,
      subItems: [
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Service', href: '/ai-customer-service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Monitor,
      subItems: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Custom Software', href: '/custom-software' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Package,
      subItems: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { name: 'Zion Content Studio', href: '/zion-content-studio' }
      ]
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      icon: Network,
      subItems: [
        { name: '5G Data Analytics', href: '/5g-data-analytics' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications' }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900 shadow-xl z-50 overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {/* Main Navigation */}
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}

            {/* Services */}
            <div className="pt-4">
              <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Services
              </h3>
              <div className="mt-2 space-y-1">
                {serviceCategories.map((category) => {
                  const isExpanded = expandedItems.includes(category.name);
                  return (
                    <div key={category.name}>
                      <button
                        onClick={() => toggleExpanded(category.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <category.icon className="w-5 h-5 mr-3" />
                          {category.name}
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="ml-6 mt-1 space-y-1">
                          <Link
                            to={category.href}
                            onClick={onClose}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              isActive(category.href)
                                ? 'text-cyan-400 bg-cyan-400/10'
                                : 'text-gray-400 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            All {category.name}
                          </Link>
                          {category.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={onClose}
                              className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                                isActive(subItem.href)
                                  ? 'text-cyan-400 bg-cyan-400/10'
                                  : 'text-gray-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
