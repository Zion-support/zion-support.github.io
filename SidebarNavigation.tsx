import React from 'react';
<<<<<<< HEAD
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3792
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
=======
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
>>>>>>> cursor/fix-errors-and-merge-to-main-3792
    </div>
  );
};
export default SidebarNavigation;