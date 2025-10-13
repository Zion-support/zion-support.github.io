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
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <span className="text-xl font-bold text-white">Menu</span>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4 px-4">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
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
