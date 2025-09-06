<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Bell, User, ChevronDown } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

=======

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
=======
import React from 'react';
  const showTagline = router && router.pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const isMobile = useIsMobile(),;
  const { t } = useTranslation(),;
  const { user } = useAuth(),;
  const isLoggedIn = useSelector((state: RootState,) => state && state.auth.isLoggedIn),;
  const router = useRouter(),;
  const showTagline = router && router.pathname === '/',;

  // Messaging context (unread message count);
  const { unreadCount } = useMessaging(),;

  const openLoginModal = (returnToPath?: string,) => {;
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router && router.push with shallow:true before this function is called.;
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen(true);
  },;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <header
        style={{ "--nav-height": "64px" } as React && React.CSSProperties}
        className = {cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground"
          { "bg-red-500": mobileMenuOpen ,}
        )}>;
        <div className="container flex h-16 items-center px-4 sm:px-6">;
          <Logo />;
          {showTagline && (;
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">;
              {t('home && home.header_tagline')}
            </span>;
          )}
<<<<<<< HEAD
          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>
=======
          <div className="ml-6 flex-1 hidden md:block">;
            <nav role="navigation" aria-label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button
              onClick = {() => setMobileMenuOpen(!mobileMenuOpen),}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
              aria-expanded = {mobileMenuOpen,}
              aria-label = {t('general && general.toggle_mobile_menu'),}
            >;
              <span className="sr-only">{t('general && general.open_main_menu')}</span>;
              {mobileMenuOpen ? (;
                <X className="block h-6 w-6" aria-hidden="true" />;
              ) : (;
                <Menu className="block h-6 w-6" aria-hidden="true" />;
              )}
<<<<<<< HEAD
            </button>
          </div>
          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
=======
            </button>;
          </div>;

          <PointsBadge />;
          {!isLoggedIn && (;
            <div className="ml-4 relative z-10 flex items-center">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label = {t('auth && auth.login'),}
                data-testid="login-link"
<<<<<<< HEAD
                onClick={(e,) => {
                  e.preventDefault()
                  // For the main login link, we might not have a specific returnTo beyond current page
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })

                  openLoginModal(router.asPath)
=======
                onClick={(e,) => {;
                  e && e.preventDefault(),;
                  // For the main login link, we might not have a specific returnTo beyond current page,;
                  // or we could default to dashboard.;
                  // For consistency with how sub-menus now set it:;
                  router && router.push({ pathname: '/auth/login', query: { returnTo: router && router.asPath } }, undefined, { shallow: true }),;
                  openLoginModal(router && router.asPath);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                }}
              >;
                {t('auth && auth.login')}
              </Link>;
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label = {t('auth && auth.signup'),}
                data-testid="signup-nav-link">;
                {t('auth && auth.signup')}
              </Link>;
            </div>;
          )}
          {/* User avatar menu */}
          {isLoggedIn && (;
            <div className="ml-4">;
              <UserMenu />;
            </div>;
          )}
