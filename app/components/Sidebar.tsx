import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  className = '', 
  children, 
  ...props 
}) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${className}`} {...props}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4">
          {children || (
            <div className="space-y-4">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;