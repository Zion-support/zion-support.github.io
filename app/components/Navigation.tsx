import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, Users, Settings, FileText, Lock, Smartphone as Phone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Phone className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Blockchain Solutions', path: '/blockchain', icon: <Globe className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Document Analyzer', path: '/ai-document-analyzer', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Lock className="w-4 h-4" /> }
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <Link to="/ai-services" className="col-span-2 flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-purple-600">
                        <Brain className="w-5 h-5 mr-3" />
                        All AI Services
                      </Link>
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {service.icon}
                          <span className="ml-3 text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <Link to="/it-services" className="col-span-2 flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-purple-600">
                        <Code className="w-5 h-5 mr-3" />
                        All IT Services
                      </Link>
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {service.icon}
                          <span className="ml-3 text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('saas')}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Micro SAAS
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'saas' && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <Link to="/micro-saas-services" className="col-span-2 flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-purple-600">
                        <Smartphone className="w-5 h-5 mr-3" />
                        All Micro SAAS
                      </Link>
                      {microSaasServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {service.icon}
                          <span className="ml-3 text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/5g-implementation"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                5G Solutions
              </Link>
              
              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/ai-services" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>All AI Services</Link>
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/it-services" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>All IT Services</Link>
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Micro SAAS Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Micro SAAS</div>
                <div className="ml-4 space-y-1">
                  <Link to="/micro-saas-services" className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>All Micro SAAS</Link>
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/5g-implementation" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                5G Solutions
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
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