<<<<<<< HEAD
        </div>
      </header>
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
=======
        </div>;
      </header>;

      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (;
        <div className="md:hidden fixed inset-0 z-60 pt-16">;
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true";
          />;
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <MobileMenu
              unreadCount = {unreadCount,}
              onClose = {() => setMobileMenuOpen(false),}
              openLoginModal = {openLoginModal,}
            />;
          </div>;
        </div>;
      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
<<<<<<< HEAD
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
      setActiveNav(null)
      setServicesDropdownOpen(false)
      setSolutionsDropdownOpen(false)
      setCompanyDropdownOpen(false)
      setResourcesDropdownOpen(false)}
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
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false)}
  };
  const closeAllDropdowns = (...args: unknown[]): unknown => {;
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};
  return ();
    <>`;
      <headerclassName={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10'
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>;
        <div className="container-responsive">";
          <div className="flex h-20 items-center justify-between">;
            {/* Logo */}";
            <div className="flex items-center">";
              <Link to="/" className="flex-shrink-0 group">";
                <div className="flex items-center space-x-3">";
                  <div className="relative">";
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";
                      <Zap className="w-6 h-6 text-white"  />;
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;
                  </div>";
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">;
                    Zion Tech Group;
                  </h1>;
                </div>;
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </span>;
              </Link>;
            </div>;

            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">;
              {navigation && navigation.map((item) => (";
                <div key={item && item.name} className="relative">;
                  {item && item.hasDropdown ? (";
                    <div className="relative">;
                      <button
                        onClick={() => {;

              <AnimatePresence>;
                {activeDropdown === 'services' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {services && services.map((service) => (;
                          <Link
                            key={service && service.name}
                            to={service && service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${service && service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <service && service.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {service && service.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {service && service.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
              </AnimatePresence>
            </div>
            {/* Solutions Dropdown */}
<<<<<<< HEAD
            <div className="relative dropdown-container">
=======
            <div className="relative dropdown-container">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'solutions'}
<<<<<<< HEAD
                aria-haspopup="true">
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {solution.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {solution.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======
                aria-haspopup="true">;
                Solutions;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'solutions' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {solutions && solutions.map((solution) => (;
                          <Link
                            key={solution && solution.name}
                            to={solution && solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution && solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <solution && solution.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {solution && solution.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {solution && solution.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
              </AnimatePresence>
            </div>
            {/* Resources Dropdown */}
<<<<<<< HEAD
            <div className="relative dropdown-container">
=======
            <div className="relative dropdown-container">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'resources'}
<<<<<<< HEAD
                aria-haspopup="true">
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {resource.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======
                aria-haspopup="true">;
                Resources;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'resources' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {resources && resources.map((resource) => (;
                          <Link
                            key={resource && resource.name}
                            to={resource && resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <resource && resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {resource && resource.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
              </AnimatePresence>
            </div>
            {/* Company Dropdown */}
<<<<<<< HEAD
            <div className="relative dropdown-container">
=======
            <div className="relative dropdown-container">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'company'}
<<<<<<< HEAD
                aria-haspopup="true">
                Company
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======
                aria-haspopup="true">;
                Company;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'company' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {company && company.map((item) => (;
                          <Link
                            key={item && item.name}
                            to={item && item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <item && item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {item && item.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
              </AnimatePresence>
            </div>
          </nav>
          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
<<<<<<< HEAD
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch} className="relative">
=======
            <div className="relative hidden md:block">;
              <form onSubmit={handleSearch} className="relative">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${
                    searchFocused ? 'w-80' : ''
}`}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
            </div>
            {/* User Menu */}
