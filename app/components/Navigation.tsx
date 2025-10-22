'use client'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brain, Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const aiServices = [
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', description: 'Build intelligent chatbots' },
    { name: 'AI Content Generator', href: '/ai-content-generator', description: 'Generate content with AI' },
    { name: 'AI Data Visualizer', href: '/ai-data-visualizer', description: 'Visualize data with AI' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', description: 'Process documents with AI' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', description: 'Predict financial trends' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', description: 'Detect fraudulent activities' }
  ]

  const itServices = [
    { name: 'Web Development', href: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', description: 'iOS and Android apps' },
    { name: 'API Development', href: '/api-development', description: 'RESTful and GraphQL APIs' },
    { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Cloud infrastructure and services' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security solutions and audits' },
    { name: 'Data Analytics', href: '/data-analytics', description: 'Data analysis and insights' }
  ]

  const microSaas = [
    { name: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Business analytics platform' },
    { name: 'Expense Tracker Pro', href: '/expense-tracker-pro', description: 'Advanced expense management' },
    { name: 'Inventory Manager', href: '/inventory-manager', description: 'Smart inventory tracking' },
    { name: 'Task Manager Pro', href: '/task-manager-pro', description: 'Productivity and task management' },
    { name: 'Social Media Scheduler', href: '/social-media-scheduler', description: 'Social media automation' }
  ]

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 group"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 group"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {microSaas.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 group"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-700 py-4">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <span>AI Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <span>IT Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/it-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All IT Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <span>Micro SAAS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaas.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/micro-saas-solutions"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </a>
              </div>
          </div>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation