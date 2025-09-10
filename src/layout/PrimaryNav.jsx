import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/header/Logo';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { UserMenu } from '@/components/header/UserMenu';
import { LanguageSelector } from '@/components/header/LanguageSelector';
import { ModeToggle } from '@/components/ModeToggle';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMessaging } from '@/context/MessagingContext';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { slugify } from '@/lib/slugify';
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu } from '@/components/header/MobileMenu';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const router = useNavigate();
  const [query, setQuery] = useState('');
  const suggestions = generateSearchSuggestions();
  
  // Get unread count from messaging context
  const { unreadCount = 0 } = useMessaging();
  
  // Get cart count from Redux store
  const cartCount = useSelector(state => state.cart?.items?.length || 0);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim()) {
      router(`/search/${slugify(searchQuery)}`);
      setQuery('');
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    if (suggestion.id) {
      router(`/marketplace/listing/${suggestion.id}`);
    } else if (suggestion.type === 'doc' && suggestion.slug) {
      router(suggestion.slug);
    } else if (suggestion.type === 'page') {
      router(suggestion.slug);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <ResponsiveNavigation />
            </div>
          )}

          {/* Search Bar - Desktop */}
          {!isMobile && (
            <div className="flex-1 max-w-md mx-4">
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSearch={handleSearch}
                onSelectSuggestion={handleSuggestionSelect}
                suggestions={suggestions}
                placeholder={t('search.placeholder', 'Search products, docs, or pages...')}
              />
            </div>
          )}

          {/* Right Side Actions - Desktop */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              {/* Points Badge */}
              {user && <PointsBadge />}
              
              {/* Cart */}
              <Link to="/cart" className="relative p-2 hover:bg-accent rounded-md">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Language Selector */}
              <LanguageSelector />

              {/* Mode Toggle */}
              <ModeToggle />

              {/* User Menu */}
              <UserMenu />
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-accent rounded-md"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}

        {/* Mobile Search Bar */}
        {isMobile && (
          <div className="pb-4">
            <EnhancedSearchInput
              value={query}
              onChange={setQuery}
              onSearch={handleSearch}
              onSelectSuggestion={handleSuggestionSelect}
              suggestions={suggestions}
              placeholder={t('search.placeholder', 'Search...')}
            />
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav />}
    </header>
  );
}

export default PrimaryNav;