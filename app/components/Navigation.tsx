import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Brain, Server, Wifi } from 'lucide-react'

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
      description: 'Advanced AI solutions',
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI 3D Generation', href: '/ai-3d-generation' },
        { title: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Server className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'Quantum Computing Solutions', href: '/quantum-computing-solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Scalable software solutions',
      submenu: [
        { title: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud infrastructure and management'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Zap className="w-4 h-4" />,
      description: 'Transform your business digitally'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity'
    }
  ]

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
                  onClick={() => toggleDropdown('services')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-6">
                        {services.map((service, index) => (
                          <div key={index} className="group">
                            <Link
                              to={service.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 mt-1">
                                {service.icon}
                              </div>
                              <div>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-600">
                                  {service.title}
                                </h3>
                                <p className="text-xs text-gray-600 mt-1">
                                  {service.description}
                                </p>
                                {service.submenu && (
                                  <div className="mt-2 space-y-1">
                                    {service.submenu.slice(0, 3).map((item, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={item.href}
                                        className="block text-xs text-gray-600 hover:text-purple-600 transition-colors"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {item.title}
                                      </Link>
                                    ))}
                                    {service.submenu.length > 3 && (
                                      <span className="text-xs text-gray-500">
                                        +{service.submenu.length - 3} more
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
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
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 inline-flex items-center justify-center p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-1">
              <div className="text-gray-900 font-medium px-3 py-2 text-base">Services</div>
              {services.map((service, index) => (
                <div key={index} className="pl-6">
                  <Link
                    to={service.href}
                    className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                  {service.submenu && (
                    <div className="pl-4 space-y-1">
                      {service.submenu.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          to={item.href}
                          className="text-gray-600 hover:text-purple-600 block px-3 py-1 rounded-md text-xs"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}