import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Settings, 
  HelpCircle, 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  className = ''
}) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      href: '/',
      children: []
    },
    {
      id: 'services',
      label: 'Services',
      icon: Users,
      href: '/services',
      children: [
        { label: 'AI Solutions', href: '/ai-solutions' },
        { label: 'Cloud Services', href: '/cloud-services' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: 'Data Analytics', href: '/data-analytics' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      href: '/settings',
      children: []
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: HelpCircle,
      href: '/help',
      children: []
    }
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isExpanded = (itemId: string) => {
    return expandedItems.includes(itemId);
  };

  return (
    <>
      <Helmet>
        <title>Navigation - Zion Tech Group</title>
      </Helmet>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        ${className}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Zion Tech</h2>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <div>
                  <Link
                    to={item.href}
                    className={`
                      flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${isActive(item.href) 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.label}</span>
                    </div>
                    {item.children.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpanded(item.id);
                        }}
                        className="p-1 rounded hover:bg-gray-200"
                      >
                        {isExpanded(item.id) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </Link>
                </div>

                {/* Submenu */}
                {item.children.length > 0 && isExpanded(item.id) && (
                  <ul className="mt-1 ml-6 space-y-1">
                    {item.children.map((child, index) => (
                      <li key={index}>
                        <Link
                          to={child.href}
                          className={`
                            block px-3 py-2 rounded-md text-sm transition-colors
                            ${isActive(child.href) 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'text-gray-600 hover:bg-gray-100'
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="text-xs text-gray-500 text-center">
            © 2024 Zion Tech Group
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;