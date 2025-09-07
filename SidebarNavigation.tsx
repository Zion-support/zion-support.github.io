import React, { useState } from 'react';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Profile', href: '/profile', icon: '👤' },
    { name: 'Settings', href: '/settings', icon: '⚙️' }
  ];

  return (
    <div className="flex">
      <div className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}>
        <div className="p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
        
        <nav className="mt-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl mr-3">{item.icon}</span>
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarNavigation;