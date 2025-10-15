import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Contact', href: '/contact' },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 shadow-lg md:hidden">
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <span className="text-xl font-bold text-white">Zion Tech Group</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={`block px-3 py-2 rounded-md text-base font-medium mb-2 transition-colors ${
                location.pathname === item.href
                  ? 'text-white bg-slate-700'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}