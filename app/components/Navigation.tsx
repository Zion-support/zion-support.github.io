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
      icon: Brain,
      description: 'Artificial Intelligence Solutions',
      items: [
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Chatbots', href: '/ai-chatbot-builder' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Information Technology Solutions',
      items: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Computing Solutions',
      items: [
        { name: 'AWS Solutions', href: '/aws-solutions' },
        { name: 'Azure Services', href: '/azure-services' },
        { name: 'Google Cloud', href: '/google-cloud' },
        { name: 'Cloud Security', href: '/cloud-security' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Smartphone,
      description: 'Micro Software as a Service',
      items: [
        { name: 'AI Task Manager', href: '/ai-task-manager' },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Password Manager', href: '/ai-password-manager' },
        { name: 'AI Invoice Generator', href: '/ai-invoice-generator' }
      ]
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: 'Next-Generation Connectivity',
      items: [
        { name: '5G Network Setup', href: '/5g-network-setup' },
        { name: 'IoT Integration', href: '/iot-integration' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: '5G Security', href: '/5g-security' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Cpu,
      description: 'Business Digital Transformation',
      items: [
        { name: 'Process Automation', href: '/process-automation' },
        { name: 'Digital Strategy', href: '/digital-strategy' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Customer Experience', href: '/customer-experience' }
      ]
    }
  ]

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {services.map((service, index) => (
                          <div key={index} className="space-y-3">
                            <Link
                              to={service.href}
                              className="flex items-center space-x-3 text-gray-900 hover:text-blue-600 transition-colors group"
                            >
                              <service.icon className="w-5 h-5 text-blue-600" />
                              <div>
                                <div className="font-semibold">{service.title}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                              </div>
                            </Link>
                            <div className="ml-8 space-y-1">
                              {service.items.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.href}
                                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  {item.name}
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

              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-1">
              <div className="text-gray-300 px-3 py-2 text-base font-medium">Services</div>
              {services.map((service, index) => (
                <div key={index} className="ml-4 space-y-1">
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleMenu}
                  >
                    {service.title}
                  </Link>
                  {service.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      className="text-gray-500 hover:text-white block px-6 py-1 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}