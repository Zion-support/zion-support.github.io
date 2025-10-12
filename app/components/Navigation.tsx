import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
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
      description: 'Artificial Intelligence Solutions'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Information Technology Solutions'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: Code,
      description: 'Micro Software as a Service'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Computing Solutions'
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

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/cloud-migration" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <Cloud className="w-4 h-4" />
                    <span className="ml-3">Cloud Migration</span>
                  </Link>
                  <Link to="/cybersecurity" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <Shield className="w-4 h-4" />
                    <span className="ml-3">Cybersecurity</span>
                  </Link>
                  <Link to="/data-analytics" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <Database className="w-4 h-4" />
                    <span className="ml-3">Data Analytics</span>
                  </Link>
                  <Link to="/custom-development" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <Code className="w-4 h-4" />
                    <span className="ml-3">Custom Development</span>
                  </Link>
                  <Link to="/mobile-development" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <Smartphone className="w-4 h-4" />
                    <span className="ml-3">Mobile Development</span>
                  </Link>
                  <Link to="/web-development" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span className="ml-3">Web Development</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">AI Services</p>
                {aiServices.map((service, index) => (
                  <Link key={index} to={service.path} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">IT Services</p>
                <Link to="/cloud-migration" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Cloud Migration
                </Link>
                <Link to="/cybersecurity" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Cybersecurity
                </Link>
                <Link to="/data-analytics" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Data Analytics
                </Link>
                <Link to="/custom-development" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Custom Development
                </Link>
                <Link to="/mobile-development" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Mobile Development
                </Link>
                <Link to="/web-development" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Web Development
                </Link>
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
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