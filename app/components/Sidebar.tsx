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
      <div className="fixed top-0 left-0 h-full w-64 bg-slate-800 shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="/" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors">
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