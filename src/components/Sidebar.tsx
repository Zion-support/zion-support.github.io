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
      <div className="fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={onClose}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={onClose}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={onClose}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={onClose}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={onClose}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;