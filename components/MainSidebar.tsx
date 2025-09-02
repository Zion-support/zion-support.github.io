import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  Settings, 
  Users, 
  BarChart3, 
  FileText, 
  ChevronDown,
  ChevronRight 
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Services', href: '/services/ai-services', icon: BarChart3 },
      { name: 'IT Services', href: '/services/it-services', icon: Settings },
      { name: 'Micro SaaS', href: '/services/micro-saas', icon: FileText },
    ],
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
  },
  {
    name: 'Users',
    href: '/users',
    icon: Users,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: FileText,
  },
];

const MainSidebar: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const isExpanded = expandedItems.includes(item.name);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.name}>
        <div
          className={`flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors ${
            level > 0 ? 'pl-8' : ''
          }`}
        >
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.name)}
              className="flex items-center w-full text-left"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="flex-1">{item.name}</span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          ) : (
            <Link href={item.href} className="flex items-center w-full">
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-4">
            {item.children?.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
      </div>
      <nav className="mt-4">
        {sidebarItems.map(item => renderSidebarItem(item))}
      </nav>
    </div>
  );
};

export default MainSidebar;