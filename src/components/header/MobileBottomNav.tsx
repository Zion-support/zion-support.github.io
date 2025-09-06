<<<<<<< HEAD
<<<<<<<< HEAD:src/components/header/MobileBottomNav.tsx

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { useWishlist } from "@/hooks/useWishlist",
import { useCart } from '@/context/CartContext',
import { logWarn } from '@/utils/productionLogger',
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'

<<<<<<< HEAD
========
<<<<<<< HEAD
import React from 'react';
import { use_router } from 'next / router';
import Link from 'next / link';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
import { use_wishlist } from '@/hooks / use_wishlist';
import { use_cart } from '@/context / CartContext';
import { log_warn } from '@/utils / production_logger';
import {
  Home,
  Search,
  MessageCircle,
  Heart,
  MessageSquare,
  ShoppingCart,
  User,
} from 'lucide-react';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/MobileBottomNav.tsx
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
<<<<<<<< HEAD:src/components/header/MobileBottomNav.tsx

  const nav_items = [;

========
    cart_count = cartContextValue.items.reduce ((sum, i) => sum + i.quantity, 0) } else {
    // log_warn ("MobileBottomNav: Cart data or items not available, defaulting cart_count to 0.");
  }
  const nav_items = [;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/MobileBottomNav.tsx
    {
      name: 'Home'
      href: '/'
      icon: Home
      matches: (path: string) => path === '/',    }
    {
<<<<<<<< HEAD:src/components/header/MobileBottomNav.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/MobileBottomNav.tsx
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
<<<<<<<< HEAD:src/components/header/MobileBottomNav.tsx
=======
interface MobileBottomNavProps {
  unreadCount?: number
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")
  }
  const navItems = [
    {
<<<<<<< HEAD

    {
      name: "Browse",
      href: "/talent",
      icon: Search,
=======
>>>>>>>     // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")
  }
  const navItems = [
    {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      matches: (path: string) => path === "/"
    },
      matches: (path: string) => path === '/',    },
>>>>>>>     {
      name: "Browse",
      href: "/talent",
      icon: Search,
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
    },
=======
=======
      name: "Home",
      href: "/",
      icon: Home,
<<<<<<< HEAD
      matches: (path: string) => path === "/"
    },
=======
<<<<<<< HEAD
      matches: (path: string) => path === '/',    },
=======
      matches: (path: string) => path === "/"
    },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    {
      name: "Browse",
      href: "/talent",
      icon: Search,
<<<<<<< HEAD
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
    },
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      matches: (path: string) =>
        path.startsWith('/talent') ||
        path.startsWith('/categories') ||
        path.startsWith('/marketplace'),    },
<<<<<<< HEAD
>>>>>>>     {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    },
      matches: (path: string) =>
        path.startsWith('/community') || path.startsWith('/forum'),    },
>>>>>>>     {
      name: "Wishlist",
      href: "/wishlist",
      icon: Heart,
      matches: (path: string) => path.startsWith("/wishlist"),
      badge: favoritesCount,
      authRequired: true
      matches: (path: string) => path.startsWith('/wishlist'),      badge: favoritesCount,
      authRequired: true,
>>>>>>>     },
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")
  }
  const navItems = [
    {

      name: "Home",
      href: "/",
      icon: Home,

    {
      name: "Browse",
      href: "/talent",
      icon: Search,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {
      name: "Wishlist",
      href: "/wishlist",
      icon: Heart,

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    },
>>>>>>>     {
=======
=======
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
    },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
<<<<<<< HEAD
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    },
=======
<<<<<<< HEAD
      matches: (path: string) =>
        path.startsWith('/community') || path.startsWith('/forum'),    },
=======
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    {
      name: "Wishlist",
      href: "/wishlist",
      icon: Heart,
<<<<<<< HEAD
      matches: (path: string) => path.startsWith("/wishlist"),
      badge: favoritesCount,
      authRequired: true
=======
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/wishlist'),      badge: favoritesCount,
      authRequired: true,
=======
      matches: (path: string) => path.startsWith("/wishlist"),
      badge: favoritesCount,
      authRequired: true
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    },
    {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,
<<<<<<< HEAD
<<<<<<< HEAD

    },
=======
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),
      badge: unreadCount,
      authRequired: true
=======
<<<<<<< HEAD
      matches: (path: string) =>
        path.startsWith('/messages') || path.startsWith('/inbox'),      badge: unreadCount,
      authRequired: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),
      badge: unreadCount,
      authRequired: true
<<<<<<< HEAD
      matches: (path: string) =>
        path.startsWith('/messages') || path.startsWith('/inbox'),      badge: unreadCount,
      authRequired: true,
>>>>>>>     },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      name: "Cart",
      href: "/cart",
      icon: ShoppingCart,
<<<<<<< HEAD
<<<<<<< HEAD

    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,

=======
      matches: (path: string) => path.startsWith("/cart"),
      badge: cartCount
    },
