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

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> },
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
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: <Globe className="w-4 h-4" /> }
  ]

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl fixed w-full top-0 z-50 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-white hover:text-purple-300 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-purple-300 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center group"
                >
                  AI Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'ai' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-purple-200/20 py-2 z-50">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold border-b border-gray-200">All AI Services</Link>
                    {aiServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-colors">
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
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center group"
                >
                  IT Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-purple-200/20 py-2 z-50">
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold border-b border-gray-200">All IT Services</Link>
                    {itServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-colors">
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
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center group"
                >
                  Micro SAAS
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'saas' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'saas' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-purple-200/20 py-2 z-50">
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold border-b border-gray-200">All Micro SAAS</Link>
                    {microSaasServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-colors">
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/5g-implementation" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group">
                5G Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20 max-h-96 overflow-y-auto">
              <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/ai-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>All AI Services</Link>
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-300 hover:text-purple-300 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/it-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>All IT Services</Link>
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-300 hover:text-purple-300 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Micro SAAS Mobile */}
              <div className="px-3 py-2">
                <div className="text-white font-medium mb-2">Micro SAAS</div>
                <div className="ml-4 space-y-1">
                  <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>All Micro SAAS</Link>
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-300 hover:text-purple-300 block py-1 text-sm transition-colors" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/5g-implementation" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                5G Solutions
              </Link>
              <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
