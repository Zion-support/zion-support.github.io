import React, { useState } from 'react';

const SidebarNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Profile', href: '/profile', icon: '👤' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg`}>
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? '←' : '→'}
        </button>
      </div>
      <nav className="mt-4">
        {navigationItems.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center p-3 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span className="text-xl mr-3">{item.icon}</span>
            {isOpen && <span>{item.name}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNavigation;
