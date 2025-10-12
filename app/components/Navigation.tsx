import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const itServices = [
    {
      title: 'Cloud Migration',
      href: '/cloud-migration',
      icon: Cloud,
      description: 'Seamless cloud infrastructure migration'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions'
    },
    {
      title: 'DevOps',
      href: '/devops',
      icon: Code,
      description: 'Streamlined development operations'
    },
    {
      title: 'Mobile Development',
      href: '/mobile-development',
      icon: Smartphone,
      description: 'Native and cross-platform apps'
    },
    {
      title: 'Data Analytics',
      href: '/data-analytics',
      icon: Database,
      description: 'Business intelligence solutions'
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

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Server className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Wifi className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/micro-saas/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/micro-saas/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/micro-saas/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/micro-saas/ai-invoice-generator' },
    { name: 'AI Analytics Dashboard', path: '/micro-saas/analytics-dashboard' },
    { name: 'AI Content Writer', path: '/micro-saas/ai-content-writer' }
  ]

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it-services')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'it-services' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Services</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {itServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <service.icon className="w-5 h-5 text-purple-600 mr-3" />
                            <div>
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
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
                  onClick={() => toggleDropdown('ai-services')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'ai-services' && (
                  <div className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Services</h3>
                      <div className="space-y-2">
                        {aiServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            {service.icon}
                            <span className="ml-3 text-gray-900">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('micro-saas')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Micro SAAS
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'micro-saas' && (
                  <div className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SAAS</h3>
                      <div className="space-y-2">
                        {microSaasServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="block p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-900"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
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
                className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium"
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium"
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