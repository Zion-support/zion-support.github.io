import { X, Home, User, Settings, HelpCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
  );
};

export default SidebarNavigation;
