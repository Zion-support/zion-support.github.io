import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, ArrowRight, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      description: 'Advanced AI Solutions',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Zap,
      description: 'Micro Software Solutions',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'IT Infrastructure',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Solutions',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: '5G Network Solutions',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Server,
      description: 'Digital Innovation',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30'
    }
  ]

  const specialServices = [
    {
      title: 'AI Quantum Financial Oracle',
      href: '/ai-quantum-financial-oracle',
      icon: Cpu,
      description: 'Quantum-Powered Finance',
      badge: 'NEW',
      color: 'text-cyan-400',
      bgColor: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/50'
    },
    {
      title: 'AI Holographic Workspace',
      href: '/ai-holographic-workspace',
      icon: Globe,
      description: '3D Virtual Environment',
      badge: 'FUTURE',
      color: 'text-purple-400',
      bgColor: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/50'
    },
    {
      title: 'AI Telepathic Interface',
      href: '/ai-telepathic-interface',
      icon: Brain,
      description: 'Mind-Computer Interface',
      badge: 'EXPERIMENTAL',
      color: 'text-violet-400',
      bgColor: 'bg-gradient-to-r from-violet-500/20 to-purple-500/20',
      borderColor: 'border-violet-500/50'
    }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Future Technology Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-white hover:text-blue-300 transition-colors duration-300 font-medium group"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className={`p-4 rounded-xl ${service.bgColor} ${service.borderColor} border hover:scale-105 transition-all duration-300 group`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex items-center space-x-3">
                          <service.icon className={`w-6 h-6 ${service.color}`} />
                          <div>
                            <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                      Specialized Solutions
                    </h4>
                    <div className="space-y-3">
                      {specialServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className={`flex items-center justify-between p-3 rounded-lg ${service.bgColor} ${service.borderColor} border hover:scale-105 transition-all duration-300 group`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center space-x-3">
                            <service.icon className={`w-5 h-5 ${service.color}`} />
                            <div>
                              <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-gray-400 text-sm">{service.description}</p>
                            </div>
                          </div>
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            {service.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="text-white hover:text-blue-300 transition-colors duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg rounded-2xl mt-2 border border-white/20">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <div className="space-y-2 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-3 py-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 rounded-lg hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-300 font-medium"
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
