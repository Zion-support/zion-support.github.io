import React from 'react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export default function Sidebar({ isOpen = false, onClose, className = '' }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${className}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
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
    </div>
  );
}