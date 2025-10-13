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
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
<<<<<<< HEAD
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20>
          <h2 className="text-white font-bold text-xl>Navigation
=======
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-white font-bold text-xl">Navigation</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
<<<<<<< HEAD
            <X className="w-6 h-6 />
        <nav className="mt-8>
          {navigationItems.map((item) => (

            <Link
              key={item.name}

              to={item.href}

              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors
              onClick={onClose}              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100
            >
              <X className="w-5 h-5 />
          <nav className="flex-1 px-4 py-6 space-y-2>
            {navigationItems.map((item) => {
              const Icon = item.icon;;

              return (

                <Link
                  key={item.name}

                  to={item.href}

                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900
                  onClick={onClose}

                >
                  <Icon className="w-5 h-5 mr-3 />
                  {item.name}
              );

            })}
=======
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-8">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                onClick={onClose}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </React.Fragment>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
  );
};

export default SidebarNavigation;