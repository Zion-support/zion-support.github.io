'use client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Users, Target, BarChart3 } from 'lucide-react'

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
      icon: <Brain className="w-4 h-4" />,
      description: 'Artificial Intelligence Solutions'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Information Technology Solutions'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Micro Software as a Service'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Digital Business Transformation'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Database className="w-4 h-4" />,
      description: '5G Network Implementation'
    }
  ]

  const aiServices = [
    { name: 'AI Content Generator', path: '/micro-saas/ai-content-writer', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/micro-saas/task-manager-pro', icon: <Target className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/micro-saas/support-bot', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/micro-saas/email-marketing', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-services', icon: <Code className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/it-services/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: <Database className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Globe className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI Content Writer', path: '/micro-saas/ai-content-writer', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Task Manager Pro', path: '/micro-saas/task-manager-pro', icon: <Target className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/micro-saas/expense-tracker', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/micro-saas/support-bot', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/micro-saas/email-marketing', icon: <Code className="w-4 h-4" /> }
  ]

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                AI Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'ai' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 font-semibold border-b border-gray-200">All AI Services</Link>
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
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
                className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 font-semibold border-b border-gray-200">All IT Services</Link>
                  {itServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Micro SAAS
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'saas' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                  <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 font-semibold border-b border-gray-200">All Micro SAAS</Link>
                  {microSaasServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/5g-implementation" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              5G Solutions
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20 max-h-96 overflow-y-auto">
              <Link to="/" className="block text-white hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="block text-white hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/ai-services" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>All AI Services</Link>
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-300 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/it-services" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>All IT Services</Link>
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-300 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Micro SAAS Mobile */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">Micro SAAS</div>
                <div className="ml-4 space-y-1">
                  <Link to="/micro-saas-services" className="text-gray-300 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>All Micro SAAS</Link>
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-300 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/5g-implementation" className="block text-white hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                5G Solutions
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center mt-2"
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