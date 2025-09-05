import React, { useState } from 'react';
import { Menu, X, Home, Settings, User, LogOut } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;