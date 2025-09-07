
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
import { useState } from 'react
import { logDebug, logErrorToProduction } from '@/utils/productionLogger
import Link from 'next/link
import { useRouter } from 'next/router
import { Logo } from '@/components/header/Logo
import { PointsBadge } from '@/components/loyalty/PointsBadge
import { UserMenu } from '@/components/header/UserMenu
import { LanguageSelector } from '@/components/header/LanguageSelector
import { ModeToggle } from '@/components/ModeToggle
import { useAuth } from '@/hooks/useAuth
import { useIsMobile } from '@/hooks/use-mobile
import { useMessaging } from '@/context/MessagingContext
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput
import { generateSearchSuggestions } from '@/data/marketplaceData
import { slugify } from '@/lib/slugify
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation
import { MobileMenu } from '@/components/header/MobileMenu
import { MobileBottomNav } from '@/components/header/MobileBottomNav
import { Menu, X } from 'lucide-react
import { useTranslation  } from 'react-i18next';
import { CartDrawer  } from '@/components/cart/CartDrawer';
import { LoginModal } from '@/components/auth/LoginModal';
import { useState } from 'react';
import { log_debug, logErrorToProduction } from '@/utils/ production_logger';
import Link from 'next / link';
import { use_router } from 'next/router';
import { Logo } from '@/components/ header / Logo';
import { PointsBadge } from '@/components/ loyalty / PointsBadge';
import { UserMenu } from '@/components/ header / UserMenu';
import { LanguageSelector } from '@/components/ header / LanguageSelector';
import { ModeToggle } from '@/components/ ModeToggle';
import { use_auth } from '@/hooks/ use_auth';
import { useIsMobile } from '@/hooks/ use - mobile';
import { use_messaging } from '@/context / MessagingContext';
import { EnhancedSearchInput } from '@/components/ search / EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { slugify } from '@/lib / slugify';
import { ResponsiveNavigation } from '@/components/ navigation / ResponsiveNavigation';
import { MobileMenu } from '@/components/ header / MobileMenu';
import { MobileBottomNav } from '@/components/ header / MobileBottomNav';
import { Menu, X } from 'lucide-react';
import { use_translation } from 'react - i18next';
import { CartDrawer } from '@/components/ cart / CartDrawer';
import { LoginModal } from '@/components/ auth / LoginModal';
export /**
 * PrimaryNav - Function description;
pr-12325
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
  const [query, set_query] = useState ();
pr-12325
  const suggestions = generateSearchSuggestions ();
  let unread_count = 0;

  try {
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount
  } catch {

    // context not available

  // TODO: Implement
}
    const messaging = useMessaging()
    unreadCount = messaging.unreadCount;
  } catch {
  // TODO: Implement
    // context not available;
pr-12325
  };
;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();


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
export function PrimaryNav() {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user } = useAuth();

              >
origin/cursor/automate-test-improve-and-merge-code-2533
                {t('auth.login')}
              </Link>
            )}
            {isLoggedIn && <UserMenu />}

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

          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">"


                className="text-sm hover:text-primary"""
          <div className="hidden md: flex lg:hidden items-center gap-2 order-2">;"


                className="text-sm hover:text-primary";""



            <div className='flex items - center gap - 1 flex - wrap'>;
                <>;
pr-12325
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
            </div>;
          </div>;
          {/* Mobile menu button */}


          </div>;
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={t('general.toggle_mobile_menu')}
          >


            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>;
        </div>;
      </header>;
      {mobileMenuOpen && (;
        <div className='lg:hidden fixed inset-0 z-60 pt-16'>;
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-60 pt-16">
          <div

      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
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
origin/cursor/automate-test-improve-and-merge-code-2533
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

}searchSuggestions= {;
  suggestions ;
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={;
  (e) => {;
  > {';
  t ('auth.login') ";
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {';
  t ('auth.signup') ;
origin/cursor/automate-test-improve-and-merge-code-2533
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
  !isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={;
  (e) => {;
  e.preventDefault ();
setLoginOpen (true) ;
}';
}t ('auth.login') ;
origin/cursor/automate-test-improve-and-merge-code-2533
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
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={;
  () => setMobileMenuOpen (false) ";
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {;
  unreadCount ;
}onClose= {;
origin/cursor/automate-test-improve-and-merge-code-2533
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
  unreadCount

  unreadCount 


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

;
  isMobile && <MobileBottomNav unreadCount= {;
  unreadCount ;
}/> ;
}<LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
}/> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533

                    href='/signup';

                </>)}

          <div className='hidden md:flex lg:hidden items - center gap - 2 order - 2'>;


                className='text - sm hover:text - primary';


              {isLoggedIn && <UserMenu  />}

          <button;
            className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0""
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
</button>"
              <X className="h-6 w-6" />"
              <Menu className="h-6 w-6" />"

          </button>
        <div className="lg:hidden fixed inset-0 z-60 pt-16">"
          <div;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );

};"
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo /> ;"
</header>
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <LinkonClick={
} <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {';
)
} </>) ;
}{;
  isLoggedIn && <UserMenu /> ;

}</div> </div> <ModeToggle /> <LanguageSelector /> {";"
  !isLoggedIn && (<Linkhref="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={")
  (e) => {;

}) ;

}</div> {;"
}<button) : (<Menu className="h-6 w-6" />) ";"
}</button> </div> </header> <divclassName="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={""
  () => setMobileMenuOpen (false) ";"
</divclassName>"
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenuunreadCount= {"
}/> </div> </div>) ;
  isMobile && <MobileBottomNavunreadCount= {
  unreadCount;
}/> ;

}<LoginModalisOpen= {
  loginOpen;
}onOpenChange= {
  setLoginOpen;
}/> </>) ;
              <div className="px-4 py-6 space-y-4">;"
                  <div key={index}>";"
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">;"
</h3>"
                    </h3>";""
                    <div className="space-y-2 ml-4">;"
                          key={serviceIndex}"
                          to={service && service.path}"""
                          className="block text-gray-300 hover:text-white transition-colors duration-200""
                          onClick={( setIsOpen(false)}>;

                <div className="pt-4 border-t border-white/10 space-y-2">;"
                  <Linkto="/solutions"""
                    onClick={: unknown setIsOpen(false)}>;

                  ;"
                  <Linkto="/about"""

                  <Linkto="/blog"""

                  <Linkto="/contact"""

            </motion && motion.div>;
          )};
      </nav>;
    </header>;"
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo />"
}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={
} <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {
} </>)
}{
  isLoggedIn && <UserMenu />

}</div> </div> <ModeToggle /> <LanguageSelector /> {""
  !isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={")
  (e) => {


}</div> {"
}<button) : (<Menu className="h-6 w-6" />) ""
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={""
  () => setMobileMenuOpen (false) ""
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {"
}/> </div> </div>)
  isMobile && <MobileBottomNav unreadCount= {
"`;
pr-12325
