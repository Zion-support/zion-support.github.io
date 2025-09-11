<<<<<<< HEAD
  const showTagline = router.pathname === '/'
  const showTagline = router.pathname === '/'
import React, { useState } from 'react',
import { useMessaging } from '@/context/MessagingContext',
import Link from 'next/link',
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation',
import { Logo } from '@/components/header/Logo',
import { useTranslation } from 'react-i18next',
import { Menu, X } from 'lucide-react'
import { MobileMenu } from '@/components/header/MobileMenu',
import { useIsMobile } from '@/hooks/use-mobile',
import { MobileBottomNav } from '@/components/header/MobileBottomNav',
import { PointsBadge } from '@/components/loyalty/PointsBadge',
import { LoginModal } from '@/components/auth/LoginModal',
import { useAuth } from '@/hooks/useAuth',
import { UserMenu } from '@/components/header/UserMenu',
import { useSelector } from 'react-redux',
import type { RootState } from '@/store',
import { cn } from '@/lib/utils', // Import cn utility
import { useRouter } from 'next/router',
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
  const [loginOpen, setLoginOpen] = useState(false),
  const isMobile = useIsMobile(),
  const { t } = useTranslation(),
  const { user } = useAuth(),
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn),
  const router = useRouter(),
  const showTagline = router.pathname === '/',

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, []);

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const showTagline = router.pathname === '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { user } = useAuth()
  const isLoggedIn = useSelector((state: RootState,) => state.auth.isLoggedIn)
  const router = useRouter()
  const showTagline = router.pathname === '/'
  // Messaging context (unread message count)
  const { unreadCount } = useMessaging()
  const openLoginModal = (returnToPath?: string,) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
  }
<<<<<<< HEAD
        className = {cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground"
          { "bg-red-500": mobileMenuOpen ,}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
  const showTagline = router && router.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Messaging context (unread message count);
  const { unreadCount } = useMessaging(),;

  const openLoginModal = (returnToPath?: string,) => {;
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router && router.push with shallow:true before this function is called.;
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen(true);
  },;

  return (
    <>
      <header
<<<<<<< HEAD
        style={{ "--nav-height": "64px" } as React.CSSProperties}
        className = {cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground"
          { "bg-red-500": mobileMenuOpen ,}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }
=======

        style={{ "--nav-height": "64px" } as React.CSSProperties}

        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}

          <div className="ml-6 flex-1 hidden md:block">;
            <nav role="navigation" aria-label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;


<<<<<<< HEAD
          )}
          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick = {() => setMobileMenuOpen(!mobileMenuOpen),}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded = {mobileMenuOpen,}
              aria-label = {t('general.toggle_mobile_menu'),}
=======
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}

            </button>;
          </div>;

          <PointsBadge />;
          {!isLoggedIn && (;
            <div className="ml-4 relative z-10 flex items-center">;

              )}
            </button>
          </div>
          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"


                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {

                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
<<<<<<< HEAD
                  e.preventDefault()
                  // For the main login link, we might not have a specific returnTo beyond current page
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {
                  // For the main login link, we might not have a specific returnTo beyond current page,
                aria-label = {t('auth.login'),}
                data-testid="login-link"
                onClick={(e,) => {
                  e.preventDefault()
                  // For the main login link, we might not have a specific returnTo beyond current page
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {
                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  // or we could default to dashboard.
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })

                  openLoginModal(router.asPath)
                onClick={(e,) => {;
                  e && e.preventDefault(),;
                  // For the main login link, we might not have a specific returnTo beyond current page,;
                  // or we could default to dashboard.;
                  // For consistency with how sub-menus now set it:;
                  router && router.push({ pathname: '/auth/login', query: { returnTo: router && router.asPath } }, undefined, { shallow: true }),;
                  openLoginModal(router && router.asPath);
                }}
              >
                {t('auth.login')}
              </Link>
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
<<<<<<< HEAD
                aria-label = {t('auth.signup'),}
                aria-label = {t('auth.signup'),}
                aria-label={t('auth.signup')}
=======


                aria-label={t('auth.signup')}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
<<<<<<< HEAD
        </div>
      </header>
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
=======

        </div>;
      </header>;

      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (;
        <div className="md:hidden fixed inset-0 z-60 pt-16">;
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true";
          />;
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;

            <MobileMenu
<<<<<<< HEAD
            onClick = {(,) => setMobileMenuOpen(false),}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
            onClick = {(,) => setMobileMenuOpen(false),}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount = {unreadCount,}
              onClose = {() => setMobileMenuOpen(false),}
              openLoginModal = {openLoginModal,}
            />
          </div>
        </div>
<<<<<<< HEAD
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />;
          </div>;
        </div>;
<<<<<<< HEAD
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
;
}
}
}

      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
      setActiveNav(null)
      setServicesDropdownOpen(false)
      setSolutionsDropdownOpen(false)
      setCompanyDropdownOpen(false)
      setResourcesDropdownOpen(false)}
