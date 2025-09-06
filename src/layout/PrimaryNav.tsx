<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import { useState  } from 'react';
import { logDebug, logErrorToProduction  } from '@/utils/productionLogger';
=======
import { useState } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Menu, X } from 'lucide-react'
import { useTranslation  } from 'react-i18next';
import { CartDrawer  } from '@/components/cart/CartDrawer';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  try {
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount
  } catch {
    // context not available
<<<<<<< HEAD
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
=======
  };
;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  }
=======
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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
          <div className='hidden lg:block order-1 flex-shrink-0'>
            <ResponsiveNavigation
              openLoginModal={returnToPath => setLoginOpen(true)}
            />          </div>
=======
          
          {/* Navigation - hidden on mobile and tablets, shown on desktop */}
          <div className="hidden lg:block order-1 flex-shrink-0">
            <ResponsiveNavigation openLoginModal={(returnToPath) => setLoginOpen(true)} />
          </div>
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Actions container with responsive layout */}
          <div className="hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
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
                  } else {
                    // Default: search results page with query parameter
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`)
                  }
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
=======
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
                  if (typeof window !== 'undefined' && window.gtag) {;
                    window.gtag('eventsearch_suggestion_click', {;
                      search_term: sugg.text,;
                      suggestion_type: sugg.type,;
                      suggestion_id: sugg.id || sugg.slug;
                    });
                  }
                }}
                searchSuggestions={suggestions}
              />;
            </form>;
            {/* Compact actions group */}
            <div className="flex items-center gap-1">
              <PointsBadge />
              <CartDrawer />
            </div>
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                    href='/auth/login'
                    className='text-sm hover:text-primary whitespace-nowrap'
                    data-testid='login-link'
                    onClick={e => {
                      e.preventDefault()
                      setLoginOpen(true) }}
                  >
=======
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
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">;
              <ModeToggle />;
              <LanguageSelector />;
            </div>;
            {/* Auth links - flex wrap for very small screens */}
            <div className="flex items-center gap-1 flex-wrap">;
              {!isLoggedIn && (;
                <>;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {t('auth.login')}
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm hover:text-primary whitespace-nowrap"
                  >
                    {t('auth.signup')}
                  </Link>
                </>
              )}
              {isLoggedIn && <UserMenu />}
<<<<<<< HEAD
            </div>
          </div>
          {/* Tablet view (md to lg) - simplified controls */}
          <div className='hidden md:flex lg:hidden items-center gap-2 order-2'>
=======
            </div>;
          </div>;
          {/* Tablet view (md to lg) - simplified controls */}
          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <ModeToggle />
            <LanguageSelector />
            {!isLoggedIn && (
              <Link
<<<<<<< HEAD
                href='/auth/login'
                className='text-sm hover:text-primary'
                data-testid='login-link'
                onClick={e => {
                  e.preventDefault()
                  setLoginOpen(true) }}

              >
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {t('auth.login')}
              </Link>
            )}
            {isLoggedIn && <UserMenu />}
<<<<<<< HEAD
          </div>
              {isLoggedIn && <UserMenu  />}
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 rounded focus:outline-none flex-shrink-0'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}          >
=======
          </div>;
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}
          >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  )
}
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
<<<<<<< HEAD
  unreadCount
=======
  unreadCount 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
  );

};
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo /> ;
}setQuery ('');
//Track analytics event ;

}searchSuggestions= {;
  suggestions ;
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={;
  (e) => {;
  > {';
  t ('auth.login') ";
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {';
  t ('auth.signup') ;
}</Link> </>) ;
}{;
  isLoggedIn && <UserMenu /> ;
}</div> </div> <ModeToggle /> <LanguageSelector /> {";
  !isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={;
  (e) => {;
  e.preventDefault ();
setLoginOpen (true) ;
}';
}t ('auth.login') ;
}</Link>) ;
}{;
  isLoggedIn && <UserMenu /> ;
}</div> {;
  /* Mobile menu button */ ";
}<button) : (<Menu className="h-6 w-6" />) ";
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={;
  () => setMobileMenuOpen (false) ";
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {;
  unreadCount ;
}onClose= {;
  () => setMobileMenuOpen (false) ;
}openLoginModal= {;
  (returnToPath) => setLoginOpen (true) ;
}/> </div> </div>) ;
}{;
  isMobile && <MobileBottomNav unreadCount= {;
  unreadCount ;
}/> ;
}<LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
}/> </>) ;
}'"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
        </div>;
      )}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
