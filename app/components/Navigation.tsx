import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const services = [
    {
      title: 'AI Services',
      icon: <Brain className="w-4 h-4" />,
      href: '/ai-services',
      description: 'AI-powered solutions'
    },
    {
      title: 'IT Services',
      icon: <Server className="w-4 h-4" />,
      href: '/it-services',
      description: 'Complete IT solutions'
    },
    {
      title: 'Cloud Services',
      icon: <Cloud className="w-4 h-4" />,
      href: '/cloud-services',
      description: 'Cloud migration & management'
    },
    {
      title: '5G Implementation',
      icon: <Wifi className="w-4 h-4" />,
      href: '/5g-implementation',
      description: 'Next-gen connectivity'
    },
    {
      title: 'Digital Transformation',
      icon: <Cpu className="w-4 h-4" />,
      href: '/digital-transformation',
      description: 'Transform your business'
    }
  ]

  const microServices = [
    {
      title: 'Micro SAAS Services',
      icon: <Zap className="w-4 h-4" />,
      href: '/micro-saas-services',
      description: 'Ready-to-use SAAS solutions'
    }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-blue-500 mr-3">{service.icon}</div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{service.title}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Micro Services</h3>
                    {microServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center px-2 py-2 hover:bg-gray-50 transition-colors rounded"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-purple-500 mr-3">{service.icon}</div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{service.title}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Pricing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-300 text-base font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-blue-500 mr-3">{service.icon}</div>
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                  {microServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="text-purple-500 mr-3">{service.icon}</div>
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}