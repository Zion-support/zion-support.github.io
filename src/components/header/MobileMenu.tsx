<<<<<<< HEAD

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export interface MobileMenuProps {
  unreadCount?: number;
  onClose: () => void;
}

export function MobileMenu({ unreadCount = 0, onClose }: MobileMenuProps) {
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { t } = useTranslation();

  const baseItems = [
    {
      key: 'home',
      href: '/',
      icon: Home,
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      icon: Search,
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'talent',
      href: '/talent',
      icon: User,
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'about',
      href: '/about',
      icon: User,
      matches: (path: string) => path === '/about'
    },
    {
      key: 'contact',
      href: '/contact',
      icon: MessageSquare,
      matches: (path: string) => path === '/contact'
    },
    {
      key: 'faq',
      href: '/faq',
      icon: MessageCircle,
      matches: (path: string) => path === '/faq'
    },
    {
      key: 'post_job',
      href: '/post-job',
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith('/post-job'),
      authRequired: true
    },
    {
      key: 'messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) => path.startsWith('/messages') || path.startsWith('/inbox'),
      badge: unreadCount,
      authRequired: true
    },
    {
      key: 'dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true
    }
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
              "flex items-center px-6 py-3 text-base font-medium",
              item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
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
=======
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  unreadCount?: number;
}

export function MobileMenu({ isOpen, onClose, unreadCount = 0 }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-background border-l border-zion-slate/20 p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-zion-slate-light">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zion-slate/10 transition-colors"
          >
            <svg className="w-6 h-6 text-zion-slate-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-4">
          <a href="/" className="block py-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
            Home
          </a>
          <a href="/contact" className="block py-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
            Contact
          </a>
          {unreadCount > 0 && (
            <div className="flex items-center justify-between py-3">
              <span className="text-zion-slate-light">Messages</span>
              <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
