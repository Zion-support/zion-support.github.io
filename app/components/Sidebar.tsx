import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-4">
          <a
            href="/"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="/services"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="/about"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;