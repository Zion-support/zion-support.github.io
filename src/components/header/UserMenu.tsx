import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
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
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
          <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
          <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
          <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">Sign Out</button>
        </div>
      )}
    </div>
  );
};