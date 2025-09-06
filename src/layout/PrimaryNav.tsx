import { useState } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
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
import { Menu, X } from 'lucide-react'
import { useTranslation  } from 'react-i18next';
import { CartDrawer  } from '@/components/cart/CartDrawer';
import { LoginModal } from '@/components/auth/LoginModal';
export function PrimaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user } = useAuth();
  const isLoggedIn = null;
                  setLoginOpen(true)
                }}
              >
                {t('auth.login')}
              </Link>
            )}
            {isLoggedIn && <UserMenu />}
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
            {mobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 z-60 pt-16'>
          <div
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
