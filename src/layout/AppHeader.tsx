import React, {_useState} from 'react';
import Link from 'next/link';
import type {_RootState} from '@/store';

export function AppHeader() {_const [mobileMenuOpen, _setMobileMenuOpen] = useState(false);
  const [loginOpen, _setLoginOpen] = useState(false);
  const _isMobile = useIsMobile();
  const { t} = useTranslation();
  const {_user} = useAuth();
  const _isLoggedIn = useSelector(_(state: RootState) => state.auth.isLoggedIn);
  const _router = useRouter();
  const _showTagline = router.pathname === '/';

  // Messaging context (unread message count)
  const {_unreadCount} = useMessaging();

  const _openLoginModal = (_returnToPath?: string) => {_// The actual returnToPath is set in the window.URL by the child components (ResponsiveNavigation, _MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, _we could potentially use it for other logic here if needed in the future.
    setLoginOpen(_true);};
  
  return (
    <>
      <header
        style={_{ "--nav-height": "64px"} as React.CSSProperties}
        className={_cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground", _{ "bg-red-500": mobileMenuOpen}
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {_showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}
          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={_openLoginModal} />
            </nav>
          </div>
          
          {_/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={_() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={_mobileMenuOpen}
              aria-label={_t('general.toggle_mobile_menu')}
            >
              <span className="sr-only">{_t('general.open_main_menu')}</span>
              {_mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <PointsBadge />
          {_!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={_(_e) => {
                  e.preventDefault();
                  // For the main login link, _we might not have a specific returnTo beyond current page, _// or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', _query: { returnTo: router.asPath} }, undefined, {_shallow: true});
                  openLoginModal(router.asPath);
                }}
              >
                {_t('auth.login')}
              </Link>
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={_t('auth.signup')}
                data-testid="signup-nav-link"
              >
                {_t('auth.signup')}
              </Link>
            </div>
          )}
          {_/* User avatar menu */}
          {_isLoggedIn && (
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
      {_/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {_mobileMenuOpen && (_<div className="md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount={_unreadCount} 
              onClose={_() => setMobileMenuOpen(false)}
              openLoginModal={_openLoginModal}
            />
          </div>
        </div>
      )}

      {_/* Mobile Bottom Navigation */}
      {_isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={_loginOpen} onOpenChange={_setLoginOpen} />
    </>
  );
}
