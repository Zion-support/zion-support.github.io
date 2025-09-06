import React, { useState } from 'react';
import Link from 'next/link';
import { Home, User, Settings } from 'lucide-react';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}>
        <div className="p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <nav className="mt-4">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <IconComponent className="w-5 h-5" />
                {isOpen && (
                  <span className="ml-3 text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome to your dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;