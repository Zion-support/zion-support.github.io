import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
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
      icon: Brain,
      description: 'Artificial Intelligence Solutions'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Information Technology Solutions'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Computing Solutions'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: '5G Network Implementation'
    },
    {
      title: 'Micro SaaS Services',
      href: '/micro-saas-services',
      icon: Server,
      description: 'Micro Software as a Service'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Zap,
      description: 'Digital Business Transformation'
    }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
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
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <service.icon className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <div className="font-medium">{service.title}</div>
                            <div className="text-gray-500 text-xs">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
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
              <div className="space-y-1">
                <div className="text-gray-500 px-3 py-2 text-sm font-medium">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="flex items-center text-gray-700 hover:text-blue-600 px-6 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="h-5 w-5 text-blue-600 mr-3" />
                    {service.title}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
