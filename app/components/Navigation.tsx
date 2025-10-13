import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

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
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cloud Solutions', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Development', path: '/custom-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Solutions', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], [])

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/consultation"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-blue-400 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                        onClick={() => {
                          setIsServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/consultation"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-center"
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