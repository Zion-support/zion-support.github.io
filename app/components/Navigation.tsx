import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Server, Wifi, Rocket, Sparkles, Home, DollarSign } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator', icon: <Brain className="w-4 h-4" /> },
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
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions', icon: <Cpu className="w-4 h-4" /> }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager', icon: <Brain className="w-4 h-4" /> },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Password Manager', path: '/ai-password-manager', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Health Tracker', path: '/ai-health-tracker', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Carbon Tracker', path: '/ai-carbon-footprint-tracker', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Smart Home Manager', path: '/ai-smart-home-energy-manager', icon: <Home className="w-4 h-4" /> },
    { name: 'AI Finance Optimizer', path: '/ai-personal-finance-optimizer', icon: <DollarSign className="w-4 h-4" /> }
  ]

  return (
    <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 sticky top-0 z-50 shadow-2xl shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Zion Tech</span>
              <div className="text-xs text-cyan-400 font-medium">Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-300 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ai')}
                className="text-gray-300 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Brain className="w-4 h-4 mr-2" />
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 py-4 z-50">
                  <div className="px-4 py-2 border-b border-cyan-500/20">
                    <Link to="/ai-services" className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                      All AI Services
                    </Link>
                  </div>
                  <div className="py-2">
                    {aiServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                        <div className="text-cyan-400 group-hover:text-cyan-300 mr-3">{service.icon}</div>
                        <span>{service.name}</span>
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
                className="text-gray-300 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Server className="w-4 h-4 mr-2" />
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 py-4 z-50">
                  <div className="px-4 py-2 border-b border-cyan-500/20">
                    <Link to="/it-services" className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                      All IT Services
                    </Link>
                  </div>
                  <div className="py-2">
                    {itServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                        <div className="text-cyan-400 group-hover:text-cyan-300 mr-3">{service.icon}</div>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('saas')}
                className="text-gray-300 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Micro SAAS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 py-4 z-50">
                  <div className="px-4 py-2 border-b border-cyan-500/20">
                    <Link to="/micro-saas-services" className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                      All Micro SAAS
                    </Link>
                  </div>
                  <div className="py-2">
                    {microSaasServices.map((service, index) => (
                      <Link key={index} to={service.path} className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                        <div className="text-cyan-400 group-hover:text-cyan-300 mr-3">{service.icon}</div>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/5g-implementation" className="text-gray-300 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center">
              <Wifi className="w-4 h-4 mr-2" />
              5G Solutions
            </Link>
            
            <Link to="/contact" className="text-gray-300 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-300 p-2 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg rounded-2xl mt-2 border border-cyan-500/20">
              <Link to="/" className="text-gray-300 hover:text-cyan-300 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-300 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300" onClick={() => setIsOpen(false)}>
                About
              </Link>
              
              {/* AI Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Services
                </div>
                <div className="ml-6 space-y-1">
                  <Link to="/ai-services" className="text-gray-400 hover:text-cyan-300 block py-1 text-sm font-medium" onClick={() => setIsOpen(false)}>All AI Services</Link>
                  {aiServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* IT Services Mobile */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2 flex items-center">
                  <Server className="w-4 h-4 mr-2" />
                  IT Services
                </div>
                <div className="ml-6 space-y-1">
                  <Link to="/it-services" className="text-gray-400 hover:text-cyan-300 block py-1 text-sm font-medium" onClick={() => setIsOpen(false)}>All IT Services</Link>
                  {itServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Micro SAAS Mobile */}
              <div className="px-3 py-2">
                <div className="text-cyan-400 font-medium mb-2 flex items-center">
                  <Rocket className="w-4 h-4 mr-2" />
                  Micro SAAS
                </div>
                <div className="ml-6 space-y-1">
                  <Link to="/micro-saas-services" className="text-gray-400 hover:text-cyan-300 block py-1 text-sm font-medium" onClick={() => setIsOpen(false)}>All Micro SAAS</Link>
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link key={index} to={service.path} className="text-gray-400 hover:text-cyan-300 block py-1 text-sm" onClick={() => setIsOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/5g-implementation" className="text-gray-300 hover:text-cyan-300 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300" onClick={() => setIsOpen(false)}>
                5G Solutions
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-300 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-3 py-3 rounded-xl text-base font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center mt-4 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}