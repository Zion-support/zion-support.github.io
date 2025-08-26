
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, MessageSquare, Home, Store, Users, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function MobileMenu({ isOpen, onClose, className }: MobileMenuProps) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();

  const navigationItems = [
    { href: '/', label: t('nav.home', 'Home'), icon: Home, matches: (path: string) => path === '/' },
    { href: '/marketplace', label: t('nav.marketplace', 'Marketplace'), icon: Store, matches: (path: string) => path.startsWith('/marketplace') },
    { href: '/talent', label: t('nav.talent', 'Talent'), icon: Users, matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard') },
    { href: '/categories', label: t('nav.categories', 'Categories'), icon: Store, matches: (path: string) => path.startsWith('/categories') },
    { href: '/equipment', label: t('nav.equipment', 'Equipment'), icon: Store, matches: (path: string) => path.startsWith('/equipment') },
    { href: '/community', label: t('nav.community', 'Community'), icon: Users, matches: (path: string) => path.startsWith('/community') },
    { href: '/services', label: t('nav.services', 'Services'), icon: Store, matches: (path: string) => path.startsWith('/services') },
    { href: '/about', label: t('nav.about', 'About'), icon: Users, matches: (path: string) => path.startsWith('/about') },
    { href: '/contact', label: t('nav.contact', 'Contact'), icon: MessageSquare, matches: (path: string) => path.startsWith('/contact') },
  ];

  if (isAuthenticated) {
    navigationItems.push(
      { href: '/dashboard', label: t('nav.dashboard', 'Dashboard'), icon: Settings, matches: (path: string) => path.startsWith('/dashboard') }
    );
  }

  if (!isOpen) return null;

  return (
    <div className={cn("md:hidden", className)}>
      {/* Mobile menu overlay */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark border-l border-zion-purple/20">
          <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 text-white hover:bg-zion-purple/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation items */}
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.matches(location.pathname);
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-white transition-colors",
                    isActive
                      ? "bg-zion-purple/20 text-zion-cyan border border-zion-purple/40"
                      : "hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-zion-cyan" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
                  <p className="text-xs text-zion-slate-light">{user?.email}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  onClick={onClose}
                  className="block w-full px-4 py-2 text-center bg-zion-purple/20 text-zion-cyan rounded-lg border border-zion-purple/40 hover:bg-zion-purple/30 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={onClose}
                  className="block w-full px-4 py-2 text-center bg-zion-cyan text-zion-blue-dark rounded-lg hover:bg-zion-cyan/90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
