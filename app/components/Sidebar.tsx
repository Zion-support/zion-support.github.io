import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
          <a
            href="/"
            className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
          >
            About
          </a>
          <a
            href="/services"
            className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;