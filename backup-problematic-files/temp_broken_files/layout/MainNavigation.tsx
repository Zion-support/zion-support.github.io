<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import Link from "next/link";""
import { useRouter } from "next/router";""
import { useState } from "react";""
import { cn } from "@/lib/utils";""
import { useAuth } from "@/hooks/useAuth";""
import { useTranslation } from "react-i18next";""
import { useFavorites } from "@/hooks/useFavorites";""
import { useCart } from "@/context/CartContext";""
import { Heart, MessageSquare, CreditCard, ShoppingCart, Wallet } from 'lucide-react';
import { LanguageSelector } from '@/components/header/LanguageSelector';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';
import { LoginModal } from '@/components/auth/LoginModal';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
interface MainNavigationProps {;
  isAdmin?:boolean,;
  unreadCount?:number,;
  className?:string,;}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function MainNavigation({ isAdmin = false, unreadCount = 0, className } MainNavigationProps) {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false), // Add state;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const [loginOpen, setLoginOpen] = useState(false),;
  const { count } = useFavorites(),;
  const { items } = useCart(),;
  const cartCount = items.length,;
  const router = useRouter(), // Changed from useLocation;
  const { t } = useTranslation(),;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleCartClick = (e:React.MouseEvent) => {;
    if (!isAuthenticated) {;
      e.preventDefault(),;
      setLoginOpen(true),;
      return;
    }
    setIsMobileMenuOpen(false),;
  },;
  const baseLinks = [;
    {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      key: 'home';,;
      href: '/';,;
      matches:(path:string) => path === '/';
      key: 'marketplace';,;
      href: '/marketplace';,;
      matches:(path:string) => path.startsWith('/marketplace');
      key: 'categories';,;
      href: '/categories';,;
      matches:(path:string) => path.startsWith('/categories');
      key: 'talent';,;
      href: '/talent';,;
      matches:(path:string) => path.startsWith('/talent') && !path.includes('/talent-dashboard');
      key: 'equipment';,;
      href: '/equipment';,;
      matches:(path:string) => path.startsWith('/equipment');
      key: 'community';,;
      href: '/community';,;
      matches:(path:string) => path.startsWith('/community') || path.startsWith('/forum');
    }]
  ],;
  const links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key;}`) })),;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;
      key: 'dashboard';,;')
      name: t('nav.dashboard');,;
      href: '/dashboard';,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      matches:(path:string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard';
    }),;
  // Add admin-only links;
  if (isAdmin) {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      key: 'analytics';,;')
      name: t('nav.analytics');,;
      href: '/analytics';,;
      matches:(path:string) => path.startsWith('/analytics');
  return (;
    <>;
      <button;
        className="navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" // Added ml-auto and mr-4 for positioning;")
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
</button>"
        <span className="navbar-toggler-icon"></span>;"
      </button>;
      <nav;"
        className={cn("navbar", className)}""
        role="navigation";""
        aria-label="Main navigation";"
      >;
</nav>
        <div;"
          id="main-navbar-collapse";"
          className={cn(;"
            "navbar-collapse",;""
            { "open":isMobileMenuOpen },;""
            "w-full md: flex md:w-auto";, // Handles visibility and desktop layout;""
            !isMobileMenuOpen && "hidden" // Explicitly hide when not open and on mobile;")
          )}
</div>"
          <ul className="navbar-nav flex flex-col md: flex-row md:items-center md:gap-1"> {/* Added navbar-nav and flex direction classes */;}"
</ul>"
              <li key={link.name} className="nav-item">;"
</li>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Link ;
                  href={link.href}
                  aria-label={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </li>;            ))}"
              <li className="nav-item">;"
                <Link ;"
                  href="/wishlist";""
                  aria-label="Wishlist";"
"
                  <Heart className="w-4 h-4" />;"
                    <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;"
</span>
                    </span>;                  )}
              </li>;"
                  href="/wallet";""
                  aria-label="Wallet";"
                  <Wallet className="w-4 h-4" />;"

              </li>;            )}"
                  href="/messages";""
                  aria-label="Messages";"
                  <MessageSquare className="w-4 h-4" />;"
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <HoverCard openDelay={100}>;

                <HoverCardTrigger asChild>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Link;"
                    href="/cart";""
                    aria-label={t('nav.cart')}
                    onClick={handleCartClick}
                    className={cn(;
<<<<<<< HEAD
=======
              <HoverCard openDelay={100}>;

                <HoverCardTrigger asChild>;
                  <Link;
                    href="/cart";
                    aria-label={t('nav.cart')}
                    onClick={handleCartClick}
                    className={cn(;
                      'nav-linkinline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
                      router.pathname.startsWith('/cart');
                        ? 'bg-zion-purple/20 text-zion-cyan';
                        :'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                    )}
                  >;
                    <ShoppingCart className="w-4 h-4 mr-1" />;
                    {t('nav.cartCart')}
                    {cartCount > 0 && (;
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;                        {cartCount}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      'nav-linkinline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-primary';,;')
                      router.pathname.startsWith('/cart');
                        ? 'bg-zion-purple/20 text-zion-cyan';
                        :'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';

                    <ShoppingCart className="w-4 h-4 mr-1" />;"
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;                        {cartCount}"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </span>;
                <HoverCardContent>;

                  <MiniCartPreview />;

            </li>;
<<<<<<< HEAD

          </ul>;"
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">;"
</div>

=======
          </ul>;"
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">;"
</div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <LanguageSelector />;

          </div>;
      </nav>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;

    </>;
  ),;}
 import { ;
<<<<<<< HEAD

  Heart, MessageSquare, CreditCard,   ShoppingCart, Wallet ;"
 } from "lucide-react";"

import {;

  }
  LanguageSelector ';';'
}from '@/components/header/LanguageSelector';'
  {;
  {;';'
  }
  HoverCard,   HoverCardTrigger, HoverCardContent ';';'
}from '@/components/ui/hover-card';'
  {;
  {;';'
  }
  MiniCartPreview ';';'
}from '@/components/cart/MiniCartPreview';'

  {;
  {;';
  LoginModal ';';
}from '@/components/auth/LoginModal';
interface MainNavigationProps {;

  }

  isAdmin?: boolean;
unreadCount?: number;
className?: string ;
}export function MainNavigation ({;

  isAdmin = false,   unreadCount = 0, className ;)

}: MainNavigationProps) {;
  const [isMobileMenuOpen,   setIsMobileMenuOpen] = useState (false), //Add state const { ;
  user ;
 } = useAuth ();
const isAuthenticated = !!user;
const [loginOpen, setLoginOpen] = useState (false);
const { ;
  count ;
 } = useFavorites ();


=======
  Heart, MessageSquare, CreditCard,   ShoppingCart, Wallet ;"
 } from "lucide-react";"
import {;
  {;
  {;

const { ;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  items ;
 } = useCart ();
const cartCount = items.length;
const router = useRouter (), //Changed from useLocation const { ;
  t ;
 } = useTranslation ();
const handleCartClick = (e: React.MouseEvent) => {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  e.preventDefault ();
setLoginOpen (true);
return ;
}setIsMobileMenuOpen (false) 
<<<<<<< HEAD

=======
};';'
  }
  "key": 'home';';';'
"href": '/';';';'
"matches": ("path": string) => path === '/' '
};';'
{';';'
  }
  "key": 'marketplace';';';'
"href": '/marketplace';';';'
"matches": ("path": string) => path.startsWith ('/marketplace') '
};';'
{';';'
  }
  "key": 'categories';';';'
"href": '/categories';';';'
"matches": ("path": string) => path.startsWith ('/categories') '
};';'
{';';'
  }
  "key": 'talent';';';'
"href": '/talent';';';'
"matches": ("path": string) => path.startsWith ('/talent') && !path.includes ('/talent-dashboard') '
};';'
{';';'
  }
  "key": 'equipment';';';'
"href": '/equipment';';';'
"matches": ("path": string) => path.startsWith ('/equipment') '
};';'
{';';'
  }
  "key": 'community';';';'
"href": '/community';';';'
"matches": ("path": string) => path.startsWith ('/community') || path.startsWith ('/forum') ;'
};';
const baseLinks = [ {';';
  key: 'home';';';
href: '/';';';
matches: (path: string) => path === '/' ;
};';
{';';
  key: 'marketplace';';';
href: '/marketplace';';';
matches: (path: string) => path.startsWith ('/marketplace') ;
};';
{';';
  key: 'categories';';';
href: '/categories';';';
matches: (path: string) => path.startsWith ('/categories') ;
};';
{';';
  key: 'talent';';';
href: '/talent';';';
matches: (path: string) => path.startsWith ('/talent') && !path.includes ('/talent-dashboard') ;
};';
{';';
  key: 'equipment';';';
href: '/equipment';';';
matches: (path: string) => path.startsWith ('/equipment') ;
};';
{';';
  key: 'community';';';
href: '/community';';';
matches: (path: string) => path.startsWith ('/community') || path.startsWith ('/forum') ;
  key: 'home';';';',
  href: '/';';';
matches: (path: string) => path === '/' ;
{';';
  key: 'marketplace';';';',
  href: '/marketplace';';';
matches: (path: string) => path.startsWith ('/marketplace') ;
  key: 'categories';';';',
  href: '/categories';';';
matches: (path: string) => path.startsWith ('/categories') ;
  key: 'talent';';';',
  href: '/talent';';';
matches: (path: string) => path.startsWith ('/talent') && !path.includes ('/talent-dashboard') ;
  key: 'equipment';';';',
  href: '/equipment';';';
matches: (path: string) => path.startsWith ('/equipment') ;
  key: 'community';';';',
  href: '/community';';';
matches: (path: string) => path.startsWith ('/community') || path.startsWith ('/forum') ;']
pr-12325
}];
const links = baseLinks.map (link => ({;`;
  ...link, name: t (`nav.$ {;
  link.key ;)`;
}];
const links = baseLinks.map (link => ({;`;
  ...link, name: t (`nav.$ {;
  link.key ;)`;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}`) ;
}) );
//Add authenticated-only links if (isAuthenticated) {;';
  links.push ({';';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  key: 'dashboard';';';',)
  name: t ('nav.dashboard');';';
href: '/dashboard';';';',
  matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard' ;
}) ;
}//Add admin-only links if (isAdmin) {;';
  key: 'analytics';';';',)
  name: t ('nav.analytics');';';
