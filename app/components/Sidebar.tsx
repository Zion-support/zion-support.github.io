import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XMarkIcon, HomeIcon, InformationCircleIcon, BriefcaseIcon, PhoneIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between h-16 px-4 border-b border-cyan-500/20">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-gray-300 hover:text-white hover:bg-slate-800'
              }`}
              onClick={onClose}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;