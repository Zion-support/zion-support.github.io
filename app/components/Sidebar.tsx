import React from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              to="/ai-solutions"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              onClick={onClose}
            >
              AI Solutions
            </Link>
            <Link
              to="/it-solutions"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              onClick={onClose}
            >
              IT Solutions
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}