=======
      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

  const show_tagline = router.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false),
  const [login_open, setLoginOpen] = useState (false),
  const is_mobile = useIsMobile (),
  const { t } = use_translation (),
  const { user } = use_auth (),
  const isLoggedIn = use_selector ((state: RootState, ) => state.auth.isLoggedIn),
  const router = use_router (),
  const show_tagline = router.pathname === '/',
  // Messaging context (unread message count);
  const { unread_count } = use_messaging (),
  const openLoginModal = (returnToPath?: string, ) =>: any {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router.push with shallow:true before this function is called.;
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen (true);
  },
  return (
    <>;
      <header;
        style={{ "--nav - height": "64px" } as React.CSSProperties}
        class_name = {cn (
          "sticky top - 0 z - 50 w - full border - b border - border bg - background / 90 backdrop - blur - md text - foreground",
          { "bg - red - 500": mobileMenuOpen , }
        )}
      >;
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
          <Logo />;
          {show_tagline && (
            <span className="ml - 4 hidden text - sm text - muted - foreground md:inline">;
              {t ('home.header_tagline')}
            </span>)}
          <div className="ml - 6 flex - 1 hidden md:block">;
            <nav role="navigation" aria - label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden ml - auto mr - 4">;
            <button;
              on_click = {() => setMobileMenuOpen (!mobileMenuOpen), }
              className="inline - flex items - center justify - center rounded - md p - 2 text - foreground / 70 hover:text - foreground hover:bg - primary / 10 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring";
              aria - expanded = {mobileMenuOpen, }
              aria - label = {t ('general.toggle_mobile_menu'), }
            >;
              <span className="sr - only">{t ('general.open_main_menu')}</span>;
              {mobileMenuOpen ? (
                <X className="block h - 6 w - 6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}
            </button>;
          </div>;
          <PointsBadge />;
          {!isLoggedIn && (
            <div className="ml - 4 relative z - 10 flex items - center">;
              <Link;
                href="/auth / login";
                className="text - sm font - medium text - foreground / 70 hover:text - foreground";
                aria - label = {t ('auth.login'), }
                data - testid="login - link";
                on_click={(e, ) => {
                  e.prevent_default (),
                  // For the main login link, we might not have a specific return_to beyond current page,
                  // or we could default to dashboard.;
                  // For consistency with how sub - menus now set it:;
                  router.push ({ pathname: '/auth / login', query: { return_to: router.as_path } }, undefined, { shallow: true }),
                  openLoginModal (router.as_path);
                }}
              >;
                {t ('auth.login')}
              </Link>;
              <Link;
                href="/signup";
                className="ml - 2 text - sm font - medium text - foreground / 70 hover:text - foreground";
                aria - label = {t ('auth.signup'), }
                data - testid="signup - nav - link";
              >;
                {t ('auth.signup')}
              </Link>;
            </div>)}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml - 4">;
              <UserMenu />;
            </div>)}
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset - 0 z - 60 pt - 16">;
          <div;
            className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";
            on_click = {(, ) => setMobileMenuOpen (false), }
            aria - hidden="true";
          />;
          <div className="relative bg - background border - t border - border h - auto max - h-[calc (100vh - 4rem)] overflow - y-auto">;
            <MobileMenu;
              unread_count = {unread_count, }
              on_close = {() => setMobileMenuOpen (false), }
              openLoginModal = {openLoginModal, }
            />;
          </div>;
        </div>)}
      {/* Mobile Bottom Navigation */}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>;
      setActiveNav (null);
      setServicesDropdownOpen (false);
      setSolutionsDropdownOpen (false);
      setCompanyDropdownOpen (false);
      setResourcesDropdownOpen (false)}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  const closeAllDropdowns = (...args: unknown[]): unknown => {
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false)
    setCompanyDropdownOpen(false)
    setResourcesDropdownOpen(false)
    setActiveNav(null)}
  return ()
    <>`
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10'
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>
        <div className="container-responsive">"
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}"
            <div className="flex items-center">"
              <Link to="/" className="flex-shrink-0 group">"
                <div className="flex items-center space-x-3">"
                  <div className="relative">"
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                      <Zap className="w-6 h-6 text-white"  />
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>"
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => ("
                <div key={item.name} className="relative">
                  {item.hasDropdown ? ("
                    <div className="relative">
                      <button
                        onClick={() => {
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {service.description}
<<<<<<< HEAD
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======

      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
    }
  };

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg border-b border-zion-slate-light/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-cyan rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-cyan rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                  Zion Tech Group
                </div>
                <div className="text-xs text-zion-slate-light group-hover:text-zion-cyan/70 transition-colors">
                  Revolutionary AI Solutions
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
                >
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">AI Solutions</h4>
                        <div className="space-y-2">
                          <Link to="/services/ai-business-intelligence" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Business Intelligence</Link>
                          <Link to="/services/ai-content-creation" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Content Creation</Link>
                          <Link to="/services/ai-cybersecurity" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Cybersecurity</Link>
                          <Link to="/services/ai-healthcare-platform" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Healthcare Platform</Link>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Emerging Tech</h4>
                        <div className="space-y-2">
                          <Link to="/services/quantum-computing" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Quantum Computing</Link>
                          <Link to="/services/iot-edge-computing" className="block text-zion-slate-light hover:text-white transition-colors text-sm">IoT & Edge Computing</Link>
                          <Link to="/services/blockchain-solutions" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Blockchain</Link>
                          <Link to="/services/ai-supply-chain-optimization" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Supply Chain AI</Link>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zion-slate-light/20">
                      <Link to="/services" className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {solutionsDropdownOpen && (
                <div
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
                >
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Industry</h4>
                        <div className="space-y-2">
                          <Link to="/solutions/healthcare" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Healthcare</Link>
                          <Link to="/solutions/finance" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Finance</Link>
                          <Link to="/solutions/manufacturing" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Manufacturing</Link>
                          <Link to="/solutions/retail" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Retail</Link>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Technology</h4>
                        <div className="space-y-2">
                          <Link to="/solutions/cloud-migration" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Cloud Migration</Link>
                          <Link to="/solutions/digital-transformation" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Digital Transformation</Link>
                          <Link to="/solutions/data-analytics" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Data Analytics</Link>
                          <Link to="/solutions/cybersecurity" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Cybersecurity</Link>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zion-slate-light/20">
                      <Link to="/solutions" className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                        <span>View All Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesDropdownOpen && (
                <div
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
                >
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Learn</h4>
                        <div className="space-y-2">
                          <Link to="/blog" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Blog</Link>
                          <Link to="/white-papers" className="block text-zion-slate-light hover:text-white transition-colors text-sm">White Papers</Link>
                          <Link to="/case-studies" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Case Studies</Link>
                          <Link to="/documentation" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Documentation</Link>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-zion-cyan font-semibold text-sm uppercase tracking-wide">Connect</h4>
                        <div className="space-y-2">
                          <Link to="/events" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Events</Link>
                          <Link to="/webinars" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Webinars</Link>
                          <Link to="/community" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Community</Link>
                          <Link to="/support" className="block text-zion-slate-light hover:text-white transition-colors text-sm">Support</Link>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zion-slate-light/20">
                      <Link to="/resources" className="flex items-center justify-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium">
                        <span>View All Resources</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10">
              About
            </Link>
            <Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10">
              Pricing
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-slate-light/10">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="ml-2 px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-slate-light/30 text-zion-slate-dark font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="hidden md:inline-flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zion-slate-dark border-t border-zion-slate-light/20">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full px-4 py-3 bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-slate-light/30 text-zion-slate-dark font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              <div>
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/services/ai-business-intelligence" className="block text-zion-slate-light hover:text-white transition-colors py-2">AI Business Intelligence</Link>
                    <Link to="/services/ai-content-creation" className="block text-zion-slate-light hover:text-white transition-colors py-2">AI Content Creation</Link>
                    <Link to="/services/ai-cybersecurity" className="block text-zion-slate-light hover:text-white transition-colors py-2">AI Cybersecurity</Link>
                    <Link to="/services/quantum-computing" className="block text-zion-slate-light hover:text-white transition-colors py-2">Quantum Computing</Link>
                    <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors py-2 font-medium">View All Services</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('solutions')}
                  className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/solutions/healthcare" className="block text-zion-slate-light hover:text-white transition-colors py-2">Healthcare</Link>
                    <Link to="/solutions/finance" className="block text-zion-slate-light hover:text-white transition-colors py-2">Finance</Link>
                    <Link to="/solutions/manufacturing" className="block text-zion-slate-light hover:text-white transition-colors py-2">Manufacturing</Link>
                    <Link to="/solutions" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors py-2 font-medium">View All Solutions</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center justify-between w-full text-left text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/blog" className="block text-zion-slate-light hover:text-white transition-colors py-2">Blog</Link>
                    <Link to="/case-studies" className="block text-zion-slate-light hover:text-white transition-colors py-2">Case Studies</Link>
                    <Link to="/white-papers" className="block text-zion-slate-light hover:text-white transition-colors py-2">White Papers</Link>
                    <Link to="/resources" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors py-2 font-medium">View All Resources</Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10">
                About
              </Link>
              <Link to="/pricing" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10">
                Pricing
              </Link>
              <Link to="/contact" className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-3 px-4 rounded-lg hover:bg-zion-slate-light/10">
                Contact
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-zion-slate-light/20">
              <Link
                to="/request-quote"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-medium rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>  )
=======
            </div>;
          </motion && motion.div>;

        )}

      </AnimatePresence>
    </header>  )

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

                  to={item.href}
                  className="text - slate - 300 hover:text - cyan - 400 block px - 3 py - 2 text - base font - medium transition - colors duration - 200";
                  on_click={() => setMobileMenuOpen (false)}
                >;
                  {item.name}
                </Link>))}
              {/* Mobile Services */}
              <div className="px - 3 py - 2">;
                <div className="text - slate - 400 text - sm font - medium mb - 2">Services</div>;
                <div className="space - y-1">;
                  {services.map ((service) => (
                    <Link;
                      key={service.name}
                      to={service.href}
                      className="block text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm transition - colors duration - 200";
                      on_click={() => setMobileMenuOpen (false)}
                    >;
                      {service.name}
                    </Link>))}
                </div>;
              </div>;
              </div>;
              {/* Mobile Services */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Services;
                </div>;
                {services.map ((service) => (
                  <Link;
                    key={service.name}
                    to={service.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {service.name}
                  </Link>))}
              </div>;
              {/* Mobile Solutions */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Solutions;
                </div>;
                {solutions.map ((solution) => (
                  <Link;
                    key={solution.name}
                    to={solution.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {solution.name}
                  </Link>))}
              </div>;
              {/* Mobile Resources */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Resources;
                </div>;
                {resources.map ((resource) => (
                  <Link;
                    key={resource.name}
                    to={resource.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {resource.name}
                  </Link>))}
              </div>;
              {/* Mobile Company */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Company;
                </div>;
                {company.map ((item) => (
                  <Link;
                    key={item.name}
                    to={item.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {item.name}
                  </Link>))}
              </div>;
              {/* Mobile Auth */}
              {!user ? (
                <div className="pt - 4 border - t border - zion - slate / 20">;
                  <div className="space - y-3">;
                    <Link;
                      to="/login";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
                      Login;
                    </Link>;
                    <Link;
                      to="/signup";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
                      Get Started;
                    </Link>;
                  </div>;
                </div>) : (
                <div className="pt - 4 border - t border - zion - slate / 20">;
                  <div className="space - y-3">;
                    <Link;
                      to="/dashboard";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
                      Dashboard;
                    </Link>;
                    <button;
                      on_click={() => {
                        logout ();
                        closeMobileMenu ();
}}
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
                      Logout;
                    </button>;
                  </div>;
                </div>)}
            </div>;
          </motion.div>)}
      </AnimatePresence>;
    </header>  );
}




      )}
    </header>
  );
}
;
<<<<<<< HEAD
;
}
}
}
;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
