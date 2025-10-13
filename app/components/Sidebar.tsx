import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-64 bg-slate-900 border-l border-white/10 p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="space-y-4">
          <a href="/" className="block text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/about" className="block text-gray-300 hover:text-white transition-colors">About</a>
          <a href="/services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
