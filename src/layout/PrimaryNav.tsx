import React, { useState } from 'react.ts';
import { Link, useLocation             } from 'react-router-dom.ts';
import { Logo             } from '@/components/header/Logo';
import { PointsBadge             } from '@/components/loyalty/PointsBadge';
import { UserMenu             } from '@/components/header/UserMenu';
import { LanguageSelector             } from '@/components/header/LanguageSelector';
import { ModeToggle             } from '@/components/ModeToggle';
import { useAuth             } from '@/hooks/useAuth';
import { useIsMobile             } from '@/hooks/use-mobile';
import { useMessaging             } from '@/context/MessagingContext';
import { EnhancedSearchInput             } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions             } from '@/data/marketplaceData';
import { slugify             } from '@/lib/slugify';
import { ResponsiveNavigation             } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu             } from '@/components/header/MobileMenu';
import { MobileBottomNav             } from '@/components/header/MobileBottomNav';
import { Menu, X, ShoppingCart import { useTranslation             } from 'react-i18next.ts';
import { useSelector             } from 'react-redux.ts';
import type { RootState } from '@/store';

<<<<<<< HEAD
export function PrimaryNav(...args[]: any):  {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const router = useLocation();
  const [query, setQuery] = React.useState('');
  const suggestions = generateSearchSuggestions();

  let unreadCount = 0;
  try {
    const messaging = useMessaging();
    unreadCount = messaging.unreadCount} catch {
    // context not available

  const cartCount = useSelector((s: anyanyanyanyanyanyanyanyanyanyanyanyRootState)              =>;
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0),;
  );

  const handleSubmit = (e: anyanyanyanyanyanyanyanyanyanyanyanyReact.FormEvent)              => {;
    e.preventDefault();
    if (query.trim()) {
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log('PrimaryNav search submit:', query);
=======
      // // // // // // // console.log('PrimaryNav search submit:', query);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      router.push(`/search/${slugify(query)}`);
      setQuery('');

=======
      // // // // console.log('PrimaryNav search submit:', query);
      router.push(`/search/${slugify(query)}`);
      setQuery('')}
=======
// Theme toggle component
const ModeToggle = () => {;
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {;
    setIsDark(!isDark);
    // Add theme switching logic here
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
        role="navigation"
        aria-label="Primary"
        data-testid="header"

        <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
          <Logo />

          {/* Navigation - hidden on mobile, shown on desktop */}
          <div className="hidden md:block order-1 flex-shrink-0">
            <ResponsiveNavigation />
          </div>

          {/* Actions container with responsive layout */}
          <div className="hidden md:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style = {
  { width: 'clamp(12rem, 20vw,
  16rem)' 

}}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
<<<<<<< HEAD
                onSelectSuggestion={(sugg) => {
<<<<<<< HEAD
                  // // // console.log('PrimaryNav search suggestion selected:', sugg);
=======
                  // // // // // // // console.log('PrimaryNav search suggestion selected:', sugg);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
                onSelectSuggestion = {
  (sugg) => {
                  // // // // console.log('PrimaryNav search suggestion selected:',;
  ;
  sugg);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  // Handle different suggestion types with proper navigation
                  if (sugg.id) {
                    // Product listings with IDs go to product detail page
                    router.push(`/marketplace/listing/${sugg.id

}`)} else if (sugg.type = == 'doc' && sugg.slug && sugg.slug.startsWith('/')) {
                    // Documentation suggestions navigate directly to their path
                    router.push(sugg.slug)} else if (sugg.type === 'blog' && sugg.slug) {
                    // Blog posts navigate to blog detail page
<<<<<<< HEAD
                    router.push(`/blog/${sugg.slug}`);
                  } else {
                    // Default: search results page with slug
                    router.push(`/search/${sugg.slug || slugify(sugg.text)}`);

=======
                    router.push(`/blog/${sugg.slug}`)} else {
                    // Default: search results page with slug;
                    router.push(`/search/${sugg.slug || slugify(sugg.text)}`)};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  setQuery('');

                  // Track analytics event
                  if (typeof window !== 'null' && window.gtag) {
                    window.gtag('event', 'search_suggestion_click', {
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug
<<<<<<< HEAD
                    });

=======
                    })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                }}
                searchSuggestions = {suggestions}
              />
            </form>

            {/* Compact actions group */}
            <div className="flex items-center gap-1">
              <PointsBadge />
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href="/cart"
                    className="relative p-1"
<<<<<<< HEAD
                    aria-label={t('nav.cart', 'Cart')}

=======
                    aria-label = {
  t('nav.cart',
  'Cart')

}
                  >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground hover:text-primary" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Cart preview</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

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
                    href="/auth/login"
                    className="text-sm hover:text-primary whitespace-nowrap"
                    data-testid="login-link"

                    {t('auth.login')}
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm hover:text-primary whitespace-nowrap"

                    {t('auth.signup')}
                  </Link>
                </>
              )}
              {isLoggedIn && <UserMenu />}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
<<<<<<< HEAD
            className="md:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}

            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
=======
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </button>
        </div>
<<<<<<< HEAD
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
              unreadCount={unreadCount}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  )}
=======

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial = {
  { opacity: 0,
  height: 0 






}}
              animate = {
  { opacity: 1,
  height: 'auto' 






}}
              exit = {
  { opacity: 0,
  height: 0 






}}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {services.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">
                      {category.category}
                    </h3>
                    <div className="space-y-2 ml-4">
                      {category.items.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="block text-gray-300 hover:text-white transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Link 
                    to="/solutions" 
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link 
                    to="/about" 
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>;
              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </nav>;
    </header>;
  );
<<<<<<< HEAD
</div>}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
