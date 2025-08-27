
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainNavigationProps {
  onNavigate?: () => void;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const baseLinks = [
    { key: 'home', href: '/', name: 'Home' },
    { key: 'about', href: '/about', name: 'About' },
    { key: 'services', href: '/services', name: 'Services' },
    { key: 'solutions', href: '/solutions', name: 'Solutions' },
    { key: 'contact', href: '/contact', name: 'Contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className={`flex space-x-8 ${className || ''}`}>
      {baseLinks.map((link) => (
        <Link
          key={link.key}
          to={link.href}
          className={`text-sm font-medium transition-colors hover:text-blue-600 ${
            isActive(link.href)
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-700'
          }`}
        >
          {link.name}
        </Link>
      ))}
      
      {isAdmin && (
        <Link
          to="/admin"
          className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
        >
          Admin
        </Link>
      )}
      
      {unreadCount > 0 && (
        <Link
          to="/notifications"
          className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors relative"
        >
          Notifications
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        </Link>
      )}
    </nav>
  );
}
