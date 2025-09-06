import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={onClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={onClose}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;