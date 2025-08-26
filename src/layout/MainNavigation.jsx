import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3, Brain, Shield, Cloud, Zap } from 'lucide-react';

export function MainNavigation({ isAdmin = false, unreadCount = 0, className = '' }) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      name: 'Home',
      matches: (path) => path === '/'
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path) => path.startsWith('/services')
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      name: 'Contact',
      matches: (path) => path.startsWith('/contact')
    }
  ];

  const isActive = (link) => link.matches(location.pathname);

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {baseLinks.map((link) => (
        <Link
          key={link.key}
          to={link.href}
          className={`text-sm font-medium transition-colors hover:text-blue-600 ${
            isActive(link) ? 'text-blue-600' : 'text-gray-700'
          }`}
        >
          {link.name}
        </Link>
      ))}
      
      {isAuthenticated && (
        <div className="flex items-center space-x-4">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Profile
          </Link>
        </div>
      )}
      
      {!isAuthenticated && (
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
