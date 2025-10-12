import React from \'react\';
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
      <div className="fixed inset-0 bg-blackbg-opacity-50" onClick="{onClose}" / />
      <div className="relative flex flex-col w-64 h-full bg-gray-900shadow-xl" />
        <div className="flex items-center justify-betweenp-4" />
          <span className="text-xl font-boldtext-white"  >Menu</span>
          <button
            onClick="{onClose}"
            className="text-gray-300 hover:text-whitetransition-colors" />
            <X className="w-6h-6" / />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6space-y-2" />
          {navigationItems.map((item, index) => (
            <Link
              key="{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lgtransition-colors"
              onClick="{onClose}"
              />{item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}