import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  if (!user) {
    return (
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
        <span className="hidden sm:block text-sm font-medium">
          {user.name || user.email}
        </span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <User size={16} className="mr-3" />
            Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Settings size={16} className="mr-3" />
            Settings
          </Link>
          <Link
            to="/notifications"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Bell size={16} className="mr-3" />
            Notifications
          </Link>
          <Link
            to="/cart"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={16} className="mr-3" />
            Cart
          </Link>
          <hr className="my-1" />
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
          >
            <LogOut size={16} className="mr-3" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;