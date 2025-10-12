import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Smartphone } from 'lucide-react'

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
      icon: <Zap className="w-4 h-4" />,
      description: 'AI-powered solutions for your business'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Advanced security solutions'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation connectivity'
    }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="flex-shrink-0 text-purple-600">
                            {service.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{service.title}</p>
                            <p className="text-xs text-gray-500">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/careers"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
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
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-1">
              <div className="text-gray-900 px-3 py-2 text-base font-medium">Services</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="text-gray-600 hover:text-purple-600 block pl-6 pr-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <Link
              to="/careers"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/blog"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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