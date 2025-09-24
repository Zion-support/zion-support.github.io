import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Logo } from "@/components/header/Logo"
import { PointsBadge } from "@/components/loyalty/PointsBadge"
import { UserMenu } from "@/components/header/UserMenu"
import { LanguageSelector } from "@/components/header/LanguageSelector"
import { ModeToggle } from "@/components/ModeToggle"
import { useAuth } from "@/hooks/useAuth"
import { useIsMobile } from "@/hooks/use-mobile"
import { useMessaging } from "@/context/MessagingContext"
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput"
import { generateSearchSuggestions } from "@/data/marketplaceData"
import { slugify } from "@/lib/slugify"
import { ResponsiveNavigation } from "@/components/navigation/ResponsiveNavigation"
import { MobileMenu } from "@/components/header/MobileMenu"
import { MobileBottomNav } from "@/components/header/MobileBottomNav"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import type { RootState } from "@/store"
export function PrimaryNav() {;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false),;
  const { user } = useAuth(),;
  const isLoggedIn = !!user;
  const isMobile = useIsMobile()
  const { t } = useTranslation(),;
  const router = useLocation()
  const [query, setQuery] = React.useState(''),;
  const suggestions = generateSearchSuggestions()

  let unreadCount = 0;
  try {;
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount
  } catch {;
    //[^;]*
  };

  const cartCount = useSelector((s: RootState) =>;
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0);
  );
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault()
    if (query.trim()) {;
      console.log('PrimaryNav search submit:', query),;
      router.push(`/search/${slugify(query)}`),;
      setQuery(''),;
    };
  },;

  return (
    <>;
      <header;
        className="[^"]*"
        role="navigation"
        aria-label="Primary"
        data-testid="header"
      >;
        <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">;
          <[^>]*/>

          {/* Navigation - hidden on mobile, shown on desktop */};
          <div className="hidden md:block order-1 flex-shrink-0">;
            <[^>]*/>
          </[^>]*>

          {/* Actions container with responsive layout */};
          <div className="hidden md:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">;
            {/* Search form with clamped width */};
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>;
              <EnhancedSearchInput;
                value={query};
                onChange={setQuery};
                onSelectSuggestion={(sugg) => {;
                  console.log('PrimaryNav search suggestion selected:', sugg),;
                  //[^;]*
                  if (sugg.id) {;
                    //[^;]*
                    router.push(`/marketplace/listing/${sugg.id}`),;
                  } else if (sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {;&& sugg.slug && sugg.slug.startsWith('/')) {; sugg.slug && sugg.slug.startsWith('/')) {
                    //[^;]*
                    router.push(sugg.slug),;
                  } else if (sugg.type === 'blog' && sugg.slug) {;&& sugg.slug) {; sugg.slug) {
                    //[^;]*
                    router.push(`/blog/${sugg.slug}`),;
                  } else {;
                    //[^;]*
                    router.push(`/search/${sugg.slug || slugify(sugg.text)}`)
                  };
                  setQuery(''),;

                  //[^;]*
                  if (typeof window !== 'undefined' && window.gtag) {;&& window.gtag) {; window.gtag) {
                    window.gtag('eventsearch_suggestion_click', {;
                      search_term: sugg.text,suggestion_type: sugg.type,suggestion_id: sugg.id || sugg.slug
                    });
                  };
                }};
                searchSuggestions={suggestions};
              />;
            </[^>]*>

            {/* Compact actions group */};
            <div className="flex items-center gap-1">;
              <[^>]*/>
              <HoverCard openDelay={100}>;
                <HoverCardTrigger asChild>;
                  <Link;
                    href="/cart"
                    className="[^"]*"
                    aria-label={t('nav.cartCart')};
                  >;
                    <[^>]*/>
                    {cartCount > 0 && (;&& (; (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">;
                        {cartCount};
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>
                <HoverCardContent>;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Compact controls group */};
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">;
              <[^>]*/>
              <[^>]*/>
            </[^>]*>

            {/* Auth links - flex wrap for very small screens */};
            <div className="flex items-center gap-1 flex-wrap">;
              {!isLoggedIn && (;&& (; (
                <>;
                  <Link;
                    href="/auth/login"
                    className="[^"]*"
                    data-testid="login-link"
                  >;
                    {t('auth.login')};
                  </[^>]*>
                  <Link;
                    href="/signup"
                    className="[^"]*"
                  >;
                    {t('auth.signup')};
                  </[^>]*>
                </[^>]*>
              )};
            {isLoggedIn && <UserMenu />};&& <UserMenu />}; <UserMenu />}
            </[^>]*>
          </[^>]*>

          {/* Mobile menu button */};
          <button;
            className="[^"]*"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)};
            aria-expanded={mobileMenuOpen};
            aria-label={t('general.toggle_mobile_menu')};
          >;
            {mobileMenuOpen ? (;
              <[^>]*/>
            ) : (;
              <[^>]*/>
            )};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {mobileMenuOpen && (;&& (; (
        <div className="md:hidden fixed inset-0 z-60 pt-16">;
          <div;
            className="[^"]*"
            onClick={() => setMobileMenuOpen(false)};
            aria-hidden="true"
          />;
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">;
            <MobileMenu;
              unreadCount={unreadCount};
              onClose={() => setMobileMenuOpen(false)};
            />;
          </[^>]*>
        </[^>]*>
      )};
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />};&& <MobileBottomNav unreadCount={unreadCount} />}; <MobileBottomNav unreadCount={unreadCount} />}
    </[^>]*>
  );
};
