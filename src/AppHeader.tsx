<<<<<<< HEAD
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { RootState } from '@/store';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useMessaging } from '@/contexts/MessagingContext';
import Logo from '@/components/Logo';
import ResponsiveNavigation from '@/components/navigation/ResponsiveNavigation';
import MobileMenu from '@/components/navigation/MobileMenu';
import LoginModal from '@/components/auth/LoginModal';

export default function AppHeader() {
  const router = useRouter();
  const showTagline = router.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  
  // Messaging context (unread message count)
  const { unreadCount } = useMessaging();

  const openLoginModal = (returnToPath?: string) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true);
  };

  return (
    <>
      <header
=======
import React, { useState } from 'react'
import { Link, useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Bell, Search, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'
import { RootState } from '../store'
import { useAuth } from '../hooks/useAuth'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../hooks/useIsMobile'
import { useMessaging } from '../context/MessagingContext'
const AppHeader = () => {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { user } = useAuth()
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const { unreadCount } = useMessaging()
  const showTagline = router.pathname === '/'
  const openLoginModal = (returnToPath?: string) => {
    setLoginOpen(true)
  }
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/pages/InnovativeServicesShowcase2025' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
  return (
    <>
      <$2 />
>>>>>>> origin/main
        style={{ "--nav-height": "64px" } as React.CSSProperties}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }
        )}
      >
<<<<<<< HEAD
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}

          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
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
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            openLoginModal={openLoginModal}
            unreadCount={unreadCount}
          />
        )}
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </>
  );
}
=======
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <$2 />
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>

              {/* Notifications */}
              <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* User Menu */}
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{user?.name || 'User'}</span>
                </div>
              ) : (
                <$2 />
                  onClick={() => openLoginModal()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Login
                </button>
              )}

              {/* Mobile menu button */}
              <$2 />
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <$2 />
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Tagline */}
      {showTagline && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2">
          <p className="text-sm">
            Leading the future of technology with AI, blockchain, and innovative solutions
          </p>
        </div>
      )}
    </>
  )
}
export default AppHeader
>>>>>>> origin/main
