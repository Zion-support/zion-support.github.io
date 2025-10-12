import React, { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Menu, X, ChevronDown, Cloud, Code, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
=======
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

<<<<<<< HEAD
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
=======
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
  }

  const services = [
    {
<<<<<<< HEAD
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
=======
      name: 'AI Services',
      icon: <Brain className="w-4 h-4" />,
      path: '/ai-services',
      description: 'AI-powered solutions for your business'
    },
    {
      name: 'IT Services',
      icon: <Cpu className="w-4 h-4" />,
      path: '/it-services',
      description: 'Complete IT infrastructure solutions'
    },
    {
      name: 'Micro SAAS',
      icon: <Smartphone className="w-4 h-4" />,
      path: '/micro-saas-services',
      description: 'Affordable micro applications'
    },
    {
      name: 'Cloud Services',
      icon: <Cloud className="w-4 h-4" />,
      path: '/cloud-services',
      description: 'Professional cloud solutions'
    },
    {
      name: '5G Implementation',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity'
    },
    {
<<<<<<< HEAD
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Professional cloud solutions'
=======
      name: 'Digital Transformation',
      icon: <Zap className="w-4 h-4" />,
      path: '/digital-transformation',
      description: 'Transform your business digitally'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
    }
  ]

  return (
<<<<<<< HEAD
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center px-4 py-3 text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="mr-3">{service.icon}</div>
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-gray-300">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
=======
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg z-50 border border-white/20">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 mr-3 text-cyan-600 group-hover:text-purple-600 transition-colors">
                              {service.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
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
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
              className="text-white hover:text-purple-300 p-2 rounded-md transition-colors"
=======
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link 
                to="/" 
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
<<<<<<< HEAD
                <div className="text-white font-medium mb-2">Services</div>
=======
                <div className="text-gray-900 font-medium mb-2">Services</div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
<<<<<<< HEAD
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="mr-2">{service.icon}</div>
                      {service.title}
=======
                      to={service.path}
                      className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-sm transition-colors flex items-center"
                      onClick={toggleMenu}
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
                    </Link>
                  ))}
                </div>
              </div>
<<<<<<< HEAD
              
              <Link 
                to="/contact" 
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
=======

              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4 transition-all duration-300"
                onClick={toggleMenu}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3379
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