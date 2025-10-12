import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Code, Zap, Cloud, Wifi, Cpu, Smartphone, ArrowRight } from 'lucide-react'

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
      description: 'AI-powered solutions for content, chatbots, and automation'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Complete IT infrastructure and development services'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Zap className="w-4 h-4" />,
      description: 'Powerful micro applications for business automation'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration, setup, and optimization'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity solutions'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Transform your business for the digital age'
    }
  ]

  const microSaasServices = [
    { name: 'AI Content Studio', path: '/ai-content-studio' },
    { name: 'Smart Invoice Manager', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'Expense Analyzer Pro', path: '/ai-expense-tracker' },
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'Smart Password Vault', path: '/ai-password-manager' }
  ]

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-blue-600 mt-1 group-hover:scale-110 transition-transform">{service.icon}</div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-purple-600">{service.title}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 py-2 z-50">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-white/20 hover:text-purple-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
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
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg rounded-lg mt-2 mx-4">
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            
            {/* Mobile Services */}
            <div className="px-3 py-2">
              <div className="text-white font-medium text-base mb-2">Services</div>
              <div className="space-y-1 ml-4">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center text-gray-300 hover:text-purple-300 px-2 py-1 rounded text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.icon}
                    <span className="ml-2">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Micro SAAS */}
            <div className="px-3 py-2">
              <div className="text-white font-medium text-base mb-2">Micro SAAS</div>
              <div className="space-y-1 ml-4">
                {microSaasServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-gray-300 hover:text-purple-300 block py-1 text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center mt-4"
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
