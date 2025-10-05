import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
<div className={`${isOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300`}>
        <div className="p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? '←' : '→'}
          </button>
        </div>
        
        <nav className="mt-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
<p className="text-gray-600 mt-2">Welcome to your dashboard</p>
      </div>
    </div>
  );
};

export default SidebarNavigation;