=======
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/cart'),
      badge: cartCount,    },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      matches: (path: string) => path.startsWith("/cart"),
      badge: cartCount
    },
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/cart'),
      badge: cartCount,    },
>>>>>>>     {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      matches: (path: string) => path.startsWith('/dashboard'),
      authRequired: true,
    },
  ]
  // Filter items based on auth status
  const visibleItems = navItems.filter(
    item => !item.authRequired || (item.authRequired && isAuthenticated)
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      matches: (path: string) => path.startsWith("/dashboard"),
      authRequired: true
    }
  ],

<<<<<<< HEAD

<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  // Filter items based on auth status
  const visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link
<<<<<<< HEAD
<<<<<<< HEAD

                  {item.badge > 9 ? '9+' : item.badge}
                </span>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                   {item.badge > 9 ? '9+' : item.badge}
ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/MobileBottomNav.tsx
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
<<<<<<<< HEAD:src/components/header/MobileBottomNav.tsx

              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              item && item.matches(router && router.pathname)

========
  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20'>;
      <div className='flex justify-around items-center h-16'>;
        {visibleItems && visibleItems.map(item => (;
          <Link
            key={item && item.name}
            href={item && item.href}
            aria-label={item && item.name}
            className={cn(
              'flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              item && item.matches(router && router.pathname)
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/MobileBottomNav.tsx
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground'
            )}>;
            <div className='relative'>;
              <item && item.icon className='h-5 w-5 mb-1' aria-hidden='true' />;
              {item && item.badge && item && item.badge > 0 && (;
                <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>;
                  {item && item.badge > 9 ? '9+' : item && item.badge}
                </span>;
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>>                   {item.badge > 9 ? '9+' : item.badge}
>>>>>>>                 </span>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              )}
            </div>;
            <span className='hidden sm:block text-xs font-medium'>;
              {item && item.name}
            </span>;
=======
import React from "react",;
import { useRouter } from "next/router",;
import Link from "next/link",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { useWishlist } from "@/hooks/useWishlist",;
import { useCart } from '@/context/CartContext',;
import { logWarn } from '@/utils/productionLogger',;
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react';
;
interface MobileBottomNavProps {;
  unreadCount?:number,;
}
;
export function MobileBottomNav({ unreadCount = 0 } MobileBottomNavProps) {;
  const router = useRouter(),;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const { items:wishlistItems } = useWishlist(), // Renamed to avoid conflict;
  const favoritesCount = wishlistItems.length,;
;
  const cartContextValue = useCart(), // Call hook at top level;
  let cartCount = 0,;
  if (cartContextValue && cartContextValue.items) {;
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0),;
  } else {;
    // logWarn("MobileBottomNav:Cart data or items not available, defaulting cartCount to 0."),;
  }
;
  const navItems = [;
    {;
      name:"Home",;
      href:"/",;
      icon:Home,;
      matches:(path:string) => path === "/";
    },;
    {;
      name:"Browse",;
      href:"/talent",;
      icon:Search,;
      matches:(path:string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace");
    },;
    {;
      name:"Community",;
      href:"/community",;
      icon:MessageCircle,;
      matches:(path:string) => path.startsWith("/community") || path.startsWith("/forum");
    },;
    {;
      name:"Wishlist",;
      href:"/wishlist",;
      icon:Heart,;
      matches:(path:string) => path.startsWith("/wishlist"),;
      badge:favoritesCount,;
      authRequired:true;
    },;
    {;
      name:"Messages",;
      href:"/messages",;
      icon:MessageSquare,;
      matches:(path:string) => path.startsWith("/messages") || path.startsWith("/inbox"),;
      badge:unreadCount,;
      authRequired:true;
    },;
    {;
      name:"Cart",;
      href:"/cart",;
      icon:ShoppingCart,;
      matches:(path:string) => path.startsWith("/cart"),;
      badge:cartCount;
    },;
    {;
      name:"Dashboard",;
      href:"/dashboard",;
      icon:User,;
      matches:(path:string) => path.startsWith("/dashboard"),;
      authRequired:true;
    }
  ],;
;
  // Filter items based on auth status;
  const visibleItems = navItems.filter(item => ;
    !item.authRequired || (item.authRequired && isAuthenticated);
  ),;
;
  return (;
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">;
      <div className="flex justify-around items-center h-16">;
        {visibleItems.map(item => (;
          <Link;
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(;
              "flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",;
              item.matches(router.pathname);
                ? "text-primary";
                :"text-foreground/70 hover:text-foreground";
            )}
          >;
            <div className="relative">;
              <item.icon className="h-5 w-5 mb-1" aria-hidden="true" />;
              {item.badge && item.badge > 0 && (;
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                  {item.badge > 9 ? '9+' :item.badge}
                </span>;
              )}
            </div>;
            <span className="hidden sm:block text-xs font-medium">{item.name}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </Link>;
        ))}
<<<<<<<< HEAD:src/components/header/MobileBottomNav.tsx
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/MobileBottomNav.tsx
      </div>;
    </nav>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:src/components/header/MobileBottomNav.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      name: 'Browse',
      href: '/talent',
      icon: Search,
      matches: (path: string) =>;
        path.starts_with ('/talent') ||;
        path.starts_with ('/categories') ||;
        path.starts_with ('/marketplace'),    },
    {
      name: 'Community',
      href: '/community',
      icon: MessageCircle,
      matches: (path: string) =>;
        path.starts_with ('/community') || path.starts_with ('/forum'),    },
    {
      name: 'Wishlist',
      href: '/wishlist',
      icon: Heart,
      matches: (path: string) => path.starts_with ('/wishlist'),      badge: favorites_count,
      auth_required: true,
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: MessageSquare,
      matches: (path: string) =>;
        path.starts_with ('/messages') || path.starts_with ('/inbox'),      badge: unread_count,
      auth_required: true,
    },
    {
      name: 'Cart',
      href: '/cart',
      icon: ShoppingCart,
      matches: (path: string) => path.starts_with ('/cart'),
      badge: cart_count,    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: User,
      matches: (path: string) => path.starts_with ('/dashboard'),
      auth_required: true,
    },
  ];
  // Filter items based on auth status;
  const visible_items = nav_items.filter (
    item => !item.auth_required || (item.auth_required && is_authenticated));
  return (
    <nav className='md:hidden fixed bottom - 0 left - 0 right - 0 z - 50 bg - card / 90 backdrop - blur - md border - t border - primary / 20'>;
      <div className='flex justify - around items - center h - 16'>;
        {visible_items.map (item => (
          <Link;
            key={item.name}
            href={item.href}
            aria - label={item.name}
            className={cn (
              'flex flex - col items - center justify - center w - full h - full px - 1 py - 1 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary',
              item.matches (router.pathname);
                ? 'text - primary';
                : 'text - foreground / 70 hover:text - foreground')}          >;
            <div className='relative'>;
              <item.icon className='h - 5 w - 5 mb - 1' aria - hidden='true' />;
              {item.badge && item.badge > 0 && (
                <span className='absolute -top - 2 -right - 2 bg - primary text - primary - foreground text - xs rounded - full h - 4 w - 4 flex items - center justify - center'>;
                  {item.badge > 9 ? '9+' : item.badge}
                </span>)}
            </div>;
            <span className='hidden sm:block text - xs font - medium'>;
              {item.name}
            </span>;
          </Link>))}
      </div>;
    </nav>);
}
=======
  ),;}
 import {;
  {;
  {;
  Home, Search, MessageCircle, Heart, MessageSquare,  ShoppingCart, User ;
}from 'lucide-react' interface MobileBottomNavProps {;
  unreadCount?: number ;
}export function MobileBottomNav ({;
  unreadCount = 0 ;
}: MobileBottomNavProps) {;
  const router = useRouter ();
const {;
  user ;
}= useAuth ();
const isAuthenticated = !!user;
const {;
  items: wishlistItems ;
}= useWishlist (), //Renamed to avoid conflict const favoritesCount = wishlistItems.length;
const cartContextValue = useCart (), //Call hook at top level let cartCount = 0;
if (cartContextValue && cartContextValue.items) {;
  cartCount = cartContextValue.items.reduce ( (sum,  i) => sum + i.quantity, 0) ;
}else {;
  ;
}const navItems = [ {;
  name: "Home";";
href: "/";
icon: Home;";
matches: (path: string) => path === "/" ;
};
{";
  name: "Browse";";
href: "/talent";
icon: Search;";
matches: (path: string) => path.startsWith ("/talent") || path.startsWith ("/categories") || path.startsWith ("/marketplace") ;
};
{";
  name: "Community";";
href: "/community";
icon: MessageCircle;";
matches: (path: string) => path.startsWith ("/community") || path.startsWith ("/forum") ;
};
{";
  name: "Wishlist";";
href: "/wishlist";
icon: Heart;";
matches: (path: string) => path.startsWith ("/wishlist");
badge: favoritesCount;
authRequired: true ;
};
{";
  name: "Messages";";
href: "/messages";
icon: MessageSquare;";
matches: (path: string) => path.startsWith ("/messages") || path.startsWith ("/inbox");
badge: unreadCount;
authRequired: true ;
};
{";
  name: "Cart";";
href: "/cart";
icon: ShoppingCart;";
matches: (path: string) => path.startsWith ("/cart");
badge: cartCount ;
};
{";
  name: "Dashboard";";
href: "/dashboard";
icon: User;";
matches: (path: string) => path.startsWith ("/dashboard");
authRequired: true ;
}];
return ({';
  item.badge > 9 ? '9+' : item.badge ;
}</span>) ;
}</div> </Link>) ) ;
}</div> </nav>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/header/MobileBottomNav.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className="hidden sm:block text-xs font-medium">{item.name}</span>
          </Link>
        ))}
<<<<<<< HEAD
      </div>
    </nav>
  )
}
<<<<<<< HEAD
=======
;
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </div>;
    </nav>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
