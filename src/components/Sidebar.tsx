import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-blue-600">Zion Tech</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={onClose}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={onClose}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;