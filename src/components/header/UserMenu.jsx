import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut, Bell, MessageSquare, Shield, CreditCard, HelpCircle } from 'lucide-react';

export function UserMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
    setIsOpen(false);
  };

  const menuItems = [
    {
      name: 'Profile',
      href: '/profile',
      icon: User,
      description: 'Manage your account'
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Settings,
      description: 'View your projects'
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
      description: 'Check your inbox'
    },
    {
      name: 'Notifications',
      href: '/notifications',
      icon: Bell,
      description: 'Manage alerts'
    },
    {
      name: 'Security',
      href: '/security',
      icon: Shield,
      description: 'Privacy & security'
    },
    {
      name: 'Billing',
      href: '/billing',
      icon: CreditCard,
      description: 'Payment methods'
    },
    {
      name: 'Help',
      href: '/help',
      icon: HelpCircle,
      description: 'Get support'
    }
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
          </span>
        </div>
        <span className="hidden sm:block text-sm font-medium">
          {user?.name || user?.email || 'User'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
          {/* User Info Header */}
          <div className="p-4 border-b border-zion-purple/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div>
                <p className="text-white font-medium">
                  {user?.name || 'User'}
                </p>
                <p className="text-zion-slate-light text-sm">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-4 py-3 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4 mr-3 text-zion-cyan" />
                <div className="flex-1">
                  <span className="font-medium">{item.name}</span>
                  <p className="text-xs text-zion-slate-light">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Logout */}
          <div className="p-4 border-t border-zion-purple/20">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4 mr-3" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
