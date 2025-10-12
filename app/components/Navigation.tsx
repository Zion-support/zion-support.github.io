import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Wifi } from 'lucide-react'

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
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: Smartphone,
      description: 'Micro Software as a Service'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: '5G Network Solutions'
    }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', href: '/ai-task-manager' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
    { name: 'AI Password Manager', href: '/ai-password-manager' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', href: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', href: '/ai-smart-calendar' }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
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

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-white/10 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      <service.icon className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Micro SAAS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-white/10 py-2">
                  <Link
                    to="/micro-saas-services"
                    className="block px-4 py-3 text-purple-400 hover:text-purple-300 font-medium border-b border-gray-700"
                  >
                    All Micro SAAS
                  </Link>
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <div className="text-gray-400 px-3 py-2 text-sm font-medium">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block text-gray-300 hover:text-white px-6 py-2 rounded-md text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="text-gray-400 px-3 py-2 text-sm font-medium">Micro SAAS</div>
                <Link
                  to="/micro-saas-services"
                  className="block text-purple-400 hover:text-purple-300 px-6 py-2 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  All Micro SAAS
                </Link>
                {microSaasServices.slice(0, 3).map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block text-gray-300 hover:text-white px-6 py-2 rounded-md text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
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