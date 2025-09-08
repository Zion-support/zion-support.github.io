<<<<<<< HEAD


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { user } = useAuth()
  const isLoggedIn = useSelector((state: RootState,) => state.auth.isLoggedIn)
  const router = useRouter()

import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { Logo } from '@/components/header/Logo';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu, X, Search, User, Bell, PanelLeft } from 'lucide-react';
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { Sidebar } from '@/components/Sidebar';
import { useAuth } from '@/hooks/useAuth';
import { useMessaging } from '@/context/MessagingContext';

<<<<<<< HEAD

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
=======
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const { user, logout } = useAuth();
  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = 0;
  try {
    const { unreadCount: count } = useMessaging();
    unreadCount = count;
  } catch (error) {
    console.warn('Messaging context not available');
  }
  const handleSearch = (e: React.FormEvent) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  };
  return (
    <>
<<<<<<< HEAD

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


              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"

              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>


          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 border-t border-slate-700/50 backdrop-blur-xl animate-slide-up">
            <div className="container-responsive py-6">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-cyan p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <ZionLoadingSpinner size="sm" />
                    ) : (
                      <Search className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </form>

              {/* Mobile navigation */}
              <nav className="space-y-4">

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}

                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
}`}

                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="btn-futuristic text-center">
                      {action.name}        {/* Mobile Navigation */}

=======
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg shadow-zion-cyan/10' 
            : 'bg-zion-slate-dark/80 backdrop-blur-sm border-b border-zion-cyan/10'
        }`}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-2 text-zion-cyan/70 hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 hover:scale-110"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="h-5 w-5" />
          </button>
          <Logo />
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services, technologies, solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation unreadCount={unreadCount} />
          </div>
          {/* Right side actions */}
          <div className="flex items-center space-x-2 ml-auto">
            {/* Notifications */}
            {user && (
              <Link
                to="/notifications"
                className="relative p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Link>
            )}
            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block text-sm font-medium">{user.name || user.email}</span>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Settings
                    </Link>
                    <hr className="border-zion-purple/20 my-2" />
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors px-3 py-2 rounded-lg hover:bg-zion-purple/10"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-zion-purple hover:bg-zion-purple/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {/* Mobile menu button */}
            <div className="lg:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}

                {/* Services Mega Menu */}
                {item.name === 'Services' && (
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-screen max-w-7xl bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        <div className="p-8">
                          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {servicesCategories.map((category, index) => (
                              <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group"
                              >
                                <div className="flex items-center space-x-3 mb-4">
                                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                                    <category.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                      {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">{category.description}</p>
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  {category.services.slice(0, 4).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                          <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                            {service.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 line-clamp-1">
                                            {service.description}
                                          </p>
                                        </div>
                                        <div className="text-right ml-3">
                                          <div className="text-sm font-semibold text-cyan-400">
                                            {service.price}
                                          </div>
                                          <div className="flex items-center text-xs text-gray-400">
                                            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                            {service.rating}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                  
                                  {category.services.length > 4 && (
                                    <Link
                                      to="/comprehensive-services-showcase-2025"
                                      className="block text-center p-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                      View all {category.services.length} services →
                                    </Link>
                                  )}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6">
                                {quickLinks.slice(0, 3).map((link) => (
                                  <Link
                                    key={link.name}
                                    to={link.href}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                                  >
                                    <link.icon className="w-4 h-4" />
                                    <span className="text-sm">{link.name}</span>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                to="/comprehensive-services-showcase-2025"
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                              >
                                View All Services
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Mobile Search */}
            <div className="p-4 border-b border-zion-purple/20">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services, technologies, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)} 
            />
          </div>
        </div>
      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
