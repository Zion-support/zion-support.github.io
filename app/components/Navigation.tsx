import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Smartphone, Brain, Cpu, Wifi } from 'lucide-react'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Server, Wifi } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
      description: 'Artificial Intelligence Solutions',
      color: 'text-blue-400'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Information Technology Solutions',
      color: 'text-green-400'
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: Cpu,
      description: 'Specialized software solutions',
      color: 'text-purple-400'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      description: 'Professional cloud solutions',
      color: 'text-orange-400'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: Wifi,
      description: 'Next-generation connectivity',
      color: 'text-cyan-400'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: Globe,
      description: 'Transform your digital presence',
      color: 'text-pink-400'
    }
  ]

  const additionalServices = [
    {
      title: 'Data Analytics',
      href: '/data-analytics',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'Business intelligence',
      color: 'text-cyan-400'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      icon: <Shield className="w-4 h-4" />,
      description: 'Security solutions',
      color: 'text-red-400'
    },
    {
      title: 'Consulting',
      href: '/consulting',
      icon: <Users className="w-4 h-4" />,
      description: 'Expert guidance',
      color: 'text-indigo-400'
    }
  ]

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Automated Reporting', path: '/ai-automated-reporting', icon: <Globe className="w-4 h-4" /> }
  ];

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
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Link
              to="/about"
              className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-neon-cyan/50 relative group"
            >
              About
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-white hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:shadow-neon-cyan/50 relative group"
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
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {services.slice(1).map((service, index) => (
                    <Link key={index} to={service.href} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      <service.icon className="w-4 h-4" />
                      <span className="ml-3">{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact
              Contact
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Contact
            </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-purple-600 p-2 rounded-md transition-colors"
              className="text-white hover:text-neon-cyan p-2 rounded-md transition-all duration-300 hover:bg-neon-cyan/10"
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
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
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-futuristic-dark/95 backdrop-blur-xl rounded-lg mt-2 border border-neon-cyan/30 shadow-hologram">
              <Link 
                to="/" 
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-neon-cyan/10"
                onClick={() => setIsOpen(false)}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
              >
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
                <div className="text-gray-300 font-medium mb-2">AI Services</div>
                <div className="ml-4 space-y-1">
                  <Link to="/ai-services" className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>All AI Services</Link>
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-white block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
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
                    </Link>
                  ))}
                </div>
                <div className="text-neon-pink font-semibold mb-2 text-sm uppercase tracking-wider mt-4">Additional Services</div>
                <div className="space-y-1 ml-4">
                  {additionalServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 block px-3 py-1 rounded-md text-sm transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`mr-2 ${service.color}`}>{service.icon}</div>
                      {service.title}
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
                onClick={() => setIsOpen(false)}
              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4 transition-all duration-300"
                onClick={toggleMenu}
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