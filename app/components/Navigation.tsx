'use client';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, BarChart3, Settings, Users, Globe, MessageSquare, TrendingUp, FileText, Camera, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

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
    setIsOpen(false)
  }

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Mail className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Phone className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Camera className="w-4 h-4" /> },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI CRM Assistant', path: '/ai-crm', icon: <Users className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'DevOps Solutions', path: '/devops-solutions', icon: <Code className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'API Development', path: '/api-development', icon: <Database className="w-4 h-4" /> },
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: <Users className="w-4 h-4" /> },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: <Calendar className="w-4 h-4" /> },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'AI Email Marketing', path: '/ai-email-marketing', icon: <Mail className="w-4 h-4" /> }
  ]

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ]

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Support', path: '/support' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                <Brain className="w-4 h-4 mr-1" />
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-cyan-400">AI-Powered Solutions</h3>
                    <p className="text-xs text-gray-400">Transform your business with AI</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {aiServices.map((service, index) => (
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
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                <Code className="w-4 h-4 mr-1" />
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-purple-400">IT Infrastructure</h3>
                    <p className="text-xs text-gray-400">Complete IT solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={closeDropdown}
                        className="flex items-center px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-slate-700/50 transition-colors"
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                <Cpu className="w-4 h-4 mr-1" />
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'micro' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-green-400">Micro Services</h3>
                    <p className="text-xs text-gray-400">Specialized business tools</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={closeDropdown}
                        className="flex items-center px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-slate-700/50 transition-colors"
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5G Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('5g')}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                <Wifi className="w-4 h-4 mr-1" />
                5G Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === '5g' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-cyan-500/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-semibold text-yellow-400">5G Implementation</h3>
                    <p className="text-xs text-gray-400">Next-gen connectivity</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {fiveGServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={closeDropdown}
                        className="flex items-center px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-colors"
                      >
                        {service.icon}
                        <span className="ml-3">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeDropdown}
              >
                Home
              </Link>
              
              {/* AI Services Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('ai-mobile')}
                  className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Services
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'ai-mobile' && (
                  <div className="pl-6 space-y-1">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={closeDropdown}
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
                  className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    IT Services
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'it-mobile' && (
                  <div className="pl-6 space-y-1">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={closeDropdown}
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
                  onClick={() => toggleDropdown('micro-mobile')}
                  className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Cpu className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === 'micro-mobile' && (
                  <div className="pl-6 space-y-1">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={closeDropdown}
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
                  className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Wifi className="w-4 h-4 mr-2" />
                    5G Solutions
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === '5g-mobile' && (
                  <div className="pl-6 space-y-1">
                    {fiveGServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors"
                        onClick={closeDropdown}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={closeDropdown}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center mt-4"
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