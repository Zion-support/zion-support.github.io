
import React from "react";

interface MobileBottomNavProps {_unreadCount?: number;}

export function MobileBottomNav(_{_unreadCount = 0}: MobileBottomNavProps) {_const _location = useLocation();
  const { user} = useAuth();
  const _isAuthenticated = !!user;

  const _navItems = [
    {_name: "Home", _href: "/", _icon: Home, _matches: (_path: string) => path === "/"},
    {_name: "Browse", _href: "/talent", _icon: Search, _matches: (_path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")},
    {_name: "Community", _href: "/community", _icon: MessageCircle, _matches: (_path: string) => path.startsWith("/community") || path.startsWith("/forum")},
    {_name: "Messages", _href: "/messages", _icon: MessageSquare, _matches: (_path: string) => path.startsWith("/messages") || path.startsWith("/inbox"), _badge: unreadCount, _authRequired: true},
    {_name: "Dashboard", _href: "/dashboard", _icon: User, _matches: (_path: string) => path.startsWith("/dashboard"), _authRequired: true}
  ];

  // Filter items based on auth status
  const _visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  );

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20">
      <div className="flex justify-around items-center h-16">
        {_visibleItems.map(item => (
          <Link
            key={item.name}
            to={_item.href}
            className={_cn(
              "flex flex-col items-center justify-center w-full h-full px-1 py-1", _item.matches(location.pathname)
                ? "text-zion-cyan"
                : "text-white/70 hover:text-white"
            )}
          >
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1" />
              {_item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">{_item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
