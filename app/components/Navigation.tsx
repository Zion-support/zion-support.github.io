import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi } from 'lucide-react'

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
      name: 'AI Services',
      icon: <Brain className="w-4 h-4" />,
      path: '/ai-services',
      description: 'AI-powered solutions for your business'
    },
    {
      name: 'IT Services',
      icon: <Cpu className="w-4 h-4" />,
      path: '/it-services',
      description: 'Complete IT infrastructure solutions'
    },
    {
      name: 'Micro SAAS',
      icon: <Smartphone className="w-4 h-4" />,
      path: '/micro-saas-services',
      description: 'Affordable micro applications'
    },
    {
      name: 'Cloud Services',
      icon: <Cloud className="w-4 h-4" />,
      path: '/cloud-services',
      description: 'Professional cloud solutions'
    },
    {
      name: '5G Implementation',
      icon: <Wifi className="w-4 h-4" />,
      path: '/5g-implementation',
      description: 'Next-generation connectivity'
    },
    {
      name: 'Digital Transformation',
      icon: <Zap className="w-4 h-4" />,
      path: '/digital-transformation',
      description: 'Transform your business digitally'
    }
  ]

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Email Assistant', path: '/ai-email-assistant', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Automation Suite', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI 3D Generation', path: '/ai-3d-generation', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', icon: <Brain className="w-4 h-4" /> }
  ]

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
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg z-50 border border-white/20">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 mr-3 text-cyan-600 group-hover:text-purple-600 transition-colors">
                              {service.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
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
              
              {/* Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-sm transition-colors flex items-center"
                      onClick={toggleMenu}
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

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
