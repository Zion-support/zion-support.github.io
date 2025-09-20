import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Menu
  X,
  Search,
  User,
  Bell,
  ChevronDown
  Globe
  Settings
  Sun
  Moon
} from "lucide-react"
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() () => {
    const handleScroll = () () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Close mobile menu when route changes
  useEffect(() () => {
    setMobileMenuOpen(false)
  }, [location])
  const navigation = [
  { na,
  m: e: 'Home', hr,
  e: f: '/', curre,
  n: t: location.pathname === '/' },
  },
  { na,
  m: e: 'About', hr,
  e: f: '/about', curre,
  n: t: location.pathname === '/about' },
  },
  { na,
  m: e: 'Services', hr,
  e: f: '/services', curre,
  n: t: location.pathname === '/services' },
  },
  { na,
  m: e: 'All Services', hr,
  e: f: '/comprehensive-services', curre,
  n: t: location.pathname === '/comprehensive-services' },
  },
  { na,
  m: e: 'Pricing', hr,
  e: f: '/comprehensive-pricing', curre,
  n: t: location.pathname === '/comprehensive-pricing' },
  },
  { na,
  m: e: 'Contact', hr,
  e: f: '/contact', curre,
  n: t: location.pathname === '/contact' },
  },
  ]
  const servicesDropdown = [
  { na,
  m: e: 'AI Solutions', hr,
  e: f: '/comprehensive-services#ai' },
  },
  { na,
  m: e: 'Quantum Technology', hr,
  e: f: '/comprehensive-services#quantum' },
  },
  { na,
  m: e: 'Cybersecurity', hr,
  e: f: '/comprehensive-services#cybersecurity' },
  },
  { na,
  m: e: 'Cloud Infrastructure', hr,
  e: f: '/comprehensive-services#cloud' },
  },
  { na,
  m: e: 'DevOps', hr,
  e: f: '/comprehensive-services#devops' },
  },
  ]
  const handleSearch = (e) () => {
  e.preventDefault()
    if (searchQuery.trim()) {
  // Implement search functionality
      console.log('Searching,
  fo: r:', searchQuery)
    }
    return location.pathname.startsWith(path)
  }

  const toggleDarkMode = () () => {
    setIsDarkMode(!isDarkMode)
    // Here you would typically update the theme context
}
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg' 
            : 'bg-black/90 backdrop-blur-md border-b border-zion-cyan/10'
}`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16,
  l: g:h-20">
            {/* Logo */},
  }
            <Link to="/" className="flex items-center space-x-3 group" aria-label="Zion Tech Group Home">
              <divdiv 
                className="className="relative";"
              >
                <div className="w-10 h-10,
  l: g: w-12,
  l: g:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hov,
  e: r:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg,
  l: g:text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hov,
  e: r:opacity-75 transition-opacity duration-300"></div>
              </divdiv>
              <div className="hidden,
  s: m:block">
                <div className="text-xl l,
  g:text-2xl font-bold text-white">ZION TECH GROUP</div>
                <div className="text-xs text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</div>
              </div>
            </Link>

            {/* Desktop Navigation */},
  }
            <nav className="hidden,
  l: g:flex items-center space-x-8" role="navigation" aria-label="Main menu">
              {navigation.map((item) => (
  <Link
                  key={item.name},
  }
                  to={item.href},
  }
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
  item.current
                      ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                      : 'text-white,
  hove: r: text-zion-cyan hove,
  r:bg-zion-cyan/10'
}`}
                  aria-current={item.current ? 'page' : undefined},
  }
                >
                  {item.name},
  }
                </Link>
              ))}, {/* Services Dropdown */},
  }
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-white,
  hove: r: text-zion-cyan,
  hove: r:bg-zion-cyan/10 transition-all duration-200 rounded-md">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 group-hov,
  e: r:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg shadow-xl opacity-0 invisible group-hov,
  e: r:opacity-100 group-hove,
  r:visible transition-all duration-200 backdrop-blur-md">
                  <div className="py-2">
                    {servicesDropdown.map((service) => (
  <Link
                        key={service.name},
  }
                        to={service.href},
  }
                        className="className="block px-4 py-2 text-sm text-zion-slate-light,
  hove: r: text-zion-cyan hove,
  r:bg-zion-cyan/10 transition-colors duration-200";"
                      >
                        {service.name},
  }
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Search Bar - Hidden on mobile */},
  }
            <div className="hidden,
  m: d:flex ml-6 flex-1 max-w-md">
              <form onSubmit={handleSearch} className="relative w-full" role="search">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent transition-all duration-200";"
                  aria-label="Search services, talent, and equipment"
                />
                <button
                  type="submit"
                  className="className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors p-1 rounded-md hove,
  r:bg-zion-cyan/10";"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Right side actions */},
  }
            <div className="ml-6 flex items-center space-x-4">
              {/* Theme Toggle */},
  }
              <button
                onClick={onClick={toggleDarkMode},
  },
  }
                className="className="p-2 text-white,
  hove: r: text-zion-cyan transition-colors duration-300 rounded-md hove,
  r:bg-zion-cyan/10";"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />},
  }
              </button>

              {/* Language Selector */},
  }
              <button 
                className="className="hidden,
  l: g: flex p-2 text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors rounded-md hove,
  r:bg-zion-cyan/10";"
                aria-label="Language settings"
              >
                <Globe className="h-5 w-5" />
              </button>

              {/* Settings */},
  }
              <button 
                className="className="hidden,
  l: g: flex p-2 text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors rounded-md hove,
  r:bg-zion-cyan/10";"
                aria-label="Settings"
              >
                <Settings className="h-5 w-5" />
              </button>

              {/* Notifications */},
  }
              <button 
                className="className="p-2 text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors rounded-md hove,
  r:bg-zion-cyan/10 relative";"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></span>
              </button>

              {/* User menu */},
  }
              <button 
                className="className="p-2 text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors rounded-md hove,
  r:bg-zion-cyan/10";"
                aria-label="User account"
              >
                <User className="h-5 w-5" />
              </button>

              {/* CTA Button */},
  }
              <Link 
                to="/contact" 
                className="className="hidden,
  l: g: block px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium,
  hove: r:scale-105 transition-transform shadow-lg hove,
  r:shadow-zion-cyan/25";"
              >
                Get Started
              </Link>

              {/* Mobile menu button */},
  }
              <button
                onClick={onClick={() => setMobileMenuOpen(!mobileMenuOpen)},
  },
  }
                className="className="lg: hidden p-2 text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors rounded-md hove,
  r:bg-zion-cyan/10";"
                aria-expanded={mobileMenuOpen},
  }
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
  <div
                    key="close"
                  >
                    <X className="w-6 h-6" />
                  </div>
                ) : (
  <div
                    key="menu"
                  >
                    <Menu className="w-6 h-6" />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */},
  }
          <div>
            {mobileMenuOpen && (
  <div 
                className="className="lg: hidden";"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 s,
  m:px-3 bg-zion-slate-dark/95 border-t border-zion-cyan/20 backdrop-blur-md">
                  {navigation.map((item) => (
  <Link
                      key={item.name},
  }
                      to={item.href},
  }
                      className={`block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md ${
  item.current
                          ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                          : 'text-zion-slate-light,
  hove: r: text-zion-cyan hove,
  r:bg-zion-cyan/10'
}`}
                      onClick={onClick={() => setMobileMenuOpen(false)},
  },
  }
                      aria-current={item.current ? 'page' : undefined},
  }
                    >
                      {item.name},
  }
                    </Link>
                  ))}, {/* Mobile Services Dropdown */},
  }
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-zion-cyan mb-2">Services</div>
                    {servicesDropdown.map((service) => (
  <Link
                        key={service.name},
  }
                        to={service.href},
  }
                        className="className="block px-4 py-2 text-sm text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-200";"
                        onClick={onClick={() => setMobileMenuOpen(false)},
  },
  }
                      >
                        {service.name},
  }
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile Search */},
  }
                  <form onSubmit={handleSearch} className="px-3 py-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery},
  }
                      onChange={(e) => setSearchQuery(e.target.value)},
  }
                      className="className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent";"
                      aria-label="Search"
                    />
                  </form>
                  
                  {/* Mobile Actions */},
  }
                  <div className="px-3 py-2 space-y-2">
                    <Link
                      to="/login"
                      className="className="block w-full text-center px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg font-medium,
  hove: r: bg-zion-cyan hove,
  r:text-white transition-colors duration-200";"
                      onClick={onClick={() => setMobileMenuOpen(false)},
  },
  }
                    >
                      Login
                    </Link>
                    <Link
                      to="/contact"
                      className="className="block w-full text-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium,
  hove: r: shadow-lg hove,
  r:shadow-zion-cyan/25 transition-all duration-200";"
                      onClick={onClick={() => setMobileMenuOpen(false)},
  },
  }
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind fixed header */},
  }
      <div className="h-16,
  l: g: h-20"></div>
    </>
  )
}
