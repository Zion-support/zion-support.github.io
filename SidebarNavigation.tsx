import React from 'react';
import { User, X } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: 'Home', href: '/', icon: User },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: User },
  { name: 'Help', href: '/help', icon: User },
  { name: 'About', href: '/about', icon: User }
];

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold text-white">Navigation</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-8">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNavigation;