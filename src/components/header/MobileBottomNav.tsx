
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useFavorites } from "@/hooks/useFavorites";
import { useCart } from "@/context/CartContext";
import {
  Home,
  Search,
  MessageCircle,
  Heart,
  MessageSquare,
  ShoppingCart,
  User
} from "lucide-react";

export function MobileBottomNav() {
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { count: favoritesCount } = useFavorites();
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      matches: (path: string) => path === "/"
    },
    {
      name: "Browse",
      href: "/talent",
      icon: Search,
      matches: (path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")
    },
    {
      name: "Community",
      href: "/community",
      icon: MessageCircle,
      matches: (path: string) => path.startsWith("/community") || path.startsWith("/forum")
    },
    {
      name: "Wishlist",
      href: "/wishlist",
      icon: Heart,
      matches: (path: string) => path.startsWith("/wishlist"),
      badge: favoritesCount,
      authRequired: true
    },
    {
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,
      matches: (path: string) => path.startsWith("/messages") || path.startsWith("/inbox"),
      badge: unreadCount,
      authRequired: true
    },
    {
      name: "Cart",
      href: "/cart",
      icon: ShoppingCart,
      matches: (path: string) => path.startsWith("/cart"),
      badge: cartCount
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: User,
      matches: (path: string) => path.startsWith("/dashboard"),
      authRequired: true
    }
  ];

  const handleMenuClick = (e: React.MouseEvent, item: any) => {
    if (item.action === 'menu') {
      e.preventDefault();
      // Trigger mobile menu open
      const menuButton = document.querySelector('[aria-label="Toggle mobile menu"]') as HTMLButtonElement;
      if (menuButton) {
        menuButton.click();
      }
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark border-t border-zion-purple/20">
      <div className="flex justify-around items-center h-16 px-4">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={(e) => handleMenuClick(e, item)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              location.pathname === item.href
                ? 'text-zion-cyan'
                : 'text-zion-slate-light hover:text-white'
            }`}
          >
            {item.action === 'menu' ? (
              <item.icon className="h-6 w-6" />
            ) : (
              <Link to={item.href} className="flex flex-col items-center justify-center h-full">
                <item.icon className="h-6 w-6" />
              </Link>
            )}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}

;
}

      </div>;
    </nav>;
  );
}

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
            </div>
            <span className="text-xs font-medium">{item.name}</span>
          </Link>))}
      </div>
    </nav>);
}
;
