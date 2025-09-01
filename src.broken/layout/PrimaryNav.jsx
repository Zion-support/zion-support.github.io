import React, { useState } from 'react';
import { useState } from 'react';

export default function Page() {
`);
            setQuery('');

            // console.log('PrimaryNav search submit:', query);`
            router(`/search/${slugify(query)}`);
            // console.log('PrimaryNav search submit:', query);`
            navigate(`/search/${slugify(query)}`);
            setQuery('');
        }
    };
    return (<>
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation"  data-testid="header">"
        <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
          <Logo />

          {/* Navigation - hidden on mobile, shown on desktop */}"
          <div className="hidden md:block order-1 flex-shrink-0">
            <ResponsiveNavigation />
          </div>

          {/* Actions container with responsive layout */}"
          <div className="hidden md:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            // // // // // // // // console.log('PrimaryNav search suggestion selected:', sugg);
            // Handle different suggestion types with proper navigation
            if(sugg.id) {

                // Product listings with IDs go to product detail page`
                navigate(`/marketplace/listing/${sugg.id}`);

            else if(sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {

                // Documentation suggestions navigate directly to their path
                navigate(sugg.slug);

            else if(sugg.type === 'blog' && sugg.slug) {

                // Blog posts navigate to blog detail page`
                navigate(`/blog/${sugg.slug}`);

            else {

                // Default: search results page with slug`
                navigate(`/search/${sugg.slug || slugify(sugg.text)}`);"
            <form onSubmit={handleSubmit} className="flex-shrink-0" style = {

  { width: 'clamp(12rem, 20vw,
<<<<<<< HEAD
  16rem)'
=======
  16rem)

>>>>>>> main

}}>
              <EnhancedSearchInput value={query} onChange={setQuery} onSelectSuggestion = {

  (sugg) => {

            // console.log('PrimaryNav search suggestion selected:',
  sugg);
            // Handle different suggestion types with proper navigation
            if(sugg.id) {

                // Product listings with IDs go to product detail page`
                router(`/marketplace/listing/${sugg.id

<<<<<<< HEAD
=======

`
>>>>>>> main
}`);
            }
            else if(sugg.type === 'doc' && sugg.slug && sugg.slug.startsWith('/')) {

                // Documentation suggestions navigate directly to their path
                router(sugg.slug);
            }
            else if(sugg.type === 'blog' && sugg.slug) {

                // Blog posts navigate to blog detail page`
                router(`/blog/${sugg.slug}`);
            }
            else {

                // Default: search results page with slug`
                router(`/search/${sugg.slug || slugify(sugg.text)}`);
            }
            setQuery('');
            // Track analytics event'
            if(typeof window !== 'null' && window.gtag) {

                window.gtag('event',search_suggestion_click', {

                    search_term: sugg.text,
                    suggestion_type: sugg.type,
                    suggestion_id: sugg.id || sugg.slug
                })}
        }} searchSuggestions={suggestions}/>
            </form>

            {/* Compact actions group */}"
            <div className="flex items-center gap-1">
              <PointsBadge />
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>"
                  <Link href="/cart" className="relative p-1" aria-label= {

  t('nav.cart',Cart')

<<<<<<< HEAD
}>
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground hover:text-primary"/>
=======

}>"
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground hover:text-primary"/>"
>>>>>>> main
                    {cartCount > 0 && (<span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                        {cartCount}
                      </span>)}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Compact controls group */}"
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle />
              <LanguageSelector />
            </div>

            {/* Auth links - flex wrap for very small screens */}"
            <div className="flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (<>"
                  <Link href="/auth/login" className="text-sm hover:text-primary whitespace-nowrap" data-testid="login-link">
                    {t('auth.login')}
                  </Link>"
                  <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap">
                    {t('auth.signup')}
                  </Link>
                </>)}
              {isLoggedIn && <UserMenu />}
            </div>
<<<<<<< HEAD

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded focus:outline-none flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label={t('general.toggle_mobile_menu')}>
=======
          
          {/* Mobile menu button */}'"
          <button className="md:hidden p-2 rounded focus:outline-none flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label={t('general.toggle_mobile_menu')}>"
>>>>>>> main
            {mobileMenuOpen ? (<X className="h-6 w-6"/>) : (<Menu className="h-6 w-6"/>)}
          </button>
        </div>
      </header>"
      {mobileMenuOpen && (<div className="md:hidden fixed inset-0 z-60 pt-16">"
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} aria-hidden="true"/>"
          <div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu unreadCount={unreadCount} onClose={() => setMobileMenuOpen(false)}/>
          </div>
        </div>)}
      {isMobile && <MobileBottomNav unreadCount={unreadCount}/>}
    </>)}
'"`