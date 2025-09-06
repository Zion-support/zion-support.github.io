

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

  const showTagline = router.pathname === '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { user } = useAuth()
  const isLoggedIn = useSelector((state: RootState,) => state.auth.isLoggedIn)
  const router = useRouter()
  const showTagline = router.pathname === '/'
  // Messaging context (unread message count)
  const { unreadCount } = useMessaging()
  const openLoginModal = (returnToPath?: string,) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
  }
import React from 'react';
  const showTagline = router && router.pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const isMobile = useIsMobile(),;
  const { t } = useTranslation(),;
  const { user } = useAuth(),;
  const isLoggedIn = useSelector((state: RootState,) => state && state.auth.isLoggedIn),;
  const router = useRouter(),;
  const showTagline = router && router.pathname === '/',;

  // Messaging context (unread message count);
  const { unreadCount } = useMessaging(),;

  const openLoginModal = (returnToPath?: string,) => {;
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router && router.push with shallow:true before this function is called.;
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen(true);
  },;

  return (
    <>;
      <header
        style={{ "--nav-height": "64px" } as React.CSSProperties}

        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}

          <div className="ml-6 flex-1 hidden md:block">;
            <nav role="navigation" aria-label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;


          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button

            >
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}

            </button>;
          </div>;

          <PointsBadge />;
          {!isLoggedIn && (;
            <div className="ml-4 relative z-10 flex items-center">;

              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"

                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {

                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,

                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })

                  openLoginModal(router.asPath)
                onClick={(e,) => {;
                  e && e.preventDefault(),;
                  // For the main login link, we might not have a specific returnTo beyond current page,;
                  // or we could default to dashboard.;
                  // For consistency with how sub-menus now set it:;
                  router && router.push({ pathname: '/auth/login', query: { returnTo: router && router.asPath } }, undefined, { shallow: true }),;
                  openLoginModal(router && router.asPath);
                }}
              >;
                {t('auth && auth.login')}
              </Link>;
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"

                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (;
            <div className="ml-4">;
              <UserMenu />;
            </div>;
          )}

        </div>;
      </header>;

      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">

            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 

              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />;
          </div>;
        </div>;

      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

;

