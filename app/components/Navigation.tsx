import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Network, Bot, BarChart3, Settings, Rocket, Lock } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Server, Wifi } from 'lucide-react'

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Artificial Intelligence Solutions'
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Automation', href: '/ai-automation' }
      ]
      color: 'text-blue-400'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Information Technology Solutions'
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' }
      ]
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions for your business'
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Comprehensive IT solutions'
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: <Rocket className="w-4 h-4" />,
      description: 'Ready-to-use SaaS applications'
    },
    {
      name: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Protect your digital assets'
    },
    {
      name: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Scalable cloud infrastructure'
    },
    {
      name: 'Data Analytics',
      icon: Cloud,
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: Code,
      description: 'Micro Software as a Service'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: '5G Network Implementation'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Globe,
      description: 'Transform your digital presence'
    }
  ]

  const additionalServices = [
    {
      title: 'Data Analytics',
      href: '/data-analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Transform data into insights'
    }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-purple-400 mr-3">{service.icon}</div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <div key={index}>
                        <Link
                          to={service.href}
                          className="flex items-center px-4 py-3 text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="mr-3">{service.icon}</div>
                          <div className="flex-1">
                            <div className="font-medium">{service.title}</div>
                            <div className="text-sm text-gray-300">{service.description}</div>
                          </div>
                        </Link>
                        {service.submenu && (
                          <div className="ml-8 pl-4 border-l border-white/20">
                            {service.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Micro SaaS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan/10 block px-3 py-2 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.title}
                    </Link>
                  ))}
                </div>
                <div className="text-neon-pink font-semibold mb-2 text-sm uppercase tracking-wider mt-4">Additional Services</div>
                <div className="space-y-1 ml-4">
                  {additionalServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 block px-3 py-1 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Micro SAAS Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Micro SAAS</div>
                <div className="ml-4 space-y-1">
                  <Link to="/micro-saas-services" className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>All Micro SAAS</Link>
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/5g-implementation" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                5G Solutions
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium text-center"
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

export default Navigation