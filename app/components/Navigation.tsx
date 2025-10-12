import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

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
      description: 'AI-powered solutions for your business',
      subServices: [
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services',
      subServices: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity-solutions' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Infrastructure Management', href: '/infrastructure-management' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools',
      subServices: [
        { name: 'AI Task Manager', href: '/ai-task-manager' },
        { name: 'Smart Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Content Studio', href: '/ai-content-writer' },
        { name: 'AI Invoice Studio', href: '/ai-invoice-generator' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management',
      subServices: [
        { name: 'AWS Migration', href: '/aws-migration' },
        { name: 'Azure Migration', href: '/azure-migration' },
        { name: 'Cloud Security', href: '/cloud-security' },
        { name: 'Cloud Optimization', href: '/cloud-optimization' }
      ]
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation 5G solutions',
      subServices: [
        { name: '5G Network Design', href: '/5g-network-design' },
        { name: '5G Testing', href: '/5g-testing' },
        { name: '5G Security', href: '/5g-security' },
        { name: '5G Integration', href: '/5g-integration' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Code className="w-4 h-4" />,
      description: 'Transform your digital presence',
      subServices: [
        { name: 'Process Automation', href: '/process-automation' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'API Development', href: '/api-development' },
        { name: 'Legacy Modernization', href: '/legacy-modernization' }
      ]
    }
  ]

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <div key={index} className="space-y-2">
                          <Link
                            to={service.href}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 text-blue-600">
                              {service.icon}
                            </div>
                            <div className="ml-2">
                              <p className="text-sm font-medium text-gray-900">{service.title}</p>
                              <p className="text-xs text-gray-500">{service.description}</p>
                            </div>
                          </Link>
                          <div className="ml-6 space-y-1">
                            {service.subServices?.slice(0, 3).map((subService, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subService.href}
                                className="block text-xs text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {subService.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <p className="text-gray-400 text-sm font-medium mb-2">Services</p>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      <div className="flex-shrink-0 text-blue-400 mr-3">
                        {service.icon}
                      </div>
                      <div>
                        <p className="font-medium">{service.title}</p>
                        <p className="text-xs text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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