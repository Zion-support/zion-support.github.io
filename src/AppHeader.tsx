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
    { name: 'Contact', href: '/contact' } ]

  return (
    <>
      <$2 />
        style={{ "--nav-height": "64px" } as React.CSSProperties}

        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }

        )}

      >
        <div>
          <div>
            {/* Logo */}

            <div>
              <Link />
                <div>
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

            <div>
              {/* Search */}

              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Search />
              </button>

              {/* Notifications */}

              <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Bell />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                    {unreadCount}

                  </span>
                )}

              </button>

              {/* User Menu */}

              {isLoggedIn ? (
                <div>
          <div>
                    <User />
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

        <AnimatePresence />
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}

              animate={{ opacity: 1, height: 'auto' }}

              exit={{ opacity: 0, height: 0 }}

              className="md:hidden border-t border-border bg-background"
            >
              <div>
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
        <div>
          <p className="text-sm">
            Leading the future of technology with AI, blockchain, and innovative solutions
          </p>
        </div>
      )}

    </>
  )
}

export default AppHeader