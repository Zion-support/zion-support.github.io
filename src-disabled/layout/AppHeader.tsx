
import React, { useState } from 'react';
import { useMessaging  } from '@/context/MessagingContext';
import Link from 'next/link';
import { ResponsiveNavigation  } from '@/components/navigation/ResponsiveNavigation';
import { Logo  } from '@/components/header/Logo';
import { useTranslation  } from 'react-i18next';
import { Menu, X } from 'lucide-react'
import { MobileMenu  } from '@/components/header/MobileMenu';
import { useIsMobile  } from '@/hooks/use-mobile';
import { MobileBottomNav  } from '@/components/header/MobileBottomNav';
import { PointsBadge  } from '@/components/loyalty/PointsBadge';
import { LoginModal  } from '@/components/auth/LoginModal';
import { useAuth  } from '@/hooks/useAuth';
import { UserMenu  } from '@/components/header/UserMenu';
import { useSelector  } from 'react-redux';
import type { RootState } from '@/store';
import { cn } from '@/lib/utils', // Import cn utility
import { useRouter } from 'next/router';
export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = null;
<<<<<<< HEAD
  const showTagline = router.pathname === '/'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { user } = useAuth()
  const isLoggedIn = useSelector((state: RootState,) => state.auth.isLoggedIn)
  const router = useRouter()'
  const showTagline = router.pathname === '/'
  // Messaging context (unread message count)
  const { unreadCount } = useMessaging()
  const openLoginModal = (returnToPath?: string,) => {}
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.'
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
  }'
import React from 'react';'
  const showTagline = router && router.pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const isMobile = useIsMobile(),;
  const { t } = useTranslation(),;
  const { user } = useAuth(),;
  const isLoggedIn = useSelector((state: RootState,) => state && state.auth.isLoggedIn),;
  const router = useRouter(),;'
  const showTagline = router && router.pathname === '/',;

  // Messaging context (unread message count);
  const { unreadCount } = useMessaging(),;

  const openLoginModal = (returnToPath?: string,) => {;
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router && router.push with shallow:true before this function is called.;'
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen(true);
  },;

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

  const openLoginModal = (returnToPath?: string) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
  },
  
  return (
    <>
      <header;
        style={{ "--nav-height": "64px" } as React.CSSProperties}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
=======
        className={cn("
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          { "bg-red-500": mobileMenuOpen }

        )}
      >"
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && ("
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">'
              {t('home.header_tagline')}
            </span>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>
          
=======

          <div className="ml-6 flex-1 hidden md:block">;
=======
"
          <div className="ml-6 flex-1 hidden md:block">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <nav role="navigation" aria-label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
=======

          {/* Mobile menu button */}"
          <div className="md:hidden ml-auto mr-4">
            <button;
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}'
              aria-label={t('general.toggle_mobile_menu')}

<<<<<<< HEAD
            >
=======

            >'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? ("
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : ("
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

<<<<<<< HEAD
          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
              <Link
                href="/auth/login"
=======
            </button>;
          </div>;

          <PointsBadge />;
          {!isLoggedIn && (;"
            <div className="ml-4 relative z-10 flex items-center">;

              <Link"
                href="/auth/login""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {

                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
<<<<<<< HEAD
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true }),
=======
=======

'
                aria-label={t('auth.login')}"
                data-testid="login-link"
                onClick={(e) => {}
                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  openLoginModal(router.asPath)
<<<<<<< HEAD
                }}
              >;
=======
                onClick={(e,) => {;
                  e && e.preventDefault(),;
                  // For the main login link, we might not have a specific returnTo beyond current page,;
                  // or we could default to dashboard.;
<<<<<<< HEAD
                  // For consistency with how sub-menus now set it:;'
                  router && router.push({ pathname: '/auth/login', query: { returnTo: router && router.asPath } }, undefined, { shallow: true }),;
                  openLoginModal(router && router.asPath);
                }}
              >'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  // For consistency with how sub-menus now set it:;,
                  router && router.push({ pathname: '/auth/login', query: { returnTo: router && router.asPath } }, undefined, { shallow: true }),;
                  openLoginModal(router && router.asPath);
                }}
              >
                {t('auth.login')}'
              </Link>
              <Link href="/signup""
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"",
                aria-label={t('auth.signup')}'
                data-testid="signup-nav-link"" />
                {t('auth.signup')}'
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4">"
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true }),
                  openLoginModal(router.asPath)
                }}
              >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {t('auth.login')}
              </Link>
              <Link"
                href="/signup""
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                aria-label={t('auth.signup')}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                aria-label={t('auth.signup')}

