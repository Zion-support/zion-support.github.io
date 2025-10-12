import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean,
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <div className="{`fixed" inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`} />
      <div className="fixed inset-0 bg-blackbg-opacity-50" onClick="{onClose}" />
      <div className="relative flex flex-col w-64h-full bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold text-white"  >Menu</span>
          <button
            onClick="{onClose}"
            className="text-gray-300 hover:text-white transition-colors"
           />
            <X className="w-6h-6" />
          </button>
        </div>
        <nav className="flex-1 px-4py-6space-y-2" />
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block px-4py-2text-gray-300 hover:text-whitehover:bg-gray-800 rounded-lg transition-colors"
              onClick="{onClose}"
              />{item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}