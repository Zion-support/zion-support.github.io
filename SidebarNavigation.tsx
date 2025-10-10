import { X, Home, User, Settings, HelpCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

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
    <React.Fragment>
      {/* Overlay */}
      {isOpen && (
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
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                onClick={onClose}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SidebarNavigation;