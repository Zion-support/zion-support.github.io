import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

export default function FuturisticNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
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
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI solutions',
      submenu: [
        { title: 'AI Content Generator', href: '/ai-content-generator' },
        { title: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { title: 'AI Email Assistant', href: '/ai-email-assistant' },
        { title: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { title: 'AI Automation', href: '/ai-automation' }
      ]
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: <Code className="w-4 h-4" />,
      description: 'Comprehensive IT solutions',
      submenu: [
        { title: 'Cloud Migration', href: '/cloud-migration' },
        { title: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { title: 'DevOps & CI/CD', href: '/devops-cicd' },
        { title: 'Data Analytics', href: '/data-analytics' },
        { title: 'Mobile Development', href: '/mobile-development' },
        { title: 'Web Development', href: '/web-development' }
      ]
    },
    {
      title: 'Micro SaaS',
      href: '/micro-saas-services',
      icon: <Smartphone className="w-4 h-4" />,
      description: 'Specialized software solutions'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud Computing Solutions'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: <Wifi className="w-4 h-4" />,
      description: 'Next-generation connectivity'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: <Globe className="w-4 h-4" />,
      description: 'Transform your digital presence'
    }
  ]

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Automated Reporting', path: '/ai-automated-reporting', icon: <Globe className="w-4 h-4" /> }
  ]

  return (
    <>
      <nav className="bg-black/80 backdrop-blur-lg border-b border-cyan-400/20 sticky top-0 z-50 relative">
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-pink-400/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo with neon effect */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center relative">
                <Zap className="w-5 h-5 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/5">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/5">
                About
              </Link>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ai')}
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:bg-white/5"
                >
                  AI Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'ai' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-black/90 backdrop-blur-lg rounded-lg border border-cyan-400/20 shadow-2xl py-2 z-50">
                    {aiServices.map((service, index) => (
                      <Link 
                        key={index} 
                        to={service.path} 
                        className="flex items-center px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
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
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:bg-white/5"
                >
                  IT Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'it' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-black/90 backdrop-blur-lg rounded-lg border border-cyan-400/20 shadow-2xl py-2 z-50">
                    {services[1].submenu?.map((service, index) => (
                      <Link 
                        key={index} 
                        to={service.href} 
                        className="flex items-center px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
                      >
                        <span className="ml-3">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-400 p-2 rounded-md transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg border-t border-cyan-400/20">
                <Link to="/" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                  About
                </Link>
                
                {/* AI Services Mobile */}
                <div className="px-3 py-2">
                  <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">AI Services</p>
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-300 hover:text-cyan-400 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* IT Services Mobile */}
                <div className="px-3 py-2">
                  <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">IT Services</p>
                  {services[1].submenu?.map((service, index) => (
                    <Link key={index} to={service.href} className="text-gray-300 hover:text-cyan-400 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.title}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black block px-3 py-2 rounded-md text-base font-medium hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}