<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { logDebug, logErrorToProduction  } from '@/utils/productionLogger';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

import { Menu, X } from 'lucide-react'
import { useTranslation  } from 'react-i18next';
import { CartDrawer  } from '@/components/cart/CartDrawer';
import { LoginModal } from '@/components/auth/LoginModal';

import { useState } from 'react';
import { log_debug, logErrorToProduction } from '@/utils / production_logger';
import Link from 'next / link';
import { use_router } from 'next / router';
import { Logo } from '@/components / header / Logo';
import { PointsBadge } from '@/components / loyalty / PointsBadge';
import { UserMenu } from '@/components / header / UserMenu';
import { LanguageSelector } from '@/components / header / LanguageSelector';
import { ModeToggle } from '@/components / ModeToggle';
import { use_auth } from '@/hooks / use_auth';
import { useIsMobile } from '@/hooks / use - mobile';
import { use_messaging } from '@/context / MessagingContext';
import { EnhancedSearchInput } from '@/components / search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { slugify } from '@/lib / slugify';
import { ResponsiveNavigation } from '@/components / navigation / ResponsiveNavigation';
import { MobileMenu } from '@/components / header / MobileMenu';
import { MobileBottomNav } from '@/components / header / MobileBottomNav';
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

<<<<<<< HEAD
<<<<<<< HEAD
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
import { Menu, X } from 'lucide-react'
import { useTranslation  } from 'react-i18next';
import { CartDrawer  } from '@/components/cart/CartDrawer';
import { LoginModal } from '@/components/auth/LoginModal';
export function PrimaryNav() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const { user } = useAuth()
  const isLoggedIn = !!user
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const suggestions = generateSearchSuggestions()
  let unreadCount = 0
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount
  } catch {
<<<<<<< HEAD
<<<<<<< HEAD
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // context not available
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
=======

    // context not available

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    // context not available

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
  }
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
import { useTranslation } from 'react-i18next',;
import { CartDrawer } from '@/components/cart/CartDrawer',;
import { LoginModal } from '@/components/auth/LoginModal',;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
export function PrimaryNav() {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const { user } = useAuth(),;
  const isLoggedIn = !!user,;
  const isMobile = useIsMobile(),;
  const { t } = useTranslation(),;
  const router = useRouter(),;
  const [query, setQuery] = useState(''),;
  const suggestions = generateSearchSuggestions(),;
  let unreadCount = 0,;
  try {;
    const messaging = useMessaging(),;
    unreadCount = messaging.unreadCount;
  } catch {;
    // context not available;
  }
;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    const trimmed = query.trim(),;
    if (trimmed) {;
      logDebug('PrimaryNav search submit:', { query: trimmed }),;
      router;
        .push(`/search?q=${encodeURIComponent(trimmed)}`);
        .then(() => setQuery(''));
        .catch((err) => logErrorToProduction('Search navigation failed', err, { query: trimmed, component: 'PrimaryNav' }));
    }
  },


        data-testid='header'>;
        <div className='container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap'>;
          <Logo />;


          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
<<<<<<< HEAD
          <div className='hidden lg:block order-1 flex-shrink-0'>;
=======
          <div className='hidden lg:block order-1 flex-shrink-0'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <ResponsiveNavigation
              openLoginModal={returnToPath => setLoginOpen(true)}

            />          </div>;




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
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
          <div className='hidden lg:block order-1 flex-shrink-0'>
            <ResponsiveNavigation
              openLoginModal={returnToPath => setLoginOpen(true)}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
          <div className='hidden lg:block order-1 flex-shrink-0'>
            <ResponsiveNavigation
              openLoginModal={returnToPath => setLoginOpen(true)}
            />          </div>
