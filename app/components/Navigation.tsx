import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Cloud, Code, Smartphone, Brain, Cpu, Wifi, Sparkles, ArrowRight, Star, Shield, Zap, Database, Globe, Users, Target, Rocket } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleAiServices = () => {
    setIsAiServicesOpen(!isAiServicesOpen)
  }

  const toggleItServices = () => {
    setIsItServicesOpen(!isItServicesOpen)
  }

  const mainServices = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      description: 'Advanced AI solutions',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-5 h-5" />,
      description: 'Enterprise IT solutions',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Specialized software solutions',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-5 h-5" />,
      description: 'Next-generation connectivity',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-5 h-5" />,
      description: 'Professional cloud solutions',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Rocket className="w-5 h-5" />,
      description: 'Complete business transformation',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30'
    }
  ]

  const aiServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', price: '$29/mo', popular: true },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', price: '$49/mo', popular: true },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$79/mo', popular: false },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', price: '$39/mo', popular: false },
    { name: 'Machine Learning Platform', path: '/ai-ml-platform', price: '$199/mo', popular: true },
    { name: 'Computer Vision API', path: '/ai-computer-vision', price: '$99/mo', popular: false }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', price: '$2,500/mo', popular: true },
    { name: 'Cybersecurity Suite', path: '/cybersecurity-solutions', price: '$1,800/mo', popular: true },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', price: '$2,200/mo', popular: false },
    { name: 'Data Analytics Platform', path: '/data-analytics', price: '$1,500/mo', popular: false },
    { name: 'Mobile Development', path: '/mobile-development', price: '$3,000/mo', popular: false },
    { name: 'Infrastructure Management', path: '/infrastructure-management', price: '$1,200/mo', popular: true }
  ]

  return (
    <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <div className="text-xs text-gray-400 -mt-1">Advanced Technology Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5"
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden">
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {mainServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className={`group p-4 rounded-xl ${service.bgColor} ${service.borderColor} border hover:scale-105 transition-all duration-300`}
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex items-center mb-2">
                              <div className={`${service.color} mr-3`}>{service.icon}</div>
                              <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                {service.title}
                              </div>
                            </div>
                            <div className="text-xs text-gray-300 group-hover:text-white transition-colors">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAiServices}
                  className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center"
                >
                  AI Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAiServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden">
                    <div className="p-4">
                      <div className="space-y-2">
                        {aiServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                            onClick={() => setIsAiServicesOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                              <div>
                                <div className="text-white group-hover:text-cyan-300 transition-colors font-medium">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {service.price}
                                </div>
                              </div>
                            </div>
                            {service.popular && (
                              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                Popular
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center"
                >
                  IT Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isItServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden">
                    <div className="p-4">
                      <div className="space-y-2">
                        {itServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                            onClick={() => setIsItServicesOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                              <div>
                                <div className="text-white group-hover:text-blue-300 transition-colors font-medium">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {service.price}
                                </div>
                              </div>
                            </div>
                            {service.popular && (
                              <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                Popular
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                to="/contact"
                className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-300 p-2 rounded-lg transition-colors hover:bg-white/5"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-4 pt-4 pb-6 space-y-2 bg-white/10 backdrop-blur-xl rounded-2xl mt-4 border border-white/20 shadow-2xl">
                <Link 
                  to="/" 
                  className="text-white hover:text-cyan-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/5 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-white hover:text-cyan-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/5 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                {/* Mobile Services */}
                <div className="px-4 py-2">
                  <div className="text-white font-semibold mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                    Services
                  </div>
                  <div className="space-y-2 ml-4">
                    {mainServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="group flex items-center text-gray-300 hover:text-white block px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className={`mr-3 ${service.color}`}>{service.icon}</div>
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="text-white hover:text-cyan-300 block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/5 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-4 py-3 rounded-lg text-base font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center mt-4 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}