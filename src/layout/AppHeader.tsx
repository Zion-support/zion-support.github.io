<<<<<<< HEAD
import React, { useState } from 'react',
import { useMessaging } from '@/context/MessagingContext',
import Link from 'next/link',
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation',
import { Logo } from '@/components/header/Logo',
import { useTranslation } from 'react-i18next',
import { Menu, X } from 'lucide-react'
import { MobileMenu } from '@/components/header/MobileMenu',
import { useIsMobile } from '@/hooks/use-mobile',
import { MobileBottomNav } from '@/components/header/MobileBottomNav',
import { PointsBadge } from '@/components/loyalty/PointsBadge',
import { LoginModal } from '@/components/auth/LoginModal',
import { useAuth } from '@/hooks/useAuth',
import { UserMenu } from '@/components/header/UserMenu',
import { useSelector } from 'react-redux',
import type { RootState } from '@/store',
import { cn } from '@/lib/utils', // Import cn utility
import { useRouter } from 'next/router',
export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
  const [loginOpen, setLoginOpen] = useState(false),
  const isMobile = useIsMobile(),
  const { t } = useTranslation(),
  const { user } = useAuth(),
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn),
  const router = useRouter(),
  const showTagline = router.pathname === '/',

  // Messaging context (unread message count)
  const { unreadCount } = useMessaging(),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _openLoginModal = (_returnToPath?: string) => {_// The actual returnToPath is set in the window.URL by the child components (ResponsiveNavigation, _MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
<<<<<<< HEAD
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
  },
=======
    // If a returnToPath is passed, _we could potentially use it for other logic here if needed in the future.
    setLoginOpen(_true);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <>
      <header
<<<<<<< HEAD
        style={{ &quot;--nav-height&quot;: &quot;64px&quot; } as React.CSSProperties}
        className={cn(
          &quot;sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground&quot;,
          { &quot;bg-red-500&quot;: mobileMenuOpen }
=======
        style={_{ "--nav-height": "64px"} as React.CSSProperties}
        className={_cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground", _{ "bg-red-500": mobileMenuOpen}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
      >
        <div className=&quot;container flex h-16 items-center px-4 sm:px-6&quot;>
          <Logo />
<<<<<<< HEAD
          {showTagline && (
            <span className=&quot;ml-4 hidden text-sm text-muted-foreground md:inline&quot;>
              {t('home.header_tagline')}
            </span>
          )}
          <div className=&quot;ml-6 flex-1 hidden md:block&quot;>
            <nav role=&quot;navigation&quot; aria-label=&quot;Main navigation&quot;>
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <div className=&quot;md:hidden ml-auto mr-4&quot;>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=&quot;inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring&quot;
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
            >
              <span className=&quot;sr-only&quot;>{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className=&quot;block h-6 w-6&quot; aria-hidden=&quot;true&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ) : (
                <Menu className=&quot;block h-6 w-6&quot; aria-hidden=&quot;true&quot; />
              )}
            </button>
          </div>

          <PointsBadge />
<<<<<<< HEAD
          {!isLoggedIn && (
            <div className=&quot;ml-4 relative z-10 flex items-center&quot;>
=======
          {_!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Link
                href=&quot;/auth/login&quot;
                className=&quot;text-sm font-medium text-foreground/70 hover:text-foreground&quot;
                aria-label={t('auth.login')}
<<<<<<< HEAD
                data-testid=&quot;login-link&quot;
                onClick={(e) => {
                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true }),
                  openLoginModal(router.asPath)
=======
                data-testid="login-link"
                onClick={_(_e) => {
                  e.preventDefault();
                  // For the main login link, _we might not have a specific returnTo beyond current page, _// or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', _query: { returnTo: router.asPath} }, undefined, {_shallow: true});
                  openLoginModal(router.asPath);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                }}
              >
                {_t('auth.login')}
              </Link>
              <Link
<<<<<<< HEAD
                href=&quot;/signup&quot;
                className=&quot;ml-2 text-sm font-medium text-foreground/70 hover:text-foreground&quot;
                aria-label={t('auth.signup')}
                data-testid=&quot;signup-nav-link&quot;
=======
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={_t('auth.signup')}
                data-testid="signup-nav-link"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_t('auth.signup')}
              </Link>
            </div>
          )}
<<<<<<< HEAD
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className=&quot;ml-4&quot;>
=======
          {_/* User avatar menu */}
          {_isLoggedIn && (
            <div className="ml-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
<<<<<<< HEAD
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className=&quot;md:hidden fixed inset-0 z-60 pt-16&quot;>
=======
      {_/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {_mobileMenuOpen && (_<div className="md:hidden fixed inset-0 z-60 pt-16">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div 
            className=&quot;absolute inset-0 bg-black/50 backdrop-blur-sm&quot;
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden=&quot;true&quot;
          />
          <div className=&quot;relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto&quot;>
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
  )
}
