import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Smartphone } from 'lucide-react'

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
      icon: Zap,
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
      description: 'Cloud Infrastructure & Migration'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: Shield,
      description: 'Security & Compliance'
    },
    {
      title: 'Data Analytics',
      href: '/data-analytics',
      icon: Database,
      description: 'Business Intelligence & Analytics'
    },
    {
      title: 'Mobile Development',
      href: '/mobile-development',
      icon: Smartphone,
      description: 'iOS & Android Apps'
    }
  ]

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-blue-300 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-blue-300 transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-white hover:text-blue-300 transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <Link
                          key={service.title}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <IconComponent className="w-5 h-5 text-blue-500 mr-3" />
                          <div>
                            <div className="font-semibold text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-blue-300 transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-semibold mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {service.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center"
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