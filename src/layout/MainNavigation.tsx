import Link from "next/link";

interface MainNavigationProps {_isAdmin?: boolean;
  unreadCount?: number;
  className?: string;}

export function MainNavigation(_{_isAdmin = false, _unreadCount = 0, _className}: MainNavigationProps) {_const [isMobileMenuOpen, _setIsMobileMenuOpen] = useState(false); // Add state
  const { user} = useAuth();
  const _isAuthenticated = !!user;
  const [loginOpen, setLoginOpen] = useState(false);
  const {_count} = useFavorites();
  const {_items} = useCart();
  const _cartCount = items.length;
  const _router = useRouter(); // Changed from useLocation
  const {_t} = useTranslation();

  const _handleCartClick = (_e: React.MouseEvent) => {_if (!isAuthenticated) {
      e.preventDefault();
      setLoginOpen(true);
      return;}
    setIsMobileMenuOpen(false);
  };

  const _baseLinks = [
    {_key: 'home', _href: '/', _matches: (_path: string) => path === '/'},
    {_key: 'marketplace', _href: '/marketplace', _matches: (_path: string) => path.startsWith('/marketplace')},
    {_key: 'categories', _href: '/categories', _matches: (_path: string) => path.startsWith('/categories')},
    {_key: 'talent', _href: '/talent', _matches: (_path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')},
    {_key: 'equipment', _href: '/equipment', _matches: (_path: string) => path.startsWith('/equipment')},
    {_key: 'community', _href: '/community', _matches: (_path: string) => path.startsWith('/community') || path.startsWith('/forum')}
  ];

  const _links = baseLinks.map(link => ({_...link, _name: t(`nav.${link.key}`) }));
  
  // Add authenticated-only links
  if (isAuthenticated) {_links.push({
      key: 'dashboard', _name: t('nav.dashboard'), _href: '/dashboard', _matches: (_path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'});
  }
  
  // Add admin-only links
  if (isAdmin) {_links.push({
      key: 'analytics', _name: t('nav.analytics'), _href: '/analytics', _matches: (_path: string) => path.startsWith('/analytics')});
  }
  
  return (_<>
      <button
        className="navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" // Added ml-auto and mr-4 for positioning
        onClick={_() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={_isMobileMenuOpen}
        aria-controls="main-navbar-collapse"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav
        className={_cn("navbar", _className)}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          id="main-navbar-collapse"
          className={_cn(
            "navbar-collapse", _{ "open": isMobileMenuOpen},
            "w-full md:flex md:w-auto", // Handles visibility and desktop layout
            !isMobileMenuOpen && "hidden" // Explicitly hide when not open and on mobile
          )}
        >
          <ul className="navbar-nav flex flex-col md:flex-row md:items-center md:gap-1"> {_/* Added navbar-nav and flex direction classes */}
            {_links.map(_(link) => (_<li key={link.name} className="nav-item">
                <Link 
                  href={_link.href}
                  aria-label={_link.name}
                  onClick={_() => setIsMobileMenuOpen(false)}
                  className={_cn(
                    "nav-link", _"inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", _link.matches(router.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  {_link.name}
                </Link>
              </li>
            ))}

            {_/* Wishlist link */}
            {_isAuthenticated && (_<li className="nav-item">
                <Link 
                  href="/wishlist"
                  aria-label="Wishlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={_cn(
                    "nav-link", _"relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", _router.pathname === "/wishlist"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <Heart className="w-4 h-4" />
                  {_count > 0 && (
                    <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </Link>
              </li>
            )}

            {_/* Wallet link */}
            {_isAuthenticated && (_<li className="nav-item">
                <Link 
                  href="/wallet"
                  aria-label="Wallet"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={_cn(
                    "nav-link", _"relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", _router.pathname === "/wallet"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <Wallet className="w-4 h-4" />
                </Link>
              </li>
            )}

            {_/* Messages link */}
            {_isAuthenticated && (_<li className="nav-item">
                <Link 
                  href="/messages"
                  aria-label="Messages"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={_cn(
                    "nav-link", _"relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", _router.pathname === "/messages"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <MessageSquare className="w-4 h-4" />
                  {_unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </Link>
              </li>
            )}

            {_/* Cart icon with badge */}
            <li className="nav-item">
              <HoverCard openDelay={_100}>
                <HoverCardTrigger asChild>
                  <Link
                    href="/cart"
                    aria-label={_t('nav.cart')}
                    onClick={_handleCartClick}
                    className={_cn(
                      'nav-link', _'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary', _router.pathname.startsWith('/cart')
                        ? 'bg-zion-purple/20 text-zion-cyan'
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                    )}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {_t('nav.cart', _'Cart')}
                    {_cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
    </>
  );
}