=======
'
                aria-label={t('auth.signup')}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                data-testid="signup-nav-link"
              >'
                {t('auth.signup')}
              </Link>;
            </div>;
          )}
          {/* User avatar menu */}
          {isLoggedIn && ("
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
=======
      {mobileMenuOpen && (;
=======
      {mobileMenuOpen && (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="md:hidden fixed inset-0 z-60 pt-16">;
          <div"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick = {(,) => setMobileMenuOpen(false),}"
            aria-hidden="true";
          />;"
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;

<<<<<<< HEAD
=======
      {mobileMenuOpen && (;
        <div className="md:hidden fixed inset-0 z-60 pt-16">;
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm""
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true";
          />;,
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <MobileMenu
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            onClick={() => setMobileMenuOpen(false)}
<<<<<<< HEAD
=======
            <MobileMenu;
            onClick={() => setMobileMenuOpen(false)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            aria-hidden="true"
          />"
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
<<<<<<< HEAD
            <MobileMenu 
=======
            <MobileMenu;
=======
            aria-hidden="true""
          />,
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">"
            <MobileMenu
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              unreadCount = {unreadCount,}
              onClose = {() => setMobileMenuOpen(false),}
              openLoginModal = {openLoginModal,}
            />
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              unreadCount={unreadCount}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />;
          </div>;
        </div>;
      )}
;
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const show_tagline = router.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false),
  const [login_open, setLoginOpen] = useState (false),
  const is_mobile = useIsMobile (),
  const { t } = use_translation (),
  const { user } = use_auth (),
  const isLoggedIn = use_selector ((state: RootState, ) => state.auth.isLoggedIn),
<<<<<<< HEAD
  const router = use_router (),'
  const show_tagline = router.pathname === '/',
  // Messaging context (unread message count);
=======
  const router = use_router (),
  const show_tagline = router.pathname === '/','
  // Messaging context (unread message,  count);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { unread_count } = use_messaging (),
  const openLoginModal = (returnToPath?: string, ) =>: any {}
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router.push with shallow:true before this function is called.;'
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen (true);
  },
  return (
    <>;
<<<<<<< HEAD
      <header;"
        style={{ "--nav - height": "64px" } as React.CSSProperties}
        class_name = {cn ("
          "sticky top - 0 z - 50 w - full border - b border - border bg - background / 90 backdrop - blur - md text - foreground","
          { "bg - red - 500": mobileMenuOpen , }
=======
      <header;
        style={{ "--nav - height": "64px" } as React.CSSProperties}"
        class_name = {cn (
          "sticky top - 0 z - 50 w - full border - b border - border bg - background / 90 backdrop - blur - md text - foreground","
          { "bg - red - 500": mobileMenuOpen , }"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        )}
<<<<<<< HEAD
      >;
        <div className="container flex h - 16 items - center px - 4 sm:px-6">;
          <Logo />;
          {show_tagline && (
<<<<<<< HEAD
            <span className="ml - 4 hidden text - sm text - muted-foreground md:inline">;
              {t ('home.header_tagline')}
=======
            <span className="ml - 4 hidden text - sm text - muted - foreground md:inline">;
              {t ('home.header_tagline')}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </span>)}
          <div className="ml - 6 flex-1 hidden md:block">;
=======
      >;"
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
          <Logo />;
          {show_tagline && ("
            <span className="ml - 4 hidden text - sm text - muted - foreground md:inline">;'
              {t ('home.header_tagline')}
            </span>)}"
          <div className="ml - 6 flex - 1 hidden md:block">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <nav role="navigation" aria - label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;
<<<<<<< HEAD
          {/* Mobile menu button */}
          <div className="md:hidden ml - auto mr-4">;
            <button;
              on_click = {() => setMobileMenuOpen (!mobileMenuOpen), }
<<<<<<< HEAD
              className="inline - flex items - center justify - center rounded - md p - 2 text - foreground / 70 hover:text - foreground hover:bg - primary / 10 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring-ring";
=======
              className="inline - flex items - center justify - center rounded - md p - 2 text - foreground / 70 hover:text - foreground hover:bg - primary / 10 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring";",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              aria - expanded = {mobileMenuOpen, }
              aria - label = {t ('general.toggle_mobile_menu'), }'
            >;
              <span className="sr-only">{t ('general.open_main_menu')}</span>;
              {mobileMenuOpen ? (
<<<<<<< HEAD
                <X className="block h - 6 w-6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w-6" aria - hidden="true" />)}
=======
                <X className="block h - 6 w - 6" aria - hidden="true" />) : ("
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </button>;
          </div>;
          <PointsBadge />;
          {!isLoggedIn && (
<<<<<<< HEAD
            <div className="ml - 4 relative z - 10 flex items-center">;
              <Link;
                href="/auth / login";
                className="text - sm font - medium text - foreground / 70 hover:text-foreground";
                aria - label = {t ('auth.login'), }
=======
          {/* Mobile menu button */}"
          <div className="md:hidden ml - auto mr - 4">;
            <button;
              on_click = {() => setMobileMenuOpen (!mobileMenuOpen), }"
              className="inline - flex items - center justify - center rounded - md p - 2 text - foreground / 70 hover:text - foreground hover:bg - primary / 10 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring";
              aria - expanded = {mobileMenuOpen, }'
              aria - label = {t ('general.toggle_mobile_menu'), }
            >;'"
              <span className="sr - only">{t ('general.open_main_menu')}</span>;
              {mobileMenuOpen ? ("
                <X className="block h - 6 w - 6" aria - hidden="true" />) : ("
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}
            </button>;
          </div>;
          <PointsBadge />;
          {!isLoggedIn && ("
            <div className="ml - 4 relative z - 10 flex items - center">;
              <Link;"
                href="/auth / login";"
                className="text - sm font - medium text - foreground / 70 hover:text - foreground";'
                aria - label = {t ('auth.login'), }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                data - testid="login - link";
                on_click={(e, ) => {}
                  e.prevent_default (),
                  // For the main login link, we might not have a specific return_to beyond current page,
                  // or we could default to dashboard.;
                  // For consistency with how sub - menus now set it:;'
                  router.push ({ pathname: '/auth / login', query: { return_to: router.as_path } }, undefined, { shallow: true }),
                  openLoginModal (router.as_path);
                }}
              >;'
                {t ('auth.login')}
              </Link>;
<<<<<<< HEAD
              <Link;
                href="/signup";
                className="ml - 2 text - sm font - medium text - foreground / 70 hover:text-foreground";
                aria - label = {t ('auth.signup'), }
=======
              <Link;"
                href="/signup";"
                className="ml - 2 text - sm font - medium text - foreground / 70 hover:text - foreground";'
                aria - label = {t ('auth.signup'), }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                data - testid="signup - nav - link";
              >;'
                {t ('auth.signup')}
=======
            <div className="ml - 4 relative z - 10 flex items - center">;
              <Link ;
                href="/auth / login";
                className="text - sm font - medium text - foreground / 70 hover:text - foreground";",
                aria - label = {t ('auth.login'), }'
                data - testid="login - link";
                on_click={(e, ) = /> {
                  e.prevent_default (),
                  // For the main login link, we might not have a specific return_to beyond current page,
                  // or we could default to dashboard.;
                  // For consistency with how sub - menus now set it:;,
                  router.push ({ pathname: '/auth / login', query: { return_to: router.as_path } }, undefined, { shallow: true }),'
                  openLoginModal (router.as_path);
                }}
              >;
                {t ('auth.login')}'
              </Link>;
              <Link ;
                href="/signup";
                className="ml - 2 text - sm font - medium text - foreground / 70 hover:text - foreground";",
                aria - label = {t ('auth.signup'), }'
                data - testid="signup - nav - link";" />;
                {t ('auth.signup')}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </Link>;
            </div>)}
          {/* User avatar menu */}
<<<<<<< HEAD
          {isLoggedIn && (
            <div className="ml-4">;
=======
          {isLoggedIn && ("
            <div className="ml - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <UserMenu />;
            </div>)}
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
<<<<<<< HEAD
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset - 0 z - 60 pt-16">;
          <div;
            className="absolute inset - 0 bg - black / 50 backdrop - blur-sm";
            on_click = {(, ) => setMobileMenuOpen (false), }
            aria - hidden="true";
<<<<<<< HEAD
          />;
          <div className="relative bg - background border - t border - border h - auto max - h-[calc (100vh - 4rem)] overflow-y-auto">;
=======
      {mobileMenuOpen && ("
        <div className="md:hidden fixed inset - 0 z - 60 pt - 16">;
          <div;"
            className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";
            on_click = {(, ) => setMobileMenuOpen (false), }"
            aria - hidden="true";
          />;"
=======
          />;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <div className="relative bg - background border - t border - border h - auto max - h-[calc (100vh - 4rem)] overflow - y-auto">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <MobileMenu;
              unread_count = {unread_count, }
              on_close = {() => setMobileMenuOpen (false), }
              openLoginModal = {openLoginModal, }
            />;
          </div>;
        </div>)}
      {/* Mobile Bottom Navigation */}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>;
      setActiveNav (null);
      setServicesDropdownOpen (false);
      setSolutionsDropdownOpen (false);
      setCompanyDropdownOpen (false);
      setResourcesDropdownOpen (false)}
  }
<<<<<<< HEAD
  const closeAllDropdowns = (...args: unknown[]): unknown => {}
=======
  const closeAllDropdowns = (...args: unknown[]): unknown => {,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false)
    setCompanyDropdownOpen(false)
    setResourcesDropdownOpen(false)
    setActiveNav(null)}
  return ()
    <>``
<<<<<<< HEAD
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled'
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10''`
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>"
=======
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled`
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10''
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="container-responsive">""
          <div className="flex h-20 items-center justify-between">"
            {/* Logo */}""
            <div className="flex items-center">""
<<<<<<< HEAD
              <Link to="/" className="flex-shrink-0 group">""
=======
              <Link to="/" className="flex-shrink-0 group" />""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <div className="flex items-center space-x-3">""
                  <div className="relative">""
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""
                      <Zap className="w-6 h-6 text-white"  />"
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>"
                  </div>""
<<<<<<< HEAD
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group;
                  </h1>
                </div>"
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group;
                </span>
              </Link>
            </div>"
=======
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">",
                    Zion Tech Group
                  </h1>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">"
                  Zion Tech Group
                </span>
              </Link>
            </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">"
              {navigation.map((item) => (""
                <div key={item.name} className="relative">"
                  {item.hasDropdown ? (""
<<<<<<< HEAD
                    <div className="relative">
                      <button;
                        onClick={() => {}
              <AnimatePresence>'
                {activeDropdown === 'services' && (
                  <motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link;
                            key={service.name}
                            to={service.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">`
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>"
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>"
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {service.name}
                              </div>"
                              <div className="text-sm text-zion-slate-light">
=======
                    <div className="relative">"
                      <button
                        onClick={() => {
              <AnimatePresence>
                {activeDropdown === 'services' && ('
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">"
                        {services.map((service) => (
                          <Link key={service.name}
                            to={service.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">"
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>`
                              <service.icon className="w-5 h-5 text-white" />"
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">"
                                {service.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                                {service.description}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false)}
  };,
  const closeAllDropdowns = (...args: unknown[]): unknown => {;,
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};
<<<<<<< HEAD
  return ();`
    <>`;`
      <headerclassName={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled'
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10''`
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>;"
        <div className="container-responsive">";"
          <div className="flex h-20 items-center justify-between">;"
            {/* Logo */}";"
            <div className="flex items-center">";"
              <Link to="/" className="flex-shrink-0 group">";"
                <div className="flex items-center space-x-3">";"
                  <div className="relative">";"
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";"
                      <Zap className="w-6 h-6 text-white"  />;"
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;"
                  </div>";"
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">;
=======
  return ();
    <>`;`
      <headerclassName={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled`
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10''
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>;`
        <div className="container-responsive">";
          <div className="flex h-20 items-center justify-between">;
            {/* Logo */}";
            <div className="flex items-center">";
              <Link to="/" className="flex-shrink-0 group" />";
                <div className="flex items-center space-x-3">";
                  <div className="relative">";
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";
                      <Zap className="w-6 h-6 text-white"  />;
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;
                  </div>";
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">;",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    Zion Tech Group;
                  </h1>;
                </div>;"
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </span>;
              </Link>;
            </div>;
<<<<<<< HEAD
"
            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">;"
              {navigation && navigation.map((item) => (";"
                <div key={item && item.name} className="relative">;"
                  {item && item.hasDropdown ? (";"
=======
            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">;
              {navigation && navigation.map((item) => (";
                <div key={item && item.name} className="relative">;
                  {item && item.hasDropdown ? (";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <div className="relative">;
                      <button;
                        onClick={() => {;
<<<<<<< HEAD

              <AnimatePresence>;'
=======
              <AnimatePresence>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {activeDropdown === 'services' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {services && services.map((service) => (;
<<<<<<< HEAD
                          <Link;
                            key={service && service.name}
                            to={service && service.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;`
                            <div className={`w-10 h-10 bg-gradient-to-r ${service && service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;"
=======
                          <Link key={service && service.name}
                            to={service && service.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${service && service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                              <service && service.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;"
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {service && service.name}
                              </div>;"
                              <div className="text-sm text-zion-slate-light">;
                                {service && service.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                )}
              </AnimatePresence>
            </div>
            {/* Solutions Dropdown */}
<<<<<<< HEAD
"
            <div className="relative dropdown-container">;

              <button'
                onClick={() => toggleDropdown('solutions')}"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"'
                aria-expanded={activeDropdown === 'solutions'}

=======
            <div className="relative dropdown-container">;
              <button
                onClick={() => toggleDropdown('solutions')}'
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"",
                aria-expanded={activeDropdown === 'solutions'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                              </div>;
                            </div>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
<<<<<<< HEAD
            {/* Solutions Dropdown */}
            <div className="relative dropdown-container">;
              <button;
<<<<<<< HEAD
                on_click={() => toggle_dropdown ('solutions')}
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition-colors";
                aria - expanded={active_dropdown === 'solutions'}
=======
            {/* Solutions Dropdown */}"
            <div className="relative dropdown - container">;
              <button;'
                on_click={() => toggle_dropdown ('solutions')}"
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";'
                aria - expanded={active_dropdown === 'solutions'}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                aria - haspopup="true">;
                Solutions;'`
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'solutions' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;'
                {active_dropdown === 'solutions' && (
=======
                on_click={() => toggle_dropdown ('solutions')}'
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";",
                aria - expanded={active_dropdown === 'solutions'}'
                aria - haspopup="true">;
                Solutions;
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'solutions' ? 'rotate - 180' : ''}`} />;`
              </button>;
              <AnimatePresence>;
                {active_dropdown === 'solutions' && ('
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}
<<<<<<< HEAD

                    transition={{ duration: 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">
                        {solutions.map((solution) => (
                          <Link;
                            key={solution.name}
                            to={solution.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">`
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>"
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>"
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {solution.name}
                              </div>"
                              <div className="text-sm text-zion-slate-light">
                                {solution.description}
"
                aria-haspopup="true">;
                Solutions;'`
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;'
=======
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">"
                        {solutions.map((solution) => (
                          <Link key={solution.name}
                            to={solution.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">"
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>`
                              <solution.icon className="w-5 h-5 text-white" />"
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">"
                                {solution.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">"
                                {solution.description}
                aria-haspopup="true">;
                Solutions;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />;`
              </button>;
              <AnimatePresence>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {activeDropdown === 'solutions' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {solutions && solutions.map((solution) => (;
<<<<<<< HEAD
                          <Link;
                            key={solution && solution.name}
                            to={solution && solution.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;`
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution && solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;"
=======
                          <Link key={solution && solution.name}
                            to={solution && solution.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution && solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                              <solution && solution.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;"
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {solution && solution.name}
                              </div>;"
                              <div className="text-sm text-zion-slate-light">;
                                {solution && solution.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                )}
              </AnimatePresence>
            </div>
            {/* Resources Dropdown */}
<<<<<<< HEAD
"
            <div className="relative dropdown-container">;

              <button'
                onClick={() => toggleDropdown('resources')}"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"'
                aria-expanded={activeDropdown === 'resources'}

=======
            <div className="relative dropdown-container">;
              <button
                onClick={() => toggleDropdown('resources')}'
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"",
                aria-expanded={activeDropdown === 'resources'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                              </div>;
                            </div>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
<<<<<<< HEAD
            {/* Resources Dropdown */}
            <div className="relative dropdown-container">;
              <button;
<<<<<<< HEAD
                on_click={() => toggle_dropdown ('resources')}
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition-colors";
                aria - expanded={active_dropdown === 'resources'}
=======
            {/* Resources Dropdown */}"
            <div className="relative dropdown - container">;
              <button;'
                on_click={() => toggle_dropdown ('resources')}"
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";'
                aria - expanded={active_dropdown === 'resources'}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                aria - haspopup="true">;
                Resources;'`
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'resources' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;'
                {active_dropdown === 'resources' && (
=======
                on_click={() => toggle_dropdown ('resources')}'
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";",
                aria - expanded={active_dropdown === 'resources'}'
                aria - haspopup="true">;
                Resources;
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'resources' ? 'rotate - 180' : ''}`} />;`
              </button>;
              <AnimatePresence>;
                {active_dropdown === 'resources' && ('
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}
<<<<<<< HEAD

                    transition={{ duration: 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">
                        {resources.map((resource) => (
                          <Link;
                            key={resource.name}
                            to={resource.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">"
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />"
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {resource.name}
"
                aria-haspopup="true">;
                Resources;'`
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;'
=======
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">"
                        {resources.map((resource) => (
                          <Link key={resource.name}
                            to={resource.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">"
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />"
                            <span className="text-white group-hover:text-zion-cyan transition-colors">"
                              {resource.name}
                aria-haspopup="true">;
                Resources;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />;`
              </button>;
              <AnimatePresence>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {activeDropdown === 'resources' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {resources && resources.map((resource) => (;
<<<<<<< HEAD
                          <Link;
                            key={resource && resource.name}
                            to={resource && resource.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;"
                            <resource && resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;"
=======
                          <Link key={resource && resource.name}
                            to={resource && resource.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <resource && resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {resource && resource.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                )}
              </AnimatePresence>
            </div>
            {/* Company Dropdown */}
<<<<<<< HEAD
"
            <div className="relative dropdown-container">;

              <button'
                onClick={() => toggleDropdown('company')}"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"'
                aria-expanded={activeDropdown === 'company'}

=======
            <div className="relative dropdown-container">;
              <button
                onClick={() => toggleDropdown('company')}'
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"",
                aria-expanded={activeDropdown === 'company'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            </span>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
<<<<<<< HEAD
            {/* Company Dropdown */}
            <div className="relative dropdown-container">;
              <button;
<<<<<<< HEAD
                on_click={() => toggle_dropdown ('company')}
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition-colors";
                aria - expanded={active_dropdown === 'company'}
=======
            {/* Company Dropdown */}"
            <div className="relative dropdown - container">;
              <button;'
                on_click={() => toggle_dropdown ('company')}"
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";'
                aria - expanded={active_dropdown === 'company'}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                aria - haspopup="true">;
                Company;'`
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'company' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;'
                {active_dropdown === 'company' && (
=======
                on_click={() => toggle_dropdown ('company')}'
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";",
                aria - expanded={active_dropdown === 'company'}'
                aria - haspopup="true">;
                Company;
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'company' ? 'rotate - 180' : ''}`} />;`
              </button>;
              <AnimatePresence>;
                {active_dropdown === 'company' && ('
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}
<<<<<<< HEAD

                    transition={{ duration: 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link;
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">"
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />"
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {item.name}
"
                aria-haspopup="true">;
                Company;'`
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;'
=======
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                    <div className="p-4">"
                      <div className="grid grid-cols-1 gap-2">"
                        {company.map((item) => (
                          <Link key={item.name}
                            to={item.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">"
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />"
                            <span className="text-white group-hover:text-zion-cyan transition-colors">"
                              {item.name}
                aria-haspopup="true">;
                Company;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;`
              </button>;
              <AnimatePresence>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {activeDropdown === 'company' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {company && company.map((item) => (;
<<<<<<< HEAD
                          <Link;
                            key={item && item.name}
                            to={item && item.href}
                            onClick={() => setActiveDropdown(null)}"
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;"
                            <item && item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;"
=======
                          <Link key={item && item.name}
                            to={item && item.href}
                            onClick={() = /> setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <item && item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {item && item.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                )}
              </AnimatePresence>
            </div>
          </nav>
                            </span>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
          </nav>;
<<<<<<< HEAD
          {/* Right side - Search, User, Mobile menu */}"
          <div className="flex items-center space-x-4">
            {/* Search */}
"
            <div className="relative hidden md:block">;"
              <form onSubmit={handleSearch} className="relative">;

                <input"
                  type="text""
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}`
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${'
                    searchFocused ? 'w-80' : ''"
            <div className="relative hidden md:block">;"
=======
          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items-center space-x-4">"
            {/* Search */}
            <div className="relative hidden md:block">;
              <form onSubmit={handleSearch} className="relative">;
                <input
                  type="text""
                  placeholder="Search...""
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${`,
                    searchFocused ? 'w-80' : '''
            <div className="relative hidden md:block">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <form on_submit={handle_search} className="relative">;
                <input;"
                  type="text";"
                  placeholder="Search...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  on_focus={() => setSearchFocused (true)}
<<<<<<< HEAD
                  on_blur={() => setSearchFocused (false)}`
                  className={`w - 64 px - 4 py - 2 pl - 10 bg - zion - slate / 20 border border - zion - cyan / 20 rounded - lg text - white placeholder - zion - slate - light focus:outline - none focus:ring - 2 focus:ring - zion - cyan / 50 focus:border - zion - cyan transition - all duration - 200 ${'
                    search_focused ? 'w - 80' : '';`
}`}
                />"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
            </div>
            {/* User Menu */}

            {user ? (;"
              <div className="relative dropdown-container">;

                <button'
                  onClick={() => toggleDropdown('user')}"
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"'
                  aria-expanded={activeDropdown === 'user'}
<<<<<<< HEAD

              <div className="relative dropdown-container">;
                <button;
                  on_click={() => toggle_dropdown ('user')}
                  className="flex items - center space - x-2 p - 2 rounded - lg hover:bg - zion - cyan / 10 transition-colors";
                  aria - expanded={active_dropdown === 'user'}
=======
                  on_blur={() => setSearchFocused (false)}
                  className={`w - 64 px - 4 py - 2 pl - 10 bg - zion - slate / 20 border border - zion - cyan / 20 rounded - lg text - white placeholder - zion - slate - light focus:outline - none focus:ring - 2 focus:ring - zion - cyan / 50 focus:border - zion - cyan transition - all duration - 200 ${`,
                    search_focused ? 'w - 80' : '';
}`}`
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />"
              </form>
            </div>
            {/* User Menu */}
            {user ? (;
              <div className="relative dropdown-container">;
                <button
                  onClick={() => toggleDropdown('user')}'
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"",
                  aria-expanded={activeDropdown === 'user'}'
              <div className="relative dropdown - container">;
                <button;
                  on_click={() => toggle_dropdown ('user')}'
                  className="flex items - center space - x-2 p - 2 rounded - lg hover:bg - zion - cyan / 10 transition - colors";",
                  aria - expanded={active_dropdown === 'user'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  aria - haspopup="true">;
                  <div className="w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - full flex items - center justify-center">;
                    <User className="w - 4 h - 4 text-white" />;
                  </div>;
                  <span className="text - white text-sm hidden lg:block">{user.name}</span>;
                  <ChevronDown className="w - 4 h - 4 text - zion - slate-light" />;
=======
"
              <div className="relative dropdown - container">;
                <button;'
                  on_click={() => toggle_dropdown ('user')}"
                  className="flex items - center space - x-2 p - 2 rounded - lg hover:bg - zion - cyan / 10 transition - colors";'
                  aria - expanded={active_dropdown === 'user'}"
                  aria - haspopup="true">;"
                  <div className="w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - full flex items - center justify - center">;"
                    <User className="w - 4 h - 4 text - white" />;
                  </div>;"
                  <span className="text - white text - sm hidden lg:block">{user.name}</span>;"
                  <ChevronDown className="w - 4 h - 4 text - zion - slate - light" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </button>;
<<<<<<< HEAD
                <AnimatePresence>;'
                  {active_dropdown === 'user' && (
=======
                <AnimatePresence>;
                  {active_dropdown === 'user' && ('
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: -10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: -10 }}
<<<<<<< HEAD

                      transition={{ duration: 0.2 }}"
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                      <div className="p-2">
                        <Link"
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">"
                          <PanelLeft className="w-4 h-4 mr-3" />
                          Dashboard;
                        </Link>
                        <Link"
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">"
                          <User className="w-4 h-4 mr-3" />
                          Profile;
                        </Link>
                        <Link"
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">"
                          <Settings className="w-4 h-4 mr-3" />
                          Settings;
                        </Link>"
                        <hr className="border-zion-slate/20 my-2" />
                        <button;
                          onClick={() => {}
                            logout()
                            setActiveDropdown(null)
}}
"
                  aria-haspopup="true">;"
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;"
=======
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">"
                      <div className="p-2">"
                        <Link to="/dashboard""
                          onClick={() = /> setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">"
                          <PanelLeft className="w-4 h-4 mr-3" />"
                          Dashboard
                        </Link>
                        <Link to="/profile""
                          onClick={() = /> setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">"
                          <User className="w-4 h-4 mr-3" />"
                          Profile
                        </Link>
                        <Link to="/settings""
                          onClick={() = /> setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">"
                          <Settings className="w-4 h-4 mr-3" />"
                          Settings
                        </Link>
                        <hr className="border-zion-slate/20 my-2" />"
                        <button
                          onClick={() => {
                            logout()
                            setActiveDropdown(null)
}}
                  aria-haspopup="true">;
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <User className="w-4 h-4 text-white" />;
                  </div>;"
                  <span className="text-white text-sm hidden lg:block">{user && user.name}</span>;"
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />;
                </button>;
<<<<<<< HEAD

                <AnimatePresence>;'
=======
                <AnimatePresence>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  {activeDropdown === 'user' && (;
                    <motion&& motion.div;
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0 && 0.2 }}"
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                      <div className="p-2">;
<<<<<<< HEAD
                        <Link"
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;"
                          <PanelLeft className="w-4 h-4 mr-3" />;
                          Dashboard;
                        </Link>;
                        <Link"
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;"
                          <User className="w-4 h-4 mr-3" />;
                          Profile;
                        </Link>;
                        <Link"
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;"
=======
                        <Link to="/dashboard""
                          onClick={() = /> setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <PanelLeft className="w-4 h-4 mr-3" />;
                          Dashboard;
                        </Link>;
                        <Link to="/profile""
                          onClick={() = /> setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <User className="w-4 h-4 mr-3" />;
                          Profile;
                        </Link>;
                        <Link to="/settings""
                          onClick={() = /> setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                          <Settings className="w-4 h-4 mr-3" />;
                          Settings;
                        </Link>;"
                        <hr className="border-zion-slate/20 my-2" />;
                        <button;
                          onClick={() => {;
                            logout();
                            setActiveDropdown(null);
}}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;"
                          <LogOut className="w-4 h-4 mr-3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion && motion.div>;
                  )}
                </AnimatePresence>
              </div>
            ))}
<<<<<<< HEAD
          </nav>
                          className="flex items - center w - full p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors text - white hover:text - zion-cyan">;
                          <LogOut className="w - 4 h - 4 mr-3" />;
=======
          </nav>"
                          className="flex items - center w - full p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors text - white hover:text - zion - cyan">;"
                          <LogOut className="w - 4 h - 4 mr - 3" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          Logout;
                        </button>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>))}
          </nav>;
<<<<<<< HEAD
          {/* Right side actions */}"
          <div className="flex items-center space-x-4">
            {/* Search */}
"
            <form on_submit={handle_search} className="hidden md:flex relative">  const navigation = [;'
    { name: 'Home', href: '/', current: true },'
    { name: 'About', href: '/about', current: false },'
    { name: 'Contact', href: '/contact', current: false },
  ];
  const services = [;'
=======
          {/* Right side actions */}
          <div className="flex items-center space-x-4">"
            {/* Search */},
            <form on_submit={handle_search} className="hidden md:flex relative">  const navigation = [;
    { name: 'Home', href: '/', current: true },'
    { name: 'About', href: '/about', current: false },'
    { name: 'Contact', href: '/contact', current: false },'
  ];,
  const services = [;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    { name: 'AI Solutions', href: '/services / ai', description: 'Machine Learning & NLP' },'
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },'
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },'
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },'
    { name: 'Cybersecurity', href: '/services / cybersecurity', description: 'Security & Compliance' },'
<<<<<<< HEAD
    { name: 'Cloud Services', href: '/services / cloud', description: 'DevOps & Infrastructure' },
=======
    { name: 'Cloud Services', href: '/services / cloud', description: 'DevOps & Infrastructure' },'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ];
  return (
<<<<<<< HEAD
    <>"
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">"
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
"
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [;'
    { name: 'Home', href: '/', current: true },;'
    { name: 'About', href: '/about', current: false },;'
    { name: 'Contact', href: '/contact', current: false },;
  ];
  const services = [;'
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },;'
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },;'
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },;'
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },;'
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },;'
=======
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">"
        <div className="container flex h-16 items-center px-4 sm:px-6">"
          {/* Logo */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [;,
    { name: 'Home', href: '/', current: true },;
    { name: 'About', href: '/about', current: false },;
    { name: 'Contact', href: '/contact', current: false },;
  ];,
  const services = [;
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },;
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },;
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },;
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },;
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },;
  ];
  return (
    <>;"
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">;"
        <div className="container flex h-16 items-center px-4 sm:px-6">;
<<<<<<< HEAD
          {/* Logo */}
          <div className="flex items-center">;
            <Link to="/" className="flex-shrink-0" />;
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
<<<<<<< HEAD
          <div className="flex items-center">;
            <Link to="/" className="flex - shrink-0">;
              <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text-transparent">;
=======
          {/* Logo */}"
          <div className="flex items-center">;"
            <Link to="/" className="flex-shrink-0">;"
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;"
          <div className="flex items - center">;"
            <Link to="/" className="flex - shrink - 0">;"
              <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
          <div className="flex items - center">;
            <Link to="/" className="flex - shrink - 0" />;
              <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;

<<<<<<< HEAD
          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml - 8 space-x-8">;
=======

          {/* Desktop Navigation */}"
          <nav className="hidden md:flex ml - 8 space - x-8">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {navigation.map ((item) => (
              <Link ;
                key={item.name}
<<<<<<< HEAD
"
            <div className="relative">;

              <button;
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
"
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;
                Services;'`
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />;
              </button>;
              {servicesDropdownOpen && (;

                <div"
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}

<<<<<<< HEAD
=======
            <div className="relative" />;
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;",
                Services;
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />;`
              </button>;
              {servicesDropdownOpen && (;
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md""
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                to={item.href}
                className="text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration-200">;
=======
                to={item.href}"
                className="text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration - 200">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                {item.name}
              </Link>))}
            {/* Services Dropdown */}"
            <div className="relative">;
              <button;
                on_click={() => setServicesDropdownOpen (!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen (true)}
<<<<<<< HEAD
                onMouseLeave={() => setServicesDropdownOpen (false)}
<<<<<<< HEAD
                className="flex items - center text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration-200">;
=======
                className="flex items - center text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration - 200">;",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Services;
                <ChevronDown className={`w - 4 h - 4 ml - 1 transition - transform duration - 200 ${servicesDropdownOpen ? 'rotate - 180' : ''}`} />;`
              </button>;
              {servicesDropdownOpen && (
                <div;
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - slate - 800 / 95 border border - slate - 700 / 50 rounded - lg shadow - xl backdrop - blur-md";
                  onMouseEnter={() => setServicesDropdownOpen (true)}
                  onMouseLeave={() => setServicesDropdownOpen (false)}
                >;
                  <div className="p-4">;
                    <div className="grid grid - cols - 1 gap-2">;
                      {services.map ((service) => (
                        <Link ;
                          key={service.name}
                          to={service.href}
<<<<<<< HEAD
                          className="flex items - center p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors duration-200 group">;
                          <div className="flex-1">;
                            <div className="text - white font - medium group - hover:text - cyan - 400 transition-colors">;
=======
                onMouseLeave={() => setServicesDropdownOpen (false)}"
                className="flex items - center text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration - 200">;
                Services;'`
                <ChevronDown className={`w - 4 h - 4 ml - 1 transition - transform duration - 200 ${servicesDropdownOpen ? 'rotate - 180' : ''}`} />;
              </button>;
              {servicesDropdownOpen && (
                <div;"
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - slate - 800 / 95 border border - slate - 700 / 50 rounded - lg shadow - xl backdrop - blur - md";
                  onMouseEnter={() => setServicesDropdownOpen (true)}
                  onMouseLeave={() => setServicesDropdownOpen (false)}
                >;"
                  <div className="p - 4">;"
                    <div className="grid grid - cols - 1 gap - 2">;
                      {services.map ((service) => (
                        <Link;
                          key={service.name}
                          to={service.href}"
                          className="flex items - center p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors duration - 200 group">;"
                          <div className="flex - 1">;"
                            <div className="text - white font - medium group - hover:text - cyan - 400 transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                              {service.name}
                            </div>"
                            <div className="text-sm text-gray-400">
                              {service.description}

                >;"
                  <div className="p-4">;"
                    <div className="grid grid-cols-1 gap-2">;
                      {services && services.map((service) => (;
                        <Link;
                          key={service && service.name}
                          to={service && service.href}"
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group">;"
                          <div className="flex-1">;"
=======
                          className="flex items - center p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors duration - 200 group" />;
                          <div className="flex - 1">;
                            <div className="text - white font - medium group - hover:text - cyan - 400 transition - colors">;
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">"
                              {service.description}
                >;
                  <div className="p-4">;
                    <div className="grid grid-cols-1 gap-2">;
                      {services && services.map((service) => (;
                        <Link key={service && service.name}
                          to={service && service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group" />;
                          <div className="flex-1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">;
                              {service && service.name}
                            </div>;"
                            <div className="text-sm text-gray-400">;
                              {service && service.description}
                            </div>;
                          </div>;
                        </Link>;
                      ))}
                    </div>;"
                    <div className="mt-4 pt-4 border-t border-slate-700/50">;
<<<<<<< HEAD
                      <Link"
                        to="/services""
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">;
=======
                      <Link to="/services""
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            </div>;
                          </div>;
                        </Link>))}
<<<<<<< HEAD
                    </div>;
<<<<<<< HEAD
                    <div className="mt - 4 pt - 4 border - t border - slate-700 / 50">;
                      <Link;
                        to="/services";
                        className="block text - center text - cyan - 400 hover:text - cyan - 300 text - sm font - medium transition-colors">;
=======
                    </div>;"
                    <div className="mt - 4 pt - 4 border - t border - slate - 700 / 50">;
                      <Link;"
                        to="/services";"
                        className="block text - center text - cyan - 400 hover:text - cyan - 300 text - sm font - medium transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
                    <div className="mt - 4 pt - 4 border - t border - slate - 700 / 50">;
                      <Link ;
                        to="/services";
                        className="block text - center text - cyan - 400 hover:text - cyan - 300 text - sm font - medium transition - colors" />;",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                        View All Services →;
                      </Link>;
                    </div>;
                  </div>;
<<<<<<< HEAD
"
          <div className="hidden md:flex ml-6 flex-1 max-w-md">;"
            <form onSubmit={handleSearch} className="relative w-full">;
              />;
              <button"
                type="submit""
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors">;"
                <Search className="h-4 h-4" />;"
              <div className="hidden md:flex items-center space-x-3">;
                <Link"
                  to="/login""
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                  Login;
                </Link>
                <Link"
                  to="/signup""
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                  Get Started;
=======
          <div className="hidden md:flex ml-6 flex-1 max-w-md">;
            <form onSubmit={handleSearch} className="relative w-full">;
              />;
              <button
                type="submit""
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors">;
                <Search className="h-4 h-4" />;
              <div className="hidden md:flex items-center space-x-3">;
                <Link to="/login""
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors" />",
                  Login
                </Link>
                <Link to="/signup""
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors" />",
                  Get Started
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </Link>
              </div>
            )}
                </div>)}
            </div>;
          </nav>;
<<<<<<< HEAD
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml - 6 flex - 1 max-w-md">;
            <form on_submit={handle_search} className="relative w-full">;
              />;
              <button;
                type="submit";
<<<<<<< HEAD
                className="absolute right - 2 top - 1/2 transform -translate - y-1 / 2 text - slate - 400 hover:text - cyan - 400 transition-colors">;
                <Search className="h - 4 h-4" />;
              <div className="hidden md:flex items - center space-x-3">;
                <Link;
                  to="/login";
                  className="px - 4 py - 2 text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition-colors">;
=======
                className="absolute right - 2 top - 1/2 transform -translate - y-1 / 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
                <Search className="h - 4 h - 4" />;
              <div className="hidden md:flex items - center space - x-3">;
                <Link ;
                  to="/login";
                  className="px - 4 py - 2 text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors" />;",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  Login;
                </Link>;
                <Link ;
                  to="/signup";
<<<<<<< HEAD
                  className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition-colors">;
=======
          {/* Search Bar - Hidden on mobile */}"
          <div className="hidden md:flex ml - 6 flex - 1 max - w-md">;"
            <form on_submit={handle_search} className="relative w - full">;
              />;
              <button;"
                type="submit";"
                className="absolute right - 2 top - 1/2 transform -translate - y-1 / 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;"
                <Search className="h - 4 h - 4" />;"
              <div className="hidden md:flex items - center space - x-3">;
                <Link;"
                  to="/login";"
                  className="px - 4 py - 2 text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
                  Login;
                </Link>;
                <Link;"
                  to="/signup";"
                  className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  Get Started;
                </Link>;
              </div>)}
          {/* Right side actions */}"
          <div className="ml-6 flex items-center space-x-4">
            {/* Notifications */}"
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">"
              <Bell className="h-5 w-5" />
            </button>
            {/* User menu */}
<<<<<<< HEAD

            <button className="p - 2 text - slate - 400 hover:text - cyan - 400 transition-colors">;
              <User className="h - 5 w-5" />;
            </button>;
              {mobileMenuOpen ? (
                <X className="w - 6 h - 6 text-white" />) : (
                <Menu className="w - 6 h - 6 text - zinc-400" />              className="md:hidden p - 2 text - slate - 400 hover:text - cyan - 400 transition-colors">;
              {mobileMenuOpen ? (
                <X className="h - 5 w-5" />) : (
                <Menu className="h - 5 w-5" />;
                <Menu className="w - 6 h - 6 text-white" />)}
=======
"
            <button className="p - 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;"
              <User className="h - 5 w - 5" />;
            </button>;
              {mobileMenuOpen ? ("
                <X className="w - 6 h - 6 text - white" />) : ("
                <Menu className="w - 6 h - 6 text - zinc - 400" />              className="md:hidden p - 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
              {mobileMenuOpen ? ("
                <X className="h - 5 w - 5" />) : ("
                <Menu className="h - 5 w - 5" />;"
                <Menu className="w - 6 h - 6 text - white" />)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors" />;",
                  Get Started;
                </Link>;
              </div>)}
          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">"
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">"
              <Bell className="h-5 w-5" />"
            </button>
            {/* User menu */}
            <button className="p - 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
              <User className="h - 5 w - 5" />;
            </button>;
              {mobileMenuOpen ? (
                <X className="w - 6 h - 6 text - white" />) : ("
                <Menu className="w - 6 h - 6 text - zinc - 400" />              className="md:hidden p - 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
              {mobileMenuOpen ? (
                <X className="h - 5 w - 5" />) : ("
                <Menu className="h - 5 w - 5" />;
                <Menu className="w - 6 h - 6 text - white" />)}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </button>;
          </div>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
<<<<<<< HEAD
          <motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}"
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">"
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}"
              <form onSubmit={handleSearch} className="relative">
                <input"
                  type="text""
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}"
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
                />"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
              {/* Mobile Navigation Links */}"
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link;
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}`
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${}
                      item.current'
                        ? 'text-zion-cyan bg-zion-cyan/10''
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'`
}`}
                  >
=======
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}'
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">"
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}"
              <form onSubmit={handleSearch} className="relative">"
                <input
                  type="text""
                  placeholder="Search...""
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan""
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />"
              </form>
              {/* Mobile Navigation Links */}
              <div className="space-y-2">"
                {navigation.map((item) => (
                  <Link key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${`
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10''
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10''
}`}` />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {item.name}
                  </Link>
                ))}
              </nav>
<<<<<<< HEAD
              {/* Mobile Quick Actions */}"
              <div className="mt-6 pt-6 border-t border-zinc-800/50">"
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <Link;
                      key={action.name}
                      to={action.href}"
                      className="btn-futuristic text-center">
                      {action.name}        {/* Mobile Navigation */}

        {mobileMenuOpen && ("
          <div className="md:hidden">"
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {navigation.map((item) => (
                <Link;
                  key={item.name}

=======
              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">"
                <div className="grid grid-cols-1 gap-3">"
                  {quickActions.map((action) => (
                    <Link key={action.name}
                      to={action.href}
                      className="btn-futuristic text-center" />"
                      {action.name}        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">"
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">"
              {navigation.map((item) => (
                <Link key={item.name}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Mobile Navigation */}
      <AnimatePresence />;
        {mobileMenuOpen && (;
<<<<<<< HEAD
          <motion&& motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0 && 0.3 }}"
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">;"
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}"
              <form onSubmit={handleSearch} className="relative">;
                <input"
                  type="text""
                  placeholder="Search..."
=======
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}'
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0 && 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">;
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}"
              <form onSubmit={handleSearch} className="relative">;
                <input
                  type="text""
                  placeholder="Search...""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e && e.target.value)}"
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan";
                />;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;
<<<<<<< HEAD

              {/* Mobile Navigation Links */}"
              <div className="space-y-2">;
                {navigation && navigation.map((item) => (;
                  <Link;
                    key={item && item.name}
                    to={item && item.href}
                    onClick={closeMobileMenu}`
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${}
                      item && item.current'
                        ? 'text-zion-cyan bg-zion-cyan/10''
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'`
}`}>;
=======
              {/* Mobile Navigation Links */}
              <div className="space-y-2">;
                {navigation && navigation.map((item) => (;
                  <Link key={item && item.name}
                    to={item && item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${`
                      item && item.current
                        ? 'text-zion-cyan bg-zion-cyan/10''
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10''
}`} />;`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {item && item.name}
                  </Link>;
                ))}
              </nav>;
<<<<<<< HEAD

              {/* Mobile Quick Actions */}"
              <div className="mt-6 pt-6 border-t border-zinc-800/50">;"
                <div className="grid grid-cols-1 gap-3">;
                  {quickActions && quickActions.map((action) => (;
                    <Link;
                      key={action && action.name}
                      to={action && action.href}"
                      className="btn-futuristic text-center">;
=======
              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">;
                <div className="grid grid-cols-1 gap-3">;
                  {quickActions && quickActions.map((action) => (;
                    <Link key={action && action.name}
                      to={action && action.href}
                      className="btn-futuristic text-center" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      {action && action.name}        {/* Mobile Navigation */}
        {mobileMenuOpen && (;"
          <div className="md:hidden">;"
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">;
              {navigation && navigation.map((item) => (;
<<<<<<< HEAD
                <Link;
                  key={item && item.name}
                  to={item && item.href}"
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
=======
                <Link key={item && item.name}
                  to={item && item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"",
                  onClick={() = /> setMobileMenuOpen(false)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                >;
                  {item && item.name}
                </Link>;
              ))}
              {/* Mobile Services */}
<<<<<<< HEAD
"
              <div className="px-3 py-2">;"
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>;"
                <div className="space-y-1">;
                  {services && services.map((service) => (;
                    <Link;
                      key={service && service.name}
                      to={service && service.href}"
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
=======
              <div className="px-3 py-2">;
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>;
                <div className="space-y-1">;
                  {services && services.map((service) => (;
                    <Link key={service && service.name}
                      to={service && service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"",
                      onClick={() = /> setMobileMenuOpen(false)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    >;
                      {service && service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              </div>;
<<<<<<< HEAD

<<<<<<< HEAD
              {/* Mobile Services */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Services;
                </div>;
                {services && services.map((service) => (;                  <Link
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              {/* Mobile Services */}
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">"
                  Services
                </div>
                {services.map((service) => (
                  <Link key={service.name}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

                  <Link
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              {/* Mobile Services */}"
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Services;
                </div>
                {services.map((service) => (
                  <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    key={service.name}
                    to={service.href}
<<<<<<< HEAD
                    onClick={closeMobileMenu}"
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {service.name}
                  </Link>
                ))}
              </div>
<<<<<<< HEAD
              {/* Mobile Solutions */}"
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Solutions;
                </div>
                {solutions.map((solution) => (
                  <Link;
                    key={solution.name}
                    to={solution.href}
                    onClick={closeMobileMenu}"
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
              {/* Mobile Solutions */}
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">"
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <Link key={solution.name}
                    to={solution.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {solution.name}
                  </Link>
                ))}
              </div>
<<<<<<< HEAD
              {/* Mobile Resources */}"
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Resources;
                </div>
                {resources.map((resource) => (
                  <Link;
                    key={resource.name}
                    to={resource.href}
                    onClick={closeMobileMenu}"
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
              {/* Mobile Resources */}
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">"
                  Resources
                </div>
                {resources.map((resource) => (
                  <Link key={resource.name}
                    to={resource.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {resource.name}
                  </Link>
                ))}
              </div>
<<<<<<< HEAD
              {/* Mobile Company */}"
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Company;
                </div>
                {company.map((item) => (
                  <Link;
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}"
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
=======
              {/* Mobile Company */}
              <div className="space-y-2">"
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">"
                  Company
                </div>
                {company.map((item) => (
                  <Link key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* Mobile Auth */}
<<<<<<< HEAD
              {!user ? ("
                <div className="pt-4 border-t border-zion-slate/20">"
                  <div className="space-y-3">
                    <Link"
                      to="/login"
                      onClick={closeMobileMenu}"
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                      Login;
                    </Link>
                    <Link"
                      to="/signup"
                      onClick={closeMobileMenu}"
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                      Get Started;
                    </Link>
                  </div>
                </div>
              ) : ("
                <div className="pt-4 border-t border-zion-slate/20">"
                  <div className="space-y-3">
                    <Link"
                      to="/dashboard"
                      onClick={closeMobileMenu}"
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                      Dashboard;
=======
              {!user ? (
                <div className="pt-4 border-t border-zion-slate/20">"
                  <div className="space-y-3">"
                    <Link to="/login""
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors" />",
                      Login
                    </Link>
                    <Link to="/signup""
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors" />",
                      Get Started
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-zion-slate/20">"
                  <div className="space-y-3">"
                    <Link to="/dashboard""
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors" />",
                      Dashboard
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    </Link>
                    <button;
                      onClick={() => {}
                        logout()
                        closeMobileMenu()
<<<<<<< HEAD
}}"
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                      Logout;
=======
}}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">",
                      Logout
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    </button>
                  </div>
                </div>
              )}
            </div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>
    </header>  )
}
<<<<<<< HEAD

<<<<<<< HEAD
                  to={item.href}
                  className="text - slate - 300 hover:text - cyan - 400 block px - 3 py - 2 text - base font - medium transition - colors duration-200";
=======
                  to={item.href}"
                  className="text - slate - 300 hover:text - cyan - 400 block px - 3 py - 2 text - base font - medium transition - colors duration - 200";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  to={item.href}
                  className="text - slate - 300 hover:text - cyan - 400 block px - 3 py - 2 text - base font - medium transition - colors duration - 200";",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  on_click={() => setMobileMenuOpen (false)}
                >;
                  {item.name}
                </Link>))}
<<<<<<< HEAD
              {/* Mobile Services */}
              <div className="px - 3 py-2">;
                <div className="text - slate - 400 text - sm font - medium mb-2">Services</div>;
                <div className="space-y-1">;
                  {services.map ((service) => (
                    <Link ;
                      key={service.name}
                      to={service.href}
<<<<<<< HEAD
                      className="block text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm transition - colors duration-200";
=======
              {/* Mobile Services */}"
              <div className="px - 3 py - 2">;"
                <div className="text - slate - 400 text - sm font - medium mb - 2">Services</div>;"
                <div className="space - y-1">;
                  {services.map ((service) => (
                    <Link;
                      key={service.name}
                      to={service.href}"
                      className="block text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm transition - colors duration - 200";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      on_click={() => setMobileMenuOpen (false)}
=======
                      className="block text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm transition - colors duration - 200";",
                      on_click={() = /> setMobileMenuOpen (false)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    >;
                      {service.name}
                    </Link>))}
                </div>;
              </div>;
              </div>;
<<<<<<< HEAD
              {/* Mobile Services */}
              <div className="space-y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking-wider">;
=======
              {/* Mobile Services */}"
              <div className="space - y-2">;"
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  Services;
                </div>;
                {services.map ((service) => (
                  <Link ;
                    key={service.name}
                    to={service.href}
<<<<<<< HEAD
                    on_click={closeMobileMenu}
<<<<<<< HEAD
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition-colors">;
=======
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {service.name}
                  </Link>))}
              </div>;
              {/* Mobile Solutions */}
              <div className="space-y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking-wider">;
=======
                    on_click={closeMobileMenu}"
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {service.name}
                  </Link>))}
              </div>;
              {/* Mobile Solutions */}"
              <div className="space - y-2">;"
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  Solutions;
                </div>;
                {solutions.map ((solution) => (
                  <Link ;
                    key={solution.name}
                    to={solution.href}
<<<<<<< HEAD
                    on_click={closeMobileMenu}
<<<<<<< HEAD
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition-colors">;
=======
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {solution.name}
                  </Link>))}
              </div>;
              {/* Mobile Resources */}
              <div className="space-y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking-wider">;
=======
                    on_click={closeMobileMenu}"
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {solution.name}
                  </Link>))}
              </div>;
              {/* Mobile Resources */}"
              <div className="space - y-2">;"
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  Resources;
                </div>;
                {resources.map ((resource) => (
                  <Link ;
                    key={resource.name}
                    to={resource.href}
<<<<<<< HEAD
                    on_click={closeMobileMenu}
<<<<<<< HEAD
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition-colors">;
=======
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {resource.name}
                  </Link>))}
              </div>;
              {/* Mobile Company */}
              <div className="space-y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking-wider">;
=======
                    on_click={closeMobileMenu}"
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {resource.name}
                  </Link>))}
              </div>;
              {/* Mobile Company */}"
              <div className="space - y-2">;"
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  Company;
                </div>;
                {company.map ((item) => (
                  <Link ;
                    key={item.name}
                    to={item.href}
<<<<<<< HEAD
                    on_click={closeMobileMenu}
<<<<<<< HEAD
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition-colors">;
=======
                    on_click={closeMobileMenu}"
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {item.name}
                  </Link>))}
              </div>;
              {/* Mobile Auth */}
<<<<<<< HEAD
              {!user ? (
<<<<<<< HEAD
                <div className="pt - 4 border - t border - zion-slate / 20">;
                  <div className="space-y-3">;
                    <Link;
                      to="/login";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition-colors">;
=======
              {!user ? ("
                <div className="pt - 4 border - t border - zion - slate / 20">;"
                  <div className="space - y-3">;
                    <Link;"
                      to="/login";
                      on_click={closeMobileMenu}"
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      Login;
                    </Link>;
                    <Link;"
=======
                <div className="pt - 4 border - t border - zion - slate / 20">;
                  <div className="space - y-3">;
                    <Link ;
                      to="/login";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors" />;",
                      Login;
                    </Link>;
                    <Link ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      to="/signup";
<<<<<<< HEAD
                      on_click={closeMobileMenu}
<<<<<<< HEAD
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition-colors">;
=======
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors" />;",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      Get Started;
                    </Link>;
                  </div>;
                </div>) : (
<<<<<<< HEAD
                <div className="pt - 4 border - t border - zion-slate / 20">;
                  <div className="space-y-3">;
                    <Link;
                      to="/dashboard";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition-colors">;
=======
                      on_click={closeMobileMenu}"
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
                      Get Started;
                    </Link>;
                  </div>;
                </div>) : ("
                <div className="pt - 4 border - t border - zion - slate / 20">;"
                  <div className="space - y-3">;
                    <Link;"
                      to="/dashboard";
                      on_click={closeMobileMenu}"
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <div className="pt - 4 border - t border - zion - slate / 20">;
                  <div className="space - y-3">;
                    <Link ;
                      to="/dashboard";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors" />;",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      Dashboard;
                    </Link>;
                    <button;
                      on_click={() => {}
                        logout ();
                        closeMobileMenu ();
<<<<<<< HEAD
}}
<<<<<<< HEAD
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition-colors">;
=======
}}"
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      Logout;
                    </button>;
                  </div>;
                </div>)}
            </div>;
          </motion.div>)}
      </AnimatePresence>;
    </header>  );
}

      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
;
}}}}}}})))))))))
;
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
<<<<<<< HEAD
=======
;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );

}';
}> {';';
  t ('auth.login') ;';
}</Link> <Link > {';';
  t ('auth.signup') ;
}</Link> </div>) ;";
}<UserMenu /> </div>) ";";
}</div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={;";
  () => setMobileMenuOpen (false) ";";
}aria-hidden="true" /> <div className="relative bg-background border-t border-border h-auto max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {;
  unreadCount ;
}onClose= {;
  () => setMobileMenuOpen (false) ;
}openLoginModal= {;
  openLoginModal ;
}/> </div> </div>) ;
}{;
  /* Mobile Bottom Navigation */ ;
}{;
  isMobile && <MobileBottomNav unreadCount= {;
  unreadCount ;
}/> ;
}<LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
}/> </>) ;'";
}'"'"
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
