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

  return (
    <>;
      <header
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">;
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
            >
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
                  // or we could default to dashboard.
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })

                  openLoginModal(router.asPath)
                }}
              >;
                {t('auth && auth.login')}
              </Link>;
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (;
            <div className="ml-4">;
              <UserMenu />;
            </div>;
          )}
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true";
          />;
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;

            <MobileMenu
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
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />;
          </div>;
        </div>;
              unreadCount = {unreadCount,}
              onClose = {() => setMobileMenuOpen(false),}
              openLoginModal = {openLoginModal,}
            />;
          </div>;
        </div>;
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
  }
  const closeAllDropdowns = (...args: unknown[]): unknown => {
                )}
              </AnimatePresence>
            </div>
            {/* Solutions Dropdown */}
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'solutions'}
                    transition={{ duration: 0.2 }}
                    className="absolute top - full left - 0 mt - 2 w - 80 bg - zion - slate - dark border border - zion - cyan / 20 rounded - xl shadow - 2xl backdrop - blur - md">;
                    <div className="p - 4">;
                      <div className="grid grid - cols - 1 gap - 2">;
                        {solutions.map ((solution) => (
                          <Link;
                            key={solution.name}
                            to={solution.href}
                )}
              </AnimatePresence>
            </div>
            {/* Resources Dropdown */}
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'resources'}
                    transition={{ duration: 0.2 }}
                    className="absolute top - full left - 0 mt - 2 w - 64 bg - zion - slate - dark border border - zion - cyan / 20 rounded - xl shadow - 2xl backdrop - blur - md">;
                    <div className="p - 4">;
                      <div className="grid grid - cols - 1 gap - 2">;
                        {resources.map ((resource) => (
                          <Link;
                            key={resource.name}
                            to={resource.href}
                            on_click={() => setActiveDropdown (null)}
                            className="flex items - center p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors group">;
                            <resource.icon className="w - 5 h - 5 text - zion - cyan mr - 3 group - hover:scale - 110 transition - transform" />;
                            <span className="text - white group - hover:text - zion - cyan transition - colors">;
                              {resource.name}
                )}
              </AnimatePresence>
            </div>
            {/* Company Dropdown */}
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'company'}
                    transition={{ duration: 0.2 }}
                    className="absolute top - full left - 0 mt - 2 w - 64 bg - zion - slate - dark border border - zion - cyan / 20 rounded - xl shadow - 2xl backdrop - blur - md">;
                    <div className="p - 4">;
                      <div className="grid grid - cols - 1 gap - 2">;
                        {company.map ((item) => (
                          <Link;
                            key={item.name}
                            to={item.href}
                            on_click={() => setActiveDropdown (null)}
                            className="flex items - center p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors group">;
                            <item.icon className="w - 5 h - 5 text - zion - cyan mr - 3 group - hover:scale - 110 transition - transform" />;
                            <span className="text - white group - hover:text - zion - cyan transition - colors">;
                              {item.name}
                )}
              </AnimatePresence>
            </div>
          </nav>
                            </span>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
          </nav>;
          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items - center space - x-4">;
            {/* Search */}
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${
                    searchFocused ? 'w-80' : ''
            <div className="relative hidden md:block">;
              <form on_submit={handle_search} className="relative">;
                <input;
                  type="text";
                  placeholder="Search...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  on_focus={() => setSearchFocused (true)}
                  on_blur={() => setSearchFocused (false)}
                  className={`w - 64 px - 4 py - 2 pl - 10 bg - zion - slate / 20 border border - zion - cyan / 20 rounded - lg text - white placeholder - zion - slate - light focus:outline - none focus:ring - 2 focus:ring - zion - cyan / 50 focus:border - zion - cyan transition - all duration - 200 ${
                    search_focused ? 'w - 80' : '';
}`}
                />;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - zion - slate - light" />;
              </form>;
            </div>;
            {/* User Menu */}
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"
                  aria-expanded={activeDropdown === 'user'}
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
                          className="flex items - center w - full p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors text - white hover:text - zion - cyan">;
                          <LogOut className="w - 4 h - 4 mr - 3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>))}
          </nav>;
          {/* Right side actions */}
          <div className="flex items - center space - x-4">;
            {/* Search */}
  ];
  return (
    <>;
      <header className="sticky top - 0 z - 50 w - full border - b border - slate - 700 / 20 bg - slate - 900 / 95 backdrop - blur - md">;
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                              {service.name}
                            </div>;
                            <div className="text - sm text - gray - 400">;
                              {service.description}
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              )}
            </div>
          </nav>

          {/* Search Bar - Hidden on mobile */}
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

                </div>)}
            </div>;
          </nav>;
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml - 6 flex - 1 max - w-md">;
            <form on_submit={handle_search} className="relative w - full">;
              />;
              <button;
                type="submit";
                className="absolute right - 2 top - 1/2 transform -translate - y-1 / 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
                <Search className="h - 4 h - 4" />;
              <div className="hidden md:flex items - center space - x-3">;
                <Link;
                  to="/login";
                  className="px - 4 py - 2 text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
                  Login;
                </Link>;
                <Link;
                  to="/signup";
                  className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
                  Get Started;
                </Link>;
              </div>)}
          {/* Right side actions */}
          <div className="ml - 6 flex items - center space - x-4">;
            {/* Notifications */}
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
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
