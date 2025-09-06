
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link

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

  return (;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
