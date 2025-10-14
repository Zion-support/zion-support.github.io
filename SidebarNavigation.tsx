import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { User, X } from 'lucide-react';
<<<<<<< HEAD
=======
=======

>>>>>>> origin/main
>>>>>>> origin/main

=======
import { User, X } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
<<<<<<< HEAD
  { name: 'Home', href: '/', icon: User },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: User },
=======
  { name: "Home", href: "/", icon: User },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: User },
  { name: "Help", href: "/help", icon: User },
  { name: "About", href: "/about", icon: User }
>>>>>>> origin/main
];

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
<<<<<<< HEAD
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
=======
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
<<<<<<< HEAD
      { /* Sidebar */ }
=======

      {/* Sidebar */}
>>>>>>> origin/main
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
<<<<<<< HEAD
      { /* Sidebar */ }
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={ onClose }
            className="p-2 hover:bg-gray-100 rounded-md"
=======
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
>>>>>>> origin/main
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-4">
<<<<<<< HEAD
          {navigationItems.map((item) => (
            <a
'
const navigationItems = [{ name: "Home", href: "/", icon: User },';'
  { name: "Profile", href: "/profile", icon: User },';'
  { name: "Settings", href: "/settings", icon: User },';'
  { name: "Help", href: "/help", icon: User },';
];
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => { return (' }
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>';
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />;
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">;
        <div className="flex items-center justify-between p-4 border-b">;
          <h2 className="text-lg font-semibold"></h2>;
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">;
            <X className="w-5 h-5" />;
          </button>;
        </div>
        <nav className="p-4">;
          { navigationItems.map((item) => (
            <a; }
              key={ item.name }
              href={ item.href }
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              { item.name }
            </a>
          ))}
=======
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </a>
            );
          })}
>>>>>>> origin/main
>>>>>>> origin/main
        </nav>
      </div>
    </div>
  );
};

export default SidebarNavigation;