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
        { title: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { title: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite' },
        { title: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Information Technology Solutions',
      subServices: [
        { title: 'IT Infrastructure Management', href: '/it-infrastructure-management' },
        { title: 'Network Security', href: '/network-security' },
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'System Administration', href: '/system-administration' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Smartphone,
      description: 'Micro Software as a Service'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Globe,
      description: 'Digital Business Transformation'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Database,
      description: '5G Network Implementation'
    }
  ]

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg shadow-2xl fixed w-full top-0 z-50 border-b border-purple-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-white hover:text-purple-300 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-purple-300 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                About
              </Link>
              
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-white hover:text-purple-300 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl border border-purple-400/20 py-4 z-50 backdrop-blur-lg">
                    <div className="grid grid-cols-1 gap-2 p-4">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <div key={service.href} className="group">
                            <Link
                              to={service.href}
                              className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500/20 group-hover:to-pink-500/20"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <IconComponent className="w-5 h-5 text-purple-400 mr-3 group-hover:text-purple-300 transition-colors" />
                              <div>
                                <div className="font-medium text-white group-hover:text-purple-200 transition-colors">{service.title}</div>
                                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{service.description}</div>
                              </div>
                            </Link>
                            {service.subServices && (
                              <div className="ml-8 mt-2 space-y-1">
                                {service.subServices.map((subService) => (
                                  <Link
                                    key={subService.href}
                                    to={subService.href}
                                    className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-300 hover:bg-white/5 rounded-lg transition-all duration-300"
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
                className="text-white hover:text-purple-300 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-purple-400/20 backdrop-blur-lg">
              <Link
                to="/"
                className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium transition-colors rounded-lg hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium transition-colors rounded-lg hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div>
                <button
                  onClick={toggleServices}
                  className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between transition-colors rounded-lg hover:bg-white/10"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="text-gray-300 hover:text-purple-300 block px-3 py-2 text-sm font-medium flex items-center transition-colors rounded-lg hover:bg-white/5"
                          onClick={() => {
                            setIsOpen(false)
                            setIsServicesOpen(false)
                          }}
                        >
                          <IconComponent className="w-4 h-4 text-purple-400 mr-2" />
                          {service.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium transition-colors rounded-lg hover:bg-white/10"
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
