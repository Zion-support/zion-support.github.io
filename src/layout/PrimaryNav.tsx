import { useState  } from 'react';
import { logDebug, logErrorToProduction  } from '@/utils/productionLogger';

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
          <div className='hidden lg:block order-1 flex-shrink-0'>
            <ResponsiveNavigation
              openLoginModal={returnToPath => setLoginOpen(true)}
            />          </div>

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
                    router && router.push(`/marketplace/listing/${sugg && sugg.id}`);
                  } else if (;
                    sugg && sugg.type === 'doc' &&;
                    sugg && sugg.slug &&;
                    sugg && sugg.slug.startsWith('/');
                  ) {;
                    // Documentation suggestions navigate directly to their path;
                    router && router.push(sugg && sugg.slug);
                  } else if (sugg && sugg.type === 'blog' && sugg && sugg.slug) {;
                    // Blog posts navigate to blog detail page;
                    router && router.push(`/blog/${sugg && sugg.slug}`);
                  } else {;
                    // Default: search results page with query parameter;
                    router && router.push(`/search?q=${encodeURIComponent(sugg && sugg.text)}`);
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
})}
                }}
                search_suggestions = {suggestions, }
              />;
            </form>;
            {/* Compact actions group */}

            <div className="flex items-center gap-1">

                    href="/auth/login"
                    className="text-sm hover: text-primary whitespace-nowrap"
                    data-testid="login-link"
                    onClick={(e) => {
                      e.preventDefault(),
                      setLoginOpen(true)
            <div className="flex items-center gap-1">;
                    {t('auth.login')}
                  </Link>



            </div>;
          </div>;

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

}onClose= {
  () => setMobileMenuOpen (false)
}openLoginModal= {
  (returnToPath) => setLoginOpen (true)
}/> </div> </div>)
}{
  isMobile && <MobileBottomNav unreadCount= {
  unreadCount

  unreadCount 


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

;



