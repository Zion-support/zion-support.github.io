import React, { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
=======
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Users, Settings, BarChart3, Brain, Cpu } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
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
<<<<<<< HEAD
      icon: Brain,
      description: 'Artificial Intelligence Solutions'
=======
      icon: <Brain className="w-4 h-4" />,
      description: 'AI-powered solutions for your business',
      hasSubmenu: true,
      submenu: aiServices
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
    },
    {
      title: 'IT Services',
      href: '/it-services',
<<<<<<< HEAD
      icon: Server,
      description: 'Information Technology Solutions'
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
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
      icon: Code,
      description: 'Micro Software as a Service'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: '5G Network Implementation'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Globe,
      description: 'Transform your digital presence'
    }
  ]

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Automated Reporting', path: '/ai-automated-reporting', icon: <Globe className="w-4 h-4" /> }
  ]

  return (
<<<<<<< HEAD
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
<<<<<<< HEAD
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {services.slice(1).map((service, index) => (
                    <Link key={index} to={service.href} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      <service.icon className="w-4 h-4" />
                      <span className="ml-3">{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="md:hidden">
=======
          <div className="lg:hidden flex items-center">
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
=======
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
                Home
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
<<<<<<< HEAD
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">AI Services</p>
                {aiServices.map((service, index) => (
                  <Link key={index} to={service.path} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">IT Services</p>
                {services.slice(1).map((service, index) => (
                  <Link key={index} to={service.href} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.title}
                  </Link>
                ))}
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-d11d
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
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