import React, { useState } from 'react';
import { useMessaging  } from '@/context/MessagingContext';
import Link from 'next/link';
import { ResponsiveNavigation  } from '@/components/navigation/ResponsiveNavigation';
import { Logo  } from '@/components/header/Logo';
import { useTranslation  } from 'react-i18next';
import { Menu, X } from 'lucide-react'
import { MobileMenu  } from '@/components/header/MobileMenu';
import { useIsMobile  } from '@/hooks/use-mobile';
import { MobileBottomNav  } from '@/components/header/MobileBottomNav';
import { PointsBadge  } from '@/components/loyalty/PointsBadge';
import { LoginModal  } from '@/components/auth/LoginModal';
import { useAuth  } from '@/hooks/useAuth';
import { UserMenu  } from '@/components/header/UserMenu';
import { useSelector  } from 'react-redux';
import type { RootState } from '@/store';
import { cn } from '@/lib/utils', // Import cn utility
import { useRouter } from 'next/router';
export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = null;

        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",

          { "bg-red-500": mobileMenuOpen }

        )}
      >"
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && ("
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">'
              {t('home.header_tagline')}
            </span>;
          )}

            <nav role="navigation" aria-label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button

              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}'
              aria-label={t('general.toggle_mobile_menu')}

              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? ("
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : ("
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

                className="text-sm font-medium text-foreground/70 hover:text-foreground"

                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {

                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:

                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })

                  openLoginModal(router.asPath)

                {t('auth.login')}
              </Link>
              <Link"
                href="/signup""
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"

                aria-label={t('auth.signup')}

                data-testid="signup-nav-link"
              >'
                {t('auth.signup')}
              </Link>;
            </div>;
          )}
          {/* User avatar menu */}
          {isLoggedIn && ("
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}

        <div className="md:hidden fixed inset-0 z-60 pt-16">;
          <div"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick = {(,) => setMobileMenuOpen(false),}"
            aria-hidden="true";
          />;"
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;

            <MobileMenu

            onClick={() => setMobileMenuOpen(false)}

            aria-hidden="true"
          />"
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">

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
;
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

  const show_tagline = router.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false),
  const [login_open, setLoginOpen] = useState (false),
  const is_mobile = useIsMobile (),
  const { t } = use_translation (),
  const { user } = use_auth (),
  const isLoggedIn = use_selector ((state: RootState, ) => state.auth.isLoggedIn),

  const { unread_count } = use_messaging (),
  const openLoginModal = (returnToPath?: string, ) =>: any {}
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router.push with shallow:true before this function is called.;'
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen (true);
  },
  return (
    <>;

        )}

            </span>)}
          <div className="ml - 6 flex-1 hidden md:block">;

            <nav role="navigation" aria - label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;

              aria - expanded = {mobileMenuOpen, }
              aria - label = {t ('general.toggle_mobile_menu'), }'
            >;
              <span className="sr-only">{t ('general.open_main_menu')}</span>;
              {mobileMenuOpen ? (

            </button>;
          </div>;
          <PointsBadge />;
          {!isLoggedIn && (

                data - testid="login - link";
                on_click={(e, ) => {}
                  e.prevent_default (),
                  // For the main login link, we might not have a specific return_to beyond current page,
                  // or we could default to dashboard.;
                  // For consistency with how sub - menus now set it:;'
                  router.push ({ pathname: '/auth / login', query: { return_to: router.as_path } }, undefined, { shallow: true }),
                  openLoginModal (router.as_path);
                }}
              >;'
                {t ('auth.login')}
              </Link>;

                data - testid="signup - nav - link";
              >;'
                {t ('auth.signup')}

              </Link>;
            </div>)}
          {/* User avatar menu */}

              <UserMenu />;
            </div>)}
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}

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
  }

    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false)
    setCompanyDropdownOpen(false)
    setResourcesDropdownOpen(false)
    setActiveNav(null)}
  return ()
    <>``

        <div className="container-responsive">""
          <div className="flex h-20 items-center justify-between">"
            {/* Logo */}""
            <div className="flex items-center">""

                <div className="flex items-center space-x-3">""
                  <div className="relative">""
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""
                      <Zap className="w-6 h-6 text-white"  />"
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>"
                  </div>""

            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">"
              {navigation.map((item) => (""
                <div key={item.name} className="relative">"
                  {item.hasDropdown ? (""

                                {service.description}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false)}
  };,
  const closeAllDropdowns = (...args: unknown[]): unknown => {;,
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};

                    Zion Tech Group;
                  </h1>;
                </div>;"
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </span>;
              </Link>;
            </div>;

                    <div className="relative">;
                      <button;
                        onClick={() => {;

                {activeDropdown === 'services' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {services && services.map((service) => (;

                              <service && service.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;"
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {service && service.name}
                              </div>;"
                              <div className="text-sm text-zion-slate-light">;
                                {service && service.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                )}
              </AnimatePresence>
            </div>
            {/* Solutions Dropdown */}

                              </div>;
                            </div>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;

                aria - haspopup="true">;
                Solutions;'`
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'solutions' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;'
                {active_dropdown === 'solutions' && (

                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}

                {activeDropdown === 'solutions' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {solutions && solutions.map((solution) => (;

                              <solution && solution.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;"
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {solution && solution.name}
                              </div>;"
                              <div className="text-sm text-zion-slate-light">;
                                {solution && solution.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                )}
              </AnimatePresence>
            </div>
            {/* Resources Dropdown */}

                              </div>;
                            </div>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;

                aria - haspopup="true">;
                Resources;'`
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'resources' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;'
                {active_dropdown === 'resources' && (

                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}

                {activeDropdown === 'resources' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {resources && resources.map((resource) => (;

                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {resource && resource.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                )}
              </AnimatePresence>
            </div>
            {/* Company Dropdown */}

                            </span>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;

                aria - haspopup="true">;
                Company;'`
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'company' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;'
                {active_dropdown === 'company' && (

                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}

                {activeDropdown === 'company' && (;
                  <motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}"
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                    <div className="p-4">;"
                      <div className="grid grid-cols-1 gap-2">;
                        {company && company.map((item) => (;

                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {item && item.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;
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

              <form on_submit={handle_search} className="relative">;
                <input;"
                  type="text";"
                  placeholder="Search...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  on_focus={() => setSearchFocused (true)}

                  aria - haspopup="true">;
                  <div className="w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - full flex items - center justify-center">;
                    <User className="w - 4 h - 4 text-white" />;
                  </div>;
                  <span className="text - white text-sm hidden lg:block">{user.name}</span>;
                  <ChevronDown className="w - 4 h - 4 text - zion - slate-light" />;

                </button>;

                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: -10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: -10 }}

                    <User className="w-4 h-4 text-white" />;
                  </div>;"
                  <span className="text-white text-sm hidden lg:block">{user && user.name}</span>;"
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />;
                </button>;

                  {activeDropdown === 'user' && (;
                    <motion&& motion.div;
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0 && 0.2 }}"
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;"
                      <div className="p-2">;

                          <Settings className="w-4 h-4 mr-3" />;
                          Settings;
                        </Link>;"
                        <hr className="border-zion-slate/20 my-2" />;
                        <button;
                          onClick={() => {;
                            logout();
                            setActiveDropdown(null);
}}"
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;"
                          <LogOut className="w-4 h-4 mr-3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion && motion.div>;
                  )}
                </AnimatePresence>
              </div>
            ))}

                          Logout;
                        </button>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>))}
          </nav>;

    { name: 'AI Solutions', href: '/services / ai', description: 'Machine Learning & NLP' },'
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },'
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },'
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },'
    { name: 'Cybersecurity', href: '/services / cybersecurity', description: 'Security & Compliance' },'

  ];
  return (

    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },;
  ];
  return (
    <>;"
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">;"
        <div className="container flex h-16 items-center px-4 sm:px-6">;

                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;

            {navigation.map ((item) => (
              <Link ;
                key={item.name}

                to={item.href}
                className="text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration-200">;

                {item.name}
              </Link>))}
            {/* Services Dropdown */}"
            <div className="relative">;
              <button;
                on_click={() => setServicesDropdownOpen (!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen (true)}

                Services;
                <ChevronDown className={`w - 4 h - 4 ml - 1 transition - transform duration - 200 ${servicesDropdownOpen ? 'rotate - 180' : ''}`} />;`
              </button>;
              {servicesDropdownOpen && (
                <div;
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - slate - 800 / 95 border border - slate - 700 / 50 rounded - lg shadow - xl backdrop - blur-md";
                  onMouseEnter={() => setServicesDropdownOpen (true)}
                  onMouseLeave={() => setServicesDropdownOpen (false)}
                >;
                  <div className="p-4">;
                    <div className="grid grid - cols - 1 gap-2">;
                      {services.map ((service) => (
                        <Link ;
                          key={service.name}
                          to={service.href}

                              {service.name}
                            </div>"
                            <div className="text-sm text-gray-400">
                              {service.description}

                >;"
                  <div className="p-4">;"
                    <div className="grid grid-cols-1 gap-2">;
                      {services && services.map((service) => (;
                        <Link;
                          key={service && service.name}
                          to={service && service.href}"
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group">;"
                          <div className="flex-1">;"

                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">;
                              {service && service.name}
                            </div>;"
                            <div className="text-sm text-gray-400">;
                              {service && service.description}
                            </div>;
                          </div>;
                        </Link>;
                      ))}
                    </div>;"
                    <div className="mt-4 pt-4 border-t border-slate-700/50">;

                            </div>;
                          </div>;
                        </Link>))}

                        View All Services →;
                      </Link>;
                    </div>;
                  </div>;

                </Link>
              </div>
            )}
                </div>)}
            </div>;
          </nav>;

                  Login;
                </Link>;
                <Link ;
                  to="/signup";

                  Get Started;
                </Link>;
              </div>)}
          {/* Right side actions */}"
          <div className="ml-6 flex items-center space-x-4">
            {/* Notifications */}"
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">"
              <Bell className="h-5 w-5" />
            </button>
            {/* User menu */}

            </button>;
          </div>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (

                    {item.name}
                  </Link>
                ))}
              </nav>

      {/* Mobile Navigation */}
      <AnimatePresence />;
        {mobileMenuOpen && (;

                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e && e.target.value)}"
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan";
                />;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;

                    {item && item.name}
                  </Link>;
                ))}
              </nav>;

                      {action && action.name}        {/* Mobile Navigation */}
        {mobileMenuOpen && (;"
          <div className="md:hidden">;"
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">;
              {navigation && navigation.map((item) => (;

                >;
                  {item && item.name}
                </Link>;
              ))}
              {/* Mobile Services */}

                    >;
                      {service && service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              </div>;

                  <Link

                    key={service.name}
                    to={service.href}

                    {service.name}
                  </Link>
                ))}
              </div>

                    {solution.name}
                  </Link>
                ))}
              </div>

                    {resource.name}
                  </Link>
                ))}
              </div>

                    {item.name}
                  </Link>
                ))}
              </div>
              {/* Mobile Auth */}

                    </Link>
                    <button;
                      onClick={() => {}
                        logout()
                        closeMobileMenu()

                    </button>
                  </div>
                </div>
              )}
            </div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>
    </header>  )
}

                  on_click={() => setMobileMenuOpen (false)}
                >;
                  {item.name}
                </Link>))}

                      on_click={() => setMobileMenuOpen (false)}

                    >;
                      {service.name}
                    </Link>))}
                </div>;
              </div>;
              </div>;

                  Services;
                </div>;
                {services.map ((service) => (
                  <Link ;
                    key={service.name}
                    to={service.href}

                    {service.name}
                  </Link>))}
              </div>;
              {/* Mobile Solutions */}
              <div className="space-y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking-wider">;

                  Solutions;
                </div>;
                {solutions.map ((solution) => (
                  <Link ;
                    key={solution.name}
                    to={solution.href}

                    {solution.name}
                  </Link>))}
              </div>;
              {/* Mobile Resources */}
              <div className="space-y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking-wider">;

                  Resources;
                </div>;
                {resources.map ((resource) => (
                  <Link ;
                    key={resource.name}
                    to={resource.href}

                    {resource.name}
                  </Link>))}
              </div>;
              {/* Mobile Company */}
              <div className="space-y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking-wider">;

                  Company;
                </div>;
                {company.map ((item) => (
                  <Link ;
                    key={item.name}
                    to={item.href}

                    {item.name}
                  </Link>))}
              </div>;
              {/* Mobile Auth */}

                      Login;
                    </Link>;
                    <Link;"

                      to="/signup";

                      Get Started;
                    </Link>;
                  </div>;
                </div>) : (

                      Dashboard;
                    </Link>;
                    <button;
                      on_click={() => {}
                        logout ();
                        closeMobileMenu ();

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