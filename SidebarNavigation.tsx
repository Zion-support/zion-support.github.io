import { Home, Menu, Settings, User, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div
        className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}
      >
        <div className='p-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
        
        <nav className='px-4 space-y-2'>
          {navigationItems.map(item => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 ${
                  isOpen ? 'justify-start' : 'justify-center'
                }`}
              >
                <IconComponent className='w-5 h-5' />
                {isOpen && <span className='ml-3 font-medium'>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Main Content */}
      <div className='flex-1 p-8'>
        <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
        <p className='text-gray-600 mt-2'>Welcome to your dashboard</p>
      </div>
    </div>
  );
};

export default SidebarNavigation;
