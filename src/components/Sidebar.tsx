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
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="p-4">

          <div className="space-y-2">
            <a href="/" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="/about" className="block text-gray-300 hover:text-white py-2">About</a>
            <a href="/services" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="/pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>
            <a href="/contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;