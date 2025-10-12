import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

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
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' },
        { title: 'Quantum Computing', href: '/quantum-computing-solutions' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions',
      submenu: [
        { title: 'AI Climate Solutions', href: '/ai-climate-solutions-pro' }
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
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Transform your digital presence'
    }
  ]

  return (
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
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mr-3">{service.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                      {service.submenu && (
                        <div className="ml-8 pl-4 border-l border-gray-200">
                          {service.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              
              {/* Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="flex items-center text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="mr-2">{service.icon}</div>
                        {service.title}
                      </Link>
                      {service.submenu && (
                        <div className="ml-6 space-y-1">
                          {service.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block text-gray-500 hover:text-blue-600 px-3 py-1 rounded-md text-xs"
                              onClick={() => setIsOpen(false)}
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

              <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
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