import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Layers, Star, Sparkles, ArrowRight } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const microSAASServices = [
    {
      title: 'AI Content Generator',
      href: '/ai-content-generator',
      icon: Brain,
      description: 'AI-powered content creation',
      price: '$29/mo'
    },
    {
      title: 'CyberGuard Security',
      href: '/cybersecurity-suite',
      icon: Shield,
      description: 'Cybersecurity monitoring',
      price: '$99/mo'
    },
    {
      title: 'DataViz Analytics',
      href: '/analytics-platform',
      icon: Database,
      description: 'Business intelligence platform',
      price: '$49/mo'
    },
    {
      title: 'CloudOps Management',
      href: '/cloud-management',
      icon: Cloud,
      description: 'Cloud infrastructure management',
      price: '$79/mo'
    },
    {
      title: 'DevOps Automation',
      href: '/devops-automation',
      icon: Code,
      description: 'CI/CD automation platform',
      price: '$59/mo'
    },
    {
      title: 'API Gateway Pro',
      href: '/api-gateway',
      icon: Network,
      description: 'Enterprise API management',
      price: '$39/mo'
    }
  ]

  const aiServices = [
    {
      title: 'AI Chatbot Enterprise',
      href: '/ai-chatbot-enterprise',
      icon: Brain,
      description: 'Advanced conversational AI',
      price: 'From $199/mo'
    },
    {
      title: 'Computer Vision',
      href: '/computer-vision-solutions',
      icon: Cpu,
      description: 'Image recognition & analytics',
      price: 'From $299/mo'
    },
    {
      title: 'ML Platform',
      href: '/machine-learning-platform',
      icon: Layers,
      description: 'End-to-end ML platform',
      price: 'From $399/mo'
    }
  ]

  const itServices = [
    {
      title: 'Cybersecurity Consulting',
      href: '/cybersecurity-consulting',
      icon: Shield,
      description: 'Security assessment & testing',
      price: 'From $150/hr'
    },
    {
      title: 'Database Management',
      href: '/database-management',
      icon: Database,
      description: 'Database design & optimization',
      price: 'From $200/hr'
    },
    {
      title: 'Network Infrastructure',
      href: '/network-infrastructure',
      icon: Network,
      description: 'Network design & implementation',
      price: 'From $175/hr'
    }
  ]

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Zap,
      description: 'Artificial Intelligence Solutions',
      submenu: aiServices
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Information Technology Solutions',
      submenu: itServices
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
      description: 'Micro Software as a Service',
      submenu: microSAASServices
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-500 font-medium">AI & IT Solutions</div>
              </div>
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
                  className="text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:bg-clip-text px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center group"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform group-hover:text-cyan-600 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 py-4 z-50">
                    <div className="grid grid-cols-1 gap-1 p-4">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <div key={service.href} className="group">
                            <Link
                              to={service.href}
                              className="flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-all duration-300 group-hover:shadow-md"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-100 to-purple-100 group-hover:from-cyan-200 group-hover:to-purple-200 transition-colors">
                                <IconComponent className="w-5 h-5 text-cyan-600" />
                              </div>
                              <div className="ml-3 flex-1">
                                <div className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">{service.title}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                            </Link>
                            {service.submenu && (
                              <div className="ml-12 mt-2 space-y-1">
                                {service.submenu.slice(0, 3).map((sub) => {
                                  const SubIconComponent = sub.icon
                                  return (
                                    <Link
                                      key={sub.href}
                                      to={sub.href}
                                      className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      <SubIconComponent className="w-4 h-4 text-gray-400 mr-2" />
                                      <span className="text-gray-600">{sub.title}</span>
                                      <span className="ml-auto text-xs text-cyan-600 font-medium">{sub.price}</span>
                                    </Link>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <div className="border-t border-gray-200/50 mt-4 pt-4 px-4">
                      <Link
                        to="/services"
                        className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
              <Link
                to="/"
                className="text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:bg-clip-text block px-4 py-3 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:bg-clip-text block px-4 py-3 text-base font-medium rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:bg-clip-text block px-4 py-3 text-base font-medium w-full text-left flex items-center justify-between rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-all duration-300"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-1 bg-gray-50 rounded-lg p-2">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <div key={service.href}>
                          <Link
                            to={service.href}
                            className="text-gray-600 hover:text-cyan-600 block px-3 py-2 text-sm font-medium flex items-center rounded-lg hover:bg-white transition-all duration-300"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-cyan-600 mr-2" />
                            {service.title}
                          </Link>
                          {service.submenu && (
                            <div className="ml-6 mt-1 space-y-1">
                              {service.submenu.slice(0, 2).map((sub) => {
                                const SubIconComponent = sub.icon
                                return (
                                  <Link
                                    key={sub.href}
                                    to={sub.href}
                                    className="text-gray-500 hover:text-cyan-600 block px-2 py-1 text-xs font-medium flex items-center rounded hover:bg-white transition-colors"
                                    onClick={() => {
                                      setIsOpen(false)
                                      setIsServicesOpen(false)
                                    }}
                                  >
                                    <SubIconComponent className="w-3 h-3 text-gray-400 mr-2" />
                                    {sub.title}
                                    <span className="ml-auto text-xs text-cyan-600">{sub.price}</span>
                                  </Link>
                                )
                              })}
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
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white block px-4 py-3 text-base font-medium rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center"
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
