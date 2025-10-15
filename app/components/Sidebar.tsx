import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="fixed top-0 left-0 h-full w-64 bg-slate-800 p-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-4">
              <a href="/" className="block text-gray-300 hover:text-white">Home</a>
              <a href="/about" className="block text-gray-300 hover:text-white">About</a>
              <a href="/services" className="block text-gray-300 hover:text-white">Services</a>
              <div className="ml-4 space-y-2">
                <a href="/ai-solutions" className="block text-gray-400 hover:text-white text-sm">AI Solutions</a>
                <a href="/it-solutions" className="block text-gray-400 hover:text-white text-sm">IT Solutions</a>
                <a href="/cybersecurity" className="block text-gray-400 hover:text-white text-sm">Cybersecurity</a>
                <a href="/cloud-solutions" className="block text-gray-400 hover:text-white text-sm">Cloud Solutions</a>
                <a href="/micro-saas-solutions" className="block text-gray-400 hover:text-white text-sm">Micro SaaS</a>
                <a href="/5g-solutions" className="block text-gray-400 hover:text-white text-sm">5G Solutions</a>
              </div>
              <a href="/contact" className="block text-gray-300 hover:text-white">Contact</a>
              <a href="/blog" className="block text-gray-300 hover:text-white">Blog</a>
              <a href="/careers" className="block text-gray-300 hover:text-white">Careers</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
