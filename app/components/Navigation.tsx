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
      description: 'AI-powered solutions for your business'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Complete IT infrastructure solutions'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Scalable cloud infrastructure'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions'
    }
  ]

  const solutions = [
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Transform your business digitally'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Protect your digital assets'
    },
    {
      title: 'Data Analytics',
      href: '/data-analytics',
      icon: <Database className="w-4 h-4" />,
      description: 'Unlock insights from your data'
    }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                      >
                        <div className="text-blue-400 group-hover:text-blue-300">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{service.title}</div>
                          <div className="text-gray-400 text-sm">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {solutions.map((solution, index) => (
                      <Link
                        key={index}
                        to={solution.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                      >
                        <div className="text-green-400 group-hover:text-green-300">
                          {solution.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{solution.title}</div>
                          <div className="text-gray-400 text-sm">{solution.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Pricing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                onClick={toggleMenu}
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
                      className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                      onClick={toggleMenu}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Solutions</div>
                <div className="space-y-1 ml-4">
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      to={solution.href}
                      className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                      onClick={toggleMenu}
                    >
                      {solution.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                onClick={toggleMenu}
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