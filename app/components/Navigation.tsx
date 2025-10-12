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
      icon: Zap,
      description: 'Advanced Artificial Intelligence Solutions',
      subServices: [
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'AI Analytics & BI', href: '/ai-analytics' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { title: 'Computer Vision', href: '/ai-computer-vision' },
        { title: 'Natural Language Processing', href: '/ai-natural-language-processing' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Comprehensive Technology Solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/it-services' },
        { title: 'Cybersecurity', href: '/it-services' },
        { title: 'Network Infrastructure', href: '/it-services' },
        { title: 'Database Management', href: '/it-services' },
        { title: 'DevOps & CI/CD', href: '/it-services' },
        { title: 'IT Support', href: '/it-services' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas',
      icon: Smartphone,
      description: 'AI-Powered Business Tools',
      subServices: [
        { title: 'AI Content Writer Pro', href: '/micro-saas/ai-content-writer-pro' },
        { title: 'AI Analytics Dashboard', href: '/micro-saas/ai-analytics-dashboard' },
        { title: 'AI Email Marketing', href: '/micro-saas/ai-email-marketing' },
        { title: 'AI CRM Assistant', href: '/micro-saas/ai-crm-assistant' },
        { title: 'AI Social Media Manager', href: '/micro-saas/ai-social-scheduler' },
        { title: 'AI Expense Tracker', href: '/micro-saas/ai-expense-tracker' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Computing Solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/cloud-services' },
        { title: 'Cloud Infrastructure', href: '/cloud-services' },
        { title: 'Cloud Security', href: '/cloud-services' },
        { title: 'Multi-Cloud Strategy', href: '/cloud-services' },
        { title: 'Cloud Backup', href: '/cloud-services' },
        { title: 'Cloud Monitoring', href: '/cloud-services' }
      ]
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Globe,
      description: 'Next-Generation Network Solutions',
      subServices: [
        { title: '5G Network Design', href: '/5g-implementation' },
        { title: 'IoT Integration', href: '/5g-implementation' },
        { title: 'Edge Computing', href: '/5g-implementation' },
        { title: '5G Security', href: '/5g-implementation' },
        { title: 'Network Optimization', href: '/5g-implementation' },
        { title: '5G Testing', href: '/5g-implementation' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Database,
      description: 'Business Digitalization',
      subServices: [
        { title: 'Process Automation', href: '/digital-transformation' },
        { title: 'Digital Workforce', href: '/digital-transformation' },
        { title: 'Customer Experience', href: '/digital-transformation' },
        { title: 'Data Strategy', href: '/digital-transformation' },
        { title: 'Change Management', href: '/digital-transformation' },
        { title: 'Technology Consulting', href: '/digital-transformation' }
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
                <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2 p-4">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <div key={service.href} className="group">
                          <Link
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <IconComponent className="w-5 h-5 text-purple-600 mr-3" />
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                          {service.subServices && (
                            <div className="ml-8 mt-2 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              {service.subServices.slice(0, 3).map((subService, index) => (
                                <Link
                                  key={index}
                                  to={subService.href}
                                  className="block text-sm text-gray-600 hover:text-purple-600 px-2 py-1 rounded hover:bg-gray-50"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {subService.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
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
              
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <div key={service.href}>
                          <Link
                            to={service.href}
                            className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-medium flex items-center"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-blue-400 mr-2" />
                            {service.title}
                          </Link>
                          {service.subServices && (
                            <div className="pl-6 space-y-1">
                              {service.subServices.slice(0, 2).map((subService, index) => (
                                <Link
                                  key={index}
                                  to={subService.href}
                                  className="text-gray-400 hover:text-white block px-3 py-1 text-xs"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setIsServicesOpen(false)
                                  }}
                                >
                                  • {subService.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
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