import React from 'react';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Help', href: '/help' },
  { name: 'About', href: '/about' }
];

export default function SidebarNavigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="block py-2 px-4 hover:bg-gray-700 rounded">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
