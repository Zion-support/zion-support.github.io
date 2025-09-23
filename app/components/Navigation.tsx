'use client';

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap, ChevronDown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

interface NavigationItem {
  name: string
  href: string
  external?: boolean
  children?: NavigationItem[]
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'AI Solutions', href: '/services/ai' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Cybersecurity', href: '/services/security' },
        { name: 'Digital Innovation', href: '/services/innovation' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/content' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleDropdownToggle = (itemName: string) => {
    if (activeDropdown === itemName) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(itemName)
    }
  }

  const handleDropdownMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(itemName)
  }

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const isActiveRoute = (href: string) => {
    return pathname === href
  }

  return (
    <nav 
      ref={menuRef}
      className={`relative z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'bg-black/40 shadow-lg' : 'bg-black/20'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleDropdownMouseEnter(item.name)}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 ${
                        isActiveRoute(item.href) ? 'text-white' : ''
                      }`}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`${item.name} menu`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50"
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              isActiveRoute(child.href) ? 'bg-blue-50 text-blue-600' : ''
                            }`}
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-300 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 ${
                      isActiveRoute(item.href) ? 'text-white' : ''
                    }`}
                    aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded p-2"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
              <ThemeToggle />
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Get started - Contact us"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-2 ${
                          isActiveRoute(item.href) ? 'text-white' : ''
                        }`}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block text-gray-400 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 ${
                                isActiveRoute(child.href) ? 'text-white' : ''
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                              aria-current={isActiveRoute(child.href) ? 'page' : undefined}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block text-gray-300 hover:text-white transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-2 ${
                        isActiveRoute(item.href) ? 'text-white' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <ThemeToggle />
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 w-full max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center gap-4">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions, or topics..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                  aria-label="Search input"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-400">
              Try searching for "AI", "Cloud", "Security", or "Analytics"
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}