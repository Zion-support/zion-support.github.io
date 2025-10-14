import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-slate-800 p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-4">
          <a href="/" className="block text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="block text-gray-300 hover:text-white">About</a>
          <a href="/services" className="block text-gray-300 hover:text-white">Services</a>
          <a href="/contact" className="block text-gray-300 hover:text-white">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;