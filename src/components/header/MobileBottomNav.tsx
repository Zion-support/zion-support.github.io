
import { useWishlist } from "@/hooks/useWishlist";
import { useCart  } from '@/context/CartContext';
import { logWarn } from '@/utils/productionLogger';
import { Home, Search, MessageCircle, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
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

export function MobileBottomNav({ unreadCount;
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
export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  const router = useRouter()
  const { user } = useAuth()
  const isAuthenticated = !!user
  const { items: wishlistItems } = useWishlist(); // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length
  const cartContextValue = useCart(); // Call hook at top level
  let cartCount = 0
  if (cartContextValue && cartContextValue.items) {
    cartCount = cartContextValue.items.reduce((sum, i) => sum + i.quantity, 0) } else {
    // logWarn("MobileBottomNav: Cart data or items not available, defaulting cartCount to 0.")
  }
  const navItems = [
origin/cursor/automate-test-improve-and-merge-code-2533
    {
      name: 'Home'
      href: '/'
      icon: Home
      matches: (path: string) => path === '/',    }
    {



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
;
      </div>
    </nav>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
