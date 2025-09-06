import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { X } from 'lucide-react';
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
=======
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-5 w-5" />
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
          </button>
        </div>
        
        <nav className="p-4">
<<<<<<< HEAD
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={onClose}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={onClose}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
=======
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;