import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Phone, Mail, MapPin, Brain, Cpu, Layers, Bot, Server, Wifi, BarChart3, Settings, Users, Briefcase } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const services = useMemo(() => [
    { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-4 h-4" />, category: 'AI' },
    { name: 'IT Services', path: '/it-services', icon: <Server className="w-4 h-4" />, category: 'IT' },
    { name: 'Micro SAAS', path: '/micro-saas', icon: <Layers className="w-4 h-4" />, category: 'SAAS' },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Wifi className="w-4 h-4" />, category: '5G' },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" />, category: 'IT' },
    { name: 'Cybersecurity', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" />, category: 'IT' },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" />, category: 'AI' },
    { name: 'Custom Development', path: '/custom-software', icon: <Code className="w-4 h-4" />, category: 'IT' },
    { name: 'Mobile Solutions', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" />, category: 'IT' },
    { name: 'Enterprise Solutions', path: '/enterprise-integration', icon: <Briefcase className="w-4 h-4" />, category: 'IT' }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], [])

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-cyan-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-cyan-400 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 relative group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl py-4 z-50 border border-cyan-500/20">
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Our Services</h3>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 hover:text-white transition-all duration-300 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium">{service.name}</span>
                        <span className="text-xs text-gray-500 ml-2 uppercase">{service.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Phone className="w-4 h-4" />
              <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <Mail className="w-4 h-4" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20 bg-slate-800/50 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {/* Contact Info - Mobile */}
              <div className="pb-4 border-b border-gray-700">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors text-sm">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors text-sm">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-cyan-400 transition-all duration-300 py-2"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-all duration-300 py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 bg-slate-700/50 rounded-lg p-3">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-2 px-2 rounded hover:bg-slate-600/50"
                        onClick={() => {
                          setIsServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        <div className="text-cyan-400">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-xs text-gray-500 ml-2 uppercase">{service.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-3 rounded-lg transition-all duration-300 text-center font-semibold shadow-lg"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation