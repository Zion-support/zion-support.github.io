import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { MessageSquare, Zap, Users, Settings } from 'lucide-react';

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      label: 'Home',
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      label: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      label: 'Services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'solutions',
      href: '/solutions',
      label: 'Solutions',
      matches: (path: string) => path.startsWith('/solutions')
    },
    {
      key: 'about',
      href: '/about',
      label: 'About',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      label: 'Contact',
      matches: (path: string) => path.startsWith('/contact')
    }
  ];

  const adminLinks = [
    {
      key: 'admin',
      href: '/admin',
      label: 'Admin',
      icon: Settings,
      matches: (path: string) => path.startsWith('/admin')
    },
    {
      key: 'users',
      href: '/admin/users',
      label: 'Users',
      icon: Users,
      matches: (path: string) => path.startsWith('/admin/users')
    }
  ];

  const allLinks = isAdmin ? [...baseLinks, ...adminLinks] : baseLinks;

  return (
    <nav className={cn('flex items-center space-x-6', className)}>
      {allLinks.map((link) => {
        const isActive = link.matches(location.pathname);
        const Icon = link.icon;

        return (
          <Link
            key={link.key}
            to={link.href}
            className={cn(
              'relative px-3 py-2 text-sm font-medium transition-all duration-300 group',
              isActive
                ? 'text-zion-cyan'
                : 'text-gray-300 hover:text-white'
            )}
          >
            <span className="flex items-center space-x-2">
              {Icon && <Icon className="h-4 w-4" />}
              <span>{link.label}</span>
              {link.key === 'marketplace' && unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-zion-cyan rounded-full animate-pulse" />
              )}
            </span>
            
            {isActive && (
              <div className="absolute inset-0 bg-zion-cyan/10 rounded-lg -z-10" />
            )}
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </Link>
        );
      })}

      {/* Special action buttons */}
      {isAuthenticated && (
        <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/10">
          <Link
            to="/messages"
            className="relative p-2 text-gray-300 hover:text-zion-cyan transition-colors duration-300"
          >
            <MessageSquare className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-zion-cyan text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}