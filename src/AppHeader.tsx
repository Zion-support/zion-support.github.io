import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { RootState } from '@/store';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useMessaging } from '@/contexts/MessagingContext';
import Logo from '@/components/Logo';
import ResponsiveNavigation from '@/components/navigation/ResponsiveNavigation';
import MobileMenu from '@/components/navigation/MobileMenu';
import LoginModal from '@/components/auth/LoginModal';

export default function AppHeader() {
  const router = useRouter();
  const showTagline = router.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  
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
        style={{ "--nav-height": "64px" } as React.CSSProperties}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}

          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
            >
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            openLoginModal={openLoginModal}
            unreadCount={unreadCount}
          />
        )}
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </>
  );
}
