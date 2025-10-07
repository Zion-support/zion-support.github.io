<<<<<<< HEAD
// import { Home, Menu, Settings, User, X } from 'lucide-react';
=======
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
<<<<<<< HEAD
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
  ];

  return (
    <div className='flex h-screen bg-gray-100'>
=======
    { name: 'Dashboard', href: '/', icon: '🏠' },
    { name: 'Profile', href: '/profile', icon: '👤' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen">
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
      {/* Sidebar */}
      <div
        className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}
      >
<<<<<<< HEAD
        <div className='p-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {isOpen ? <span className='w-6 h-6'>✕</span> : <span className='w-6 h-6'>☰</span>}
          </button>
        </div>
        
        <nav className='px-4 space-y-2'>
          {navigationItems.map(item => (
=======
        <div className="p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
          </button>
        </div>
        
        <nav className="px-4">
          {navigationItems.map((item) => (
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 ${
                isOpen ? 'justify-start' : 'justify-center'
              }`}
            >
<<<<<<< HEAD
              <span className='w-5 h-5'>📄</span>
              {isOpen && <span className='ml-3 font-medium'>{item.name}</span>}
=======
              <span className="text-lg">{item.icon}</span>
              {isOpen && <span className="ml-3">{item.name}</span>}
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
            </Link>
          ))}
        </nav>
      </div>
<<<<<<< HEAD
      
      {/* Main Content */}
      <div className='flex-1 p-8'>
        <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
        <p className='text-gray-600 mt-2'>Welcome to your dashboard</p>
=======

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your dashboard</p>
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SidebarNavigation;
=======
export default SidebarNavigation;
>>>>>>> cb79024a938ec4cdfb9bf2295cb3ecd71e1ace22
