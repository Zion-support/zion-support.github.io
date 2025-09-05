import React, { useState } from 'react';
import { useMessaging } from '@/context/MessagingContext';
import Link from 'next/link';
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation';
import { Logo } from '@/components/header/Logo';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react'
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { LoginModal } from '@/components/auth/LoginModal';
import { useAuth } from '@/hooks/useAuth';
import { UserMenu } from '@/components/header/UserMenu';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { cn } from '@/lib/utils'; // Import cn utility
import { useRouter } from 'next/router';

export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();
  const showTagline = router.pathname === '/';

  // Messaging context (unread message count)
  const { unreadCount } = useMessaging();

  const openLoginModal = (returnToPath?: string) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true);
  };
  
  return (
    <>
      <header
        style={{ &quot;--nav-height&quot;: &quot;64px&quot; } as React.CSSProperties}
        className={cn(
          &quot;sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground&quot;,
          { &quot;bg-red-500&quot;: mobileMenuOpen }
        )}
      >
        <div className=&quot;container flex h-16 items-center px-4 sm:px-6&quot;>
          <Logo />
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
              ) : (
                <Menu className=&quot;block h-6 w-6&quot; aria-hidden=&quot;true&quot; />
              )}
            </button>
          </div>

          <PointsBadge />
          {!isLoggedIn && (
            <div className=&quot;ml-4 relative z-10 flex items-center&quot;>
              <Link
                href=&quot;/auth/login&quot;
                className=&quot;text-sm font-medium text-foreground/70 hover:text-foreground&quot;
                aria-label={t('auth.login')}
                data-testid=&quot;login-link&quot;
                onClick={(e) => {
                  e.preventDefault();
                  // For the main login link, we might not have a specific returnTo beyond current page,
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true });
                  openLoginModal(router.asPath);
                }}
              >
                {t('auth.login')}
              </Link>
              <Link
                href=&quot;/signup&quot;
                className=&quot;ml-2 text-sm font-medium text-foreground/70 hover:text-foreground&quot;
                aria-label={t('auth.signup')}
                data-testid=&quot;signup-nav-link&quot;
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className=&quot;ml-4&quot;>
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className=&quot;md:hidden fixed inset-0 z-60 pt-16&quot;>
          <div 
            className=&quot;absolute inset-0 bg-black/50 backdrop-blur-sm&quot;
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden=&quot;true&quot;
          />
          <div className=&quot;relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto&quot;>
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
