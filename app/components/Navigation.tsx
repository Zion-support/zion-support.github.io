import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Bot, BarChart3, Settings, Rocket, Lock } from 'lucide-react'

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
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI-powered solutions',
      color: 'text-cyan-400'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure',
      color: 'text-blue-400'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Rocket className="w-4 h-4" />,
      description: 'Innovative micro SaaS tools',
      color: 'text-purple-400'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration & management',
      color: 'text-green-400'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Network className="w-4 h-4" />,
      description: 'Next-gen 5G solutions',
      color: 'text-orange-400'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Advanced security solutions',
      color: 'text-red-400'
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Data analytics & insights',
      color: 'text-yellow-400'
    },
    {
      title: 'Automation',
      href: '/automation',
      icon: <Bot className="w-4 h-4" />,
      description: 'Business process automation',
      color: 'text-pink-400'
    }
  ]

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:animate-pulse">
                  Zion Tech Group
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-purple-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-purple-400/10 hover:shadow-lg hover:shadow-purple-400/20"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-300 hover:text-pink-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-pink-400/10 hover:shadow-lg hover:shadow-pink-400/20 flex items-center"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-4 w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-500/20 z-50 animate-slide-down">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300 group border border-transparent hover:border-purple-500/30"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className={`flex-shrink-0 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                            {service.icon}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{service.title}</p>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-green-400/10 hover:shadow-lg hover:shadow-green-400/20"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 p-3 rounded-lg transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-4 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-cyan-400/10"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-purple-400 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-purple-400/10"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-4 py-3">
                <p className="text-cyan-400 text-sm font-medium mb-3 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Services
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white px-4 py-3 rounded-xl text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 group"
                      onClick={toggleMenu}
                    >
                      <div className={`flex-shrink-0 ${service.color} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-cyan-400 transition-colors">{service.title}</p>
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-green-400 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-green-400/10"
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