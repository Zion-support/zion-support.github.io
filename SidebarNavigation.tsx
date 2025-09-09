import React, { useState } from 'react';
import { Home, User, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

const SidebarNavigation: React.FC = () => {
  const [is_open, setIsOpen] = useState(false);
  
  const navigation_items = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${is_open ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}>
        <div className="p-4">
          <button
            onClick={() => setIsOpen(!is_open)}
            className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        
        <nav className="mt-8">
          {navigation_items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              {is_open && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <button className="flex items-center w-full p-4 text-gray-700 hover:bg-gray-100 transition-colors rounded-lg">
            <LogOut className="w-6 h-6" />
            {is_open && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your dashboard</p>
      </div>
    </div>
  );
};

export default SidebarNavigation;