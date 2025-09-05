import Link from &quot;next/link&quot;;
import { useRouter } from &quot;next/router&quot;;
import { useState } from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
import { useFavorites } from &quot;@/hooks/useFavorites&quot;;
import { useCart } from &quot;@/context/CartContext&quot;;
import { Heart, MessageSquare, CreditCard, ShoppingCart, Wallet } from 'lucide-react'
import { LanguageSelector } from '@/components/header/LanguageSelector';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';
import { LoginModal } from '@/components/auth/LoginModal';

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const [loginOpen, setLoginOpen] = useState(false);
  const { count } = useFavorites();
  const { items } = useCart();
  const cartCount = items.length;
  const router = useRouter(); // Changed from useLocation
  const { t } = useTranslation();

  const handleCartClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);
      return;
    }
    setIsMobileMenuOpen(false);
  };

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    }
  ];

  const links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics')
    });
  }
  
  return (
    <>
      <button
        className=&quot;navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary&quot; // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls=&quot;main-navbar-collapse&quot;
        aria-label=&quot;Toggle navigation&quot;
      >
        <span className=&quot;navbar-toggler-icon&quot;></span>
      </button>
      <nav
        className={cn(&quot;navbar&quot;, className)}
        role=&quot;navigation&quot;
        aria-label=&quot;Main navigation&quot;
      >
        <div
          id=&quot;main-navbar-collapse&quot;
          className={cn(
            &quot;navbar-collapse&quot;,
            { &quot;open&quot;: isMobileMenuOpen },
            &quot;w-full md:flex md:w-auto&quot;, // Handles visibility and desktop layout
            !isMobileMenuOpen && &quot;hidden&quot; // Explicitly hide when not open and on mobile
          )}
        >
          <ul className=&quot;navbar-nav flex flex-col md:flex-row md:items-center md:gap-1&quot;> {/* Added navbar-nav and flex direction classes */}
            {links.map((link) => (
              <li key={link.name} className=&quot;nav-item&quot;>
                <Link 
                  href={link.href}
                  aria-label={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    &quot;nav-link&quot;,
                    &quot;inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary&quot;,
                    link.matches(router.pathname)
                      ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                      : &quot;text-white hover:bg-zion-purple/10 hover:text-zion-cyan&quot;
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Wishlist link */}
            {isAuthenticated && (
              <li className=&quot;nav-item&quot;>
                <Link 
                  href=&quot;/wishlist&quot;
                  aria-label=&quot;Wishlist&quot;
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    &quot;nav-link&quot;,
                    &quot;relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary&quot;,
                    router.pathname === &quot;/wishlist&quot;
                      ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                      : &quot;text-white hover:bg-zion-purple/10 hover:text-zion-cyan&quot;
                  )}
                >
                  <Heart className=&quot;w-4 h-4&quot; />
                  {count > 0 && (
                    <span className=&quot;absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center&quot;>
                      {count}
                    </span>
                  )}
                </Link>
              </li>
            )}

            {/* Wallet link */}
            {isAuthenticated && (
              <li className=&quot;nav-item&quot;>
                <Link 
                  href=&quot;/wallet&quot;
                  aria-label=&quot;Wallet&quot;
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    &quot;nav-link&quot;,
                    &quot;relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary&quot;,
                    router.pathname === &quot;/wallet&quot;
                      ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                      : &quot;text-white hover:bg-zion-purple/10 hover:text-zion-cyan&quot;
                  )}
                >
                  <Wallet className=&quot;w-4 h-4&quot; />
                </Link>
              </li>
            )}

            {/* Messages link */}
            {isAuthenticated && (
              <li className=&quot;nav-item&quot;>
                <Link 
                  href=&quot;/messages&quot;
                  aria-label=&quot;Messages&quot;
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    &quot;nav-link&quot;,
                    &quot;relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary&quot;,
                    router.pathname === &quot;/messages&quot;
                      ? &quot;bg-zion-purple/20 text-zion-cyan&quot;
                      : &quot;text-white hover:bg-zion-purple/10 hover:text-zion-cyan&quot;
                  )}
                >
                  <MessageSquare className=&quot;w-4 h-4&quot; />
                  {unreadCount > 0 && (
                    <span className=&quot;absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center&quot;>
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </Link>
              </li>
            )}

            {/* Cart icon with badge */}
            <li className=&quot;nav-item&quot;>
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href=&quot;/cart&quot;
                    aria-label={t('nav.cart')}
                    onClick={handleCartClick}
                    className={cn(
                      'nav-link',
                      'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      router.pathname.startsWith('/cart')
                        ? 'bg-zion-purple/20 text-zion-cyan'
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                    )}
                  >
                    <ShoppingCart className=&quot;w-4 h-4 mr-1&quot; />
                    {t('nav.cart', 'Cart')}
                    {cartCount > 0 && (
                      <span className=&quot;absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center&quot;>
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <div className=&quot;flex items-center gap-2 mt-4 md:mt-0 md:ml-auto&quot;>
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