<<<<<<< HEAD
            {user ? (
              <div className="relative dropdown-container">
=======
            {user ? (;
              <div className="relative dropdown-container">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"
                  aria-expanded={activeDropdown === 'user'}
<<<<<<< HEAD
                  aria-haspopup="true">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm hidden lg:block">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <PanelLeft className="w-4 h-4 mr-3" />
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <hr className="border-zion-slate/20 my-2" />
                        <button
                          onClick={() => {
                            logout()
                            setActiveDropdown(null)
}}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
=======
                  aria-haspopup="true">;
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;
                    <User className="w-4 h-4 text-white" />;
                  </div>;
                  <span className="text-white text-sm hidden lg:block">{user && user.name}</span>;
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />;
                </button>;

                <AnimatePresence>;
                  {activeDropdown === 'user' && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0 && 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                      <div className="p-2">;
                        <Link
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <PanelLeft className="w-4 h-4 mr-3" />;
                          Dashboard;
                        </Link>;
                        <Link
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <User className="w-4 h-4 mr-3" />;
                          Profile;
                        </Link>;
                        <Link
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <Settings className="w-4 h-4 mr-3" />;
                          Settings;
                        </Link>;
                        <hr className="border-zion-slate/20 my-2" />;
                        <button
                          onClick={() => {;
                            logout();
                            setActiveDropdown(null);
}}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <LogOut className="w-4 h-4 mr-3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion && motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
<<<<<<< HEAD
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [
    { name: 'Home', href: '/', current: true }
    { name: 'About', href: '/about', current: false }
    { name: 'Contact', href: '/contact', current: false }
  ]
  const services = [
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' }
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' }
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' }
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' }
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' }
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' }
  ]
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>
=======
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [;
    { name: 'Home', href: '/', current: true },;
    { name: 'About', href: '/about', current: false },;
    { name: 'Contact', href: '/contact', current: false },;
  ];
  const services = [;
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },;
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },;
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },;
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },;
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },;
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },;
  ];
  return (
    <>;
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">;
        <div className="container flex h-16 items-center px-4 sm:px-6">;
          {/* Logo */}
          <div className="flex items-center">;
            <Link to="/" className="flex-shrink-0">;
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">;
            {navigation && navigation.map((item) => (;
              <Link
                key={item && item.name}
                to={item && item.href}
                className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;
                {item && item.name}
              </Link>;
            ))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            {/* Services Dropdown */}
<<<<<<< HEAD
            <div className="relative">
=======
            <div className="relative">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
<<<<<<< HEAD
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
=======
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;
                Services;
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />;
              </button>;
              {servicesDropdownOpen && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
<<<<<<< HEAD
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <Link
                        href="/services"
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
=======
                >;
                  <div className="p-4">;
                    <div className="grid grid-cols-1 gap-2">;
                      {services && services.map((service) => (;
                        <Link
                          key={service && service.name}
                          to={service && service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group">;
                          <div className="flex-1">;
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">;
                              {service && service.name}
                            </div>;
                            <div className="text-sm text-gray-400">;
                              {service && service.description}
                            </div>;
                          </div>;
                        </Link>;
                      ))}
                    </div>;
                    <div className="mt-4 pt-4 border-t border-slate-700/50">;
                      <Link
                        to="/services"
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">;
                        View All Services →;
                      </Link>;
                    </div>;
                  </div>;
                </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </div>
          </nav>

          {/* Search Bar - Hidden on mobile */}
<<<<<<< HEAD
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

=======
          <div className="hidden md:flex ml-6 flex-1 max-w-md">;
            <form onSubmit={handleSearch} className="relative w-full">;
              />;
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors">;
                <Search className="h-4 h-4" />;
              <div className="hidden md:flex items-center space-x-3">;
                <Link
                  to="/login"
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">;
                  Login;
                </Link>;
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                  Get Started;
                </Link>;
              </div>;
            )}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            {/* User menu */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <User className="h-5 w-5" />
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

<<<<<<< HEAD
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
=======
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {mobileMenuOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0 && 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">;
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">;
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan";
                />;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;

              {/* Mobile Navigation Links */}
              <div className="space-y-2">;
                {navigation && navigation.map((item) => (;
                  <Link
                    key={item && item.name}
                    to={item && item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item && item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
}`}>;
                    {item && item.name}
                  </Link>;
                ))}
              </nav>;

              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">;
                <div className="grid grid-cols-1 gap-3">;
                  {quickActions && quickActions.map((action) => (;
                    <Link
                      key={action && action.name}
                      to={action && action.href}
                      className="btn-futuristic text-center">;
                      {action && action.name}        {/* Mobile Navigation */}
        {mobileMenuOpen && (;
          <div className="md:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">;
              {navigation && navigation.map((item) => (;
                <Link
                  key={item && item.name}
                  to={item && item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >;
                  {item && item.name}
                </Link>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              ))}
              {/* Mobile Services */}
<<<<<<< HEAD
              <div className="px-3 py-2">
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
=======
              <div className="px-3 py-2">;
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>;
                <div className="space-y-1">;
                  {services && services.map((service) => (;
                    <Link
                      key={service && service.name}
                      to={service && service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >;
                      {service && service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              </div>;

              {/* Mobile Services */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Services;
                </div>;
                {services && services.map((service) => (;
                  <Link
                    key={service && service.name}
                    to={service && service.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {service && service.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Solutions */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Solutions;
                </div>;
                {solutions && solutions.map((solution) => (;
                  <Link
                    key={solution && solution.name}
                    to={solution && solution.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {solution && solution.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Resources */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Resources;
                </div>;
                {resources && resources.map((resource) => (;
                  <Link
                    key={resource && resource.name}
                    to={resource && resource.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {resource && resource.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Company */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Company;
                </div>;
                {company && company.map((item) => (;
                  <Link
                    key={item && item.name}
                    to={item && item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">;
                    {item && item.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Auth */}
              {!user ? (;
                <div className="pt-4 border-t border-zion-slate/20">;
                  <div className="space-y-3">;
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">;
                      Login;
                    </Link>;
                    <Link
                      to="/signup"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                      Get Started;
                    </Link>;
                  </div>;
                </div>;
              ) : (;
                <div className="pt-4 border-t border-zion-slate/20">;
                  <div className="space-y-3">;
                    <Link
                      to="/dashboard"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                      Dashboard;
                    </Link>;
                    <button
                      onClick={() => {;
                        logout();
                        closeMobileMenu();
}}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">;
                      Logout;
                    </button>;
                  </div>;
                </div>;
              )}
            </div>;
          </motion && motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )}
<<<<<<< HEAD
      </header>
    </>
  );
=======
      </AnimatePresence>
    </header>  )
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
}