interface MobileBottomNavProps {
  unread_count?: number;
export /**
 * MobileBottomNav - Function description
 */
function MobileBottomNav() {
  const router = use_router ();
  const { user } = use_auth ();
  const is_authenticated = !!user;
  const { items: wishlist_items } = use_wishlist (); // Renamed to avoid conflict;
  const favorites_count = wishlist_items.length;
  const cartContextValue = use_cart (); // Call hook at top level;
  let cart_count = 0;
  // Check condition
if ( {) {
  $2
}

  const nav_items = [;

    {
      name: 'Home'
      href: '/'
      icon: Home
      matches: (path: string) => path === '/',    }
    {


import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import {;
  Home,;
  Search,;
  MessageCircle,;
  Heart,;
  MessageSquare,;
  ShoppingCart,;
  User,;
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';

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

    {
      name: "Browse",
      href: "/talent",
      icon: Search,


    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,


    {
      name: "Wishlist",
      href: "/wishlist",
      icon: Heart,


    },
    {
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,


    },
    {
      name: "Cart",
      href: "/cart",
      icon: ShoppingCart,


    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


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

export function MobileBottomNav(): any ({ unreadCount = 0 }: MobileBottomNavProps) {;
  const router = useRouter();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { items: wishlistItems } = useWishlist(); // Renamed to avoid conflict;
  const favoritesCount = wishlistItems && wishlistItems.length;

  const cartContextValue = useCart(); // Call hook at top level;
  let cartCount = 0;
  if (cartContextValue && cartContextValue.items) {;
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i && i.quantity, 0);  } else {;
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.");
  }

  const navItems = [;
    {;
      name: 'Home',;
      href: '/',;
      icon: Home,;
      matches: (path: string) => path === '/',    },;
    {;
      name: 'Browse',;
      href: '/talent',;
      icon: Search,;
      matches: (path: string) =>;
        path && path.startsWith('/talent') ||;
        path && path.startsWith('/categories') ||;
        path && path.startsWith('/marketplace'),    },;
    {;
      name: 'Community',;
      href: '/community',;
      icon: MessageCircle,;
      matches: (path: string) =>;
        path && path.startsWith('/community') || path && path.startsWith('/forum'),    },;
    {;
      name: 'Wishlist',;
      href: '/wishlist',;
      icon: Heart,;
      matches: (path: string) => path && path.startsWith('/wishlist'),      badge: favoritesCount,;
      authRequired: true,;
    },;
    {;
      name: 'Messages',;
      href: '/messages',;
      icon: MessageSquare,;
      matches: (path: string) =>;
        path && path.startsWith('/messages') || path && path.startsWith('/inbox'),      badge: unreadCount,;
      authRequired: true,;
    },;
    {;
      name: 'Cart',;
      href: '/cart',;
      icon: ShoppingCart,;
      matches: (path: string) => path && path.startsWith('/cart'),;
      badge: cartCount,    },;
    {;
      name: 'Dashboard',;
      href: '/dashboard',;
      icon: User,;
      matches: (path: string) => path && path.startsWith('/dashboard'),;
      authRequired: true,;
    },;
  ];
  // Filter items based on auth status;
  const visibleItems = navItems && navItems.filter(;
    item => !item && item.authRequired || (item && item.authRequired && isAuthenticated);
  );

              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              item && item.matches(router && router.pathname)

                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}>;
            <div className='relative'>;
              <item && item.icon className='h-5 w-5 mb-1' aria-hidden='true' />;
              {item && item.badge && item && item.badge > 0 && (;
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
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

                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>;
            <span className='hidden sm:block text-xs font-medium'>;
              {item && item.name}
            </span>;
          </Link>;
        ))}


;
}


      </div>;
    </nav>;
  );
}
