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
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }
  ], [])

  return (
    <nav className="bg-gray-900 text-white shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors" aria-label="Zion Tech Group - Home">
            Zion Tech Group
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                  role="menu"
                  aria-label="Services submenu"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset"
                      onClick={() => setIsServicesOpen(false)}
                      role="menuitem"
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" className="hover:text-blue-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
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
              className="text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-2"
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700" role="menu" aria-label="Mobile navigation menu">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset rounded-md px-2 py-1"
                onClick={toggleMenu}
                role="menuitem"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset rounded-md px-2 py-1"
                onClick={toggleMenu}
                role="menuitem"
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset rounded-md px-2 py-1 w-full text-left"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-label="Services submenu"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2" role="menu" aria-label="Services submenu">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset rounded-md px-2 py-1"
                        onClick={() => {
                          setIsServicesOpen(false)
                          toggleMenu()
                        }}
                        role="menuitem"
                      >
                        {service.icon}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset rounded-md px-2 py-1"
                onClick={toggleMenu}
                role="menuitem"
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset rounded-md px-2 py-1"
                onClick={toggleMenu}
                role="menuitem"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset rounded-md px-2 py-1"
                onClick={toggleMenu}
                role="menuitem"
              >
                Contact
              </Link>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset"
                onClick={toggleMenu}
                role="menuitem"
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