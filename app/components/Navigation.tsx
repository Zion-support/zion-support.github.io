import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Layers, Wifi, Server, Bot } from 'lucide-react'

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
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions and automation'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-4 h-4" />,
      description: 'Complete IT infrastructure solutions'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Layers className="w-4 h-4" />,
      description: 'Innovative micro SaaS applications'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation 5G solutions'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Complete digital transformation'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Advanced security solutions'
    },
    {
      title: 'Blockchain Solutions',
      href: '/blockchain-solutions',
      icon: <Database className="w-4 h-4" />,
      description: 'Blockchain and Web3 solutions'
    }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-cyan-400/20 shadow-2xl shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-cyan-500/20 border border-cyan-400/20 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center p-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="flex-shrink-0 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            {service.icon}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">{service.title}</p>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 border border-cyan-400/20 shadow-2xl shadow-cyan-500/10">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <p className="text-cyan-400 text-sm font-medium mb-2">Services</p>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-cyan-400/10 group"
                      onClick={toggleMenu}
                    >
                      <div className="flex-shrink-0 text-cyan-400 group-hover:text-cyan-300 mr-3 transition-colors">
                        {service.icon}
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-cyan-300 transition-colors">{service.title}</p>
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={toggleMenu}
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