'use client';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, Settings } from 'lucide-react'

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
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Meeting Transcriber', path: '/ai-meeting-transcriber' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
  ];

  const itServices = [
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'DevOps', path: '/devops', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Cloud Services', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> }
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
    { name: 'AI Task Manager Pro', path: '/ai-task-manager', price: '$29/mo' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', price: '$19/mo' },
    { name: 'AI Password Manager', path: '/ai-password-manager', price: '$9/mo' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', price: '$39/mo' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', price: '$24/mo' },
    { name: 'AI Meeting Transcriber', path: '/ai-meeting-transcriber', price: '$49/mo' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager', price: '$79/mo' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation', price: '$59/mo' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', price: '$34/mo' },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', price: '$99/mo' },
    { name: 'AI Project Manager', path: '/ai-project-manager', price: '$89/mo' },
    { name: 'AI CRM Assistant', path: '/ai-crm-assistant', price: '$69/mo' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced effects */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg group relative"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">Zion Tech Group</span>
          </Link>

            {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                    >
                      <Brain className="w-4 h-4 mr-3" />
                      <span>{service.name}</span>
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2">
                  {itServices.map((service, index) => (
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-cyan-500/20 py-4">
                  <div className="px-4 py-2 border-b border-gray-700/50 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">Micro SAAS Services</h3>
                  </div>
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center">
                        <Cpu className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-2 py-1 rounded-full">
                        {service.price}
                      </span>
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

            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20" role="menu" aria-label="Mobile navigation menu">
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