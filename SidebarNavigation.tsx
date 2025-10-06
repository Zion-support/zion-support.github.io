import { Home, Menu, Settings, User, X } from 'lucide-react';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
      <div
        className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}
      >
        <div className='p-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 ${
                isOpen ? 'justify-start' : 'justify-center'
              }`}
      {/* Main Content */}
      <div className='flex-1 p-8'>
        <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
        <p className='text-gray-600 mt-2'>Welcome to your dashboard</p>
              className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 ${
                isOpen ? 'justify-start' : 'justify-center'
              }`}
      {/* Main Content */}
      <div className='flex-1 p-8'>
        <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
        <p className='text-gray-600 mt-2'>Welcome to your dashboard</p>