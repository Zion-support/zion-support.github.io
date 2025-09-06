<<<<<<< HEAD
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useWishlist } from '@/hooks/useWishlist';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useCart } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import {
  Home,
  Search,
  MessageCircle,
  Heart,
  MessageSquare,
  ShoppingCart,
  User,;
} from 'lucide-react';

=======
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface MobileBottomNavProps {
  unreadCount?: number;

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const router = useRouter();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { items: wishlistItems } = useWishlist(); // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length;

  const cartContextValue = useCart(); // Call hook at top level
  let cartCount = 0;
  if (cartContextValue && cartContextValue.items) {
<<<<<<< HEAD
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0);
=======
    cartCount = cartContextValue.items.reduce((sum, i,) => sum + i.quantity, 0)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  } else {
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.");
  }

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
<<<<<<< HEAD
      matches: (path: string) => path === '/',
=======
      matches: (path: string,) => path === "/"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    },
    {
      name: 'Browse',
      href: '/talent',
      icon: Search,
<<<<<<< HEAD
      matches: (path: string) =>
        path.startsWith('/talent') ||
        path.startsWith('/categories') ||
        path.startsWith('/marketplace'),
=======
      matches: (path: string,) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    },
    {
      name: 'Community',
      href: '/community',
      icon: MessageCircle,
<<<<<<< HEAD
      matches: (path: string) =>
        path.startsWith('/community') || path.startsWith('/forum'),
=======
      matches: (path: string,) => path.startsWith("/community") || path.startsWith("/forum")
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    },
    {
      name: 'Wishlist',
      href: '/wishlist',
      icon: Heart,
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/wishlist'),
=======
      matches: (path: string,) => path.startsWith("/wishlist"),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      badge: favoritesCount,
      authRequired: true,
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
<<<<<<< HEAD
      matches: (path: string) =>
        path.startsWith('/messages') || path.startsWith('/inbox'),
=======
      matches: (path: string,) => path.startsWith("/messages") || path.startsWith("/inbox"),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      badge: unreadCount,
      authRequired: true,
    },
    {
      name: 'Cart',
      href: '/cart',
      icon: ShoppingCart,
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/cart'),
      badge: cartCount,
=======
      matches: (path: string,) => path.startsWith("/cart"),
      badge: cartCount
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: User,
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true,
    },
  ];
=======
      matches: (path: string,) => path.startsWith("/dashboard"),
      authRequired: true
    }
  ],
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  // Filter items based on auth status
  const visibleItems = navItems.filter(
    item => !item.authRequired || (item.authRequired && isAuthenticated)
  );

  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>
      <div className='flex justify-around items-center h-16'>
        {visibleItems.map(item => (
          <Link
<<<<<<< HEAD
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              item.matches(router.pathname)
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}
=======
            key = {item.name,}
            href = {item.href,}
            aria-label = {item.name,}
            className = {cn(
              "flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              item.matches(router.pathname)
                ? "text-primary"
                : "text-foreground/70 hover:text-foreground"
            ),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          >
            <div className='relative'>
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />
              {item.badge && item.badge > 0 && (
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className='hidden sm:block text-xs font-medium'>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
