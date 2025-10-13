import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Globe } from 'lucide-react'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }, [])

  const services = useMemo(() => [
    {
      title: "AI Services",
      href: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      description: "AI-powered solutions for your business",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IT Services",
      href: "/services",
      icon: <Shield className="w-4 h-4" />,
      description: "Comprehensive IT solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Micro SAAS",
      href: "/micro-saas",
      icon: <Zap className="w-4 h-4" />,
      description: "Ready-to-use software solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "5G Solutions",
      href: "/5g-solutions",
      icon: <Globe className="w-4 h-4" />,
      description: "Next-generation connectivity",
      color: "from-orange-500 to-red-500"
    }
  ], [])

  const navigationLinks = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" }
  ], [])

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.href}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                          onClick={closeMenu}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">
                              {service.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-2">
                <div className="text-cyan-400 font-semibold px-3 py-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="flex items-center space-x-3 px-6 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    <div className={`w-6 h-6 rounded bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation