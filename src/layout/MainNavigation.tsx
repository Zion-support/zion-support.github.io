
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
  HoverCard
  HoverCardTrigger
  HoverCardContent
} from '@/components/ui/hover-card'
import { MiniCartPreview } from '@/components/cart/MiniCartPreview'
import { LoginModal } from '@/components/auth/LoginModal'; import { LanguageSelector } from '@/components/header/LanguageSelector'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { LoginModal } from '@/components/auth/LoginModal'
>>>>>>> interface MainNavigationProps {
  isAdmin?: boolean
  unreadCount?: number
  className?: string
  isAdmin = false
  unreadCount = 0
  className
}: MainNavigationProps) {
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
    setIsMobileMenuOpen (false);
  }
  const base_links = [;
    {
      key: 'home'
      href: '/'
      matches: (path: string) => path === '/',    }
    {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
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
import Link from "next/link",
import { useRouter } from "next/router",
import { useState } from "react",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { useTranslation } from "react-i18next",
import { useFavorites } from "@/hooks/useFavorites",
import { useCart } from "@/context/CartContext",
import { Heart, MessageSquare, CreditCard, ShoppingCart, Wallet } from 'lucide-react'
import { LanguageSelector } from '@/components/header/LanguageSelector',
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card',
import { MiniCartPreview } from '@/components/cart/MiniCartPreview',
import { LoginModal } from '@/components/auth/LoginModal',
interface MainNavigationProps {
  isAdmin?: boolean,
  unreadCount?: number,
  className?: string
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

interface MainNavigationProps {;
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;

export function MainNavigation(): any ({;
  isAdmin = false,;
  unreadCount = 0,;
  className,;
}: MainNavigationProps) {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state;
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const [loginOpen, setLoginOpen] = useState(false);
  const { count } = useFavorites();
  const { items } = useCart();
  const cartCount = items && items.length;
  const router = useRouter(); // Changed from useLocation;
  const { t } = useTranslation();

  const handleCartClick = (e: React && React.MouseEvent,) => {;
    if (!isAuthenticated) {;
      e && e.preventDefault();
      setLoginOpen(true);
      return;
    }
    setIsMobileMenuOpen(false);
  };

  const baseLinks = [;
    {;
      key: 'home',;
      href: '/',;
      matches: (path: string) => path === '/',    },;
    {;
      key: 'marketplace',;
      href: '/marketplace',;
      matches: (path: string) => path && path.startsWith('/marketplace'),    },;
    {;
      key: 'categories',;
      href: '/categories',;
      matches: (path: string) => path && path.startsWith('/categories'),    },;
    {;
      key: 'talent',;
      href: '/talent',;
      matches: (path: string) =>;
        path && path.startsWith('/talent') && !path && path.includes('/talent-dashboard'),    },;
    {;
      key: 'equipment',;
      href: '/equipment',;
      matches: (path: string) => path && path.startsWith('/equipment'),    },;
    {;
      key: 'community',;
      href: '/community',;
      matches: (path: string) =>;
        path && path.startsWith('/community') || path && path.startsWith('/forum'),;
    },;
  ];

  const links = baseLinks && baseLinks.map(link => ({;
    ...link,;
    name: t(`nav.${link && link.key}`),;
  }));
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links && links.push({;
      key: 'dashboard',;
      name: t('nav && nav.dashboard'),;
      href: '/dashboard',;
      matches: (path: string) =>;
        path === '/dashboard' ||;
        path === '/client-dashboard' ||;
        path === '/talent-dashboard',;
    });  }

  // Add admin-only links;
  if (isAdmin) {;
    links && links.push({;
      key: 'analytics',;
      name: t('nav && nav.analytics'),;
      href: '/analytics',;
      matches: (path: string) => path && path.startsWith('/analytics'),;
    });  }


  return (
    <>;
      <button
        className='navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary' // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls='main-navbar-collapse';
        aria-label='Toggle navigation'      >;
        <span className='navbar-toggler-icon'></span>;
      </button>;
      <nav
        className={cn("navbar", className)}
        role="navigation"
        aria-label="Main navigation"
      >
>>>>>>>         <div
          id="main-navbar-collapse"
          className={cn(
          <ul className='navbar-nav flex flex-col md:flex-row md:items-center md:gap-1'>
            {' '}
            {/* Added navbar-nav and flex direction classes */}
            {links.map(link => (
              <li key={link.name} className='nav-item'>
                <Link
            "navbar-collapse",
            { "open": isMobileMenuOpen },
            "w-full md:flex md:w-auto", // Handles visibility and desktop layout
            !isMobileMenuOpen && "hidden" // Explicitly hide when not open and on mobile
          )}
        >
          <ul className="navbar-nav flex flex-col md:flex-row md:items-center md:gap-1"> {/* Added navbar-nav and flex direction classes */}
            {links.map((link) => (
              <li key={link.name} className="nav-item">
                <Link 
>>>>>>>                   href={link.href}
ursor/fix-website-loading-errors-and-merge-6662
        <div
          id='main-navbar-collapse'
          className={cn(



                  href={link.href}
>>>>>>>                   aria-label={link.name}

                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'nav-link'
                    'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
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
>>>>>>>                   {link.name}
ursor/fix-website-loading-errors-and-merge-6662
                  {link.name}
>>>>>>>                 </Link>
              </li>
                  className={cn(;
                    'nav-link',;
                    'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
                    link && link.matches(router && router.pathname);
                      ? 'bg-zion-purple/20 text-zion-cyan';
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                  )}                >;
                  {link && link.name}
                </Link>;
              </li>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            ))}
            {/* Wishlist link */}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link
                  href='/wishlist'
                  aria-label='Wishlist'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'nav-link'
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                    router.pathname === '/wishlist'
                      ? 'bg-zion-purple/20 text-zion-cyan'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}                >
                  <Heart className='w-4 h-4' />
                  {count > 0 && (
                    <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                      {count}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
            {/* Wallet link */}
            {isAuthenticated && (;
              <li className='nav-item'>;
                <Link
                  href='/wallet'
                  aria-label='Wallet'
                  onClick={() => setIsMobileMenuOpen(false)}

                  className={cn(;
                    'nav-link',;
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
                    router && router.pathname === '/wallet';
                      ? 'bg-zion-purple/20 text-zion-cyan';
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                  )}                >;
                  <Wallet className='w-4 h-4' />;
                </Link>;
              </li>;

            )}
            {/* Messages link */}
            {isAuthenticated && (;
              <li className='nav-item'>;
                <Link
                  href='/messages'
                  aria-label='Messages'
                  onClick={() => setIsMobileMenuOpen(false)}

                  className={cn(;
                    'nav-link',;
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
                    router && router.pathname === '/messages';
                      ? 'bg-zion-purple/20 text-zion-cyan';
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                  )}                >;
                  <MessageSquare className='w-4 h-4' />;
                  {unreadCount > 0 && (;
                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>;

                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
            {/* Cart icon with badge */}
            <li className='nav-item'>;
              <HoverCard openDelay={100}>;
                <HoverCardTrigger asChild>;
                  <Link
                    href='/cart'
                    aria-label={t('nav && nav.cart')}
                    onClick={handleCartClick}
                    className={cn(

                      'nav-link',
                      'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',                      router && router.pathname.startsWith('/cart')

                        ? 'bg-zion-purple/20 text-zion-cyan'
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                    ),}
>>>>>>>                   >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {t('nav.cartCart')}
                    {cartCount > 0 && (
}`}
                          {link.name}'`
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`}  />                        </button>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                         {activeDropdown === link.key && (;"
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child: unknown (
                              <Link
                          {link.name}'`;
                          <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === link.key ? 'rotate - 180' : ''}`}  />                        </button>;
                        {active_dropdown === link.key && (";
                          <div className="ml - 4 mt - 2 space - y-1">;
                            {link.children.map ((child: unknown (
                              <Link;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                                key={child.key}
                                to={child.href}`;
                                className={`block px - 4 py - 2 text - sm text - zion - slate - light hover:text - white hover:bg - white / 10 rounded - md transition - colors ${is_active (child) ? 'text - zion - cyan bg - zion - cyan / 10' : ''`;
}`}

        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}";
        className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors";
";
        {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}      </button>;

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isMobileMenuOpen && ;
          <motion&& motion.div
            initial = {

  { opacity: 0,
  x: '100%'
}}
            animate = {

  { opacity: 1,
  x: 0
}}
            exit = {

  { opacity: 0,
  x: '100%'
}}
            transition={{ duration: 0 && 0.3 }}"
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50"
"
            <div className="p-6">";
              <div className="flex justify-between items-center mb-8">";
                <h2 className="text-xl font-bold text-white">Menu</h2>;
                <button
                  onClick={() => setIsMobileMenuOpen(false)}";
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors";
";
                  <X className="w-6 h-6"  />                </button>;
              </div>;
";
              <div className="space-y-2">;
                {baseLinks && baseLinks.map(link: unknown <div key={link && link.key}>;
                    {link && link.children ? (;
                      <div>;
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link && link.key ? null : link && link.key)}`;
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${isActive(link);
                              ? 'bg-zion-cyan text-white'';
                              : 'text-zion-slate-light hover:text-white hover:bg-white/10'`;
}`}

                          {link && link.name}'`;
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link && link.key ? 'rotate-180' : ''}`}  />                        </button>;

                        {activeDropdown === link && link.key && (;";
                          <div className="ml-4 mt-2 space-y-1">;
                            {link && link.children.map((child: unknown (;
                              <Link
                                key={child && child.key}
                                to={child && child.href}`
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors ${isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''`
}`}
                                onClick={: unknown setIsMobileMenuOpen(false)}

                                {child && child.name}
                              </Link>;

                            ))}
                          </div>
                        )}

                      </div>;
                    ) : (;
                      <Link
                        to={link && link.href}`

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
>>>>>>>                     )}
ursor/fix-website-loading-errors-and-merge-6662
                    )}
>>>>>>>                   </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <div className='flex items-center gap-2 mt-4 md:mt-0 md:ml-auto'>
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
;
>>>>>>> 
;
}

  )
}
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 