<<<<<<< HEAD
          <div className="hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
          {/* Actions container with responsive layout */}
          <div className='hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0'>;
            <form
              onSubmit={handleSubmit}
              className='flex-shrink-0'
              style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>;
            />          </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
          <div className="hidden lg:block order-1 flex-shrink-0">
            <ResponsiveNavigation openLoginModal={(returnToPath) => setLoginOpen(true)} />
          </div>
          

          {/* Actions container with responsive layout */}
          <div className="hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
<<<<<<< HEAD
<<<<<<< HEAD
=======

      <header;
        className='sticky top - 0 z - 70 w - full border - b border - primary / 20 bg - card / 90 backdrop - blur - md';
        role='navigation';
        aria - label='Primary';
        data - testid='header';
      >;
        <div className='container flex items - center justify - between gap - 2 min - h-16 px - 4 sm:px - 6 max-[320px]:flex - wrap'>;
          <Logo />;
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
          <div className='hidden lg:block order - 1 flex - shrink - 0'>;
            <ResponsiveNavigation;
              openLoginModal={returnToPath => setLoginOpen (true)}
            />          </div>;
          {/* Actions container with responsive layout */}
          <div className='hidden lg:flex items - center gap - 2 order - 2 flex - shrink - 0 min - w-0'>;
            {/* Search form with clamped width */}
            <form;
              on_submit={handle_submit}
              className='flex - shrink - 0';
              style={{ width: 'clamp (12rem, 20vw, 16rem)' }}
            >;
              <EnhancedSearchInput;
                value={query}
                on_change={set_query}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onSelectSuggestion={sugg => {
                  log_debug ('PrimaryNav search suggestion selected:', {
                    suggestion: sugg,
                  });                  // Handle different suggestion types with proper navigation;
                  // Check condition
if ( {) {
  $2
}
                    // Product listings with IDs go to product detail page;
                    router.push (`/marketplace / listing/${sugg.id}`);
                  } else // Check condition
if (
                  ) {) {
  $2
}
                    // Documentation suggestions navigate directly to their path;
                    router.push (sugg.slug);
                  } else // Check condition
if ( {) {
  $2
}
                    // Blog posts navigate to blog detail page;
                    router.push (`/blog/${sugg.slug}`);

<<<<<<< HEAD
                onSelectSuggestion={sugg => {
                  logDebug('PrimaryNav search suggestion selected:', {
                    suggestion: sugg
                  });                  // Handle different suggestion types with proper navigation
                  if (sugg.id) {
                    // Product listings with IDs go to product detail page
                    router.push(`/marketplace/listing/${sugg.id}`)
                  } else if (true) {}
                  ) {
                    // Documentation suggestions navigate directly to their path
                    router.push(sugg.slug)
                  } else if (sugg.type === 'blog' && sugg.slug) {
                    // Blog posts navigate to blog detail page
                    router.push(`/blog/${sugg.slug}`)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  } else {
                    // Default: search results page with query parameter
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`)
                  }
<<<<<<< HEAD
                  setQuery('')
                  // Track analytics event
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'search_suggestion_click', {
                      search_term: sugg.text
                      suggestion_type: sugg.type
                      suggestion_id: sugg.id |sugg.slug
                    })
                  }
                  // // // // // console.log('PrimaryNav search suggestion selected:'
  sugg)
                  // Handle different suggestion types with proper navigation
                  if(sugg.id) {
                    // Product listings with IDs go to product detail page`
                    router.push(`/marketplace/listing/${sugg.id
'`
}`)} else if(sugg.type = == 'doc' && sugg.slug && sugg.slug.startsWith('/')) {
                    // Documentation suggestions navigate directly to their path'
                    router.push(sugg.slug)} else if(sugg.type === 'blog' && sugg.slug) {
                    // Blog posts navigate to blog detail page`
                    router.push(`/blog/${sugg.slug}`)} else {
                    // Default: search results page with slug;`
                    router.push(`/search/${sugg.slug |slugify(sugg.text)}`)}
                  setQuery('')
                  // Track analytics event'
                  if(typeof window !== 'null' && window.gtag) {
                    window.gtag('event',search_suggestion_click', {
                      search_term: sugg.text
                      suggestion_type: sugg.type
                      suggestion_id: sugg.id |sugg.slug
})}
                }}
                searchSuggestions = {suggestions,}
              />
            </form>
            
            {/* Compact actions group */}
            <div className='flex items-center gap-1'>
              <PointsBadge />
              <CartDrawer />
            </div>
                  } else {
                    // Default: search results page with query parameter;
                    router.push (`/search?q=${encodeURIComponent (sugg.text)}`);
                  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                onSelectSuggestion={sugg => {;
                  logDebug('PrimaryNav search suggestion selected:', {;
                    suggestion: sugg,;
                  });                  // Handle different suggestion types with proper navigation;
                  if (sugg && sugg.id) {;

                onSelectSuggestion={(sugg) => {;
                  logDebug('PrimaryNav search suggestion selected:', { suggestion: sugg }),;
                  // Handle different suggestion types with proper navigation;
                  if (sugg.id) {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    // Product listings with IDs go to product detail page;
                    router.push(`/marketplace/listing/${sugg.id}`);
                  } else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {;
                    // Documentation suggestions navigate directly to their path;
                    router.push(sugg.slug);
                  } else if (sugg.type === 'blog' && sugg.slug) {;
                    // Blog posts navigate to blog detail page;
                    router.push(`/blog/${sugg.slug}`);
                  } else {;
                    // Default: search results page with query parameter;
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`);
                  }
                  setQuery(''),;
                  // Track analytics event;
                  if (typeof window !== 'undefined' && window && window.gtag) {;
                    window && window.gtag('event', 'search_suggestion_click', {;
                      search_term: sugg && sugg.text,;
                      suggestion_type: sugg && sugg.type,;
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug,;
                    });
                  }
                  // // // // // console && console.log('PrimaryNav search suggestion selected:',;
  sugg);
                  // Handle different suggestion types with proper navigation;
                  if(sugg && sugg.id) {;

                    // Product listings with IDs go to product detail page`;
                    router && router.push(`/marketplace/listing/${sugg && sugg.id;
'`;
}`)} else if(sugg && sugg.type = == 'doc' && sugg && sugg.slug && sugg && sugg.slug.startsWith('/')) {;

                    // Documentation suggestions navigate directly to their path';
                    router && router.push(sugg && sugg.slug)} else if(sugg && sugg.type === 'blog' && sugg && sugg.slug) {;

                    // Blog posts navigate to blog detail page`;
                    router && router.push(`/blog/${sugg && sugg.slug}`)} else {;

                    // Default: search results page with slug;`;
                    router && router.push(`/search/${sugg && sugg.slug || slugify(sugg && sugg.text)}`)};
                  setQuery('');
                  // Track analytics event';
                  if(typeof window !== 'null' && window && window.gtag) {;

                    window && window.gtag('event',search_suggestion_click', {;

                      search_term: sugg && sugg.text,;
                      suggestion_type: sugg && sugg.type,;
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug;
})}
                }}
                searchSuggestions = {suggestions,}
              />;
            </form>;

            {/* Compact actions group */}
=======
                onSelectSuggestion={sugg => {
                  log_debug ('PrimaryNav search suggestion selected:', {
                    suggestion: sugg,
                  });                  // Handle different suggestion types with proper navigation;
                  // Check condition
if ( {) {
  $2
}
                    // Product listings with IDs go to product detail page;
                    router.push (`/marketplace / listing/${sugg.id}`);
                  } else // Check condition
if (
                  ) {) {
  $2
}
                    // Documentation suggestions navigate directly to their path;
                    router.push (sugg.slug);
                  } else // Check condition
if ( {) {
  $2
}
                    // Blog posts navigate to blog detail page;
                    router.push (`/blog/${sugg.slug}`);

                  } else {
                    // Default: search results page with query parameter
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`)
                  }

                onSelectSuggestion={sugg => {;
                  logDebug('PrimaryNav search suggestion selected:', {;
                    suggestion: sugg,;
                  });                  // Handle different suggestion types with proper navigation;
                  if (sugg && sugg.id) {;

                onSelectSuggestion={(sugg) => {;
                  logDebug('PrimaryNav search suggestion selected:', { suggestion: sugg }),;
                  // Handle different suggestion types with proper navigation;
                  if (sugg.id) {;

                    // Product listings with IDs go to product detail page;
                    router.push(`/marketplace/listing/${sugg.id}`);
                  } else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {;
                    // Documentation suggestions navigate directly to their path;
                    router.push(sugg.slug);
                  } else if (sugg.type === 'blog' && sugg.slug) {;
                    // Blog posts navigate to blog detail page;
                    router.push(`/blog/${sugg.slug}`);
                  } else {;
                    // Default: search results page with query parameter;
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`);
                  }
                  setQuery(''),;
                  // Track analytics event;
                  if (typeof window !== 'undefined' && window && window.gtag) {;
                    window && window.gtag('event', 'search_suggestion_click', {;
                      search_term: sugg && sugg.text,;
                      suggestion_type: sugg && sugg.type,;
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug,;
                    });
                  }
                  // // // // // console && console.log('PrimaryNav search suggestion selected:',;
  sugg);
                  // Handle different suggestion types with proper navigation;
                  if(sugg && sugg.id) {;

                    // Product listings with IDs go to product detail page`;
                    router && router.push(`/marketplace/listing/${sugg && sugg.id;
'`;
}`)} else if(sugg && sugg.type = == 'doc' && sugg && sugg.slug && sugg && sugg.slug.startsWith('/')) {;

                    // Documentation suggestions navigate directly to their path';
                    router && router.push(sugg && sugg.slug)} else if(sugg && sugg.type === 'blog' && sugg && sugg.slug) {;

                    // Blog posts navigate to blog detail page`;
                    router && router.push(`/blog/${sugg && sugg.slug}`)} else {;

                    // Default: search results page with slug;`;
                    router && router.push(`/search/${sugg && sugg.slug || slugify(sugg && sugg.text)}`)};
                  setQuery('');
                  // Track analytics event';
                  if(typeof window !== 'null' && window && window.gtag) {;

                    window && window.gtag('event',search_suggestion_click', {;

                      search_term: sugg && sugg.text,;
                      suggestion_type: sugg && sugg.type,;
                      suggestion_id: sugg && sugg.id || sugg && sugg.slug;
})}
                }}
                searchSuggestions = {suggestions,}
              />;
            </form>;

            {/* Compact actions group */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='flex items-center gap-1'>;
              <PointsBadge />;
              <CartDrawer />;
            </div>;

            {/* Compact controls group */}
            <div className='flex items-center gap-1 border-l border-primary/20 pl-1 ml-1'>;
                  set_query ('');
                  // Track analytics event;
                  // Check condition
if ( {) {
  $2
}
                    window.gtag ('event', 'search_suggestion_click', {
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug,
                    });
                  }
                  // // // // // console.log ('PrimaryNav search suggestion selected:',
  sugg);
                  // Handle different suggestion types with proper navigation;
                  // Check condition
