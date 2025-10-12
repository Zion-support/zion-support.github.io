import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Users, Settings, BarChart3, Brain, Cpu, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
  
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

  const aiServicesSubmenu = [
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

  const itServicesSubmenu = [
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
      submenu: aiServicesSubmenu
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services',
      hasSubmenu: true,
      submenu: itServicesSubmenu
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
      description: 'Cloud Computing Solutions'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: '5G Network Implementation'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Transform your digital presence'
    }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/5"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/5"
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/5"
            >
              Pricing
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:bg-white/5"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-purple-500/20 z-50">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      Our Services
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {mainServices.map((service, index) => (
                        <div key={index}>
                          <Link
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                              {service.icon}
                            </div>
                            <div className="ml-3 flex-1">
                              <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">{service.title}</p>
                              <p className="text-xs text-gray-400">{service.description}</p>
                            </div>
                            {service.hasSubmenu && (
                              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                            )}
                          </Link>
                          {service.hasSubmenu && (
                            <div className="ml-8 mt-2 space-y-1">
                              {service.submenu?.slice(0, 3).map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="flex items-center p-2 rounded hover:bg-white/5 transition-all duration-300 text-sm group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex-shrink-0 text-gray-400 mr-2 group-hover:text-cyan-400 transition-colors duration-300">
                                    {subItem.icon}
                                  </div>
                                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{subItem.title}</span>
                                </Link>
                              ))}
                              {service.submenu && service.submenu.length > 3 && (
                                <Link
                                  to={service.href}
                                  className="text-xs text-cyan-400 hover:text-purple-400 ml-6 transition-colors duration-300"
                                  onClick={() => setActiveDropdown(null)}
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
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transform"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-all duration-300 hover:bg-white/5"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 border border-purple-500/20">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/5"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/5"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/5"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              
              {/* Services Mobile */}
              <div className="px-3 py-2">
                <p className="text-cyan-400 text-sm font-medium mb-3 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Services
                </p>
                <div className="space-y-1">
                  {mainServices.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="flex items-center text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-white/5 group"
                        onClick={toggleMenu}
                      >
                        <div className="flex-shrink-0 text-cyan-400 mr-3 group-hover:text-purple-400 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-white transition-colors duration-300">{service.title}</p>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white block px-3 py-3 rounded-md text-base font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center shadow-lg shadow-purple-500/25"
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