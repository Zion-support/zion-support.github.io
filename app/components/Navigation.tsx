'use client';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, Settings, Sparkles, Rocket, Target, Layers } from 'lucide-react'
import NeonButton from './NeonButton'
import AnimatedText from './AnimatedText'

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
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Meeting Transcriber', path: '/ai-meeting-transcriber' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing', path: '/ai-email-marketing-automation' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-lg group"
            aria-label="Zion Tech Group - Go to homepage"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
              <Zap className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <AnimatedText 
                text="Zion Tech Group" 
                variant="fade" 
                color="white" 
                as="span" 
                className="text-xl font-bold group-hover:text-cyan-300 transition-colors duration-300"
              />
              <span className="text-xs text-cyan-400 font-medium">AI & IT Solutions</span>
            </div>
          </Link>

            {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-500/10 group">
              <span className="flex items-center">
                <Target className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Home
              </span>
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-500/10 group">
              <span className="flex items-center">
                <Layers className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                About
              </span>
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-white hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-500/10 group"
              >
                <Brain className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                AI Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'ai' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/30 py-3 animate-in slide-in-from-top-2 duration-300">
                  <div className="px-3 py-2 border-b border-cyan-500/20 mb-2">
                    <span className="text-cyan-400 text-sm font-semibold">AI Services</span>
                  </div>
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <Brain className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-white hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-500/10 group"
              >
                <Shield className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                IT Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-green-500/20 border border-green-500/30 py-3 animate-in slide-in-from-top-2 duration-300">
                  <div className="px-3 py-2 border-b border-green-500/20 mb-2">
                    <span className="text-green-400 text-sm font-semibold">IT Services</span>
                  </div>
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="flex items-center text-white hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-500/10 group"
              >
                <Cpu className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Micro SAAS
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'saas' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-purple-500/20 border border-purple-500/30 py-3 animate-in slide-in-from-top-2 duration-300">
                  <div className="px-3 py-2 border-b border-purple-500/20 mb-2">
                    <span className="text-purple-400 text-sm font-semibold">Micro SAAS</span>
                  </div>
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <Cpu className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5G Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('5g')}
                className="flex items-center text-white hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-500/10 group"
              >
                <Wifi className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                5G Solutions
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === '5g' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === '5g' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-yellow-500/20 border border-yellow-500/30 py-3 animate-in slide-in-from-top-2 duration-300">
                  <div className="px-3 py-2 border-b border-yellow-500/20 mb-2">
                    <span className="text-yellow-400 text-sm font-semibold">5G Solutions</span>
                  </div>
                  {fiveGServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-cyan-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-cyan-500/10 group">
              <span className="flex items-center">
                <Rocket className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Contact
              </span>
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
              className="text-gray-300 hover:text-white p-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 group"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-slate-900/95 backdrop-blur-lg rounded-2xl mt-4 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 animate-in slide-in-from-top-2 duration-300" role="menu" aria-label="Mobile navigation menu">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group" onClick={() => setIsOpen(false)}>
                <span className="flex items-center">
                  <Target className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Home
                </span>
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group" onClick={() => setIsOpen(false)}>
                <span className="flex items-center">
                  <Layers className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  About
                </span>
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
              
              <div className="pt-4 border-t border-cyan-500/20 mt-6">
                <NeonButton
                  variant="primary"
                  size="md"
                  href="/contact"
                  className="w-full flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started
                </NeonButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}