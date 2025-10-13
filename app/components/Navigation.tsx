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
    { name: 'AI Services', path: '/ai-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'IT Services', path: '/services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Micro SAAS', path: '/services', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Analytics', path: '/ai-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Smartphone className="w-4 h-4" /> }
  ], [])

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors rounded-lg"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="text-sm font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link to="/case-studies" className="hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 text-white font-semibold"
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
              <Link
                to="/"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
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
                to="/pricing"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 text-center text-white font-semibold"
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