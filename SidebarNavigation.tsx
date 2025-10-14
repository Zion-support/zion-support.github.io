import React from 'react';
import { User, X } from 'lucide-react';

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: 'Home', href: '/', icon: User },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: User },
];

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}></div>
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700"></div>
        <h2 className="text-xl font-semibold text-white">Navigation</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        ></button
>
          <X size={24} />
        </button>
      </div>
      <nav className="mt-4"></nav>
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white"
          ></a
>
            <item.icon className="mr-3" size={20} />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNavigation;