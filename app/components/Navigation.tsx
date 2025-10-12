import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Cloud, Code, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
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
      description: 'Advanced AI solutions',
      subServices: [
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      subServices: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions',
      subServices: [
        { name: 'AI Task Manager', href: '/ai-task-manager' },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Password Manager', href: '/ai-password-manager' },
        { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
        { name: 'AI Health Tracker', href: '/ai-health-tracker' }
      ]
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Professional cloud solutions'
    }
  ]

  return (
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <div key={index} className="px-4 py-2">
                        <Link
                          to={service.href}
                          className="flex items-center text-white hover:bg-white/10 transition-colors rounded-lg p-2"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="mr-3">{service.icon}</div>
                          <div>
                            <div className="font-medium">{service.title}</div>
                            <div className="text-sm text-gray-300">{service.description}</div>
                          </div>
                        </Link>
                        {service.subServices && (
                          <div className="ml-8 mt-2 space-y-1">
                            {service.subServices.map((subService, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subService.href}
                                className="block text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded px-2 py-1"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {subService.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
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
              className="text-white hover:text-purple-300 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
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
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="mr-2">{service.icon}</div>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              
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