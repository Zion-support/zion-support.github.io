import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { MobileMenu } from '@/components/header/MobileMenu';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { useAuth } from '@/context/auth/AuthContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useMessaging } from '@/context/MessagingContext';
import { generateSearchSuggestions, slugify } from '@/utils/searchUtils';
import type { RootState } from '@/store';
<<<<<<< HEAD

export function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const router = useLocation();
  const [query, setQuery] = useState('');
  const suggestions = generateSearchSuggestions();

  let unreadCount = 0;
  try {
    const messaging = useMessaging();
    unreadCount = messaging.unreadCount;
  } catch {
    // context not available
  }

  const cartCount = useSelector((s: RootState) =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/${slugify(query)}`);
      setQuery('');
    }
=======
      // // // // // // // console.log('PrimaryNav search submit:', query);
      router.push(`/search/${slugify(query)}`);
      setQuery('');
      // // // // console.log('PrimaryNav search submit:', query);
      router.push(`/search/${slugify(query)}`);
      setQuery('')}
// Theme toggle component
const ModeToggle = () => {;
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {;
    setIsDark(!isDark);
    // Add theme switching logic here
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  };
  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
        role="navigation"
        aria-label="Primary"
        data-testid="header"
<<<<<<< HEAD
      >
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
        <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
          <Logo />
          {/* Navigation - hidden on mobile, shown on desktop */}
          <div className="hidden md:block order-1 flex-shrink-0">
            <ResponsiveNavigation />
          </div>
          {/* Actions container with responsive layout */}
          <div className="hidden md:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
<<<<<<< HEAD
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(sugg) => {
                  // Handle different suggestion types with proper navigation
                  if (sugg.id) {
                    // Product listings with IDs go to product detail page
                    router.push(`/marketplace/listing/${sugg.id}`);
                  } else if (sugg.type === 'service') {
                    // Services go to service detail page
                    router.push(`/services/${sugg.slug}`);
                  } else if (sugg.type === 'talent') {
                    // Talent profiles go to talent detail page
                    router.push(`/talent/${sugg.slug}`);
                  } else {
                    // Default to search results
                    router.push(`/search/${slugify(sugg.title)}`);
                  }
                  setQuery('');
=======
            <form onSubmit={handleSubmit} className="flex-shrink-0" style = {
  { width: 'clamp(12rem, 20vw,
  16rem)' 
}}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                  // // // // // // // console.log('PrimaryNav search suggestion selected:', sugg);
                onSelectSuggestion = {
  (sugg) => {
                  // // // // console.log('PrimaryNav search suggestion selected:',;
  ;
  sugg);
                  // Handle different suggestion types with proper navigation
                  if (sugg.id) {
                    // Product listings with IDs go to product detail page
                    router.push(`/marketplace/listing/${sugg.id
}`)} else if (sugg.type = == 'doc' && sugg.slug && sugg.slug.startsWith('/')) {
                    // Documentation suggestions navigate directly to their path
                    router.push(sugg.slug)} else if (sugg.type === 'blog' && sugg.slug) {
                    // Blog posts navigate to blog detail page
                    router.push(`/blog/${sugg.slug}`)} else {
                    // Default: search results page with slug;
                    router.push(`/search/${sugg.slug || slugify(sugg.text)}`)};
                  setQuery('');
                  // Track analytics event
                  if (typeof window !== 'null' && window.gtag) {
                    window.gtag('event', 'search_suggestion_click', {
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug
                    })}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
                }}
                suggestions={suggestions}
                placeholder={t('search.placeholder')}
                className="w-full"
              />
            </form>
<<<<<<< HEAD

            {/* User actions */}
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  <button
                    onClick={() => router.push('/messages')}
                    className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Messages"
                  >
                    <span className="sr-only">Messages</span>
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </span>
                    )}
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => router.push('/cart')}
                    className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Shopping Cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                        {cartCount > 9 ? '9+' : cartCount}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => router.push('/profile')}
                    className="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="User Profile"
                  >
                    <img
                      src={user.avatar || '/default-avatar.png'}
                      alt={user.displayName || 'User'}
                      className="h-8 w-8 rounded-full"
                    />
                  </button>
=======
            {/* Compact actions group */}
            <div className="flex items-center gap-1">
              <PointsBadge />
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href="/cart"
                    className="relative p-1"
                    aria-label = {
  t('nav.cart',
  'Cart')
}
                  >
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
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => router.push('/login')}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t('auth.login')}
                  </button>
                  <button
                    onClick={() => router.push('/signup')}
                    className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    {t('auth.signup')}
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Mobile menu button */}
          <button
<<<<<<< HEAD
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          user={user}
          unreadCount={unreadCount}
          cartCount={cartCount}
        />
      )}

      {/* Mobile bottom navigation */}
      {isMobile && <MobileBottomNav />}
    </>
=======
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  );
}
