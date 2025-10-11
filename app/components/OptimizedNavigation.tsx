'use client'
import React, { useState, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight } from 'lucide-react'

interface NavigationProps {
  className?: string;
}

const OptimizedNavigation: React.FC<NavigationProps> = memo(({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown')) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }, [activeDropdown])

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone'
      })
    }
  }, [])

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ]

  const resources = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' },
    { name: 'Demo', href: '/demo' },
    { name: 'Consultation', href: '/consultation' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    >
                      <service.icon className="w-4 h-4 text-cyan-400" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                aria-expanded={activeDropdown === 'company'}
                aria-haspopup="true"
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (302) 464-0950</span>
            </a>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-cyan-400">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center space-x-3 px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="w-4 h-4 text-cyan-400" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-cyan-400">Company</div>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-cyan-400">Resources</div>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

OptimizedNavigation.displayName = 'OptimizedNavigation'

export default OptimizedNavigation