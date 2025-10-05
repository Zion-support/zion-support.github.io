import { Home, Menu, Settings, User, X } from 'lucide-react';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
<<<<<<< HEAD

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
=======
import { Home, User, Settings } from 'lucide-react';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
<<<<<<< HEAD
      <div
        className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}
      >
        <div className='p-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
=======
<div className={`${isOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300`}>
        <div className="p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? '←' : '→'}
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
          </button>
        </div>
        <nav className='px-4'>
          {navigationItems.map(item => (
            <Link
              key={item.name}
              to={item.href}
<<<<<<< HEAD
              className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 ${
                isOpen ? 'justify-start' : 'justify-center'
              }`}
=======
className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
            >
              <item.icon className='w-6 h-6' />
              {isOpen && <span className='ml-3'>{item.name}</span>}
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

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
<p className="text-gray-600 mt-2">Welcome to your dashboard</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      </div>
    </div>
  );
};
export default SidebarNavigation;
