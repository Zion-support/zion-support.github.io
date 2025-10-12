import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'

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
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-gen connectivity'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Scalable cloud solutions'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Zap className="w-4 h-4" />,
      description: 'Complete digital transformation'
    }
  ]

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.icon}
                      <div className="ml-3">
                        <div className="font-medium">{service.title}</div>
                        <div className="text-sm text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center px-3 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span className="ml-2">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 mt-4"
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