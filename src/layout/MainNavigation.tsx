interface MainNavigationProps {
  isAdmin?: boolean
  unreadCount?: number
  className?: string
    }
    setIsMobileMenuOpen (false);
  }
  const base_links = [;
    {
      key: 'home'
      href: '/'
      matches: (path: string) => path === '/',    }
    {
interface MainNavigationProps {;
  isAdmin?: boolean,;
  unreadCount?: number,;
  className?: string;
}
  const baseLinks = [;
    {;
      key: 'home',;
      href: '/',;
      href: '/analytics',;
      matches: (path: string) => path && path.startsWith('/analytics'),;
    });  }


  return (
    <>;
      <button
        className='navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary' // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
                    link.matches(router.pathname)
                      ? 'bg-zion-purple/20 text-zion-cyan'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}                >
            )}
            {/* Wallet link */}
            {isAuthenticated && (;
              <li className='nav-item'>;
                <Link
                  href='/wallet'
                  aria-label='Wallet'
                  onClick={() => setIsMobileMenuOpen(false)}
            )}
            {/* Messages link */}
            {isAuthenticated && (;
              <li className='nav-item'>;
                <Link
                  href='/messages'
                  aria-label='Messages'
                  onClick={() => setIsMobileMenuOpen(false)}
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
;
            {/* Cart icon with badge */}
            <li className="nav-item">
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href="/cart"
                    aria-label={t('nav.cart')}
                    onClick={handleCartClick}
}`};
;
                          {link.name}'`;
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`}  />                        </button>;
                        {activeDropdown === link.key && (;"
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child: unknown (
                              <Link
                                key={child.key}
                                to={child.href}`;
                                className={`block px - 4 py - 2 text - sm text - zion - slate - light hover:text - white hover:bg - white / 10 rounded - md transition - colors ${is_active (child) ? 'text - zion - cyan bg - zion - cyan / 10' : ''`;
}`}
                        className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive(link)
                            ? 'bg-zion-cyan text-white''
                            : 'text-zion-slate-light hover:text-white hover:bg-white/10'`
}`}
                        onClick={: unknown setIsMobileMenuOpen(false)}
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  >;
                    <ShoppingCart className="w-4 h-4 mr-1" />;
                    {t('nav.cartCart')}
                    {cartCount > 0 && (;
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                        {cartCount}
                      </span>;
                    )}
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
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
