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
      submenu: [
        { title: 'AI Marketing', href: '/ai-marketing' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Healthcare', href: '/ai-healthcare' },
        { title: 'AI Fintech', href: '/ai-fintech' },
        { title: 'Content Generation', href: '/ai-content-generation' },
        { title: 'Data Analytics', href: '/ai-data-analytics' },
        { title: 'Cybersecurity', href: '/ai-cybersecurity' },
        { title: 'Customer Support', href: '/ai-customer-support' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services',
      submenu: [
        { title: 'IT Infrastructure', href: '/it-infrastructure' },
        { title: 'IT Support', href: '/it-support' },
        { title: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { title: 'Cybersecurity', href: '/cybersecurity' },
        { title: 'Cloud Services', href: '/cloud-services' }
      ]
    },
    {
      title: 'Emerging Tech',
      href: '/blockchain',
      icon: <Globe className="w-4 h-4" />,
      description: 'Cutting-edge technology solutions',
      submenu: [
        { title: 'Blockchain', href: '/blockchain' },
        { title: 'Quantum Computing', href: '/quantum-computing' },
        { title: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { title: 'AR/VR Solutions', href: '/ar-vr-solutions' },
        { title: 'Autonomous Systems', href: '/autonomous-systems' },
        { title: '5G Implementation', href: '/5g-implementation' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools'
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
            <Link
              to="/services"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Services
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-6">
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
                          {service.submenu && (
                            <div className="ml-8 space-y-1">
                              {service.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="block text-xs text-gray-600 hover:text-blue-600 transition-colors py-1"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {subItem.title}
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
              to="/pricing"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Blog
            </Link>
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
              <Link
                to="/services"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <p className="text-gray-400 text-sm font-medium mb-2">Solutions</p>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
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
                      {service.submenu && (
                        <div className="ml-8 space-y-1">
                          {service.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block text-xs text-gray-400 hover:text-white px-3 py-1 rounded"
                              onClick={toggleMenu}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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