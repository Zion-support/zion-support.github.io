

interface MainNavigationProps {_isAdmin?: boolean;
  unreadCount?: number;
  className?: string;}

export function MainNavigation(_{_isAdmin = false, _unreadCount = 0, _className}: MainNavigationProps) {_const { user} = useAuth();
  const _isAuthenticated = !!user;
  const _location = useLocation();
  
  const _links = [
    {_name: "Home", _href: "/", _matches: (_path: string) => path === "/"},
    {_name: "Marketplace", _href: "/marketplace", _matches: (_path: string) => path.startsWith("/marketplace")},
    {_name: "Categories", _href: "/categories", _matches: (_path: string) => path.startsWith("/categories")},
    {_name: "Talent", _href: "/talent", _matches: (_path: string) => path.startsWith("/talent") && !path.includes("/talent-dashboard")},
    {_name: "Equipment", _href: "/equipment", _matches: (_path: string) => path.startsWith("/equipment")},
    {_name: "Community", _href: "/community", _matches: (_path: string) => path.startsWith("/community") || path.startsWith("/forum")}
  ];
  
  // Add authenticated-only links
  if (isAuthenticated) {_links.push(_{
      name: "Dashboard", _href: "/dashboard", _matches: (path: string) => path === "/dashboard" || path === "/client-dashboard" || path === "/talent-dashboard"});
  }
  
  // Add admin-only links
  if (isAdmin) {_links.push(_{
      name: "Analytics", _href: "/analytics", _matches: (path: string) => path.startsWith("/analytics")});
  }
  
  return (
    <nav className={_cn("ml-6 hidden md:flex", _className)}>
      <ul className="flex items-center gap-1">
        {_links.map(_(link) => (
          <li key={link.name}>
            <Link
              to={_link.href}
              className={_cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors", _link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              {_link.name}
            </Link>
          </li>
        ))}
        
        {_/* Messages link with unread counter */}
        {_isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative", _location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
              {_unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
