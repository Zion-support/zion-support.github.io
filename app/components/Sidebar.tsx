import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${className}`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <nav className="space-y-2">
          <a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="/services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
          <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
