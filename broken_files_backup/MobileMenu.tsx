<<<<<<< HEAD:src/components/header/MobileMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/20" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-zion-blue-dark shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-zion-blue">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-zion-purple transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 space-y-4">
=======
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "@/components/ModeToggle";
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
      matches: (path: string) => path.startsWith('/talent')
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
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      icon: MessageCircle,
      matches: (path: string) => path.startsWith('/contact')
    },
    {
      key: 'faq',
      href: '/faq',
      icon: MessageCircle,
      matches: (path: string) => path.startsWith('/faq')
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/MobileMenu.tsx
          <Link
            to="/"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-zion-purple transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}