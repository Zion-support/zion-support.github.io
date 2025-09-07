<<<<<<< HEAD
import Link from "next/link",;
import { useRouter } from "next/router",;
import { useState } from "react",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { useTranslation } from "react-i18next",;
import { useFavorites } from "@/hooks/useFavorites",;
import { useCart } from "@/context/CartContext",;
import { Heart, MessageSquare, CreditCard, ShoppingCart, Wallet } from 'lucide-react';
import { LanguageSelector } from '@/components/header/LanguageSelector',;
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card',;
import { MiniCartPreview } from '@/components/cart/MiniCartPreview',;
import { LoginModal } from '@/components/auth/LoginModal',;
=======
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
>>>>>>> merged-prs-20250907-203621
;
interface MainNavigationProps {;
  isAdmin?:boolean,;
  unreadCount?:number,;
  className?:string,;}
<<<<<<< HEAD
;
=======
>>>>>>> merged-prs-20250907-203621
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
;
=======
>>>>>>> merged-prs-20250907-203621
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
      key:'home',;
      href:'/',;
      matches:(path:string) => path === '/';
    },;
    {;
      key:'marketplace',;
      href:'/marketplace',;
      matches:(path:string) => path.startsWith('/marketplace');
    },;
    {;
      key:'categories',;
      href:'/categories',;
      matches:(path:string) => path.startsWith('/categories');
    },;
    {;
      key:'talent',;
      href:'/talent',;
      matches:(path:string) => path.startsWith('/talent') && !path.includes('/talent-dashboard');
    },;
    {;
      key:'equipment',;
      href:'/equipment',;
      matches:(path:string) => path.startsWith('/equipment');
    },;
    {;
      key:'community',;
      href:'/community',;
      matches:(path:string) => path.startsWith('/community') || path.startsWith('/forum');
    }
  ],;
;
  const links = baseLinks.map(link => ({ ...link, name:t(`nav.${link.key}`) })),;
  ;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;
      key:'dashboard',;
      name:t('nav.dashboard'),;
      href:'/dashboard',;
=======
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
>>>>>>> merged-prs-20250907-203621
      matches:(path:string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard';
    }),;
  // Add admin-only links;
  if (isAdmin) {;
<<<<<<< HEAD
    links.push({;
      key:'analytics',;
      name:t('nav.analytics'),;
      href:'/analytics',;
      matches:(path:string) => path.startsWith('/analytics');
    }),;
  }
  ;
  return (;
    <>;
      <button;
        className="navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" // Added ml-auto and mr-4 for positioning;
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-navbar-collapse";
        aria-label="Toggle navigation";
      >;
        <span className="navbar-toggler-icon"></span>;
      </button>;
      <nav;
        className={cn("navbar", className)}
        role="navigation";
        aria-label="Main navigation";
      >;
        <div;
          id="main-navbar-collapse";
          className={cn(;
            "navbar-collapse",;
            { "open":isMobileMenuOpen },;
            "w-full md:flex md:w-auto", // Handles visibility and desktop layout;
            !isMobileMenuOpen && "hidden" // Explicitly hide when not open and on mobile;
          )}
        >;
          <ul className="navbar-nav flex flex-col md:flex-row md:items-center md:gap-1"> {/* Added navbar-nav and flex direction classes */}
            {links.map((link) => (;
              <li key={link.name} className="nav-item">;
=======
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
>>>>>>> merged-prs-20250907-203621
                <Link ;
                  href={link.href}
                  aria-label={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
<<<<<<< HEAD
                  className={cn(;
                    "nav-link",;
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",;
                    link.matches(router.pathname);
                      ? "bg-zion-purple/20 text-zion-cyan";
                      :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
                  )}
                >;
                  {link.name}
                </Link>;
              </li>;            ))}
;
            {/* Wishlist link */}
            {isAuthenticated && (;
              <li className="nav-item">;
                <Link ;
                  href="/wishlist";
                  aria-label="Wishlist";
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(;
                    "nav-link",;
                    "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",;
                    router.pathname === "/wishlist";
                      ? "bg-zion-purple/20 text-zion-cyan";
                      :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
                  )}
                >;
                  <Heart className="w-4 h-4" />;
                  {count > 0 && (;
                    <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                      {count}
                    </span>;                  )}
                </Link>;
              </li>;
            )}
;
            {/* Wallet link */}
            {isAuthenticated && (;
              <li className="nav-item">;
                <Link ;
                  href="/wallet";
                  aria-label="Wallet";
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(;
                    "nav-link",;
                    "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",;
                    router.pathname === "/wallet";
                      ? "bg-zion-purple/20 text-zion-cyan";
                      :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
                  )}
                >;
                  <Wallet className="w-4 h-4" />;
                </Link>;
              </li>;            )}
