import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions for your business'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Scalable cloud solutions and migration'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Zap className="w-4 h-4" />,
      description: 'Powerful micro applications'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity solutions'
    }
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 mr-3 text-blue-600">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{service.title}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>

              <Link
                to="/pricing"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={toggleServices}
                className="text-gray-700 hover:text-blue-600 w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.href}
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      onClick={() => {
                        setIsOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      <span className="mr-2 text-blue-600">{service.icon}</span>
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/pricing"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}