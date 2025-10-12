import React, { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
<<<<<<< HEAD
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
=======
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'
=======
import { Menu, X, ChevronDown, Cloud, Code, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
=======
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
  }

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Zap className="w-4 h-4" />,
      description: 'AI-powered solutions for your business'
=======
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      icon: Brain,
      description: 'Artificial Intelligence Solutions'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
      icon: Zap,
      description: 'Advanced Artificial Intelligence Solutions',
      subServices: [
        { title: 'AI Content Generation', href: '/ai-content-generation' },
        { title: 'AI Analytics & BI', href: '/ai-analytics' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { title: 'Computer Vision', href: '/ai-computer-vision' },
        { title: 'Natural Language Processing', href: '/ai-natural-language-processing' }
      ]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Code,
      description: 'Comprehensive Technology Solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/it-services' },
        { title: 'Cybersecurity', href: '/it-services' },
        { title: 'Network Infrastructure', href: '/it-services' },
        { title: 'Database Management', href: '/it-services' },
        { title: 'DevOps & CI/CD', href: '/it-services' },
        { title: 'IT Support', href: '/it-services' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas',
      icon: Smartphone,
      description: 'AI-Powered Business Tools',
      subServices: [
        { title: 'AI Content Writer Pro', href: '/micro-saas/ai-content-writer-pro' },
        { title: 'AI Analytics Dashboard', href: '/micro-saas/ai-analytics-dashboard' },
        { title: 'AI Email Marketing', href: '/micro-saas/ai-email-marketing' },
        { title: 'AI CRM Assistant', href: '/micro-saas/ai-crm-assistant' },
        { title: 'AI Social Media Manager', href: '/micro-saas/ai-social-scheduler' },
        { title: 'AI Expense Tracker', href: '/micro-saas/ai-expense-tracker' }
      ]
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud migration and management'
=======
      icon: Cloud,
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas',
      icon: Smartphone,
      description: 'Micro Software as a Service'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
      icon: Cloud,
      description: 'Cloud Computing Solutions',
      subServices: [
        { title: 'Cloud Migration', href: '/cloud-services' },
        { title: 'Cloud Infrastructure', href: '/cloud-services' },
        { title: 'Cloud Security', href: '/cloud-services' },
        { title: 'Multi-Cloud Strategy', href: '/cloud-services' },
        { title: 'Cloud Backup', href: '/cloud-services' },
        { title: 'Cloud Monitoring', href: '/cloud-services' }
      ]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-generation 5G solutions'
=======
      icon: Wifi,
      description: '5G Network Solutions'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
      icon: Globe,
      description: 'Next-Generation Network Solutions',
      subServices: [
        { title: '5G Network Design', href: '/5g-implementation' },
        { title: 'IoT Integration', href: '/5g-implementation' },
        { title: 'Edge Computing', href: '/5g-implementation' },
        { title: '5G Security', href: '/5g-implementation' },
        { title: 'Network Optimization', href: '/5g-implementation' },
        { title: '5G Testing', href: '/5g-implementation' }
      ]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Code className="w-4 h-4" />,
      description: 'Transform your digital presence'
=======
      icon: Database,
      description: 'Business Digitalization',
      subServices: [
        { title: 'Process Automation', href: '/digital-transformation' },
        { title: 'Digital Workforce', href: '/digital-transformation' },
        { title: 'Customer Experience', href: '/digital-transformation' },
        { title: 'Data Strategy', href: '/digital-transformation' },
        { title: 'Change Management', href: '/digital-transformation' },
        { title: 'Technology Consulting', href: '/digital-transformation' }
      ]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
    }
=======
      icon: Wifi,
      description: '5G Network Implementation'
    }
  ]

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
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
  ]

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
=======
      icon: Cpu,
      description: 'Digital Business Transformation'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
=======
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
<<<<<<< HEAD
                onClick={toggleServices}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
=======
                onClick={() => toggleDropdown('ai')}
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
<<<<<<< HEAD
              
              {isServicesOpen && (
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
=======
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              
              <Link to="/about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="grid grid-cols-2 gap-4 p-4">
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
<<<<<<< HEAD
                          className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="flex-shrink-0 text-blue-600">
                            {service.icon}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{service.title}</p>
                            <p className="text-xs text-gray-500">{service.description}</p>
=======
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <service.icon className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                              {service.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {service.description}
                            </p>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                          </div>
                        </Link>
                      ))}
                    </div>
=======
                <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2 p-4">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <div key={service.href} className="group">
                          <Link
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <IconComponent className="w-5 h-5 text-purple-600 mr-3" />
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                          {service.subServices && (
                            <div className="ml-8 mt-2 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              {service.subServices.slice(0, 3).map((subService, index) => (
                                <Link
                                  key={index}
                                  to={subService.href}
                                  className="block text-sm text-gray-600 hover:text-purple-600 px-2 py-1 rounded hover:bg-gray-50"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {subService.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
                  </div>
<<<<<<< HEAD
=======
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold">All AI Services</Link>
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
=======
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
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 font-semibold">All IT Services</Link>
                  {itServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
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
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
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

            <Link to="/5g-implementation" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              5G Solutions
            </Link>
            
            <Link to="/contact" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
                )}
              </div>

              <Link to="/contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-gray-300 hover:text-white p-2 rounded-md"
=======
              className="text-gray-900 hover:text-purple-600 p-2 rounded-md transition-colors"
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
              className="text-gray-300 hover:text-white p-2 rounded-md"
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              
<<<<<<< HEAD
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <p className="text-gray-400 text-sm font-medium mb-2">Services</p>
                <div className="space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      <div className="flex-shrink-0 text-blue-400 mr-3">
                        {service.icon}
                      </div>
                      <div>
                        <p className="font-medium">{service.title}</p>
                        <p className="text-xs text-gray-400">{service.description}</p>
                      </div>
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
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
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
                    </Link>
                  ))}
                </div>
=======
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <div key={service.href}>
                          <Link
                            to={service.href}
                            className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-medium flex items-center"
                            onClick={() => {
                              setIsOpen(false)
                              setIsServicesOpen(false)
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-blue-400 mr-2" />
                            {service.title}
                          </Link>
                          {service.subServices && (
                            <div className="pl-6 space-y-1">
                              {service.subServices.slice(0, 2).map((subService, index) => (
                                <Link
                                  key={index}
                                  to={subService.href}
                                  className="text-gray-400 hover:text-white block px-3 py-1 text-xs"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setIsServicesOpen(false)
                                  }}
                                >
                                  • {subService.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
              </div>

<<<<<<< HEAD
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
=======
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

              <Link to="/5g-implementation" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                5G Solutions
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center mt-4"
=======
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="pt-2">
              <div className="text-gray-300 px-3 py-2 text-base font-medium">
                Services
              </div>
              <div className="pl-6 space-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}