;
            {/* Messages link */}
            {isAuthenticated && (;
              <li className="nav-item">;
                <Link ;
                  href="/messages";
                  aria-label="Messages";
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(;
                    "nav-link",;
                    "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",;
                    router.pathname === "/messages";
                      ? "bg-zion-purple/20 text-zion-cyan";
                      :"text-white hover:bg-zion-purple/10 hover:text-zion-cyan";
                  )}
                >;
                  <MessageSquare className="w-4 h-4" />;
                  {unreadCount > 0 && (;
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">;
                      {unreadCount > 9 ? '9+' :unreadCount}
                    </span>;                  )}
                </Link>;
              </li>;
            )}
;
            {/* Cart icon with badge */}
            <li className="nav-item">;
=======

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
>>>>>>> merged-prs-20250907-203621
              <HoverCard openDelay={100}>;

                <HoverCardTrigger asChild>;
<<<<<<< HEAD
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
=======

                  <Link;"
                    href="/cart";""
                    aria-label={t('nav.cart')}
                    onClick={handleCartClick}
                    className={cn(;
                      'nav-linkinline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-primary';,;')
                      router.pathname.startsWith('/cart');
                        ? 'bg-zion-purple/20 text-zion-cyan';
                        :'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';

                    <ShoppingCart className="w-4 h-4 mr-1" />;"
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;                        {cartCount}"
>>>>>>> merged-prs-20250907-203621
                      </span>;
                <HoverCardContent>;

                  <MiniCartPreview />;

            </li>;
<<<<<<< HEAD
          </ul>;
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">;
=======
          </ul>;"
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">;"
</div>
>>>>>>> merged-prs-20250907-203621
            <LanguageSelector />;

          </div>;
      </nav>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;

    </>;
  ),;}
 import { ;
<<<<<<< HEAD
  {;
  {;
  Heart, MessageSquare, CreditCard,   ShoppingCart, Wallet ;
 } from "lucide-react";
=======
  Heart, MessageSquare, CreditCard,   ShoppingCart, Wallet ;"
 } from "lucide-react";"
>>>>>>> merged-prs-20250907-203621
import {;
<<<<<<< HEAD
  {;
  {;
<<<<<<< HEAD
  LanguageSelector ';';
}from '@/components/header/LanguageSelector';
import {;
  {;
  {;';
  HoverCard,   HoverCardTrigger, HoverCardContent ';';
}from '@/components/ui/hover-card';
import {;
  {;
  {;';
  MiniCartPreview ';';
}from '@/components/cart/MiniCartPreview';
import {;
=======
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
>>>>>>> merged-prs-20250907-203621
  {;
  {;';
  LoginModal ';';
}from '@/components/auth/LoginModal';
interface MainNavigationProps {;
<<<<<<< HEAD
=======
  }
=======
  {;"
  LanguageSelector ';';
}from '@/components/header/LanguageSelector';
  {;';
  HoverCard,   HoverCardTrigger, HoverCardContent ';';
}from '@/components/ui/hover-card';
  MiniCartPreview ';';
}from '@/components/cart/MiniCartPreview';
  LoginModal ';';
}from '@/components/auth/LoginModal';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  isAdmin?: boolean;
unreadCount?: number;
className?: string ;
}export function MainNavigation ({;
<<<<<<< HEAD
  isAdmin = false,   unreadCount = 0, className ;
=======
  isAdmin = false,   unreadCount = 0, className ;)
>>>>>>> merged-prs-20250907-203621
}: MainNavigationProps) {;
  const [isMobileMenuOpen,   setIsMobileMenuOpen] = useState (false), //Add state const { ;
  user ;
 } = useAuth ();
const isAuthenticated = !!user;
const [loginOpen, setLoginOpen] = useState (false);
const { ;
  count ;
 } = useFavorites ();
<<<<<<< HEAD
const { ;
=======
<<<<<<< HEAD
  }
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  items ;
 } = useCart ();
const cartCount = items.length;
const router = useRouter (), //Changed from useLocation const { ;
  t ;
 } = useTranslation ();
const handleCartClick = (e: React.MouseEvent) => {;
<<<<<<< HEAD
  if (!isAuthenticated) {;
  e.preventDefault ();
setLoginOpen (true);
return ;
}setIsMobileMenuOpen (false) ;
=======
  e.preventDefault ();
setLoginOpen (true);
return ;
}setIsMobileMenuOpen (false) 
<<<<<<< HEAD
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
=======
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
}];
const links = baseLinks.map (link => ({;
  ...link, name: t (`nav.$ {;
  link.key ;
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
}];
const links = baseLinks.map (link => ({;`;
  ...link, name: t (`nav.$ {;
  link.key ;)`;
>>>>>>> merged-prs-20250907-203621
}`) ;
}) );
//Add authenticated-only links if (isAuthenticated) {;';
  links.push ({';';
<<<<<<< HEAD
  key: 'dashboard';';';
name: t ('nav.dashboard');';';
href: '/dashboard';';';
matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard' ;
}) ;
}//Add admin-only links if (isAdmin) {;';
  links.push ({';';
  key: 'analytics';';';
name: t ('nav.analytics');';';
href: '/analytics';';';
matches: (path: string) => path.startsWith ('/analytics') ;"}) ;";"}return (<> <button > <span className="navbar-toggler-icon" ></span> </button> <nav) ;
}> {;"  link.name ;";"}</Link> </li>) ) ";";"}<Link href="/wishlist" aria-label="Wishlist" onClick={;
  () => setIsMobileMenuOpen (false) ;
}{;
  count ;"}</span>) ;";"}</Link> </li>) ";";"}<Link href="/wallet" aria-label="Wallet" onClick={;"  () => setIsMobileMenuOpen (false) ;";"}) ";";"}> <Wallet className="w-4 h-4" /> </Link> </li>) ";";"}<Link href="/messages" aria-label="Messages" onClick={;
=======
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
>>>>>>> merged-prs-20250907-203621
  () => setIsMobileMenuOpen (false) ;';
}{';';
  unreadCount > 9 ? '9+' : unreadCount ;
}</span>) ;';
<<<<<<< HEAD
}</Link> </li>) ';';"}? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan') ;";"}> {";";"  cartCount > 0 && (<span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" > cartCount ;";"}</span>) ";";"}</Link> </HoverCardTrigger> <HoverCardContent> <MiniCartPreview /> </HoverCardContent> </HoverCard> </li> </ul> <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto" > <LanguageSelector /> </div> </div> </nav> <LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;"}/> </>) ;'";"}'"'"
=======
} </li>) ';';"}? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan') ;";"}> {";";"  cartCount > 0 && (<span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" > cartCount ;";"}</span>) ";";"}  <HoverCardContent> <MiniCartPreview />   </li> </ul> <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto" > <LanguageSelector /> </div> </div> </nav> <LoginModal isOpen= {;"
  loginOpen ;
}onOpenChange= {;
<<<<<<< HEAD
:temp_broken_files/layout/MainNavigation.tsx;"
  setLoginOpen ;"}/> </>) ;'";"}'"'""
  setLoginOpen ;"
}/> </>) ;'";""
}'"'""
ursor/fix-lint-push-and-merge-to-main-e10e:src/layout/MainNavigation.tsx;"`;
=======
<<<<<<< HEAD
:temp_broken_files/layout/MainNavigation.tsx
  setLoginOpen ;"}/> </>) ;'";"}'"'"
  setLoginOpen ;
}/> </>) ;'";
}'"'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/layout/MainNavigation.tsx
=======

  setLoginOpen ;
}/> </>) ;'";
}'"'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
