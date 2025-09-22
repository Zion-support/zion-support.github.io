'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { throttle } = usePerformanceOptimization({ debounceDelay: 16 })

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setIsScrolled(scrollY > 10)
    
    // Update active section based on scroll position
    const sections = ['home', 'services', 'portfolio', 'about', 'contact']
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    
    if (currentSection) {
      setActiveSection(currentSection)
    }
  }, [])

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 16)
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll, throttle])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  const navigationItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'Portfolio', href: '/portfolio', id: 'portfolio' },
    { name: 'Pricing', href: '/pricing', id: 'pricing' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Blog', href: '/blog', id: 'blog' },
    { name: 'Resources', href: '/content', id: 'content' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ]

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const handleMenuItemClick = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <nav className={`relative z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
      isScrolled ? 'bg-black/40 shadow-lg' : 'bg-black/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors duration-200 font-medium ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                )}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 transition-all duration-200"
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4 border-t border-white/10 pt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  activeSection === item.id 
                    ? 'text-white bg-white/10 rounded-lg px-3 py-2' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2'
                }`}
                onClick={handleMenuItemClick}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <ThemeToggle />
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium w-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}