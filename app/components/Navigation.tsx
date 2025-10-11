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
      href: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      description: 'AI-powered solutions and automation'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-5 h-5" />,
      description: 'Complete IT infrastructure solutions'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Code className="w-5 h-5" />,
      description: 'Affordable micro applications'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-5 h-5" />,
      description: 'Cloud migration and management'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-5 h-5" />,
      description: 'Next-generation connectivity'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Cpu className="w-5 h-5" />,
      description: 'Complete digital transformation'
    }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex-shrink-0 mr-3 text-purple-600">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-medium">{service.title}</div>
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
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services */}
            <div className="px-3 py-2">
              <div className="text-gray-900 font-medium text-base mb-2">Services</div>
              <div className="space-y-1 ml-4">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-sm transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex-shrink-0 mr-3 text-purple-600">
                      {service.icon}
                    </div>
                    <div>
                      <div className="font-medium">{service.title}</div>
                      <div className="text-xs text-gray-500">{service.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}