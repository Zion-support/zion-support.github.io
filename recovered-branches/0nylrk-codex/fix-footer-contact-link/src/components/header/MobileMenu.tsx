

export interface MobileMenuProps {_unreadCount?: number;
  onClose: () => void;}

export function MobileMenu(_{_unreadCount = 0, _onClose}: MobileMenuProps) {_const _location = useLocation();
  const { user} = useAuth();
  const _isAuthenticated = !!user;
  
  const _navItems = [
    {_name: "Home", _href: "/", _icon: Home, _matches: (_path: string) => path === "/"},
    {_name: "Browse", _href: "/talent", _icon: Search, _matches: (_path: string) => path.startsWith("/talent") || path.startsWith("/categories") || path.startsWith("/marketplace")},
    {_name: "Community", _href: "/community", _icon: MessageCircle, _matches: (_path: string) => path.startsWith("/community") || path.startsWith("/forum")},
    {_name: "Post Job", _href: "/post-job", _icon: BriefcaseIcon, _matches: (_path: string) => path.startsWith("/post-job"), _authRequired: true},
    {_name: "Messages", _href: "/messages", _icon: MessageSquare, _matches: (_path: string) => path.startsWith("/messages") || path.startsWith("/inbox"), _badge: unreadCount, _authRequired: true},
    {_name: "Dashboard", _href: "/dashboard", _icon: User, _matches: (_path: string) => path.startsWith("/dashboard"), _authRequired: true}
  ];

  // Filter items based on auth status
  const _visibleItems = navItems.filter(item => 
    !item.authRequired || (item.authRequired && isAuthenticated)
  );

  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={_onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="space-y-1">
        {_visibleItems.map(item => (
          <Link
            key={item.name}
            to={_item.href}
            className={_cn(
              "flex items-center px-6 py-3 text-base font-medium", _item.matches(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan border-l-4 border-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
            onClick={_onClose}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" />
              {_item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {_item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
