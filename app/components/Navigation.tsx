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
      description: 'Artificial Intelligence Solutions',
      subServices: [
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'Computer Vision', href: '/ai-computer-vision' },
        { title: 'Conversational AI', href: '/ai-conversational-ai' },
        { title: 'Predictive Analytics', href: '/ai-analytics' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Information Technology Solutions',
      subServices: [
        { title: 'Infrastructure Management', href: '/it-services' },
        { title: 'Cybersecurity', href: '/ai-cybersecurity' },
        { title: 'Cloud Migration', href: '/cloud-services' },
        { title: 'Database Administration', href: '/it-services' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Smartphone,
      description: 'Micro Software as a Service',
      subServices: [
        { title: 'AI Smart Scheduler', href: '/ai-smart-scheduler' },
        { title: 'Customer Insights', href: '/ai-customer-insights' },
        { title: 'Document Processor', href: '/ai-document-processor' },
        { title: 'Social Media Optimizer', href: '/ai-social-media-optimizer' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Computing Solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/cloud-services' },
        { title: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { title: 'Edge Computing', href: '/ai-edge-computing' },
        { title: 'Content Delivery', href: '/ai-content-delivery-network' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Globe,
      description: 'Digital Business Transformation',
      subServices: [
        { title: 'Process Automation', href: '/ai-automation' },
        { title: 'Data Analytics', href: '/ai-data-analytics' },
        { title: 'Business Intelligence', href: '/ai-business-intelligence' },
        { title: 'Enterprise Solutions', href: '/ai-enterprise-solutions' }
      ]
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Database,
      description: '5G Network Implementation',
      subServices: [
        { title: '5G Infrastructure', href: '/5g-implementation' },
        { title: 'IoT Solutions', href: '/ai-iot-solutions' },
        { title: 'Edge Computing', href: '/ai-edge-computing' },
        { title: 'Network Optimization', href: '/5g-implementation' }
      ]
    }
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <div key={service.href} className="space-y-2">
                            <Link
                              to={service.href}
                              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <IconComponent className="w-5 h-5 text-purple-600 mr-3" />
                              <div>
                                <div className="font-medium text-gray-900">{service.title}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                              </div>
                            </Link>
                            {service.subServices && (
                              <div className="ml-8 space-y-1">
                                {service.subServices.slice(0, 2).map((subService, index) => (
                                  <Link
                                    key={index}
                                    to={subService.href}
                                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
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
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <div key={service.href} className="space-y-1">
                          <Link
                            to={service.href}
                            className="text-gray-600 hover:text-purple-600 block px-3 py-2 text-sm font-medium flex items-center"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-purple-600 mr-2" />
                            {service.title}
                          </Link>
                          {service.subServices && (
                            <div className="pl-6 space-y-1">
                              {service.subServices.slice(0, 3).map((subService, index) => (
                                <Link
                                  key={index}
                                  to={subService.href}
                                  className="text-gray-500 hover:text-purple-600 block px-3 py-1 text-xs"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setIsServicesOpen(false)
                                  }}
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
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
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
