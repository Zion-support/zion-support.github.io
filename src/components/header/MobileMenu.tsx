import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/20" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-zion-blue-dark shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-zion-blue">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-zion-purple transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}