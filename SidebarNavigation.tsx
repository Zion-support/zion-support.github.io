import React from 'react';
import { User, X } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
          <div className="fixed left-0 top-0 h-full w-64 bg-slate-900 shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <h2 className="text-white font-bold text-lg">Navigation</h2>
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4">
              <div className="space-y-4">
                <a href="/" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                  <User className="w-5 h-5" />
                  <span>Home</span>
                </a>
                <a href="/about" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                  <User className="w-5 h-5" />
                  <span>About</span>
                </a>
                <a href="/services" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                  <User className="w-5 h-5" />
                  <span>Services</span>
                </a>
                <a href="/contact" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                  <User className="w-5 h-5" />
                  <span>Contact</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarNavigation;