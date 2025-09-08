import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-white hover:text-zion-cyan transition-colors cursor-pointer"
      >
        <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-black" />
        </div>
        <span className="text-sm font-medium hidden sm:block">{user.name || user.email}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 z-50">
          <div className="py-2">
            {/* User Info */}
            <div className="px-4 py-3 border-b border-gray-800">
              <div className="text-sm font-medium text-white">{user.name || 'User'}</div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
              
              <Link
                to="/notifications"
                className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Bell className="w-4 h-4" />
                Notifications
              </Link>
              
              <Link
                to="/orders"
                className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                Orders
              </Link>
              
              <Link
                to="/settings"
                className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:text-zion-cyan hover:bg-gray-800/30 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-800 pt-1">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};