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
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
        role="navigation"
        aria-label="Primary"
        data-testid="header"
      >
        <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
          <Logo />

          {/* Navigation - hidden on mobile, shown on desktop */}
          <div className="hidden md:block order-1 flex-shrink-0">
            <ResponsiveNavigation />
          </div>

          {/* Actions container with responsive layout */}
          <div className="hidden md:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
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
                }}
                suggestions={suggestions}
                placeholder={t('search.placeholder')}
                className="w-full"
              />
            </form>

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
  );
}
