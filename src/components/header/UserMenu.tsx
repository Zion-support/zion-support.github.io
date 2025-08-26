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

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 text-white hover:text-zion-cyan transition-colors"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-black" />
        </div>
        <span className="sr-only">Open user menu</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="User Menu"
          className="absolute right-0 mt-2 w-48 rounded-md border border-zion-blue-light bg-zion-blue-dark shadow-lg z-50"
        >
          <ul className="py-2 text-sm text-zion-slate-light">
            <li>
              <Link to="/dashboard" className="block px-4 py-2 hover:text-zion-cyan" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile" className="block px-4 py-2 hover:text-zion-cyan" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/saved-talents" className="block px-4 py-2 hover:text-zion-cyan" onClick={() => setIsOpen(false)}>
                Saved Talents
              </Link>
            </li>
            <li>
              <Link to="/wallet" className="block px-4 py-2 hover:text-zion-cyan" onClick={() => setIsOpen(false)}>
                Wallet
              </Link>
            </li>
            <li>
              <Link to="/orders" className="block px-4 py-2 hover:text-zion-cyan" onClick={() => setIsOpen(false)}>
                Order History
              </Link>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:text-zion-cyan" onClick={handleLogout}>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};