import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  XMarkIcon, 
  HomeIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon, 
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface ImprovedSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'About',
      href: '/about',
      icon: UserGroupIcon,
    },
    {
      name: 'Services',
      href: '/services',
      icon: BriefcaseIcon,
      children: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'IT Consulting', href: '/it-consulting' },
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: CurrencyDollarIcon,
    },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-slate-700 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-4 px-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors
                        ${isActive(item.href) 
                          ? 'bg-cyan-600 text-white' 
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                        }
                      `}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </div>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedItems.includes(item.name) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedItems.includes(item.name) && (
                      <ul className="mt-2 ml-6 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              to={child.href}
                              className={`
                                block px-3 py-2 text-sm rounded-lg transition-colors
                                ${isActive(child.href)
                                  ? 'bg-cyan-600 text-white'
                                  : 'text-gray-400 hover:bg-slate-800 hover:text-white'
                                }
                              `}
                              onClick={onClose}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`
                      flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                      ${isActive(item.href)
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }
                    `}
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ImprovedSidebar;