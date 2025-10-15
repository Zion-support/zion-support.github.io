import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
        <h2 className="text-xl font-semibold text-white">Menu</h2>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="mt-4 px-4">
        <a href="/" className="block py-2 text-slate-300 hover:text-white transition-colors">Home</a>
        <a href="/about" className="block py-2 text-slate-300 hover:text-white transition-colors">About</a>
        <a href="/services" className="block py-2 text-slate-300 hover:text-white transition-colors">Services</a>
        <a href="/contact" className="block py-2 text-slate-300 hover:text-white transition-colors">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;
