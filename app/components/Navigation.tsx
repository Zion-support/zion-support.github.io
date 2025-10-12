import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, Sparkles, Rocket, Target, Lock, TrendingUp, Code2 } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
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

  const microSAASServices = [
    { name: 'AI Content Generator Pro', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" />, price: '$29/mo', popular: true },
    { name: 'AI Code Assistant', path: '/ai-code-assistant', icon: <Code2 className="w-4 h-4" />, price: '$49/mo', popular: false },
    { name: 'Smart Analytics Dashboard', path: '/ai-analytics-dashboard', icon: <Database className="w-4 h-4" />, price: '$39/mo', popular: true },
    { name: 'AI Security Monitor', path: '/ai-cybersecurity-monitor', icon: <Shield className="w-4 h-4" />, price: '$59/mo', popular: false },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', icon: <Smartphone className="w-4 h-4" />, price: '$19/mo', popular: true },
    { name: 'AI Marketing Automation', path: '/ai-marketing-automation', icon: <Target className="w-4 h-4" />, price: '$79/mo', popular: false }
  ]

  const itServices = [
    { name: 'Cloud Migration & Management', path: '/cloud-services', icon: <Cloud className="w-4 h-4" />, price: 'From $2,500/mo' },
    { name: 'Infrastructure as Code', path: '/it-services', icon: <Server className="w-4 h-4" />, price: 'From $1,800/mo' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity', icon: <Lock className="w-4 h-4" />, price: 'From $3,200/mo' },
    { name: '5G Network Implementation', path: '/5g-implementation', icon: <Wifi className="w-4 h-4" />, price: 'From $5,000/mo' },
    { name: 'Digital Transformation', path: '/digital-transformation', icon: <Globe className="w-4 h-4" />, price: 'Custom pricing' }
  ]

  const aiServices = [
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Analytics', path: '/ai-analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'AI Automation', path: '/ai-automation', icon: <Cpu className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: <Database className="w-4 h-4" /> }
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-md shadow-2xl shadow-cyan-500/10' 
        : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Zion Tech</span>
              <span className="text-xs text-cyan-400 font-medium">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link to="/" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
              About
            </Link>

            {/* Micro SAAS Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('micro')}
                className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 flex items-center"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'micro' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-400/20 py-4 z-50">
                  <div className="px-4 pb-2 border-b border-cyan-400/20">
                    <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">AI-Powered Micro SAAS</h3>
                    <p className="text-gray-400 text-xs">Affordable solutions for every business</p>
                  </div>
                  <div className="py-2">
                    {microSAASServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-white transition-all duration-300 group">
                        <div className="flex items-center">
                          <span className="text-cyan-400 mr-3 group-hover:scale-110 transition-transform">{service.icon}</span>
                          <span className="font-medium">{service.name}</span>
                          {service.popular && (
                            <span className="ml-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
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
                className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 flex items-center"
              >
                <Server className="w-4 h-4 mr-2" />
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-emerald-500/20 border border-emerald-400/20 py-4 z-50">
                  <div className="px-4 pb-2 border-b border-emerald-400/20">
                    <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Enterprise IT Solutions</h3>
                    <p className="text-gray-400 text-xs">Scalable solutions for growing businesses</p>
                  </div>
                  <div className="py-2">
                    {itServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:bg-emerald-500/10 hover:text-white transition-all duration-300 group">
                        <div className="flex items-center">
                          <span className="text-emerald-400 mr-3 group-hover:scale-110 transition-transform">{service.icon}</span>
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="text-emerald-400 font-semibold text-xs">{service.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 flex items-center"
              >
                <Brain className="w-4 h-4 mr-2" />
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-400/20 py-4 z-50">
                  <div className="px-4 pb-2 border-b border-purple-400/20">
                    <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-wider">AI Solutions</h3>
                    <p className="text-gray-400 text-xs">Advanced artificial intelligence</p>
                  </div>
                  <div className="py-2">
                    {aiServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-white transition-all duration-300 group">
                        <span className="text-purple-400 mr-3 group-hover:scale-110 transition-transform">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
              <Link to="/" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cyan-500/10" onClick={() => setIsOpen(false)}>
                About
              </Link>
              
              {/* Micro SAAS Services Mobile */}
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Micro SAAS Services</p>
                <div className="space-y-2">
                  {microSAASServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-cyan-500/10 block px-3 py-2 rounded-lg text-sm transition-all duration-300" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center">
                        <span className="text-cyan-400 mr-3">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                        {service.popular && (
                          <span className="ml-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-cyan-400 font-semibold text-xs">{service.price}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services Mobile */}
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">IT Services</p>
                <div className="space-y-2">
                  {itServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-emerald-500/10 block px-3 py-2 rounded-lg text-sm transition-all duration-300" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center">
                        <span className="text-emerald-400 mr-3">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <span className="text-emerald-400 font-semibold text-xs">{service.price}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* AI Services Mobile */}
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">AI Services</p>
                <div className="space-y-2">
                  {aiServices.map((service, index) => (
                    <Link key={index} to={service.path} className="flex items-center text-gray-300 hover:text-white hover:bg-purple-500/10 block px-3 py-2 rounded-lg text-sm transition-all duration-300" onClick={() => setIsOpen(false)}>
                      <span className="text-purple-400 mr-3">{service.icon}</span>
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white block px-4 py-3 rounded-lg text-base font-medium hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 text-center shadow-lg shadow-cyan-500/25"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}