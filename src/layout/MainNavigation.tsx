
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Users, Settings, HelpCircle, FileText } from 'lucide-react';

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className = '' }: MainNavigationProps) {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
            isActive(item.href) ? 'text-zion-cyan' : 'text-zion-slate-light'
          }`}
        >
          {item.label}
        </Link>
      ))}
      
      {isAdmin && (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'admin' ? null : 'admin')}
            className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Admin</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'admin' ? 'rotate-180' : ''}`} />
          </button>
          
          {activeDropdown === 'admin' && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-zion-blue-light/30">
              <Link
                to="/admin/dashboard"
                className="block px-4 py-2 text-sm text-zion-slate hover:bg-zion-blue-light/10"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/users"
                className="block px-4 py-2 text-sm text-zion-slate hover:bg-zion-blue-light/10"
              >
                Users
              </Link>
              <Link
                to="/admin/settings"
                className="block px-4 py-2 text-sm text-zion-slate hover:bg-zion-blue-light/10"
              >
                Settings
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
