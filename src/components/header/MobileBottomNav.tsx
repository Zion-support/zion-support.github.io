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

  // Filter items based on auth status
  const _visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  );

  return (
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
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className="hidden sm:block text-xs font-medium">{_item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