if ( {) {
  $2
}
                    // Product listings with IDs go to product detail page`;
                    router.push (`/marketplace / listing/${sugg.id;
'`;
}`)} else if () {) {
  $2
}
                    // Documentation suggestions navigate directly to their path';
                    router.push (sugg.slug)} else // Check condition
if ( {) {
  $2
}
                    // Blog posts navigate to blog detail page`;
                    router.push (`/blog/${sugg.slug}`)} else {
                    // Default: search results page with slug;`;
                    router.push (`/search/${sugg.slug || slugify (sugg.text)}`)}
                  set_query ('');
                  // Track analytics event';
                  // Check condition
if ( {) {
  $2
}
                    window.gtag ('event', search_suggestion_click', {
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug;
                    });
                  }
                }}
                searchSuggestions={suggestions}
              />;
            </form>;
            {/* Compact actions group */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex items-center gap-1">
              <PointsBadge />
              <CartDrawer />
            </div>
            
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    href='/auth/login'
                    className='text-sm hover:text-primary whitespace-nowrap'
                    data-testid='login-link'
                    onClick={e => {
                      e.preventDefault()
                      setLoginOpen(true) }}
                  >
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    href="/auth/login"
                    className="text-sm hover: text-primary whitespace-nowrap"
                    data-testid="login-link"
                    onClick={(e) => {
                      e.preventDefault(),
                      setLoginOpen(true)
            <div className="flex items-center gap-1">;
              <PointsBadge />;
              <CartDrawer />;
            </div>;
            {/* Compact controls group */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">;
=======
            <div className='flex items - center gap - 1 border - l border - primary / 20 pl - 1 ml - 1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <div className='flex items - center gap - 1 border - l border - primary / 20 pl - 1 ml - 1'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <ModeToggle />;
              <LanguageSelector />;
            </div>;
            {/* Auth links - flex wrap for very small screens */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex items-center gap-1 flex-wrap">;
              {!isLoggedIn && (;
                <>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Link;
                    href="/auth/login";
                    className="text-sm hover: text-primary whitespace-nowrap";
                    data-testid="login-link";
                    onClick={(e) => {;
                      e.preventDefault();
                      setLoginOpen(true);
                    }}
                  >;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {t('auth.login')}
                  </Link>
                    onClick={e => {;
                      e && e.preventDefault();
                      setLoginOpen(true);                    }}
                  >;
                    {t('auth && auth.login')}
                  </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
                    {t('auth.login')}
                  </Link>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Link
                    href="/signup"
                    className="text-sm hover:text-primary whitespace-nowrap"
                  >
                    {t('auth.signup')}
                  </Link>
                </>
              )}
              {isLoggedIn && <UserMenu />}



            </div>;
          </div>;

          {/* Tablet view (md to lg) - simplified controls */}

          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">


            <ModeToggle />
            <LanguageSelector />
            {!isLoggedIn && (
              <Link
<<<<<<< HEAD

<<<<<<< HEAD
                {t('auth.login')}
              </Link>
            )}
            {isLoggedIn && <UserMenu />}
            </div>
          </div>
          {/* Tablet view (md to lg) - simplified controls */}
          <div className='hidden md:flex lg:hidden items-center gap-2 order-2'>
            </div>;
          </div>;
          {/* Tablet view (md to lg) - simplified controls */}
          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">
            <ModeToggle />
            <LanguageSelector />
            {!isLoggedIn && (
              <Link
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                href='/auth/login'
                className='text-sm hover:text-primary'
                data-testid='login-link'
                onClick={e => {
                  e.preventDefault()
                  setLoginOpen(true) }}

              >
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                href="/auth/login"
                className="text-sm hover:text-primary"
                data-testid="login-link"
                onClick={(e) => {
                  e.preventDefault(),
                  setLoginOpen(true)
          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">;
            <ModeToggle />;
            <LanguageSelector />;
            {!isLoggedIn && (;
              <Link;
                href="/auth/login";
                className="text-sm hover:text-primary";
                data-testid="login-link";
                onClick={(e) => {;
                  e.preventDefault();
                  setLoginOpen(true);
                }}
              >;

                {t('auth.login')}
              </Link>
            )}
            {isLoggedIn && <UserMenu />}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
              {isLoggedIn && <UserMenu  />}
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}          >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                onClick={e => {;
                  e && e.preventDefault();
                  setLoginOpen(true);                }}
              >;
                {t('auth && auth.login')}
              </Link>;
            )}
            {isLoggedIn && <UserMenu />}
          </div>;


            <div className='flex items - center gap - 1 flex - wrap'>;
              {!isLoggedIn && (
                <>;
                  <Link;
                    href='/auth / login';
                    className='text - sm hover:text - primary whitespace - nowrap';
                    data - testid='login - link';
                    on_click={e => {
                      e.prevent_default ();
                      setLoginOpen (true) }}
                  >;
                    {t ('auth.login')}
                  </Link>;
                  <Link;
                    href='/signup';
                    className='text - sm hover:text - primary whitespace - nowrap';
                  >;
                    {t ('auth.signup')}
                  </Link>;
                </>)}
              {isLoggedIn && <UserMenu />}
            </div>;
          </div>;
          {/* Tablet view (md to lg) - simplified controls */}
          <div className='hidden md:flex lg:hidden items - center gap - 2 order - 2'>;
            <ModeToggle />;
            <LanguageSelector />;
            {!isLoggedIn && (
              <Link;
                href='/auth / login';
                className='text - sm hover:text - primary';
                data - testid='login - link';
                on_click={e => {
                  e.prevent_default ();
                  setLoginOpen (true) }}
              >;
                {t ('auth.login')}
              </Link>)}
            {isLoggedIn && <UserMenu />}
          </div>;
              {isLoggedIn && <UserMenu  />}
<<<<<<< HEAD
            </div>;
          </div>;
          {/* Mobile menu button */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 rounded focus:outline-none flex-shrink-0'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}          >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}
          >
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-60 pt-16">
          <div
<<<<<<< HEAD
<<<<<<< HEAD
  unreadCount
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden='true'          />
          <div className='relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto'>
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={returnToPath => setLoginOpen(true)}            />
          </div>
        </div>
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
<<<<<<< HEAD
=======

      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );

};
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo /> ;
}setQuery ('');
//Track analytics event ;

}searchSuggestions= {;
  suggestions ;
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <LinkonClick={
  (e) => {;
  > {';
  t ('auth && auth.login') ";
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {';
  t ('auth && auth.signup') ;
}</Link> </>) ;
}{;
  isLoggedIn && <UserMenu /> ;
}</div> </div> <ModeToggle /> <LanguageSelector /> {";
  !isLoggedIn && (<Linkhref="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={
  (e) => {;
  e && e.preventDefault ();
setLoginOpen (true) ;
}';
}t ('auth && auth.login') ;
}</Link>) ;
}{;
  isLoggedIn && <UserMenu /> ;
}</div> {;
  /* Mobile menu button */ ";
}<button) : (<Menu className="h-6 w-6" />) ";
}</button> </div> </header> <divclassName="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={
  () => setMobileMenuOpen (false) ";
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenuunreadCount= {
  unreadCount 
}onClose= {
  () => setMobileMenuOpen (false) ;
}openLoginModal= {;
  (returnToPath) => setLoginOpen (true) ;
}/> </div> </div>) ;
}{;
  isMobile && <MobileBottomNavunreadCount= {
  unreadCount 
}/> ;
}<LoginModalisOpen= {
  loginOpen 
}onOpenChange= {
  setLoginOpen 
}/> </>) ;
}'"  { opacity: 0,;
  height: 0;
}}
              animate = {;

  { opacity: 1,;
  height: 'auto';
}}
              exit = {;

  { opacity: 0,;
  height: 0;
}}
              transition={{ duration: 0 && 0.3 }}";
              className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">";
              <div className="px-4 py-6 space-y-4">;
                {services && services.map((category, index) => (;
                  <div key={index}>";
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">;
                      {category && category.category}
                    </h3>";
                    <div className="space-y-2 ml-4">;
                      {category && category.items.map((service: unknown, serviceIndex: unknown ;
                        <Link
                          key={serviceIndex}
                          to={service && service.path}"
                          className="block text-gray-300 hover:text-white transition-colors duration-200"
                          onClick={( setIsOpen(false)}>;
                          {service && service.name}
                        </Link>;
                      ))}
                    </div>;
                  </div>;
                ))}

                <div className="pt-4 border-t border-white/10 space-y-2">;
                  <Linkto="/solutions"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    Solutions;
                  </Link>;
                  <Linkto="/about"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    About;
                  </Link>;
                  <Linkto="/blog"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    Blog;
                  </Link>;
                  <Linkto="/contact"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}>;
                    Contact;
                  </Link>;
                </div>;
              </div>;
            </motion && motion.div>;
          )};
        </AnimatePresence>;
      </nav>;
    </header>;
  )}
