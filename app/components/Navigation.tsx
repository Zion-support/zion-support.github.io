import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Cloud, Code, Smartphone, Brain, Cpu, Wifi, Zap, Database, Shield, Users, BarChart3, Settings } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions',
      color: 'text-blue-400'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      color: 'text-green-400'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions',
      color: 'text-purple-400'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity',
      color: 'text-yellow-400'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Professional cloud solutions',
      color: 'text-orange-400'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Zap className="w-4 h-4" />,
      description: 'Transform your business',
      color: 'text-pink-400'
    }
  ]

  const additionalServices = [
    {
      title: 'Data Analytics',
      href: '/data-analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Business intelligence',
      color: 'text-cyan-400'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Security solutions',
      color: 'text-red-400'
    },
    {
      title: 'Consulting',
      href: '/consulting',
      icon: <Users className="w-4 h-4" />,
      description: 'Expert guidance',
      color: 'text-indigo-400'
    }
  ]

  return (
    <nav className={`${scrolled ? 'bg-futuristic-dark/95 backdrop-blur-xl border-b border-neon-cyan/30' : 'bg-futuristic-dark/80 backdrop-blur-lg border-b border-white/20'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center shadow-neon-cyan animate-neon-pulse group-hover:scale-110 transition-transform duration-300">
              <span className="text-futuristic-dark font-bold text-lg">Z</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl group-hover:text-neon-cyan transition-colors duration-300">Zion Tech Group</span>
              <span className="text-xs text-neon-cyan/70 font-mono">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-neon-cyan/50 relative group"
            >
              Home
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-neon-cyan/50 relative group"
            >
              About
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:shadow-neon-cyan/50 relative group"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-futuristic-dark/95 backdrop-blur-xl rounded-xl border border-neon-cyan/30 shadow-hologram z-50 animate-fade-in">
                  <div className="py-3">
                    <div className="px-4 py-2 border-b border-neon-cyan/20">
                      <h3 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">Core Services</h3>
                    </div>
                    <div className="py-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center px-4 py-3 text-white hover:bg-neon-cyan/10 transition-all duration-300 group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className={`mr-3 ${service.color} group-hover:scale-110 transition-transform duration-300`}>{service.icon}</div>
                          <div>
                            <div className="font-medium group-hover:text-neon-cyan transition-colors duration-300">{service.title}</div>
                            <div className="text-sm text-gray-300 group-hover:text-neon-cyan/70 transition-colors duration-300">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-neon-cyan/20">
                      <h3 className="text-sm font-semibold text-neon-pink uppercase tracking-wider mb-2">Additional Services</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {additionalServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center px-2 py-1 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 rounded transition-all duration-300"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-neon-cyan/50 relative group"
            >
              Contact
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark px-6 py-2 rounded-lg text-sm font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 shadow-neon-cyan/50 hover:shadow-neon-pink/50 hover:scale-105 transform"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-neon-cyan p-2 rounded-md transition-all duration-300 hover:bg-neon-cyan/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-futuristic-dark/95 backdrop-blur-xl rounded-lg mt-2 border border-neon-cyan/30 shadow-hologram">
              <Link 
                to="/" 
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-neon-cyan font-semibold mb-2 text-sm uppercase tracking-wider">Core Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan/10 block px-3 py-2 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.title}
                    </Link>
                  ))}
                </div>
                <div className="text-neon-pink font-semibold mb-2 text-sm uppercase tracking-wider mt-4">Additional Services</div>
                <div className="space-y-1 ml-4">
                  {additionalServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 block px-3 py-1 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark block px-3 py-2 rounded-md text-base font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 text-center mt-4 shadow-neon-cyan/50"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}