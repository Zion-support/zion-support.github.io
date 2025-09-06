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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
  const [loginOpen, setLoginOpen] = useState(false),
  const isMobile = useIsMobile(),
  const { t } = useTranslation(),
  const { user } = useAuth(),
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn),
  const router = useRouter(),
  const showTagline = router.pathname === '/',

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

        style={{ "--nav-height": "64px" } as React.CSSProperties}

        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }
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
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {
                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })

                  openLoginModal(router.asPath)
                }}
              >;
                {t('auth && auth.login')}
              </Link>;
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"


                aria-label={t('auth.signup')}
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
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
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
    setServicesDropdownOpen (false);    setSolutionsDropdownOpen (false);
    setCompanyDropdownOpen (false);
    setResourcesDropdownOpen (false);
    setActiveNav (null)}
  return ();
    <>`;
      <header className={`sticky top - 0 z - 50 w - full transition - all duration - 300 ${        scrolled;
          ? 'bg - slate - 900 / 95 backdrop - blur - xl border - b border - cyan - 400 / 20 shadow - 2xl shadow - cyan - 400 / 10';
          : 'bg - slate - 900 / 80 backdrop - blur - md border - b border - slate - 700 / 20'      }`}>;
        <div className="container - responsive">";
          <div className="flex h - 20 items - center justify - between">;
            {/* Logo */}";
            <div className="flex items - center">";
              <Link to="/" className="flex - shrink - 0 group">";
                <div className="flex items - center space - x-3">";
                  <div className="relative">";
                    <div className="w - 10 h - 10 bg - gradient - to - br from - cyan - 400 via - blue - 500 to - purple - 600 rounded - lg flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300">";
                      <Zap className="w - 6 h - 6 text - white"  />;
                    </div>"                    <div className="absolute inset - 0 bg - gradient - to - br from - cyan - 400 via - blue - 500 to - purple - 600 rounded - lg blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300"></div>;
                  </div>";
                  <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent group - hover:scale - 105 transition - transform duration - 300">;
                    Zion Tech Group;
                  </h1>;
                </div>;
                <span className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </span>;
              </Link>;
            </div>;
            {/* Desktop Navigation */}            <nav className="hidden lg:flex items - center space - x-8">;
              {navigation.map ((item) => (";
                <div key={item.name} className="relative">;
                  {item.has_dropdown ? (";
                    <div className="relative">;
                      <button;
                        on_click={() => {
              <AnimatePresence>;
                {active_dropdown === 'services' && (
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top - full left - 0 mt - 2 w - 80 bg - zion - slate - dark border border - zion - cyan / 20 rounded - xl shadow - 2xl backdrop - blur - md">;
                    <div className="p - 4">;
                      <div className="grid grid - cols - 1 gap - 2">;
                        {services.map ((service) => (
                          <Link;
                            key={service.name}
                            to={service.href}
                            on_click={() => setActiveDropdown (null)}
                            className="flex items - center p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors group">;
                            <div className={`w - 10 h - 10 bg - gradient - to - r ${service.color} rounded - lg flex items - center justify - center mr - 3 group - hover:scale - 110 transition - transform`}>;
                              <service.icon className="w - 5 h - 5 text - white" />;
                            </div>;
                            <div>;
                              <div className="font - medium text - white group - hover:text - zion - cyan transition - colors">;
                                {service.name}
                              </div>;
                              <div className="text - sm text - zion - slate - light">;
                                {service.description}
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
                            on_click={() => setActiveDropdown (null)}
                            className="flex items - center p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors group">;
                            <div className={`w - 10 h - 10 bg - gradient - to - r ${solution.color} rounded - lg flex items - center justify - center mr - 3 group - hover:scale - 110 transition - transform`}>;
                              <solution.icon className="w - 5 h - 5 text - white" />;
                            </div>;
                            <div>;
                              <div className="font - medium text - white group - hover:text - zion - cyan transition - colors">;
                                {solution.name}
                              </div>;
                              <div className="text - sm text - zion - slate - light">;
                                {solution.description}
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
                      transition={{ duration: 0.2 }}
                      className="absolute top - full right - 0 mt - 2 w - 48 bg - zion - slate - dark border border - zion - cyan / 20 rounded - xl shadow - 2xl backdrop - blur - md">;
                      <div className="p - 2">;
                        <Link;
                          to="/dashboard";
                          on_click={() => setActiveDropdown (null)}
                          className="flex items - center w - full p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors text - white hover:text - zion - cyan">;
                          <PanelLeft className="w - 4 h - 4 mr - 3" />;
                          Dashboard;
                        </Link>;
                        <Link;
                          to="/profile";
                          on_click={() => setActiveDropdown (null)}
                          className="flex items - center w - full p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors text - white hover:text - zion - cyan">;
                          <User className="w - 4 h - 4 mr - 3" />;
                          Profile;
                        </Link>;
                        <Link;
                          to="/settings";
                          on_click={() => setActiveDropdown (null)}
                          className="flex items - center w - full p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors text - white hover:text - zion - cyan">;
                          <Settings className="w - 4 h - 4 mr - 3" />;
                          Settings;
                        </Link>;
                        <hr className="border - zion - slate / 20 my - 2" />;
                        <button;
                          on_click={() => {
                            logout ();
                            setActiveDropdown (null);
}}
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
            <form on_submit={handle_search} className="hidden md:flex relative">  const navigation = [;
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];
  const services = [;
    { name: 'AI Solutions', href: '/services / ai', description: 'Machine Learning & NLP' },
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },
    { name: 'Cybersecurity', href: '/services / cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud Services', href: '/services / cloud', description: 'DevOps & Infrastructure' },
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
          <nav className="hidden md:flex ml - 8 space - x-8">;
            {navigation.map ((item) => (
              <Link;
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
            <button className="p - 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
              <Bell className="h - 5 w - 5" />;
            </button>;
            {/* User menu */}
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
;


