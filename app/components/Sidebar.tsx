import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  if (!isOpen) return null;

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
          <h2 className="text-xl font-bold text-white">
            Zion <span className="text-purple-400">Tech</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}