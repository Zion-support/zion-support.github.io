import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/20" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-80 bg-zion-blue-dark shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-zion-blue">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-zion-purple transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 space-y-4">
          <a
            href="/"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Home
          </a>
          <a
            href="/services"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Services
          </a>
          <a
            href="/about"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            About
          </a>
          <a
            href="/contact"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}