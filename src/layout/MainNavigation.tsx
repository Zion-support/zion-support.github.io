
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3, Brain, Shield, Cloud, Zap } from 'lucide-react';

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Services', href: '/services', icon: null },
    { name: 'Talent', href: '/talent', icon: null },
    { name: 'Equipment', href: '/equipment', icon: null },
    { name: 'About', href: '/about', icon: null },
    { name: 'Contact', href: '/contact', icon: null },
  ];

  const serviceItems = [
    { name: 'AI Services', href: '/services/ai', icon: Brain },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud },
    { name: 'IT Consulting', href: '/services/consulting', icon: Briefcase },
  ];

  return (
    <nav className={cn('flex items-center space-x-8', className)}>
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-zion-cyan',
            isActive(item.href)
              ? 'text-zion-cyan'
              : 'text-gray-700'
          )}
        >
          {item.name}
        </Link>
      ))}

      {/* Services Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
        >
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {serviceItems.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-zion-cyan hover:bg-gray-50 transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                {service.icon && <service.icon className="w-4 h-4" />}
                <span>{service.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* User Menu */}
      {isAuthenticated ? (
        <div className="flex items-center space-x-4">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Profile
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-zion-cyan text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zion-cyan-dark transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Admin Panel Link */}
      {isAdmin && (
        <Link
          to="/admin"
          className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
        >
          Admin Panel
        </Link>
      )}
    </nav>
  );
}
