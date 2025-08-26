
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, User, Menu } from 'lucide-react';

export function MobileBottomNav() {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Menu', href: '#', icon: Menu, action: 'menu' },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const handleMenuClick = (e: React.MouseEvent, item: any) => {
    if (item.action === 'menu') {
      e.preventDefault();
      // Trigger mobile menu open
      const menuButton = document.querySelector('[aria-label="Toggle mobile menu"]') as HTMLButtonElement;
      if (menuButton) {
        menuButton.click();
      }
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark border-t border-zion-purple/20">
      <div className="flex justify-around items-center h-16 px-4">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={(e) => handleMenuClick(e, item)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              location.pathname === item.href
                ? 'text-zion-cyan'
                : 'text-zion-slate-light hover:text-white'
            }`}
          >
            {item.action === 'menu' ? (
              <item.icon className="h-6 w-6" />
            ) : (
              <Link to={item.href} className="flex flex-col items-center justify-center h-full">
                <item.icon className="h-6 w-6" />
              </Link>
            )}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
