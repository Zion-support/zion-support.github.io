import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';
=======
import { Home, User, Settings, HelpCircle } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-8341
=======
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a5ea
interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
<<<<<<< HEAD

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
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold">Navigation</h2>
          <nav className="mt-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={onClose}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
<<<<<<< HEAD
      </nav>
=======
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-8341
=======
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
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
        </nav>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
=======
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-a5ea
    </div>
  );
};
export default SidebarNavigation;