import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Users, Settings, BarChart3, Brain, Cpu } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleAIServices = () => {
    setIsAIServicesOpen(!isAIServicesOpen)
  }

  const toggleITServices = () => {
    setIsITServicesOpen(!isITServicesOpen)
  }

  const aiServices = [
    {
      title: 'AI Content Generator',
      href: '/ai-content-generator',
      icon: <Brain className="w-4 h-4" />,
      description: 'Generate high-quality content with AI'
    },
    {
      title: 'AI Automation',
      href: '/ai-automation',
      icon: <Zap className="w-4 h-4" />,
      description: 'Automate workflows with AI'
    },
    {
      title: 'AI Analytics',
      href: '/ai-analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'AI-powered data insights'
    },
    {
      title: 'AI Cybersecurity',
      href: '/ai-cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'AI-enhanced security solutions'
    },
    {
      title: 'AI Chatbot Builder',
      href: '/ai-chatbot-builder',
      icon: <Users className="w-4 h-4" />,
      description: 'Build intelligent chatbots'
    },
    {
      title: 'AI Computer Vision',
      href: '/ai-computer-vision',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Image and video analysis'
    }
  ]

  const itServices = [
    {
      title: 'Infrastructure Management',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Complete IT infrastructure services'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management'
    },
    {
      title: 'Cybersecurity Solutions',
      href: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Comprehensive security solutions'
    },
    {
      title: 'Network Solutions',
      href: '/it-services',
      icon: <Globe className="w-4 h-4" />,
      description: 'Network design and management'
    },
    {
      title: 'System Administration',
      href: '/it-services',
      icon: <Settings className="w-4 h-4" />,
      description: 'System admin and maintenance'
    }
  ]

  const mainServices = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'AI-powered solutions for your business',
      hasSubmenu: true,
      submenu: aiServices
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services',
      hasSubmenu: true,
      submenu: itServices
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Powerful micro SaaS tools'
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
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {mainServices.map((service, index) => (
                        <div key={index}>
                          <Link
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 text-blue-600 group-hover:text-blue-700">
                              {service.icon}
                            </div>
                            <div className="ml-3 flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700">{service.title}</p>
                              <p className="text-xs text-gray-500">{service.description}</p>
                            </div>
                            {service.hasSubmenu && (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                          </Link>
                          {service.hasSubmenu && (
                            <div className="ml-8 mt-2 space-y-1">
                              {service.submenu?.slice(0, 3).map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="flex items-center p-2 rounded hover:bg-gray-50 transition-colors text-sm"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <div className="flex-shrink-0 text-gray-400 mr-2">
                                    {subItem.icon}
                                  </div>
                                  <span className="text-gray-700">{subItem.title}</span>
                                </Link>
                              ))}
                              {service.submenu && service.submenu.length > 3 && (
                                <Link
                                  to={service.href}
                                  className="text-xs text-blue-600 hover:text-blue-700 ml-6"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  View all {service.title.toLowerCase()}
                                </Link>
                              )}
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
          <div className="lg:hidden flex items-center">
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
          <div className="lg:hidden">
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
                  {mainServices.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm"
                        onClick={toggleMenu}
                      >
                        <div className="flex-shrink-0 text-blue-400 mr-3">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{service.title}</p>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                      </Link>
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