
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { useWishlist } from '@/hooks/useWishlist'
import { useCart } from '@/context/CartContext'
import { logWarn } from '@/utils/productionLogger'
import {
  Home
  Search
  MessageCircle
  Heart
  MessageSquare
  ShoppingCart
  User
} from 'lucide-react'
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'
interface MobileBottomNavProps {
  unreadCount?: number
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const router = useRouter();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { items: wishlistItems } = useWishlist(); // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length
  const cartContextValue = useCart(); // Call hook at top level
  let cartCount = 0
  if (cartContextValue && cartContextValue.items) {
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0) } else {
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { useWishlist } from "@/hooks/useWishlist",
import { useCart } from '@/context/CartContext',
import { logWarn } from '@/utils/productionLogger',
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'

interface MobileBottomNavProps {
  unreadCount?: number
}

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const router = useRouter(),
  const { user } = useAuth(),
  const isAuthenticated = !!user,
  const { items: wishlistItems } = useWishlist(), // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length,

  const cartContextValue = useCart(), // Call hook at top level
  let cartCount = 0,
  if (cartContextValue && cartContextValue.items) {
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0)
  } else {
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")
  }
  const navItems = [
    {
      name: 'Home'
      href: '/'
      icon: Home
      matches: (path: string) => path === '/',    }
    {
      name: 'Browse'
      href: '/talent'
      icon: Search
      matches: (path: string) =>
        path.startsWith('/talent') |
        path.startsWith('/categories') |
        path.startsWith('/marketplace'),    }
    {
      name: 'Community'
      href: '/community'
      icon: MessageCircle
      matches: (path: string) =>
        path.startsWith('/community') |path.startsWith('/forum'),    }
    {
      name: 'Wishlist'
      href: '/wishlist'
      icon: Heart
      matches: (path: string) => path.startsWith('/wishlist'),      badge: favoritesCount
      authRequired: true
    }
    {
      name: 'Messages'
      href: '/messages'
      icon: MessageSquare
      matches: (path: string) =>
        path.startsWith('/messages') |path.startsWith('/inbox'),      badge: unreadCount
      authRequired: true
    }
    {
      name: 'Cart'
      href: '/cart'
      icon: ShoppingCart
      matches: (path: string) => path.startsWith('/cart')
      badge: cartCount,    }
    {
      name: 'Dashboard'
      href: '/dashboard'
      icon: User
      matches: (path: string) => path.startsWith('/dashboard')
      authRequired: true
    }
  ]
  // Filter items based on auth status
  const visibleItems = navItems.filter(
    item => !item.authRequired |(item.authRequired && isAuthenticated)
  )
      name: "Home",
      href: "/",
      icon: Home,
      matches: (path: string) => path === "/"
    },
      matches: (path: string) => path === '/',    },
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {
      name: "Browse",
      href: "/talent",
      icon: Search,
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
    },
      matches: (path: string) =>
        path.startsWith('/talent') ||
        path.startsWith('/categories') ||
        path.startsWith('/marketplace'),    },
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    },
      matches: (path: string) =>
        path.startsWith('/community') || path.startsWith('/forum'),    },
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {
      name: "Wishlist",
      href: "/wishlist",
      icon: Heart,
      matches: (path: string) => path.startsWith("/wishlist"),
      badge: favoritesCount,
      authRequired: true
      matches: (path: string) => path.startsWith('/wishlist'),      badge: favoritesCount,
      authRequired: true,
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    },
    {
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),
      badge: unreadCount,
      authRequired: true
      matches: (path: string) =>
        path.startsWith('/messages') || path.startsWith('/inbox'),      badge: unreadCount,
      authRequired: true,
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    },
    {
      name: "Cart",
      href: "/cart",
      icon: ShoppingCart,
      matches: (path: string) => path.startsWith("/cart"),
      badge: cartCount
    },
      matches: (path: string) => path.startsWith('/cart'),
      badge: cartCount,    },
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true,
    },
  ]
  // Filter items based on auth status
  const visibleItems = navItems.filter(
    item => !item.authRequired || (item.authRequired && isAuthenticated)
  )
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      matches: (path: string) => path.startsWith("/dashboard"),
      authRequired: true
    }
  ],

  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

              item.matches(router.pathname)
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}          >
            <div className='relative'>
              <item.icon className='h-5 w-5 mb-1' aria-hidden='true' />
              {item.badge && item.badge > 0 && (
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              item.matches(router.pathname)
                ? "text-primary"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1" aria-hidden="true" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
import React from "react",;
import { useRouter } from "next/router",;
import Link from "next/link",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { useWishlist } from "@/hooks/useWishlist",;
import { useCart } from '@/context/CartContext',;
import { logWarn } from '@/utils/productionLogger',;
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react';
interface MobileBottomNavProps {;
  unreadCount?: number;
}
;
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {;
  const router = useRouter(),;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const { items: wishlistItems } = useWishlist(), // Renamed to avoid conflict;
  const favoritesCount = wishlistItems.length,;
  const cartContextValue = useCart(), // Call hook at top level;
  let cartCount = 0,;
  if (cartContextValue && cartContextValue.items) {;
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0);
  } else {;
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.");
  }
;
  const navItems = [;
    {;
      name: "Home",;
      href: "/",;
      icon: Home,;
      matches: (path: string) => path === "/";
    },;
    {;
      name: "Browse",;
      href: "/talent",;
      icon: Search,;
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
    {;
      name: "Community",;
      href: "/community",;
      icon: MessageCircle,;
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
    {;
      name: "Wishlist",;
      href: "/wishlist",;
      icon: Heart,;
      matches: (path: string) => path.startsWith("/wishlist"),;
      badge: favoritesCount,;
      authRequired: true;
    },;
    {;
      name: "Messages",;
      href: "/messages",;
      icon: MessageSquare,;
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge: unreadCount,;
      authRequired: true;
    },;
    {;
      name: "Cart",;
      href: "/cart",;
      icon: ShoppingCart,;
      matches: (path: string) => path.startsWith("/cart"),;
      badge: cartCount;
    },;
    {;
      name: "Dashboard",;
      href: "/dashboard",;
      icon: User,;
      matches: (path: string) => path.startsWith("/dashboard"),;
      authRequired: true;
    }
  ],;
  // Filter items based on auth status;
  const visibleItems = navItems.filter(item =>;
    !item.authRequired || (item.authRequired && isAuthenticated);
  );
  return (;
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">;
      <div className="flex justify-around items-center h-16">;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(;
              "flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
              item.matches(router.pathname);
                ? "text-primary";
                : "text-foreground/70 hover:text-foreground";
            )}
          >;
            <div className="relative">;
              <item.icon className="h-5 w-5 mb-1" aria-hidden="true" />;
              {item.badge && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">;
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className="hidden sm:block text-xs font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </div>;
    </nav>;
  );
}
;
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