'"`;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo />
}setQuery ('')
//Track analytics event
}searchSuggestions= {
  suggestions
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={
  (e) => {
  > {'
  t ('auth.login') "
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {'
  t ('auth.signup')
}</Link> </>)
}{
  isLoggedIn && <UserMenu />
}</div> </div> <ModeToggle /> <LanguageSelector /> {"
  !isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={
  (e) => {
  e.preventDefault ()
setLoginOpen (true)
}'
}t ('auth.login')
}</Link>)
}{
  isLoggedIn && <UserMenu />
}</div> {
  /* Mobile menu button */ "
}<button) : (<Menu className="h-6 w-6" />) "
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={
  () => setMobileMenuOpen (false) "
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {
  unreadCount
}onClose= {
  () => setMobileMenuOpen (false)
}openLoginModal= {
  (returnToPath) => setLoginOpen (true)
}/> </div> </div>)
}{
  isMobile && <MobileBottomNav unreadCount= {
  unreadCount

  unreadCount 
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}/>
}<LoginModal isOpen= {
  loginOpen
}onOpenChange= {
  setLoginOpen
}/> </>)
}'"  { opacity: 0
  height: 0
}}
              animate = {
  { opacity: 1
  height: 'auto'
}}
              exit = {
  { opacity: 0
  height: 0
<<<<<<< HEAD
<<<<<<< HEAD
;
;
=======
          <button;
            className='lg:hidden p - 2 rounded focus:outline - none flex - shrink - 0';
            on_click={() => setMobileMenuOpen (!mobileMenuOpen)}
            aria - expanded={mobileMenuOpen}
            aria - label={t ('general.toggle_mobile_menu')}          >;
            {mobileMenuOpen ? (
              <X className='h - 6 w - 6' />) : (
              <Menu className='h - 6 w - 6' />)}
          </button>;
}}
              transition={{ duration: 0.3 }}"
              className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">"
              <div className="px-4 py-6 space-y-4">
                {services.map((category, index) => (
                  <div key={index}>"
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">
                      {category.category}
                    </h3>"
                    <div className="space-y-2 ml-4">
                      {category.items.map((service: unknown, serviceIndex: unknown
                        <Link
                          key={serviceIndex}
                          to={service.path}"
                          className="block text-gray-300 hover:text-white transition-colors duration-200"
                          onClick={( setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Link                    to="/solutions"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link                    to="/about"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link                    to="/blog"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link                    to="/contact"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={: unknown setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )}
'"`
}
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={(returnToPath) => setLoginOpen(true)}
            />;
          </div>;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <button;
            className='lg:hidden p - 2 rounded focus:outline - none flex - shrink - 0';
            on_click={() => setMobileMenuOpen (!mobileMenuOpen)}
            aria - expanded={mobileMenuOpen}
            aria - label={t ('general.toggle_mobile_menu')}          >;
            {mobileMenuOpen ? (
              <X className='h - 6 w - 6' />) : (
              <Menu className='h - 6 w - 6' />)}
          </button>;
        </div>;
return (<> <header className="sticky top - 0 z - 70 w - full border - b border - primary / 20 bg - card / 90 backdrop - blur - md" role="navigation" aria - label="Primary" data - testid="header" > <div className="container flex items - center justify - between gap - 2 min - h-16 px - 4 sm:px - 6 max-[320px]:flex - wrap" > <Logo />;
}set_query ('');
//Track analytics event;
}search_suggestions= {
  suggestions;
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link on_click={
  (e) => {
  > {';
  t ('auth.login') ";
}</Link> <Link href="/signup" className="text - sm hover:text - primary whitespace - nowrap" > {';
  t ('auth.signup');
}</Link> </>);
}{
  isLoggedIn && <UserMenu />;
}</div> </div> <ModeToggle /> <LanguageSelector /> {";
  !isLoggedIn && (<Link href="/auth / login" className="text - sm hover:text - primary" data - testid="login - link" on_click={
  (e) => {
  e.prevent_default ();
setLoginOpen (true);
}';
}t ('auth.login');
}</Link>);
}{
  isLoggedIn && <UserMenu />;
}</div> {
  /* Mobile menu button */ ";
}<button) : (<Menu className="h - 6 w - 6" />) ";
}</button> </div> </header> <div className="absolute inset - 0 bg - black / 50 backdrop - blur - sm" on_click={
  () => setMobileMenuOpen (false) ";
}aria - hidden="true" /> <div className="relative bg - card border - t border - primary / 20 max - h-[calc (100vh - 4rem) ] overflow - y-auto" > <MobileMenu unread_count= {
  unread_count;
}on_close= {
  () => setMobileMenuOpen (false);
}openLoginModal= {
  (returnToPath) => setLoginOpen (true);
}/> </div> </div>);
}{
  is_mobile && <MobileBottomNav unread_count= {
  unread_count;
}/>;
}<LoginModal is_open= {
  login_open;
}onOpenChange= {
  setLoginOpen;
}/> </>);
}'"  { opacity: 0,
  height: 0;
}}
              animate = {
  { opacity: 1,
  height: 'auto';
}}
              exit = {
  { opacity: 0,
  height: 0;
}}
              transition={{ duration: 0.3 }}";
              className="lg:hidden bg - slate - 900 / 95 backdrop - blur - md border - t border - white / 10">";
              <div className="px - 4 py - 6 space - y-4">;
                {services.map ((category, index) => (
                  <div key={index}>";
                    <h3 className="text - sm font - semibold text - cyan - 400 mb - 2">;
                      {category.category}




;
ursor/fix-website-loading-errors-and-merge-6662
                    </h3>";
                    <div className="space - y-2 ml - 4">;
                      {category.items.map ((service: unknown, service_index: unknown;
                        <Link;
                          key={service_index}
                          to={service.path}";
                          className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                          on_click={( setIsOpen (false)}
                        >;
                          {service.name}
                        </Link>))}
                    </div>;
                  </div>))}
                <div className="pt - 4 border - t border - white / 10 space - y-2">;
                  <Link                    to="/solutions";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    Solutions;
                  </Link>;
                  <Link                    to="/about";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    About;
                  </Link>;
                  <Link                    to="/blog";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    Blog;
                  </Link>;
                  <Link                    to="/contact";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200";
                    on_click={: unknown setIsOpen (false)}
                  >;
                    Contact;
                  </Link>;
                </div>;
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </nav>;
    </header>)}
'"`;
}

<<<<<<< HEAD
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        </div>;
      </header>;
      {mobileMenuOpen && (
        <div className='lg:hidden fixed inset - 0 z - 60 pt - 16'>;
          <div;
            className='absolute inset - 0 bg - black / 50 backdrop - blur - sm';
            on_click={() => setMobileMenuOpen (false)}
            aria - hidden='true'          />;
          <div className='relative bg - card border - t border - primary / 20 max - h-[calc (100vh - 4rem)] overflow - y-auto'>;
            <MobileMenu;
              unread_count={unread_count}
              on_close={() => setMobileMenuOpen (false)}
              openLoginModal={returnToPath => setLoginOpen (true)}            />;
          </div>;
        </div>)}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>);
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
