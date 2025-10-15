import React from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-0 left-0 w-64 h-full bg-slate-900 shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <span className="text-white font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <Link
            to="/"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;