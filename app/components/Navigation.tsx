'use client';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3 } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const aiServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', price: '$299/mo' },
    { name: 'AI Chatbot Enterprise', path: '/ai-chatbot-enterprise', price: '$499/mo' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', price: '$399/mo' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', price: '$199/mo' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', price: '$299/mo' },
    { name: 'AI Automation Suite', path: '/ai-automation', price: '$599/mo' },
    { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', price: '$799/mo' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', price: '$2,999/mo' },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite', price: '$1,299/mo' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', price: '$899/mo' }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" />, price: 'From $5,000' },
    { name: 'DevOps Solutions', path: '/devops-solutions', icon: <Server className="w-4 h-4" />, price: 'From $3,500' },
    { name: 'Cybersecurity Services', path: '/cybersecurity', icon: <Shield className="w-4 h-4" />, price: 'From $2,500' },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" />, price: 'From $8,000' },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" />, price: 'From $5,000' },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" />, price: 'From $2,000' },
    { name: 'API Development', path: '/api-development', icon: <Database className="w-4 h-4" />, price: 'From $4,000' },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" />, price: 'From $1,500' }
  ];

  const fiveGServices = [
    { name: '5G Implementation', path: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Server className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager Pro', path: '/ai-task-manager', price: '$99/mo' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', price: '$49/mo' },
    { name: 'AI Password Manager', path: '/ai-password-manager', price: '$29/mo' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', price: '$79/mo' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', price: '$39/mo' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', price: '$59/mo' },
    { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', price: '$199/mo' },
    { name: 'AI CRM Assistant', path: '/ai-crm-assistant', price: '$149/mo' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="group flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <div className="relative w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors relative group">
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center">
                        <Brain className="w-4 h-4 mr-3" />
                        <span className="group-hover:text-cyan-400">{service.name}</span>
                      </div>
                      <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center">
                        {service.icon}
                        <span className="ml-3 group-hover:text-cyan-400">{service.name}</span>
                      </div>
                      <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center">
                        <Cpu className="w-4 h-4 mr-3" />
                        <span className="group-hover:text-cyan-400">{service.name}</span>
                      </div>
                      <span className="text-xs text-cyan-400 font-medium">{service.price}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5G Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('5g')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                5G Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === '5g' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {fiveGServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors relative group">
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2" role="menu" aria-label="Mobile navigation menu">
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('ai-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    <span>AI Services</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'ai-mobile' && (
                  <div className="pl-6 space-y-1">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('it-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    <span>IT Services</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'it-mobile' && (
                  <div className="pl-6 space-y-1">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Micro SAAS Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('saas-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Cpu className="w-4 h-4 mr-2" />
                    <span>Micro SAAS</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'saas-mobile' && (
                  <div className="pl-6 space-y-1">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5G Services Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('5g-mobile')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Wifi className="w-4 h-4 mr-2" />
                    <span>5G Solutions</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === '5g-mobile' && (
                  <div className="pl-6 space-y-1">
                    {fiveGServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
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