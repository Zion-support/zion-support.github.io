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
<<<<<<< HEAD
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