import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Sparkles } from 'lucide-react'

export default function FuturisticNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'AI-powered solutions for your business',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation 5G solutions',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Code className="w-4 h-4" />,
      description: 'Transform your digital presence',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center group">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-400/30 transition-all duration-300"></div>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActive('/') 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
                {isActive('/') && (
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-md border border-cyan-500/30 shadow-lg shadow-cyan-500/20"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActive('/about') 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About
                {isActive('/about') && (
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-md border border-cyan-500/30 shadow-lg shadow-cyan-500/20"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center relative group ${
                    isServicesOpen 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20 z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                              {service.icon}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">{service.title}</p>
                              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActive('/contact') 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-md border border-cyan-500/30 shadow-lg shadow-cyan-500/20"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 border border-cyan-500/20 shadow-2xl shadow-cyan-500/20">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                
                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <p className="text-gray-400 text-sm font-medium mb-2">Services</p>
                  <div className="space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-300 group"
                        onClick={toggleMenu}
                      >
                        <div className={`flex-shrink-0 p-1 rounded bg-gradient-to-r ${service.color} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <div>
                          <p className="font-medium">{service.title}</p>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Neon glow effect */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-80 z-40"></div>
    </>
  )
}