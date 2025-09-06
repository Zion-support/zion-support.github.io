
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

    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")
  }
  const navItems = [
    {

=======
      name: "Home",
      href: "/",
      icon: Home,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

      matches: (path: string) => path.startsWith("/dashboard"),
      authRequired: true
    }
  ],

  // Filter items based on auth status
  const visibleItems = navItems.filter(item =>
    !item.authRequired || (item.authRequired && isAuthenticated)
  ),

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">
      <div className="flex justify-around items-center h-16">
        {visibleItems.map(item => (
          <Link

                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>;
            <span className='hidden sm:block text-xs font-medium'>;
              {item && item.name}
            </span>;
          </Link>;
        ))}
<<<<<<< HEAD
