import React from 'react';
import { Home, User, Settings, HelpCircle } from 'lucide-react';

import React from 'react';
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';

import React from 'react';
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';

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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
=======
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
=======
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
<<<<<<< HEAD
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
=======
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f93
        </nav>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c5cd
    </div>
  );
};

export default SidebarNavigation;