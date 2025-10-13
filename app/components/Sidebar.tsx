import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="space-y-4">
            <a href="/" className="block text-white hover:text-cyan-400 transition-colors">Home</a>
            <a href="/about" className="block text-white hover:text-cyan-400 transition-colors">About</a>
            <a href="/services" className="block text-white hover:text-cyan-400 transition-colors">Services</a>
            <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
