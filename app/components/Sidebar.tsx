<<<<<<< HEAD
import React from 'react';
=======

import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean,
 void

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
<<<<<<< HEAD
    <div className="{`fixed" inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`} />
      <div className="fixed inset-0 bg-blackbg-opacity-50" onClick="{onClose}"  />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <span className="text-xl font-bold text-white"  >Menu</span>
          <button
            onClick="{onClose}"
            className="text-gray-300 hover:text-white transition-colors" />
            <X className="w-5 h-5ml-2" />
          </button>
        </div>
        <nav className="w-5 h-5ml-2" />
          {navigationItems.map((item, index) => (
            <Link
              key="{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              onClick="{onClose}"
              />{item.name}
            </Link>
          ))}
        </nav>
      </div>
  );
}
=======
          <span className="text-xl font-boldtext-white">Menu</span>
 (
            
              key="{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lgtransition-colors"
{item.name}
          ))}
    
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
