<<<<<<< HEAD

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Settings, HelpCircle, X } from 'lucide-react';
=======
import { X, Home, User, Settings, HelpCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66

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

const SidebarNavigationPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
=======
    <React.Fragment>
      <Helmet>
        <title>SidebarNavigation - Zion Tech Group</title>
        <meta name="description" content="Professional SidebarNavigation services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">SidebarNavigation</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>

        <nav className="mt-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
<<<<<<< HEAD
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
                onClick={onClose}
              >
                <Icon className="w-5 h-5 mr-3" />
=======
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                onClick={onClose}
              >
                <Icon className="w-5 h-5" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SidebarNavigationPage;
