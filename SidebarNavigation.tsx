import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Settings, Menu, X } from 'lucide-react';

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
            className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        <nav className="mt-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors ${
                isOpen ? 'justify-start' : 'justify-center'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isOpen && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-4 text-gray-600">
          Welcome to your dashboard. Use the sidebar to navigate.
        </p>
      </div>
    </div>
  );
};

export default SidebarNavigation;