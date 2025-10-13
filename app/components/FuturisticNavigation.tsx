import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Smartphone,
  Brain,
  Users,
  BarChart3,
  Settings,
  ArrowRight
} from 'lucide-react'

const FuturisticNavigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = useMemo(() => [
    { 
      name: 'AI Services', 
      path: '/ai-services', 
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Micro SAAS', 
      path: '/micro-saas', 
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-use solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'IT Services', 
      path: '/it-services', 
      icon: <Settings className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cloud Solutions', 
      path: '/cloud-infrastructure', 
      icon: <Cloud className="w-4 h-4" />,
      description: 'Scalable cloud infrastructure',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Cybersecurity', 
      path: '/cybersecurity-solutions', 
      icon: <Shield className="w-4 h-4" />,
      description: 'Advanced security solutions',
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Data Analytics', 
      path: '/data-analytics', 
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Business intelligence',
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      name: 'Custom Development', 
      path: '/custom-development', 
      icon: <Code className="w-4 h-4" />,
      description: 'Tailored software solutions',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Mobile Solutions', 
      path: '/mobile-development', 
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Native & cross-platform apps',
      color: 'from-teal-500 to-cyan-500'
    }
  ], [])

  const mainNavItems = [
    { name: 'Home', path: '/', icon: <Globe className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <Database className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Settings className="w-4 h-4" /> }
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <span className="relative z-10">Zion Tech Group</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isServicesOpen
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-500/20 shadow-2xl py-4 z-50">
                    <div className="px-4 mb-3">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Services</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-400 transition-colors p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-cyan-500/20">
              <div className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                <div className="px-4 py-2">
                  <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Services</div>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className={`w-6 h-6 rounded bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                          {service.icon}
                        </div>
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-4">
                  <Link
                    to="/consultation"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  )
})

FuturisticNavigation.displayName = 'FuturisticNavigation'

export default FuturisticNavigation