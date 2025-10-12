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
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const aiServices = [
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Settings className="w-4 h-4" /> },
    { name: 'AI Computer Vision', path: '/ai-computer-vision', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> }
  ]

  const itServices = [
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Mobile Development', path: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'DevOps', path: '/devops', icon: <Server className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Cloud Services', path: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield className="w-4 h-4" /> }
  ]

  const fiveGServices = [
    { name: '5G Implementation', path: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Server className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Smartphone className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications', icon: <Smartphone className="w-4 h-4" /> }
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
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
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

            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile AI Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">AI Services</div>
                <div className="pl-4 space-y-1">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile IT Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">IT Services</div>
                <div className="pl-4 space-y-1">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile 5G Services */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2">5G Solutions</div>
                <div className="pl-4 space-y-1">
                  {fiveGServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}