href: '/analytics';';';',
  matches: (path: string) => path.startsWith ('/analytics') ;"}) ;";"}return (<> <button > <span className="navbar-toggler-icon" ></span> </button> <nav) ;""
}> {;"  link.name ;";"} </li>) ) ";";"}<Link href="/wishlist" aria-label="Wishlist" onClick={;"
  () => setIsMobileMenuOpen (false) ;
  count ;"}</span>) ;";"} </li>) ";";"}<Link href="/wallet" aria-label="Wallet" onClick={;"  () => setIsMobileMenuOpen (false) ;";"}) ";";"}> <Wallet className="w-4 h-4" />  </li>) ";";"}<Link href="/messages" aria-label="Messages" onClick={;""
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  () => setIsMobileMenuOpen (false) ;';
}{';';
  unreadCount > 9 ? '9+' : unreadCount ;
}</span>) ;';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
} </li>) ';';"}? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan') ;";"}> {";";"  cartCount > 0 && (<span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" > cartCount ;";"}</span>) ";";"}  <HoverCardContent> <MiniCartPreview />   </li> </ul> <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto" > <LanguageSelector /> </div> </div> </nav> <LoginModal isOpen= {;"
  loginOpen ;
}onOpenChange= {;

<<<<<<< HEAD

=======
:temp_broken_files/layout/MainNavigation.tsx;"
  setLoginOpen ;"}/> </>) ;'";"}'"'""
  setLoginOpen ;"
}/> </>) ;'";""
}'"'""

ursor/fix-lint-push-and-merge-to-main-e10e:src/layout/MainNavigation.tsx;"`;
>>>>>>> origin/cursor/delete-old-data-records-6bba
