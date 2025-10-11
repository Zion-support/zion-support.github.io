import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

<<<<<<< HEAD
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

=======
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const services = [
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cloud Solutions', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'Custom Development', path: '/custom-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Solutions', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }
  ]

>>>>>>> cursor/website-audit-and-update-with-deployment-c744
  return (
    <nav className="bg-white/10 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
<<<<<<< HEAD
              
<<<<<<< HEAD
              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All AI Services</Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Content Generator</Link>
                    <Link to="/ai-chatbot-builder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Chatbot Builder</Link>
                    <Link to="/ai-analytics-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Analytics Dashboard</Link>
                    <Link to="/ai-email-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Email Assistant</Link>
                    <Link to="/ai-voice-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Voice Assistant</Link>
                    <Link to="/ai-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Automation</Link>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('it')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All IT Services</Link>
                    <Link to="/cloud-migration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Cloud Migration</Link>
                    <Link to="/cybersecurity-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Cybersecurity</Link>
                    <Link to="/devops-cicd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">DevOps & CI/CD</Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Data Analytics</Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Mobile Development</Link>
                    <Link to="/blockchain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Blockchain Solutions</Link>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('saas')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Micro SAAS
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'saas' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">All Micro SAAS</Link>
                    <Link to="/ai-task-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Task Manager</Link>
                    <Link to="/ai-expense-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Expense Tracker</Link>
                    <Link to="/ai-password-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Password Manager</Link>
                    <Link to="/ai-invoice-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Invoice Generator</Link>
                    <Link to="/ai-health-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Health Tracker</Link>
                    <Link to="/ai-smart-calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">AI Smart Calendar</Link>
                  </div>
                )}
              </div>

              <Link to="/5g-implementation" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                5G Solutions
=======
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-2 z-50">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.icon}
                        <span className="ml-3 text-sm font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/ai-services" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                AI Services
>>>>>>> cursor/website-audit-and-update-with-deployment-c744
              </Link>
=======
              <div className="relative group">
                <button className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link to="/micro-saas-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Micro SAAS Services
                    </Link>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      IT Services
                    </Link>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      AI Solutions
                    </Link>
                    <Link to="/cloud-services" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Cloud Services
                    </Link>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      Digital Transformation
                    </Link>
                    <Link to="/5g-implementation" className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
                      5G Implementation
                    </Link>
                  </div>
                </div>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d668
              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-purple-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
<<<<<<< HEAD
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20">
=======
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20 max-h-96 overflow-y-auto">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d668
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
<<<<<<< HEAD
            
<<<<<<< HEAD
            {/* AI Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All AI Services</Link>
                <Link to="/ai-content-generator" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Content Generator</Link>
                <Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Chatbot Builder</Link>
                <Link to="/ai-analytics-dashboard" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Analytics Dashboard</Link>
                <Link to="/ai-email-assistant" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Email Assistant</Link>
              </div>
            </div>

            {/* IT Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">IT Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All IT Services</Link>
                <Link to="/cloud-migration" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Cloud Migration</Link>
                <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Cybersecurity</Link>
                <Link to="/devops-cicd" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">DevOps & CI/CD</Link>
                <Link to="/data-analytics" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">Data Analytics</Link>
              </div>
            </div>

            {/* Micro SAAS Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">Micro SAAS</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">All Micro SAAS</Link>
                <Link to="/ai-task-manager" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Task Manager</Link>
                <Link to="/ai-expense-tracker" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Expense Tracker</Link>
                <Link to="/ai-password-manager" className="text-gray-300 hover:text-purple-300 block py-1 text-sm">AI Password Manager</Link>
              </div>
            </div>

            <Link to="/5g-implementation" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              5G Solutions
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
=======
            {/* Mobile Services Section */}
            <div className="px-3 py-2">
              <div className="text-white font-medium text-base mb-2">Services</div>
              <div className="pl-4 space-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/ai-services" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              AI Services
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
>>>>>>> cursor/website-audit-and-update-with-deployment-c744
=======
            <div className="px-3 py-2">
              <div className="text-white font-medium text-base mb-2">Services</div>
              <div className="pl-4 space-y-1">
                <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Micro SAAS Services
                </Link>
                <Link to="/it-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  IT Services
                </Link>
                <Link to="/ai-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  AI Solutions
                </Link>
                <Link to="/cloud-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Cloud Services
                </Link>
                <Link to="/digital-transformation" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  Digital Transformation
                </Link>
                <Link to="/5g-implementation" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                  5G Implementation
                </Link>
              </div>
            </div>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d668
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}