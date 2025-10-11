'use client'
import React, { useState } from 'react'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Users, Settings, Phone, Mail } from 'lucide-react'

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
      description: 'Artificial Intelligence Solutions',
      subServices: [
        { name: 'AI Content Generation', href: '/ai-content-generator' },
        { name: 'AI Chatbots', href: '/ai-chatbots' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Analytics', href: '/ai-analytics' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Settings className="w-4 h-4" />,
      description: 'Information Technology Solutions',
      subServices: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Micro Software as a Service',
      subServices: [
        { name: 'AI Task Manager', href: '/ai-task-manager' },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Password Manager', href: '/ai-password-manager' },
        { name: 'AI Invoice Generator', href: '/ai-invoice-generator' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud Computing Solutions',
      subServices: [
        { name: 'AWS Migration', href: '/aws-migration' },
        { name: 'Azure Solutions', href: '/azure-solutions' },
        { name: 'Google Cloud', href: '/google-cloud' },
        { name: 'Cloud Security', href: '/cloud-security' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Digital Business Transformation',
      subServices: [
        { name: 'Process Automation', href: '/process-automation' },
        { name: 'Data Strategy', href: '/data-strategy' },
        { name: 'Customer Experience', href: '/customer-experience' },
        { name: 'Workflow Optimization', href: '/workflow-optimization' }
      ]
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Zap className="w-4 h-4" />,
      description: '5G Network Implementation',
      subServices: [
        { name: '5G Infrastructure', href: '/5g-infrastructure' },
        { name: 'IoT Solutions', href: '/iot-solutions' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: 'Smart Cities', href: '/smart-cities' }
      ]
    }
  ]

  return (
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a href="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10">
              Home
            </a>
            <a href="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10">
              About
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-white hover:text-purple-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 flex items-center"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="group p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex items-center mb-2">
                          {service.icon}
                          <span className="ml-2 font-semibold text-white group-hover:text-purple-300 transition-colors">{service.title}</span>
                        </div>
                        <p className="text-xs text-gray-300 mb-2">{service.description}</p>
                        <div className="space-y-1">
                          {service.subServices.slice(0, 2).map((sub, subIndex) => (
                            <div key={subIndex} className="text-xs text-gray-400 hover:text-purple-300 transition-colors">
                              {sub.name}
                            </div>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10">
              Contact
            </a>
            
            {/* CTA Button */}
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center group ml-4"
            >
              Get Started
              <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-lg rounded-2xl mt-2 border border-white/20">
              <a href="/" className="block text-white hover:text-purple-300 px-3 py-2 rounded-lg text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="/about" className="block text-white hover:text-purple-300 px-3 py-2 rounded-lg text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                About
              </a>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="text-white px-3 py-2 text-base font-medium">Services</div>
                {services.map((service, index) => (
                  <div key={index} className="ml-4">
                    <a
                      href={service.href}
                      className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span className="ml-3">{service.title}</span>
                    </a>
                    <div className="ml-8 space-y-1">
                      {service.subServices.slice(0, 2).map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href={sub.href}
                          className="block text-gray-400 hover:text-purple-300 px-3 py-1 rounded text-xs transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="/contact" className="block text-white hover:text-purple-300 px-3 py-2 rounded-lg text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              
              {/* Mobile CTA */}
              <a 
                href="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
              
              {/* Contact Info */}
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex items-center text-gray-300 px-3 py-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
                </div>
                <div className="flex items-center text-gray-300 px-3 py-2">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}