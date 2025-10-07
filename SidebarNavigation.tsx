import React, { useState } from 'react';
import Link from 'next/link';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '⚙️' },
    { name: 'About', href: '/about', icon: 'ℹ️' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div
        className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}
      >
        <div className='p-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {isOpen ? <span className='w-6 h-6'>✕</span> : <span className='w-6 h-6'>☰</span>}
          </button>
        </div>
        
        <nav className='px-4'>
          {navigationItems.map(item => (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 ${
                  isOpen ? 'justify-start' : 'justify-center'
                }`}
              >
                <span className='text-xl'>{item.icon}</span>
                {isOpen && (
                  <span className='ml-3 text-gray-700 font-medium'>
                    {item.name}
                  </span>
                )}
              </div>
            </Link>
          ))}
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