<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { ModeToggle  } from '@/components/ModeToggle';
import { useTranslation } from 'react-i18next';
export interface MobileMenuProps {
  unreadCount?: number;
  onClose: () => void;
  openLoginModal: (returnToPath: string) => void, // Added from plan
}

// Define protected routes - consistent with ResponsiveNavigation.tsx and middleware.ts
// These are routes that should trigger the login modal if accessed while unauthenticated.
const protectedRoutes = null;
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.
name: item.key === 'explore' ? t('general.explore') : t(`nav.${item.key}`)})),  )
}
  )
}
;
import Link from 'next/link',;
import { useRouter } from 'next/router',;
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { ModeToggle } from '@/components/ModeToggle',;
import { useTranslation } from 'react-i18next',;
export interface MobileMenuProps {;
  unreadCount?: number,;
  onClose: () => void,;
  openLoginModal: (returnToPath: string) => void, // Added from plan;
}
;
// Define protected routes - consistent with ResponsiveNavigation.tsx and middleware.ts;
// These are routes that should trigger the login modal if accessed while unauthenticated.;
const protectedRoutes = [;
  '/categories/talent/equipment/partners/tutorials/case-studies/post-job', // Already marked as authRequired, but good to be explicit if used elsewhere;
  '/messages',  // Already marked as authRequired;
  '/dashboard', // Already marked as authRequired;
  // Add any specific sub-routes if necessary;
],;
function isProtectedRoute(href: string): boolean {;
  // Also check against the item's own authRequired flag if present;
  return protectedRoutes.some(route => href.startsWith(route));
}
=======
import React, { useState } from 'react';
import { _Link, useLocation } from 'react-router-dom';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import User from 'lucide-react/dist/esm/icons/user';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Home from 'lucide-react/dist/esm/icons/home';
import Store from 'lucide-react/dist/esm/icons/store';
import Users from 'lucide-react/dist/esm/icons/users';
import Settings from 'lucide-react/dist/esm/icons/settings';
import { _useAuth } from '../../hooks/useAuth';
import { _useTranslation } from 'react-i18next';
import { _cn } from '../../lib/utils';
import { _Button } from '../../components/ui/button';

import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Icon } from 'lucide-react';
export function MobileMenu({ className }) {
    const { user, isAuthenticated } = useAuth();
    const _location = useLocation();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const _toggleMenu = () => setIsOpen(!isOpen);
    const _navigationItems = [
        { href: '/', label: t('nav.home'), icon: Home, matches: (path) => path === '/' },
        { href: '/marketplace', label: t('nav.marketplace'), icon: Store, matches: (path) => path.startsWith('/marketplace') },
        { href: '/talent', label: t('nav.talent'), icon: Users, matches: (path) => path.startsWith('/talent') && !path.includes('/talent-dashboard') },
        { href: '/categories', label: t('nav.categories'), icon: Store, matches: (path) => path.startsWith('/categories') },
        { href: '/equipment', label: t('nav.equipment'), icon: Store, matches: (path) => path.startsWith('/equipment') },
        { href: '/community', label: t('nav.community'), icon: Users, matches: (path) => path.startsWith('/community') },
    ];
    if (isAuthenticated) {
        navigationItems.push({ href: '/dashboard', label: t('nav.dashboard'), icon: Settings, matches: (path) => path.startsWith('/dashboard') });
    }
    return (<div className={cn("md:hidden", className)}>
      {/* Mobile menu button */}
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2 text-white hover:bg-zion-purple/20" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
        {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
      </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function MobileMenu({ unreadCount = 0, onClose, openLoginModal }: MobileMenuProps) {
  const router = useRouter(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  const { t } = useTranslation(),

  const baseItems = [
    {
      key: 'home',
      href: '/',
      icon: Home,
      matches: (path: string) => path === '/'},
    {
      key: 'explore',
      href: '/talent',
      icon: Search,
      matches: (path: string) =>
        path.startsWith('/talent') ||
        path.startsWith('/categories') ||
        path.startsWith('/marketplace')},
    {
      key: 'community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) =>
        path.startsWith('/community') || path.startsWith('/forum')},
    {
      key: 'post_job',
      href: '/post-job',
      icon: BriefcaseIcon,
      matches: (path: string) => path.startsWith('/post-job'),
      authRequired: true},
    {
      key: 'messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) =>
        path.startsWith('/messages') || path.startsWith('/inbox'),
      badge: unreadCount,
      authRequired: true},
    {
      key: 'dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true}],

  const navItems = baseItems.map((item) => ({
    ...item,
    name: item.key === 'explore' ? t('general.explore') : t(`nav.${item.key}`)})),

  // Filter items based on auth status
  const visibleItems = navItems.filter(
    (item) => !item.authRequired || (item.authRequired && isAuthenticated)),

  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold text-foreground">Menu</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close menu"
          title="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-1">
        {visibleItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(;
              'flex items-center px-6 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
              item.matches(router.pathname);
                ? 'bg-primary/20 text-primary border-l-4 border-primary';
                : 'text-foreground hover:bg-primary/10 hover:text-primary')}
            onClick={(e) => {;
              const routeIsProtected = item.authRequired || isProtectedRoute(item.href),;
              if (!isAuthenticated && routeIsProtected) {;
                e.preventDefault(),;
                // Update URL to include returnTo, then open modal;
                router.push({ pathname: '/auth/login', query: { returnTo: item.href } }, undefined, { shallow: true });
                openLoginModal(item.href);
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.;
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.;
              }
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClose(), // Close mobile menu on any click
            }}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-6 px-6">
        <ModeToggle />
      </div>
    </div>
  )
<<<<<<< HEAD
}
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            {/* User section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zion-purple/20">
              {isAuthenticated ? (<div className="space-y-3">
                  <div className="flex items-center gap-3 px-4 py-2">
                    <User className="h-5 w-5 text-zion-cyan"/>
                    <span className="text-white font-medium">
                      {user?.email || 'User'}
                    </span>
                  </div>
                  <Link to="/messages" onClick={toggleMenu} className="flex items-center gap-3 px-4 py-2 text-white hover:text-zion-cyan transition-colors">
                    <MessageSquare className="h-5 w-5"/>
                    <span>Messages</span>
                  </Link>
                  <Link to="/profile" onClick={toggleMenu} className="flex items-center gap-3 px-4 py-2 text-white hover:text-zion-cyan transition-colors">
                    <Settings className="h-5 w-5"/>
                    <span>Profile</span>
                  </Link>
                </div>) : (<div className="space-y-3">
                  <Link to="/login" onClick={toggleMenu} className="block w-full px-4 py-2 text-center bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors">
                    {t('auth.login')}
                  </Link>
                  <Link to="/signup" onClick={toggleMenu} className="block w-full px-4 py-2 text-center border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors">
                    {t('auth.signup')}
                  </Link>
                </div>)}
            </div>
          </div>
        </div>)}
    </div>);
}
}
;

name: item.key === 'explore' ? t ('general.explore') : t (`nav.${item.key}`)})),  );
}
  );
}

}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
