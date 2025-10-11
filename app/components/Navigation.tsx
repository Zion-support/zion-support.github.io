import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const services = [
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Brain className="w-4 h-4" />, description: 'Advanced AI solutions' },
    { name: 'Micro SAAS Apps', path: '/micro-saas-services', icon: <Cpu className="w-4 h-4" />, description: 'Powerful micro applications' },
    { name: 'Cloud Solutions', path: '/cloud-services', icon: <Cloud className="w-4 h-4" />, description: 'Scalable cloud infrastructure' },
    { name: 'IT Services', path: '/it-services', icon: <Shield className="w-4 h-4" />, description: 'Complete IT solutions' },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" />, description: 'Next-gen connectivity' },
    { name: 'Digital Transformation', path: '/digital-transformation', icon: <Zap className="w-4 h-4" />, description: 'Business transformation' },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" />, description: 'Data-driven insights' },
    { name: 'Mobile Solutions', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" />, description: 'Mobile app development' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/30 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Zion Tech Group
                </span>
                <div className="text-xs text-cyan-400 font-medium">Advanced Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                    : 'text-white hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                    : 'text-white hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleServices}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center ${
                    isServicesOpen || location.pathname.startsWith('/ai-services') || location.pathname.startsWith('/micro-saas-services') || location.pathname.startsWith('/it-services') || location.pathname.startsWith('/cloud-services') || location.pathname.startsWith('/digital-transformation') || location.pathname.startsWith('/5g-implementation')
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                      : 'text-white hover:text-cyan-300 hover:bg-white/5'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-400/30 py-4 z-50">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="flex items-center p-3 text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                    : 'text-white hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 focus:outline-none focus:text-cyan-300 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-xl border-t border-cyan-400/30 max-h-96 overflow-y-auto">
            <Link 
              to="/" 
              className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive('/') ? 'text-cyan-400 bg-cyan-400/10' : 'text-white hover:text-cyan-300 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive('/about') ? 'text-cyan-400 bg-cyan-400/10' : 'text-white hover:text-cyan-300 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Services Section */}
            <div className="px-3 py-2">
              <div className="text-cyan-400 font-medium text-base mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Services
              </div>
              <div className="space-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-lg text-sm transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-3">
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
            
            <Link 
              to="/contact" 
              className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive('/contact') ? 'text-cyan-400 bg-cyan-400/10' : 'text-white hover:text-cyan-300 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </nav>
  )
}