import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose, className = '' }) => {
  return (
    <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden ${className}`}>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>
        <nav className="space-y-2">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            Pricing
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;