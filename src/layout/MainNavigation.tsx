
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from 'react-i18next'
import { useFavorites } from '@/hooks/useFavorites'
import { useCart } from '@/context/CartContext'
import {
  Heart
  MessageSquare
  CreditCard
  ShoppingCart
  Wallet
} from 'lucide-react'
import { LanguageSelector } from '@/components/header/LanguageSelector'

interface MainNavigationProps {
  isAdmin?: boolean
  unreadCount?: number
  className?: string

}
interface MainNavigationProps {
  isAdmin?: boolean
  unreadCount?: number
  className?: string
export function MainNavigation({

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state
  const { user } = useAuth()
  const isAuthenticated = !!user
  const [loginOpen, setLoginOpen] = useState(false)
  const { count } = useFavorites()
  const { items } = useCart()
  const cartCount = items.length
  const router = useRouter(); // Changed from useLocation
  const { t } = useTranslation()
  const handleCartClick = (e: React.MouseEvent,) => {
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
      return;
    }
    setIsMobileMenuOpen(false)
  }
  const baseLinks = [
    {
      key: 'home'
      href: '/'
      matches: (path: string) => path === '/',    }
    {
      key: 'marketplace'
      href: '/marketplace'
      matches: (path: string) => path.startsWith('/marketplace'),    }
    {
      key: 'categories'
      href: '/categories'
      matches: (path: string) => path.startsWith('/categories'),    }
    {
      key: 'talent'
      href: '/talent'
      matches: (path: string) =>
        path.startsWith('/talent') && !path.includes('/talent-dashboard'),    }
    {
      key: 'equipment'
      href: '/equipment'
      matches: (path: string) => path.startsWith('/equipment'),    }
    {
      key: 'community'
      href: '/community'
      matches: (path: string) =>
        path.startsWith('/community') |path.startsWith('/forum')
    }
  ]
  const links = baseLinks.map(link => ({
    ...link
    name: t(`nav.${link.key}`)
  }))
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard'
      name: t('nav.dashboard')
      href: '/dashboard'
      matches: (path: string) =>
        path === '/dashboard' |
        path === '/client-dashboard' |
        path === '/talent-dashboard'
    }) }
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics'
      name: t('nav.analytics')
      href: '/analytics'
      matches: (path: string) => path.startsWith('/analytics')
    }) }
  return (
    <>
      <button
        className='navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary' // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls='main-navbar-collapse'
        aria-label='Toggle navigation'      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <nav
        className={cn('navbar', className)}
        role='navigation'
        aria-label='Main navigation'      >

import Link from "next/link",;
import { useRouter } from "next/router",;
import { useState } from "react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { useTranslation } from "react-i18next",;
import { useFavorites } from "@/hooks/useFavorites",;
import { useCart } from "@/context/CartContext",;
import { Heart, MessageSquare, CreditCard, ShoppingCart, Wallet } from 'lucide-react';
import { LanguageSelector } from '@/components/header/LanguageSelector',;
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card',;
import { MiniCartPreview } from '@/components/cart/MiniCartPreview',;
import { LoginModal } from '@/components/auth/LoginModal',;
interface MainNavigationProps {;
  isAdmin?: boolean,;
  unreadCount?: number,;
  className?: string;
}
;
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false), // Add state;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const [loginOpen, setLoginOpen] = useState(false),;
  const { count } = useFavorites(),;
  const { items } = useCart(),;
  const cartCount = items.length,;
  const router = useRouter(), // Changed from useLocation;
  const { t } = useTranslation(),;
  const handleCartClick = (e: React.MouseEvent) => {;
    if (!isAuthenticated) {;
      e.preventDefault(),;
      setLoginOpen(true),;
      return;
    }
    setIsMobileMenuOpen(false);
  },;
  const baseLinks = [;
    {;
      key: 'home',;
      href: '/',;
      matches: (path: string) => path === '/';
    },;
    {;
      key: 'marketplace',;
      href: '/marketplace',;
      matches: (path: string) => path.startsWith('/marketplace');
    },;
    {;
      key: 'categories',;
      href: '/categories',;
      matches: (path: string) => path.startsWith('/categories');
    },;
    {;
      key: 'talent',;
      href: '/talent',;
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard');
    },;
    {;
      key: 'equipment',;
      href: '/equipment',;
      matches: (path: string) => path.startsWith('/equipment');
    },;
    {;
      key: 'community',;
      href: '/community',;
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum');
    }
  ],;
  const links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) })),;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;
      key: 'dashboard',;
      name: t('nav.dashboard'),;
      href: '/dashboard',;
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard';
    });
  }
;
  // Add admin-only links;
  if (isAdmin) {;
    links.push({;
      key: 'analytics',;
      name: t('nav.analytics'),;
      href: '/analytics',;
      matches: (path: string) => path.startsWith('/analytics');
    });
  }
  
  return (
    <>
      <button
        className="navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-navbar-collapse"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav
        className={cn("navbar", className)}
        role="navigation"
        aria-label="Main navigation"
      >

        <div
          id="main-navbar-collapse"
          className={cn(

          <ul className='navbar-nav flex flex-col md:flex-row md:items-center md:gap-1'>
            {' '}
            {/* Added navbar-nav and flex direction classes */}
            {links.map(link => (
              <li key={link.name} className='nav-item'>
                <Link

          <ul className="navbar-nav flex flex-col md:flex-row md:items-center md:gap-1"> {/* Added navbar-nav and flex direction classes */}
            {links.map((link) => (
              <li key={link.name} className="nav-item">
                <Link 

                  href={link.href}
                  aria-label={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(

                    link.matches(router.pathname)
                      ? 'bg-zion-purple/20 text-zion-cyan'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}                >

                    "nav-link",
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    link.matches(router.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >;

                  {link.name}
                </Link>
              </li>
            ))}

                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {t('nav.cartCart')}
                    {cartCount > 0 && (

                        {activeDropdown === link.key && (;"
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child: unknown (
                              <Link
                                key={child.key}
                                to={child.href}`
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors ${isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''`
}`}
                                onClick={: unknown setIsMobileMenuOpen(false)}
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.href}`
                        className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive(link)
                            ? 'bg-zion-cyan text-white''
                            : 'text-zion-slate-light hover:text-white hover:bg-white/10'`
}`}
                        onClick={: unknown setIsMobileMenuOpen(false)}
                        {link.name}
                      </Link>

                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  >;
                    <ShoppingCart className="w-4 h-4 mr-1" />;
                    {t('nav.cartCart')}
                    {cartCount > 0 && (;
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                        {cartCount}
                      </span>;

                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>

  )
}
;

