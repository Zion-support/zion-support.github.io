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
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
        Home
      </Link>
      <Link to="/services" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Services
      </Link>
      <Link to="/solutions" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
        Solutions
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
        Contact
      </Link>
      <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Pricing
      </Link>
      <Link to="/blog" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Blog
      </Link>
    </nav>
  );
}
