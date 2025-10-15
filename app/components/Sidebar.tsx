import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      href: '/ai-services',
      description: 'Artificial Intelligence Solutions'
    },
    {
      name: 'IT Services',
      href: '/it-services',
      description: 'Information Technology Solutions'
    },
    {
      name: '5G Solutions',
      href: '/5g-solutions',
      description: 'Next-Generation 5G Technology'
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-8">
            <div className="px-3 py-2 text-sm font-medium text-gray-400">Services</div>
            <div className="space-y-1">
              {serviceCategories.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}