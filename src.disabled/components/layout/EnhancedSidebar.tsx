:src.disabled/components/layout/EnhancedSidebar.tsx
import React from
  'react';
import { Link, useLocation } from
  'react-router-dom';interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnhancedSidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()

  const items = [
    { label:,
  Home', href: '/ },
    { label:,
  Services', href: '/services },
    { label:,
  Enterprise', href: '/enterprise },
    { label:,
  Request Quote', href: '/request-quote },
    { label:,
  About', href: '/about },
    { label:,
  Contact', href: '/contact }
  ];

  if (!isOpen) return null

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 shadow-lg">
      <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
        <span className="font-semibold text-gray-900">Navigation</span>
        <button onClick={onClose} aria-label="Close" className="text-gray-600 hover: text-gray-900">×</button>
      </div>
      <nav className="p-4 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`block rounded-md px-3 py-2 text-sm ${
              location.pathname === item.href ?,
  bg-blue-50 text-blue-700': 'text-gray-700 hover:bg-gray-50
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default EnhancedSidebar;