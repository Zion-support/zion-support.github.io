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
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: <Brain className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Blockchain Solutions', path: '/blockchain', icon: <Globe className="w-4 h-4" /> },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions', icon: <Cpu className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', icon: <Globe className="w-4 h-4" /> }
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
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
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
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {itServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
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
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold">All Micro SAAS</Link>
                  {microSaasServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/5g-implementation" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              5G Solutions
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
<<<<<<< HEAD
<<<<<<< HEAD
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">AI Services</p>
                {aiServices.map((service, index) => (
                  <Link key={index} to={service.path} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
=======
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
                      {service.submenu && (
                        <div className="ml-6 space-y-1">
                          {service.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block text-gray-400 hover:text-white px-3 py-1 rounded-md text-xs"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
=======
                <div className="text-gray-300 font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/ai-services" className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>All AI Services</Link>
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
                  ))}
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-c78e
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
<<<<<<< HEAD
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">IT Services</p>
                {services.slice(1).map((service, index) => (
                  <Link key={index} to={service.href} className="text-gray-600 hover:text-purple-600 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.title}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
=======
                <div className="text-gray-300 font-medium mb-2">IT Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/it-services" className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>All IT Services</Link>
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5508
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