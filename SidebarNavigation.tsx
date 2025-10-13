
import React, { useState } from 'react';
import { Home, User, Settings, HelpCircle } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: HelpCircle }
  ];

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <nav className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6">
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SidebarNavigation;