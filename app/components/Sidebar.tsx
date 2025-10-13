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
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-64 bg-slate-900 p-4">
        <button onClick={onClose} className="text-white mb-4">
          <X className="w-6 h-6" />
        </button>
        <nav className="space-y-4">
          <a href="/" className="block text-white hover:text-cyan-400">Home</a>
          <a href="/services" className="block text-white hover:text-cyan-400">Services</a>
          <a href="/about" className="block text-white hover:text-cyan-400">About</a>
          <a href="/contact" className="block text-white hover:text-cyan-400">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;