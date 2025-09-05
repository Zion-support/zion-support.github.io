<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useRouter } from "next/router",
import Link from "next/link",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { useWishlist } from "@/hooks/useWishlist",
import { useCart } from '@/context/CartContext',
import { logWarn } from '@/utils/productionLogger',
=======
import React from &quot;react&quot;;
import { useRouter } from &quot;next/router&quot;;
import Link from &quot;next/link&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useWishlist } from &quot;@/hooks/useWishlist&quot;;
import { useCart } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")
=======
    // logWarn(&quot;MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  const navItems = [
    {
      name: &quot;Home&quot;,
      href: &quot;/&quot;,
      icon: Home,
      matches: (path: string) => path === &quot;/&quot;
    },
    {
      name: &quot;Browse&quot;,
      href: &quot;/talent&quot;,
      icon: Search,
      matches: (path: string) => path.startsWith(&quot;/talent&quot;) || path.startsWith(&quot;/categories&quot;) || path.startsWith(&quot;/marketplace&quot;)
    },
    {
      name: &quot;Community&quot;,
      href: &quot;/community&quot;,
      icon: MessageCircle,
      matches: (path: string) => path.startsWith(&quot;/community&quot;) || path.startsWith(&quot;/forum&quot;)
    },
    {
      name: &quot;Wishlist&quot;,
      href: &quot;/wishlist&quot;,
      icon: Heart,
      matches: (path: string) => path.startsWith(&quot;/wishlist&quot;),
      badge: favoritesCount,
      authRequired: true
    },
    {
      name: &quot;Messages&quot;,
      href: &quot;/messages&quot;,
      icon: MessageSquare,
      matches: (path: string) => path.startsWith(&quot;/messages&quot;) || path.startsWith(&quot;/inbox&quot;),
      badge: unreadCount,
      authRequired: true
    },
    {
      name: &quot;Cart&quot;,
      href: &quot;/cart&quot;,
      icon: ShoppingCart,
      matches: (path: string) => path.startsWith(&quot;/cart&quot;),
      badge: cartCount
    },
    {
      name: &quot;Dashboard&quot;,
      href: &quot;/dashboard&quot;,
      icon: User,
      matches: (path: string) => path.startsWith(&quot;/dashboard&quot;),
      authRequired: true
    }
  ],
=======
import React from "react";
import Link from "next/link";

interface MobileBottomNavProps {_unreadCount?: number;}

export function MobileBottomNav(_{_unreadCount = 0}: MobileBottomNavProps) {_const _router = useRouter();
  const { user} = useAuth();
  const _isAuthenticated = !!user;
  const {_items: wishlistItems} = useWishlist(); // Renamed to avoid conflict
  const _favoritesCount = wishlistItems.length;

  const _cartContextValue = useCart(); // Call hook at top level
  let _cartCount = 0;
  if (cartContextValue && cartContextValue.items) {_cartCount = cartContextValue.items.reduce(_(sum, _i) => sum + i.quantity, _0);} else {_// logWarn("MobileBottomNav: Cart data or items not available, _defaulting cartCount to 0.");}

  const _navItems = [
    {_name: "Home", _href: "/", _icon: Home, _matches: (_path: string) => path === "/"},
    {_name: "Browse", _href: "/talent", _icon: Search, _matches: (_path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")},
    {_name: "Community", _href: "/community", _icon: MessageCircle, _matches: (_path: string) => path.startsWith("/community") || path.startsWith("/forum")},
    {_name: "Wishlist", _href: "/wishlist", _icon: Heart, _matches: (_path: string) => path.startsWith("/wishlist"), _badge: favoritesCount, _authRequired: true},
    {_name: "Messages", _href: "/messages", _icon: MessageSquare, _matches: (_path: string) => path.startsWith("/messages") || path.startsWith("/inbox"), _badge: unreadCount, _authRequired: true},
    {_name: "Cart", _href: "/cart", _icon: ShoppingCart, _matches: (_path: string) => path.startsWith("/cart"), _badge: cartCount},
    {_name: "Dashboard", _href: "/dashboard", _icon: User, _matches: (_path: string) => path.startsWith("/dashboard"), _authRequired: true}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Filter items based on auth status
  const _visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

  return (
<<<<<<< HEAD
    <nav className=&quot;md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20&quot;>
      <div className=&quot;flex justify-around items-center h-16&quot;>
        {visibleItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              &quot;flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary&quot;,
              item.matches(router.pathname)
                ? &quot;text-primary&quot;
                : &quot;text-foreground/70 hover:text-foreground&quot;
            )}
          >
            <div className=&quot;relative&quot;>
              <item.icon className=&quot;h-5 w-5 mb-1&quot; aria-hidden=&quot;true&quot; />
              {item.badge && item.badge > 0 && (
                <span className=&quot;absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center&quot;>
=======
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">
      <div className="flex justify-around items-center h-16">
        {_visibleItems.map(item => (
          <Link
            key={item.name}
            href={_item.href}
            aria-label={_item.name}
            className={_cn(
              "flex flex-col items-center justify-center w-full h-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", _item.matches(router.pathname)
                ? "text-primary"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1" aria-hidden="true" />
              {_item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
<<<<<<< HEAD
            <span className=&quot;hidden sm:block text-xs font-medium&quot;>{item.name}</span>
=======
            <span className="hidden sm:block text-xs font-medium">{_item.name}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Link>
        ))}
      </div>
    </nav>
  )
}
