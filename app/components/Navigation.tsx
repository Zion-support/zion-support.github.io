import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Cloud, Code, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
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
      description: 'Advanced AI solutions',
      subServices: [
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions',
      subServices: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Lead Generation', href: '/ai-lead-generation' }
      ]
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity',
      subServices: [
        { title: '5G Data Analytics', href: '/5g-data-analytics' },
        { title: '5G Edge Computing', href: '/5g-edge-computing' },
        { title: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { title: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { title: '5G Network Infrastructure', href: '/5g-network-infrastructure' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Professional cloud solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { title: 'Cloud Security', href: '/cloud-security' },
        { title: 'Cloud Cost Optimization', href: '/cloud-cost-optimization' }
      ]
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Cpu className="w-4 h-4" />,
      description: 'Transform your business',
      subServices: [
        { title: 'Process Automation', href: '/process-automation' },
        { title: 'Workflow Automation', href: '/workflow-automation' },
        { title: 'Business Intelligence', href: '/business-intelligence' },
        { title: 'Enterprise Integration', href: '/enterprise-integration' }
      ]
    }
  ]

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <div key={index} className="group">
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
                        {service.subServices && (
                          <div className="ml-8 pl-4 border-l border-white/20">
                            {service.subServices.slice(0, 3).map((subService, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subService.href}
                                className="block px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {subService.title}
                              </Link>
                            ))}
                            {service.subServices.length > 3 && (
                              <div className="px-2 py-1 text-xs text-gray-400">
                                +{service.subServices.length - 3} more...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link 
                to="/" 
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="flex items-center text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="mr-2">{service.icon}</div>
                        {service.title}
                      </Link>
                      {service.subServices && (
                        <div className="ml-6 space-y-1">
                          {service.subServices.slice(0, 3).map((subService, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subService.href}
                              className="block text-xs text-gray-400 hover:text-white px-3 py-1 rounded"
                              onClick={() => setIsOpen(false)}
                            >
                              • {subService.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center mt-4"
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