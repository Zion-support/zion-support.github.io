
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import Search from 'lucide-react/dist/esm/icons/search';
import User from 'lucide-react/dist/esm/icons/user';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Home from 'lucide-react/dist/esm/icons/home';
import Store from 'lucide-react/dist/esm/icons/store';
import Users from 'lucide-react/dist/esm/icons/users';
import Settings from 'lucide-react/dist/esm/icons/settings';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa

export interface MobileMenuProps {
  unreadCount?: number;
  onClose: () => void;
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigationItems = [
    { href: '/', label: t('nav.home'), icon: Home, matches: (path: string) => path === '/' },
    { href: '/marketplace', label: t('nav.marketplace'), icon: Store, matches: (path: string) => path.startsWith('/marketplace') },
    { href: '/talent', label: t('nav.talent'), icon: Users, matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard') },
    { href: '/categories', label: t('nav.categories'), icon: Store, matches: (path: string) => path.startsWith('/categories') },
    { href: '/equipment', label: t('nav.equipment'), icon: Store, matches: (path: string) => path.startsWith('/equipment') },
    { href: '/community', label: t('nav.community'), icon: Users, matches: (path: string) => path.startsWith('/community') },
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
  ];

  const navItems = baseItems.map(item => ({
    ...item,
    name:
      item.key === 'explore'
        ? t('general.explore')
        : t(`nav.${item.key}`)
  }));

  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  );

  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu" title="Close menu">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="space-y-1">
        {visibleItems.map(item => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center px-6 py-3 text-base font-medium transition-colors", // Added transition-colors
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background", // Added focus state, assuming mobile menu background is --background
              item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan" // Active state - already good
                : "text-slate-200 hover:bg-zion-purple/30 hover:text-white" // Default and Hover states
            )}
            onClick={onClose}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
