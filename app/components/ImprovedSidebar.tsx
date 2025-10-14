import React from "react";
import { Link } from "react-router-dom";
import { 
  HomeIcon, 
  UserGroupIcon, 
  CogIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface ImprovedSidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ 
  isOpen = true, 
  onToggle,
  className = "" 
}) => {
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: UserGroupIcon },
    { name: 'Services', href: '/services', icon: CogIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
  ];

  return (
    <div className={`bg-slate-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {isOpen && (
          <h2 className="text-xl font-bold">Zion Tech Group</h2>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          {isOpen ? (
            <ChevronLeftIcon className="w-5 h-5" />
          ) : (
            <ChevronRightIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <nav className="mt-4">
        <ul className="space-y-2 px-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ImprovedSidebar;