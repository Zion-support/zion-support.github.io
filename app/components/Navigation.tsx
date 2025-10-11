import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Brain, Cloud, Shield, Globe, Database, Code, Smartphone, Cpu, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: Zap,
      description: 'Artificial Intelligence Solutions'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Information Technology Solutions'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Smartphone,
      description: 'Micro Software as a Service'
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
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
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

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
=======
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <IconComponent className="w-5 h-5 text-purple-600 mr-3" />
                            <div>
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
=======
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
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold">All AI Services</Link>
                    {aiServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
                  </div>
                )}
              </div>

<<<<<<< HEAD
              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
=======
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
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold">All IT Services</Link>
                    {itServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
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
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
<<<<<<< HEAD

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

              <Link to="/5g-implementation" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                5G Solutions
              </Link>
=======
              
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
                Contact
              </Link>
=======
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
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
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
            </div>
            
            <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-gray-900 hover:text-purple-600 p-2"
=======
              className="text-white hover:text-purple-300 inline-flex items-center justify-center p-2 rounded-md transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
              className="text-white hover:text-purple-300 p-2 rounded-md transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
=======
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link 
                to="/" 
                className="block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
<<<<<<< HEAD
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
=======
              <Link 
                to="/about" 
                className="block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
<<<<<<< HEAD
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="text-gray-600 hover:text-purple-600 block px-3 py-2 text-sm font-medium flex items-center"
                          onClick={() => {
                            setIsOpen(false)
                            setIsServicesOpen(false)
                          }}
                        >
                          <IconComponent className="w-4 h-4 text-purple-600 mr-2" />
                          {service.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
=======
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20 max-h-96 overflow-y-auto">
            <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            
            {/* AI Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>All AI Services</Link>
                {aiServices.slice(0, 4).map((service, index) => (
                  <Link key={index} to={service.path} className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
              </div>

<<<<<<< HEAD
              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
=======
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-medium text-base mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center text-gray-300 hover:text-purple-300 px-2 py-1 rounded text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.icon}
                      <span className="ml-2">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
<<<<<<< HEAD
            </div>
=======
            {/* IT Services Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">IT Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>All IT Services</Link>
                {itServices.slice(0, 4).map((service, index) => (
                  <Link key={index} to={service.path} className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro SAAS Mobile */}
            <div className="px-3 py-2">
              <div className="text-white font-medium mb-2">Micro SAAS</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-services" className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>All Micro SAAS</Link>
                {microSaasServices.slice(0, 4).map((service, index) => (
                  <Link key={index} to={service.path} className="text-gray-300 hover:text-purple-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                    {service.name}
=======
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg rounded-lg mt-2">
              <Link to="/" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="text-white px-3 py-2 text-base font-medium">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center text-gray-300 hover:text-white pl-6 pr-3 py-2 rounded-md text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.icon}
                    <span className="ml-3">{service.name}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
                  </Link>
                ))}
              </div>
              
              <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
            </div>
<<<<<<< HEAD

            <Link to="/5g-implementation" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              5G Solutions
            </Link>
            <Link to="/contact" className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
          </div>
        )}
      </div>
    </nav>
  )
}
