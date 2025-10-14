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
    <>
      {/* Overlay */}
      {isOpen && (
        <div
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-4">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
export default SidebarNavigation;