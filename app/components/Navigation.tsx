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
        { title: 'AI CRM Assistant', href: '/ai-crm-assistant', description: 'Smart customer relationship management' },
        { title: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite', description: 'Advanced AI security solutions' },
        { title: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', description: 'Blockchain with AI integration' },
        { title: 'AI 3D Generation', href: '/ai-3d-generation', description: 'AI-powered 3D model creation' },
        { title: 'AI Accounting Assistant', href: '/ai-accounting-assistant', description: 'Automated accounting and bookkeeping' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services',
      subServices: [
        { title: 'Cloud Migration', href: '/it-services#cloud-migration', description: 'Seamless cloud transitions' },
        { title: 'Cybersecurity', href: '/it-services#cybersecurity', description: 'Protect your digital assets' },
        { title: 'DevOps & CI/CD', href: '/it-services#devops', description: 'Streamline development processes' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools',
      subServices: [
        { title: 'AI Expense Tracker', href: '/ai-expense-tracker', description: 'Smart expense management' },
        { title: 'AI Task Manager', href: '/micro-saas-services#ai-task-manager', description: 'Intelligent task management' },
        { title: 'AI Content Writer', href: '/micro-saas-services#ai-content-writer', description: 'AI-powered content creation' }
      ]
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
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation 5G solutions'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Code className="w-4 h-4" />,
      description: 'Transform your digital presence'
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
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((service, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                          <Link
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 text-blue-600">
                              {service.icon}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{service.title}</p>
                              <p className="text-xs text-gray-500">{service.description}</p>
                            </div>
                          </Link>
                          {service.subServices && (
                            <div className="ml-8 space-y-1">
                              {service.subServices.map((subService, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subService.href}
                                  className="block px-3 py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {subService.title}
                                </Link>
                              ))}
                            </div>
                          )}
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