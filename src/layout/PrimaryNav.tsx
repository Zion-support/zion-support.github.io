import React from "react;";
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom, ";

export function PrimaryNav() {
return (
<header className="sticky top-0 z-40 bg-zion-slate-dark/80 backdrop-blur border-b border-zion-blue-light">
<div className="container mx-auto px-4 h-16 flex items-center justify-between">
<Link to="/" className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" />
<span className="text-lg font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">ZION</span>
</Link>
<nav className="hidden md: flex items-center gap-6 text-sm">
<NavLink to="/" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Home</NavLink>
<NavLink to="/services" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Services</NavLink>
<NavLink to="/solutions" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Solutions</NavLink>
<NavLink to="/about" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>About</NavLink>
<NavLink to="/contact" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Contact</NavLink>
</nav>
</div>
</header>
);
}<//header><///header>
import { useState } from "react";
import { logDebug, logErrorToProduction } from "@/utils/productionLogger";
=======
import { Link; NavLink } from "react-router-dom, ";

export function PrimaryNav() {
return (
<header className="sticky top-0 z-40 bg-zion-slate-dark/80 backdrop-blur border-b border-zion-blue-light">;
<div className="container mx-auto px-4 h-16 flex items-center justify-between">;
<Link to="/" className="flex items-center space-x-2">;
<div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" />;
<span className="text-lg font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">ZION</span>;
</Link>;
<nav className="hidden md: flex items-center gap-6 text-sm">;
<NavLink to="/" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Home</NavLink>;
<NavLink to="/services" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Services</NavLink>;
<NavLink to="/solutions" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Solutions</NavLink>;
<NavLink to="/about" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>About</NavLink>;
<NavLink to="/contact" className={({isActive}) => isActive ? "text-zion-cyan" : "text-white hover:text-zion-cyan"}>Contact</NavLink>;
</nav>;
</div>;
</header>;
);
}<//header><///header>;
import { useState } from "react";
import { logDebug; logErrorToProduction } from "@/utils/productionLogger";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "@/components/header/Logo";
import { PointsBadge } from "@/components/loyalty/PointsBadge";
import { UserMenu } from "@/components/header/UserMenu";
import { LanguageSelector } from "@/components/header/LanguageSelector";
import { ModeToggle } from "@/components/ModeToggle";
import { useAuth } from "@/hooks/useAuth";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMessaging } from "@/context/MessagingContext";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { slugify } from "@/lib/slugify";
import { ResponsiveNavigation } from "@/components/navigation/ResponsiveNavigation";
import { MobileMenu } from "@/components/header/MobileMenu";
import { MobileBottomNav } from "@/components/header/MobileBottomNav";
<<<<<<< HEAD
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { LoginModal } from "@/components/auth/LoginModal";
export function PrimaryNav() {
>;
{t("auth.login")}
</Link>
)}
{isLoggedIn && <UserMenu />}
</div>
{isLoggedIn && <UserMenu  />}
</div>
</div>
=======
import { Menu; X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { LoginModal } from "@/components/auth/LoginModal";
import { useState } from 'react';
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import Link from 'next/link';
import { useRouter,, ,  } from 'next/router';
import { Logo,, ,  } from '@/components/header/Logo';
import { PointsBadge,, ,  } from '@/components/loyalty/PointsBadge';
import { UserMenu,, ,  } from '@/components/header/UserMenu';
import { LanguageSelector,, ,  } from '@/components/header/LanguageSelector';
import { ModeToggle,, ,  } from '@/components/ModeToggle';
import { useAuth,, ,  } from '@/hooks/useAuth';
import { useIsMobile,, ,  } from '@/hooks/use-mobile';
import { useMessaging,, ,  } from '@/context/MessagingContext';
import { EnhancedSearchInput,, ,  } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions,, ,  } from '@/data/marketplaceData';
import { slugify,, ,  } from '@/lib/slugify';
import { ResponsiveNavigation,, ,  } from '@/components/navigation/ResponsiveNavigation';
import { MobileMenu,, ,  } from '@/components/header/MobileMenu';
import { MobileBottomNav,, ,  } from '@/components/header/MobileBottomNav';
import { Menu,, X,  } from 'lucide-react'
import { useTranslation,, ,  } from 'react-i18next';
import { CartDrawer,, ,  } from '@/components/cart/CartDrawer';
import { LoginModal,  } from '@/components/auth/LoginModal';
export function PrimaryNav() {
>;
{t("auth.login")}
</Link>;
)}
{isLoggedIn && <UserMenu />}
</div>;
{isLoggedIn && <UserMenu  />}
</div>;
</div>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
{/* Mobile menu button */}
<button;
className="lg:hidden p-2 rounded focus:outline-none flex-shrink-0"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
aria-expanded={mobileMenuOpen}
<<<<<<< HEAD
aria-label={t("general.toggle_mobile_menu")}          >
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
<div;
className="absolute inset-0 bg-black/50 backdrop-blur-sm"
onClick={() => setMobileMenuOpen(false)}
aria-hidden="true"          />
<div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
<MobileMenu;
unreadCount={unreadCount}
onClose={() => setMobileMenuOpen(false)}
openLoginModal={returnToPath => setLoginOpen(true)}            />
</div>
</div>
)}
{isMobile && <MobileBottomNav unreadCount={unreadCount} />}
<LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
</>
)
}
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo />
}setQuery ("")
//Track analytics event,
}searchSuggestions= {suggestions}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={
=======
aria-label={t("general.toggle_mobile_menu")}          >;
{mobileMenuOpen ? (
<X className="h-6 w-6" />;
) : (
<Menu className="h-6 w-6" />;
)}
</button>;
</div>;
</header>;
{mobileMenuOpen && (
<div className="lg:hidden fixed inset-0 z-60 pt-16">;
<div;
className="absolute inset-0 bg-black/50 backdrop-blur-sm"
onClick={() => setMobileMenuOpen(false)}
aria-hidden="true"          />;
<div className="relative bg-card border-t border-primary/20 max-h-[calc(100vh-4rem)] overflow-y-auto">;
<MobileMenu;
unreadCount={unreadCount}
onClose={() => setMobileMenuOpen(false)}
openLoginModal={returnToPath => setLoginOpen(true)}            />;
</div>;
</div>;
)}
{isMobile && <MobileBottomNav unreadCount={unreadCount} />}
<LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
</>;
)
}
return (<> <header className="sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" role="navigation" aria-label="Primary" data-testid="header" > <div className="container flex items-center justify-between gap-2 min-h-16 px-4 sm:px-6 max-[320px]:flex-wrap" > <Logo />;
}setQuery ("")
//Track analytics event,
}searchSuggestions= {suggestions}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={
<<<<<<< HEAD
//Track analytics event}searchSuggestions= {
  suggestions}/> </form> <PointsBadge /> <CartDrawer /> </div> <ModeToggle /> <LanguageSelector /> </div> <Link onClick={
  (e) => {
  > {'
  t ('auth.login') "
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {'
  t ('auth.signup')
=======
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
(e) => {
> {";
t ("auth.login") ";
}</Link> <Link href="/signup" className="text-sm hover:text-primary whitespace-nowrap" > {";
t ("auth.signup")
<<<<<<< HEAD
}</Link> </>)
}{
isLoggedIn && <UserMenu />
=======
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
}</Link> </>)
}{
isLoggedIn && <UserMenu />;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}</div> </div> <ModeToggle /> <LanguageSelector /> {";
!isLoggedIn && (<Link href="/auth/login" className="text-sm hover:text-primary" data-testid="login-link" onClick={
(e) => {
e.preventDefault ()
setLoginOpen (true)
}";
}t ("auth.login")
}</Link>)
}{
<<<<<<< HEAD
isLoggedIn && <UserMenu />
=======
isLoggedIn && <UserMenu />;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}</div> {
/* Mobile menu button */ ";
}<button) : (<Menu className="h-6 w-6" />) ";
}</button> </div> </header> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={
() => setMobileMenuOpen (false) ";
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {unreadCount}onClose= {
<<<<<<< HEAD
() => setMobileMenuOpen (false)
=======
<<<<<<< HEAD
}aria-hidden="true" /> <div className="relative bg-card border-t border-primary/20 max-h-[calc (100vh-4rem) ] overflow-y-auto" > <MobileMenu unreadCount= {
  unreadCount}onClose= {
  () => setMobileMenuOpen (false)
=======
() => setMobileMenuOpen (false)
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}openLoginModal= {
(returnToPath) => setLoginOpen (true)
}/> </div> </div>)
}{isMobile && <MobileBottomNav unreadCount= {
<<<<<<< HEAD
unreadCount}/>
}<LoginModal isOpen= {loginOpen}onOpenChange= {setLoginOpen}/> </>)
}""  { opacity: 0;,
=======
unreadCount}/>;
}<LoginModal isOpen= {loginOpen}onOpenChange= {setLoginOpen}/> </>)
<<<<<<< HEAD
}{
isMobile && <MobileBottomNav unreadCount= {
unreadCount,
}/>;
}<LoginModal isOpen= {
loginOpen,
}onOpenChange= {
setLoginOpen,
}/> </>)
}'"  { opacity: 0,
=======
}""  { opacity: 0;,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
height: 0;
}}
animate = {
{ opacity: 1;,
height: "auto";
}}
exit = {
{ opacity: 0;,
height: 0;
}}
transition={{ duration: 0.3 }}";
className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">"
<<<<<<< HEAD
<div className="px-4 py-6 space-y-4">
{services.map((category index) => (
<div key={index}>";
<h3 className="text-sm font-semibold text-cyan-400 mb-2">
{category.category}
</h3>";
<div className="space-y-2 ml-4">
=======
<div className="px-4 py-6 space-y-4">;
{services.map((category index) => (
<div key={index}>";
<h3 className="text-sm font-semibold text-cyan-400 mb-2">;
{category.category}
</h3>";
<div className="space-y-2 ml-4">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
{category.items.map((service: unknown serviceIndex: unknown;
<Link;
key={serviceIndex}
to={service.path}";
className="block text-gray-300 hover:text-white transition-colors duration-200"
onClick={( setIsOpen(false)}
>;
{service.name}
<<<<<<< HEAD
</Link>
))}
</div>
</div>
))}
<div className="pt-4 border-t border-white/10 space-y-2">
=======
</Link>;
))}
</div>;
</div>;
))}
<div className="pt-4 border-t border-white/10 space-y-2">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Link                    to="/solutions";
className="block text-gray-300 hover:text-white transition-colors duration-200"
onClick={: unknown setIsOpen(false)}
>;
Solutions;
<<<<<<< HEAD
</Link>
=======
</Link>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Link                    to="/about";
className="block text-gray-300 hover:text-white transition-colors duration-200"
onClick={: unknown setIsOpen(false)}
>;
About;
<<<<<<< HEAD
</Link>
=======
</Link>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Link                    to="/blog";
className="block text-gray-300 hover:text-white transition-colors duration-200"
onClick={: unknown setIsOpen(false)}
>;
Blog;
<<<<<<< HEAD
</Link>
=======
</Link>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Link                    to="/contact";
className="block text-gray-300 hover:text-white transition-colors duration-200"
onClick={: unknown setIsOpen(false)}
>;
Contact;
<<<<<<< HEAD
</Link>
</div>
</div>
</motion.div>
)}
</AnimatePresence>
</nav>
</header>
=======
</Link>;
</div>;
</div>;
</motion.div>;
)}
</AnimatePresence>;
</nav>;
</header>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
)}
'"`;
}
