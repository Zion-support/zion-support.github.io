=======
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Logo  } from '@/components/header/Logo';
import { PointsBadge  } from '@/components/loyalty/PointsBadge';
import { UserMenu  } from '@/components/header/UserMenu';
import { LanguageSelector  } from '@/components/header/LanguageSelector';
import { ModeToggle  } from '@/components/ModeToggle';
import { useAuth  } from '@/hooks/useAuth';
import { useIsMobile  } from '@/hooks/use-mobile';
import { useMessaging  } from '@/context/MessagingContext';
import { EnhancedSearchInput  } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions  } from '@/data/marketplaceData';
import { slugify  } from '@/lib/slugify';
import { ResponsiveNavigation  } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu  } from '@/components/header/MobileMenu';
import { MobileBottomNav  } from '@/components/header/MobileBottomNav';

import { useState } from 'react'
import { logDebug, logErrorToProduction } from '@/utils/productionLogger'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from '@/components/header/Logo'
import { PointsBadge } from '@/components/loyalty/PointsBadge'
import { UserMenu } from '@/components/header/UserMenu'
import { LanguageSelector } from '@/components/header/LanguageSelector'
import { ModeToggle } from '@/components/ModeToggle'
import { useAuth } from '@/hooks/useAuth'
import { useIsMobile } from '@/hooks/use-mobile'
import { useMessaging } from '@/context/MessagingContext'
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput'
import { generateSearchSuggestions } from '@/data/marketplaceData'
import { slugify } from '@/lib/slugify'
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation'
import { MobileMenu } from '@/components/header/MobileMenu'
import { MobileBottomNav } from '@/components/header/MobileBottomNav'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import { Menu, X } from 'lucide-react'
import { useState } from 'react',;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',;
import Link from 'next/link',;
import { useRouter } from 'next/router',;
import { Logo } from '@/components/header/Logo',;
import { PointsBadge } from '@/components/loyalty/PointsBadge',;
import { UserMenu } from '@/components/header/UserMenu',;
import { LanguageSelector } from '@/components/header/LanguageSelector',;
import { ModeToggle } from '@/components/ModeToggle',;
import { useAuth } from '@/hooks/useAuth',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { useMessaging } from '@/context/MessagingContext',;
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput',;
import { generateSearchSuggestions } from '@/data/marketplaceData',;
import { slugify } from '@/lib/slugify',;
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation',;
import { MobileMenu } from '@/components/header/MobileMenu',;
import { MobileBottomNav } from '@/components/header/MobileBottomNav',;
import { Menu, X } from 'lucide-react';
import { use_translation } from 'react - i18next';
import { CartDrawer } from '@/components / cart / CartDrawer';
import { LoginModal } from '@/components / auth / LoginModal';
export /**
 * PrimaryNav - Function description
 */
function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false);
  const [login_open, setLoginOpen] = useState (false);
  const { user } = use_auth ();
  const isLoggedIn = !!user;
  const is_mobile = useIsMobile ();
  const { t } = use_translation ();
  const router = use_router ();
  const [query, set_query] = useState ('');
  const suggestions = generateSearchSuggestions ();
  let unread_count = 0;

  try {
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount
  } catch {

    // context not available

    const trimmed = query.trim();    if (trimmed) {
      logDebug('PrimaryNav search submit:', { query: trimmed })
      router
        .push(`/search?q=${encodeURIComponent(trimmed)}`)
        .then(() => setQuery(''))
        .catch(err =>
          logErrorToProduction('Search navigation failed', err, {
            query: trimmed
            component: 'PrimaryNav'
          })
        ) }
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default ();
    const trimmed = query.trim ();    // Check condition
if ( {) {
  $2
}
      log_debug ('PrimaryNav search submit:', { query: trimmed });
      router;
        .push (`/search?q=${encodeURIComponent (trimmed)}`);
        .then (() => set_query (''));
        .catch (err =>;
          logErrorToProduction ('Search navigation failed', err, {
            query: trimmed,
            component: 'PrimaryNav',
          })) }
  }

  return (
    <>
      <header
        className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
        role="navigation"
        aria-label="Primary"
        data-testid="header"
      >
        <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap">
          <Logo />

          {/* Actions container with responsive layout */}
          <div className="hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}

            {/* Compact controls group */}
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>

            {/* Auth links - flex wrap for very small screens */}
            <div className="flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (
                <>
                  <Link

                    {t('auth.login')}
                  </Link>
                    onClick={e => {;
                      e && e.preventDefault();
                      setLoginOpen(true);                    }}
                  >;
                    {t('auth && auth.login')}
                  </Link>;
                  <Link
                    href="/signup"
                    className="text-sm hover:text-primary whitespace-nowrap"
                  >
                    {t('auth.signup')}
                  </Link>
                </>
              )}
              {isLoggedIn && <UserMenu />}

            <ModeToggle />
            <LanguageSelector />
            {!isLoggedIn && (
              <Link

