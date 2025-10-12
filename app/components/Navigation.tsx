'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, FileText, Users, Globe } from 'lucide-react'

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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const aiServices = [
    { name: 'AI Services Overview', path: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: <Brain className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'IT Services Overview', path: '/it-services', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Cloud Computing', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Database Services', path: '/database-services', icon: <Database className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Software Development', path: '/software-development', icon: <Code className="w-4 h-4" /> },
    { name: 'IT Consulting', path: '/it-consulting', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Data Center', path: '/data-center', icon: <Server className="w-4 h-4" /> },
    { name: '5G Implementation', path: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'Micro SAAS Overview', path: '/micro-saas-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Lead Scoring', path: '/ai-lead-scoring', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Code Assistant', path: '/ai-code-assistant', icon: <Code className="w-4 h-4" /> }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            
            <Link to="/about" className="text-white hover:text-purple-300 transition-colors">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-white hover:text-purple-300 transition-colors"
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                  {aiServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={closeDropdown}
                    >
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
                className="flex items-center text-white hover:text-purple-300 transition-colors"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                  {itServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={closeDropdown}
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro')}
                className="flex items-center text-white hover:text-purple-300 transition-colors"
              >
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'micro' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2">
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={closeDropdown}
                    >
                      {service.icon}
                      <span className="ml-3">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-white hover:text-purple-300 transition-colors">
              Pricing
            </Link>
            
            <Link to="/contact" className="text-white hover:text-purple-300 transition-colors">
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-purple-300 font-semibold mb-2">AI Services</div>
                <div className="pl-4 space-y-1">
                  {aiServices.slice(0, 4).map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* IT Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-purple-300 font-semibold mb-2">IT Services</div>
                <div className="pl-4 space-y-1">
                  {itServices.slice(0, 4).map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Micro SAAS Mobile */}
              <div className="px-3 py-2">
                <div className="text-purple-300 font-semibold mb-2">Micro SAAS</div>
                <div className="pl-4 space-y-1">
                  {microSaasServices.slice(0, 4).map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/pricing"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                onClick={closeDropdown}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold text-center"
                onClick={closeDropdown}
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