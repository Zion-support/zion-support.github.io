import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-slate-800 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                onClick={onClose}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                onClick={onClose}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                onClick={onClose}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                onClick={onClose}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;